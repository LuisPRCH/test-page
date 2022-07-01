import Nav from './Nav'
import imgHeader from '../public/3181111-02.jpg'

const Header = () => {
	console.log(imgHeader)

	return (
		<header
			className={`font-Ubuntu w-full h-screen bg-[url("/src/public/3181111-02.jpg")] bg-cover bg-center flex flex-col justify-center items-center`}
		>
			<Nav />
			<section className='w-[500px] flex flex-col gap-8 mt-16'>
				<h2 className=' text-center text-7xl text-gray-600 font-medium'>
					Luis Prendas
				</h2>
				<p className=' text-2xl text-gray-500'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas porro
					harum facere cum magnam. Ea quis ad doloribus.
				</p>
			</section>
		</header>
	)
}

export default Header
