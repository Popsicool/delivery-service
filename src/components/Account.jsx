import React, { useState } from 'react'
import { motion } from 'framer-motion'

export const Account = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    county: ""
  })
  const handleSubmit = () => {
    e.preventDefault()
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...formData,
      [name]: value
    }))
  }
  return (
    <motion.div className='settings'>
      <form onSubmit={handleSubmit}>
        <div className="formrow">
          <div>
            <label>First name *</label>
            <br />
            <div>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </div>
          <div>
            <label>Last name *</label>
            <br />
            <div>
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </div>
        </div>
        <br />
        <div className="formrow">
          <div>
            <label>Email *</label>
            <br />
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </div>
          <div>
            <label>Phone Number *</label>
            <br />
            <div>
              <input
                type="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </div>
        </div>
        <br />
        <div className="formrow">
          <div>
            <label>County *</label>
            <br />
            <div>
              <input
                type="text"
                name="county"
                value={formData.county}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </div>
          {/* <div>
            <label>Phone Number *</label>
            <br />
            <div>
              <input
                type="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
              />
            </div>
          </div> */}
        </div>
        <br />
        <button className="update-btn">Update</button>
      </form>


    </motion.div>
  )
}
