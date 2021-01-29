

let addTask=document.querySelector("#todo-save")
let inputTask=document.querySelector("#todo-item")
let listTasks=document.querySelector("#todo-list")
let deleteAll=document.querySelector("#todo-delall")


let arr=JSON.parse(localStorage.getItem("array"))
let count=localStorage.getItem("id")

showLocalStorageTask()

function showLocalStorageTask(){

    if(arr)
        for(const task of arr){
            showTask(task)
        }
}

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
    showTask(newTask)

    count++
    arr.push(newTask)

    localStorage.setItem("id",count)
    localStorage.setItem("array",JSON.stringify(arr))

})

function showTask(newTask){

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
    
}


deleteAll.addEventListener("click",(e)=>{

    if(confirm("are you sure that you want to delete all your task?")){
        
        while(listTasks.firstChild)
            listTasks.firstChild.remove()

        arr=[]
        count=1
        localStorage.removeItem("array")
        localStorage.removeItem("id")

    }
})