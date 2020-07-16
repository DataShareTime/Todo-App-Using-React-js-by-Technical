import React from 'react'
const ToDoLists = (props)=>{


    return(
    <> 
    <div className="todo_style">
    <ion-icon name="close-circle-outline" class="fa-times" onClick={()=>{props.onSelect(props.id)}} ></ion-icon>
    <li> {props.text} </li>
    </div>
    </>
    )
};
export default ToDoLists;