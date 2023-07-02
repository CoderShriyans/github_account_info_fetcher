import React from "react";

const RepositoryList = ({ repositories }) => {
  // If repositories is null or undefined, display a message
  if (!repositories) {
    return <p className="mt-10">No repositories found.</p>;
  }

  // If repositories is an empty array, display a message
  if (repositories.length === 0) {
    return <p className="mt-10">No repositories available.</p>;
  }

  return (
    <div className="repository-list bg-slate-800 rounded-lg shadow p-8 flex flex-row mt-10">
      <div className="">
        <h3 className="text-2xl text-white">Repositories</h3>
        <ul className="mt-4 text-gray-300">
          {repositories.map((repo) => (
            <li key={repo.id}>
              <h4 className="text-xl text-white mb-2 mt-2">
                Name 📛: {repo.name}
              </h4>
              <p>Description —: {repo.description || "No description"}</p>
              <p>Language: {repo.language}</p>{" "}
              <p>Stars ⭐: {repo.stargazers_count}</p>{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RepositoryList;
