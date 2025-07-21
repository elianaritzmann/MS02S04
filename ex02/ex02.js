const vendas = [
  { produto: "Notebook", valor: 2500 },
  { produto: "Monitor", valor: 1200 },
  { produto: "Teclado", valor: 250 }
];

let total = 0;
vendas.forEach(venda => {
    console.log('produto:' + venda.produto +' preço: '+ venda.valor)
    total= venda.valor + total;
});
console.log('total de vendas: '+ total)