const express = require('express')
const app = express()
const port = 3000;
const bodyParser = require('body-parser');

const { Book } = require('./models');

app.use(bodyParser.json());

app.get('/books', async (req, res) => {
  const book = await Book.findAll();

  res.status(200).json(book);
});

app.get('/book/:id', async (req, res) => {
  const { id } = req.params;

  const bookById = await Book.findByPk(id);

  res.status(200).json(bookById);
});

app.post('/book', async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const newBook = await Book.create({ title, author, pageQuantity, createdAt: new Date()});
  res.status(201).json(newBook);
});

app.patch('/book/:id', async (req, res) => {
  const { id } = req.params;
  const { title, author } = req.body;

  const [updateBook] = await Book.update({ title, author }, { where: { id } });

  if(!updateBook) return res.status(200).json({ message: "Livre não encontrado"});

  res.status(200).json({ message: "Livro atualizado" })
});

app.delete('/book/:id', async (req, res) => {
  const { id } = req.params;
  const deleteBook = await Book.destroy({ where: { id } });
  console.log(deleteBook);

  res.status(200).json({ message: "Livro Deletado do nosso banco de dados" })
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))