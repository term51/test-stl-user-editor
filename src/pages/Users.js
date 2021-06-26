import React from 'react';
import Card from '../components/Card';
import {useStore} from 'react-redux';
import SortButton from '../components/SortButton';

const Users = (props) => {
   const {users} = useStore().getState().user;
   return (
      <React.Fragment>
         <div className="row">
            <div className="col-md-12">
               <SortButton
                  isReverseSort={props.isReverseSort}
                  onToggleSort={props.onToggleSort}
               />
            </div>
         </div>
         <div className="row">
            {
               users.map(user => {
                  return (
                     <div className="col-sm-4 mb-4" key={user.id}>
                        <Card
                           user={user}
                           onDelete={props.onDelete}
                        />
                     </div>
                  );
               })
            }
         </div>
      </React.Fragment>
   );
};

export default Users;