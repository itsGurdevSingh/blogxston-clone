import ArticleMetadata from "./ArticleMetadata";

const ArticleListItem = ({ author, category, title }) => {
  return (
    <div className="flex h-24 flex-col gap-2 border-b border-gray-400/80 px-4 py-2">
      <ArticleMetadata
        author={author}
        category={category}
        showCategory={true}
      />
      <p className="cursor-pointer font-prompt text-lg font-semibold leading-tight text-text-primary transition-colors duration-500 hover:text-linear-two lg:text-xl">
        {title}
      </p>
    </div>
  );
};

export default ArticleListItem;
