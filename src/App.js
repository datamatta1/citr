import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <Pet name="Iva" animal="Bunny" breed="Mini French Lop" />
      <Pet name="Zoki" animal="Cat" breed="European Common" />
      <Pet name="Ludomir" animal="Dog" breed="Mix" />
    </div>
  );
};

render(<App />, document.getElementById("root"));
