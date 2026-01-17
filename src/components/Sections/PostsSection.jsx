import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import headLogo from "/sec-title-vector.svg";
import selectPost1 from "/select-post1.jpg";
import selectPost2 from "/select-post2.jpg";
import selectPost3 from "/select-post3.jpg";
import selectPost4 from "/select-post4.jpg";
import selectPost5 from "/select-post5.jpg";
import selectPost6 from "/select-post6.jpg";
import selectPost7 from "/select-post7.jpg";
import SelectPostCard from "../Cards/SelectPostCard";

const PostsSection = () => {
  const posts = [
    {
      image: selectPost1,
      author: "Rison donec",
      category: "Lifestyle",
      title: "Our Begin To Beingonl What You Will Be.",
      readTime: "2 Day Read",
    },
    {
      image: selectPost2,
      author: "Rison donec",
      category: "Travel",
      title: "Mauris placerat dolor nec seman porttitor suscipit.",
      readTime: "2 Day Read",
    },
    {
      image: selectPost3,
      author: "Rison donec",
      category: "Travel",
      title: "per inceptos himenaeos malesua Vivamus portaip",
      readTime: "2 Day Read",
    },
    {
      image: selectPost4,
      author: "Rison donec",
      category: "Fashion",
      title: "Integer convallis nisagoi necerat fermentum vehicula.",
      readTime: "2 Day Read",
    },
    {
      image: selectPost5,
      author: "Rison donec",
      category: "Fashion",
      title: "Integer convallis nisagoi necerat fermentum vehicula.",
      readTime: "2 Day Read",
    },
    {
      image: selectPost6,
      author: "Rison donec",
      category: "Fashion",
      title: "Integer convallis nisagoi necerat fermentum vehicula.",
      readTime: "2 Day Read",
    },
    {
      image: selectPost7,
      author: "Rison donec",
      category: "Fashion",
      title: "Integer convallis nisagoi necerat fermentum vehicula.",
      readTime: "2 Day Read",
    },
  ];

  return (
    <div className="mt-8 px-4 py-8 md:mt-12 md:px-8">
      {/* Heading with Navigation Buttons */}
      <div className="mb-6 flex items-center justify-between md:mb-8">
        <div className="flex items-center gap-4">
          <img src={headLogo} alt="Section title vector" />
          <h2 className="font-prompt text-2xl font-medium md:text-4xl">
            Selected Posts
          </h2>
        </div>

        {/* Navigation Buttons */}
        <div className="hidden gap-2 md:flex">
          <button className="swiper-button-prev-custom flex h-12 w-12 items-center justify-center rounded-full border-2 border-linear-two bg-white text-linear-two transition-all duration-300 hover:bg-linear-two hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 19.5L8.25 12l7.5-7.5"
              />
            </svg>
          </button>
          <button className="swiper-button-next-custom flex h-12 w-12 items-center justify-center rounded-full border-2 border-linear-two bg-white text-linear-two transition-all duration-300 hover:bg-linear-two hover:text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Swiper Slider */}
      <div className="relative">
        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
          className="select-posts-swiper"
        >
          {posts.map((post, index) => (
            <SwiperSlide key={index}>
              <SelectPostCard
                image={post.image}
                author={post.author}
                category={post.category}
                title={post.title}
                readTime={post.readTime}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default PostsSection;
