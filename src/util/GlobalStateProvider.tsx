import { createContext, useContext, useReducer } from 'react';
import { ITodoItem } from '../interfaces/Todo';

export interface GlobalStateInterface {
  globals: object;
  todos: ITodoItem[];
}

type Action = {
  type: string;
  payload: Partial<GlobalStateInterface>;
};

const reducer = (state: GlobalStateInterface, action: Action) => {
  switch (action.type) {
    case 'UPDATE_STATE':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const GlobalStateContext = createContext({
  state: {} as GlobalStateInterface,
  dispatch: {} as React.Dispatch<Action>,
});

const GlobalStateProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, { globals: {}, todos: [] });

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

const useGlobalState = () => {
  const context = useContext(GlobalStateContext);
  if (context === undefined) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};

export { GlobalStateProvider, useGlobalState };
