import { FC } from "react";
import { Route, Switch } from 'react-router-dom';
import FirstStep from "./pages/FirstStep";
import SecondStep from "./pages/SecondStep";
const SignUpModule: FC = () => {

  return (
    <Switch>
      <Route exact path='/signup/step1' component={FirstStep}/>
      <Route exact path='/signup/step2' component={SecondStep}/>
    </Switch>
  )
}

export default SignUpModule;