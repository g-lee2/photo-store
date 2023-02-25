import React, { useState } from "react";

const Context = React.createContext()

function ContextProvider({children}) {
    const [photos, setPhotos] = useState([]);
    return (
        <Context.Provider value={{photos}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}