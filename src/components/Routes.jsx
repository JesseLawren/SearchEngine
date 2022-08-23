import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Results } from './Results';

export const Routes = () => {
  return (
    <div>
        <Switch>
            <Route exact path='/'>
                <Redirect to='/seacrh' />
            </Route>
            <Route exact path={['/search', '/images', 'news', '/videos']}>
                <Results />
            </Route>
        </Switch>
    </div>
  );
}
