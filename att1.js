let lista_produto = [];

function insert(produto){
    lista_produto.push(produto);
}
function atualizar(id, produto){
//.find index ou  .index of
lista_produto.indexOf(produto_1,8,"gato",32);

}
function delet(id){
 //index of e fuction splice 
lista_produto.indexOf(id);
lista_produto.splice(1); 
 
}

function buscarporId(id){
    for(let prod of lista_produto){
        if(prod.id == id){
            return prod;
        }
    }
}
function listar(){
    return lista_produto;
}
let produto_1 = {id:1, nome: "arroz", preco:4};

let produto_2 = {id:2, nome: "carne", preco:20};

let produto_3 = {id:3, nome: "fejao", preco:8};

let produto_4 = {id:4, nome: "molho de tomate", preco:2};

let produto_5 = {id:5, nome:"nescau", preco:8};

insert(produto_1);
insert(produto_2);
insert(produto_3);
insert(produto_4);
insert(produto_5);

console.log(listar());
console.log(buscarporId(3));
console.log(delet(1));
console.log(atualizar(produto_1))