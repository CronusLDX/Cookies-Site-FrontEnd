export interface CollabInfo {
  name: string;
  profileImage: string;
  description: string;
}

export interface FaqInfo {
  question: string;
  answer: string;
}

export interface CarrinhoInfo {
  id: number;
  title: string;
  image: string;
  description?: string;
  price: number;
  quantity: number;
}

export interface OrderList {
  id: number;
  title: string;
  description?: string;
  price: number;
  quantity: number;
  buyingDate: Date;
}

export interface CartContextType {
  data: CarrinhoInfo[];
  sendToCart: (data: CarrinhoInfo) => void;
  removeFromCart: (index: number) => void;
  handleAddQuantity: (index: number) => void;
  handleRemoveQuantity: (index: number) => void;
  handleFinishOrder: () => void;
  handleTotalCartOrder: () => number;
}
