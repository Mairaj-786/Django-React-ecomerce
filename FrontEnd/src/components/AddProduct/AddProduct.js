import React, { useState } from 'react'
import './add-product.css';
const AddProduct = () => {
    const [p_data, setP_data] = useState({
        title: '',
        price: '',
        category: '',
    })

    const [file, setFile] = useState();

    const handleInput = (e) => {
        setP_data({
            ...p_data,
            [e.target.name]: e.target.value
        })
    }

    const handleFile = (e) => {
        setFile({
            [e.target.name]: e.target.files[0]
        })
    }



    const handleSubmit = e => {
        e.preventDefault();
        console.log(p_data, file);

    }

    return (
        <div className="add-product">
            <div className="add-product-wrapper">
                <h2>Add product</h2>
                <form onSubmit={handleSubmit}>
                    <div class="form-group">
                        <input type="text" name="title" value={p_data.title} onChange={handleInput} class="form-control" placeholder="title" />
                    </div>
                    <div class="form-group">
                        <input type="number" name="price" value={p_data.price} onChange={handleInput} class="form-control" placeholder="price" />
                    </div>
                    <div class="form-group">
                        <input type="file" name="" onChange={handleFile} class="form-control" placeholder="image" />
                    </div>
                    <div class="form-group">
                        <input type="text" name="category" value={p_data.category} onChange={handleInput} class="form-control" placeholder="category" />
                    </div>
                    <div class="form-group">
                        <button className="btn btn-outline-success w-100">Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddProduct
