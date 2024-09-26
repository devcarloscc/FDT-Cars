const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());

app.post('/api/register', (req, res) => {
  const { name, email, password } = req.body;
  
  // Leitura do arquivo users.json
  fs.readFile('users.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Erro ao ler o arquivo users.json:', err);
      return res.status(500).json({ error: 'Erro interno do servidor' });
    }
    
    const users = JSON.parse(data);
    
    // Adição do novo usuário aos dados existentes
    users.push({ name, email, password });
    
    // Escrita dos dados atualizados de volta no arquivo users.json
    fs.writeFile('users.json', JSON.stringify(users), (err) => {
      if (err) {
        console.error('Erro ao escrever no arquivo users.json:', err);
        return res.status(500).json({ error: 'Erro interno do servidor' });
      }
      
      res.status(200).json({ message: 'Usuário cadastrado com sucesso' });
    });
  });
});

app.listen(PORT, () => {
  console.log(`Servidor backend rodando na porta ${PORT}`);
});
