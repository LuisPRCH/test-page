import { motion } from 'framer-motion'

const Nav = () => {
	return (
		<motion.nav
			animate={{ opacity: [0, 1], y: [-100, 0] }}
			className='opacity-0 z-[1000] absolute top-0 left-0 w-full h-[6rem] bg-[#ffffff33] p-4 flex justify-between items-center shadow-lg'
		>
			<img className='h-full' src='../public/img-logo.png' alt='Logo' />
			<ul className='flex gap-4 text-white'>
				<li>link</li>
				<li>link</li>
				<li>link</li>
			</ul>
		</motion.nav>
	)
}

export default Nav
