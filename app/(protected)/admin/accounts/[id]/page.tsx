import Sidebar from "../../common/Sidebar";
import Header from "../../../../../components/header/dashboard-header";
import Footer from "../../common/Footer";
import Link from "next/link";
import { getAccountDetails } from "@/app/api/accounts";
import AdminTable from "./components/AdminTable";
import CompanyTable from "./components/CompanyTable";
import MemberTable from "./components/MemberTable";

const Accounts = async ({ params }: { params: any }) => {
  let details;
  try {
    console.log(params);

    // Ensure that params.id is defined before fetching data
    if (!params) {
      console.log(params);
      throw new Error("Invalid id");
    }

    details = await getAccountDetails(params);
    console.log(details);
  } catch (error) {
    console.error("Error fetching yacht details:", error.message);
  }

  let roleComponent;
  if (details && details.role === "ADMIN") {
    roleComponent = (
      <div className="py-30 px-30 rounded-4 bg-white shadow-3">
        <AdminTable params={details} />
        {/* End tabs */}
      </div>
    );
  } else if (details && details.role === "COMPANY") {
    roleComponent = (
      <div className="py-30 px-30 rounded-4 bg-white shadow-3">
        <CompanyTable params={details} />
        {/* End tabs */}
      </div>
    );
  } else if (details && details.role === "MEMBER") {
    roleComponent = (
      <div className="py-30 px-30 rounded-4 bg-white shadow-3">
        <MemberTable params={details} />
        {/* End tabs */}
      </div>
    );
  }

  return (
    <>
      {/*  */}
      {/* End Page Title */}

      <div className="header-margin"></div>

      <Header />
      {/* End dashboard-header */}

      <div className="dashboard">
        <div className="dashboard__sidebar bg-white scroll-bar-1">
          <Sidebar />
          {/* End sidebar */}
        </div>
        {/* End dashboard__sidebar */}

        <div className="dashboard__main">
          <div className="dashboard__content bg-light-2">
            <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
              <div className="col-auto">
                <h1 className="text-30 lh-14 fw-600"> Account Details</h1>
                <div className="text-15 text-light-1">
                  Lorem ipsum dolor sit amet, consectetur.
                </div>
              </div>
              {/* End .col-auto */}
            </div>
            {/* End .row */}

            {roleComponent}

            <Footer />
          </div>
          {/* End .dashboard__content */}
        </div>
        {/* End dashbaord content */}
      </div>
      {/* End dashbaord content */}
    </>
  );
};

export default Accounts;
