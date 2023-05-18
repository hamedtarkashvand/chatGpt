import type { Action } from './action';

export const initialState = {
  user: {
    name: 'client',
  avatar:'',
  _id:'',
  } ,
  text: '',
};

export type Store = typeof initialState[]

export const reducer = (state: Store, action: Action) => {
    
  const { text, user} = action.payload.question;
  switch (action.type) {
    case 'CREATE_QUESTION':
      return [
        ...state,
        {
          text,
          user,
        },
      ];
    default:
      return state;
  }
};
