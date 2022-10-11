import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Statistics = () => {
    const data = [
        {
            id: 1,
            logo: "https://live.staticflickr.com/65535/52413593240_e00326e727_o.png",
            name: "React",
            total: 8
        },
        {
            id: 2,
            logo: "https://live.staticflickr.com/65535/52412638962_12e932256a_o.png",
            name: "JavaScript",
            total: 9
        },
        {
            id: 4,
            logo: "https://live.staticflickr.com/65535/52413665713_5977a693cb_o.png",
            name: "CSS",
            total: 8
        },
        {
            id: 5,
            logo: "https://live.staticflickr.com/65535/52412639027_5692c15b3f_o.png",
            name: "Git",
            total: 11
        }
    ]

    return (
        <div>
            <p className='text-3xl font-bold mt-20 text-violet-400 border-2 border-violet-400 w-3/6 m-auto p-5'>Simple BarChart</p>
            <div className='grid place-content-center mt-32'>
                <BarChart
                    width={700}
                    height={500}
                    data={data}
                    margin={{
                        top: 5,
                        right: 20,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="total" fill="#8884d8" />
                </BarChart>
            </div>
        </div>
    );
};

export default Statistics;