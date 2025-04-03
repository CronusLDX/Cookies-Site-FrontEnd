import React from 'react';
import { UsePopUp } from '../../contexts/PopUpContext';
import PurchasePopUp from './PurchasePopUp';
import RemovePopUp from './RemovePopUp';
import EmptyCartError from './EmptyCartError';
import AddItemToCart from './AddItemToCart';

const PopUpSection: React.FC = () => {
  const { purchasePopUp, removePopUp, emptyCartErrorPopUp, addItemCartPopUp } =
    UsePopUp();
  return (
    <section className="w-full flex justify-end items-center h-full m-auto ">
      {purchasePopUp && <PurchasePopUp />}
      {removePopUp && <RemovePopUp />}
      {emptyCartErrorPopUp && <EmptyCartError />}
      {addItemCartPopUp && <AddItemToCart />}
    </section>
  );
};

export default PopUpSection;
