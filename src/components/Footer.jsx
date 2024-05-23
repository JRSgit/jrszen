import { BsInstagram, BsYoutube, BsFacebook } from 'react-icons/bs'


function Footer() {
  return (
    <footer className='flex flex-wrap md:flex-nowrap w-full gap-3 items-center justify-center bg-slate-800 md:px-4 mt-20 md:h-[120px]'>
      <h1 className=' mt-4 w-full text-center text-xl md:text-4xl text-white font-bold gap-1'>
        JRS
        <small className='text-lg md:text-4xl text-gray-200 bg-transparent'>zen</small>
      </h1>
      <nav className="flex gap-2 w-fit justify-center m-auto items-center">
        <a className="hover:text-white hover:bg-blue-400 rounded-md transition-all text-gray-300 p-1" href="#">Home</a>
        <a className="hover:text-white hover:bg-blue-400 rounded-md transition-all text-gray-300 p-1" href="#">Videos</a>
        <a className="hover:text-white hover:bg-blue-400 rounded-md transition-all text-gray-300 p-1" href="#">Audios</a>
      </nav>
      <div className="flex gap-2 w-full justify-center mb-6 items-center">
        <BsFacebook className='bg-transparent' size={20} color="gray" />
        <BsInstagram className='bg-transparent' size={20} color="gray" />
        <BsYoutube className='bg-transparent' size={20} color="gray" />
      </div>
    </footer>
  )
}

export default Footer