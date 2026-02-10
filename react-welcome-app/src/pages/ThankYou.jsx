import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assests/lovelogo.png";

const ThankYou = () => {
  const { state } = useLocation();
  const name = state?.name;
  const navigate = useNavigate();

  const [showNoModal, setShowNoModal] = useState(false);

  const handleClose = () => navigate("/");
  const handleYes = () => navigate("/love", { state: { name } });
  const handleNo = () => setShowNoModal(true);
  const closeNoModal = () => setShowNoModal(false);

  return (
    <div className="app-center">
      <div
        className="love-hero magical"
        style={{ backgroundImage: `url(${logo})` }}
        role="img"
        aria-label="Love background"
      >
        <div className="stars" aria-hidden="true" />

        <button className="close-btn" onClick={handleClose} aria-label="Close">
          ×
        </button>

        <div className="valentine-overlay">
          <h2 className="valentine-text">
            {name
              ? `𝓣𝓱𝓲𝓼 𝓲𝓼 𝓪 𝓿𝓮𝓻𝔂 𝓲𝓶𝓹𝓸𝓻𝓽𝓪𝓷𝓽 𝓺𝓾𝓮𝓼𝓽𝓲𝓸𝓷
𝓪𝓷𝓭 𝓻𝓮𝓺𝓾𝓲𝓻𝓮𝓼 𝓪 𝓼𝓶𝓲𝓵𝓮 𝓫𝓮𝓯𝓸𝓻𝓮 𝓪𝓷𝓼𝔀𝓮𝓻𝓲𝓷𝓰 😄

𝓦𝓲𝓵𝓵 𝔂𝓸𝓾 𝓫𝓮 𝓶𝔂 𝓥𝓪𝓵𝓮𝓷𝓽𝓲𝓷𝓮? 💖
${name}`
              : `𝓣𝓱𝓲𝓼 𝓲𝓼 𝓪 𝓿𝓮𝓻𝔂 𝓲𝓶𝓹𝓸𝓻𝓽𝓪𝓷𝓽 𝓺𝓾𝓮𝓼𝓽𝓲𝓸𝓷
𝓪𝓷𝓭 𝓻𝓮𝓺𝓾𝓲𝓻𝓮𝓼 𝓪 𝓼𝓶𝓲𝓵𝓮 𝓫𝓮𝓯𝓸𝓻𝓮 𝓪𝓷𝓼𝔀𝓮𝓻𝓲𝓷𝓰 😄

𝓦𝓲𝓵𝓵 𝔂𝓸𝓾 𝓫𝓮 𝓶𝔂 𝓥𝓪𝓵𝓮𝓷𝓽𝓲𝓷𝓮? 💖`}
          </h2>

          <div className="valentine-buttons">
            <button className="btn-yes" onClick={handleYes}>
              Yes
            </button>
            <button className="btn-no" onClick={handleNo}>
              No
            </button>
          </div>
        </div>
      </div>

      {showNoModal && (
        <div
          className="modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-label="No option dialog"
        >
          <div className="modal-content magical">
            <button
              className="modal-close"
              onClick={closeNoModal}
              aria-label="Close modal"
            >
              ×
            </button>
            <h3>🤔 Wait a sec...</h3>
            <p>
              You don't have a "No" option — please rethink and choose the
              correct option. 😜
            </p>
            <div style={{ marginTop: 12 }}>
              <button className="btn-yes" onClick={closeNoModal}>
                Okay, I'll rethink
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ThankYou;
