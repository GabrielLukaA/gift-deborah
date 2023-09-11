import Header from "../components/Header";
import Link from 'next/link'

export default function Mail() {
  return (
    <div className="flex w-screen pb-0 flex-col items-start">
    <Link className="fixed top-4 left-8" href="/"><p className="dark:text-white">x</p></Link>
<Header title="Cartinha!" description="Apenas leia, escrevi de coração, se quiser tem o tema dark também, vê como achar melhor"/>
<div className="flex w-[390px] p-8 flex-col items-center gap-4">

<p className="text-justify dark:text-[#fcfcfc]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque doloribus deleniti fugiat, sint distinctio asperiores magnam ducimus officiis iusto tenetur dolorum temporibus nesciunt sapiente. Eum aliquid maxime perspiciatis sunt animi, alias voluptatum cumque vitae cupiditate at eligendi. Aliquam voluptatum esse exercitationem voluptate officiis reprehenderit eius magni sit eum molestiae doloremque, aut pariatur et accusamus quae voluptatem vel quas quos alias architecto, voluptas quibusdam. Porro tempora, quam nam repellendus pariatur provident illo, autem nesciunt beatae, distinctio magnam necessitatibus numquam dignissimos impedit assumenda voluptatem! Est porro aliquam accusamus. Perferendis, asperiores sed, ea quis incidunt placeat pariatur assumenda minima labore id in eum!</p>

</div>
    </div>

  );
}
