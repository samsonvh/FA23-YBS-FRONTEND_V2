"use client";
import { useState } from "react";

const ActionsButton = ({ onFilterChange }) => {
  const [unit, setUnit] = useState("");

  const handleFilterClick = (filter) => {
    setUnit(filter);
    onFilterChange(filter);
  };

  const filters = [
    { label: "Days", value: "Day" },
    { label: "Months", value: "Month" },
    { label: "Years", value: "Year" },
  ];

  return (
    <div className="dropdown js-dropdown js-actions-1-active">
      <div
        className="dropdown__button d-flex items-center rounded-4 text-blue-1 bg-blue-1-05 text-14 px-20 py-35 ml-4"
        data-bs-toggle="dropdown"
        data-bs-auto-close="true"
        aria-expanded="false"
        data-bs-offset="0,10"
      >
        <span className="js-dropdown-title">
          {unit === ""
            ? "Time Unit"
            : filters.find((f) => f.value === unit)?.label}
        </span>
        <i className="icon icon-chevron-sm-down text-7 ml-10" />
      </div>
      <div className="toggle-element -dropdown-2 js-click-dropdown dropdown-menu">
        <div className="text-14 fw-500 js-dropdown-list">
          {filters.map((filter) => (
            <div key={filter.value}>
              <button
                className={`d-block js-dropdown-link ${
                  unit === filter.value ? "text-blue-1" : ""
                }`}
                onClick={() => handleFilterClick(filter.value)}
              >
                {filter.label}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActionsButton;
