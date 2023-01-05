import { useState } from "react";

const TestArray = () => {
  const [user, setUser] = useState({
    name: "홍길동",
    age: 20,
    address: "부산"
  });

  const [test, setTest] = useState({
    name: "성춘향",
    age: 25,
    address: "부산"
  });

  return (
    <div>
      <h1>테스트</h1>
      {
        
      }
    </div>
  );
}
 
export default TestArray;