import { createContext, ReactNode, useContext, useState } from 'react';
import { PopUpContextType } from '../entities/Interfaces';

export const PopUpContext = createContext<PopUpContextType | null>(null);

export const PopUpProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [purchasePopUp, setPurchasePopUp] = useState(false);
  const [removePopUp, setRemovePopUp] = useState(false);
  const [emptyCartErrorPopUp, setEmptyCartErrorPopUp] = useState(false);

  const showPurchasePopUp = () => {
    setPurchasePopUp(true);
  };
  const hidePurchasePopUp = () => {
    setPurchasePopUp(false);
  };
  const showRemovePopUp = () => {
    setRemovePopUp(true);
  };

  const hideRemovePopUp = () => {
    setRemovePopUp(false);
  };
  const showCartError = () => {
    setEmptyCartErrorPopUp(true);
  };
  const hideCartError = () => {
    setEmptyCartErrorPopUp(false);
  };

  return (
    <PopUpContext.Provider
      value={{
        purchasePopUp,
        removePopUp,
        emptyCartErrorPopUp,
        showPurchasePopUp,
        hidePurchasePopUp,
        showRemovePopUp,
        hideRemovePopUp,
        showCartError,
        hideCartError,
      }}
    >
      {children}
    </PopUpContext.Provider>
  );
};

export const UsePopUp = () => {
  const context = useContext(PopUpContext);

  if (!context) {
    throw new Error('usePopUp must be used within a PopUpProvider');
  }

  return context;
};
