import React from "react";
import "./App.css";
import HomePage from "./Pages/HomePage/HomePage";
import PhonePage from "./Pages/PhonePage/PhonePage";
import CodePage from "./Pages/CodePage/CodePage";
import UserPage from "./Pages/UserPage/UserPage";
import ShowLocal from "./components/ShowLocal/ShowLocal";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MainPage from "./Pages/MainPage/MainPage";
import "./Pages/MainPage/MainPage.scss";

import ShowMapPage from "./Pages/ShowMapPage/ShowMapPage";
function App() {
  return (
    <BrowserRouter>
      <MainPage>
        <Switch>
          <Route path="/showmappage" component={ShowMapPage} />
          <Route path="/showlocal" component={ShowLocal} />
          <Route path="/phonepage" component={PhonePage} />
          <Route path="/codepage" component={CodePage} />
          <Route path="/userpage" component={UserPage} />
          <Route path="/" exact component={HomePage} />
          {/* <Route path="/phonepage" component={PhonePage} />
          <Route path="/codepage" component={CodePage} />
          <Route path="/inforpage" component={InforPage} /> */}
        </Switch>
      </MainPage>
    </BrowserRouter>
  );
}

export default App;
