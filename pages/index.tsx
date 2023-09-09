export default function Home() {
  return (
    <div className="flex w-screen pb-0 flex-col items-start">
      <div className="flex w-[390px] px-4 pt-4 pb-0 flex-col items-center">
        <div className="flex justify-between pt-8 pr-4 pl-0 pb-4 items-center self-stretch">
          <div className="flex flex-col">
            <h1 className="text-[#111] title-home">Seja bem-vinda,</h1>
            <h1 className="text-[#111] title-home">Deborah!</h1>
          </div>
          <div className="flex px-3 py-2 items-center gap-2 rounded-lg border-purple default-shadow active:bg-[#901abb]">
            {/* <img src="/moonPressed.svg" alt="" className="bg-[#901abb] relative hidden active:visible" /> */}
            <img src="/moon.svg" alt="" className=""/>
          </div>
        </div>
        <p className="paragraph-home text-[#272727]">
          Se tudo ocorreu como planejado você ainda está vendo isso na data do
          seu aniversário, então parabéns, eu espero que goste.
        </p>
      </div>
      <div className="flex w-[390px] p-4 flex-col items-start gap-4">
        <h2 className="text-[#111] medium-title">Menu</h2>
        <div className="flex flex-col items-center gap-6">
          <div className="flex w-[350px] p-4 flex-col items-start gap-4 rounded-2xl border-purple">
            <h3 className="text-[#111] paragraph-16">Gerador de momentos!</h3>
            <p className="text-[#272727] paragraph-home">
              Bom, já se passou mais de um ano em que se vemos toda semana de
              segunda à sexta, das 13:40 as 22:00. Talvez entrando aqui tenham
              alguns momentos que pelo menos para mim foram divertidos, legais,
              memoráveis, catastróficos, ou todas as opções anteriores.
            </p>
          </div>
          <div className="flex w-[350px] p-4 flex-col items-start gap-4 rounded-2xl border-purple active:bg-[#901abb] active:text-[#FCFCFC]">
            <h3 className="paragraph-16">Gerador de momentos!</h3>
            <p className="paragraph-home">
              Bom, já se passou mais de um ano em que se vemos toda semana de
              segunda à sexta, das 13:40 as 22:00. Talvez entrando aqui tenham
              alguns momentos que pelo menos para mim foram divertidos, legais,
              memoráveis, catastróficos, ou todas as opções anteriores.
            </p>
          </div>
          <div className="flex w-[350px] p-4 flex-col items-start gap-4 rounded-2xl border-purple">
            <h3 className="text-[#111] paragraph-16">Gerador de momentos!</h3>
            <p className="text-[#272727] paragraph-home">
              Bom, já se passou mais de um ano em que se vemos toda semana de
              segunda à sexta, das 13:40 as 22:00. Talvez entrando aqui tenham
              alguns momentos que pelo menos para mim foram divertidos, legais,
              memoráveis, catastróficos, ou todas as opções anteriores.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
