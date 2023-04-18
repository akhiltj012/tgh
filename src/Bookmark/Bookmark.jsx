import React, { useState,useEffect } from 'react'
import styles from './Bookmark.module.css'
import { Sidebar } from '../Sidebar/Sidebar'
import bookmark  from '../../src/media/bookmark.png' 

export const Bookmark = () => {
    const [id,setId] = useState(JSON.parse(localStorage.getItem('id')));
    const remove = (e)=>{
       setId(JSON.parse(localStorage.getItem('id')))
       localStorage.clear()
     setId(id.filter((el)=>el._id!==e._id))
     localStorage.setItem('id',JSON.stringify(id));
     if(id.length===1){
        localStorage.clear();
    }
    }
   
  return (
    <div className={styles.main}>
       <div><Sidebar/></div>
        <div>
            {id?.map((e)=>{
                
                 return  <div className={styles.quote_box}>
                 <div className={styles.quote}>
                     <div>
                       {e.content}
                     </div>
                 </div>
                 <div className={styles.author}>
                     <div>
                        <div>{e.author}</div>
                        <div> 
                         <img onClick={()=>remove(e)} src={bookmark}/> 
                        </div>
                     </div>
                 </div>
             </div>  
                
            })}
     
        </div>
    </div>
  )
}
