import Header from "../components/Header";
export default function Mail() {
  return (
    <div className="flex w-screen pb-0 flex-col items-start">
      <Header />
      <div className="inline-flex h-[574px] p-[210px] flex-col justify-center items-center">
        <div className="flex w-[342px] h-[138px] flex-col justify-between items-center shrink-0">
          <p className="medium-title">Gere agora uma nova memória</p>
          <button className="flex h-9 p-2 justify-center items-center gap-2 shrink-0 self-stretch bg-[#901ABB] rounded-lg paragraph-16 text-[#fcfcfc]">Gerar</button>
        </div>
      </div>
    </div>
  );
}
