import Image from "next/image";
import { getRouteDetails } from "@/app/api/routes";
import { useState, useEffect } from "react";
const BookingDetails = ({ id }) => {
  const [tour, setTour] = useState("");
  const routeId = { id };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getRouteDetails(routeId);
        setTour(data);
        console.log(tour);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="px-30 py-30 border-light rounded-4">
      <div className="text-20 fw-500 mb-30">Your booking details</div>
      <div className="row x-gap-15 y-gap-20">
        {/* End .col */}
        <div className="col">
          <div className="d-flex x-gap-5 pb-10">
            <i className="icon-star text-yellow-1 text-10" />
            <i className="icon-star text-yellow-1 text-10" />
            <i className="icon-star text-yellow-1 text-10" />
            <i className="icon-star text-yellow-1 text-10" />
            <i className="icon-star text-yellow-1 text-10" />
          </div>
          {/* End ratings */}
          <div className="lh-17 fw-500">hi{tour?.name}</div>
          {/* <div className="text-14 lh-15 mt-5">Westminster Borough, London</div> */}
          <div className="row x-gap-10 y-gap-10 items-center pt-10">
            <div className="col-auto">
              <div className="d-flex items-center">
                <div className="size-30 flex-center bg-blue-1 rounded-4">
                  <div className="text-12 fw-600 text-white">4.8</div>
                </div>
                <div className="text-14 fw-500 ml-10">Exceptional</div>
              </div>
            </div>
            <div className="col-auto">
              <div className="text-14">3,014 reviews</div>
            </div>
          </div>
        </div>
        {/* End .col */}
      </div>
      {/* End .row */}
    </div>
    // End px-30
  );
};

export default BookingDetails;
