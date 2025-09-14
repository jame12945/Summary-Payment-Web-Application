import "./FormComponent.css";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
const FormComponent = (props) => {
  console.log("Render FormComponent");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(""); // change to string
  const [formValid, setFormValid] = useState(false);

  const inputTitle = (event) => {
    //console.log(event.target.value);
    setTitle(event.target.value);
  };

  const inputAmount = (event) => {
    setAmount(event.target.value); // always string
  };
  useEffect(() => {
    console.log("Title or Amount Changed");
    const checkData =
      title.trim().length > 0 && amount.trim() !== "" && Number(amount) !== 0;
    setFormValid(checkData);
  }, [title, amount]);

  const saveItem = (event) => {
    event.preventDefault(); //prevent reload page when submit form
    console.log("Submit Form");
    //add initial value in useState to object
    const itemData = {
      id: uuidv4(),
      title: title,
      //when get value from input it will be string always
      amount: Number(amount), //convert string to number for use with props Item.js
    };
    // console.log(itemData);
    props.onAddItem(itemData);
    setTitle("");
    setAmount("");
  };
  return (
    <div>
      <form onSubmit={saveItem}>
        <div className={"form-control"}>
          <label>ชื่อรายการ</label>
          <input
            type="text"
            placeholder="กรุณากรอกชื่อรายการ"
            id="title"
            onChange={inputTitle}
            value={title}
          />
        </div>
        <div className={"form-control"}>
          <label>จำนวนเงิน</label>
          <input
            type="number"
            placeholder="(+ รายรับ,- รายจ่าย)"
            id="amount"
            onChange={inputAmount}
            value={amount}
          />
        </div>
        <div>
          <button type="submit" className={"btn"} disabled={!formValid}>
            เพิ่มรายการ
          </button>
        </div>
      </form>
    </div>
  );
};
export default FormComponent;
