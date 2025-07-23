const obj = {
    valor: 0,
    nome: 'lalala',
    marca: 'tralala',

    incrementar: function(){
        return this.valor ++
    },

    decrementar: function(){
       return this.valor--
    },

    mostrarValor: function(){
        console.log(`O valor atual é: ${this.valor}`);
    }
}

