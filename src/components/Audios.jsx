

function Audios({ title, midia }) {
  return (
    <div className="flex flex-col gap-2 mb-4 bg-gray-800 p-2 rounded-md">
      <h1 className="text-white text-md text-center">{title}</h1>
      <audio className="bg-transparent" controls src={midia}></audio>
    </div>
  )
}

export default Audios