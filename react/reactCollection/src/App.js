import Slider from './components/Slider/Slider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './page/MainPage';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route component={MainPage} exact path="/" />

          {/* <Route component={NotFoundPage} /> */}
          <Route component={Slider} path="/slider" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
