import React, {useState } from "react";

//include images into your bundle


//create your first component
const Home = () => {
	const [input, setInput] = useState("")
	const [list, setlist] = useState([])
	const [numberTasks, setTasks] = useState("Nothing to do, add a ")
	
	const handleSubmit = () => {
		
		if (list !== "") {
			setlist([input, ...list])
			setTasks(list.length+1)
            setInput("")
		}
	}
	const handleDelete = (id) => {
		const dellist = list.filter((li, index)=> index !== id);
		
		setlist([...dellist])
		setTasks(list.length-1)
		
		list.length-1 === 0 ? setTasks("You are free now, add a "):null
	}
	
	return (
		<div className="body container">
			<div className="list">
				<h1>My To-Do List!</h1>
				<div>
				
						<input className="input" type="text" placeholder="What we need to do?" 
						value={input} 
						onChange={(e)=>{setInput(e.target.value)}} 
						onKeyDown={(e)=>{
							if(e.keyCode === 13){
								handleSubmit();	
						}
					}}/>
			
					<ul className="uli">
						{
							list.map((t, index) => (
								<li key={index}>
									<label>{t}</label>
										<i className="fa-regular fa-trash-can">	
										<button className="btnClose" onClick={()=>handleDelete(index)}></button></i>
								</li>
							))
						}
					</ul>
					<label className="footer">{numberTasks + "task"} </label>
				</div>
			</div>
		</div>
	);
};
export default Home;