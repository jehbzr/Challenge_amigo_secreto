    let input = document.getElementById('amigo');
    let lista = document.getElementById('listaAmigos');
    let valor=input.value;
    function adicionarAmigo(){
  

        if(valor){
            let amigo = document.createElement('ul');
            amigo.textContent=valor;
            lista.appendChild(amigo);
            
            input.value='';
                    } else{
                        alert ("Por favor, insira o nome de um amigo!");
                    }

    }
 function sortearAmigo(){
        input.push(listaAmigos);
 }