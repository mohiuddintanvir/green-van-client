import React from 'react';

const UserDetails = ({ user }) => {
    const { name, email, role } = user;

    return (
        <div className="flex justify-center items-center  ">
            <div className="overflow-x-auto w-full max-w-4xl">
                <table className="table-auto w-full text-lg text-center">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Email</th>
                            <th className="px-4 py-2">Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white border-b">
                            <td className="px-4 py-2">{name}</td>
                            <td className="px-4 py-2">{email}</td>
                            <td className="px-4 py-2">{role}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserDetails;
