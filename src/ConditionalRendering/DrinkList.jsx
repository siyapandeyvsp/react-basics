import { Drink } from "./Drink";
export default function DrinkList() {
    return (
        <div className='m-5 p-5 w-96 border-4 border-blue-500 rounded-lg'>

        <Drink name="tea" />
        <Drink name="coffee" />
      </div>
    );
  }
  