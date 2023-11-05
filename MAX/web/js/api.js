const express = require('express');
const { Pool } = require('pg');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());

const pool = new Pool({
    host: 'berry.db.elephantsql.com',
    user: 'zvgodfxg',
    password: 'kR66oMes2dtQ8_n9xvqC0cDvTTcdTlCP',
    database: 'zvgodfxg'
    port: 5432, // Porta padrão do PostgreSQL
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const query = 'SELECT * FROM funcionario WHERE ra = $1 AND cpf = $2';
  const values = [username, password];

  pool.query(query, values, (error, results) => {
    if (error) {
      res.status(500).json({ error: 'Erro interno do servidor' });
      return;
    }

    if (results.rows.length > 0) {
      res.json({ success: true, message: 'Login bem-sucedido' });
    } else {
      res.status(401).json({ error: 'Credenciais inválidas' });
    }
  });
});

app.listen(3000, () => {
  console.log('Servidor está ouvindo na porta 3000');
});


