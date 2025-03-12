
    const getlocalStorage=()=>{
      const rawTodods = localStorage.getItem("react-todo"); //getting data in the form of string
    
        if (!rawTodods) return []; //if there is no data initially then return empty array
    
        return JSON.parse(rawTodods); //it convert string to array
    }


    const setlocalStorage=(task)=>{
       return  localStorage.setItem("react-todo", JSON.stringify(task)); //since both should be in string so i used JSON.stringify(task) to convert array to string
    }




