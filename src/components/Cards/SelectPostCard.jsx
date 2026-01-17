import fireIcon from "/fire.svg";
import ViewDetailsButton from "../UI/ViewDetailsButton";

const SelectPostCard = ({ image, author, category, title, readTime }) => {
  return (
    <div className="h-full bg-white">
      <img
        src={image}
        className="aspect-[16/12] w-full object-cover"
        alt={title}
      />

      <div className="flex flex-col gap-4 border px-2 py-2">
        <li className="flex items-center gap-2 font-inter text-xs font-medium text-gray-500 md:justify-start md:text-sm">
          <ul className="cursor-pointer hover:text-linear-two">
            By <span className="underline">{author}</span>
          </ul>
          <ul className="h-1.5 w-1.5 rounded-full bg-linear-two"></ul>
          <ul className="cursor-pointer hover:text-linear-two">{category}</ul>
        </li>

        <p className="cursor-pointer font-prompt text-lg font-semibold text-text-primary transition-colors duration-500 hover:text-linear-two md:text-2xl">
          {title}
        </p>

        <div className="flex items-center justify-between gap-2 py-2">
          <ViewDetailsButton />

          {/* Read Time */}
          <div className="flex items-center gap-2">
            <img src={fireIcon} className="w-2.5 pb-1" alt="fire" />
            <span className="font-inter text-sm font-medium text-gray-500">
              {readTime}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectPostCard;
