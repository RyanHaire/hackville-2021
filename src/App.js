import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import InitialScreen from './screens/InitialScreen'
import LoginScreen from './screens/LoginScreen'
import SignUpScreen from './screens/SignUpScreen'
import HomeScreen from './screens/HomeScreen'
import GroupScreen from './screens/GroupScreen'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <InitialScreen/>
        </Route>
        <Route exact path="/login">
          <LoginScreen/>
        </Route>
        <Route exact path="/sign-up">
          <SignUpScreen/>
        </Route>
        <Route exact path="/home">
          <HomeScreen/>
        </Route>
        <Route exact path="/group">
          <GroupScreen/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
