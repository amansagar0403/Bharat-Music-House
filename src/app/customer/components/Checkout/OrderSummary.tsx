import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/CartItem";

const OrderSummary = () => {
  return (
    <div className="text-white">
      <div className="p-5 border rounded-md mb-10">
        <AddressCard />
      </div>
      <div className="page">
        <div className="innerpage">
          <div className="flex flex-col lg:flex-row relative">
            <div className="flex-1">
              {[1, 1, 1, 1].map((item) => (
                <CartItem />
              ))}
            </div>
            <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 lg:w-1/3">
              <div className="border text-white rounded-sm p-10">
                <p className="uppercase font-bold opacity-60 pb-4">
                  Price Details
                </p>
                <hr />
                <div className="space-y-3 font-semibold">
                  <div className="flex justify-between pt-3 text-white">
                    <span>Price</span>
                    <span>RS 3546</span>
                  </div>
                  <div className="flex justify-between pt-3 text-white">
                    <span>Discount</span>
                    <span className="text-green-600">RS 3546</span>
                  </div>
                  <div className="flex justify-between pt-3 text-white">
                    <span>Delivery Charge</span>
                    <span className="text-green-600">RS 3546</span>
                  </div>
                  <hr />
                  <div className="flex justify-between pt-3 text-white font-bold">
                    <span>Total Amount</span>
                    <span>RS 3546</span>
                  </div>
                </div>
                <button
                  type="submit"
                  className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-red-600 px-8 py-3 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
