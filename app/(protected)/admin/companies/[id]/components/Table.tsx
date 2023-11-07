"use client";
import Pagination from "../../../common/Pagination";
import { useState, useEffect } from "react";
import Link from "next/link";
const Table = ({ params }: { params: any }) => {
  return (
    <>
      <div className="overflow-scroll scroll-bar-1">
        <table className="table-4 -border-bottom col-12">
          <thead className="bg-light-2">
            <tr>
              <th>Logo</th>
              <th>UserName</th>
              <th>Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>HotLine</th>
              <th>Facebook</th>
              <th>Instagram</th>
              <th>LinkedIn</th>
              <th>Contract Start Date</th>
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
              <td>{params.name}</td>
              <td>{params.email}</td>
              <td>{params.address}</td>
              <td>{params.hotLine}</td>
              <td>
                {params?.facebookURL && (
                  <Link
                    className="tw-hover:text-blue-1"
                    href={params?.facebookURL}
                  >
                    {params?.facebookURL}
                  </Link>
                )}
              </td>
              <td>
                {params?.instagramURL && (
                  <Link href={params?.instagramURL}>
                    {params?.instagramURL}
                  </Link>
                )}
              </td>
              <td>
                {params?.linkedInURL && (
                  <Link href={params?.linkedInURL}>{params?.linkedInURL}</Link>
                )}
              </td>
              <td>
                {params.contractStartDate &&
                  new Date(params.contractStartDate).toLocaleDateString(
                    "en-GB"
                  )}
              </td>
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
