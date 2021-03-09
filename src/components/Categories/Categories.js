import React, { useContext, useEffect, useState } from 'react';
import { CategoryContext } from '../../App';
import CategoryDetail from '../CategoryDetail/CategoryDetail';

const allProducts = [{name: 'Lenovo', category: 'Laptop'},
{name: 'Asus', category: 'Laptop'},
{name: 'Dell', category: 'Laptop'},
{name: 'Samsung', category: 'Mobile'},
{name: 'Nokia', category: 'Mobile'},
{name: 'Canon', category: 'Camera'},
{name: 'Nikon', category: 'Camera'},
{name: 'Sony', category: 'Camera'},
]

const Categories = () => {
    
    const [category] = useContext(CategoryContext);
    const [products, setProducts] = useState([]);
    useEffect(() =>{
        console.log({category});
        const matchedProducts = allProducts.filter(pd => pd.category.toLowerCase() === category.toLowerCase());
        setProducts(matchedProducts);
    }, [category])
    return (
        <div>
            <h2>Select your category: {category} </h2>
            {
                products.map(pd => <CategoryDetail product={pd}></CategoryDetail>)
            }
        </div>
    );
};

export default Categories;