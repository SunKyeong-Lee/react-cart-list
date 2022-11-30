import "../css/cartStyle.css";
import { useEffect, useState } from "react";
import Cartlist from "../components/Cartlist";

const CartBox = () => {
  // 임시데이터 - 장바구니(로컬스토리지)
  const [list, setList] = useState([
    {
      cartID: 1,
      productID: 1,
      color: "black",
      size: "S",
      print: "front",
      quantity: 5,
      pay: 47500,
    },
    {
      cartID: 2,
      productID: 2,
      color: "navy",
      size: "M",
      print: "back",
      quantity: 2,
      pay: 18000,
    },
    {
      cartID: 3,
      productID: 3,
      color: "white",
      size: "L",
      print: "front / back",
      quantity: 3,
      pay: 30000,
    },
  ]);
  // 상품상세페이지(구매/장바구니 버튼)에서 로컬스토리지에 장바구니 데이터를 담았다고 가정
  // 로컬스토리지 확인 : 개발자도구(f12) > Application > Local Storage
  // JSON.stringify() : 문자열 데이터로 저장하기 위함
  //                    문자열이 아닌채로 로컬스트리지에 데이터를 넣으면 [Object Object Object]로 들어감
  // localStorage.setItem("moti_cartlist", JSON.stringify(list));

  // 로컬스토리지의 장바구니 데이터 들고오기
  const [cartlist, setCartlist] = useState([]);

  useEffect(() => {
    const data = localStorage.getItem("moti_cartlist");
    setCartlist(data ? JSON.parse(data) : []);
  }, []);

  return (
    <div>
      <h1>장바구니</h1>
      <div>상품정보 ㅣ 사이즈 ㅣ 구매수량 ㅣ 상품금액</div>
      <hr />
      <Cartlist cartlist={cartlist} setCartlist={setCartlist} />
      <hr />
      <div>상품금액 : 0000</div>
      <div>배송비 : 0000</div>
      <div>결제금액 : 0000</div>
      <button>주문하기</button>
    </div>
  );
};

export default CartBox;
