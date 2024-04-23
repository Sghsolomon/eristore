import { Nikes } from "../../app/shared/NIKE";

export const selectAllNike = () => {
  return Nikes;
};

export const selectOneNike = () => {
  const selectOne = Math.floor(Math.random() * Nikes.length);
  return Nikes.find((nike) => {
    return nike.id === selectOne;
  });
};

export const selectNikeById = (nikeId) => {
  return Nikes.find((nike) => {
    return nike.id === nikeId;
  });
};
