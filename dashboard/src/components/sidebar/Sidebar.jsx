import './sidebar.css'
import { Domain, Insights, TrendingUp } from '@mui/icons-material';
export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <Domain className="sidebarIcon"/>
              Home
            </li>
            <li className="sidebarListItem">
              <Insights className="sidebarIcon"/>
              Insights
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon"/>
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <Domain className="sidebarIcon"/>
              Home
            </li>
            <li className="sidebarListItem">
              <Insights className="sidebarIcon"/>
              Insights
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon"/>
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <Domain className="sidebarIcon"/>
              Home
            </li>
            <li className="sidebarListItem">
              <Insights className="sidebarIcon"/>
              Insights
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon"/>
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <Domain className="sidebarIcon"/>
              Home
            </li>
            <li className="sidebarListItem">
              <Insights className="sidebarIcon"/>
              Insights
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon"/>
              Sales
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
