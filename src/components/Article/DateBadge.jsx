const DateBadge = ({ day, month }) => {
  return (
    <span className="bg-primary-four p-2 font-inter text-white text-lg md:text-xl flex flex-col items-center justify-center font-extrabold w-20 md:w-24 aspect-square absolute top-0 right-0">
      <p>{day}</p>
      <p>{month}</p>
    </span>
  );
};

export default DateBadge;
