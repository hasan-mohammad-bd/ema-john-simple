
import './App.css';
import Header from "./components/Header/Header";
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Shop></Shop>
      
      
    </div>
  );
}

export default App;

//in comment: npm run build , will create a file which have to deliver to netlify.
