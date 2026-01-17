import headerLogo from "/header-logo.svg";

const DesktopHeader = () => {
  return (
    <header className="hidden h-screen w-48 flex-col items-center border-r py-4 md:flex">
      <img className="w-14 bg-gray-50 px-2" src={headerLogo} alt="Logo" />
    </header>
  );
};

export default DesktopHeader;
