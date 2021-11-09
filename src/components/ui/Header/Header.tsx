import Clock from "../Clock/Clock";
import Logo from "../Logo/Logo";
import { ContainerStyled, TitleContainer } from "./Header.styled";

const Header = () => (
  <ContainerStyled data-testid="Header">
    <div>
      <Logo style={{ width: 196, height: 91, marginLeft: 49 }}></Logo>
      <TitleContainer>
        <span>Carers</span>
        <span>Here you'll be able to schedule your carers visits</span>
      </TitleContainer>
    </div>
    <Clock style={{ marginRight: 38, fontSize: 24 }}></Clock>
  </ContainerStyled>
);

export default Header;
