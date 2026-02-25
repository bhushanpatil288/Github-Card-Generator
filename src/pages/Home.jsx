import Input from "../components/Input";
import Heading from "../components/Heading";
import BtnPrimary from "../components/BtnPrimary";
import { useEffect, useState } from "react";
import axios from "axios";
import { isObjEmpty } from "../utils/isEmpty"
import GithubCard from "../components/GithubCard";

const Home = () => {
  const [ error, setError ] = useState(false);
  const [ username, setUsername ] = useState("");
  const [ query, setQuery ] = useState("");
  const [ data, setData ] = useState({
  "login": "Anantshah133",
  "id": 134212697,
  "node_id": "U_kgDOB__sWQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/134212697?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Anantshah133",
  "html_url": "https://github.com/Anantshah133",
  "followers_url": "https://api.github.com/users/Anantshah133/followers",
  "following_url": "https://api.github.com/users/Anantshah133/following{/other_user}",
  "gists_url": "https://api.github.com/users/Anantshah133/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Anantshah133/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Anantshah133/subscriptions",
  "organizations_url": "https://api.github.com/users/Anantshah133/orgs",
  "repos_url": "https://api.github.com/users/Anantshah133/repos",
  "events_url": "https://api.github.com/users/Anantshah133/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Anantshah133/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Anant Shah",
  "company": "Red And White Skill Education",
  "blog": "",
  "location": "Surat",
  "email": null,
  "hireable": null,
  "bio": "I'm a Full Stack Developer, continuously refining my expertise in development and analysis to build efficient and scalable solutions.",
  "twitter_username": "anantshah133",
  "public_repos": 22,
  "public_gists": 0,
  "followers": 43,
  "following": 43,
  "created_at": "2023-05-21T13:38:36Z",
  "updated_at": "2026-02-24T08:53:23Z"
});

  const handleSubmit=(e)=>{
    e.preventDefault();

    if(!username){
      setError(true);
      return;
    }

    setQuery(username);
    setUsername("");
  }

  useEffect(()=>{
    const fetchData = async ()=>{
        const res = await axios.get(`https://api.github.com/users/${query}`);
        setData(res.data)
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
              <BtnPrimary text={"Create Card"} />
            </div>

            {!isObjEmpty(data) ? 
              <div className="mt-5 flex justify-center">
                <GithubCard data={data} />
              </div>
            : ""}
            
        </form>
      </div>
      
    </section>
  )
}

export default Home