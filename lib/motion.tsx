export const slideInInitial = {
  x: -50,
  opacity: 0,
  transition: {
    x: { stiffness: 1000 },
  },
};

export const slideInFinish = {
  x: 0,
  opacity: 1,
  transition: {
    x: { stiffness: 1000, velocity: -100 },
  },
};

export const slideInVariants = {
  default: slideInInitial,
  project: slideInFinish,
};
