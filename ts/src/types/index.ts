export interface Pagination {
  totalPages: number;
}

export interface LoginUser {
  name: string;
  profile: {
    name: string;
  };
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
  user: LoginUser;
}

export interface Dashboard {
  pagination: Pagination;
  item: Array<DashboardItem>;
}

export interface FetchOptions extends RequestInit {
  headers?: HeadersInit;
}
