

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
            checkDoneOrNot(task,listTasks.lastChild.lastChild)
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
    inputTask.value=""

    localStorage.setItem("id",count)
    localStorage.setItem("array",JSON.stringify(arr))

})

function showTask(newTask){

    let divRow=document.createElement("div")
    let divTask=document.createElement("div")
    let divVBtn=document.createElement("div")

    divRow.classList.add("todo-row")
    divTask.id=newTask.id
    divTask.classList.add("todo-item")
    divVBtn.classList.add("VBtn")

    divTask.innerText=newTask.details
    divVBtn.innerText= `V`

    divVBtn.addEventListener("click",(event)=>{
        addDoneTask(event.target)
    })

    divRow.appendChild(divTask)
    divRow.appendChild(divVBtn)
    listTasks.appendChild(divRow)

    
}


deleteAll.addEventListener("click",()=>{

    if(confirm("are you sure that you want to delete all your task?")){
        
        while(listTasks.firstChild)
            listTasks.firstChild.remove()

        arr=[]
        count=1
        localStorage.removeItem("array")
        localStorage.removeItem("id")

    }
})

function addDoneTask(event){

    let x=event.previousSibling.id
    let theTask

    for(const task of arr){

        if(task.id==x){
            theTask=task
            break
        }
    }
    if(theTask.status==0){
        theTask.status=1
        localStorage.setItem("array",JSON.stringify(arr))
        checkDoneOrNot(theTask,event)
    }else{
        theTask.status=0
        localStorage.setItem("array",JSON.stringify(arr))
        checkDoneOrNot(theTask,event)
    }
}

function checkDoneOrNot(task,e){

    console.log(e)
    console.log(task.status)

    if(task.status)
        e.previousSibling.classList.add("done")
    else
        e.previousSibling.classList.remove("done")
}