import { FilterType } from "../types/interfaces";

export const formatFilterAPIString = (filter: FilterType) => {
  return `vote_average.lte=${filter.slidersRating.max}&vote_average.gte=${filter.slidersRating.min}`;
};
