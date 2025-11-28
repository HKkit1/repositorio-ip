// Função que busca um produto pelo nome
function buscarProduto(lista, nomeBuscado) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].nome === nomeBuscado) {
            return lista[i]; // retorna o objeto completo
        }
    }
    return null; // não encontrado
}

// Exemplo de lista de produtos
const produtos = [
    { nome: "Camiseta", preco: 50 },
    { nome: "Tênis", preco: 200 },
    { nome: "Boné", preco: 30 }
];

// Exemplo de uso da função
const resultado = buscarProduto(produtos, "Tênis");
console.log(resultado); // { nome: "Tênis", preco: 200 }
