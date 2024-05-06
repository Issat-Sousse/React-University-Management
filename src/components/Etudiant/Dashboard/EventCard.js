import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import eventData from "./eventData";
function EventCard() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    nextArrow: (
      <div className="cardelem">
        <img
          className="arrow next"
          src={require(`../../../Assets/icons8-vers-l'avant-100.png`)}
        ></img>
      </div>
    ),
    prevArrow: (
      <div className="cardelem">
        <img
          className="arrow pre"
          src={require(`../../../Assets/icons8-vers-l'arriere-100.png`)}
        ></img>
      </div>
    ),
  };

  return (
    <div className="card">
      <div className="w-3/4 m-auto">
        <div>
          <Slider {...settings}>
            {eventData.map((item) => (
              <div
                key={item.id}
                className="bg-white h-[450px] text-black rounded-xl"
              >
                <div className="h-56 bg-indigo-500 flex justify-center items-center rounded-t-xl">
                  <img
                    src={require(`../../../Assets/${item.img}`)}
                    alt=""
                    className="h-44 w-44 rounded-full cardimg"
                  />
                </div>

                <div className="items-div">
                  <p className="text-xl font-semibold name title">
                    {item.name}
                  </p>

                  <img
                    className="calendrier"
                    src={require(`../../../Assets/icons8-calendrier-24.png`)}
                    alt=""
                  />

                  <div className="time-date">
                    <p className="text-center">{item.time}</p>
                    <p className="text-center">{item.date}</p>
                  </div>
                  <div>
                    <img
                      className="imgplace"
                      src={require(`../../../Assets/icons8-géorepérage-50.png`)}
                      alt=""
                    />
                    <p className="text-center place">{item.place}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default EventCard;
