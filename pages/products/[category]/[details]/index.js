import { ProductDetails, CategorySelect, About } from '../../../../components'
import PRODUCT_DATA from '../../../../data/products.json'
import { useRouter } from 'next/router'

const products = Object.keys(PRODUCT_DATA)
                        .map(category => PRODUCT_DATA[category]
                        .map(product => ({category, name: product.ref})))
                        .flat()

const Details = () => {
    const router = useRouter()
    const category = router.query.category
    const product = router.query.details

    return (
        <>
            <ProductDetails category={category} product={product}/>
            <CategorySelect />
            <About />
        </>
    )
}

export const getStaticProps = async () => {
    return {
        props: {
            products
        }
    }
}

export const getStaticPaths = async () => {
    const paths = products.map(product => `/products/${product.category}/${product.name}`)

    return {
        paths,
        fallback: false
    }
}

export default Details