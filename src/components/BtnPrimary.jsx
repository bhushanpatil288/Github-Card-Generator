
const BtnPrimary = ({text}) => {
  return (
    <button 
      className="bg-cyan-800 border text-white px-2 py-1 rounded-lg cursor-pointer shadow-md hover:shadow-lg transition active:scale-95 hover:bg-cyan-900"
    >
        {text}
    </button>
  )
}

export default BtnPrimary