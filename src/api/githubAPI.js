const fetchUserData = (username) => {
  const token = process.env.REACT_APP_GITHUB_TOKEN;
  const headers = {
    Authorization: `Bearer ${token}`,
  };

  const userUrl = `https://api.github.com/users/${username}`;
  const reposUrl = `https://api.github.com/users/${username}/repos`;
  const followersUrl = `https://api.github.com/users/${username}/followers`;

  const userPromise = fetch(userUrl, { headers }).then((response) => {
    if (!response.ok) {
      throw new Error("Unable to fetch user data");
    }
    return response.json();
  });

  const reposPromise = fetch(reposUrl, { headers }).then((response) => {
    if (!response.ok) {
      throw new Error("Unable to fetch user repositories");
    }
    return response.json();
  });

  const followersPromise = fetch(followersUrl, { headers }).then((response) => {
    if (!response.ok) {
      throw new Error("Unable to fetch user followers");
    }
    return response.json();
  });

  return Promise.all([userPromise, reposPromise, followersPromise]).then(
    ([userData, reposData, followersData]) => {
      const { bio, followers, login } = userData; // Extract bio, followers, and login from userData
      return {
        user: {
          ...userData, // Include all properties from userData
          bio,
          followers,
          login,
        },
        repositories: reposData,
        followers: followersData,
      };
    }
  );
};

export { fetchUserData };
