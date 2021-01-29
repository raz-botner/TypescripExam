

let addTask=document.querySelector("#todo-save")
let inputTask=document.querySelector("#todo-item")
let listTasks=document.querySelector("#todo-list")

let arr=localStorage.getItem("array")
let count=localStorage.getItem("id")

if(!arr)
    arr=[]

if(!count)
    count=1


class Task{

    constructor(id,details,status=0){

        this.id=id;
        this.details=details;
        this.status=status;
    }
}


addTask.addEventListener("click",(e)=>{
    e.preventDefault()

    let newTask=new Task(count,inputTask.value)

    let divRow=document.createElement("div")
    let divTask=document.createElement("div")
    let divVBtn=document.createElement("div")

    divRow.classList.add("todo-row")
    divTask.classList.add("todo-item")
    divVBtn.classList.add("VBtn")

    divTask.innerText=newTask.details
    divVBtn.innerText= `V`

    divRow.appendChild(divTask)
    divRow.appendChild(divVBtn)
    listTasks.appendChild(divRow)



})