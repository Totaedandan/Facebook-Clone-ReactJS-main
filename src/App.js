import './App.css';
import Header from "./component/Header";
import Profile from "./component/Profile";
import Messenger from "./component/Messenger";
import Event from "./component/Event";

function App() {
  return (
    <div className="App">
       <Header />
       <Profile />
       <Messenger />
       <Event />
    </div>
  );
}

export default App;
