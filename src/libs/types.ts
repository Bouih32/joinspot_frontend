type FullSignupType = {
  username: string;
  fullName: string;
  email: string;
  city: string;
  categoryName?: string;
  justnImgName?: string;
  frontPicName?: string;
  idFrontPicName?: string;
  idBackPicName?: string;
  role: string;
  password: string;
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

export type ActivityType = {
  activityId: string;
  coverPic: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  location: string;
  startDay: string;
  endDay: string;
  seat: number;
  cityId: string;
  price: number;
  score: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: null;
  userId: string;
  categoryId: string;
  user: { avatar: string; userName: string };
  activityTags: [];
  city: { cityName: string };
  category: { categoryName: string };
};

export type AddActivityT = {
  coverPic: string;
  title: string;
  description: string;
  startTime: string;
  endTime: string;
  location: string;
  startDay: string;
  endDay: string;
  seat: string;
  cityId: string;
  price: string;
  tags: string;
};
