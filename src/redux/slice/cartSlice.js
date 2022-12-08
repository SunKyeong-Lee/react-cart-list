// 장바구니 리스트 관리
// 리덕스 툴킷
// 리덕스 펄시스트 사용시 수정 사항 없음

import { createSlice } from "@reduxjs/toolkit";

// 초기값
const initialState = {
  cart: [],
  id: 0,
};

const cartSlice = createSlice({
  name: "cartlist",
  initialState,
  reducers: {
    // 장바구니에 담기
    inputCart: (state, action) => {
      const newCartitem = {
        cartID: 1,
        productID: 1,
        color: "black",
        size: "S",
        print: "font",
        amount: 5,
        pay: 47500,
      };
      state.cart.push(newCartitem);
    },
    // 장바구니 상품별 수량 1증가, 1감소, 직접 입력
    amountDecrease: (state) => {},
    amountIncrease: (state) => {
      state.id += 1;
    },
    amountInput: (state, action) => {},
  },
});

// 액션타입을 함수로 만들어서 내보내기
export const { inputCart, amountIncrease } = cartSlice.actions;

// 디스패치를 따로 내보내줌
export default cartSlice.reducer;
