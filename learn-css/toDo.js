let todoList=[
    {
        item:'This is java',
        dueDate:'12-9-2012'
    },
    {
        item:'Hello Python',
        dueDate:'19-10-2001'
    }
]
displayItems();
function addTodo(){
    let inputElement=document.querySelector('#todo-input');
    let DateElement=document.querySelector('#todoDate');

    let todoItem=inputElement.value;
    let todoDate=DateElement.value;
    todoList.push({item:todoItem,dueDate:todoDate});
    inputElement.value='';
    DateElement.value='';

    displayItems();
}

function displayItems(){
    let containerELement=document.querySelector('.todo-container');
    let newHtml='';
   
    for(let i=0;i<todoList.length;i++){
        let {item,dueDate}=todoList[i];
        
        newHtml+=`
        
        <span>${item}</span>
        <span>${dueDate}</span>
        <button onclick="todoList.splice(${i},1);
        displayItems();" class="del-button">Delete</button>
        
      
        `;
    }
    containerELement.innerHTML=newHtml;
    
}
