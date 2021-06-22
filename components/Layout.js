import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'



export default function Layout({children}) {
	
		return (
			<div className="bg-gray-900 w-screen">
			<div className="flex flex-col text-white h-screen ">
				<div><Navbar /></div>
				<div className="container mt-12 mx-auto">
				{ children }
				</div>
				
				
			</div>
			<Footer />
			</div>
		)
	}
