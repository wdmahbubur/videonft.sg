import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Category = ({ selectedCategory, setSelectedCategory }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get("./json/Category.json")
            .then(res => {
                setCategories(res.data)
            })
    }, [])
    const selectCategory = (name) => {
        setSelectedCategory(name)
    }
    return (
        <div className="container py-4">
            <div className='d-flex justify-content-evenly flex-wrap gap-2'>
                <button className="btn border border-2 border-secondary" onClick={() => selectCategory("")}>All</button>
                {
                    categories.map(category => <button key={category.id} className="btn border border-2 border-secondary" onClick={() => selectCategory(category.name)}>{category.name}</button>)
                }
            </div>
        </div>
    );
};

export default Category;