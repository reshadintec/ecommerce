import './sidebar.css'
import { Domain, Euro, EuroOutlined, Group, GroupOutlined, Insights, InsightsOutlined, LineStyleOutlined, MailOutlineOutlined, MessageOutlined, NextWeekOutlined, QuizOutlined, ReportOutlined, Store, Storefront, StorefrontOutlined, Summarize, SummarizeOutlined, TrendingUp, TrendingUpOutlined } from '@mui/icons-material';
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
            <li className="sidebarListItem active">
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
            <li className="sidebarListItem active">
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
            <li className="sidebarListItem active">
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
