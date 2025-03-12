import { useEffect, useState } from "react";

import { Todoform } from "./Todoform";
import "./Todo.css";
import { Todolist } from "./Todolist";

export const Todo = () => {
  const [task, setTask] = useState(() => {
    const rawTodods = localStorage.getItem("react-todo"); //getting data in the form of string

    if (!rawTodods) return []; //if there is no data initially then return empty array

    return JSON.parse(rawTodods); //it convert string to array
    
  }); //getting data from localstoprage
  // const [task, setTask] = useState([]);

  const [datetime, setDatetime] = useState();

  // when anyone will eter through keyboard

  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    // e.preventDefault();

    //1st validation
    if (!content) return; //input value should not be empty for object

    // if (!inputValue) return; //input value should not be empty for string

    // setTask((prev)=> [...prev,inputvalue]);
    // The above code means the previous data should be remain as it is and add the new data using `inputvalue`

    // setTask((prev)=> console.log(prev));

    // 2nd validation

    const Tododmatched = task.find(
      (currentTask) => currentTask.content === content
    );

    if (Tododmatched) return; //data is already existing for not for object

    // if (task.includes(inputValue)) return;//data is already existing for not for string

    setTask((prevTask) => [...prevTask, { id, content, checked }]); //for input value through object

    // setTask((prevTask) => [...prevTask, inputValue]);//for input value string

    // 3rd validation
    // setInputvalue("");
  };

  // add data to localstorage

  localStorage.setItem("react-todo", JSON.stringify(task)); //since both should be in string so i used JSON.stringify(task) to convert array to string

  const handleDeleteTodo = (value) => {
    // console.log(task);
    // console.log(value);

    const updateTask = task.filter(
      (currentTask) => currentTask.content !== value
    ); //filter method for array
    // const updateTask = task.filter((currentTask) => currentTask !== value);//filter method for array
    // console.log(updateTask,"updateTask");

    setTask(updateTask);
  };

  const handleClearAllBtn = () => {
    setTask([]);
  };

  useEffect(() => {
    const Interval = setInterval(() => {
      const now = new Date();
      const formattedDate = now.toLocaleDateString();

      const formattedTime = now.toLocaleTimeString();
      setDatetime(`${formattedDate} - ${formattedTime}`);
      // console.log("Hey");
    }, 1000);

    return () => clearInterval(Interval);
  }, []);

  // to handle check todo for object

  const handleCheckedTodo = (taskk) => {
    const updatedTask = task.map((currentTask) => {
      if (currentTask.content === taskk) {
        return { ...currentTask, checked: !currentTask.checked };
      } else {
        return currentTask;
      }
    });
    setTask(updatedTask);
  };

  return (
    <>
      <section className="todo-container">
        <header>
          <h1>Todo List</h1>
          {/* Date */}

          <h2>{datetime}</h2>
          <Todoform onAddTodo={handleFormSubmit} />
          <section>
            <ul>
              {task.map((currentTask) => {
                return (
                  <Todolist
                    key={currentTask.id}
                    data={currentTask.content}
                    checked={currentTask.checked}
                    onDelete={handleDeleteTodo}
                    onHandlecheckTodo={handleCheckedTodo}
                  />
                );
              })}
            </ul>
            <section>
              <button onClick={handleClearAllBtn}>ClearAll</button>
            </section>
          </section>
        </header>
      </section>
    </>
  );
};



// -----------------------------old----------------------------------------------
// import { useEffect, useState } from "react";

// import { MdDeleteForever } from "react-icons/md";
// import { IoMdCheckmark } from "react-icons/io";
// import "./Todo.css";

// export const Todo = () => {
//   const [inputvalue, setInputvalue] = useState("");
//   const [task, setTask] = useState([]);
//   const [datetime, setDatetime] = useState();

//   // when anyone will eter through keyboard
//   const handleInputchange = (value) => {
//     setInputvalue(value);
//   };
//   useEffect(() => {
//         const Interval = setInterval(() => {
//           const now = new Date();
//           const formattedDate = now.toLocaleDateString();
    
//           const formattedTime = now.toLocaleTimeString();
//           setDatetime(`${formattedDate} - ${formattedTime}`);
//           // console.log("Hey");
//         }, 1000);
    
//         return () => clearInterval(Interval);
//       }, []);
//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     //1st validation
//     if (!inputvalue) return; //input value should not be empty
//     // setTask((prev)=> [...prev,inputvalue]);
//     // The above code means the previous data should be remain as it is and add the new data using `inputvalue`

//     // setTask((prev)=> console.log(prev));

//     // 2nd validation
//     if (task.includes(inputvalue)) {
//       setInputvalue("");
//       return;
//     }

//     setTask((prevTask) => [...prevTask, inputvalue]);

//     // 3rd validation
//     setInputvalue("");
//   };

//   const handleDeleteTodo = (value) => {
//     console.log(task);
//     // console.log(value);

//     const updateTask = task.filter((currentTask) => currentTask !== value);
//     // console.log(updateTask,"updateTask");

//     setTask(updateTask);
//   };

//   const handleClearAllBtn = () => {
//     setTask([]);
//   };
//   return (
//     <>
//       <section className="todo-container">
//         <header>
//           <h1>Todo List</h1>
//           {/* Date */}
//      <h2>{datetime}</h2>
//           <section>
//             <form onSubmit={handleFormSubmit}>
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Enter text..."
//                   className="todo-input"
//                   autoComplete="off"
//                   value={inputvalue}
//                   onChange={(e) => handleInputchange(e.target.value)}
//                 />
//               </div>

//               <div>
//                 <button type="submit" className="todo-btn">
//                   Add Task
//                 </button>
//               </div>
//             </form>
//           </section>
//           <section>
//             <ul>
//               {task.map((currentTask, index) => {
//                 return (
//                   <li key={index}>
//                     <span>{currentTask}</span>
//                     <button className="ckeckButton">
//                       <IoMdCheckmark />
//                     </button>
//                     <button
//                       className="deleteButton"
//                       onClick={() => handleDeleteTodo(currentTask)}
//                       // If want to pass an argument we will use fat arrow function/ call me back function.
//                     >
//                       <MdDeleteForever />
//                     </button>
//                     {/* <button className="deleteButton" onClick={handleDeleteTodo}>
//                     <MdDeleteForever  />
//                   </button> */}
//                   </li>
//                 );
//               })}
//             </ul>
//             <section>
//               <button onClick={handleClearAllBtn}>ClearAll</button>
//             </section>
//           </section>
//         </header>
//       </section>
//     </>
//   );
// };
