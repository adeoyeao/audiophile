import { ProductCards, CategorySelect, About } from '../../../components'
import { useRouter } from 'next/router'
import PRODUCT_DATA from '../../../data/products.json'

const categories = Object.keys(PRODUCT_DATA)

const Category = () => {
    const router = useRouter()
    const query = router.query.category

    return (
        <>
            <ProductCards query={query}/>
            <CategorySelect />
            <About />
        </>
    )
}

export const getStaticProps = async () => {
    return {
        props: {
            categories
        }
    }
}

export const getStaticPaths = async () => {
    const paths = categories.map(category => `/products/${category}`)

    return {
        paths,
        fallback: false
    }
}

export default Category