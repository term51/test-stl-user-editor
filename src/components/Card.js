import React from 'react';
import {Link} from 'react-router-dom';

const Card = ({user, onDelete}) => {
   return (
      <div className="card">
         <div className="card-body">
            <h5 className="card-title">{user.name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">Phone: {user.phone}</h6>
            <h6 className="card-subtitle mb-2 text-muted">E-mail: {user.email}</h6>
            <h6 className="card-subtitle mb-2 text-muted">Country: {user.country}</h6>
            <h6 className="card-subtitle mb-2 text-muted">Age: {user.age}</h6>
            <Link to={'/details/' + user.id}>
               <button className="btn btn-sm btn-success">Update</button>
            </Link>
            <button onClick={() => onDelete(user.id)} className="btn btn-sm btn-danger">Delete</button>
         </div>
      </div>
   );
};

export default Card;