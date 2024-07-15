export interface Token {
  accessToken: string;
  refreshToken: string;
}

export interface Pagination {
  totalPages: number;
}

interface profileItem {
  name: string;
  originalName: string;
  path: string;
}

export interface User {
  name: string;
  profile: {
    item: Array<profileItem>;
  };
  _id: number;
}

export interface LoginUser {
  createdAt: string;
  email: string;
  loginType: string;
  name: string;
  profileImage: FileList;
  token: Token;
  type: string;
  updatedAt: string;
  _id: number;
}

export interface DashboardItem {
  content: string;
  createdAt: string;
  repliesCount: number;
  product: any;
  seller_id: any;
  tag: string;
  title: string;
  type: string;
  updatedAt: string;
  user: User;
  views: number;
  _id: number;
}

export interface Dashboard {
  pagination: Pagination;
  item: Array<DashboardItem>;
}

export interface UsersStore {
  isLogin: boolean;
  loginUserData: LoginUser | null;
  setIsLogin: (value: boolean) => void;
  setLoginUserData: (userData: LoginUser) => void;
}

export interface PageStore {
  currentPage: number | null;
  lastPage: number | null;
  setCurrentPage: (value: number) => void;
  setLastPage: (value: number) => void;
}
