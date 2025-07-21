const dados = {
  nome: "João",
  idade: null,
  cidade: "São Paulo",
  email: undefined
};

for(let dado in dados) {
    if(dados[dado] == null || dados[dado] == undefined){
        delete dados[dado]
    }
    
};
console.log(dados)