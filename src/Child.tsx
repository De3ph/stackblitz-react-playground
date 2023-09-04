import { cart } from './patterns/singelton';
const Child = () => {
  console.log('cart from child', cart.id);
  return <>Child</>;
};

export default Child;
