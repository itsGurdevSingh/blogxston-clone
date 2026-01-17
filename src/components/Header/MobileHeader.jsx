import headerLogo from "/header-logo.svg";

const MobileHeader = () => {
  return (
    <header className="my-2 flex w-screen flex-col justify-between border-y bg-gray-50 py-2 md:hidden">
      <img className="w-14 px-2" src={headerLogo} alt="Logo" />
    </header>
  );
};

export default MobileHeader;
