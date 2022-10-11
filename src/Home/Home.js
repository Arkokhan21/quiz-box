import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Quiztopic from '../Statistics/Quiztopic/Quiztopic';

const Home = () => {
    const quiztopics = useLoaderData()

    return (
        <div>
            <div className="bg-violet-800 p-32 my-10 w-4/5 m-auto rounded-3xl">
                <p className="text-4xl font-bold text-white mb-10">
                    Self Assessment Simplified
                </p>
                <p className="text-2xl text-white">
                    Take fun Technology quizzes and learn about Technology. Such as Html, Css, Js, <br /> React, Tailwind, Bootstrap and More...
                </p>
            </div>

            <div className='flex space-x-36 ml-56 my-28'>
                {
                    quiztopics.data.map(quiztopic => <Quiztopic key={quiztopic.id} quiztopic={quiztopic}></Quiztopic>)
                }

            </div>
        </div>
    );
};

export default Home;

