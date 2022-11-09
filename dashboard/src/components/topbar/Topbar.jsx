import React from 'react'
import './topbar.css'
import { NotificationsNone, Language, Settings } from '@mui/icons-material';
export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Shop Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone/>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer"> 
            <Language/>
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings/>
          </div>
          <img src="https://images.pexels.com/photos/6073987/pexels-photo-6073987.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="lady with perfume" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}
