
const Input = ({type, placeholder, username, setUsername}) => {
  return (
    <input 
      type={type} 
      placeholder={placeholder} 
      className="bg-cyan-600 placeholder:text-white shadow-md rounded-lg px-3 py-2 outline-none text-white"
      value={username}
      onChange={(e)=>{setUsername(e.target.value)}}
    />
  )
}

export default Input