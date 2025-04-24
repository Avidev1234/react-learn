import "./useref.css"
export const UseRef=()=>{
    const userName=document.getElementById('username');
    const password=document.getElementById('password');
    console.log(userName,password);
    
	const handleFormSubmit=(e)=>{
        e.preventDefault();
	}
return (
	<form action="" onSubmit={handleFormSubmit}>
		<input type="text" id="username" placeholder="Enter...."/>

		<input type="text" id="password" placeholder="Enter...."/>
		<button>Submit</button>
	</form>
)
}
