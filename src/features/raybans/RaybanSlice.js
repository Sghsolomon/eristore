import { Raybans } from "../../app/shared/RAYBAN";

export const selectAllRayban = () => {
  return Raybans;
};

export const selectOneRayban = () => {
  const selectOne = Math.floor(Math.random() * Raybans.length);
  return Raybans.find((rayban) => {
    return rayban.id === selectOne;
  });
};

export const selectRaybanById = (raybanId) => {
  return Raybans.find((rayban) => {
    return rayban.id === raybanId;
  });
};
