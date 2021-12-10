import { Switch, Route, Redirect } from 'react-router-dom';
import { adminRoutes } from './router';
import Frame from './component/frame/index'

function App() {
  return (
      <Frame>
        <Switch>
          {adminRoutes.map((route) => {
            return <Route 
              key={route.path} 
              // path={route.path}
              // exact={route.exact}
              // render={routeProps => {
              //   return <route.component {...routeProps} />
              // }}
              {...route}
            />
          })}
          <Redirect to="/404" />
        </Switch>
      </Frame>
  );
}

export default App;
