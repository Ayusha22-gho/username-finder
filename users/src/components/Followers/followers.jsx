import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./followers.css";
import { Link } from "react-router-dom";
export default function index({ followData,getRepData }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
// eslint-disable-next-line react-hooks/rules-of-hooks
const [repo,setRepo] = useState("");

  const handleClick = (name) =>{
   setRepo(name);
   console.log(name)
   getRepData(name);
  }
  
  
  console.log("followdata",followData.length)
  return (
    <>
     <p>Go to Home Page</p>
    <Link to = "/">Home</Link>
    <div className="follow-container">
      {followData.length > 0 ? (
        <div className="follow-grid">
          {followData.map((follow) => (
            <div className="follow-list" key={follow.id}>
              <div>
                <img src={follow.avatar_url} alt="" width={100} height={100} />
              </div>
              <Link to = "/repository">
                <div
                className="follow-info"
               onClick = {()=>handleClick(follow.login)}
              >
                <p>{follow.login}</p>
              </div>
              </Link>
              
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>No followers list present. Please enter username</p>
          <Link to="/">Home</Link>
        </div>
      )}
    </div>
    </>
  );
}
