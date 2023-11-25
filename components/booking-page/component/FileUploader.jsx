"use client";
import React, { useState } from "react";

const FileUploader = () => {
  const [file, setFile] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleFileChange = (e) => {
    const currentFile = e.target.files[0];
    setFile(currentFile);
    console.log(currentFile);

    if (!currentFile) {
      setError("Please select a file.");
      setSuccess(false);
      setFile("");
      return;
    }
    if (
      currentFile.type !==
      `application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`
    ) {
      setError("Only Excel files are allowed.");
      setSuccess(false);
      setFile("");
      return;
    } else {
      setFile(currentFile);
      setSuccess(true);
      setError("");
    }
  };

  return (
    <div className="row y-gap-30 items-center">
      <div className="col-auto">
        <h4 className="text-16 fw-500">Your Guest List</h4>
        <div className="text-14 mt-5">Excel file is accepted.</div>
        <div className="d-inline-block mt-15">
          <label
            htmlFor="excel-upload"
            role="button"
            className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
          >
            <i className="icon-upload-file text-20 mr-10" />
            Browse
          </label>
          <input
            type="file"
            id="excel-upload"
            accept=".xls, .xlsx"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </div>
        {error && !success && <div className="text-red-1 mt-1">{error}</div>}
        {success && <div className="text-black-1 mt-1">{file.name}</div>}
      </div>
    </div>
  );
};

export default FileUploader;
