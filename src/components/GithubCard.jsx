import { RiMapPinLine, RiBuildingLine } from "@remixicon/react"
import githubLogo from "/images/github-logo.png"
import domtoimage from 'dom-to-image';
import BtnPrimary from "./BtnPrimary";

const GithubCard = ({ data, setError }) => {

  const downloadImage=(imageClass)=>{
    const imageNode = document.querySelector(`.${imageClass}`);
    domtoimage.toPng(imageNode).then(
      (dataUrl)=>{
        const link = document.createElement("a");
        link.download = `${data.name}-card.png`;
        link.href = dataUrl;
        link.click();
        setError(false)
      }
    )
    .catch((e)=>{
      console.error("Error occured while generating an image: ", e);
    })
  }

  return (
    <div className="w-full mx-3 md:w-2/3 xl:w-1/3">
      <div className="github-card border border-black bg-white shadow-md px-3 py-3 rounded-md select-none">

        <div className="px-3 py-2 mb-3 rounded-lg bg-black flex items-center justify-between gap-3">
          <img src={githubLogo} className="w-10 invert" alt="" />
          <p className="text-white font-semibold">#{data.login}</p>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <div className="px-2 py-2 mb-3">
            <img src={data.avatar_url} alt="" className="w-30 rounded-full" />
          </div>
          <div className="mx-auto">
            <h2 className="font-bold text-2xl">{data.name}</h2>
          </div>
          <div className="flex justify-center items-center text-gray-500">
            <p><RiMapPinLine /></p>
            <p className="text-sm">{data.location}</p>
          </div>
        </div>

        <div className="flex w-full grid grid-cols-3 gap-5 py-3 mt-5">
          <div className="bg-black text-white shadow-md border border-gray-200 rounded-lg py-2">
            <p className="font-semibold text-xl">{data.public_repos}</p>
            <p className="text-white">PUBLIC REPOS</p>
          </div>
          <div className="bg-black text-white shadow-md border border-gray-200 rounded-lg py-2">
            <p className="font-semibold text-xl">{data.followers}</p>
            <p className="text-white">FOLLOWERS</p>
          </div>
          <div className="bg-black text-white shadow-md border border-gray-200 rounded-lg py-2">
            <p className="font-semibold text-xl">{data.following}</p>
            <p className="text-white">FOLLOWING</p>
          </div>
        </div>
        <div>
          {
            data.company ? <div className="mt-5">
              <div className="flex justify-center gap-2 font-semibold">
                <p><RiBuildingLine /></p>
              </div>
              <div className="flex justify-center items-center text-gray-600">
                <p className="">{data.company}</p>
              </div>
            </div> : ""
          }

        </div>

        <div>

        </div>

      </div>
      <div className="mt-5">
        <BtnPrimary text={"Download Card"} color={"bg-black text-white"} hover={"bg-gray-500"} 
          onClick={()=>{
            downloadImage("github-card");
          }} 
        />
      </div>
      
    </div>
  )
}

export default GithubCard