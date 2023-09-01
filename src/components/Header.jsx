import zen from '../assets/zen.svg'

function Header() {
  return (
    <header className='w-full h-[80px] flex justify-between items-center bg-slate-800 md:px-4 px-2'>
      <div className="flex flex-col w-fit items-center justify-center gap-1">
        <img src={zen} className="w-[30px] bg-transparent" alt="" />
        <div className='flex gap-2 w-fit'>
          <h1 className="text-xl  text-white font-bold">JRS</h1>
          <div className='w-1 min-h-full bg-gray-500 ' />
          <h2 className="text-xl text-gray-200 font-semibold bg-transparent">zen</h2>
        </div>

      </div>
      <nav className="flex gap-2 w-fit">
        <a className="hover:text-white hover:bg-blue-400 rounded-md transition-all text-gray-300 p-1" href="#">Home</a>
        <a className="hover:text-white hover:bg-blue-400 rounded-md transition-all text-gray-300 p-1" href="#">Videos</a>
        <a className="hover:text-white hover:bg-blue-400 rounded-md transition-all text-gray-300 p-1" href="#">Audios</a>
      </nav>
    </header>
  )
}

export default Header