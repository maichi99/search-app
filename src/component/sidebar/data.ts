import { SelectFilterOption } from "./selectFilter/SelectFilter";
import image1 from "../../assets/pngwing 6.png";
import image2 from "../../assets/pngwing 6 (1).png";
import image3 from "../../assets/pngwing 6 (2).png";
import image4 from "../../assets/pngwing 6 (3).png";
import image5 from "../../assets/pngwing 6 (4).png";

export type FilterCategory = "tier" | "theme" | "price";

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
  price: [
    { value: "LOW_TO_HIGH", label: "Low to high" },
    { value: "HIGH_TO_LOW", label: "High to low" },
  ],
};
export const filterDataDefault = {
  tier: "",
  theme: "",
  price: "",
};
export const categories = ["TIER", "THEME", "TIME", "PRICE"];
export const inFormationData = [
  { tier: "Epic", theme: "Halloween", price: 2.75, image: image1 },
  { tier: "Common", theme: "The DJ", price: 3.75, image: image2 },
  { tier: "Rare", theme: "Assassin", price: 4.75, image: image3 },
  { tier: "Legendary", theme: "Neon Guy", price: 5.75, image: image4 },
  { tier: "Legendary", theme: "Assassin", price: 6.75, image: image5 },
  { tier: "Epic", theme: "Mythic", price: 7.75, image: image1 },
  { tier: "Epic", theme: "Halloween", price: 8.75, image: image2 },
  { tier: "Epic", theme: "Halloween", price: 9.75, image: image3 },
  { tier: "Epic", theme: "Halloween", price: 9.75, image: image4 },
  { tier: "Legendary", theme: "Neon Guy", price: 5.75, image: image4 },
  { tier: "Legendary", theme: "Assassin", price: 6.75, image: image5 },
  { tier: "Epic", theme: "Mythic", price: 7.75, image: image1 },
  { tier: "Rare", theme: "Assassin", price: 4.75, image: image3 },
  { tier: "Legendary", theme: "Neon Guy", price: 5.75, image: image4 },
  { tier: "Legendary", theme: "Assassin", price: 6.75, image: image5 },
  { tier: "Epic", theme: "Mythic", price: 7.75, image: image1 },
];
