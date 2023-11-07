"use client";
import Pagination from "../../../common/Pagination";
import { useState, useEffect } from "react";
import Link from "next/link";
const MemberTable = ({ params }: { params: any }) => {
  return (
    <>
      <div className="overflow-scroll scroll-bar-1">
        <table className="table-4 -border-bottom col-12">
          <thead className="bg-light-2">
            <tr>
              <th>UserName</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* End theade */}
          <tbody>
            <tr>
              <td className="text-blue-1 fw-500">{params.username}</td>

              <td>{params.email}</td>

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
                    <Link
                      href={`/admin/accounts/${params.id}`}
                      className="flex-center bg-light-2 rounded-4 size-35"
                    >
                      <i className="icon-eye text-16 text-light-1" />
                    </Link>
                  </div>
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

export default MemberTable;
