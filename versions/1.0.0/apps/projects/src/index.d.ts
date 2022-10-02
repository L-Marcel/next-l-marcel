declare type Project = {
  name: string;
  support: ("desktop" | "mobile")[];
  image: string;
};

//Snake
declare type Direction = "l" | "r" | "u" | "d";