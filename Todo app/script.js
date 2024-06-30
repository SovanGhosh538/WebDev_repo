const input=document.querySelector("input");
const button=document.querySelector("button");
const list_of_tasks=document.querySelector("ul");
const taskHolder=function(){
    const newTask=input.value;
    if(newTask.length==0)
        return;
    const task= taskCreator(newTask);
    list_of_tasks.appendChild(task);
    input.value="";
    const dltBtn=task.children[1];
    dltBtn.addEventListener("click",
        function(){
            task.remove();
        }
    )
}
function taskCreator(newTask){
    const div=document.createElement("div");
    const button=document.createElement("button");
    const li=document.createElement("li");
    button.innerText="Delete";
    li.innerText=newTask;
    div.appendChild(li);
    div.appendChild(button);
    return div;
}

button.addEventListener("click",taskHolder);