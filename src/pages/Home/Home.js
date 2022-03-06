import React from 'react';
import Category from './components/Category';
import Hot from './components/Hot';

const Home = () => {
    return (
        <main>
            <section className="pb-5 banner-area">
                <div className="banner">
                    <img src="./img/banner.png" alt="banner" />
                </div>
            </section>
            <Category />
            <Hot />
        </main>
    );
};

export default Home;