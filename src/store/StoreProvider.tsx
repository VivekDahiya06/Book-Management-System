import { createContext, useReducer, type FC, type ReactNode } from 'react'
import { initialState, Reducers, type ReducerActionType, type ReducerStateType } from './Reducers';


interface Props{
    children: ReactNode
}

interface StoreContextType {
    state: ReducerStateType;
    dispatch: React.Dispatch<ReducerActionType>;
}

export const StoreContext = createContext<StoreContextType|undefined>(undefined);

const StoreProvider: FC<Props> = ({ children }) => {
    const [state, dispatch] = useReducer(Reducers, initialState);

  return (
    <StoreContext.Provider value={{state, dispatch}}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider
