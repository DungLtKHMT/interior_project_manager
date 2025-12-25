export const PROJECT_STATUSES = {
  IN_PROGRESS: 'in_progress',
  COMPLETED: 'completed',
  PAUSED: 'paused',
  NOT_STARTED: 'not_started',
} as const;

export const PROJECT_STATUS_LABELS = {
  [PROJECT_STATUSES.IN_PROGRESS]: 'Đang thi công',
  [PROJECT_STATUSES.COMPLETED]: 'Hoàn thành',
  [PROJECT_STATUSES.PAUSED]: 'Tạm dừng',
  [PROJECT_STATUSES.NOT_STARTED]: 'Chưa bắt đầu',
} as const;

export const STAFF_ROLES = {
  ADMIN: 'admin',
  PM: 'pm',
  FOREMAN: 'foreman',
  CLIENT: 'client',
} as const;

export const STAFF_ROLE_LABELS = {
  [STAFF_ROLES.ADMIN]: 'Admin',
  [STAFF_ROLES.PM]: 'Project Manager',
  [STAFF_ROLES.FOREMAN]: 'Foreman',
  [STAFF_ROLES.CLIENT]: 'Client',
} as const;

export const STAFF_STATUSES = {
  ACTIVE: 'active',
  LOCKED: 'locked',
  PENDING: 'pending',
} as const;

export const STAFF_STATUS_LABELS = {
  [STAFF_STATUSES.ACTIVE]: 'Hoạt động',
  [STAFF_STATUSES.LOCKED]: 'Bị khóa',
  [STAFF_STATUSES.PENDING]: 'Chờ kích hoạt',
} as const;

export const MATERIAL_STATUSES = {
  IN_STOCK: 'in_stock',
  LOW_STOCK: 'low_stock',
  OUT_OF_STOCK: 'out_of_stock',
} as const;

export const MATERIAL_STATUS_LABELS = {
  [MATERIAL_STATUSES.IN_STOCK]: 'Còn hàng',
  [MATERIAL_STATUSES.LOW_STOCK]: 'Sắp hết',
  [MATERIAL_STATUSES.OUT_OF_STOCK]: 'Hết hàng',
} as const;

export const NOTIFICATION_TYPES = {
  MATERIAL: 'material',
  PROGRESS: 'progress',
  BUDGET: 'budget',
  SYSTEM: 'system',
} as const;

export const NOTIFICATION_PRIORITIES = {
  HIGH: 'high',
  MEDIUM: 'medium',
  LOW: 'low',
} as const;

export const UNIT_TYPES = {
  QUANTITY: 'quantity',
  WEIGHT: 'weight',
  AREA: 'area',
  VOLUME: 'volume',
  LENGTH: 'length',
} as const;

export const UNIT_TYPE_LABELS = {
  [UNIT_TYPES.QUANTITY]: 'Số lượng',
  [UNIT_TYPES.WEIGHT]: 'Khối lượng',
  [UNIT_TYPES.AREA]: 'Diện tích',
  [UNIT_TYPES.VOLUME]: 'Thể tích',
  [UNIT_TYPES.LENGTH]: 'Chiều dài',
} as const;

export const CATEGORY_ICONS = [
  '⚡', '💧', '🪵', '🎨', '🔨', '🔩', '🪛', '🧱', '🪨', '🏗️',
  '🔌', '💡', '🚿', '🚽', '🪟', '🚪', '🛠️', '⚙️', '🔧', '📦',
] as const;

export const AVATAR_COLORS = [
  '#EF4444', '#F59E0B', '#10B981', '#3B82F6', '#8B5CF6',
  '#EC4899', '#6366F1', '#14B8A6', '#F97316', '#84CC16',
] as const;
