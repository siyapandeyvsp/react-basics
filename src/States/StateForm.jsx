import React, { useState } from 'react'
import Input from '../components/Input'
import Label from '../components/Label'
import Button from '../components/Button'
const StateForm = () => {
    const [person,setPerson]=useState({
        firstName:'Mickey',
        lastName:'Mouse',
        email:'mickeymouse@disney.com'
    })
    // const handleFirstNameChange=(e)=>{
    //     setPerson({
    //         ...person,
    //         firstName:e.target.value
    //     })
    // }
    // const handleLastNameChange=(e)=>{
    //     setPerson({
    //         ...person,
    //         lastName:e.target.value
    //     })
    // }
    // const handleEmailChange=(e)=>{
    //     setPerson({
    //         ...person,
    //         email:e.target.value
    //     })
    // }
    const handleChange=(e)=>{
        setPerson(
            {
                ...person,
                [e.target.name]:e.target.value
            }
        )
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log("values",person)
       
    }
  return (
    <div>
      this is a form
      <form className='flex flex-col' onSubmit={handleSubmit}>
      <Label>First Name : </Label>
        <Input name="firstName"
            value={person.firstName}
            onChange={handleChange}
        />
      <Label>Last Name : </Label>
        <Input name="lastName"
            value={person.lastName}
            onChange={handleChange}
        />
      <Label>Email : </Label>
        <Input name="email"
            value={person.email}
            onChange={handleChange}
        />

<Button type="submit">Submit</Button>
      </form>
      <div className='flex flex-col'>
     <p>MY Values</p> 
      <p>{person.firstName}</p>
     <p> {person.lastName}</p>
      <p>{person.email}</p>
      </div>
    </div>
  )
}

export default StateForm
