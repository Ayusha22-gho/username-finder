/* eslint-disable react-hooks/rules-of-hooks */
import { Link } from "react-router-dom";
import "./repositoryList.css";
export default function index({ followRepo }) {
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
                  <img
                    src={user.owner.avatar_url}
                    alt=""
                    width={100}
                    height={100}
                  />
                </div>

                {/* <Link to = "/details"> <div className="repository-name">{user.name}</div>
                </Link> */}
                <div  className="repo-name">
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
