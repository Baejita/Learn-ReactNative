import React, { useReducer } from "react"


export default (reducer, actions , innitialState ) => {
    const Context = React.createContext();

    const Provider = ({children}) => {
        const [state, dispatch] = useReducer(reducer, innitialState)
    

    const boudActions = {};
    for (let key in actions) {
        boudActions[key]= actions[key](dispatch);
    }
return <Context.Provider value={{state , ...boudActions}} >
                {children}
    </Context.Provider>
    }

    
    return {Context, Provider};
}
