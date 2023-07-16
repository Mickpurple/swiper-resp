import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function App() {
  const [divPad, setDivPad] = useState(0);

  useEffect(() => {
    const onResize = () => {
      const mainDiv = document.getElementById("mainDiv");
      setDivPad(mainDiv.getBoundingClientRect().x + 20);
    };

    onResize();

    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className="bg-gray-200">
      <div
        id="mainDiv"
        className="container mx-auto px-5 bg-white h-screen flex flex-col justify-center items-center gap-10"
      >
        <div className="flex gap-20">
          <p className="text-5xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <div className="flex gap-5">
            <div className="h-[80px] w-[80px] rounded-full hover:scale-75 transition-transform duration-300 text-white bg-black flex justify-center items-center review-swiper-button-prev">
              {"<"}
            </div>
            <div className="h-[80px] w-[80px] rounded-full hover:scale-75 transition-transform duration-300 text-white bg-black flex justify-center items-center review-swiper-button-next">
              {">"}
            </div>
          </div>
        </div>
        <div className="relative w-screen z-10">
          <div className="w-full">
            {divPad && (
              <Swiper
                modules={[Navigation]}
                navigation={{
                  nextEl: ".review-swiper-button-next",
                  prevEl: ".review-swiper-button-prev",
                }}
                spaceBetween={20}
                grabCursor={true}
                slidesOffsetBefore={divPad}
                slidesOffsetAfter={divPad}
                breakpoints={{
                  500: {
                    slidesPerView: 2,
                  },
                  800: {
                    slidesPerView: 3,
                  },
                  1200: {
                    slidesPerView: 4,
                  },
                }}
              >
                {[1, 2, 3, 4, 5, 6].map((e) => {
                  console.log(e);
                  return (
                    <SwiperSlide key={e}>
                      <div
                        className={`text-white bg-black p-5 w-full pt-[100%] rounded-2xl card-anim${e}`}
                      >
                        <div className="absolute top-10 left-10">
                          NOT RANDOM
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
