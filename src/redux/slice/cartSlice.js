// 장바구니 (리덕스 툴킷)
import { createSlice } from "@reduxjs/toolkit";

// 초기값
const initialState = {
  cartId: 0,
  cartlist: [],
};

const cartSlice = createSlice({
  name: "cartlist",
  initialState,
  reducers: {
    // 장바구니에 담기
    inputCart: (state, action) => {
      const newCartItem = {
        cartId: state.cartId,
        productId: action.payload.productId,
        quantity: 1,
        totalPay: action.payload.productPrice,
      };
      state.cartId++;
      const newCartArray = state.cartlist.concat(newCartItem);
      state.cartlist = newCartArray;
    },
    // 장바구니 상품별 수량 : 1증가, 1감소, 직접입력 (수량 최소 1, 최대 100)
    decreaseQauntity: (state, action) => {
      const newCartArray = state.cartlist.map((item) =>
        item.cartId === action.payload.cartId
          ? {
              ...item,
              quantity: item.quantity - 1,
              totalPay: action.payload.productPrice * (item.quantity - 1),
            }
          : item
      );
      state.cartlist = newCartArray;
    },
    increaseQauntity: (state, action) => {
      const newCartArray = state.cartlist.map((item) =>
        item.cartId === action.payload.cartId
          ? {
              ...item,
              quantity: item.quantity + 1,
              totalPay: action.payload.productPrice * (item.quantity + 1),
            }
          : item
      );
      state.cartlist = newCartArray;
    },
    inputQauntity: (state, action) => {
      const newCartArray = state.cartlist.map((item) =>
        item.cartId === action.payload.cartId
          ? {
              ...item,
              quantity: action.payload.quantity,
              totalPay: action.payload.productPrice * action.payload.quantity,
            }
          : item
      );
      state.cartlist = newCartArray;
    },
    // 장바구니 아이템 삭제
    deleteItem: (state, action) => {
      const newCartArray = state.cartlist.filter(
        (item) => item.cartId != action.payload
      );
      state.cartlist = newCartArray;
    },
    clearCart: (state) => {
      state.cartlist = [];
    },
  },
});

// 액션타입을 함수로 만들어서 내보내기
export const {
  inputCart,
  decreaseQauntity,
  increaseQauntity,
  inputQauntity,
  deleteItem,
  clearCart,
} = cartSlice.actions;

// 디스패치를 따로 내보내줌
export default cartSlice.reducer;
