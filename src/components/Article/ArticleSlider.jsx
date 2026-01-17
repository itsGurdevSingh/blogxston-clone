import { useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArticleListItem from "./ArticleListItem";

const ArticleSlider = ({ articles }) => {
  const [linePosition, setLinePosition] = useState(0);
  const [enableTransition, setEnableTransition] = useState(true);
  const sliderRef = useRef(null);

  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    arrows: false,
    pauseOnHover: true,
    swipeToSlide: true,
    draggable: true,
    beforeChange: (oldIndex, newIndex) => {
      // Disable transition and instantly jump to second item position
      setEnableTransition(false);
      setLinePosition(96);

      // After a brief moment, enable transition and animate to top
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
          setLinePosition(0);
        });
      });
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <div className="h-72 w-full overflow-hidden lg:col-span-4 lg:h-full lg:border-l-2 lg:border-gray-400/80 lg:px-4 relative">
      {/* Animated red line indicator */}
      <div
        className={`absolute left-0 w-1 bg-red-600 h-[4.5rem] mt-2 rounded-full hidden lg:block z-10 ${
          enableTransition ? "transition-all duration-500 ease-in-out" : ""
        }`}
        style={{
          top: `${linePosition}px`,
        }}
      ></div>
      <Slider ref={sliderRef} {...sliderSettings}>
        {articles.map((article, index) => (
          <div key={index}>
            <ArticleListItem
              author={article.author}
              category={article.category}
              title={article.title}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ArticleSlider;
