import { Provider } from 'react-redux';
import store from './Redux/Store';
import Routing from './Container/Routes/Routing';
import './themes/global.scss';

function App() {
  return (
    
    <Provider store = {store}>
        <Routing/>
    </Provider> 
    
  );
}

export default App;
