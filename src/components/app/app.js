import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from 'components/layout';
import { TodoWithContext, TodoWithProps, Home, NotFound } from 'pages';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/props" exact component={TodoWithProps} />
          <Route path="/context" exact component={TodoWithContext} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
