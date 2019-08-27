import { createContext } from 'react';

const InitialState = {
   count: 0,
};

const Reducer = (state, action) => {
   switch (action.type) {
      case 'changeTest':
         return {
            count: state.count + action.payload,
         };
      default:
         return state;
   }
};

const Context = createContext();

export { InitialState, Reducer, Context };
