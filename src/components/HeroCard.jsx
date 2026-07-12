import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MoveRight, Play } from "lucide-react";

const HeroCard = () => {
  return (
    <article className="bg-transparent h-[60dvh] max-lg:h-[50dvh] w-1/2 px-15 rounded-sm flex flex-col justify-start gap-5">
      <Badge className="bg-[#bda1ff3a] text-[#9669ff]">
        <Heart className="fill-[#9669ff]"/>
        Companionship When You Need It
      </Badge>
      <div className="flex flex-col justify-start text-[40px] font-bold leading-12">
        <h1>Rent a Friend,</h1>
        <h1 className="bg-linear-to-r from-violet-700 via-blue-500 via-50% to-green-500 bg-clip-text text-transparent w-fit">
          Share Good Times
        </h1>
      </div>
      <div className="text-[12px] text-[#656565]">
        <p>Whether it's exploring your city, attending an event,</p>
        <p>or just having someone to talk to -</p>
        <p>find the perfect companion for any occasion</p>
      </div>
      <div className=" flex justify-center items-center gap-4 w-fit">
        <Button className="text-[12px] px-4 py-5 hover:bg-[#9669ff]">
          Find a Friend
          <MoveRight />
        </Button>
        <Button variant="outline" className="text-[12px] px-4 py-5 hover:bg-white">
          <Play />
          How It Works
        </Button>
      </div>
    </article>
  );
};

export default HeroCard;
