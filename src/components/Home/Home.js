import React from 'react';
import Categories from '../Categories/Categories';

const Home = (props) => {
    const {count, setCount} =props;
    return (
        <div style={{border: '1px solid purple'}}>
            <h1>This is home : {count}</h1>
            <Categories count = {count}></Categories>
        </div>
    );
};

export default Home;