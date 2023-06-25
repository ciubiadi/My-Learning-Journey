import "./App.css";
import Todos from "./components/Todos/Todos";

function App() {
  return (
    <div>
      <Todos items={["Learn TS", "Learn React"]} />
    </div>
  );
}

export default App;
