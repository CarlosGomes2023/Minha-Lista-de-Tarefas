//essa constante é responsavel por guardar a chave: to do list, que vem da localStorage 

const localStorageKey  = 'to-do-list-cg'


function validateIfExistsNewTask(){

    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let inputValue = document.getElementById('input-item').value
    let exists = values.find(x => x.name == inputValue)

    return !exists ? false: true
}

function newTask(){
  
    let input = document.getElementById('input-item')//a var input ganhou o controle do elemento html que tenha um id, de nome=input-item
    input.style.border = ''

    //Validation
    if(!input.value){
     input.style.border = '1px solid red'
     alert('Digite algo para inserir na sua lista')

    }else if(validateIfExistsNewTask()){
        alert('Já existe uma task com essa descrição')

    }
    else{ 
        /*se houver alguma coisa no elemento input, vá ao lugar onde o navegador guarda os dados, pegue a string que encontrares,
        com a ajuda do metodo json.parse, converta a string em um array e jogue o valor na variavel values.
        */

    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    
        //adicione ao array values o valor que digitamos no elemento input
           values.push({
                name: input.value
           })

           //imprima na console o valor do array values

//actualize o valor do localStorage com o método stringfy que converte um objecto Js em uma string
          localStorage.setItem(localStorageKey,JSON.stringify(values))
           showValues()
    }
     input.value = ''

}

function showValues(){
    let values = JSON.parse(localStorage.getItem(localStorageKey) )
    let list = document.getElementById('to-do-list')
    list.innerHTML = " "

    for(let i=0; i < values.length; i++){

      //atrubui valores na lista, sem precisar que a anterior desapareça
        list.innerHTML += `<li> ${values[i]['name']}<button id='btn-ok' onclick='removeItem("${values[i]['name']}")'>OK</button> </li>`
    }
}

 function removeItem(data){
   
    let values = JSON.parse(localStorage.getItem(localStorageKey)|| "[]")
    let index =  values.findIndex(x => x.name == data)
    values.splice(index,1)
    localStorage.setItem(localStorageKey,JSON.stringify(values))
    showValues()  
    
 }

        showValues()

