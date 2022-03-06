import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Category = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get("./json/Category.json")
            .then(res => {
                setCategories(res.data)
            })
    }, [])

    return (
        <div className="container">
            <div className='d-flex justify-content-evenly flex-wrap gap-2'>
                {
                    categories.map(category => <button key={category.id} className="btn border border-2 border-secondary">{category.name}</button>)
                }
            </div>
        </div>
    );
};

export default Category;