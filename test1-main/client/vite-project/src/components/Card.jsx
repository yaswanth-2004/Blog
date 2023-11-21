
import { useNavigate } from 'react-router-dom'
import './Card.css'
import { useState } from 'react'

const Card=(props) =>{

  const [postId,setpostId] = useState([])
  const navigate = useNavigate()

  const PostId = (value) => {
    setpostId(value)
    navigate('/singlePost',{state: {img: value.img,title:value.title,desc:value.desc}})
    console.log(value);
  }
    return (
        <div >
          <div className='row'>
            <div className='column'>
              <div className='card'
               key={props.key} onClick={() => PostId(props)} >
                
                <img className="cardimg" src={props.img}/>
                <h1 className='postTitle'>{props.title} {postId} </h1>
                <p className='postDesc'>{props.desc}</p>
                
               
              </div>
            </div>
          </div>
       </div> 
    )
}

export default Card