import { Link } from 'react-router-dom'
import zen from '../assets/zen.svg'

function Header() {
  return (
    <header className='w-full h-[80px] flex justify-between items-center bg-[#FFFFFF] md:px-4 px-2'>
      <div className="flex flex-col w-fit  items-center justify-center gap-1">
        <img src={zen} className="w-[30px] bg-transparent" alt="" />
        <div className='flex gap-2 w-fit'>
          <h1 className="text-xl  text-[#2E8B57] font-bold">JRS</h1>
          <div className='w-1 min-h-full bg-gray-500 ' />
          <h2 className="text-xl text-[#2E8B57] font-semibold bg-transparent">zen</h2>
        </div>

      </div>
      <nav className="flex gap-2 w-fit">
        <Link className="hover:text-[#2E8B57] hover:bg-blue-400 rounded-md transition-all text-[#2E8B57] p-1" to="/">Home</Link>
        <Link className="hover:text-[#2E8B57] hover:bg-blue-400 rounded-md transition-all text-[#2E8B57] p-1" to="/video">Videos</Link>
        <Link className="hover:text-[#2E8B57] hover:bg-blue-400 rounded-md transition-all text-[#2E8B57] p-1" to="/audio">Audios</Link>
        <Link className="hover:text-[#2E8B57] hover:bg-blue-400 rounded-md transition-all text-[#2E8B57] p-1" to="login">Logar</Link>
      </nav>
    </header>
  )
}

export default Header