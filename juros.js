import entrada from 'readline-sync'

console.log("\nAplicação de Juros:\n");

let valorDivida = parseFloat(entrada.question("Informe o valor devido: "));

if(valorDivida > 0){
    let diasEmAtraso = parseInt(entrada.question("Informe quantos dias se passaram desde o vencimento do boleto: "));

    if(diasEmAtraso > 0){
        console.log("\nValor original da dívida: R$ " + valorDivida.toFixed(2));
        console.log("Dias atrasado: " + diasEmAtraso);

        let juros = (diasEmAtraso > 15) ? 10 : 5;
        let valorJuros = (valorDivida / 100) * juros;
        let totalDivida = valorDivida + valorJuros;

        console.log("Taxa de Juros: " + juros + "%")
        console.log("Valor total com Juros: R$ " + totalDivida.toFixed(2));
        
    }else {
        console.log("Você está em dia!") 
    }      
}else {
    console.log("O valor da dívida deve ser maior que zero!")
}





