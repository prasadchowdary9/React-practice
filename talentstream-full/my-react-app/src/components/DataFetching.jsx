import React,{useState,useEffect} from 'react'
import axios from 'axios'

const DataFetching = () => {
    const [post,setPost] = useState({})
    const [error,setError] = useState('');
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts/1').then(res=>{
            setPost(res.data)
            setError('')
            setLoading(false)
        }).catch(()=>{
            setPost({})
            setError('Something went wrong!')
            setLoading(false)   
        })


    },[])
    
    


  return (
    <div>
        {loading?'Loading...':post.title}
        {error?error:null}
      
    </div>
  )
}

export default DataFetching
