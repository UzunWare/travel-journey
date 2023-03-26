import Navbar from "./components/Navbar.js"
import Card from "./components/Card.js"
import data from "./data.js"

const cards = data.map((item) => {
  return (
    <Card  
      id={item.id}
      {...item} 
    />
  );
});

export default function App() {
  return (
    <div id="App">
      <Navbar />
      <div id="card-container">
        {cards}
        <hr></hr>
      </div>
    </div>
  );
}