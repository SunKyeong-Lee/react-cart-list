// 장바구니 (리덕스 툴킷)

import { createSlice } from "@reduxjs/toolkit";

let cartId = 0;

// 초기값
const initialState = [];

const cartSlice = createSlice({
  name: "cartlist",
  initialState,
  reducers: {
    // 장바구니에 담기
    inputCart: (state, action) => {
      
    },
    // 장바구니 상품별 수량 : 1증가, 1감소, 직접 입력 (수량 최소 1, 최대 100)
    decreaseQauntity: (state, action) => {},
    increaseQauntity: (state, action) => {},
    inputQauntity: (state, action) => {},
    deleteItem: (state, action) => {},
    deleteAll: (state, action) => {},
  },
});

// 액션타입을 함수로 만들어서 내보내기
export const {
  inputCart,
  decreaseQauntity,
  increaseQauntity,
  inputQauntity,
  deleteItem,
  deleteAll,
} = cartSlice.actions;

// 디스패치를 따로 내보내줌
export default cartSlice.reducer;
