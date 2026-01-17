import DateBadge from "./DateBadge";

const ArticleImageWithBadge = ({ image, day, month }) => {
  return (
    <div className="w-full lg:col-span-5 relative">
      <img src={image} className="w-full h-full object-cover" alt="Article" />
      <DateBadge day={day} month={month} />
    </div>
  );
};

export default ArticleImageWithBadge;
