import tiger from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

function CodeBook() {
	const navigate = useNavigate();

	const goToHome = () => {
		navigate('/home');
	}
	const goToSignup = () => {
		navigate('/signup');
	}

	return (
		<div>
		<nav className="flex items-center justify-between flex-wrap bg-[#76589C] p-6">
			<a href="#" onClick={goToHome}>
		        <div className="flex items-center flex-shrink-0 text-white mr-6">
		          <img 
		          	src="tiger.png" 
		          	width="54" 
		          	height="54" 
		          	className="object-contain"></img>
		          <span className="font-semibold text-xl tracking-tight ml-2 tracking-wide">TIGER DATA CODING TOOL</span>
		        </div>
	        </a>
	        <div className="block lg:hidden">
	          	<button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
		            <svg 
		            	className="fill-current h-3 w-3" 
		            	viewBox="0 0 20 20" 
		            	xmlns="http://www.w3.org/2000/svg">

		            	<title>Menu</title>
		            	<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
		            </svg>
	          	</button>
	        </div>
	        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
	          	<div className="text-sm lg:flex-grow"></div>
	          	<div>
	            	<a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 underline">
	              		CODEBOOKS  
	            	</a>
	            	<a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4">
	              		DATASETS
	            	</a>
	          	</div>
	        </div>
      	</nav>

      	<div className="flex justify-end mt-3 mr-3">
        	<div className="mb-3 xl:w-96">
          		<input
            		type="search"
            		className="
              			form-control
			            block
			            w-full
			            px-3
			            py-1.5
			            text-base
			            font-normal
			            text-gray-700
			            bg-white bg-clip-padding
			            border border-solid border-gray-300
			            rounded
			            transition
			            ease-in-out
			            m-0
			            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
			            "
            		id="exampleSearch"
            		placeholder="Search"
          		></input>
        	</div>
    	</div>


    	<table className="table-auto w-full m-5 mr-5 shadow-2xl">
      		<thead className="border-b">
         		<tr className="bg-gray-100">
            		<th className="text-left p-4 font-medium">
               			Label
            		</th>
            		<th className="text-left p-4 font-medium">
               			Description
            		</th>
		            <th className="text-left p-4 font-medium">
		               Dataset
		            </th>
		            <th className="text-left p-4 font-medium">
		               Private
		            </th>
         		</tr>
      		</thead>
      		<tbody>
	         <tr className="border-b hover:bg-[#ED6430]">
	            <td className="p-4">
	               Test Label
	            </td>
	            <td className="p-4">
	               Test description 
	            </td>
	            <td className="p-4">
	               Test dataset
	            </td>
	            <td className="p-4">
	               <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer ml-3" type="checkbox" value="" id="flexCheckDefault"></input>
	            </td>
	         </tr>
	         <tr className="border-b hover:bg-[#ED6430]">
	            <td className="p-4">
	               Test Label 
	            </td>
	            <td className="p-4">
	               Test description  
	            </td>
	            <td className="p-4">
	               Test dataset
	            </td>
	            <td className="p-4">
	               <input className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer ml-3" type="checkbox" value="" id="flexCheckDefault"></input>
	            </td>
	         </tr>
      		</tbody>
   		</table>
   		</div>
	);
}
export default CodeBook;
