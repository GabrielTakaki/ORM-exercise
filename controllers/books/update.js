const { Books } = require('../../models');

module.exports = async (req, res) => {
  try {
    const { author, title, pageQuantity } = req.body;
    const { id } = req.params;

    const [updateBook] = await Books.update(
      { author, title, pageQuantity },
      { where: { id } },
    );

    if (!updateBook) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json({ message: 'Livro atualizado com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
}
