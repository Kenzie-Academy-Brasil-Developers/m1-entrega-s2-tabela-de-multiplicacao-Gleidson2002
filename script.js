function multiply(x) { // Substitua "nomeDaSuaFuncao" por um nome mais apropriado
    // TODO: escrever dois loops aninhados para desenhar o array bidimensional e monstar o restante da tabela no console.
   let tabela = [];
   for (let i = 1; i <=x;i++){
       let y = [];
       for (let j = 1; j <= x;j++){ 
           //O segundo loop tem que terminar, antes do primeiro loop acontecer.
           y.push(`${i} x ${j}=${i*j}`)
           

       }
       tabela.push(y);
   }
   console.table(tabela)
    
}
multiply(10)

