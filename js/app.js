function toSearch() {
    // Obtém referências aos elementos do DOM
    let section = document.getElementById('result');
    let searchInput = document.getElementById('searchInput').value;
  
    // Inicializa variáveis
    let result = '';
    let footer = document.getElementsByTagName('footer')[0];
  
    // Converte a entrada de pesquisa para minúsculas para pesquisa insensível a maiúsculas e minúsculas
    searchInput = searchInput.toLowerCase();
  
    // Variáveis temporárias para armazenar propriedades dos dados (evita sobrescrita)
    let char = '';
    let description = '';
    let affiliation = '';
    let tags = '';
  
    // Itera por cada item de dados
    for (let data of dataList) {
      // Converte as propriedades dos dados para minúsculas para correspondência
      char = data.char.toLowerCase();
      description = data.description.toLowerCase();
      affiliation = data.affiliation.toLowerCase();
      tags = data.tags.toLowerCase();
  
      // Verifica se o termo de pesquisa corresponde a alguma propriedade de dados (insensível a maiúsculas e minúsculas)
      if (char.includes(searchInput) || description.includes(searchInput) || affiliation.includes(searchInput) || tags.includes(searchInput)) {
        // Constrói a string de resultado com os detalhes do personagem
        result += `
          <div class="cardChar">
            <h2>
              <a href="${data.link}" target="_blank" rel="noopener noreferrer">
                ${data.char}
              </a>
            </h2>
            <h3>
              ${data.affiliation}
            </h3>
            <p>
              ${data.description}
            </p>
            <p>
              <strong>Habilidades</strong>: ${data.abilities}
            </p>
            <p>
              <strong>Curiosidades</strong>: ${data.curiosity}
            </p>
          </div>
        `;
      }
    }

    // Lidar com a entrada de pesquisa vazia
    if (searchInput.length === 0) {
      // Define o resultado para a mensagem de pesquisa vazia
      result = `
        <div class="cardChar" id="failMessage">
          <p>
            Preencha o campo de busca
          </p>
        </div>
      `;
    } else if (!result) { // Nenhuma correspondência encontrada
      // Define o resultado para a mensagem de nenhuma correspondência
      result = `
        <div class="cardChar" id="failMessage">
          <p>
            Personagem não encontrado
          </p>
          <p>
            Caso queira adicionar um novo envie um email com o nome do personagem para o link no rodapé
          </p>
        </div>
      `;
    }
  
    // Atualiza o DOM com os resultados da pesquisa
    section.innerHTML = result;
  }