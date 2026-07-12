import { ShieldCheck, Star, CalendarDays, Lock } from "lucide-react";

const features = [
  {
    title: "Safe & Secure",
    description:
      "Verified profiles and secure messaging to ensure your safety.",
    icon: ShieldCheck,
    iconColor: "text-violet-600",
    bg: "bg-violet-100",
  },
  {
    title: "Trusted Community",
    description: "Ratings and reviews help you choose the right companion.",
    icon: Star,
    iconColor: "text-emerald-500",
    bg: "bg-emerald-100",
  },
  {
    title: "Flexible & Easy",
    description: "Book by the hour or day, choose what works best for you.",
    icon: CalendarDays,
    iconColor: "text-pink-500",
    bg: "bg-pink-100",
  },
  {
    title: "Private & Respectful",
    description:
      "Your privacy is our priority. Discreet and respectful interactions.",
    icon: Lock,
    iconColor: "text-yellow-500",
    bg: "bg-yellow-100",
  },
];

export default function HeroFooter() {
  return (
    <div className="w-[90%] rounded-3xl bg-white/80 p-4 shadow-sm backdrop-blur-sm">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => {
          const Icon = feature.icon;

          return (
            <div
              key={index}
              className={`flex items-start gap-4 ${
                index !== features.length - 1
                  ? "lg:border-r lg:border-gray-200 lg:pr-8"
                  : ""
              }`}
            >
              <div
                className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full ${feature.bg}`}
              >
                <Icon className={`h-8 w-8 ${feature.iconColor}`} />
              </div>

              <div>
                <h3 className="text-[12px] font-semibold text-slate-900">
                  {feature.title}
                </h3>

                <p className="text-[10px] mt-2 text-sm leading-6 text-slate-500">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
