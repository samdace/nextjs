
export default function Card() {
	return (
		<div className="text-gray-200 ">
		<h2 className="mb-12 text-2xl">Check out some of My Posts </h2>
		<div className="grid grid-cols-3 text-gray-800 ">
		<div className="bg-gray-300 rounded w-48 overflow-hidden h-52">
			HouSsem <br/>
			<p className="text-xs"> 2021-06-21 </p>
			<p className="text-center text-xl font-semibold">Post1</p>
			<img src="https://via.placeholder.com/400x300.png" alt="placeholder"/>
			 
		</div>
		<div className="bg-gray-300 rounded w-48 h-52">
			HouSsem <br/>
			<p className="text-xs"> 2021-06-21 </p>
			<p className="text-center text-xl font-semibold">Post2</p>
			<img src="https://via.placeholder.com/400x300.png" alt="placeholder"/>
			 
		</div>
		
		<div className="bg-gray-300 rounded w-48 h-52">
			HouSsem <br/>
			<p className="text-xs"> 2021-06-21 </p>
			<p className="text-center text-xl font-semibold">Post3</p>
			<img src="https://via.placeholder.com/400x300.png" alt="placeholder"/>
			 
		</div>
		<br/>
		</div>
	</div>
	)
}