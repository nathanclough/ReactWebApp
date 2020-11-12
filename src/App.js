import logo from './Bin/Cat.jpg';
import './Styles/App.css';
import Burger from './Components/Burgerbar';



function App() {
  return (
      <div className="App" >
        <Burger/>
          <header className="App-header">
            <img src={logo} className="App-cat" alt="logo" />
            <p>
              This is my cat shadow
            </p>
          </header>  
      </div>
  );
}

export default App;
