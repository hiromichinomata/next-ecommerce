"use client";

import { useState } from "react";

const Add = () => {
  const [quantity, setQuantity] = useState(1);

  // // TEMPORARY
  // const stock = 4;

  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-medium">Choose a Quantity</h4>
      <div className="flex justify-between">
        <div className="flex items-center gap-4">
          <div className="bg-gray-100 py-2 px-4 rounded-3xl flex items-center justify-between w-32">
            <button>
              -
            </button>
            {quantity}
            <button>
              +
            </button>
          </div>
            <div className="text-xs">Product is out of stock</div>
        </div>
        <button
          disabled={false}
          className="w-36 text-sm rounded-3xl ring-1 ring-lama text-lama py-2 px-4 hover:bg-lama hover:text-white disabled:cursor-not-allowed disabled:bg-pink-200 disabled:ring-0 disabled:text-white disabled:ring-none"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Add;
