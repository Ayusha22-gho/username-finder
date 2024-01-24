import React from "react";
import { Link,useNavigate } from "react-router-dom";
import "./userList.css";
export default function index({ search, repoData }) {
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
 
  return (
    <div className="user-main-container">
      {Object.keys(search).length ? (
        <>
          <div className="main-image">
            <img src={search.avatar_url} alt={search.name} width={200} height={200} />
            <Link to="/follows">
              <button>Follows</button>
            </Link>
          </div>
          <div className="user-list">
            {repoData.map((user) => (
              <div className="user-container" key={user.id}>
                <img src={user.owner.avatar_url} alt=""  width={100} height={100}/>
                {/* <Link to = "/details"> <div className="repository-name">{user.name}</div>
                </Link> */}
                <div onClick={()=>{
                  navigate("/details",{state : {id:user.id}})
                }} className="user-name">{user.name}</div>
               
                <div>
                  <div className="login-name">
                    <p>Language Used: {user.language}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div></div>
      )}
    </div>
  );
}
