import React from "react";
import { useNavigate } from "react-router-dom";
import "./followers.css";
import { Link } from "react-router-dom";
export default function index({ followData }) {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();

  
  
  
  console.log("followdata",followData.length)
  return (
    <div className="follow-container">
      {followData.length > 0 ? (
        <div className="follow-grid">
          {followData.map((follow) => (
            <div className="follow-list" key={follow.id}>
              <div>
                <img src={follow.avatar_url} alt="" width={100} height={100} />
              </div>
              <div
                className="follow-info"
                onClick={() => {
                  navigate("/repository",{state : {id : follow.id,repoUrl : follow.repos_url }})
                  
                }}
              >
                <p>{follow.login}</p>
              </div>
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
  );
}
