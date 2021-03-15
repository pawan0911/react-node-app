import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Details from './Details';
import './App.css';

function App() {
 return (
  <div className="App m-2 p-2">
   <Switch>
    <Route path="/" component={Home} exact />
    <Route path="/details" component={Details} />
   </Switch>
  </div>
 );
}

export default App;
