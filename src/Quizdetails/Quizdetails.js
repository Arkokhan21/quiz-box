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
        <div className='shadow-xl p-10 m-auto w-7/12 mb-20 relative'>

            <EyeIcon onClick={notify} className="h-6 w-6 text-violet-500 absolute top-15 right-20 cursor-pointer" />
            <ToastContainer />

            <h2 className='mb-5'>{question.question}</h2>
            {
                question.options.map(option =>
                    <p className='border-2 border-violet-200 mb-5 p-5 w-3/6 m-auto'>
                        <input onClick={() => notifyResult(option)} type="radio" name="option" id="option" /> {option}
                    </p>)
            }

        </div>
    );
};

export default Quizdetails;