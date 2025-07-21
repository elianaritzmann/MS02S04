const dadosPessoais = { nome: "Lucas", idade: 30 };
const endereco = { cidade: "São Paulo", estado: "SP" };

const objetosMesclados = {...dadosPessoais,...endereco};
console.log(objetosMesclados)
