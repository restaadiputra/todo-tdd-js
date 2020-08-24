import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Layout from 'components/layout';
import {
  TodoWithContext,
  TodoWithProps,
  TodoWithRedux,
  Home,
  NotFound,
} from 'pages';
import store from 'store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/props" exact component={TodoWithProps} />
            <Route path="/context" exact component={TodoWithContext} />
            <Route path="/redux" exact component={TodoWithRedux} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
