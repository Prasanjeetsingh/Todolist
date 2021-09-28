import React, { Component } from 'react';
import { Route, Switch , Redirect , withRouter} from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import ListBuilder from './containers/ListBuilder/ListBuilder';

class App extends Component {



  render() {

    let route = (
      <Switch>
      <Route path="/" exact  component={ListBuilder} />
      <Redirect to='/' />
      </Switch>
    );

    return (
      <div>
          <Layout>
               {route}
         </Layout>
      </div>
    );
  }
}


export default App;
