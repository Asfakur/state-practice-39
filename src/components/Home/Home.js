import React from 'react';

const Home = (props) => {
    const {count, setCount} =props;
    return (
        <div>
            <h1>This is home : {count}</h1>
        </div>
    );
};

export default Home;