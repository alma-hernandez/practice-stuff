import React, { useState, useMemo } from 'react';

const Memo = () => {

 const [list, setList] = useState([]);

 const addItem = (item) => {
  setList(prevList => [...prevList, item]);
 };


 const sortedList = useMemo(() => {
  return [...list].sort((a, b) => a - b);
 }, [list]);



 return (
  <div>
   <h2>Sorted List</h2>
   <ul>
    {sortedList.map(item => (
     <li key={item}>{item}</li>
    ))}
   </ul>
   <button onClick={() => addItem(Math.floor(Math.random() * 100))}>
    Add Random Item
   </button>
  </div>
 );
};

export default Memo;