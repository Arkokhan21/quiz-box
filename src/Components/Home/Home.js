import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Quiztopic from '../Quiztopic/Quiztopic';

const Home = () => {
    const quiztopics = useLoaderData()

    return (
        <div>
            <div className='p-40 bg-no-repeat bg-cover bg-center' style={{
                backgroundImage: `url("https://www.bergerpaints.com/colour-magazine/Upload/Quiz/Banner/quiz-bnr-may21.jpg")`,
            }}>
                <p className="text-4xl font-bold text-violet-500 mb-10">
                    SELF ASSESSMENT SIMPLIFIED
                </p>
                <p className="text-2xl text-violet-500">
                    Take fun Technology quizzes and learn about Technology. Such as Html, Css, Js, <br /> Git, React, Tailwind, Bootstrap and More..
                </p>
            </div>

            <div className='text-center grid place-content-center gap-y-5 my-28 md:flex md:space-x-36'>
                {
                    quiztopics.data.map(quiztopic => <Quiztopic key={quiztopic.id} quiztopic={quiztopic}></Quiztopic>)
                }
            </div>
        </div>
    );
};

export default Home;

