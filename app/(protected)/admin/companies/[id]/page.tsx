import Sidebar from "../../common/Sidebar";
import Header from "../../../../../components/header/dashboard-header";
import Footer from "../../common/Footer";
import Link from "next/link";
import { getCompanyDetails } from "@/app/api/companies";
import Table from "./components/Table";
import BackButton from "@/components/button/BackButton";

const Company = async ({ params }: { params: any }) => {
  let details;
  try {
    if (!params) {
      console.log(params);
      throw new Error("Invalid id");
    }

    details = await getCompanyDetails(params);
    console.log(details);
  } catch (error) {
    console.error("Error fetching yacht details:", error.message);
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
                <h1 className="text-30 lh-14 fw-600"> Company Details</h1>
                <div className="text-15 text-light-1">
                  Lorem ipsum dolor sit amet, consectetur.
                </div>
              </div>
              {/* End .col-auto */}
            </div>
            {/* End .row */}

            <Table params={details} />
            <div className="d-flex py-20 flex-row-reverse">
              <BackButton
                className={"button h-50 px-24 -blue-1 bg-blue-1-05 text-blue-1"}
              >
                Go Back
              </BackButton>
            </div>
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

export default Company;
