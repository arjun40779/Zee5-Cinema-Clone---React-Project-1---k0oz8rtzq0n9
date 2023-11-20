import React, { useState } from "react";
import { useUserContext } from "../context/UserContext";

const ProfileImg = ({ user }) => {
  const [img, setImg] = useState(user.profileImage);
  const { token } = useUserContext();
  const url =
    "https://academics.newtonschool.co/api/v1/user/updateProfileImage";
  const options = {
    method: "PATCH",
    headers: {
      Authorization: "Bearer " + token,
      projectId: "k0oz8rtzq0n9",
    },
    body: {
      profileImage: img,
    },
  };

  const uploadImg = async (img) => {
    const response = await fetch(url, options);
    const data = await response.json();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    setImg(file);
  };
  return (
    <div className="profile-img">
      <div className="avtar">
        {img ? (
          <img src={URL.createObjectURL(img)} alt="avatar" width="200" />
        ) : (
          <img
            src="https://t4.ftcdn.net/jpg/04/83/90/95/360_F_483909569_OI4LKNeFgHwvvVju60fejLd9gj43dIcd.jpg"
            alt="Img"
            width="200"
          />
        )}
        {/* <i className="fa-regular fa-pen-to-square">               
        </i> */}
      </div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={uploadImg}>upload</button>
    </div>
  );
};

export default ProfileImg;
