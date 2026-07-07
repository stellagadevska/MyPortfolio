export interface Interest {
  name: string;
  description: string;
  iconClass: string;
}

export const interests: Interest[] = [
  {
    name: "Travelling",
    description:
      "I am a big fan of seeing new places, learning about different cultures. It broadens my knowledge and boosts my mood.",
    iconClass: "fa fa-map-signs",
  },
  {
    name: "Theatre",
    description:
      "I have played in several plays. It was very exciting and uplifting. Acting is a way to get familiar with other personalities.",
    iconClass: "fa fa-ticket",
  },
  {
    name: "Web Design and Development",
    description:
      "I did not separate these two because for me - they are one whole piece. I enjoy doing both.",
    iconClass: "fa fa-laptop",
  },
  {
    name: "Audio Books",
    description:
      "I enjoy listening to books. This way, I avoid wasting my time when driving and learn many new things.",
    iconClass: "fa fa-file-audio-o",
  },
  {
    name: "Art",
    description:
      "I really enjoy playing with colors and creating art. This is a way to express myself and the way I feel.",
    iconClass: "fa fa-paint-brush",
  },
  {
    name: "Cooking",
    description:
      "For me, food is an essential part of feeling good. I believe that making your own food ensures the quality of the food.",
    iconClass: "fa fa-cutlery",
  },
];
