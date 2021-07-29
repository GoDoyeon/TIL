import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Todos from './pages/Todos';
import Users from './pages/Users';
function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Home}></Route>
      <Route path="/todos" component={Todos}></Route>
      <Route path="/users" component={Users}></Route>
    </BrowserRouter>
  );
}

export default App;
