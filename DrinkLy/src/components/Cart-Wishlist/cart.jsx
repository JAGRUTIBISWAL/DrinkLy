import { userDataContext } from "../userData/userData";
import { useContext, useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

let Cart = () => {
  let [wishlistData, setWishlistData, cartData, setCartData] =
    useContext(userDataContext);

  const total = cartData.reduce((acc, curr) => {
    return acc + curr.price;
  }, 0);
  const totalFinal = total.toFixed(2);

  function handleDelete(deleteCartIndex) {
    setCartData((prev) => {
      return prev.filter((drink) => {
        drink.id === deleteCartIndex
          ? toast.error(`${drink.name} removed from the Cart`)
          : null;
        if (drink.id !== deleteCartIndex) {
          return true;
        }
      });
    });
  }

  /*  
      setWishlistData(prev=>prev.filter((drink,index)=>{
        if(deleteWishlistIndex!==index){
          return true
        }
      }))*/ // understand this code and the diffrence between this and the code above and why here
  //even without adding return filter is working its those curly braces that are making the difference
  //its just that setCartData wouldt know what to return within the curly braces so we have to add return before the filter

  return (
    <div className="min-h-screen bg-[#232323]">
      <div
        className=" md:grid md:grid-cols-2 lg:grid-cols-3 emd:grid-cols-2 mb-[10vh] esm:grid-cols-1 justify-center items-center  text-white"
        key={Math.floor(Math.random() * 2000)}
      >
        {cartData?.map((drink) => {
          return (
            <div
              className="flex flex-col justify-center items-center "
              key={Math.floor(Math.random() * 1000)}
            >
              <div
                className=" md:w-fit esm:w-[70vw] flex emd:justify-start   esm:justify-between
            m-4 border-[1px] border-[#858585] rounded-lg  shadow-sm hover:shadow overflow-hidden"
              >
                <img src={`${drink.image}`} className="w-[22vw]"></img>

                <div className="flex flex-col esm:justify-between emd:justify-start lg:justify-center items-center emd:ml-14 md:ml-0 emd:mt-5 lg:mt-0">
                  <p className="text-2xl text-center">{drink.name}</p>
                  <p className="">${drink.price}</p>
                  <button
                    onClick={() => handleDelete(drink.id)}
                    className="bg-[#d84848] text-white rounded-lg p-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex justify-evenly fixed bottom-0 z-10 h-10v w-full bg-white">
        <p className="text-3xl text-center">Total: ${totalFinal}</p>
        <button
          id="button"
          className="border-2 border-black px-2 py-0 h-[70%] mt-2 hover:bg-black hover:text-white transition-all duration-300 ease-in-out"
        >
          Check Out
        </button>
      </div>
      <Toaster />
    </div>
  );
};
export default Cart;
