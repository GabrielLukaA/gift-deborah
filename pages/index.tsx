import Header from "../components/Header";
import { useTheme } from "../hooks/useTheme";

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex w-screen pb-0 flex-col items-start">
<Header/>
      <div className="flex w-[390px] p-4 flex-col items-start gap-4">
        <h2 className="text-[#111] dark:text-[#FCFCFC] medium-title">Menu</h2>
        <div className="flex flex-col items-center gap-6">
          <a
            href="/moments"
            className="flex w-[350px] p-4 flex-col items-start gap-4 rounded-2xl bg-[#fcfcfc] dark:bg-[#111] border-purple active:bg-[#901abb] active:text-[#FCFCFC]"
          >
            <h3 className="paragraph-16 dark:text-[#FCFCFC]">
              Gerador de momentos!
            </h3>
            <p className="paragraph-home dark:text-[#FCFCFC]">
              Bom, já se passou mais de um ano em que se vemos toda semana de
              segunda à sexta, das 13:40 as 22:00. Talvez entrando aqui tenham
              alguns momentos que pelo menos para mim foram divertidos, legais,
              memoráveis, catastróficos, ou todas as opções anteriores.
            </p>
          </a>
          <a
            href="/mail"
            className="flex w-[350px] p-4 flex-col items-start gap-4 rounded-2xl bg-[#fcfcfc] dark:bg-[#111]  border-purple dark:active:bg-[#901abb] active:bg-[#901abb] active:text-[#FCFCFC]"
          >
            <h3 className="paragraph-16 dark:text-[#FCFCFC]">Cartinha?</h3>
            <p className="paragraph-home dark:text-[#FCFCFC]">
              Você já bulinou algumas vezes a cartinha, coisa que acho de
              péssimo tom, se assim posso dizer. Então como somos do TI, resolvi
              fazer uma carta online, até porque você sempre tá lendo no
              celular, é uma união do útil ao agradável.
            </p>
          </a>
          <a
            href="/amo-te"
            className="flex w-[350px] p-4 flex-col items-start gap-4 rounded-2xl bg-[#fcfcfc] dark:bg-[#111]  border-purple active:bg-[#901abb] active:text-[#FCFCFC]"
          >
            <h3 className="paragraph-16 dark:text-[#FCFCFC]">
              Gerador de momentos!
            </h3>
            <p className="paragraph-home dark:text-[#FCFCFC]">
              Bom, já se passou mais de um ano em que se vemos toda semana de
              segunda à sexta, das 13:40 as 22:00. Talvez entrando aqui tenham
              alguns momentos que pelo menos para mim foram divertidos, legais,
              memoráveis, catastróficos, ou todas as opções anteriores.
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
