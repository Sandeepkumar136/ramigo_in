import React from 'react'
import { Link } from 'react-router-dom';

const Logo = ({title}) => {
  return (
    <Link to='/' className='logo'>
        {title}
    </Link>
  )
}

export default Logo;
