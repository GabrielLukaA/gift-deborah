import { memo, useState } from "react";
import Header from "../components/Header";

export default function Mail() {
  const theme = getStoredCartItems();

  function getStoredCartItems() {
    if (typeof window !== "undefined") {
      const themeHere = localStorage.getItem("theme");
      if (themeHere !== null) {
        return themeHere;
      }
    } else {
      return "light";
    }
  }

  let memories = [
 
  ];

  memories.push('"A época de montagem dos robôs para o projeto do Jhon Ribs pra mim foi uma excelente época, eu estava pensando em sair e foi muito importante ver que você se importava comigo, naquele projeto a gente sempre esteve bem próximo, fazer aquele robô burro todo dia é uma memória muito boa que tenho contigo."')
  memories.push('"As duas semanas de loucura em que o Saymon tava apaixonado pela Heloísa. Esse surto coletivo fez a gente ficar mais próximos no periodo em que o casal de opostos estavam de papinho, eu gostava de quando os dois ficavam de viadagem e eu e você ficávamos conversando mais tempo(falando mal deles) na nossa querida audaces, é uma das poucas coisas que me faz sentir falta da audaces.."')
  memories.push('"Agora uma memória recente, foi muito divertido discutir com ricos burros no debate de  preparação para o trabalho, além de me divertir por espancar eles, também é muito bom ver que nós concordamos muito em alguns pontos políticos, e ver você debatendo comigo foi muito legal, porque foi simplesmente muito bom sentir que eu acertei muito em ter você junto comigo."')
  memories.push(' ')
  memories.push("E")

  const [nada, setNada] = useState();


  return (
    <div className="flex w-screen pb-0 flex-col items-start h-screen">
      <Header />
      <div className="flex flex-col w-[390px] h-[60%] p-8 justify-center items-center">
        <div className="flex flex-col gap-[78px] w-full  items-center">
          <p className="medium-title dark:text-[#fcfcfc]">Gere agora um bom momento</p>
          <p className="textt dark:text-[#fcfcfc]">{nada}</p>
          <button onClick={()=>{

            let indice = Math.floor(Math.random() * memories.length)
            setNada(memories[indice])


          }} className="w-full flex h-9 p-2 justify-center items-center gap-2 self-stretch bg-[#901ABB] rounded-lg paragraph-16 text-[#fcfcfc]">
            Gerar
          </button>
        </div>
      </div>

      <div className="h-[118px] flex flex-col">
        <div className="h-[58px] w-[390px] flex-col items-end pr-8">
          <p className="title-home text-right dark:text-[#fcfcfc]">“Ser seu amigo é</p>
          <p className="title-home text-right dark:text-[#fcfcfc]">de bom tom”</p>
        </div>
        <div className="flex justify-items-start">

          <img src="carPurple.svg" alt="" className="h-[60px]" />

        </div>
      </div>

      {/* <div className="car">
        <div className="">
          <p className="title-home text-right pr-8">“Ser seu amigo é</p>
          <p className="title-home text-right pr-8">de bom tom”</p>
        </div>
        <img src="car.svg" alt="" className="carr" />
      </div> */}
    </div>
  );
}
