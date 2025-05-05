import { Header } from '../components/header';
import { Apresentacao } from '../components/apresentacao';
import * as styled from "./Home.styles";

export function Home() {
    return (
      <styled.HomeContainer>
        <Header />
        <Apresentacao mostrar={true} />
      </styled.HomeContainer>
    );
  }
  
export default Home;