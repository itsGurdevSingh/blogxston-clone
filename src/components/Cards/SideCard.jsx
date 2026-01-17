const SideCard = ({ image, category, date, title }) => {
  return (
    <div className="bg-white">
      <div>
        <img src={image} alt={title} className="w-full object-cover" />
      </div>
      <div className="border px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="w-fit border px-4 py-1 text-sm font-medium uppercase text-gray-600">
            {category}
          </div>
          <p className="text-xs text-gray-500">{date}</p>
        </div>
        {/* Details */}
        <p className="cursor-pointer py-2 font-prompt text-xl font-semibold text-text-primary transition-colors duration-500 hover:text-linear-two">
          {title}
        </p>
      </div>
    </div>
  );
};

export default SideCard;
