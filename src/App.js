import React from "react";
import LoginContainer from "./containers/LoginContainer";
import WelcomeContainer from "./containers/WelcomeContainer";
import { createStore } from "redux";
import rootReducer from "./store/reducers";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";

const store = createStore(rootReducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <>
            <Route exact path="/" component={LoginContainer} />
            <Route path="/welcome" component={WelcomeContainer} />
          </>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
