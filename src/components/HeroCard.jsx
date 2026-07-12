import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, MoveRight, Play } from "lucide-react";

const HeroCard = () => {
  return (
    <figure className="bg-transparent h-[60dvh] max-lg:h-[50dvh] w-full max-lg:w-[90%] max-lg:mt-15 px-15 rounded-sm flex flex-col justify-start gap-5">
      <Badge className="bg-[#bda1ff3a] text-[#9 669ff]">
        <Heart />
        Companionship When You Need It
      </Badge>
      <div className="flex flex-col justify-start text-[40px] font-bold leading-12">
        <h1>Rent a Friend,</h1>
        <h1 className="bg-linear-to-r from-violet-700 to-green-500 bg-clip-text text-transparent">
          Share Good Times
        </h1> 
      </div>
      <div className="text-[12px] text-[#656565]">
        <p>Whether it's exploring your city, attending an event,</p>
        <p>or just having someone to talk to -</p>
        <p>find the perfect companion for any occasion</p>
      </div>
      <div className=" flex justify-center items-center gap-4 w-fit">
        <Button className="text-[12px] px-4 py-5">
          Find a Friend
          <MoveRight />
        </Button>
        <Button variant="outline" className="text-[12px] px-4 py-5">
          How It Works
          <Play />
        </Button>
      </div>
    </figure>
  );
};

export default HeroCard;
