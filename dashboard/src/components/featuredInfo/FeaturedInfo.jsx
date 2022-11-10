import './featuredInfo.css'
import {ArrowDownwardOutlined, ArrowUpwardOutlined} from '@mui/icons-material';
export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,134</span>
          <span className="featuredMoneyRate">-11.4 <ArrowDownwardOutlined className='featuredIcon negative'/></span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,231</span>
          <span className="featuredMoneyRate">-7.4 <ArrowDownwardOutlined className='featuredIcon negative'/></span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Expenses</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$1,452</span>
          <span className="featuredMoneyRate">+3.6 <ArrowUpwardOutlined className='featuredIcon'/></span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  )
}
