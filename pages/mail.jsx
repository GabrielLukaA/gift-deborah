import Header from "../components/Header";
import Link from "next/link";

export default function Mail() {
  return (
    <div className="flex w-screen pb-0 flex-col items-start">
      <Link className="fixed top-4 left-8" href="/">
        <p className="dark:text-white">x</p>
      </Link>
      <Header
        title="Cartinha!"
        description="Apenas leia, escrevi de coração, se quiser tem o tema dark também, vê como achar melhor. Deixei o texto justificado pra você ter o veredito se o Kristian é maluco ou não."
      />
      <div className="flex w-[390px] p-8 flex-col items-center gap-4">
        <p className="text-justify dark:text-[#fcfcfc]">
          Bom, agora que sou eu falando e não o programador magnífico desse
          site, pelamor de Deus usa o tema dark, quem fez esse site com certeza
          se estressou pra fazer isso. Hoje é o seu dia, embora você já tenha
          tido um mega feriadão como seu, hoje eu tento demonstrar com palavras
          o quão importante você é pra mim, quando iniciei no ctw achei que tava
          em uma sala de um monte de riquinhos metidos, e depois que conheci
          mesmo você, eu tive certeza disso. Eu não me lembro exatamente quando
          o meu trio se uniu com o seu pra formar a nossa panelinha, mas eu fico
          muito feliz que isso tenha acontecido, e a cada dia que passa tendo
          você como minha amiga eu fico mais feliz. Eu tentei te dar um presente
          muito bom, não ficou exatamente como eu queria mas eu tentei, e fiz
          isso tudo porque você é importante pra mim, no ctw você é minha pessoa
          favorita, alí dentro você é minha prioridade, tem vezes em que eu
          escolho ignorar alguém pra entender o que caralhos você tá dizendo pra
          poder te ajudar, ou só tentando entender o que você tá me explicando,
          faço de tudo pra entender, pra que um dia você pare com a viadagem de
          que não sabe explicar, e vai continuar sendo assim até você enjoar de
          mim, eu vou fazer sempre o que estiver no meu alcance pra você estar
          feliz, ou menos triste já que aquele lugar é uma grande merda. Espero
          que você goste da sua miniatura, escolhi a do hamilton em 2021 porque
          por mais que ele tenha perdido, nós dois sabemos quem foi o melhor
          piloto daquela temporada, e eu só sei isso por culpa sua, eu não
          entendia nada de formula 1, e tentei ao máximo entender pelo menos um
          pouco, pra ter o que conversar de vez em quando, sem o TI sempre ser o
          assunto, hoje em dia graças a você eu sei que devo odiar a redbull, e
          que o hamilton é foda pra caralho, eu sei também algumas musicas da
          taylor swift(amo ela, tenho 1,83) graças a você, e na teoria sei as
          melhores, porque as únicas que eu gravei o nome, são as que você me
          disse que eram suas favoritas, as demais sinceramente não me importam.
          Aos poucos o meu leque de músicas dela aumenta, porque você tem fases
          e fases, meu objetivo era pagar de sabichão e falar a sua favorita,
          mas é tudo de momento, e você sabe que as que você me falou eu sei.
          Graças a você eu também decorei perfeitamente como escreve jhonathan,
          eu descobri que pra iniciar uma variável para um contador javascript,
          é necessário colocar algo parecido com &ldquo;let i=0&rdquo;, sei a entonação
          perfeita pra frase &ldquo;calaboca puta&rdquo; e agora eu espero que você saiba,
          já que &ldquo;sabe reconhecer padrões&rdquo;, que eu me importo muito com você, e
          sempre vou me importar. Se me permite uma analogia, sem você, esse meu
          último ano teria sido tão ruim quanto a textura de cheddar. Feliz
          aniversário Deborah! Ano que vem vai vir algo melhor ainda,
          independente da weg, porque com certeza essa não será the last time.
        </p>
      </div>
    </div>
  );
}
