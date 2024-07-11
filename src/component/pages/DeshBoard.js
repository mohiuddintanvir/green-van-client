import React from 'react';


const DeshBoard = () => {
    return (
        <div className='flex items-center justify-center min-h-screen bg-gray-800 p-4'>
            <div className="overflow-x-auto bg-gray-700 p-6 rounded-lg w-full lg:w-3/4">
                <h1 className="text-2xl text-white mb-4">Orders</h1>
                <div className="overflow-x-auto">
                    <table className="min-w-full text-white">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 sm:px-6 sm:py-3 lg:px-10 lg:py-5 text-left text-xs sm:text-sm lg:text-base font-medium text-gray-200 uppercase tracking-wider">#</th>
                                <th className="px-4 py-2 sm:px-6 sm:py-3 lg:px-10 lg:py-5 text-left text-xs sm:text-sm lg:text-base font-medium text-gray-200 uppercase tracking-wider">Name</th>
                                <th className="px-4 py-2 sm:px-6 sm:py-3 lg:px-10 lg:py-5 text-left text-xs sm:text-sm lg:text-base font-medium text-gray-200 uppercase tracking-wider">Job</th>
                                <th className="px-4 py-2 sm:px-6 sm:py-3 lg:px-10 lg:py-5 text-left text-xs sm:text-sm lg:text-base font-medium text-gray-200 uppercase tracking-wider">Favorite Color</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover:bg-gray-600">
                                <td className="border px-4 py-2 sm:px-6 sm:py-3 lg:px-10 lg:py-5">1</td>
                                <td className="border px-4 py-2 sm:px-6 sm:py-3 lg:px-10 lg:py-5">Cy Ganderton</td>
                                <td className="border px-4 py-2 sm:px-6 sm:py-3 lg:px-10 lg:py-5">Quality Control Specialist</td>
                                <td className="border px-4 py-2 sm:px-6 sm:py-3 lg:px-10 lg:py-5">Blue</td>
                            </tr>
                            <tr className="hover:bg-gray-600">
                                <td className="border px-4 py-2 sm:px-6 sm:py-3 lg:px-10 lg:py-5">2</td>
                                <td className="border px-4 py-2 sm:px-6 sm:py-3 lg:px-10 lg:py-5">Hart Hagerty</td>
                                <td className="border px-4 py-2 sm:px-6 sm:py-3 lg:px-10 lg:py-5">Desktop Support Technician</td>
                                <td className="border px-4 py-2 sm:px-6 sm:py-3 lg:px-10 lg:py-5">Purple</td>
                            </tr>
                            <tr className="hover:bg-gray-600">
                                <td className="border px-4 py-2 sm:px-6 sm:py-3 lg:px-10 lg:py-5">3</td>
                                <td className="border px-4 py-2 sm:px-6 sm:py-3 lg:px-10 lg:py-5">Brice Swyre</td>
                                <td className="border px-4 py-2 sm:px-6 sm:py-3 lg:px-10 lg:py-5">Tax Accountant</td>
                                <td className="border px-4 py-2 sm:px-6 sm:py-3 lg:px-10 lg:py-5">Red</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
           
        </div>
    );
};

export default DeshBoard;
