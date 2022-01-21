import React,{ useState } from 'react';
import '../styles/input.css'

const Input = ({ setSearch }) => {

  const [searchQuery,setSearchQuery] = useState('');
  
  const HandleChange = (e) => {
    setSearchQuery(e.target.value);
    setSearch(e.target.value);
    e.preventDefault();
  }
  
  return (
    <>
  <div className="form">
    <input 
    type="text"
    className='input'
    value={searchQuery}
    placeholder='Search for github users'
    onChange={HandleChange}
  />
    </div>
    </>
  )
};

export default Input;