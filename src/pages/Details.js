import React from 'react';
import {Link, useHistory, useParams} from 'react-router-dom';
import {useStore} from 'react-redux';
import {useState} from 'react';
import Input from '../components/Input';
import Select from '../components/Select';

const Details = (props) => {
   const [user, setUser] = useState({});

   const {users} = useStore().getState().user;
   const history = useHistory();
   const params = useParams();

   let userData = {};

   if (Object.keys(user).length === 0) {
      userData = users.filter(user => user.id === +params.id);
      if (userData.length > 0) setUser(userData[0]);
   }

   function submitHandler(event) {
      event.preventDefault();
      props.onUpdate(user);
      history.push('/');
   }

   function handleChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;

      const formData = {...user, [name]: value};
      setUser(formData);
   }

   const selectOptions = ['Australia', 'Russia', 'USA'];

   return (
      <form onSubmit={submitHandler}>
         <Input
            label="Name"
            name="name"
            value={user.name ? user.name : ''}
            onChange={handleChange}
         />

         <Input
            label="Phone"
            name="phone"
            value={user.phone ? user.phone : ''}
            onChange={handleChange}
         />

         <Input
            label="E-mail"
            name="email"
            value={user.email ? user.email : ''}
            onChange={handleChange}
         />

         <Select
            label="Country"
            name="country"
            value={user.country ? user.country : ''}
            onChange={handleChange}
            options={selectOptions}
         />

         <Input
            label="Age"
            type="number"
            name="age"
            value={user.age ? user.age : ''}
            onChange={handleChange}
         />

         <button type="submit" className="btn btn-success">Save</button>
         <Link to="/">
            <button className="btn btn-primary">Back to main</button>
         </Link>
      </form>
   );
};

export default Details;