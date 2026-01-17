import DesktopHeader from "./components/Header/DesktopHeader";
import MobileHeader from "./components/Header/MobileHeader";
import MarqueeHeader from "./components/Header/MarqueeHeader";
import HeroSection from "./components/Sections/HeroSection";
import PostsSection from "./components/Sections/PostsSection";

const App = () => {
  return (
    <div className="flex flex-col md:flex md:flex-row">
      <DesktopHeader />
      <div className="overflow-hidden bg-bg-three">
        <MarqueeHeader />
        <MobileHeader />
        <HeroSection />
        <PostsSection />
      </div>
    </div>
  );
};

export default App;
