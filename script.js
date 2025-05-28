document.addEventListener('DOMContentLoaded' ,()=>{
    const taskInput = document.getElementById('task-input');
    const addtaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const emptyImage = document.querySelector('.empty-image');
    const toggleEmptyState =()=>{
        emptyImage.style.display = taskList.children.length=== 0? 'block' : 'none';
    }
    function deleteTask(event){
        li.remove();
        toggleEmptyState();
    }

    function addTask(event){
        event.preventDefault();
        const taskText= taskInput.value.trim();
        if (taskText===""){
            alert("Please add a task");
        }    
        else{
            const li=document.createElement('li');
            li.innerHTML=`
            <input type="checkbox" class="checkbox">
            <span>${taskText}</span>
            <div class="task-button">
            <button class="edit-btn"><i class="fa-solid fa-pen"></i></button>
            <button class="delete-btn"><i class="fa-solid fa-trash"></i></button>
            </div>
            `;
               const checkbox=li.querySelector('.checkbox');
            const editBtn = li.querySelector('.edit-btn'); 
            editBtn.addEventListener('click',() => {
                if(!checkbox.checked){
                    taskInput.value = li.querySelector('span').textContent;
                    li.remove();
                    taskInput.style.color='yellow';
                    taskInput.style.filter='brightness(2)';
                    taskInput.focus();
                }
                else{
                    li.remove();
                }
            })
            function deleteTask(event){
        li.remove();
        toggleEmptyState();
    }
    const deleteBtn = li.querySelector('.delete-btn');
      deleteBtn.addEventListener('click' ,deleteTask);
            taskList.appendChild(li);
            taskInput.value='';
            toggleEmptyState();
            }
         
    };
    addtaskBtn.addEventListener('click' ,addTask);
    toggleEmptyState();
     

});
