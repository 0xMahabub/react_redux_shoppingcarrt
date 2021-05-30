import './App.css';
import Router from './Router';

import { allReducers } from './redux/reducers/combineReducers/combineReducers';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';

function App() {
<<<<<<< HEAD
  Provider
  return (
    <Provider store={store}>
      <div className="App">
      <ProductList/>
    </div>
    </Provider>
  );
=======
  return <Router/>
>>>>>>> 5d132215bf82ea147d73275db586798df7d7cc55
}

export default App;
