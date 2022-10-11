import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
            <p className='text-2xl font-bold my-20 bg-violet-500 text-white p-5 text-center'>Simple BarChart on Total Quiz</p>
            <ResponsiveContainer width="100%" height={500}>
                <div className='mt-32 flex items-center justify-center'>
                    <BarChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
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
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;