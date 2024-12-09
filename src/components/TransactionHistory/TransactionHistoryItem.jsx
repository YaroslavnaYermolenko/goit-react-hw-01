import PropTypes from "prop-types";
import css from "./TransactionHistory.module.css";
export default function TransactionHistoryItem({ type, amount, currency }) {
  return (
    <tr className={css.string}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}
TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
