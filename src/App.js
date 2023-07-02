import React, { useState } from "react";
import SearchBar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";
import RepositoryList from "./components/RepositoryList";
import FollowerList from "./components/FollowerList";
import { fetchUserData } from "./api/githubAPI";

const App = () => {
  const [user, setUser] = useState(null);

  const handleSearch = (username) => {
    fetchUserData(username)
      .then((data) => {
        setUser(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container mx-auto p-4">
      <SearchBar onSubmit={handleSearch} />
      {user && (
        <div>
          <ProfileCard user={user.user} />
          <RepositoryList repositories={user.repositories} />
          <FollowerList followers={user.followers} />
        </div>
      )}
    </div>
  );
};

export default App;
