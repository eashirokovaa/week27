import "./App.css";
import Card from "./components/Card";
import { tariffs } from "./data";

function App() {
  return (
    <div className="App">
      <div className="tariffBlock">
        {tariffs.map((tariff, index) => (
          <Card
            key={index}
            name={tariff.name}
            price={tariff.price}
            speed={tariff.speed}
            info={tariff.info}
            isSelected={tariff.isSelected}
            color={tariff.color}
            priceColor={tariff.priceColor}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
