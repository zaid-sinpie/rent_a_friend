import { Button } from "@/components/ui/button";

const HeroCard = () => {
  return (
    <figure className="bg-[#303438] h-[80dvh] max-lg:h-[50dvh] w-[50%] max-lg:w-[90%] max-lg:mt-15 rounded-sm flex justify-end items-end">
      <div className="w-full flex justify-between items-center p-2">
        <Button variant={"link"}>Become a Friend</Button>
        <Button className="rounded-none bg-[#fb651430] text-white border-0 border-b-2 border-primary hover:bg-[#9b400f30] hover:text-[#9b9b9b]">
          Rent a Friend
        </Button>
      </div>
    </figure>
  );
};

export default HeroCard;
