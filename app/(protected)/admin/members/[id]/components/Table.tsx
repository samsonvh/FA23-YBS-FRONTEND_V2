"use client";
import Pagination from "../../../common/Pagination";
import { useState, useEffect } from "react";
import Link from "next/link";
const Table = ({ params }: { params: any }) => {
  const formatDate = (dateString: string | undefined | null): string => {
    if (!dateString) return "";

    const options: Intl.DateTimeFormatOptions = {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-GB", options);
  };
  return (
    <>
      <div className="overflow-scroll scroll-bar-1">
        <table className="table-4 -border-bottom col-12">
          <thead className="bg-light-2">
            <tr>
              <th>Avatar</th>
              <th>UserName</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Date Of Birth</th>
              <th>Phone Number</th>
              <th>Nationality</th>
              <th>Gender</th>
              <th>Identity Number</th>
              <th>Membership Start Date</th>
              <th>Membership Start Date</th>
              <th>Member Since Date</th>
              <th>Last Modified Date</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* End theade */}
          <tbody>
            <tr>
              <td>
                {/* <Image
                  width={50}
                  height={50}
                  src={params.logo}
                  alt="image"
                  className="size-50 rounded-22 object-cover"
                /> */}
              </td>
              <td className="text-blue-1 fw-500">{params.username}</td>
              <td>{params.fullName}</td>

              <td>{params.email}</td>
              <td>{params.address}</td>
              <td>{params.dateOfBirth}</td>
              <td>{params.phoneNumber}</td>
              <td>{params.nationality}</td>
              <td>{params.gender}</td>
              <td>{params.identityNumber}</td>
              <td>{formatDate(params.membershipStartDate)}</td>
              <td>{formatDate(params.membershipExpiredDate)}</td>
              <td>{formatDate(params.memberSinceDate)}</td>
              <td>{params.lastModifiedDate}</td>
              <td>{params.role}</td>

              <td>
                <span
                  className={`rounded-100 py-4 px-10 text-center text-14 fw-500 bg-yellow-4 ${
                    params.status === "ACTIVE"
                      ? "text-blue-1"
                      : params.status === "INACTIVE"
                      ? "text-yellow-3"
                      : params.status === "BANNED"
                      ? "text-red-2"
                      : ""
                  }`}
                >
                  {params.status}
                </span>
              </td>

              <td>
                <div className="row x-gap-10 y-gap-10 paramss-center">
                  <div className="col-auto">
                    <button className="flex-center bg-light-2 rounded-4 size-35">
                      <i className="icon-edit text-16 text-light-1" />
                    </button>
                  </div>
                  <div className="col-auto">
                    <button className="flex-center bg-light-2 rounded-4 size-35">
                      <i className="icon-trash-2 text-16 text-light-1" />
                    </button>
                  </div>
                </div>
              </td>
            </tr>
            {/* End tr */}
          </tbody>
          {/* End tbody */}
        </table>
      </div>
    </>
  );
};

export default Table;
