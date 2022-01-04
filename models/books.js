const Books = (sequelize, DataTypes) => {
  const Books = sequelize.define("Books", {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER,
  }, {
    // underscored : Este campo nos ajudará a resolver o primeiro problema, ele fará com que parâmetros recebidos em Camel Case , sejam convertidos em Snake Case , quando for feita uma consulta a respectiva tabela.
    underscored: true,

    // tableName : Este campo nos ajudará a resolver o segundo problema, aqui podemos declarar explicitamente, qual o nome da tabela que estamos referenciando, retirando assim a responsabilidade do Sequelize de nomear a tabela.
    tableName: 'Books',
  });

  return Books;
};

module.exports = Books;
