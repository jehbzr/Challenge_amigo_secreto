//criando um array para armazenar o nome dos amigos
let amigos=[];

// função para adicionar o nome dos amigos
function adicionarAmigo(){
    let incluiAmigo = document.getElementById('amigo');
    let nomeDoAmigo= incluiAmigo.value.trim();
     

    // validar se um campo está vazio
    if(nomeDoAmigo===""){
        alert('Insira um nome,porfavor!');
    }

    // alerta sobre um nome duplicado
    if(amigos.includes(nomeDoAmigo)){

        alert('Esse nome já está na lista!');
        return;
    }
    amigos.push(nomeDoAmigo);
    incluiAmigo.value="";

    atualizaLista();

}
    

// atualiza a lista
    function atualizaLista(){
        let listaAmigos= document.getElementById('listaAmigos');
        listaAmigos.innerHTML="";
        let i=0; 

            while(i < amigos.length){
                let nome =document.createElement('li');
                nome.textContent = amigos[i];
                listaAmigos.appendChild(nome);
                i++
        }

    }

//função que sorteia o nome de um amigo

    function sortearAmigo(){
        if(amigos.length === 0){

            alert('Não tem nomes a sortear,insira um nome.');
        }
       let indiceAleatorio = Math.floor(Math.random() * amigos.length);
       let amigoSorteado = amigos[indiceAleatorio];

       let resultado = document.getElementById('resultado');
       resultado.innerHTML =`O amigo sorteado é: <strong>${amigoSorteado}</strong>`;

    }