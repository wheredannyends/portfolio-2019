import { createContext } from 'react';

export const initialState = {
   count: 0,
};

export const reducer = (state, action) => {
   switch (action.type) {
      case 'changeTest':
         return {
            count: state.count + action.payload,
         };
      default:
         return state;
   }
};

export const Context = createContext();
