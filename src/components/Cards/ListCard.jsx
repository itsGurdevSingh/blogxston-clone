const ListCard = ({ image, title, date, comments }) => {
  return (
    <div className="flex gap-2 border-b py-2 lg:py-4">
      <img
        src={image}
        className="aspect-[16/12] w-48 overflow-hidden object-cover lg:w-56"
        alt={title}
      />
      <div className="flex flex-col justify-between px-2 pb-1 md:pb-2">
        <p className="cursor-pointer pb-2 font-prompt text:sm font-semibold leading-snug text-text-primary transition-colors duration-500 hover:text-linear-two md:text-lg">
          {title}
        </p>
        <li className="flex items-center gap-2 font-inter text-xs font-medium text-gray-500 md:text-sm">
          <ul className="cursor-pointer hover:text-linear-two">{date}</ul>
          <ul className="h-1.5 w-1.5 rounded-full bg-linear-two"></ul>
          <ul className="cursor-pointer">{comments} Comment</ul>
        </li>
      </div>
    </div>
  );
};

export default ListCard;
