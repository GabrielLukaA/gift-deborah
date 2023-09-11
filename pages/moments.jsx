import Header from "../components/Header";
export default function Mail() {
  return (
    <div className="flex w-screen pb-0 flex-col items-start h-screen">
      <Header />
      <div className="flex flex-col w-[390px] h-[60%] p-4 justify-center items-center">
        <div className="flex flex-col gap-[78px]">
          <p className="medium-title">Gere agora uma nova memória</p>
          <button className="flex h-9 p-2 justify-center items-center gap-2 self-stretch bg-[#901ABB] rounded-lg paragraph-16 text-[#fcfcfc]">
            Gerar
          </button>
        </div>
      </div>
      <div className="flex w-[390px] h-full pr-0 flex-col items-end">
        <p className="title-home text-right">“Ser seu amigo é </p>
        <p className="title-home text-right">de bom tom”</p>
<div className="flex h-[70px] flex-col items-start absolute left-[-15px]  bottom-[-10px]">
<img src="car.svg" alt="" />
</div>
      </div>
    </div>
  );
}
