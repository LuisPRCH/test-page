import logo from '../public/img-logo.png'

const Nav = () => {
	return (
		<nav className=' z-[1000] absolute top-0 left-0 w-full h-[6rem] bg-[#ffffff33] p-4 flex justify-between items-center shadow-lg'>
			<img className='h-full' src={logo} alt='Logo' />
			<ul className='flex gap-4 text-white'>
				<li>link</li>
				<li>link</li>
				<li>link</li>
			</ul>
		</nav>
	)
}

export default Nav
