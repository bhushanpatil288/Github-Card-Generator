import Input from "../components/Input";
import Heading from "../components/Heading";
import BtnPrimary from "../components/BtnPrimary";
import { useEffect, useState } from "react";
import axios from "axios";
import { isObjEmpty } from "../utils/isEmpty"
import GithubCard from "../components/GithubCard";
import Swal from "sweetalert2";
import { fireAlert } from "../utils/sweetAlert";


const Home = () => {
  const [ error, setError ] = useState(false);
  const [ username, setUsername ] = useState("");
  const [ query, setQuery ] = useState("");
  const [ data, setData ] = useState({});

  const handleSubmit=(e)=>{
    e.preventDefault();

    if(!username){
      setError(true);
      return;
    }

    setQuery(username);
    setUsername("");
    setError(false)
  }

  useEffect(()=>{
    const fetchData = async ()=>{
        try{
          const res = await axios.get(`https://api.github.com/users/${query}`);
          setData(res.data)
        } catch (e){
          console.log(e);
          fireAlert("user doesn't exist!")
          return;
        }
    }

    if(query){
      fetchData();
    }
  }, [query])

  return (
    <section>
      <Heading />
      <div className="container mx-auto">
        <form onSubmit={handleSubmit} className="text-center">
            <Input 
              type={"text"} 
              placeholder={"Github Username"} 
              username={username} 
              setUsername={setUsername} 
            />
            <p className={`text-red-600 text-xs mt-1 ${error ? "" :"opacity-0"} select-none`}>Please enter a valid username</p>
            <div className="mt-5">
              <BtnPrimary text={"Create Card"} color={"bg-cyan-800 text-black text-white"} hover={"bg-cyan-900"} />
            </div>

            {!isObjEmpty(data) ? 
              <div className="mt-5 flex justify-center">
                <GithubCard data={data} setError={setError} />
              </div>
            : ""}
            
        </form>
      </div>
      
    </section>
  )
}

export default Home