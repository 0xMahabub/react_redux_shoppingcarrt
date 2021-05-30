import logo from './logo.svg';
import './App.css';
import ProductList from './pages/ProductList';

import { allReducers } from './redux/reducers/combineReducers/combineReducers';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

function App() {
  Provider
  return (
    <Provider store={store}>
      <div className="App">
      <ProductList/>
    </div>
    </Provider>
  );
}

export default App;
