import Product from "./Product"

export default function Products({products}){
    return(
        <div className="product-container">
            {products.map((product) => (
            <Product product={product} key={product.id} />
        ))}
        </div>

    )
}