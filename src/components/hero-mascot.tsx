"use client";

import { Mascot } from "page-mascot";
import { Heart, Sparkles } from "lucide-react";

export default function HeroMascot() {
  return (
    <div className="kitty-cameo">
      <div className="kitty-cameo-art">
        <Heart className="kitty-heart" size={15} aria-hidden="true" />
        <Sparkles className="kitty-sparkles" size={20} aria-hidden="true" />
        <Mascot
          directions="/mascots/hello-kitty-directions.webp"
          reactions="/mascots/hello-kitty-reactions.webp"
          size={156}
          label="Hello Kitty. Click or press Enter for a little love."
          className="rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4 focus-visible:ring-offset-background"
        />
      </div>
    </div>
  );
}
