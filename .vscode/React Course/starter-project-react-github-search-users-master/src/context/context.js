import React, { useState, useEffect, useContext } from "react";
import mockUser from "./mockData.js/mockUser";
import mockRepos from "./mockData.js/mockRepos";
import mockFollowers from "./mockData.js/mockFollowers";
import axios from "axios";

const rootUrl = "https://api.github.com";

const GithubContext = React.createContext();

const GithubProvider = ({ children }) => {
  const [GithubUser, setGithubUser] = useState(mockUser);
  const [Repos, setRepos] = useState(mockRepos);
  const [Followers, setFollowers] = useState(mockFollowers);
  const [requests, setRequests] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({ show: false, msg: "" });
  const searchGithubUser = async (user) => {
    setLoading(true);
    toggleError();
    const resp = await axios(`${rootUrl}/users/${user}`).catch((err) =>
      console.log(err)
    );
    if (resp) {
      setGithubUser(resp.data);
      const { login, followers_url } = resp.data;

      await Promise.allSettled([
        axios(`${rootUrl}/users/${login}/repos?per_page=100`),
        axios(`${followers_url}?per_page=100`),
      ]).then((data) => {
        const [repos, followers] = data;
        console.log(data);
        const status = "fulfilled";
        if (repos.status === status) {
          setRepos(repos.value.data);
        }
        if (followers.status === status) {
          setFollowers(followers.value.data);
        }
      }).catch(err => console.log(err));
    } else {
      toggleError(true, "there is no user with that user name");
    }
    checkRequests();
    setLoading(false);
  };
  // check rate
  const checkRequests = async () => {
    axios(`${rootUrl}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;
        setRequests(remaining);
        if (remaining === 0) {
          toggleError(true, "no more requests available at this time");
        }
      })
      .catch((error) => console.log(error));
  };
  function toggleError(show = false, msg = "") {
    setError({ show, msg });
  }
  useEffect(checkRequests, []);
  return (
    <GithubContext.Provider
      value={{
        GithubUser,
        Repos,
        Followers,
        requests,
        error,
        searchGithubUser,
        loading,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};
const useGlobalContext = () => {
  return useContext(GithubContext);
};
export { GithubContext, GithubProvider, useGlobalContext };
