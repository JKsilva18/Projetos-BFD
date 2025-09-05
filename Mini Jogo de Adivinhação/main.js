
    function numeroSecreto(min, max) {
        return numeroSecreto = Math.floor(Math.random() * (max - min +1)) + min
         }

    function jogar() {
        const min = 1
        const max = 100
        const gerarNumeroSecreto = numeroSecreto(min, max)
        let armazenamentoDeTentativas = []
        let acertou = false;
        let maxDeTentativa = 10
              
     for(i = 1; i<= maxDeTentativa; i++) {
        let tentativa = prompt("Tente adivinhar o numero secreto! Digite um numero entre 1 a 100 e boa sorte!")
          
        if(tentativa === null) break;

        const resposta = Number(tentativa)
        if (Number.isNaN(resposta)) {
                 alert("Digite um número");
            controle--;
            continue;
        }
            
        armazenamentoDeTentativas.push(tentativa)

        if (resposta === gerarNumeroSecreto) {

            alert(`Você acertou na ${controle}ª tentativa!`)

            acertou = true;

        break;
              
        } else if(resposta < gerarNumeroSecreto ){

        alert(`Numero menor que o numero secreto, essa foi sua ${controle}ª tentativa de ${maxDeTentativa}`) 
        
        } else {

            alert(`Numero maior que o numero secreto, essa foi sua ${controle}ª tentativa de ${maxDeTentativa}`)
        }        
            }

        if (!acertou) {
            
        alert(`Suas tentativas acabaram! O número secreto era ${gerarNumeroSecreto} :) Seu historico de tentativas ${armazenamentoDeTentativas.join(' | ')}`)

        } else {

        alert(`Segue seu historico de tentativas ${armazenamentoDeTentativas.join(' | ')}`)
            }

        console.log(armazenamentoDeTentativas)
            }

            window.jogar();