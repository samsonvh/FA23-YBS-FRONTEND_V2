"use client";
import { useState } from "react";
import DateSearch from "@/components/hero/DateSearch";

const CompanyContent = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const passwordsMatch = password === confirmPassword;
  return (
    <div className="row x-gap-20 y-gap-20">
      <div className="col-12">
        <div className="form-input ">
          <input type="text" required />
          <label className="lh-1 text-16 text-light-1">Company Name</label>
        </div>
      </div>

      <div className="col-md-6">
        <div className="form-input ">
          <input type="text" required />
          <label className="lh-1 text-16 text-light-1">Company Address</label>
        </div>
      </div>

      <div className="col-md-6">
        <div className="form-input ">
          <input type="text" required />
          <label className="lh-1 text-16 text-light-1">Company HotLine</label>
        </div>
      </div>

      <div className="col-md-6">
        <div className="form-input ">
          <input type="text" required />
          <label className="lh-1 text-16 text-light-1">Company Email</label>
        </div>
      </div>

      <div className="col-md-6">
        <div className="form-input ">
          <input type="text" required />
          <label className="lh-1 text-16 text-light-1">Company Username</label>
        </div>
      </div>

      <div className="col-md-6 ">
        <div className="form-input ">
          <input
            type="password"
            required
            value={password}
            onChange={handlePasswordChange}
          />
          <label className="lh-1 text-16 text-light-1">Company Password</label>
        </div>
      </div>
      <div className="col-md-6 ">
        <div className="form-input ">
          <input
            type="password"
            required
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          <label className="lh-1 text-16 text-light-1">Comfirm Password</label>
        </div>
        {passwordsMatch ? null : <p>Passwords do not match</p>}
      </div>

      <div className="col-md-6">
        <div className="form-input ">
          <input type="text" required />
          <label className="lh-1 text-16 text-light-1">
            Company FacebookURL
          </label>
        </div>
      </div>

      <div className="col-md-6">
        <div className="form-input ">
          <input type="text" required />
          <label className="lh-1 text-16 text-light-1">
            Company InstagramURL
          </label>
        </div>
      </div>

      <div className="col-md-6">
        <div className="form-input ">
          <input type="text" required />
          <label className="lh-1 text-16 text-light-1">
            Company LinkedInURL
          </label>
        </div>
      </div>

      <div className="col-md-6">
        <div className="searchMenu-date px-20 py-10 border-light rounded-4 -right js-form-dd js-calendar ">
          <label className="lh-1 text-16 text-light-1">
            Contract Start Date
          </label>
          <DateSearch onDateChange={(dates) => setDateOfBirth(dates)} />
        </div>
      </div>
    </div>
  );
};

export default CompanyContent;
