const { Books } = require('../../models');

module.exports = async (req, res) => {
  try {
    const { title, author, pageQuantity } = req.body;

    const newBook = await Books.create({ title, author, pageQuantity });

    return res.status(201).json(newBook);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
}
