import { React } from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizdetails from '../Quizdetails/Quizdetails';

const Topicdetails = () => {

    const quiz = useLoaderData()

    return (
        <div>
            <h2 className='text-2xl font-bold my-20 bg-violet-500 text-white p-5 w-3/6 m-auto text-center'>Quiz of {quiz.data.name}</h2>
            {
                quiz.data.questions.map(question => <Quizdetails key={question.id} question={question}></Quizdetails>)
            }
        </div>
    );
};

export default Topicdetails;