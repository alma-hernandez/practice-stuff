import React, {useContext } from "react";
import { Context } from './Context';

const HeaderContext = () => {
 const {theme, toggleTheme} = useContext(Context);

 return (
  <haeder style ={{ background: theme === 'light'? blue: 'light' }}>
   <h1> Theme Switching </h1>
   <button onClick= {toggleTheme}>Toggle Theme</button>
  </haeder>
 );
};

export default HeaderContext;