import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="body container">
			<div className="list">
				<h1>My TO-DO List!</h1>
				<ul>
					<li>
						<input type="text" placeholder="What we need to do?" />
					</li>
					<li>
						<input type="text" placeholder="What we need to do?" />
					</li><li>
						<input type="text" placeholder="What we need to do?" />
					</li><li>
						<input type="text" placeholder="What we need to do?" />
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Home;
