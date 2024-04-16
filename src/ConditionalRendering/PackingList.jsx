import React from 'react'
import { Item } from './Item';

export default function PackingList() {
    return (
      <section className='m-5 p-5 w-96 border-4 border-blue-500 rounded-lg '>
        <h1 className='text-lg font-bold'>Sally Ride's Packing List</h1>
        <ul>
          <Item
            isPacked={true} 
            name="Space suit" 
          />
          <Item 
            isPacked={true} 
            name="Helmet with a golden leaf" 
          />
          <Item 
            isPacked={false} 
            name="Photo of Tam" 
          />
        </ul>
      </section>
    );
  }