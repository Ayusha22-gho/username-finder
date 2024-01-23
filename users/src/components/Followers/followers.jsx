import React from "react";
import "./followers.css"
import {Link} from "react-router-dom"
export default function index({ followData }) {
  return (
    <div className="follow-container">
        {followData.length > 0 ? ( <div className="follow-grid">
      {followData.map((follow) => (
        <div className="follow-list" key = {follow.id}>
            <div>
                <img src={follow.avatar_url} alt="" width ={100} height = {100} />
            </div>
            <Link to = "/details"> <div className="follow-info">
                <p>{follow.login}</p>
            </div>
            </Link>
           
        </div>
      ))}
      </div>) : (<div>
        <p>No followers list present. Please enter username</p>
        <Link to = "/" >Home</Link>
      </div>)}
       
    </div>
  );
}
