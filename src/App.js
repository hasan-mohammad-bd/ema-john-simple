
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

//netlify
//=======================================================
//in comment: npm run build , will create a file which have to deliver to netlify.

//github
//=======================================================
//cloning from the github, the react app needs to install dependency. by CMD, type: npm install

//to see in which repository the project belongs to, type: git remote -v 

//to change the to new repository, type: git remote set-url origin theUrl