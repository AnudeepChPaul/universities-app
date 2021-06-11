import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home'
import Details from './components/Details'
import { connect } from 'react-redux'
import { useEffect } from 'react'
import { initUniversities } from './redux/actions'

function App(props) {

  useEffect(() => {
    props.dispatch(initUniversities())
  }, [])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/:uName">
            <Details data={props.universities}/>
          </Route>
          <Route path="/">
            <Home data={props.universities} page={props.page}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default connect(state => ({
  universities: state.universities,
  page: state.page
}))(App);
