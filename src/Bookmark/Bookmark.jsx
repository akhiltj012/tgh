import React from 'react'
import styles from './Bookmark.module.css'
import { Sidebar } from '../Sidebar/Sidebar'
import bookmark  from '../../src/media/bookmark.png' 

export const Bookmark = () => {
  return (
    <div>
       <div><Sidebar/></div>
        <div>
        <div className={styles.quote_box}>
        <div className={styles.quote}>
            <div>
                dsfggdsfg
            </div>
        </div>
        <div className={styles.author}>
            <div>
               <div>dfgert</div>
               <div> 
                <img src={bookmark}/> 
               </div>
            </div>
        </div>
    </div>
        </div>
    </div>
  )
}
