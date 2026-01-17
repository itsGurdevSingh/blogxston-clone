import topEllipseImg from "/top-ellipse.png";

const MarqueeHeader = () => {
  const marqueeItems = [
    {
      text: "Read article moreni urbano thona goblin",
      href: "/post-format-no-sidebar-02",
    },
    {
      text: "Gain your knowledge faster and moreathi",
      href: "/post-format-no-sidebar-02",
    },
    {
      text: "Make your brain sharper grow better option",
      href: "/post-format-no-sidebar-02",
    },
  ];

  const renderMarqueeItems = () => {
    return marqueeItems.map((item, index) => (
      <div
        key={index}
        className="child flex items-center gap-2"
        style={{ transform: "none" }}
      >
        <img src="/star.svg" className="h-4 w-4" alt="star" />
        <a
          href={item.href}
          className="font-prompt text-xl font-semibold text-gray-600 transition-colors duration-500 hover:text-gray-800"
        >
          {item.text}
        </a>
      </div>
    ));
  };

  return (
    <div className="marquee-text flex h-fit items-center overflow-hidden py-4 md:mx-12 md:py-8">
      <div className="hidden h-fit w-fit flex-shrink-0 border-y bg-black px-4 py-2 font-prompt text-2xl font-semibold text-white md:block">
        Breaking News
      </div>
      <div
        className="marquee-container relative flex h-18 overflow-hidden border-y bg-white bg-cover bg-center py-2.5"
        style={{ backgroundImage: `url(${topEllipseImg})` }}
      >
        <div className="marquee mr-8 flex items-center animate-marquee space-x-8 whitespace-nowrap">
          {renderMarqueeItems()}
        </div>
        <div className="marquee mr-8 flex items-center animate-marquee space-x-8 whitespace-nowrap">
          {renderMarqueeItems()}
        </div>
        <div
          className="marquee mr-4 flex items-center animate-marquee space-x-8 whitespace-nowrap"
          aria-hidden="true"
        >
          {renderMarqueeItems()}
        </div>
      </div>
    </div>
  );
};

export default MarqueeHeader;
