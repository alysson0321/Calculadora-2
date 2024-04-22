    function soma(){
        let x = document.getElementById('a')
        let y = document.getElementById('b')
        ax = Number(x.value);
        by = Number(y.value);
        sim.innerHTML = ('A soma dos números é: '+(ax+by))
    
    }
    function subtracao(){
        let x = document.getElementById('a')
        let y = document.getElementById('b')
        ax = Number(x.value);
        by = Number(y.value);
        sim.innerHTML = ('A subtração dos números é: '+(ax-by))
    
    }   
    function divi(){
        let x = document.getElementById('a')
        let y = document.getElementById('b')
        ax = Number(x.value);
        by = Number(y.value);
        
        if(ax == 0 || by == 0){
            sim.innerHTML = ('Não existe divisão por zero 👍')
        }else{
            sim.innerHTML = ('A divisão dos números é: '+(ax/by))
        }
        
    
    }
    function mult(){
        let x = document.getElementById('a')
        let y = document.getElementById('b')
        ax = Number(x.value);
        by = Number(y.value);
        sim.innerHTML = ('A multiplicação dos números é: '+(ax*by))
    }