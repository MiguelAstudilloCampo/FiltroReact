import { createContext, useState } from "react";

export const Globalcontext = createContext()

const GlobalcontextProvider = ({children}) => {


    const [filtro, setFiltro] = useState("");


    return (
        <Globalcontext.Provider value={{
            filtro, 
            setFiltro
        }}>
            {children}
        </Globalcontext.Provider>
    );
}

export default GlobalcontextProvider;