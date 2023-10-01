import React, { useState } from "react";
const ProfileImg = ({ user, token }) => {
  const [img, setImg] = useState(user.profileImage);
  const uploadImg = async (img) => {
    const url =
      "https://academics.newtonschool.co/api/v1/user/updateProfileImage";
    const response = await fetch(url, {
      method: "PATCH",
      body: {
        profileImage: img,
      },
      headers: {
        Authorization: token,
        projectId: "k0oz8rtzq0n9",
      },
    });
    const data = await response.json();
    console.log(data);
    console.log(token);
  };
  /* choose Image */
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    uploadImg(file);
  };
  return (
    <div className="profile-img">
      <div className="avtar">
        {user.profileImage ? (
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
    </div>
  );
};

export default ProfileImg;
