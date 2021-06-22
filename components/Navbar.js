import Link from 'next/link'

export default function Navbar() {
	return (
		<div className="flex w-screen bg-gray-800 h-12 mb-4 items-center">
			<div className="pl-2 flex-grow">Logo</div>

			<ul className=" grid grid-cols-3 ">
			<li className="p-2"><Link  href="/"><a>Home</a></Link></li>
			<li className="p-2"><Link  href="/about"><a>Porfolio</a></Link></li>
			<li className="p-2"><Link  href="/blog"><a>Blog</a></Link></li>

			</ul>
		</div>
	) 
}