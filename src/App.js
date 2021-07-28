import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import { RegisterPage } from './RegisterPage';
import {history} from './helpers';
import { Component } from 'react';
// import { PrivateRoute } from '../components';

// import { connect } from 'react-redux';

class App extends Component{
    constructor(props){
        super(props);

        // history.listen((location, action) => {
        //     // clear alert on location change
        //     this.props.clearAlerts();
        // });
    }
    render() {
        // const { alert } = this.props;
        return (
            <div className="jumbotron">
                <div className="container">
                    <div className="col-sm-8 col-sm-offset-2">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <Switch>
                                <Route exact path="/" component={HomePage} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />
                                <Redirect from="*" to="/" />
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;


