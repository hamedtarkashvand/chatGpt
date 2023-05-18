'use client';
import { createContext, useReducer, Reducer, ReactNode } from 'react';
import { reducer, Store } from './reducer';
import { Action } from './action';

type Context = {
  state: Store;
  dispatch: React.Dispatch<Action>;
};
type PropsType = {
  children: ReactNode;
};

export const questionContext = createContext<Context>({} as Context);

const QuestionProvider = ({ children }: PropsType) => {
  const [state, dispatch] = useReducer<Reducer<Store, Action>>(reducer, []);

  return (
    <questionContext.Provider value={{ state, dispatch }}>
      {children}
    </questionContext.Provider>
  );
};

export default QuestionProvider;
