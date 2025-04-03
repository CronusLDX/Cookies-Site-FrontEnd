import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';
import {
  CarrinhoInfo,
  CartContextType,
  OrderList,
} from '../entities/Interfaces';
import { z } from 'zod';

import { UsePopUp } from './PopUpContext';

export const CartContext = createContext<CartContextType | null>(null);

const taskSchema = z.object({
  id: z.number(),
  title: z.string(),
  image: z.string(),
  description: z.string(),
  price: z.number(),
  quantity: z.number(),
});

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const {
    showRemovePopUp,
    hideRemovePopUp,
    showPurchasePopUp,
    hidePurchasePopUp,
    showCartError,
    hideCartError,
  } = UsePopUp();

  const [data, setData] = useState<CarrinhoInfo[]>(() => {
    const storedData = localStorage.getItem('cartData');
    return storedData ? JSON.parse(storedData) : [];
  });

  const [orderList, setOrderList] = useState<OrderList[]>(() => {
    const storagedOrder = localStorage.getItem('orderList');
    return storagedOrder ? JSON.parse(storagedOrder) : [];
  });

  const [groupOrderedList, setGroupOrderedList] = useState<
    {
      date: Date;
      orders: OrderList[];
      total: number;
    }[]
  >(() => {
    const storedGroupOrderedList = localStorage.getItem('groupOrderedList');
    return storedGroupOrderedList
      ? JSON.parse(storedGroupOrderedList).map(
          (item: { date: string; orders: OrderList[] }) => ({
            ...item,
            date: new Date(item.date),
          })
        )
      : [];
  });

  useEffect(() => {
    localStorage.setItem('cartData', JSON.stringify(data));
  }, [data]);

  useEffect(() => {
    localStorage.setItem('orderList', JSON.stringify(orderList));
  }, [orderList]);

  useEffect(() => {
    localStorage.setItem('groupOrderedList', JSON.stringify(groupOrderedList));
  }, [groupOrderedList]);

  const handleFinishOrder = () => {
    const finalOrderList: OrderList[] = data.map(({ image, ...rest }) => {
      return {
        ...rest,
        buyingDate: new Date(),
      };
    });
    if (finalOrderList.length > 0) {
      sendToPay(finalOrderList);
      showPurchasePopUp();
    } else {
      showCartError();
    }
    setData([]);
    setTimeout(() => {
      hidePurchasePopUp();
      hideCartError();
    }, 2000);
  };

  const handleAddQuantity = (id: number) => {
    setData(prevData => {
      return prevData.map(item => {
        if (item.id === id) {
          const result = { ...item, quantity: (item.quantity || 0) + 1 };
          return result;
        } else {
          return item;
        }
      });
    });
  };

  const handleRemoveQuantity = (id: number) => {
    setData(prevData => {
      return prevData.map(item => {
        if (item.id === id && item.quantity > 1) {
          const result = { ...item, quantity: item.quantity - 1 };
          return result;
        } else {
          return item;
        }
      });
    });
  };

  const handleTotalCartOrder = () => {
    const result: number = data.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    return result;
  };

  const sendToCart = (data: CarrinhoInfo) => {
    const newData = { ...data };
    const result = taskSchema.safeParse(newData);
    if (result.success) {
      setData((prevData: any) => {
        const exisitingItem = prevData.find((item: any) => item.id === data.id);
        const result = exisitingItem ? prevData : [...prevData, newData];
        return result;
      });
    } else {
      console.error('Validation error:', result.error.format());
    }
  };

  const sendToPay = (order: OrderList[]) => {
    const orderFilteredByDate = order.reduce((acc, item) => {
      const date = new Date(item.buyingDate);

      const existingGroup = acc.find(
        group => group.date.getTime() === date.getTime()
      );
      if (existingGroup) {
        existingGroup.orders.push(item);
        existingGroup.total += item.price * item.quantity;
      } else {
        acc.push({
          date,
          orders: [item],
          total: item.price * item.quantity,
          orderID: Date.now(),
        });
      }
      return acc;
    }, [] as { date: Date; orders: OrderList[]; total: number; orderID: number }[]);

    setGroupOrderedList(prevGroupList => {
      const updatedGroupList = [...prevGroupList, ...orderFilteredByDate];

      const uniqueGroupList = updatedGroupList.reduce((acc, current) => {
        const x = acc.find(
          item => item.date.getTime() === current.date.getTime()
        );
        if (!x) {
          return acc.concat([current]);
        } else {
          (x.orders = [...x.orders, ...current.orders]),
            (x.total += current.total);
          return acc;
        }
      }, [] as { date: Date; orders: OrderList[]; total: number }[]);

      return uniqueGroupList;
    });
    setOrderList(prevOrders => [...prevOrders, ...order]);
  };

  const removeFromCart = (index: number) => {
    setData(prevData => prevData.filter(d => d.id !== index));
    showRemovePopUp();
    setTimeout(() => hideRemovePopUp(), 2000);
  };

  return (
    <CartContext.Provider
      value={{
        data,
        sendToCart,
        removeFromCart,
        handleAddQuantity,
        handleRemoveQuantity,
        handleFinishOrder,
        handleTotalCartOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
