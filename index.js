const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/submit-car', (req, res) => {
  const { marca, modelo, ano, cor } = req.body;

  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Carro Cadastrado</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          margin: 0;
          background-color: #f2f2f2;
        }
        
        .container {
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          max-width: 400px;
          width: 100%;
          text-align: center;
        }
        
        h1 {
          color: #4CAF50;
          margin-bottom: 15px;
        }

        p {
          font-size: 18px;
          color: #333;
          margin: 10px 0;
        }

        .back-button {
          display: inline-block;
          margin-top: 20px;
          padding: 10px 20px;
          background-color: #4CAF50;
          color: white;
          text-decoration: none;
          border-radius: 4px;
          font-weight: bold;
        }

        .back-button:hover {
          background-color: #45a049;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Carro Cadastrado!</h1>
        <p><strong>Marca:</strong> ${marca}</p>
        <p><strong>Modelo:</strong> ${modelo}</p>
        <p><strong>Ano:</strong> ${ano}</p>
        <p><strong>Cor:</strong> ${cor}</p>
        <a href="/" class="back-button">Voltar ao Cadastro</a>
      </div>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
