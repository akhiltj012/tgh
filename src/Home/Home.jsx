import React, { useState } from 'react'
import styles from './Home.module.css'
import { Sidebar } from '../Sidebar/Sidebar'
import bookmark  from '../../src/media/bookmark.png' 
import axios from 'axios'
import { useEffect } from 'react'



export const Home = () => {
    const [tag,setTag]= useState([])
    const [tags,setTags] = useState([])
    const [vis,setVis]=useState(true)
    const tagselect = (e)=>{
        setTag(e.target.value)
  
 
    }
    const bookmarked =()=>{
        setVis(false);
        let local = [];
        let items = JSON.parse(localStorage.getItem('id'));
        localStorage.clear();
        local.push(data);
        for(let i=0;i<items?.length;i++){
            if(local[i]!==local[i-1]){
                local.push(items[i])
            }
        }
        localStorage.setItem('id',JSON.stringify(local));
    }
    const [data,setData]=useState({})
 const fetch = ()=>{
    setVis(true)
    axios.get(`https://api.quotable.io/quotes/random?tags=${tag}`).then((res)=>{setData(res.data[0]);console.log(data);})
 }
    useEffect(() => {
       fetch()
      axios.get(`https://api.quotable.io/tags`).then((res)=>{setTags(res.data)})
    }, [])
   
  return (
    <div className={styles.home_main}>
       <div className={styles.Sidebar} ><Sidebar/> </div> 
    <div className={styles.quote_box}>
        <div className={styles.quote}>
            <div>
            {data.content}
            </div>
        </div>
        <div className={styles.author}>
            <div>
               <div>{data.author} </div>
               <div  onClick={bookmarked}>{vis && <img onclick={()=>{bookmarked()}} src={bookmark}/>}</div>
            </div>
        </div>
    </div>
    <div className={styles.dropdown}>
        <select onChange={tagselect}>
        {tags?.map((e)=> 
       <option value={e.name}>{e.name}</option>
        )}
           
        </select>
    </div>
    <div className={styles.next}>
        <button onClick={fetch}>Next Quote</button>
    </div>
    
    </div>
  )
}
