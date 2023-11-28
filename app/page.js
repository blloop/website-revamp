import Container from './components/Container';
import { DarkButton, LightButton } from './components/Buttons';

export default function Home() {
  return (
    <Container>
      <h1>Hi, my name is Bill</h1>
      <p>This is the home page!</p>
      <DarkButton>This is Dark</DarkButton>
      <LightButton>This is Light</LightButton>
    </Container>
  );
}
