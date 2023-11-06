"use client";
import Pagination from "../../common/Pagination";
import { getAllYachts } from "@/app/api/yachts";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
const BookingTable = () => {
  const [companyList, setCompanyList] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllYachts();
        setCompanyList(data.data);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <div className="overflow-scroll scroll-bar-1">
        <table className="table-4 -border-bottom col-12">
          <thead className="bg-light-2">
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Maximum Guest Limit</th>
              <th>Total Crew</th>
              <th>Cabin</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {/* End theade */}
          {companyList.map((item) => (
            <tbody key={item.id}>
              <tr>
                <td>
                  <Image
                    width={100}
                    height={50}
                    src={item.imageURL[0]}
                    alt="image"
                    className="size-100 object-cover"
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.maximumGuestLimit}</td>
                <td>{item.totalCrew}</td>
                <td>{item.cabin}</td>

                <td>
                  <span
                    className={`rounded-100 py-4 px-10 text-center text-14 fw-500 bg-yellow-4 ${
                      item.status === "ACTIVE"
                        ? "text-blue-1"
                        : item.status === "INACTIVE"
                        ? "text-yellow-3"
                        : item.status === "BANNED"
                        ? "text-red-2"
                        : ""
                    }`}
                  >
                    {item.status}
                  </span>
                </td>

                <td>
                  <div className="row x-gap-10 y-gap-10 items-center">
                    <div className="col-auto">
                      <Link
                        href={`/admin/companies/${item.id}`}
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
          ))}
          {/* End tbody */}
        </table>
      </div>
      <Pagination />
    </>
  );
};

export default BookingTable;
