
import './product_specifications.css'

function ProductSpecifications() {
    return (
        <section className='product-specifications'>
            <h2>Grape Sneakes specifications</h2>
            <table className="product-specification-table">
                <tr>
                    <th>Brand</th>
                    <td>Apple</td>
                </tr>
                <tr>
                    <th>Model</th>
                    <td>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, iure.</td>
                </tr>
                <tr>
                    <th>Prize</th>
                    <td>$123.99</td>
                </tr>
                <tr>
                    <th>Release date</th>
                    <td>February 29</td>
                </tr>
                <tr>
                    <th>Model Number</th>
                    <td>123/ABCD/45/EFG</td>
                </tr>
                <tr>
                    <th>Category</th>
                    <td>Shoes</td>
                </tr>
                <tr>
                    <th>Type</th>
                    <td>Sneakers</td>
                </tr>
            </table>
        </section>
    )
}

export default ProductSpecifications;