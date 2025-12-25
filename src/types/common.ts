export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'admin' | 'pm' | 'foreman' | 'client';
  avatarUrl: string;
}

export interface Activity {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  action: string;
  description: string;
  timestamp: string;
  type: 'create' | 'update' | 'delete' | 'comment' | 'status_change';
  projectId?: string;
  projectName?: string;
}

export interface Notification {
  id: string;
  type: 'material' | 'progress' | 'budget' | 'system';
  priority: 'high' | 'medium' | 'low';
  title: string;
  message: string;
  projectId?: string;
  projectName?: string;
  isRead: boolean;
  timestamp: string;
  actionLink?: string;
}

export interface PaginationParams {
  page: number;
  perPage: number;
}

export interface SortParams {
  field: string;
  direction: 'asc' | 'desc';
}

export interface FilterParams {
  [key: string]: string | number | boolean | undefined;
}
