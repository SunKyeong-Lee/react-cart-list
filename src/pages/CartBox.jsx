import styled from "styled-components";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/slice/cartSlice";
import CartItem from "../components/CartItem";

const CartBox = () => {
  const cartlist = useSelector((state) => state.cartlist.cartlist);
  const dispatch = useDispatch();
  const [checkItems, setCheckItems] = useState([]);
  const [deliveryPay, setDeliveryPay] = useState(3000);

  /** 체크박스 전체 선택, 선택해제 */
  const handleAllCheck = (checked) => {
    if (checked) {
      const idArray = [];
      cartlist.forEach((el) => idArray.push(el.cartId));
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  };

  /** 배송비 제외 상품 총 금액 */
  const getSubtotal = () => {
    const newCartArray = cartlist.filter((el) =>
      checkItems.includes(el.cartId)
    );
    return newCartArray.reduce((prev, cur) => {
      return (prev += cur.totalPay);
    }, 0);
  };

  /** 장바구니 아이템 전체 삭제 */
  const handleDeleteAll = () => {
    dispatch(clearCart());
    setCheckItems([]);
  };

  useEffect(() => {
    cartlist.length === 0 && setDeliveryPay(0);
  }, [cartlist.length]);

  return (
    <MyContainer>
      <Paper>
        <div>
          <input
            type="checkbox"
            name="select-all"
            checked={
              cartlist.length !== 0 && checkItems.length === cartlist.length
                ? true
                : false
            }
            onChange={(e) => {
              handleAllCheck(e.target.checked);
            }}
          />
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleDeleteAll}
          >
            전체 삭제
          </Button>
        </div>
        {cartlist.length === 0 ? (
          <div className="empty">Empty</div>
        ) : (
          <ul>
            {cartlist.map((cartItem) => (
              <CartItem
                key={cartItem.cartId}
                cartItem={cartItem}
                checkItems={checkItems}
                setCheckItems={setCheckItems}
              />
            ))}
          </ul>
        )}
      </Paper>

      <Paper>
        <div>{checkItems.length} items</div>
        <div>
          <span>Delivery</span>
          <span>{deliveryPay.toLocaleString("kr")}</span>
        </div>
        <div>
          <span>SubTotal</span>
          <span>{getSubtotal().toLocaleString("kr")}</span>
        </div>
        <div>
          <span>Total</span>
          <span>₩{(getSubtotal() + deliveryPay).toLocaleString("ko-KR")}</span>
        </div>
        <Button variant="contained" color="secondary">
          주문하기
        </Button>
      </Paper>
    </MyContainer>
  );
};

export default CartBox;

const MyContainer = styled.div`
  max-width: 1100px;
  padding: 2rem;
  margin: auto;

  .MuiPaper-root {
    &:first-child {
      padding: 2rem;
      margin-bottom: 2rem;
      > div {
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid lightgrey;
        padding: 0 1rem 1rem;
      }
      .empty {
        height: 180px;
        padding: 0;
        justify-content: center;
        align-items: center;
        border: none;
        color: #adb5bd;
      }
      > ul {
        list-style-type: none;
        margin: 0;
        padding: 1rem 1rem 0;
        li:last-child {
          margin: 0;
        }
      }
    }
    &:last-child {
      padding: 2rem 3rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span:first-child {
        margin-right: 1rem;
        color: #adb5bd;
      }
      > div:nth-child(1),
      div:nth-child(4) {
        font-size: 1.2rem;
        font-weight: bold;
        color: #6f42c1;
      }
    }
  }

  @media screen and (max-width: 767px) {
    padding: 1rem;
    .MuiPaper-root {
      &:first-child {
        padding: 1rem;
        > div {
          padding: 0 0 1rem;
        }
        > ul {
          padding: 0;
        }
      }
      &:last-child {
        flex-direction: column;
        padding: 1rem;
        div {
          width: 100%;
          display: flex;
          justify-content: space-between;
          padding: 0.5rem 0;
        }
        button {
          width: 100%;
          margin-top: 2rem;
        }
      }
    }
  }
`;
