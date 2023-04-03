import { CoffeesListContainer } from './styles';
import { coffeesData } from '../../database/db';
import { CoffeeCard } from '../CoffeeCard';

export function CoffeesList() {
  return (
    <>
      <CoffeesListContainer>
        {coffeesData.map((coffee) => {
          return <CoffeeCard key={coffee.id} coffee={coffee} />;
        })}
      </CoffeesListContainer>
    </>
  );
}
