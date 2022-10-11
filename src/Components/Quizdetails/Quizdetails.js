import { React } from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Quizdetails = ({ question }) => {

    const notify = () => toast.info(question.correctAnswer);

    const notifyResult = (option) => {
        if (question.correctAnswer === option) {
            toast.success('Correct Answer')
        }
        else {
            toast.error('Wrong Answer')
        }
    }

    return (
        <div className='shadow-xl p-10 m-auto w-7/12 mb-20 text-center'>

            <EyeIcon onClick={notify} className="h-10 w-6 text-violet-500 cursor-pointer" />
            <ToastContainer />

            <h2 className='mb-5 font-bold text-indigo-500'>Quiz: {question.question.slice(3, -4)}</h2>
            {
                question.options.map(option =>
                    <p className='border-2 border-violet-200 mb-5 p-5 w-3/6 m-auto font-bold text-violet-400'>
                        <input onClick={() => notifyResult(option)} type="radio" name="option" id="option" /> {option}
                    </p>)
            }

        </div>
    );
};

export default Quizdetails;