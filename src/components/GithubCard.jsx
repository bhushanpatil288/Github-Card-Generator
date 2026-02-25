import { RiMapPinLine, RiBuildingLine } from "@remixicon/react"
import githubLogo from "/images/github-logo.png"
import domtoimage from 'dom-to-image';
import BtnPrimary from "./BtnPrimary";

const GithubCard = ({ data, setError }) => {

  const downloadImage = (imageClass) => {
    const imageNode = document.querySelector(`.${imageClass}`);
    domtoimage.toPng(imageNode).then(
      (dataUrl) => {
        const link = document.createElement("a");
        link.download = `${data.name.split(" ")[0]}'s-card.png`;
        link.href = dataUrl;
        link.click();
        setError(false)
      }
    )
      .catch((e) => {
        console.error("Error occured while generating an image: ", e);
      })
  }

  return (
    <div className="w-full mx-3 md:w-2/3 xl:w-1/3">
      <div className="github-card bg-[#222] text-white shadow px-3 py-8 rounded-2xl select-none">

        <div className="bg-blue-500 rounded-2xl shadow-md">
          <div className="px-3 py-2 rounded-2xl shadow-lg bg-[#333333] shadow-md flex items-center justify-between gap-3">
            <img src={githubLogo} className="w-10 invert" alt="" />
            <p className="text-white font-semibold">#{data.login}</p>
          </div>
        </div>

        <div className="flex flex-col gap-2 items-center py-3">
          <div className="px-2 py-2 mb-3">
            <img src={data.avatar_url} alt="" className="w-30 rounded-full" />
          </div>
          <div className="mx-auto">
            <h2 className="font-bold text-2xl">{data.name}</h2>
          </div>
          {
            data.location ? 
            <div className="flex justify-center items-center text-gray-300">
              <p><RiMapPinLine /></p>
              <p className="text-sm">{data.location}</p>
            </div> : ""
          }

        </div>

        <div className="bg-blue-500 rounded-2xl shadow-md">
          <div className="shadow-md flex w-full grid grid-cols-3 gap-5 py-3 bg-[#333333] rounded-2xl">
            <div className="text-white rounded-lg py-2 flex flex-col gap-2">
              <p className="text-gray-400 text-xs">Public Repo</p>
              <p className="font-semibold text-xl">{data.public_repos}</p>
            </div>
            <div className="text-white rounded-lg py-2 flex flex-col gap-2">
              <p className="text-gray-400 text-xs">Followers</p>
              <p className="font-semibold text-xl">{data.followers}</p>
            </div>
            <div className="text-white rounded-lg py-2 flex flex-col gap-2">
              <p className="text-gray-400 text-xs">Following</p>
              <p className="font-semibold text-xl">{data.following}</p>
            </div>
          </div>

        </div>
        <div>
          {
            data.company ? <div className="mx-5 mt-8 flex justify-between">
              <div className="flex justify-center gap-2 font-semibold">
                <p><RiBuildingLine /></p>
              </div>
              <div className="flex justify-center items-center text-gray-300">
                <p className="">{data.company}</p>
              </div>
            </div> : ""
          }

        </div>

      </div>
      <div className="mt-5">
        <BtnPrimary text={"Download Card"} color={"bg-[#333] text-white"} hover={"hover:bg-[#444]"}
          onClick={() => {
            downloadImage("github-card");
          }}
        />
      </div>

    </div>
  )
}

export default GithubCard