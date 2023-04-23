import { createContext, useContext, useEffect, useState } from "react";

const DataContext = createContext()

const DataProvider = ({children}) => {
    const [phones, setPhones] = useState([])
    const loadData = async() => {
        const res = await fetch('/phones.json')
        const data = await res.json()
        setPhones(data)
    }

    useEffect(()=>{
        loadData()
    },[])

    return (
        <DataContext.Provider value={phones}>
            {children}
        </DataContext.Provider>
    );
};

const useSharedData = () => {
    return useContext(DataContext)
}

export {DataProvider, useSharedData};