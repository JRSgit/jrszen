import { BsInstagram, BsYoutube, BsFacebook } from 'react-icons/bs'


function Footer() {
  return (
    <footer className='w-full grid grid-cols-1 md:grid-cols-3 gap-3 h-fit items-center bg-slate-800 md:px-4 mt-20'>
      <h1 className='flex items-center justify-center mt-4 w-full text-xl md:text-4xl text-white font-bold gap-1'>
        JRS
        <small className='text-lg md:text-4xl text-gray-200 bg-transparent'>zen</small>
      </h1>
      <nav className="flex gap-2 w-full justify-center  ">
        <a className="hover:text-white hover:bg-blue-400 rounded-md transition-all text-gray-300 p-1" href="#">Home</a>
        <a className="hover:text-white hover:bg-blue-400 rounded-md transition-all text-gray-300 p-1" href="#">Videos</a>
        <a className="hover:text-white hover:bg-blue-400 rounded-md transition-all text-gray-300 p-1" href="#">Audios</a>
      </nav>
      <div className="flex gap-3 w-full justify-center mb-6">
        <BsFacebook className='bg-transparent' size={20} color="gray" />
        <BsInstagram className='bg-transparent' size={20} color="gray" />
        <BsYoutube className='bg-transparent' size={20} color="gray" />
      </div>
    </footer>
  )
}

export default Footer