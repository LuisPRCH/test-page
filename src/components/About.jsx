import { motion } from 'framer-motion'

const About = () => {
	return (
		<article className='bg-slate-100 w-full h-[400px] flex justify-center items-center'>
			<section className='w-[900px] text-center flex flex-col justify-center items-center gap-4'>
				<motion.h3
					animate={{ opacity: [0, 1] }}
					className='opacity-0 font-semibold text-xl text-orange-600'
				>
					Full Stack Debeloper
				</motion.h3>
				<motion.h2
					transition={{ delay: 0.3 }}
					animate={{ opacity: [0, 1], x: [-50, 0] }}
					className='opacity-0 font-semibold text-4xl text-gray-600'
				>
					Diseño & Desarrollo Web
				</motion.h2>
				<motion.p
					transition={{ delay: 0.5 }}
					animate={{ opacity: [0, 1], x: [50, 0] }}
					className='opacity-0 text-xl text-gray-500 mt-4'
				>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis sunt
					tenetur animi iusto eligendi dignissimos perferendis velit aliquid
					ratione? Aliquid esse iste cum sed porro adipisci harum perspiciatis
					odio laboriosam.
				</motion.p>
			</section>
		</article>
	)
}

export default About
