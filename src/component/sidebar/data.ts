import { SelectFilterOption } from "./selectFilter/SelectFilter";
import image1 from "../../assets/pngwing 6.png";
import image2 from "../../assets/pngwing 6 (1).png";
import image3 from "../../assets/pngwing 6 (2).png";
import image4 from "../../assets/pngwing 6 (3).png";
import image5 from "../../assets/pngwing 6 (4).png";
import { ChipProps } from "../search/chip/MultipleChips";
import { CardInformationProps } from "../search/cardInformation/CardInfomation";

export type FilterCategory = "tier" | "theme" | "time" | "price";

export type FilterOptions = {
  [key in FilterCategory]: SelectFilterOption[];
};
export const filterData: FilterOptions = {
  tier: [
    { value: "EPIC", label: "Epic" },
    { value: "COMMON", label: "Common" },
    { value: "RARE", label: "Rare" },
    { value: "LEGENDARY", label: "Legendary" },
  ],
  theme: [
    { value: "HALLOWEEN", label: "Halloween" },
    { value: "THE_DJ", label: "The DJ" },
    { value: "ASSASSIN", label: "Assassin" },
    { value: "NEON_GUY", label: "Neon Guy" },
    { value: "BASKETBALL_GIRL", label: "Basketball Girl" },
    { value: "MYTHIC", label: "Mythic" },
  ],
  time: [
    { value: "LATEST", label: "latest" },
    { value: "OLDEST", label: "oldest" },
  ],
  price: [
    { value: "LOW_TO_HIGH", label: "Low to high" },
    { value: "HIGH_TO_LOW", label: "High to low" },
  ],
};
export const chipCategoryData: ChipProps[] = [
  { label: "All", color: "secondary" },
  { label: "Upper body", color: "secondary" },
  { label: "Lower body", color: "secondary" },
  { label: "Hat", color: "secondary" },
  { label: "Shoes", color: "secondary" },
  { label: "Accessory", color: "secondary" },
  { label: "legendary", color: "secondary" },
  { label: "Mythic", color: "secondary" },
  { label: "Epic", color: "secondary" },
  { label: "Rare", color: "secondary" },
];
export const filterDataDefault = {
  tier: "",
  theme: "",
  price: "",
  time: "",
};
export const categories = ["TIER", "THEME", "TIME", "PRICE"];
export const inFormationData: CardInformationProps[] = [
  {
    tier: "Epic",
    theme: "Halloween",
    price: 23.75,
    image: image2,
    time: new Date("2023-10-01"),
    backGround:
      " linear-gradient(90deg, rgba(34,180,198,0.8352591036414566) 49%, rgba(73,221,129,1) 100%)",
  },
  {
    tier: "Common",
    theme: "The DJ",
    price: 11.75,
    image: image3,
    time: new Date("2023-09-15"),
    backGround:
      "linear-gradient(90deg, rgba(67,166,246,1) 52%, rgba(88,104,243,1) 100%)",
  },
  {
    tier: "Rare",
    theme: "Assassin",
    price: 4.75,
    image: image4,
    time: new Date("2023-08-20"),
    backGround:
      "linear-gradient(90deg, rgba(254,90,90,1) 52%, rgba(241,99,210,1) 100%)",
  },
  {
    tier: "Legendary",
    theme: "Neon Guy",
    price: 5.75,
    image: image5,
    time: new Date("2023-07-25"),
    backGround:
      "linear-gradient(90deg, rgba(254,149,90,1) 52%, rgba(241,218,99,1) 100%)",
  },
  {
    tier: "Legendary",
    theme: "Assassin",
    price: 6.75,
    image: image1,
    time: new Date("2023-06-30"),
    backGround:
      "linear-gradient(90deg, rgba(221,90,254,1) 52%, rgba(99,102,241,1) 100%)",
  },
  {
    tier: "Epic",
    theme: "Mythic",
    price: 7.75,
    image: image2,
    time: new Date("2023-05-15"),
    backGround:
      " linear-gradient(90deg, rgba(34,180,198,0.8352591036414566) 49%, rgba(73,221,129,1) 100%)",
  },
  {
    tier: "Epic",
    theme: "Halloween",
    price: 8.75,
    image: image3,
    time: new Date("2023-04-10"),
    backGround:
      "linear-gradient(90deg, rgba(67,166,246,1) 52%, rgba(88,104,243,1) 100%)",
  },
  {
    tier: "Epic",
    theme: "Halloween",
    price: 9.75,
    image: image4,
    time: new Date("2023-03-05"),
    backGround:
      "linear-gradient(90deg, rgba(254,90,90,1) 52%, rgba(241,99,210,1) 100%)",
  },
  {
    tier: "Epic",
    theme: "Halloween",
    price: 9.75,
    image: image5,
    time: new Date("2023-02-01"),
    backGround:
      "linear-gradient(90deg, rgba(254,149,90,1) 52%, rgba(241,218,99,1) 100%)",
  },
  {
    tier: "Legendary",
    theme: "Neon Guy",
    price: 5.75,
    image: image1,
    time: new Date("2023-01-15"),
    backGround:
      "linear-gradient(90deg, rgba(221,90,254,1) 52%, rgba(99,102,241,1) 100%)",
  },
  {
    tier: "Legendary",
    theme: "Assassin",
    price: 6.75,
    image: image2,
    time: new Date("2022-12-10"),
    backGround:
      " linear-gradient(90deg, rgba(34,180,198,0.8352591036414566) 49%, rgba(73,221,129,1) 100%)",
  },
  {
    tier: "Epic",
    theme: "Mythic",
    price: 7.75,
    image: image3,
    time: new Date("2022-11-20"),
    backGround:
      "linear-gradient(90deg, rgba(67,166,246,1) 52%, rgba(88,104,243,1) 100%)",
  },
  {
    tier: "Rare",
    theme: "Assassin",
    price: 4.75,
    image: image4,
    time: new Date("2022-10-15"),
    backGround:
      "linear-gradient(90deg, rgba(254,90,90,1) 52%, rgba(241,99,210,1) 100%)",
  },
  {
    tier: "Legendary",
    theme: "Neon Guy",
    price: 5.75,
    image: image5,
    time: new Date("2022-09-10"),
    backGround:
      "linear-gradient(90deg, rgba(254,149,90,1) 52%, rgba(241,218,99,1) 100%)",
  },
  {
    tier: "Legendary",
    theme: "Assassin",
    price: 6.75,
    image: image1,
    time: new Date("2022-08-05"),
    backGround:
      "linear-gradient(90deg, rgba(221,90,254,1) 52%, rgba(99,102,241,1) 100%)",
  },
  {
    tier: "Epic",
    theme: "Mythic",
    price: 7.75,
    image: image2,
    time: new Date("2022-07-01"),
    backGround:
      " linear-gradient(90deg, rgba(34,180,198,0.8352591036414566) 49%, rgba(73,221,129,1) 100%)",
  },
  {
    tier: "Epic",
    theme: "Halloween",
    price: 8.75,
    image: image3,
    time: new Date("2022-06-15"),
    backGround:
      "linear-gradient(90deg, rgba(67,166,246,1) 52%, rgba(88,104,243,1) 100%)",
  },
  {
    tier: "Common",
    theme: "The DJ",
    price: 11.75,
    image: image4,
    time: new Date("2022-05-20"),
    backGround:
      "linear-gradient(90deg, rgba(254,90,90,1) 52%, rgba(241,99,210,1) 100%)",
  },
  {
    tier: "Rare",
    theme: "Assassin",
    price: 4.75,
    image: image5,
    time: new Date("2022-04-10"),
    backGround:
      "linear-gradient(90deg, rgba(254,149,90,1) 52%, rgba(241,218,99,1) 100%)",
  },
  {
    tier: "Legendary",
    theme: "Neon Guy",
    price: 5.75,
    image: image1,
    time: new Date("2022-03-05"),
    backGround:
      "linear-gradient(90deg, rgba(221,90,254,1) 52%, rgba(99,102,241,1) 100%)",
  },
  {
    tier: "Legendary",
    theme: "Assassin",
    price: 6.75,
    image: image2,
    time: new Date("2022-02-01"),
    backGround:
      " linear-gradient(90deg, rgba(34,180,198,0.8352591036414566) 49%, rgba(73,221,129,1) 100%)",
  },
  {
    tier: "Epic",
    theme: "Mythic",
    price: 7.75,
    image: image3,
    time: new Date("2022-01-15"),
    backGround:
      "linear-gradient(90deg, rgba(67,166,246,1) 52%, rgba(88,104,243,1) 100%)",
  },
  {
    tier: "Epic",
    theme: "Halloween",
    price: 8.75,
    image: image4,
    time: new Date("2021-12-10"),
    backGround:
      "linear-gradient(90deg, rgba(254,90,90,1) 52%, rgba(241,99,210,1) 100%)",
  },
  {
    tier: "Common",
    theme: "The DJ",
    price: 11.75,
    image: image5,
    time: new Date("2021-11-20"),
    backGround:
      "linear-gradient(90deg, rgba(254,149,90,1) 52%, rgba(241,218,99,1) 100%)",
  },
  {
    tier: "Rare",
    theme: "Assassin",
    price: 4.75,
    image: image1,
    time: new Date("2021-10-15"),
    backGround:
      "linear-gradient(90deg, rgba(221,90,254,1) 52%, rgba(99,102,241,1) 100%)",
  },
  {
    tier: "Legendary",
    theme: "Neon Guy",
    price: 5.75,
    image: image2,
    time: new Date("2021-09-10"),
    backGround:
      " linear-gradient(90deg, rgba(34,180,198,0.8352591036414566) 49%, rgba(73,221,129,1) 100%)",
  },
  {
    tier: "Legendary",
    theme: "Assassin",
    price: 6.75,
    image: image3,
    time: new Date("2021-08-05"),
    backGround:
      "linear-gradient(90deg, rgba(67,166,246,1) 52%, rgba(88,104,243,1) 100%)",
  },
  {
    tier: "Epic",
    theme: "Mythic",
    price: 7.75,
    image: image4,
    time: new Date("2021-07-01"),
    backGround:
      "linear-gradient(90deg, rgba(254,90,90,1) 52%, rgba(241,99,210,1) 100%)",
  },
  {
    tier: "Epic",
    theme: "Halloween",
    price: 8.75,
    image: image5,
    time: new Date("2021-06-15"),
    backGround:
      "linear-gradient(90deg, rgba(254,149,90,1) 52%, rgba(241,218,99,1) 100%)",
  },
];
