import { DataContext } from "../data";
import { useContext, useEffect, useState } from "react";
import HeroCard from "./heroCard";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Keyboard,
  EffectCoverflow,
  Autoplay,
} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function HeroCardsContainer() {
  let [
    data,
    isError,
    isLoading,
    isFetching,
    error,
    refetch,
    linkInfo,
    setLinkInfo,
  ] = useContext(DataContext);

  let [slidesPerView, setSlidesPerView] = useState(3);

  useEffect(() => {
    let windowWidth = window.innerWidth;
    if (windowWidth < 600) {
      return setSlidesPerView(1);
    } else if (windowWidth >= 600 && windowWidth < 1024) {
      return setSlidesPerView(2);
    }
  }, []);

  return (
    <div className="min-h-screen w-[100vw] flex justify-center items-center bg-black">
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        navigation={true}
        pagination={{ dynamicBullets: true }}
        keyboard={{ enabled: true }}
        autoplay={{
          delay: 2200,
          disableOnInteraction: false,
        }}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 60,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        grabCursor={true}
        modules={[Navigation, Pagination, Keyboard, EffectCoverflow, Autoplay]}
        className="flex justify-center items-center"
      >
        {data?.drinks?.map((drink) => (
          <SwiperSlide className="mb-8" key={drink.idDrink}>
            <HeroCard
              image={drink.strDrinkThumb}
              title={drink.strDrink}
              key={drink.idDrink}
              cardId={drink.idDrink}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroCardsContainer;
