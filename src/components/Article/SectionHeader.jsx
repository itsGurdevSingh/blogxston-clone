const SectionHeader = ({ icon, title }) => {
  return (
    <div className="mb-6 flex items-center justify-between md:mb-8">
      <div className="flex items-center gap-4">
        <img src={icon} alt="Section title vector" />
        <h2 className="font-prompt text-2xl font-medium md:text-4xl">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default SectionHeader;
