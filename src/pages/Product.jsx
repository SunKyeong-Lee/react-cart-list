import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import productData from "../data/productList.json";
import styled from "styled-components";
import CheckIcon from "@mui/icons-material/Check";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { inputCart } from "../redux/slice/cartSlice";

const Product = () => {
  const [productList, setProductList] = useState(productData.productList);
  const cartlist = useSelector((state) => state.cartlist.cartlist);
  const dispatch = useDispatch();

  /** 장바구니에 담기 */
  const inputCartHandle = (product) => {
    dispatch(
      inputCart({
        productId: product.productId,
        productPrice: product.price,
      })
    );
  };

  /** 장바구니에 해당 상품이 담겼는지 확인 */
  const checkItem = (productId) => {
    return cartlist.find((el) => el.productId === productId);
  };

  return (
    <CardContainer>
      {productList.map((product) => (
        <Card key={product.productId}>
          <CardMedia
            image={require("../image/" + product.thumbnail)}
            title={product.productName}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              <div>{product.productName}</div>
              <div>₩{product.price.toLocaleString("kr")}</div>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.explain}
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="small"
              color="secondary"
              onClick={() => {
                inputCartHandle(product);
              }}
              disabled={checkItem(product.productId) ? true : false}
            >
              {checkItem(product.productId) ? <CheckIcon /> : "장바구니 담기"}
            </Button>
          </CardActions>
        </Card>
      ))}
    </CardContainer>
  );
};

export default Product;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  .MuiPaper-root {
    width: 340px;
    min-width: 280px;
    margin: 1rem;
  }
  .MuiTypography-h6 {
    display: flex;
    justify-content: space-between;
    > div:last-child {
      margin-left: 2rem;
    }
  }
  .MuiCardMedia-root {
    height: 200px;
  }
  .MuiCardActions-root {
    justify-content: flex-end;
    button:disabled {
      background-color: #6f42c1;
      color: #ffffff;
    }
  }

  @media screen and (max-width: 991px) {
    flex-direction: column;
    align-items: center;
    .MuiPaper-root {
      width: 90%;
    }
  }
  @media screen and (max-width: 767px) {
    .MuiPaper-root {
      width: 100%;
      margin: 0;
      margin-bottom: 1rem;
      &:last-child {
        margin: 0;
      }
    }
  }
`;
