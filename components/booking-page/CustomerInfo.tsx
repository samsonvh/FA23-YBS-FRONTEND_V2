"use client";
import Link from "next/link";
import BookingDetails from "./sidebar/BookingDetails";
import { NextRequest } from "next/server";
import { useEffect, useState } from "react";
import { bookingForGuest, bookingForMember } from "@/app/api/bookings";
import { getAllYachtTypes } from "@/app/api/yachts";
import { getAllServicePackages } from "@/app/api/services";
import { useSession } from "next-auth/react";
import DateSearch from "../hero/DateSearch";
import FileUploader from "./component/FileUploader";
const CustomerInfo = (req: NextRequest) => {
  const [routeId, setRouteId] = useState("");
  const [fullName, setFullName] = useState("");
  const [identityNumber, setIdentityNumber] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [occurDate, setOccurDate] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [guestList, setGuestList] = useState([]);
  const [note, setNote] = useState("");
  const [yachtTypeId, setYachtTypeId] = useState("");
  const [listServicePackageId, setListServicePackageId] = useState([]);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    setRouteId(urlParams.get("tourId"));
  }, [routeId]);
  console.log("tourId", routeId);
  return (
    <>
      <div className="col-xl-7 col-lg-8 mt-30">
        <div className="py-15 px-20 rounded-4 text-15 bg-blue-1-05">
          Sign in to book with your saved details or{" "}
          <Link href="/signup" className="text-blue-1 fw-500">
            register
          </Link>{" "}
          to manage your bookings on the go!
        </div>
        {/* End register notify */}

        <h2 className="text-22 fw-500 mt-40 md:mt-24">
          Let us know who you are
        </h2>

        <div className="row x-gap-20 y-gap-20 pt-20">
          <div className="col-12">
            <div className="form-input ">
              <input
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <label className="lh-1 text-16 text-light-1">Full Name</label>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-md-6">
            <div className="form-input ">
              <input
                type="text"
                required
                value={identityNumber}
                onChange={(e) => setIdentityNumber(e.target.value)}
              />
              <label className="lh-1 text-16 text-light-1">
                Identity Number
              </label>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-md-6">
            <div className="form-input ">
              <input
                type="text"
                required
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <label className="lh-1 text-16 text-light-1">Phone Number</label>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-md-6">
            <div className="searchMenu-date px-20 py-10 border-light rounded-4 -right js-form-dd js-calendar">
              <label className="lh-1 text-16 text-light-1">Date Of Birth</label>
              <DateSearch onDateChange={(dates) => setDateOfBirth(dates)} />
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-md-6">
            <div className="searchMenu-date px-20 py-10 border-light rounded-4 -right js-form-dd js-calendar">
              <label className="lh-1 text-16 text-light-1">Occur Date</label>
              <DateSearch onDateChange={(dates) => setOccurDate(dates)} />
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-12">
            <div className="form-input ">
              <input type="text" required />
              <label className="lh-1 text-16 text-light-1">
                Address line 2
              </label>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-12">
            <div className="form-input ">
              <textarea
                required
                rows={6}
                defaultValue={note}
                onChange={(e) => setNote(e.target.value)}
              />
              <label className="lh-1 text-16 text-light-1">
                Special Requests
              </label>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-md-6">
            <FileUploader />
          </div>
          {/* End col-12 */}

          <div className="col-md-6">
            <div className="form-input ">
              <input type="text" required />
              <label className="lh-1 text-16 text-light-1">
                ZIP code/Postal code
              </label>
            </div>
          </div>
          {/* End col-12 */}

          <div className="col-12">
            <div className="row y-gap-20 items-center justify-between">
              <div className="col-auto">
                <div className="text-14 text-light-1">
                  By proceeding with this booking, I agree to GoTrip Terms of
                  Use and Privacy Policy.
                </div>
              </div>
              {/* End col-12 */}
            </div>
          </div>
          {/* End col-12 */}
        </div>
        {/* End .row */}
      </div>
      {/* End .col-xl-7 */}

      <div className="col-xl-5 col-lg-4 mt-30">
        <div className="booking-sidebar">
          <BookingDetails id={routeId} />
        </div>
      </div>
    </>
  );
};

export default CustomerInfo;
