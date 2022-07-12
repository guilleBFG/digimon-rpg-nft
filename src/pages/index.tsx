import type { NextPage } from "next";
import Image from "next/image";
import { Digimons } from "../types/types";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);
  const digimons = trpc.useQuery(["digimons.getDigimons"]);

  const renderDigimons = () => {
    return (
      <div className="grid grid-cols-1 grid-rows-3 lg:grid-rows-2 md:grid-rows-2 justify-center items-center lg:grid-cols-2 md:grid-cols-2 gap-10 mt-3 pt-3 w-full lg:w-2/3 md:w-full">
        {digimons.data?.digimons.map((digimon, index) => (
          <div
            key={index}
            className="border rounded-xl border-blue-400 pt-6 text-2xl text-blue-500 flex flex-col justify-center items-center w-full transform transition duration-500 hover:scale-110"
          >
            <div>{digimon.name} </div>
            <div className="ml-1 text-black">{digimon.level}</div>
            <div>
              <Image
                src={digimon.img}
                width="150"
                height="150"
                alt="digi-image"
              />
            </div>
          </div>
        ))}
      </div>
    );
  };
  return (
    <div className="w-screen min-h-screen flex flex-col justify-center items-center p-4 overflow-y-scroll">
      <h2 className="text-[3rem] lg:text-[5rem] md:text-[5rem] font-extrabold text-gray-700">
        Digimon <span className="text-purple-500">NFT</span> Game
      </h2>

      <p className="text-2xl text-gray-700">Chose your character</p>
      {/*hello.data ? <p>{hello.data.greeting}</p> : <p>Loading..</p>*/}
      {digimons.data ? renderDigimons() : <div>Loading...</div>}
    </div>
  );
};

export default Home;
