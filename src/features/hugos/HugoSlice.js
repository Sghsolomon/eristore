import { Hugos } from "../../app/shared/HUGO";

export const selectAllHugo = () => {
  return Hugos;
};

export const selectOneHugo = () => {
  const selectOne = Math.floor(Math.random() * Hugos.length);
  return Hugos.find((hugo) => {
    return hugo.id === selectOne;
  });
};
