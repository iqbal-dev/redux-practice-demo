import logo from './logo.svg';
import './App.css';
import UserData from './components/UserData';
import { Provider } from 'react-redux';
import {store} from './redux/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <UserData />
    </div>
    </Provider>
  );
}

export default App;
