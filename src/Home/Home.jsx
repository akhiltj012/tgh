import React from 'react'
import styles from './Home.module.css'
import { Sidebar } from '../Sidebar/Sidebar'
import bookmark  from '../../src/media/bookmark.png' 

export const Home = () => {
  return (
    <div className={styles.home_main}>
       <div className={styles.Sidebar} ><Sidebar/> </div> 
    <div className={styles.quote_box}>
        <div className={styles.quote}>
            <div>
                dsfggdsfg
            </div>
        </div>
        <div className={styles.author}>
            <div>
               <div>dfgert</div>
               <div><img src={bookmark}/></div>
            </div>
        </div>
    </div>
    <div className={styles.dropdown}>
        <select>
            <option>jhgsd</option>
            <option>sdfg</option>
        </select>
    </div>
    <div className={styles.next}>
        <button>Next Quote</button>
    </div>
    
    </div>
  )
}
