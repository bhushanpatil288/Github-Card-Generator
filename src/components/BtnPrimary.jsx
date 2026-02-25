
const BtnPrimary = ({text, color, hover, onClick}) => {
  return (
    <button 
      className={`${color} border px-2 py-1 rounded-lg cursor-pointer shadow-md hover:shadow-lg transition active:scale-95 hover:${hover}`}
      onClick={onClick}
    >
        {text}
    </button>
  )
}

export default BtnPrimary