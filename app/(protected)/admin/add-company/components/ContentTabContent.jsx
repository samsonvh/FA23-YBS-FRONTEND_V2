import HotelContent from "./content/HotelContent";
import HotelPolicy from "./content/HotelPolicy";
import BannerUploader from "./content/BannerUploader";
import FeaturedUploader from "./content/FeaturedUploader";
import GalleryUploader from "./content/GalleryUploader";
import BackButton from "@/components/button/BackButton";

const ContentTabContent = () => {
  return (
    <>
      <div className="col-xl-10">
        <HotelContent />
        {/* End HotelContent */}

        <div className="mt-30">
          <div className="fw-500">Company Logo</div>
          <BannerUploader />
        </div>
        {/* End BannerUploader */}

        <div className="col-12 d-flex justify-content-end pt-30">
          <div className="row x-gap-10 y-gap-10">
            <div className="col-auto">
              <button className="button h-50 px-24 -dark-1 bg-blue-1 text-white">
                Save Changes <div className="icon-arrow-top-right ml-15" />
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
    </>
  );
};

export default ContentTabContent;
