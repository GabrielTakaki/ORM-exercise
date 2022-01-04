const { Books } = require('../../models');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Books.findByPk(id);

    if (!book) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
}
