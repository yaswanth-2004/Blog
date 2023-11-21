import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { useEffect, useState } from "react";
import Card from "../components/card";
import axios from "axios";
import Topnav from "../components/Topnav";



const Home =() => {
    const  [post,setPost] = useState([])
    
    
    
    
    useEffect(()=>{
        const fetchPost = async() => {
            try{
                const response = await axios.get("http://localhost:3001/post")
                setPost(response.data)
                console.log(response.data);
        
            }
            catch(err){
              console.error(err)
            }
        }
        fetchPost()
    },[])
    
    return (
    <div>
     <div>
      <Topnav/>
      <div class="wrap">
        <div class="search">
        <input type="text" class="searchTerm" onChange={(e) => setsearch(e.target.value)}  placeholder="What are you looking for?"/>
        <button  class="searchButton">
        <FontAwesomeIcon icon={faMagnifyingGlass} flip onClick={() => {onSearch}} />
          </button>
        </div>
        </div>
     </div>
      

      <div className="homepost">
        {post.map(val => (
          <Card title={val.title} img={val.img} desc={val.desc}/>
        ))}

        
         
        </div>
        
    </div>
    
    )
}

export default Home