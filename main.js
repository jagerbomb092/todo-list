// Selectors
    let todoInput =document.querySelector('.todo-input')
    let todoButton = document.querySelector('.todo-button')
    let todoList = document.querySelector('.todo-list')
   
    
// Event Listeners
todoButton.addEventListener('click',addTodo)
// Functions
function addTodo(e){
    e.preventDefault()
    //todo div
    let todoDiv = document.createElement('div')
    todoDiv.classList.add('todo') 
    //Create LI
    let newTodo = document.createElement('li')
    if (todoInput.value === '') {
        alert('Bạn chưa nhập việc bạn cần làm')
        return
    } else {
        newTodo.innerText = `${todoInput.value}`
        newTodo.classList.add('todo-item')
        todoDiv.appendChild(newTodo)
        todoInput.value=''
    }
    
    // CHeack mark button
    let completedButton = document.createElement('button')
    completedButton.innerHTML = `<i class = 'fas fa-check'></i>`
    completedButton.classList.add('complete-btn')
    todoDiv.appendChild(completedButton)
    // delete button
    let trashButton = document.createElement('button')
    trashButton.innerHTML = `<i class = 'fas fa-trash'></i>`
    trashButton.classList.add('trash-btn')
    todoDiv.appendChild(trashButton)
    //append into father list
    todoList.appendChild(todoDiv)
    todoList.addEventListener('click',deleteCheck)
    function deleteCheck(e){
     
    if (trashButton.contains(e.target)) {
        let parent = trashButton.parentElement
        trashButton.parentElement.classList.add('removed')
        parent.addEventListener('transitionend',()=>{
            todoList.removeChild(parent)
            
        })
    } 
    else if (completedButton.contains(e.target)){
        completedButton.parentElement.classList.toggle('completed')
    }
}
}
