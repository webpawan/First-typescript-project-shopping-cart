import { ReactNode, createContext, useContext, useState } from "react";

type ShoopingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  IncreaseCartQuantity: (id: number) => void;
  DecreaseCartQuantity: (id: number) => void;
  RemoveFromCart: (id: number) => void;
};

const ShoopingCartContext = createContext({} as ShoppingCartContext);

export function useShoopingCart() {
  return useContext(ShoopingCartContext);
}

export function ShoopingCartProvider({ children }: ShoopingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function IncreaseCartQuantity(id: number) {
    setCartItems((curItems) => {
      if (curItems.find((item) => item.id === id) == null) {
        return [...curItems, { id, quantity: 1 }];
      } else {
        return curItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function DecreaseCartQuantity(id: number) {
    setCartItems((curItems) => {
      if (curItems.find((item) => item.id === id)?.quantity === 1) {
        return curItems.filter((item) => item.id !== id);
      } else {
        return curItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  function RemoveFromCart(id: number) {
    setCartItems((cartItem) => {
      return cartItem.filter((item) => item.id !== id);
    });
  }

  return (
    <ShoopingCartContext.Provider
      value={{
        getItemQuantity,
        DecreaseCartQuantity,
        IncreaseCartQuantity,
        RemoveFromCart,
      }}
    >
      {children}
    </ShoopingCartContext.Provider>
  );
}
