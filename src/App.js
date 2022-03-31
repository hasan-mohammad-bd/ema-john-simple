
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Header from "./components/Header/Header";
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Shop></Shop>}></Route>
        <Route path="/shop" element = {<Shop></Shop>}></Route>
        <Route path="/orders" element = {<Orders></Orders>}></Route>
        <Route path="/inventory" element ={<Inventory></Inventory>}></Route>
        <Route path="/about" element = {<About></About>}></Route>
      </Routes>
      
      
    </div>
  );
}

export default App;

//netlify
//=======================================================
//in comment: npm run build , will create a file which have to deliver to netlify.

//github
//=======================================================
//cloning from the github, the react app needs to install dependency. by CMD, type: npm install

//to see in which repository the project belongs to, type: git remote -v 

//to change the to new repository, type: git remote set-url origin theUrl