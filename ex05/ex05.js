filtro = (lista, propriedades, valores) => {
  lista.forEach(obj => {
    let valido = true;

    for (let i = 0; i < propriedades.length; i++) {
      let prop = propriedades[i];
      let val = valores[i];

      if (obj[prop] !== val) {
        valido = false;
        break;
      }
    }

    if (valido) {
      console.log(obj);
    }
  });
}
