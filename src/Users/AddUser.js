import React from 'react';

const Adduser = {props} => {
	const addUserHandler = {event} => {
		event.preventDefault();
	};
return (
  <form onSubmit={addUserHandler}>
   <label htmlFor="username">Username</label>
   <input id="userame" type="text"/>
   <label htmlFor="age">Age (Years)</label>
   <input id="userame" type="number"/>
   <button type="submit">Add User</button>
  </form>
 );

};

export default Adduser;