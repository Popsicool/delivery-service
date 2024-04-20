import React, { useState } from "react";
import { motion } from "framer-motion";

export const Settings = () => {
  const [formData, setForm] = useState({
    current: "",
    newPassword: "",
    confirm: "",
  });
  const [showPass, setShowPass] = useState({
    current: false,
    newPassword: false,
    confirm: false,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  const handleToggle = (e) => {
    console.log(e)
  }

  return (
    <motion.div className="settings">
      <form onSubmit={handleSubmit}>
        <label>Current Password *</label>
        <br />
        <div>
          <input
            type={showPass.current ? "text" : "password"}
            name="current"
            value={formData.current}
            onChange={handleChange}
            className="form-input"
          />
          <i className={showPass.current ? "fa-solid fa-eye eye" : "fa-solid fa-eye-slash eye"} onClick={() => {
            setShowPass(prev => ({
              ...prev,
              current: !prev.current
            }))
          }}></i>
        </div>
        <br />
        <label>New Password *</label>
        <br />
        <div>
        <input
          type={showPass.newPassword ? "text" : "password"}
          name="newPassword"
          value={formData.newPassword}
          onChange={handleChange}
          className="form-input"
        />
        <i className={showPass.newPassword ? "fa-solid fa-eye eye" : "fa-solid fa-eye-slash eye"} onClick={() => {
            setShowPass(prev => ({
              ...prev,
            newPassword: !prev.newPassword
            }))
          }}></i>
        </div>
        <br />
        <label htmlFor="">Confirm Password *</label>
        <br />
        <div>
        <input
          type={showPass.confirm ? "text" : "password"}
          name="confirm"
          value={formData.confirm}
          onChange={handleChange}
          className="form-input"
        />
        <i className={showPass.confirm ? "fa-solid fa-eye eye" : "fa-solid fa-eye-slash eye"} onClick={() => {
            setShowPass(prev => ({
              ...prev,
            confirm: !prev.confirm
            }))
          }}></i>

        </div>
        <br />
        <button className="update-btn">Update</button>
      </form>
    </motion.div>
  );
};
