import style from "./style.module.scss";
import CSSModules from "react-css-modules";
import { useState } from "react";
function Card(props) {
  let color = props.color;
  let priceColor = props.priceColor;
  const [selected, setSelected] = useState(false);

  const handleChange = () => {
    setSelected(!selected);
  };
  const st = selected ? "selected" : "";
  return (
    <div styleName="card" className={style[st]} onClick={handleChange}>
      <h2 styleName="headding" className={style[color]}>
        {props.name}
      </h2>
      <div className={style[priceColor]}>{props.price}</div>
      <div styleName="speed">{props.speed}</div>
      <div styleName="info">{props.info}</div>
    </div>
  );
}
export default CSSModules(Card, style);
