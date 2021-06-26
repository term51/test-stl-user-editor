import {GET_USERS, TOGGLE_SORT, USER_DELETE, USER_UPDATE} from '../actionTypes';

const initialState = {
   users: [],
   isReverseSort: true
};

export default function userReducer(state = initialState, action) {
   switch (action.type) {
      case TOGGLE_SORT:
         return {...state, isReverseSort: !state.isReverseSort, users: action.users};
      case GET_USERS:
         return {...state, users: action.users};
      case USER_DELETE:
         return {...state, users: state.users.filter(user => user.id !== action.id)};
      case USER_UPDATE:
         return {
            ...state, users: state.users.map(user => {
               if (user.id === action.user.id) {
                  user = action.user;
               }
               return user;
            })
         };
      default:
         return state;
   }
}