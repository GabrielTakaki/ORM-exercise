const { Books } = require('../../models');

module.exports = async (req, res) => {
  try {
    

  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });
  }
}