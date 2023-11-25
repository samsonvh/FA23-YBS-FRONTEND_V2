"use client";

import React, { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";

const DateSearch = ({ onDateChange }) => {
  const [dates, setDates] = useState();
  const handleDateChange = (selectedDates) => {
    setDates(selectedDates);
    onDateChange(selectedDates);
  };

  return (
    <div className="text-15 text-light-1 ls-2 lh-16 custom_dual_datepicker">
      <DatePicker
        inputClass="custom_input-picker"
        containerClassName="custom_container-picker"
        value={dates}
        onChange={handleDateChange}
        numberOfMonths={1}
        format="MMMM DD YYYY"
      />
    </div>
  );
};

export default DateSearch;
