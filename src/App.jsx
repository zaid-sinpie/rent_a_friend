import Navbar from "./components/Navbar";
import HeroCard from "./components/HeroCard";
import FriendCard from "./components/FriendCard";

function App() {
  return (
    <section className="w-screen h-screen max-lg:h-auto overflow-auto text-[#FDC3A1] bg-[#262931] flex items-center justify-center gap-10 max-lg:gap-0 max-lg:flex-col max-lg:justify-center max-lg:items-center relative">
      <Navbar />
      <HeroCard />
      <div className="lg:grid lg:grid-cols-2 md:gap-x-4 gap-y-4 justify-items-start max-lg:flex justify-center max-lg:w-full">
        <div className="flex lg:flex-col justify-center items-center md:gap-4 md:pt-10">
          <FriendCard />
          <FriendCard />
        </div>
        <div className="flex lg:flex-col justify-center items-end md:gap-4">
          <FriendCard />
          <FriendCard />
        </div>
      </div>
    </section>
  );
}

export default App;
