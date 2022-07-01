import Nav from './Nav'
import { motion } from 'framer-motion'
import imgHeader from '../../public/3181111-02.jpg'

const Header = () => {

	console.log(imgHeader)

	return (
		<header className={`font-Ubuntu w-full h-screen bg-[url(".${imgHeader}")] bg-cover bg-center flex flex-col justify-center items-center`}>
			<Nav />
			<section className='w-[500px] flex flex-col gap-8 mt-16'>
				<motion.h2
					animate={{ opacity: [0, 1], x: [-50, 0] }}
					transition={{ delay: 0.3 }}
					className='opacity-0 text-center text-7xl text-gray-600 font-medium'
				>
					Luis Prendas
				</motion.h2>
				<motion.p
					animate={{ opacity: [0, 1], x: [50, 0] }}
					transition={{ delay: 0.5 }}
					className='opacity-0 text-2xl text-gray-500'
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas porro
					harum facere cum magnam. Ea quis ad doloribus.
				</motion.p>
			</section>
		</header>
	)
}

export default Header
