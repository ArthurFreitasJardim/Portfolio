import { Header } from '../components/header';
import { Apresentacao } from '../components/apresentacao';
import { About } from '../components/about'
import { Skills } from '../components/skills';
import { Projects } from "../components/projects-exp";
import { Footer } from "../components/footer";
import * as styled from "./Home.styles";

export function Home() {
    return (
      <styled.HomeContainer>
        <Header />
        <Apresentacao mostrar={true} />
        <About mostrar={true} />
        <Skills />
        <Projects />
        <Footer />

      </styled.HomeContainer>
    );
  }
  
export default Home;