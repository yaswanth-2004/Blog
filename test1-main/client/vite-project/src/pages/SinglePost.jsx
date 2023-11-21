import '../pages/SinglePost.css'
import  Topnav  from '../components/Topnav'
import { useLocation } from "react-router-dom"



const SinglePost = () => {

    const location = useLocation()
    console.log(location.state);
    return (

        <div>
            <div>
                <Topnav/>
            </div>

            <div>
                <h3 className='title'>{location.state.title}</h3>
                <img className='img' src={location.state.img} height={500} width={500} />
                <h5 className='desc'>{location.state.desc}</h5>
            </div>
        </div>
    )
}

export default SinglePost