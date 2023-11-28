"use client";
import ActionsButton from "../components/ActionsButton";
import { createMBSPackages } from "@/app/api/MBSPakage";
import BackButton from "@/components/button/BackButton";
import { useState } from "react";
const Location = () => {
  const [name, setPackageName] = useState("");
  const [effectiveDuration, setDuration] = useState(0);
  const [price, setPrice] = useState(0);
  const [points, setPoints] = useState(0);
  const [moneyUnit, setMoneyUnit] = useState("VND");
  const [timeUnit, setTimeUnit] = useState("");
  const [description, setDescription] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await createMBSPackages({
        name,
        effectiveDuration,
        price,
        points,
        moneyUnit,
        description,
        timeUnit,
      });
    } catch (error) {
      console.error("Error submitting form:", error.message);
    }
  };
  return (
    <form onSubmit={(e) => handleFormSubmit(e)}>
      <div className="row x-gap-20 y-gap-20">
        <div className="col-lg-8">
          <div className="form-input ">
            <input
              type="text"
              value={name}
              onChange={(e) => setPackageName(e.target.value)}
              required
            />
            <label className="lh-1 text-16 text-light-1">Package Name</label>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="form-input">
            <input
              type="number"
              placeholder="0"
              value={effectiveDuration}
              onChange={(e) => setDuration(e.target.value)}
              min={0}
              required
            />
            <ActionsButton onFilterChange={(filter) => setTimeUnit(filter)} />
            <label className="lh-1 text-16 text-light-1">
              Effective Duration
            </label>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="form-input ">
            <input
              type="number"
              min={0}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
            <label className="lh-1 text-16 text-light-1">Price (VNĐ)</label>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="form-input ">
            <input
              type="number"
              min={0}
              value={points}
              onChange={(e) => setPoints(e.target.value)}
              required
            />
            <label className="lh-1 text-16 text-light-1">Point</label>
          </div>
        </div>
        <div className="col-12">
          <div className="form-input ">
            <textarea
              required
              rows={3}
              onChange={(e) => setDescription(e.target.value)}
              defaultValue={description}
            />
            <label className="lh-1 text-16 text-light-1">Description</label>
          </div>
        </div>
        <div className="col-12 d-flex justify-content-end">
          <div className="row x-gap-10 y-gap-10">
            <div className="col-auto">
              <button
                type="submit"
                className="button h-50 px-24 -dark-1 bg-blue-1 text-white"
              >
                Confirm <div className="icon-arrow-top-right ml-15" />
              </button>
            </div>
            <div className="col-auto">
              <BackButton
                className={"button h-50 px-24 -blue-1 bg-blue-1-05 text-blue-1"}
              >
                Cancel
              </BackButton>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Location;
