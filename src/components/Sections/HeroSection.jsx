import HeroCard from "../Cards/HeroCard";
import SideCard from "../Cards/SideCard";
import ListCard from "../Cards/ListCard";
import secOneFirstImg from "/banner4-1.jpg";
import secOneSecImg from "/banner4-2.jpg";
import secOneThirdImg from "/banner4-3.jpg";
import secOneListFirstImg from "/banner4-list1.jpg";
import secOneListSecImg from "/banner4-list2.jpg";
import secOneListThirdImg from "/banner4-list3.jpg";
import secOneListFourthImg from "/banner4-list4.jpg";
import secOneListFifthImg from "/banner4-list5.jpg";
import secOneListSixthImg from "/banner4-list6.jpg";

const HeroSection = () => {
  const listItems = [
    {
      image: secOneListFirstImg,
      title: "Gravida Orci Sed Jaritob Laorei Tellus Furthure Gone.",
      date: "Nov 08, 2022",
      comments: "390",
    },
    {
      image: secOneListSecImg,
      title: "Vestibulum Rhoncus Inurna Oni Consequat Euismod.",
      date: "Nov 10, 2022",
      comments: "485",
    },
    {
      image: secOneListThirdImg,
      title: "Pulvinar Facilisis Sed Dapibusot Turpis Vitae Felis.",
      date: "Nov 30, 2022",
      comments: "536",
    },
    {
      image: secOneListFourthImg,
      title: "Gravida Orci Sed Jaritob Laorei Tellus Furthure Gone.",
      date: "Dec 06, 2022",
      comments: "622",
    },
    {
      image: secOneListFifthImg,
      title: "Nullam Dictum Tellus Velsodale Rutrum Porta.",
      date: "Dec 10, 2022",
      comments: "741",
    },
    {
      image: secOneListSixthImg,
      title: "Fermentum Nullam Dictum Onel Tellus Vel Rutrum.",
      date: "Dec 15, 2022",
      comments: "852",
    },
  ];

  return (
    <div className="gap-4 px-6 lg:flex md:px-12">
      <div className="flex w-full flex-col gap-8 py-10 md:flex-row md:gap-4 md:py-4 lg:w-2/3">
        {/* Hero Card */}
        <HeroCard
          image={secOneFirstImg}
          author="Rison donec"
          date="Nov 10, 2022"
          views="1.5k"
          title="Our Begin Now To Being What You Will Beingori fores goat this is our."
        />

        {/* Side Cards */}
        <div className="flex w-full flex-col gap-8 md:w-2/5 md:py-0">
          <SideCard
            image={secOneSecImg}
            category="Creative"
            date="31 December, 2022"
            title="hendrerit condimentum orchobt id porta lobortis nibh."
          />
          <SideCard
            image={secOneThirdImg}
            category="Creative"
            date="31 December, 2022"
            title="fermentum Nullam dictum tellusi vel rutrum porta Mauris."
          />
        </div>
      </div>

      {/* List Cards */}
      <div className="flex w-full flex-col lg:w-1/3 lg:border-l lg:px-6 lg:py-2">
        {listItems.map((item, index) => (
          <ListCard
            key={index}
            image={item.image}
            title={item.title}
            date={item.date}
            comments={item.comments}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;
