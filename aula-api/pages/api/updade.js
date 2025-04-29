import { createConnection } from 'mysql2/promise';


async function connectToDatabase() {
    return createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'teste-api',
    });
}


export default async function handler(req, res) {
    if (req.method !== 'PUT') {
        return res.status(405).json({ error: 'Metodo não permitido' });
    }

    const { id, name, email } = req.body;
    console.log(req.body);

    if (!id || !name || !email) {
        return res.status(400).json({ error: 'id, name, and email são obrigatorios no request body.' });
    }


    try {

        const connection = await connectToDatabase();


        const [result] = await connection.execute(
            'UPDATE users SET name = ?, email = ? WHERE id = ?',
            [name, email, id]
        );


        await connection.end();


        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Usuario não encontrado.'});
        }


        res.status(200).json({ massage: 'Usuario atualizado com sucesso' });
    } catch (error) {
        console.error('Error de conexão com o banco:', error);
        res.status(500).json({ error: 'Error interno de servidor'});
    }
}