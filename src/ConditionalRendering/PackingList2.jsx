import { Item2 } from "./Item2";
export default function PackingList2() {
    return (
      <section className='m-5 p-5 w-96 border-4 border-blue-500 rounded-lg'>
        <h1 className='text-lg font-bold'>Sally Ride's Packing List</h1>
        <ul>
          <Item2 
            importance={9} 
            name="Space suit" 
          />
          <Item2 
            importance={0} 
            name="Helmet with a golden leaf" 
          />
          <Item2 
            importance={6} 
            name="Photo of Tam" 
          />
        </ul>
      </section>
    );
  }