import { useState } from "react";
import "./profile.css";

export default function ProfilePic() {
  const [profilepic, setProfilepic] = useState(null);

  const handleProfilepic = (e) => {
    setProfilepic(e.target.files[0]);
  };
  return (
    <div className="main">
      <div className="form-container">
        <div className="profilepic"> Profile Picture</div>
        <div className="circle">
          <img
            src=""
            width="100%"
            className="preview"
          />
          <button className="upload">
            Upload
            <input
              type="file"
              className="upload-input-button"
              onChange={handleProfilepic}
            />
          </button>
        </div>
        <button className="savechanges button-hover">
          Save changes
        </button>
      </div>
    </div>
  );
}
