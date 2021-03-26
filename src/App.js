import { Provider } from 'react-redux';
import store from './Redux/Store';

import Routing from './Container/Routes/Routing';

function App() {
  return (
    
    <Provider store = {store}>
        <Routing/>
    </Provider> 
    
  );
}

export default App;
