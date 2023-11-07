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
              <th>Name</th>
              <th>Price</th>
              <th>Point</th>
              <th>Description</th>
              <th>Effective Duration</th>
              <th>Creation Date</th>
              <th>Last Modified Date </th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* End theade */}
          <tbody>
            <tr>
              <td className="text-blue-1 fw-500">{params.name}</td>
              <td>
                {params.price} {params.moneyUnit}
              </td>
              <td>{params.point}</td>
              <td>{params.description}</td>
              <td>{params.effectiveDuration} days</td>
              <td>{formatDate(params.creationDate)}</td>
              <td>{formatDate(params.lastModifiedDate)}</td>

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
