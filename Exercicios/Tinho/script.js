function envio(){
let sal = document.getElementById('salario')
let res = document.getElementById('res')
let texto = ("Parabéns!!! <br> Seu novo salário é de R$:")

 if(sal.value.length == 0){
    alert("Por favor insira o valor so seu salário")
    }else if(sal.value > 0 && sal.value <= 1250){
        let aumento = sal.value*1.2
        res.innerHTML = texto + aumento
    }else if(sal.value < 1750){
        let aumento = sal.value*1.15
        res.innerHTML = texto + aumento
    }else if(sal.value < 2500){
        let aumento = sal.value*1.1
        res.innerHTML = texto + aumento
    }else{
        let aumento = sal.value*1.05
        res.innerHTML = texto + aumento
    }
        
}

function apaga(){
    res.innerHTML='Por favor digite o valor do seu salário acima.'
}