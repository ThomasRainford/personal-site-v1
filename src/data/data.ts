import data from "./data.json";
import { sections, SiteData } from "./types";

export const getSiteData = () => {
  return data as SiteData;
};

export const getSiteSection = (section: keyof typeof data) => {
  return data[section] as SiteData[typeof section];
};

export const getSiteSections = () => {
  return Object.keys(data) as unknown as typeof sections;
};
