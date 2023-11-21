import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import Card from './card'

const Topnav = () => {


    return (
        
      <div >
      <div className='nav top'> 
      <div className="logo">
        <img className="logoimage" src="https://media.istockphoto.com/id/853409358/vector/transparent-isometric-cubes-stacked-in-a-block.jpg?s=612x612&w=0&k=20&c=MQ4XYLJXvcIxc4U_gUHyAq3PFsev-VyvjiwCvFX0Kb0=" alt="ben 10" />
      </div>
      <div className="head">
      <h1 > It's Our Blog</h1>
      </div>
        <ul className="navigation">
          <li><a href='#'><FontAwesomeIcon icon={faHouse} />Home</a></li>
          <li><a href='#'>About Us</a></li>
          <li><a href='#'>hi</a></li>
        </ul>
      </div>
      <div className='backimage'>
        <div className='backimagetext'>
        </div>
      </div>
        
        

      </div>
      
    )
}

export default Topnav