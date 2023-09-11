import Header from "../components/Header";
export default function Mail() {
  return (
    <div className="flex w-screen pb-0 flex-col items-start h-screen">
      <Header />
      <div className="flex flex-col w-[390px] h-[200%] p-4 justify-center items-center">
        <div className="flex flex-col gap-[78px] w-full pr-4 items-center">
          <p className="medium-title">Gere agora uma nova memória</p>
          <button className="w-full flex h-9 p-2 justify-center items-center gap-2 self-stretch bg-[#901ABB] rounded-lg paragraph-16 text-[#fcfcfc]">
            Gerar
          </button>
        </div>
      </div>
      {/* <div className="flex w-[390px] h-full pr-0 flex-col justify-end mb-12">
        <p className="title-home text-right pr-8">“Ser seu amigo é </p>
        <p className="title-home text-right pr-8">de bom tom”</p>
        <div className="flex h-[70px] flex-col items-start absolute left-[-15px]  bottom-[-10px]">
          <img src="car.svg" alt="" />
        </div>
      </div> */}

      <div className="car">
        <div>
          <p className="title-home text-right">“Ser seu amigo é</p>
          <p className="title-home text-right">de bom tom”</p>
        </div>
        <img src="car.svg" alt="" className="carr" />
      </div>
    </div>
  );
}
