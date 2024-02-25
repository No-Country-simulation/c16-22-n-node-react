import { Link } from 'react-router-dom';
import './Categories.css'
import { useEffect, useState } from 'react';

const DATA_URL = 'https://serviya-back.vercel.app/api/v1/category';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(DATA_URL)
    .then((response) => response.json())
    .then((categories) => setCategories(categories))
  },[]);

  return (
    <section className='mx-10 max-w-[1440px] w-full gap-2  flex flex-wrap justify-center my-20"'>
        {categories.map((category) => (
            <div key={category._id} className="card m-4 rounded-2xl border-solid w-[200px] border-2 py-5 block">
            <Link to={`/categorias/${category.category.toLowerCase()}`}>
            <img src={category.urlImage} alt={category.category} className="colored-img h-20 m-auto"/>
            </Link>
            <p className="text-center color-text">{category.category}</p>
            </div>
        ))}
    </section>
  );
};

export default Categories;
