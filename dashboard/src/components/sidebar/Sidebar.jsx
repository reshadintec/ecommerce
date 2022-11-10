import './sidebar.css'
import {  EuroOutlined,  GroupOutlined,  InsightsOutlined, LineStyleOutlined, MailOutlineOutlined, MessageOutlined, NextWeekOutlined, QuizOutlined, ReportOutlined, StorefrontOutlined, SummarizeOutlined, TrendingUpOutlined } from '@mui/icons-material';
export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyleOutlined className="sidebarIcon"/>
              Home
            </li>
            <li className="sidebarListItem">
              <InsightsOutlined className="sidebarIcon"/>
              Insights
            </li>
            <li className="sidebarListItem">
              <TrendingUpOutlined className="sidebarIcon"/>
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <GroupOutlined className="sidebarIcon"/>
              Users
            </li>
            <li className="sidebarListItem">
              <StorefrontOutlined className="sidebarIcon"/>
              Products
            </li>
            <li className="sidebarListItem">
              <EuroOutlined className="sidebarIcon"/>
              Transactions
            </li>

            <li className="sidebarListItem">
              <SummarizeOutlined className="sidebarIcon"/>
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutlineOutlined className="sidebarIcon"/>
              Mail
            </li>
            <li className="sidebarListItem">
              <QuizOutlined className="sidebarIcon"/>
              FAQ
            </li>
            <li className="sidebarListItem">
              <MessageOutlined className="sidebarIcon"/>
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <NextWeekOutlined className="sidebarIcon"/>
              Manage
            </li>
            <li className="sidebarListItem">
              <InsightsOutlined className="sidebarIcon"/>
              Insights
            </li>
            <li className="sidebarListItem">
              <ReportOutlined className="sidebarIcon"/>
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
