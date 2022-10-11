import React from 'react';
import { Link } from "react-router-dom";

const Quiztopic = ({ quiztopic }) => {

    const { name, logo, total, id } = quiztopic

    return (
        <div className='border-2 border-blue-400 rounded-lg w-64'>

            <img className='w-64 bg-gray-200 rounded-lg' src={logo} alt="" />
            <h2 className='font-bold text-lg mb-2'>{name}</h2>
            <h2>Total Quiz: {total}</h2>

            <button className='bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded my-5'>
                <Link to={`/quiz/${id}`}>Start Practice</Link>
            </button>

        </div>
    );
};

export default Quiztopic;