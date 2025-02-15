type FullSignupType = {
  username: string;
  fullName: string;
  email: string;
  city: string;
  role: string;
  password: string;
  category: string;
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
