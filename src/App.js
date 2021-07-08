
import './App.css';
import Header from './containers/header';
import ProductDetail from './containers/ProductDetail';
import ProductListing from './containers/ProductList';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import CartContainer from './containers/cartContainer';
import SuccessPage from './containers/successPage';

function App() {
  return (
    <div className="App">
     <Router>
       <Header />
       <Switch>
       <Route exact path="/"  component={ ProductListing }></Route>
       <Route  path="/product/:productId"  component={ ProductDetail }></Route>
       <Route exact path="/cart"  component={ CartContainer }></Route>
       <Route exact path="/success"  component={ SuccessPage }></Route>
       <Route> 404 Not found </Route>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
