//import logo from "./logo.svg";
import "./App.css";
import React from "react";
import SpendingTransaction from "./Components/Transaction";
import "./Components/Transaction.css";
import FormComponent from "./Components/FormComponent";
import { useState, useEffect, useReducer } from "react";
import DataContext from "./data/DataContext";
import ReportComponent from "./Components/ReportComponent";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
const design = {
  color: "Green",
  fontSize: "20px",
  textAlign: "center",
};
//nest components means put any component that can have more than one inside one component
const Title = () => <h1 style={design}>โปรแกรมชื่อบัญชีรายรับ-รายจ่าย</h1>;
// const Description = () => {
//   return (
//     //jsx style use keyword style ={{ propety:value }} cannot pit direct html style
//     <p style={{ color: "blue", fontSize: "20px", textAlign: "center" }}>
//       โปรแกรมนี้ใช้สำหรับบันทึกบัญชีรายรับ-รายจ่ายของผู้ใช้ โดยสามารถเพิ่ม แก้ไข
//       และลบรายการได้ นอกจากนี้ยังสามารถดูสรุปยอดรวมรายรับและรายจ่ายได้อีกด้วย
//     </p>
//   );
// };

// const TransactionData = () => {
//   return (
//     <>
//       <h2>รายการบัญชี</h2>
//       <ul className="item-list">
//         <Item />
//       </ul>
//     </>
//   );
// };

// const Item = () => {
//   return (
//     <section>
//       <ul className="item-list">
//         <li>รายการที่ 1 = 350</li>
//         <li>รายการที่ 2 = 200</li>
//         <li>รายการที่ 3 = 100</li>
//       </ul>
//     </section>
//   );
// };

//App = Parent Component
//Title, Description, TransactionData = Child Component
//Item = Grandchild Component (assumed that Item is used inside TransactionData)

function App() {
  const initData = [
    { id: 1, title: "ค่าเช่าบ้าน", amount: -30000 },
    { id: 2, title: "เงินเดือน", amount: 50000 },
    { id: 3, title: "ค่าขนส่ง", amount: -15000 },
  ];
  const [items, setItems] = useState(initData);
  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);

  const onAddNewItem = (newItem) => {
    console.log("Recieved New Item: ", newItem);
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };
  useEffect(() => {
    const amounts = items.map((item) => item.amount);
    const income = amounts
      .filter((element) => element > 0)
      .reduce((total, element) => (total += element), 0);
    const expense =
      amounts
        .filter((element) => element < 0)
        .reduce((total, element) => (total += element), 0) * -1;
    console.log("income summary:", income);
    console.log("expense summary  :", expense);
    setReportIncome(income.toFixed(2));
    setReportExpense(expense.toFixed(2));
  }, [items, reportIncome, reportExpense]);
  //reducer state
  const [showreport, setShowReport] = useState(false);

  const reducer = (state, action) => {
    switch (action.type) {
      case "SHOW":
        return setShowReport(true);
      case "HIDE":
        return setShowReport(false);
    }
  };
  const [result, dispatch] = useReducer(reducer, showreport);

  return (
    //jsx use root element if don't want <div></div> used semetric tag instead</div></div>,<section></section>,<React.Fragment></React.Fragment>,<></>
    //jsx use className instead of class
    //jsx use camelCase for style attribute
    //ถ้ามีคำสั่งมากกว่า 1 คำสั่งให้ใช้ () ครอบในส่วนที่จะ Return
    <DataContext.Provider
      value={{
        income: reportIncome,
        expense: reportExpense,
      }}
    >
      <div className="Container">
        <Title />
        <Router>
          <div>
            <ul className="horizontal-menu">
              <li>
                <Link to="/">ข้อมูลบัญชี</Link>
              </li>
              <li>
                <Link to="/insert">บันทึกข้อมูล</Link>
              </li>
            </ul>
            <Routes>
              <Route path="/" exact element={<ReportComponent />} />
              <Route
                path="/insert"
                element={
                  <>
                    <FormComponent onAddItem={onAddNewItem} />
                    <SpendingTransaction items={items} />
                  </>
                }
              />
            </Routes>
          </div>
        </Router>

        {/* {showreport && <ReportComponent />} */}

        {/* <h1>{result}</h1>
        <button onClick={() => dispatch({ type: "SHOW", payload: 10 })}>
          แสดง
        </button>
        <button onClick={() => dispatch({ type: "HIDE", payload: 5 })}>
          ซ่อน
        </button> */}
      </div>
    </DataContext.Provider>
  );
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <p>jammo professioner</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// const App = () => {
//   return (
//     <>
//       <div>
//         <h1>Welcome to My React App</h1>
//         <p>This is a simple React application.</p>
//         <p>Feel free to explore and modify the code!</p>
//       </div>
//     </>
//   );
// }
export default App;
