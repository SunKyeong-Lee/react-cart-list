import styled from "styled-components";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteIcon from "@mui/icons-material/Delete";
import { Mobile, Default } from "../modules/MediaQuery";

import productData from "../data/productList.json";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  decreaseQauntity,
  deleteItem,
  increaseQauntity,
  inputQauntity,
} from "../redux/slice/cartSlice";

const CartItem = ({ cartItem, checkItems, setCheckItems }) => {
  const [productList, setProductList] = useState(productData.productList);
  const findProduct = productList.find(
    (product) => product.productId === cartItem.productId
  );
  const dispatch = useDispatch();
  const [totalPay, setTotalPay] = useState(cartItem.totalPay);
  const inputRef = useRef();

  /** 체크박스 개별 선택 */
  const handleSingleCheck = (checked, cartId) => {
    checked
      ? setCheckItems([...checkItems, cartId])
      : setCheckItems(checkItems.filter((el) => el != cartId));
  };

  /** 구매수량 */
  const onDecrease = () => {
    dispatch(
      decreaseQauntity({
        cartId: cartItem.cartId,
        productPrice: findProduct.price,
      })
    );
  };
  const onIncrease = () => {
    dispatch(
      increaseQauntity({
        cartId: cartItem.cartId,
        productPrice: findProduct.price,
      })
    );
  };
  const onInput = (e) => {
    dispatch(
      inputQauntity({
        cartId: cartItem.cartId,
        productPrice: findProduct.price,
        value: parseInt(e.target.value),
      })
    );
  };

  /** 장바구니 아이템 개별 삭제 */
  const handleDelete = (cartId) => {
    dispatch(deleteItem(cartId));
    setCheckItems(checkItems.filter((el) => el != cartId));
  };

  useEffect(() => {
    inputRef.current.value = cartItem.quantity;
    setTotalPay(cartItem.totalPay);
  }, [cartItem.quantity]);

  return (
    <>
      {/** 데스크탑, 태블릿 */}
      <Default>
        <DefaultList>
          <input
            type="checkbox"
            name={cartItem.cartId}
            checked={checkItems.includes(cartItem.cartId) ? true : false}
            onChange={(e) => {
              handleSingleCheck(e.target.checked, cartItem.cartId);
            }}
          />
          <div className="product-container">
            <img
              src={require("../image/" + findProduct.thumbnail)}
              alt="제품이미지"
            />
            <div>
              <div>{findProduct.productName}</div>
              <div>{findProduct.explain}</div>
            </div>
          </div>
          <Quantity>
            <IconButton onClick={onDecrease}>
              <RemoveIcon />
            </IconButton>
            <input
              type="number"
              defaultValue={cartItem.quantity}
              ref={inputRef}
              onChange={onInput}
            />
            <IconButton onClick={onIncrease}>
              <AddIcon />
            </IconButton>
          </Quantity>
          <div>{totalPay.toLocaleString("kr")}</div>
          <IconButton
            onClick={() => {
              handleDelete(cartItem.cartId);
            }}
          >
            <DeleteIcon />
          </IconButton>
        </DefaultList>
      </Default>
      {/** 모바일 */}
      <Mobile>
        <MobileList>
          <input
            type="checkbox"
            name={cartItem.cartId}
            checked={checkItems.includes(cartItem.cartId) ? true : false}
            onChange={(e) => {
              handleSingleCheck(e.target.checked, cartItem.cartId);
            }}
          />
          <div>
            <div>
              <div className="product-container">
                <div>{findProduct.productName}</div>
                <div>{findProduct.explain}</div>
              </div>
              <IconButton
                onClick={() => {
                  dispatch(deleteItem(cartItem.cartId));
                }}
              >
                <DeleteIcon />
              </IconButton>
            </div>
            <div>
              <Quantity>
                <IconButton onClick={onDecrease}>
                  <RemoveIcon />
                </IconButton>
                <input
                  type="number"
                  defaultValue={cartItem.quantity}
                  ref={inputRef}
                  onChange={onInput}
                />
                <IconButton onClick={onIncrease}>
                  <AddIcon />
                </IconButton>
              </Quantity>
              <div>₩ {totalPay.toLocaleString("kr")}</div>
            </div>
          </div>
        </MobileList>
      </Mobile>
    </>
  );
};

export default CartItem;

const DefaultList = styled.li`
  display: grid;
  grid-template-columns: auto 5fr 2fr 2fr 1fr;
  justify-items: center;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  input {
    width: fit-content;
  }
  button:hover {
    color: #dc3545;
  }
  .product-container {
    justify-self: baseline;
    align-items: center;
    display: flex;
    img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      margin: 0 1rem;
    }
    > div > div:first-child {
      font-weight: bold;
    }
    > div > div:last-child {
      color: #adb5bd;
    }
  }

  @media screen and (max-width: 991px) {
    .product-container img {
      margin-left: 0;
    }
  }
`;

const MobileList = styled.li`
  display: flex;
  align-items: flex-start;
  padding: 1.5rem 0;
  border-bottom: 1px solid #e9e9e9;
  &:last-child {
    border: none;
  }

  > input {
    margin-right: 1rem;
    transform: translateY(5px);
  }
  > div {
    width: 100%;
  }
  > div > div {
    display: flex;
    justify-content: space-between;
    .product-container {
      margin-bottom: 1rem;
      > div:first-child {
        font-weight: bold;
      }
      > div:last-child {
        color: #adb5bd;
      }
    }
    &:first-child {
      align-items: flex-start;
      button {
        scale: 0.8;
        transform: translateY(-10px);
      }
    }
    &:last-child {
      align-items: center;
      font-weight: bold;
      padding-right: 0.5rem;
    }
  }
`;

const Quantity = styled.div`
  display: flex;
  background-color: #f8f9fa;
  height: fit-content;
  input {
    height: auto;
    max-width: 3rem;
    min-height: 32px;
    text-align: center;
    border: none;
    background-color: #f8f9fa;
    color: black;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input:active {
    background-color: #e9ecef;
  }
  input:focus {
    outline: none;
    box-shadow: 0 0 1px 1px #dee2e6 inset;
  }
  button {
    border-radius: 0;
  }
`;
