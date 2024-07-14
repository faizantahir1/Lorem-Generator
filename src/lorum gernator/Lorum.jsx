import React, { useEffect, useState } from 'react'
import { data } from './data';
import Items from './Items';

const Lorum = () => {
const [number , setNumber] = useState(null)
const [myData , setMyData] = useState ([]);
const [error , setError] = useState (false);
useEffect (() => {
    if (number > data.length){
        setError(true)
        setMyData([])
} else{
    setError(false)
   
    }},[number])
    
    const generateLorum = (e) => {
        e.preventDefault()
        const updateData = data.slice(0 , number);
   setMyData(updateData)
}
    return (
    <>
    <form className='col-lg-4 mx-auto shadow p-5'>
        <h1 className='text-center display-3'>Lorum Generator</h1>
        <input value={number} onChange={(e)=>setNumber(e.target.value)} type="number" placeholder='Enter the Number'className='form-control' />
        {error && 
        <div className="p text-danger fw-bolder">Please enter a number less than {data.length} </div>
        }
        <button disabled={error} onClick={generateLorum} className="btn btn-success w-100 my-2">Generate Lorum</button>
    </form>
    <div className="container">
        <div className="row">
            {myData.map((d) => {
              return  <Items string={d}/>
            })}
        </div>
    </div>
    
    </>
  )
}

export default Lorum