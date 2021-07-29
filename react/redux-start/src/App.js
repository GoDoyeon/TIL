import './App.css';
import { Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import Todos from './pages/Todos';
import Users from './pages/Users';
import history from './history';

function App() {
  return (
    <Router history={history}>
      <Route path="/" component={Home}></Route>
      <Route path="/todos" component={Todos}></Route>
      <Route path="/users" component={Users}></Route>
    </Router>
  );
}

export default App;
