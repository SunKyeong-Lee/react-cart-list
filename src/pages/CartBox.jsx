import styled from "styled-components";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";

import productData from "../data/productList.json";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CartBox = () => {
  const [productList, setProductList] = useState(productData.productList);
  const cartlist = useSelector((state) => state.cartlist);
  const [deliveryPay, setDeliveryPay] = useState(30000);

  useEffect(() => {
    cartlist.length === 0 && setDeliveryPay(0);
  }, []);

  return (
    <MyContainer>
      <Paper>
        <Grid container spacing={2}>
          <Grid xs={3}>
            <div>xs=8</div>
          </Grid>
          <Grid xs={3}>
            <div>xs=4</div>
          </Grid>
          <Grid xs={3}>
            <div>xs=4</div>
          </Grid>
          <Grid xs={3}>
            <div>xs=8</div>
          </Grid>
        </Grid>
      </Paper>

      <Paper>
        <div>체크된 아이템 수량</div>
        <div>배송비</div>
        <div>상품 총금액</div>
        <div>결제예상금액 : 상품 + 배송비 </div>
      </Paper>
    </MyContainer>
  );
};

export default CartBox;

const MyContainer = styled.div`
  padding: 2rem;
  display: flex;
  .MuiPaper-root {
    padding: 2rem;
    &:first-child {
      margin-right: 2rem
    }
  }
`;

// 체크(전체선택) ㅣ 상품정보 ㅣ 구매수량 ㅣ 상품금액 
// 장바구니 전체 비우기</button> 
// 선택 삭제하기 
// 주문하기 

