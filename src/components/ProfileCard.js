import React from "react";

const ProfileCard = ({ user }) => {
  const { login, bio, followers, avatar_url } = user; // Extract necessary properties from user object

  return (
    <div className="bg-slate-800 rounded-lg shadow p-8 flex flex-row mt-10">
      <img src={avatar_url} alt={login} className="w-32 h-32 mb-4" />

      <div className="m-5">
        <p className="text-gray-300 relative">
          Followers: {followers}
        </p>
        <p className="text-white relative ">@{login}</p>
        <p className="text-gray-500 relative">Bio: {bio || "none"}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
