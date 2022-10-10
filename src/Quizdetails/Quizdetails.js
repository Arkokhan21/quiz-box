import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'

const Quizdetails = ({ question }) => {
    console.log(question)
    return (
        <div className='shadow-xl p-10 m-auto w-7/12 mb-20 relative'>

            <button><EyeIcon className="h-6 w-6 text-violet-500 absolute top-15 right-20" /></button>

            <h2 className='mb-5'>{question.question}</h2>

            {
                question.options.map(option =>
                    <p className='border-2 border-violet-200 mb-5 p-5 w-3/6 m-auto'>
                        <input type="radio" name="option" id="option" /> {option}
                    </p>)
            }
        </div>
    );
};

export default Quizdetails;