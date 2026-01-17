const HeroCard = ({ image, author, date, views, title }) => {
  return (
    <div className="w-full md:w-3/5">
      {/* Image */}
      <div className="aspect-auto w-full overflow-hidden">
        <img
          src={image}
          alt="Hero"
          className="w-full object-cover transition-all duration-500 hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-4 border bg-white px-6 py-4">
        {/* Info */}
        <li className="flex items-center justify-between font-inter text-xs font-medium text-gray-500 md:justify-start md:gap-4 md:text-sm">
          <ul className="cursor-pointer hover:text-linear-two">
            By <span className="underline">{author}</span>
          </ul>
          <ul className="h-1.5 w-1.5 rounded-full bg-linear-two"></ul>
          <ul className="cursor-pointer hover:text-linear-two">{date}</ul>
          <ul className="h-1.5 w-1.5 rounded-full bg-linear-two"></ul>
          <ul className="cursor-pointer">{views} View</ul>
        </li>
        {/* Details */}
        <p className="cursor-pointer font-prompt text-lg font-semibold text-text-primary transition-colors duration-500 hover:text-linear-two md:text-2xl">
          {title}
        </p>
        {/* Buttons / Logo */}
        <div className="flex flex-col items-start justify-between gap-2 py-2 md:flex-row md:items-center">
          {/* Button */}
          <div className="flex cursor-pointer items-center gap-2">
            <div className="min-h-6 text-lg font-medium text-linear-two underline">
              View Details
            </div>
            <div className="h-6 w-6 rounded-full border-[2px] border-linear-two"></div>
          </div>
          {/* Logos */}
          <li className="flex items-center gap-4 font-inter text-lg font-medium text-gray-500">
            <ul>fb</ul>
            <ul className="h-1.5 w-1.5 rounded-full bg-gray-400"></ul>
            <ul>tw</ul>
            <ul className="h-1.5 w-1.5 rounded-full bg-gray-400"></ul>
            <ul>pn</ul>
            <ul className="h-1.5 w-1.5 rounded-full bg-gray-400"></ul>
            <ul>in</ul>
          </li>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
