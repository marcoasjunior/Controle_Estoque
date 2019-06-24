var dados_storage = JSON.parse(localStorage.getItem("Produtos"));

function criar() {

    var table = document.createElement('table');
    var tbody = document.createElement('tbody');
    tbody.setAttribute('class', 'tbody');
    table.setAttribute('class', 'table');
    var array_val = [];
    var array_header = ["Código","Preço", "Descrição", "Quantidade", "Medida"]

    // gerando array dos valores

    for(let i = 0; i < dados_storage.length; i++){
        array_val[i] = Object.values(dados_storage[i]);
        console.log(array_val)
    }

    // gerando header

    let header = document.createElement('tr');
    for(let j = 0; j < 5; j++){
            
        let th = document.createElement('th');
        let span = document.createElement('span');
        span.innerHTML = array_header[j];
        th.appendChild(span);
        header.appendChild(th);
    }
    tbody.appendChild(header);

    // escrevendo os valores na tabela
    
    for(let i = 0; i < dados_storage.length; i++){
        x = i;
        let tr = document.createElement('tr');
        tr.setAttribute("id", ("row" + [i] + "a"));
        tr.setAttribute("onclick", "deleterow()");
            
            for(let j = 0; j < 5; j++){
            
                let td = document.createElement('td');
                let span = document.createElement('span');
                span.innerHTML = String(array_val[i][j]);
                span.setAttribute("class", (x + "camp" + [j]));
                td.appendChild(span);
                tr.appendChild(td);
            }
      
            tbody.appendChild(tr);
        }

    table.appendChild(tbody);

    document.body.appendChild(table);
}

function abrir(){

    window.open("./../estoque.html", "_blank");
}


function deleterow(){
    var target = event.currentTarget.id;
    if(confirm("Você deseja remover este registro?")){
            var corte = target.slice(3, -1);
            console.log(corte);
            dados_storage.splice(parseInt(corte), 1);
            document.getElementById(target).remove();

            localStorage.setItem("Produtos", JSON.stringify(dados_storage));}








}




criar()