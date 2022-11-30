import { useState } from "react";

const Cartlist = (props) => {
  // 임시데이터 - 상품리스트(json)
  const [product, setProduct] = useState([
    {
      productID: 1,
      category: "Short Sleeve T-shirt",
      productName: "standard-fit",
      price: 9500,
      productImg: "상품이미지1",
    },
    {
      productID: 2,
      category: "Short Sleeve T-shirt",
      productName: "slim-fit",
      price: 9000,
      productImg: "상품이미지2",
    },
    {
      productID: 3,
      category: "long Sleeve T-shirt",
      productName: "standard-fit",
      price: 10000,
      productImg: "상품이미지3",
    },
  ]);

  // CartBox에서 전달받은 장바구니 데이터
  const { cartlist, setCartlist } = props;

  // cartlist의 상품정보 찾기
  const findProduct = (i) => {
    return product.find((item) => item.productID == i.productID);
  };

  const changeQuantity = (e, id) => {
    // 입력받은 구매수량이 1 이상이 아니라면 1로 고정
    if (!(e.target.value > 0)) {
      e.target.value = 1;
    }
    const newQuantity = !(e.target.value > 0) ? 1 : e.target.value;
    const findIndex = cartlist.findIndex((item) => item.cartID == id);
    const newCartlist = cartlist;
    if (findIndex != -1) {
      newCartlist[findIndex] = {
        ...newCartlist[findIndex],
        quantity: newQuantity,
        // pay추가
      }
    }
    setCartlist(newCartlist);
  };

  return (
    <div>
      {cartlist.map((item) => (
        <div className="cartlist-wrap" key={item.cartID}>
          <div className="item-box">
            <div>{findProduct(item).productImg}</div>
            <div>
              {findProduct(item).category} <br />
              {findProduct(item).productName} {"(" + item.color + ")"} <br />
              print : {item.print}
            </div>
          </div>
          <div>{item.size}</div>
          <div>
            <button>-</button>
            <input
              type="number"
              defaultValue={item.quantity}
              onChange={(e) => {
                changeQuantity(e, item.cartID);
              }}
            />
            <button>+</button>
          </div>
          <div>{item.pay}</div>
          <button>X</button>
        </div>
      ))}
    </div>
  );
};

export default Cartlist;
