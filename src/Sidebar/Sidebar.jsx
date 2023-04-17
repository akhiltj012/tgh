import React from 'react'
import styles from '../Sidebar/Sidebar.module.css'
export const Sidebar = () => {
  return (
    <div>
        <div className={styles.sidebar_main} >
            <div>Home </div>
            <div>BookMarks</div>
        </div>
    </div>
  )
}
