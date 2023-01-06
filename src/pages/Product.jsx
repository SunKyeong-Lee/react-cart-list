import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import productData from "../data/productList.json";
import styled from "styled-components";
import CheckIcon from '@mui/icons-material/Check';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputCart } from "../redux/slice/cartSlice";

const Product = () => {
  const [productList, setProductList] = useState(productData.productList);
  const cartlist = useSelector((state) => state.cartlist);
  const dispatch = useDispatch();
  // const [show, setShow] = useState(false);

  // 장바구니에 담으면 체크표시와 함께 버튼 disable 처리 - onclick
  // 장바구니에 해당 상품 아이디가 있을 때 체크표시 보이게
  const onclick = (productId) => {
    dispatch(inputCart(productId));
  }

  return (
    <div className="product-box">
      <CardContainer>
        {productList.map((product) => (
          <Card key={product.productId}>
            <CardMedia
              image={require("../image/" + product.thumbnail)}
              title={product.productName}
            />
            <CardContent>
              <Typography gutterBottom variant="h6" component="div">
                {product.productName}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {product.explain}
              </Typography>
            </CardContent>
            <CardActions>
              <CheckIcon />
              <Button size="small" color="secondary">
                장바구니 담기
              </Button>
            </CardActions>
          </Card>
        ))}
      </CardContainer>
    </div>
  );
};

export default Product;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem 0.5rem;
  .MuiPaper-root {
    width: 340px;
    min-width: 200px;
    margin: 1rem;
  }
  .MuiCardMedia-root {
    height: 200px;
  }
  .MuiCardActions-root {
    justify-content: flex-end;
    svg {
      width: 1rem;
    }
  }
  .hidden {
    display: none;
  }
`;

// react-responsive - 미디어쿼리
