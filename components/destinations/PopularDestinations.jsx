"use client";

import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Scrollbar } from "swiper";
import { destinations2 } from "../../data/desinations";
import { getAllRoutes } from "@/app/api/routes";
import { useEffect, useState } from "react";
const PopularDestinations = () => {
  const [tourList, setTourList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllRoutes();
        setTourList(data.data);
        // setPageCount(data.pageCount);
        // setPageIndex(data.pageIndex);
        // setPageSize(data.pageSize);
        // setTotalItem(data.totalItem);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(tourList);
  }, [tourList]);

  return (
    <>
      <Swiper
        spaceBetween={30}
        className="overflow-visible"
        scrollbar={{
          el: ".js-popular-destination-scrollbar",
          draggable: true,
        }}
        modules={[Scrollbar, Navigation]}
        navigation={{
          nextEl: ".js-destination-next",
          prevEl: ".js-destination-prev",
        }}
        breakpoints={{
          500: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 22,
          },
          1024: {
            slidesPerView: 3,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {tourList.map((item) => (
          <SwiperSlide key={item.id}>
            <Link
              href={`/tours/${item.id}`}
              className="citiesCard -type-1 d-block rounded-4"
              key={item.id}
            >
              <div className="citiesCard__image ratio ratio-3:4">
                <div>
                  <Image
                    width={300}
                    height={400}
                    className="tw- js-lazy"
                    src={item.imageURL}
                    alt="image"
                  />
                </div>
              </div>
              <div className="citiesCard__content d-flex flex-column justify-between text-center pt-30 pb-20 px-20">
                <div className="citiesCard__bg" />
                <div className="citiesCard__top">
                  <div className="text-14 text-white">
                    From: {item.beginning}
                  </div>
                </div>
                <div className="citiesCard__bottom">
                  <h4 className="text-26 md:text-20 lh-13 text-white mb-20">
                    {item.destination}
                  </h4>
                  <Link href={`/tours/${item.id}`}>
                    <button className="button col-12 h-60 -blue-1 bg-white text-dark-1">
                      Discover
                    </button>
                  </Link>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <div>
        <button className="section-slider-nav  -prev flex-center button -blue-1 bg-white shadow-1 size-40 rounded-full sm:d-none js-destination-prev">
          <i className="icon icon-chevron-left text-12" />
        </button>
        <button className="section-slider-nav -next flex-center button -blue-1 bg-white shadow-1 size-40 rounded-full sm:d-none js-destination-next">
          <i className="icon icon-chevron-right text-12" />
        </button>
        <div className="slider-scrollbar bg-light-2 mt-40  js-popular-destination-scrollbar" />
      </div>
    </>
  );
};

export default PopularDestinations;
