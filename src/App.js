import React from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import Users from './pages/Users';
import Details from './pages/Details';

import {connect} from 'react-redux';
import {deleteUser, getUsers, updateUser, usersSort} from './store/actions/user';

import {data} from './data/fixtures';


class App extends React.Component {
   componentDidMount() {
      this.props.getUsers(data);
   }

   render() {
      const routes = (
         <Switch>
            <Route
               path="/"
               exact
               render={
                  () => <Users
                     isReverseSort={this.props.isReverseSort}
                     onToggleSort={() => this.props.usersSort(this.props.users, this.props.isReverseSort)}
                     onDelete={(id) => this.props.deleteUser(id)}
                  />
               }
            />
            <Route
               path="/details/:id"
               render={
                  () => <Details
                     onUpdate={(user) => this.props.updateUser(user)}
                  />
               }
            />
            <Redirect to="/"/>
         </Switch>
      );

      return (
         <div className="App">
            <div className="container">
                  {routes}
            </div>
         </div>
      );
   }
}

function mapStateToProps({user}) {
   return {
      users: user.users,
      isReverseSort: user.isReverseSort
   };
}

function mapDispatchToProps(dispatch) {
   return {
      usersSort: (users, isReverseSort) => dispatch(usersSort(users, isReverseSort)),
      getUsers: (users) => dispatch(getUsers(users)),
      deleteUser: (id) => dispatch(deleteUser(id)),
      updateUser: (user) => dispatch(updateUser(user))
   };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
