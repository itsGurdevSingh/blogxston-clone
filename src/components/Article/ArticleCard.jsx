import ArticleMetadata from "./ArticleMetadata";

const ArticleCard = ({ image, author, date, category, title, description }) => {
  return (
    <div className="w-full lg:w-1/3 p-4 flex flex-col gap-4 rounded-lg border bg-white">
      <img src={image} alt="article image" className="w-full object-cover" />

      <div className="px-2 md:px-4 flex flex-col gap-4 py-4">
        <ArticleMetadata
          author={author}
          date={date}
          category={category}
          showCategory={true}
        />

        <p className="cursor-pointer font-prompt text-lg font-semibold text-text-primary transition-colors duration-500 hover:text-linear-two md:text-2xl">
          {title}
        </p>

        <p className="font-inter text-sm md:text-base text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ArticleCard;
