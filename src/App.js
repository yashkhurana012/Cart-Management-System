import logo from './logo.svg';
import './App.css';
import Header from './Componenet/Header';
import { CartProvider } from './Context/cartContext';
import Card from './Componenet/Card';
function App() {

  return (
    <CartProvider>
    <div className="App">
      <Header />
      <Card />
    </div>
    </CartProvider>
  );
}

export default App;
