import React, { useEffect, useState } from "react";

const Effect = () => {
 const [count1, setCount1] = useState(0);
 const [count2, setCount2] = useState(100);
 const [count3, setCount3] = useState(1);

 useEffect(() => {
  console.log("count2 changed");
 }, [count2]);
 return (
  <div>
   {count1} {count2} {count3}
   <div>Example of useEffect</div><br />
   <button onClick = {() => (setCount1(count1 + 1))}>Button 1</button><br />
   <button onClick = {() => (setCount2(count2 -2))}>Button 2</button><br />
   <button onClick = {() => (setCount3(count3 * 3))}>Button 3</button>
  </div>
 )
};

export default Effect;