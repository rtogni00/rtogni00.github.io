export interface Hobby {
  title: string;
  description: string;
  link?: string;
  linkLabel?: string;
}

export const hobbies: Hobby[] = [
  {
    title: "Hiking",
    description:
      "My ideal weekend involves waking up in a tent to an astonishing sunrise.",
  },
  {
    title: "Reading",
    description:
      "I love losing myself in a well-written book, especially on cold, rainy days.",
  },
  {
    title: "Playing Chess",
    description: "Always up for a game.",
    link: "https://www.chess.com/member/RobTog",
    linkLabel: "chess.com/RobTog",
  },
];
