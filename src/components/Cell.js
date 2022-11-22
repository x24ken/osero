import "./Cell.css";

const Cell = ({ value, onClick }) => {
  return (
    <button className={`cell ${value}`} onClick={() => onClick()}></button>
  );
};

export default Cell;
