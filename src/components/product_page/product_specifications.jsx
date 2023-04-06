
import './product_specifications.css'
import { useNavigate, useParams } from 'react-router-dom';
import data from '../../database/product_details_data'

function ProductSpecifications() {
    const {id} = useParams();

    const {specifications} = 
    data.find(function(product){
        return product.id == id
    })

    // "brand": "Henned and Mauritz",
    //         "model": " Loose Bootcut Jeans",
    //         "price": 2699.00,
    //         "release_date": "12 feb 2023",
    //         "model_number": "efgh/abcd/43",
    //         "category": "clothing",
    //         "type": "Loose Bootcut Jeans"

    const {brand, model, release_date, model_number, category, type} = specifications

    return (
        <section className='product-specifications'>
            <h2>Product specifications</h2>
            <table className="product-specification-table">
                <tr>
                    <th>Brand</th>
                    <td>{brand}</td>
                </tr>
                <tr>
                    <th>Model</th>
                    <td>{model}</td>
                </tr>
                <tr>
                    <th>Release date</th>
                    <td>{release_date}</td>
                </tr>
                <tr>
                    <th>Model Number</th>
                    <td>{model_number}</td>
                </tr>
                <tr>
                    <th>Category</th>
                    <td>{category}</td>
                </tr>
                <tr>
                    <th>Type</th>
                    <td>{type}</td>
                </tr>
            </table>
        </section>
    )
}

export default ProductSpecifications;