import Titulo from "../../components/titulo";
import Paragrafo from "../../components/Paragrafo";
import { GithubSecao } from "./styles";

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque at magni nulla cum perferendis
      repellendus odit laboriosam. Nobis totam, sed magnam beatae blanditiis vel voluptate officiis facere voluptates nesciunt quos?
    </Paragrafo>

    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=gabriel0725&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=gabriel0725&layout=compact&langs_count=7&theme=dracula" />
    </GithubSecao>
  </section>
)


export default Sobre
