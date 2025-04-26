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
  user: { avatar: string; userName: string; userId: string };
  activityTags: [];
  city: { cityName: string };
  category: { categoryName: string };
  joined: number;
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
  seat: number;
  cityId: string;
  price: string;
  tags: string;
};

export type ActivityDetailsT = {
  activityId: string;
  userId: string;
  coverPic: string;
  title: string;
  description: string;
  seat: number;
  price: number;
  score: number;
  categoryId: string;
  avatar: string;
  userName: string;
  city: string;
  location: string;
  category: string;
  tags: string[];
  startTime: string;
  startDay: string;
  joined: number;
};

export type UserT = {
  userId: string;
  userName: string;
  fullName: string;
  email: string;
  cityId: string;
  role: string;
  bio?: string;
  phone?: string;
  sex?: string;
  avatar?: string;
  idFrontPic?: string;
  idBackPic?: null;
  createdAt: string;
  updatedAt: string;
  deletedAt?: string;
  categoryId?: string;
};

export type UserProfileT = {
  avatar: string | null;
  userName: string;
  background: { link: string };
  activityNumber: number;
  followersNum: number;
  followingNum: number;
  totalRevenue: number;
  joinedNum: number;
  activeActivities: number;
};

export type SocialsT = {
  socialId: string;
  link: string;
  platform: string;
};

export type TicketT = {
  ticketDate: string;
  seats: number;
  location: string;
  city: string;
  category: string;
  organizer: string;
  activityId: string;
  code: string;
  quantity: number;
  title: string;
  date: string;
  ended: boolean;
  totalPaid: number;
};

export type MessageT = {
  content: string;
  createdAt: string;
  deletedAt: string;
  messageId: string;
  read: boolean;
  message_from: {
    avatar: string;
    userName: string;
  };
};

export type NotifT = {
  content: string;
  seen: boolean;
  createdAt: string;
  deletedAt: string;
  notification_from: {
    avatar: string;
    userName: string;
  };
};

export type joinedT = {
  avatar: string;
  userName: string;
  quantity: number;
  userId: string;
  id: string;
  payed: number;
  code: string;
  title: string;
  used: boolean;
};

export type ProfileT = {
  user: {
    userName: string;
    avatar: string;
    background: { link: string };
    bio: string;
    city: { cityName: string };
    socials: { platform: string; link: string }[];
    role: string;
  };
  activityNumber: 4;
  followersNum: 0;
  followingNum: 0;
  tags: string[];
};

export type activityTicket = {
  avatar: string;
  userName: string;
  quantity: number;
  userId: string;
  code: string;
};

export type editActT = {
  activityId: string;
  userId: string;
  coverPic: string;
  title: string;
  description: string;
  seat: number;
  price: number;
  score: number;
  categoryId: string;
  avatar: string;
  userName: string;
  city: string;
  location: string;
  category: string;
  tags: { tagId: string; tagName: string }[];
  startTime: string;
  endTime: string;
  startDay: string;
  joined: number;
};

export type degreeT = {
  degreeId: string;
  degreeName: string;
  school: string;
  year: number;
  frontPic: string;
  justification: string;
  justificationPic: string;
  user: {
    userId: string;
    email: string;
    userName: string;
    avatar: string;
    idBackPic: string;
    idFrontPic: string;
    category: { categoryName: string };
  };
};

export type Payments = {
  bankName: string;
  rib: string;
  userName: string;
  avatar: string | null;
  revenueAmount: number;
  userId: string;
};

export type RawPost = {
  postId: string;
  bannerPic: string;
  description: string;
  likesCount: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  userId: string;
  categoryId: string;
  category: { categoryName: string };
  user: {
    userName: string;
    avatar: string;
  };
  _count: { comment: number };
  comment: {
    content: string;
    createdAt: string;
    user: {
      userName: string;
      avatar: string;
    };
  };
  postTags: { tag: { tagName: string } }[];
};
