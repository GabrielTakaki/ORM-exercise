const express = require('express');
const router = require('./controllers/books');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.use('/books', router);

app.listen(PORT, () => {
  console.log(`Ouvindo na porta ${PORT}!`);
});
