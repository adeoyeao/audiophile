import { Navigation, Footer } from '../../components'

const Ribbons = ({ children }) => {
    return (
        <>
            <Navigation/>
            { children }
            <Footer />
        </>
    )
}

export default Ribbons