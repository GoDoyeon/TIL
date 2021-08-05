import Slider from './components/Slider/Slider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MainPage from './page/MainPage';
import ScrollPage from './components/Scroll/ScrollPage';
import DatePage from './page/DatePage';
import DropdownPage from './page/DropdownPage';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route component={MainPage} exact path="/" />

          {/* <Route component={NotFoundPage} /> */}
          {/* 슬라이드 */}
          <Route component={Slider} path="/slider" />
          <Route component={ScrollPage} path="/scroll" />
          <Route component={DatePage} path="/date" />
          <Route component={DropdownPage} path="/dropdown" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
