"use client";
import React, { useState } from "react";

const CadastroForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');


    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('/api/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email }),
            });

            if (response.ok) {
                console.log('Cadastro realizado com sucesso!');

            } else {
                console.error('Error ao cadastrar:', response.status);

            }
        } catch (error) {
            console.error('Ocorreu um erro:', error);

        }
    };

    return (
        <div className="flex items-center justify-center main-h-screen bg-gray-100">
            <div className="bg-white p-8 rouded shadow-md w-full max-w-md">
                <h2 className="text-2x1 front-semibold mb-6 text-gray-800">Cadastro</h2>
                <from onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text=sm front-bold mb-2">
                            Nome:
                        </label>
                        <input
                            type="text"
                            id="nome"
                            className="shadow apparence-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm front-bold mb-2">
                            Email:
                        </label>
                        <input
                        type="email"
                        id="email"
                        className="shadow apparence-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="flex item-center justify-between">
                        <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 pc-4 rounded focus:outline-none focus:shadow-outline"
                        type="submit"
                        >
                            Cadastrar
                        </button>
                    </div>
                </from>
            </div>
        </div>
    );;
}

export default CadastroForm;