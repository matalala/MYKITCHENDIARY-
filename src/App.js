import './App.css';
import  Lading  from './componentes/Lading.jsx';
import {Route,BrowserRouter as Router,Switch} from 'react-router-dom'
import { Home } from './componentes/Home';
import { Detail } from './componentes/Detail';
import { Create } from './componentes/Create';
import { Error } from './componentes/Error';
function App() {
  return (
    <div className='App'>
    <Router>
    <Switch>
      <Route exact path='/'><Lading/></Route>
      <Route exact path='/create'><Create/></Route>
      <Route exact path='/home'><Home/></Route>
      <Route exact path='/detail/:id'><Detail/></Route>
      <Route path='*'><Error msj={`are you sure the url is ok? test returned! `} boton={true}/> </Route>
    </Switch>
   </Router>
    </div>
  );
}

export default App;
