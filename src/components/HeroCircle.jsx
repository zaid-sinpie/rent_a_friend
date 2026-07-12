import { Card } from "@/components/ui/card";
import { Heart, Coffee, MapPin, Ticket, Camera } from "lucide-react";

const cards = [
  {
    title: "Explore Together",
    icon: MapPin,
    bg: "bg-green-100",
    iconColor: "text-green-600",
    position: "top-0 left-1/2 -translate-x-1/2",
  },
  {
    title: "Coffee & Conversations",
    icon: Coffee,
    bg: "bg-violet-100",
    iconColor: "text-violet-600",
    position: "left-8 top-1/2 -translate-y-1/2",
  },
  {
    title: "Events & Activities",
    icon: Ticket,
    bg: "bg-pink-100",
    iconColor: "text-pink-500",
    position: "right-8 top-1/2 -translate-y-1/2",
  },
  {
    title: "Travel Buddies",
    icon: Camera,
    bg: "bg-yellow-100",
    iconColor: "text-yellow-500",
    position: "bottom-0 left-1/2 -translate-x-1/2",
  },
];

export default function HeroCards() {
  return (
    <div className="relative h-125 w-1/2 bg-[url('/heroShape.png')] bg-contain bg-center bg-no-repeat"></div>
  );
}
