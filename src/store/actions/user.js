import {GET_USERS, TOGGLE_SORT, USER_DELETE, USER_UPDATE} from '../actionTypes';

export function usersSort(users, isReverseSort = false) {
   users.sort(function (a, b) {
      if (isReverseSort) {
         if (a.name > b.name) return -1;
         if (a.name < b.name) return 1;
      } else {
         if (a.name > b.name) return 1;
         if (a.name < b.name) return -1;
      }
      return 0;
   });
   return {
      type: TOGGLE_SORT,
      users
   };
}


export function getUsers(users) {
   usersSort(users);
   return {
      type: GET_USERS,
      users
   };
}

export function deleteUser(id) {
   return {
      type: USER_DELETE,
      id
   };
}

export function updateUser(user) {
   return {
      type: USER_UPDATE,
      user
   };
}