import SectionHeader from "../Article/SectionHeader";
import ArticleCard from "../Article/ArticleCard";
import ArticleSlider from "../Article/ArticleSlider";
import ArticleImageWithBadge from "../Article/ArticleImageWithBadge";
import headLogo from "/sec-title-vector.svg";
import ArticalImage from "/article4-1.jpg";
import ArticalImage2 from "/article4-2.jpg";

const Article = () => {
  const articles = [
    {
      author: "Ashton Rhett",
      category: "Creative",
      title: "Gravida orci sed jarito laorenoba tellusfur outha.",
    },
    {
      author: "Bentley Carlos",
      category: "Plant",
      title: "ornare varius Nullam sapien risus accumsan quis.",
    },
    {
      author: "Ryker Adriel",
      category: "Photography",
      title: "elitquis metus Nam vitae exsemon Proin fermentum.",
    },
    {
      author: "Graham Kaiden",
      category: "Lifestyle",
      title: "laoreet, exdolor condi mentumani turpis hendrerit sapien.",
    },
    {
      author: "Maxwell Juan",
      category: "Travel",
      title: "porttitor suscipit euelitor Inviverra pellentesqu nisleu.",
    },
    {
      author: "Bentley Carlos",
      category: "Gaming",
      title: "ornare varius Nullam sapien risus accumsan quis.",
    },
    {
      author: "Graham Kaiden",
      category: "Plant",
      title: "laoreet, exdolor condi mentumani turpis hendrerit sapien.",
    },
    {
      author: "Maxwell Juan",
      category: "Fashion",
      title: "porttitor suscipit euelitor Inviverra pellentesqu nisleu.",
    },
    {
      author: "Bentley Carlos",
      category: "Sports",
      title: "ornare varius Nullam sapien risus accumsan quis.",
    },
  ];

  // Duplicate articles to fill the slider height
  const duplicatedArticles = [...articles, ...articles];

  return (
    <div className="flex flex-col gap-4 bg-bg-three px-4 py-8">
      <SectionHeader icon={headLogo} title="Top Articles" />

      <div className="flex flex-col lg:flex-row gap-4">
        <ArticleCard
          image={ArticalImage}
          author="author"
          date="Nov 15,2022"
          category="Creative"
          title="Sed lectus duitotan tristiqu eitati eleifend blandit necol."
          description="Aliquam erat volutpat. Ut scelerisque elementum nisi, anedoi fermentumon odiona gouvikoi tincidunt vel. Proin velit estear elementum sed hendrerit dordin cadovia."
        />

        <div className="flex w-full flex-col gap-4 lg:grid lg:w-2/3 lg:grid-cols-9">
          <ArticleSlider articles={duplicatedArticles} />
          <ArticleImageWithBadge
            image={ArticalImage2}
            day="03"
            month="August"
          />
        </div>
      </div>
    </div>
  );
};

export default Article;
