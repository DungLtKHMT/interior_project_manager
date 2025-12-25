// Color palette
export const COLORS = {
  primary: '#3B82F6',
  success: '#10B981',
  warning: '#F59E0B',
  danger: '#EF4444',
  purple: '#8B5CF6',
  pink: '#EC4899',
  cyan: '#06B6D4',
  lime: '#84CC16',
};

// Role colors
export const ROLE_COLORS = {
  admin: '#8B5CF6',
  pm: '#3B82F6',
  foreman: '#F59E0B',
  client: '#10B981',
};

// Status options
export const STATUS_OPTIONS = [
  { value: 'active', label: 'Đang hoạt động' },
  { value: 'inactive', label: 'Không hoạt động' },
  { value: 'pending', label: 'Chờ xử lý' },
  { value: 'completed', label: 'Hoàn thành' },
  { value: 'paused', label: 'Tạm dừng' },
  { value: 'cancelled', label: 'Đã hủy' },
];

// Priority options
export const PRIORITY_OPTIONS = [
  { value: 'low', label: 'Thấp' },
  { value: 'medium', label: 'Trung bình' },
  { value: 'high', label: 'Cao' },
  { value: 'urgent', label: 'Khẩn cấp' },
];

// Role options
export const ROLE_OPTIONS = [
  { value: 'admin', label: 'Admin' },
  { value: 'pm', label: 'Project Manager' },
  { value: 'foreman', label: 'Foreman' },
  { value: 'client', label: 'Client' },
];

// Pagination defaults
export const DEFAULT_PAGE_SIZE = 10;
export const PAGE_SIZE_OPTIONS = [10, 20, 50, 100];

// Date format
export const DATE_FORMAT = 'dd/MM/yyyy';
export const DATETIME_FORMAT = 'dd/MM/yyyy HH:mm';

// Chart colors
export const CHART_COLORS = [
  '#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6',
  '#EC4899', '#06B6D4', '#84CC16', '#F97316', '#6366F1',
];
