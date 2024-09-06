function pesquisar(){
let section = document.getElementById("resultados-pesquisa"); // Seleciona a seção onde os resultados serão exibidos

let campoPesquisa = document.getElementById
("campo-pesquisa").value

if (campoPesquisa == "") {
    section.innerHTML = "<p>Nada foi encontrado</p>"
     return
}

campoPesquisa = campoPesquisa.toLowerCase()

let resultado = "";
let titulo = "";
let descricao = "";

console.log(campoPesquisa);

console.log(section); // Exibe a seção no console para verificação

let resultados = ""; // Inicializa uma string vazia para armazenar os resultados

// Itera sobre os dados e cria elementos HTML para cada resultado
for (let dado of dados) {
    titulo = dado.titulo.toLocaleLowerCase()
    descricao = dado.descricao.toLocaleLowerCase()
    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa)) {
        //cria um novo elemento
        resultados += `
        <div class="item-resultado"> 
        <h2>
            <a href="#" target="_blank">${dado.titulo}</a> </h2>
          <p class="descricao-meta">${dado.descricao}</p> <a href=${dado.link} target="_blank">Mais informações</a> </div>
      `;
    }
    console.log(dado.titulo.includes(campoPesquisa))
  
}

section.innerHTML = resultados; // Insere os resultados gerados na seção HTML

}