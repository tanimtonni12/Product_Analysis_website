import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, AreaChart, Area } from 'recharts';

const DashBoard = () => {
    const chartData = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 104010
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 245000
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 670100
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 404050
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 509000
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 610000
        }
    ];


    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 m-20'>
            <div>
                <h1 className='text-left text-2xl font-bold ml-10 mt-10 mb-10'>MONTH WISE SELL</h1>

                <LineChart width={600} height={300} data={chartData} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
            <div>
                <h1 className='text-left ml-10 mt-10 text-2xl font-bold mb-10'>Investment VS Revenue</h1>
                <AreaChart width={600} height={300} data={chartData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <XAxis dataKey="month" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="investment" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                    <Area type="monotone" dataKey="revenue" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                </AreaChart>
            </div>



        </div>
    );
};

export default DashBoard;