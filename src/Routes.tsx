import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import NotFound from './Pages/NotFound/NotFound';
import Landing from './Pages/Landing/Landing';
import Login from './Pages/Login/Login';
import QuemSomos from './Pages/QuemSomos/QuemSomos';
import Servicos from './Pages/Servicos/Servicos';
import Products from './Pages/Products/Products';
import ProtectRouter from './Components/Helper/ProtectedRouter';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/quem-somos" component={QuemSomos} />
        <Route path="/servicos" component={Servicos} />
        <Route path="/login" component={Login} />
        <Route path="/produtos" component={Products} />
        {/* <Route path="/cadastrar" component={Register} /> */}
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
