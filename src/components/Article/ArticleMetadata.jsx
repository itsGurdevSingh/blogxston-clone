const ArticleMetadata = ({ author, category, date, showCategory = true }) => {
  return (
    <li className="flex items-center font-inter text-xs font-medium text-gray-500 justify-start gap-2 md:gap-4 md:text-sm">
      {author && (
        <>
          <ul className="cursor-pointer hover:text-linear-two">
            By <span className="underline">{author}</span>
          </ul>
          <ul className="h-1.5 w-1.5 rounded-full bg-linear-two"></ul>
        </>
      )}
      {date && (
        <>
          <ul className="cursor-pointer hover:text-linear-two">{date}</ul>
          <ul className="h-1.5 w-1.5 rounded-full bg-linear-two"></ul>
        </>
      )}
      {showCategory && category && (
        <ul className="cursor-pointer">{category}</ul>
      )}
    </li>
  );
};

export default ArticleMetadata;
