// import "./Transaction";
import "./Item.css";
import PropTypes from "prop-types";
// import DataContext from "../data/DataContext";
// import { useContext } from "react";
const SpendingItem = (props) => {
  //Dynamic Data mean data that can change
  //   const name = "Hotel";
  //   const amount = 5000;
  //   const car = "Toyota";
  //   const price = 1500000;

  //destructuring props to get title and amount
  const { title, amount ,id} = props;

  const status = amount < 0 ? "expense" : "income";
  const symbol = amount < 0 ? "-" : "+"; //conditional (ternary) operator
  const formatNumber=(num)=> {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
}
  console.log(id)
//   const name = useContext(DataContext);
  return (
    <>
      {/* <li>
        House <span>100</span>
      </li>
      <li>
        Computer <span>200</span>
      </li>
      <li>
        Face-Wash <span>300</span>
      </li> */}
      <li className={status}>
        {title}
        <span>
          {symbol}
          {formatNumber(Math.abs(amount))}
        </span>
        {/* <DataContext.Consumer>{(value) => <p>{value}</p>}</DataContext.Consumer> */}
        {/* {name} */}
      </li>

      {/* <li>
        {name} <span> {amount}</span>
      </li>
      <li>
        {car} <span> {price}</span>
      </li> */}
    </>
  );
};

SpendingItem.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.number,
};

export default SpendingItem;
