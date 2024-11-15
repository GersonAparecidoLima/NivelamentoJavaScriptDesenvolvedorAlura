const item = document.getElementById("item-input"); // Selecionando todo o documento html
const botaoSalvarItem = document.getElementById("adicionar-botao");
const listaDeCompras = document.getElementById("lista-de-compras");
let contador = 0;

//identificando quando acontece um click no botão
//Selecionamos o botão, e adicionamos um ouvinte
//vamos colocar dois parametros
//1 o evento 
//2 pode ser uma função
botaoSalvarItem.addEventListener("click", adicionarItem);

function adicionarItem(evento) {
    //Por padrão o botão esta dentro de um form e deve enviar o formulario e atualizar a tela
    //Para evitar o comportamento padrão usamos o preventDefault
    //preventDefault vai previnir o padrão
    // Desta maneira ele reinderiza o conteudo do consele e não reinderizou a tela
    evento.preventDefault();
    //preventDefault(): impede que o comportamento padrão do evento aconteça. 
    //Por exemplo, impede que um link abra uma nova página.

    //criando uma variavel
    //atribuido para ele a criação de um elemento LI
    const itemDalista = document.createElement("li");
    //construindo o contene que vai ficar dentro do elemento da lista 
    const containerItemLista = document.createElement("div");
    //criando uma classe no containerItemLista
    containerItemLista.classList.add("item-lista-container");
    // acessando a classe => item-lista-container e adicionado a containerItemLista


    const containerNomeDoItem = document.createElement("div");

    const containerCheckbox = document.createElement("div");
    containerCheckbox.classList.add("checkbox-container");

    const checkboxInput = document.createElement("input");
    checkboxInput.type = "checkbox";
    checkboxInput.classList.add("checkbox-input");
    checkboxInput.id = "checkbox-" + contador++;

    const checkboxLabel = document.createElement("label");
    checkboxLabel.setAttribute("for", checkboxInput.Id);
    const checkboxCustomizado = document.createElement("div");
    checkboxCustomizado.classList.add("checkbox-customizado");

    checkboxLabel.appendChild(checkboxInput);
    checkboxLabel.appendChild(checkboxCustomizado);

    containerCheckbox.appendChild(checkboxLabel);
    containerNomeDoItem.appendChild(containerCheckbox);




    const nomeDoItem = document.createElement("p");
    nomeDoItem.innerText = item.value; //inserindo valor no nome do item, e o que foi digitado

    //colocando o pagragrafo dentro da div
    containerNomeDoItem.appendChild(nomeDoItem);

    //criando container dos botões
    const containerBotoes = document.createElement("div");

    const botaoRemover = document.createElement("button");
    const botaoEdicao = document.createElement("button");

    botaoRemover.classList.add("item-lista-button");
    botaoEdicao.classList.add("item-lista-button");

    const imagemRemover = document.createElement("img");
    //atribuindo um atributo
    imagemRemover.src = "img/delete.svg";
    //Adicionando um texto alternativo
    imagemRemover.alt = "Remover";

    const imagemEdicao = document.createElement("img");
    imagemEdicao.src = "img/edit.svg";
    imagemEdicao.alt = "Editar";

    //insrindo a img dentro do botão
    botaoRemover.appendChild(imagemRemover);
    botaoEdicao.appendChild(imagemEdicao);


    containerBotoes.appendChild(botaoRemover);
    containerBotoes.appendChild(botaoEdicao);

    containerItemLista.appendChild(containerNomeDoItem);
    containerItemLista.appendChild(containerBotoes);
    itemDalista.appendChild(containerItemLista);
    listaDeCompras.appendChild(itemDalista);



    //pegamos a variavel que e correpondento ao elemento li
    //adicionamos o elemento como filho dela que no caso containerItemLista
    //quando reidrizamos na tela a div ficara dentro do li
    itemDalista.appendChild(containerItemLista);



}

/*
Propriedades do Objeto Event
O objeto event contém várias propriedades que nos dão informações sobre o evento que ocorreu. Aqui estão algumas das mais comuns:

type: diz qual foi o tipo do evento (click, mouseover, keyup, etc.).
target: refere-se ao elemento que disparou o evento.
currentTarget: semelhante ao target, mas se refere ao elemento ao qual o evento foi realmente atribuído.
clientX / clientY: fornece a posição horizontal e vertical do mouse quando um evento do mouse foi disparado.
keyCode: no caso de um evento de teclado, diz qual tecla foi pressionada.

Métodos do Objeto Event
Além das propriedades, o objeto event também tem métodos (ações) que você pode usar. Dois dos mais usados são:

preventDefault(): impede que o comportamento padrão do evento aconteça. Por exemplo, impede que um link abra uma nova página.
stopPropagation(): impede que o evento continue a ser propagado. Ou seja, ele não deixa o evento "borbulhar" para os elementos pais.


<button id="meuBotao">Clique aqui!</button>

<script>
  document.getElementById('meuBotao').addEventListener('click', function(event) {
    alert("Botão clicado!");
    console.log(event.type); // Mostra o tipo do evento no console, que será "click"
    console.log(event.target); // Mostra o elemento que disparou o evento, que será o botão
  });
</script>

*/