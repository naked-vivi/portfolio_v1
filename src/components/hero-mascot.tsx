"use client";

import { Mascot } from "page-mascot";

export default function HeroMascot() {
  return (
    <Mascot
      directions="/mascots/vivian-directions.png"
      reactions="/mascots/vivian-reactions.png"
      size={140}
      label="Vivian's girl with glasses mascot. Click for a reaction."
      className="shrink-0 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-4"
    />
  );
}
