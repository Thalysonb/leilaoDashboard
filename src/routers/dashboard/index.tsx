import { FC } from "react";
import { Route, Switch } from 'react-router-dom';
import Dashboard from "./pages/Dashboard";

const DashboardModule: FC = () => {

  return (
    <Switch>
      <Route exact path='/dashboard' component={Dashboard}/>
    </Switch>
  )
}

export default DashboardModule;