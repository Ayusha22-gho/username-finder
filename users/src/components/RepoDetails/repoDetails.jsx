import React from 'react'
import { useLocation } from 'react-router-dom'
import "./repoDetails.css"
export default function index({repoData}) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const location = useLocation();
  const repoId = location.state.id;
  const details = repoData.filter((user)=> user.id === repoId);
  console.log("details",details)
  return (
    <div className='detail-container'>
      <div className="detail-user-info">
        <img src={details[0].owner.avatar_url} alt="" width={100} height={100}/>
        <div className="info">
          <p>Verfied by GitHub</p>
          <p>Github confirms that this app meets the <span className='link-text'>requirements for verification.</span></p>
        </div>
        <div className="categories">
          <p>Categories</p>
          <div className='pin-tabs'>
            <span>Code Review</span>
            <span>IDEs</span>
            <span>Free</span>
            <span>Paid</span>
          </div>
        </div>
      </div>
      <div className="detail-repo-detail">
        <p>Application</p>
        <p className='repo-name'>{details[0].name}</p>
        <button className='plan-button'>Set Up a Plan</button>
        <div className='info-text'>
          <p>{details[0].description}</p>
        </div>
      </div>
    </div>
  )
}
