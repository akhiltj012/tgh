import React from 'react'
import styles from '../Sidebar/Sidebar.module.css'
import { useNavigate } from 'react-router-dom'
export const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div>
        <div className={styles.sidebar_main} >
            <div onClick={()=>navigate('/')}>Home </div>
            <div onClick={()=>navigate('/bookmark')}>BookMarks</div>
        </div>
    </div>
  )
}
