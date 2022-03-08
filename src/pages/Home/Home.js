import React, { useState } from 'react';
import Category from './components/Category';
import Hot from './components/Hot';

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState("");
    return (
        <main>
            <section className="banner-area">
                <div className="banner">
                    <img src="./img/banner.png" alt="banner" />
                </div>
            </section>
            <Category selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <Hot selectedCategory={selectedCategory} />
        </main>
    );
};

export default Home;