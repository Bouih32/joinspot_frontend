type FullSignupType = {
  username: string;
  fullName: string;
  email: string;
  city: string;
  role: string;
  password: string;
  categoryId: string;
  degreeName: string;
  schoolName: string;
  year: string;
  frontPic: string;
  justification: string;
  justificationPic: string;
  idFrontPic: string;
  idBackPic: string;
};
export type DataType = Partial<FullSignupType>;

export type LoginType = {
  email: string;
  password: string;
};

export type Category = {
  categoryId: string;
  categoryName: string;
  icon: string;
  deletedAt: Date;
};

export type City = {
  cityId: string;
  cityName: string;
  cover: string;
};
