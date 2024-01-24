import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./components/Search/search";
import Users from "./components/Users/userList";
import RepoDetails from "./components/RepoDetails/repoDetails";
import RepositoryList from "./components/RepoList/repositoryList"
import Followers from "./components/Followers/followers"
function App() {
  const [userName, setUserName] = useState("");
  const [search, setSearch] = useState([]);
  const [repoData, setRepo] = useState([]);
  const [followData, setFollows] = useState([]);
  const [followRepo, setFollowRepo] = useState([])

  // const fetchApiUsers = () => {
  //   axios
  //     .get("https://api.github.com/users")
  //     .then((data) => {
  //       setUsers(data.data);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // };
  // useEffect(() => {
  //   fetchApiUsers();
  //   console.log(users);
  // }, []);

  const handleUsernameChange = (event) => {
    setUserName(event.target.value);
    console.log(userName);
  };
  const handleSubmit = async () => {
    try {
      const userData = await axios.get(
        `https://api.github.com/users/${userName}`
      );
      console.log("userdata", userData.data);
      setSearch(userData.data);
      console.log("search", search);
      //fetching repositories

      const responseRepo = await axios.get(userData.data.repos_url);
      console.log("repodata", responseRepo.data);
      setRepo(responseRepo.data);

      //fetching followers
      const followData = await axios.get(userData.data.followers_url);
      console.log("follows", followData.data);
      setFollows(followData.data);
    } catch (e) {
      console.error(e);
    }
  };

  const getRepData = async(name)=>{
    console.log("from app.js",name)
    const response = await axios.get(`https://api.github.com/users/${name}/repos`)
    console.log(response.data)
    setFollowRepo(response.data);

  }
  
  return (
   
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Search
                handleUsernameChange={handleUsernameChange}
                handleSubmit={handleSubmit}
                userName={userName}
              />
              <Users search={search} repoData ={repoData} />
              <RepositoryList repoData ={repoData} />
            </>
          }
        ></Route>
        <Route exact path="/details" element={<RepoDetails repoData = {repoData}/>}></Route>
        <Route exact path="/" element={<Users search={search} repoData ={repoData} />}></Route>
        {followRepo && (<Route exact path = "/repository" element = {<RepositoryList followRepo = {followRepo}/>}></Route>)} 
        <Route exact path = "/follows" element = {<Followers followData = {followData} getRepData ={getRepData}/>}></Route>
      </Routes>
  
  );
}

export default App;
