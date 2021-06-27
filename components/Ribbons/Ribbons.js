import { Navigation, Footer } from '../../components'
import { useEffect, useContext } from 'react'
import { Context, sessionStorage, SESSION_STORAGE } from '../../store'

const Ribbons = ({ children }) => {
    const [ state, dispatch ] = useContext(Context);
    const setSavedItems = () => { 
        localStorage.setItem('savedItems', JSON.stringify(state))
      }

    const getSavedItems = () => localStorage.getItem('savedItems')

    useEffect(() => {
        const savedItems = JSON.parse(getSavedItems())
        if(savedItems) {
            dispatch({ type: SESSION_STORAGE, session: savedItems })
        } 
    }, [])

    useEffect(() => {
        setSavedItems()
    }, [state])
    
    return (
        <>
            <Navigation/>
            { children }
            <Footer />
        </>
    )
}

export default Ribbons