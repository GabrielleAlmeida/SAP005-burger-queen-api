// aqui vai o código que acessa o banco de dados
//Seviço - funções a serem executadas --- conjunto de códigos
//define o que faz cada função

const getAllExamples = (req, res) => {
  console.log("você também pode utilizar o console para visualizar =)")
  res.send("Request feita")
} 


module.exports = {getAllExamples}