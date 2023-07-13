import React, {useState} from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ inputValue, setInputValue ] = useState ("")
	const [ list, setlist ] = useState ()

	return (
		<div className="body container">
			<div className="list">
				<h1>My TO-DO List!</h1>
				<ul>
					<li>
						<input type="text" 
						onChange={(e)=> setInputValue(e.target.value)}
						value={inputValue}
						onKeyDown={(e)=>
							if (e.key == "Enter") {  
							 setlist(list.concat(inputValue));
							 setInputValue("");}}}
						placeholder="What we need to do?" />
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Home;
