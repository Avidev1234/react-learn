import { MdDeleteForever } from "react-icons/md";
import { IoMdCheckmark } from "react-icons/io";
import "../../App.css";
export const Todolist = ({onDelete,data,checked,onHandlecheckTodo}) => {
    return(

  <li>
    <span className={checked? 'checkList':'notchecklist' }>{data}</span>
    <button className="ckeckButton" onClick={()=>onHandlecheckTodo(data)}>
      <IoMdCheckmark />
    </button>
    <button
      className="deleteButton"
      onClick={() => onDelete(data)}
      // If want to pass an argument we will use fat arrow function/ call me back function.
    >
      <MdDeleteForever />
    </button>
    {/* <button className="deleteButton" onClick={handleDeleteTodo}>
    <MdDeleteForever  />
  </button> */}
  </li>
    ) 
};
