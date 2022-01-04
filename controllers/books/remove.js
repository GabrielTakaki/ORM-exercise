const { Books } = require('../../models');

module.exports = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteBook = await Books.destroy(
      { where: { id } },
    );

    if (!deleteBook) return res.status(404).json({ message: 'Livro não encontrado' });

    return res.status(200).json({ message: 'Usuário excluído com sucesso!' });
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
}
