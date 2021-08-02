import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../actions';
import { Header } from '../Header';
import {Slide} from '../Slidebar';


class HomePage extends React.Component{
    componentDidMount()
    {
        this.props.getUsers();
    }
    handleDeleteUser(id){
        return (e) => this.props.deleteUser(id);
    }
    render(){
        const{ user, users } =  this.props;
        return(
            <div>
                      <Header />
            {/* <div className="col-md-6 col-md-offset-3">
                <h1> Hi {user.firstName}! </h1>
                <p> you're logged in with React!! </p>
                <h3> All registered users: </h3>
                {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <ul>
                        {users.items.map((user, index) =>
                            <li key={user.id}>
                                {user.firstName + ' ' + user.lastName}
                                {
                                    user.deleting ? <em> - Deleting...</em>
                                    : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                    : <span> - <a className ="btn btn-link" onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                }
                            </li>
                        )}
                    </ul>
                }
            </div> */}
            <Slide />
            <div class="about">
         <div class="container">
            <div class="row d_flex">
               <div class="col-md-5">
                  <div class="titlepage">
                     <h2> Hi {user.firstName}!</h2>
                     <h2>you're logged in with React!!</h2>
                     <br/>
                     <h2>All registered users:</h2>

                     <p>
                     {users.loading && <em>Loading users...</em>}
                {users.error && <span className="text-danger">ERROR: {users.error}</span>}
                {users.items &&
                    <ul>
                        {users.items.map((user, index) =>
                            <li key={user.id}>
                                {user.firstName + ' ' + user.lastName}
                                {
                                    user.deleting ? <em> - Deleting...</em>
                                    : user.deleteError ? <span className="text-danger"> - ERROR: {user.deleteError}</span>
                                    : <span> - <a className ="btn btn-link" onClick={this.handleDeleteUser(user.id)}>Delete</a></span>
                                }
                            </li>
                        )}
                    </ul>
                }
                     </p>
                  </div>
               </div>
               <div class="col-md-7">
                  <div class="about_img">
                     <figure><img src="public/images/nes.jpg" alt="#"/></figure>
                  </div>
               </div>
            </div>
         </div>
      </div>
            </div>
        )

    }
}
function mapState(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return { user, users };
}

const actionCreators = {
    getUsers: userActions.getAll,
    deleteUser: userActions.delete
}

const connectedHomePage = connect(mapState, actionCreators)(HomePage);
export { connectedHomePage as HomePage };
