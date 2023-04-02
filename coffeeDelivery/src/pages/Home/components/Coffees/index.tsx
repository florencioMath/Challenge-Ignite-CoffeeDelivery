import { CoffeesList } from './components/CoffeesList';
import { CoffeesContainer } from './styles';

export function Coffees() {
  return (
    <>
      <CoffeesContainer>
        <h1>Nossos cafés</h1>
        <CoffeesList />
      </CoffeesContainer>
    </>
  );
}
