import CartItem from "../components/CartItem";

const CartBox = () => {
  return (
    <div className="cart-box">
      <h1>장바구니</h1>
      <div>상품정보 ㅣ 사이즈 ㅣ 구매수량 ㅣ 상품금액</div>
      <h3>총수량</h3>
      <h3>상품금액</h3>
      <h3>배송비</h3>
      <h3>결제예상금액</h3>
      <button>주문하기</button>
      <button>장바구니 비우기</button>
    </div>
  );
};

export default CartBox;
