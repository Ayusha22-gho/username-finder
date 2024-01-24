/* eslint-disable react-hooks/rules-of-hooks */
import { Link ,useNavigate} from "react-router-dom";

import "./repositoryList.css";
export default function index({ followRepo }) {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <p>Go to Home page to enter username</p>
        <Link to="/">Home</Link>
      </div>
          {
          followRepo && (
            <>
            <div className="repo-list-title">List of Repositories</div>
          <div className="repo-list">
            {followRepo.map((user) => (
              <div className="repo-container" key={user.id}>
                <div>
                 
                </div>

                {/* <Link to = "/details"> <div className="repository-name">{user.name}</div>
                </Link> */}
                <div  className="repo-name" onClick={()=>{
                  navigate("/details",{state : {followId : user.id}})
                }}>
                  {user.name}
                  <p className="repo-lang">Language Used: {user.language}</p>
                </div>
              </div>
            ))}
          </div>
          </>
          )
              }
        
      
    </div>
  );
}
