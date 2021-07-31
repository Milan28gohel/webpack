import React from 'react';
import {Router,Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { history } from './helpers';
import { alertActions } from './actions';
import { PrivateRoute } from './components';
import { HomePage } from './HomePage';
import { LoginPage } from './LoginPage';
import  {RegisterPage } from './RegisterPage';
import Contact from './Contact/Contact';
import { Header } from './Header';
import {Footer} from './Footer';
import {Slide} from './Slidebar';



class App extends React.Component{
    constructor(props){
        super(props);

        history.listen((location, action) => {
            // clear alert on location change
            this.props.clearAlerts();
        });
    };
    render(){
        const { alert } = this.props;
        return(
        
                <div>
                     <Header />
                <div>
                    <div>
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                            <Switch>
                                <PrivateRoute exact path="/" component={HomePage} />
                                <Route path="/slide" component={Slide} />
                                <Route path="/login" component={LoginPage} />
                                <Route path="/register" component={RegisterPage} />
                                <Route path="/Contact" component={Contact} />

                                <Redirect from="*" to="/" />
                            </Switch>
                        </Router>
                    </div>
                </div>
             
                <Footer />
            </div>
        );
    }
}
    function mapState(state) {
        const { alert } = state;
        return { alert };
    }
    
    const actionCreators = {
        clearAlerts: alertActions.clear
    };

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };
