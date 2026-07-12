import { Star } from "lucide-react";
import yoimiya from "/yoimiya.jpeg";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const FriendCard = ({ className }) => {
  const rating = [1, 2, 3, 4, 5];
  return (
    <Card
      className={`h-60 w-45 bg-[#303438] rounded-sm flex flex-col gap-2 justify-start items-center p-2 ${className}`}
    >
      <div
        className={`h-25 w-25 rounded-full overflow-clip flex justify-start items-start`}
      >
        <img src={yoimiya} alt="user_profile_image" />
      </div>
      <CardContent className="w-full flex flex-col gap-1 text-center font-bold text-[14px] tracking-wider">
        <div className="flex justify-center items-center gap-1 w-full">
          {rating.map((_) => (
            <Star className={`w-4 fill-primary outline-none stroke-none`} />
          ))}
        </div>
        <CardTitle className={"text-primary p-0 text-[12px]"}>
          {"Naganohara Yoimiya"}
        </CardTitle>
      </CardContent>
      <CardDescription className="w-full h-[20%] overflow-hidden text-[8px] relative">
        <p className="text-justify px-2">
          {`Singing dancing travelling photography gym fitness yoga
          meditation cooking baking cafe hopping watching movies watching
          anime watching series listening to music guitar piano karaoke
          painting drawing digital art fashion`}
        </p>
        <div className="absolute bottom-0 left-0 h-5 w-full bg-linear-to-b from-[#fff0] to-[#303438] z-10"></div>
      </CardDescription>
      <CardFooter className={"bg-transparent p-0 border-0"}>
        <Button variant={"link"} className={"uppercase tracking-wider"}>
          Appoint
        </Button>
      </CardFooter>
    </Card>
  );
};

export default FriendCard;
