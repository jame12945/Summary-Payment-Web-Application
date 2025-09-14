import SpendingItem from "./Item";
import "./Transaction.css";
// import DataContext from "../data/DataContext";
// import { useContext } from "react";
const SpendingTransaction = (props) => {
  //props mean variable that pass input data into component  define like Component name Property - Value For Each Property
  //use key for unique identifier for each item in list when it has been changed, added, or removed
  const {items} = props
//    const name =useContext(DataContext);

  return (
    <>
      {/* <h2>รายการบัญชี</h2> */}
      <ul className="item-list">
        {/* <SpendingItem title= {data[0].title} amount={data[0].amount} />
        <SpendingItem title={data[1].title} amount={data[1].amount} />
        <SpendingItem title={data[2].title} amount={data[2].amount} /> */}
        {items.map((element) => {
          return (
            // <SpendingItem title={element.title} amount={element.amount} />
            // Using spread operator to pass all properties of element as props if it has same name of property
            // <SpendingItem {...element} key={uuidv4()} />
            <SpendingItem
              title={element.title}
              amount={element.amount}
              key={element.id}
            />
          );
        })}
      </ul>
      {/* use name from useContext */}
      {/* {name} */}
       {/* <DataContext.Consumer>
        
            {value => <p>{value}</p>}
        
      </DataContext.Consumer> */}
    </>
  );
};

export default SpendingTransaction;
