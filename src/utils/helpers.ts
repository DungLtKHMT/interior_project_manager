/**
 * Calculate percentage
 */
export function calculatePercentage(value: number, total: number): number {
  if (total === 0) return 0;
  return Math.round((value / total) * 100);
}

/**
 * Get status color based on status value
 */
export function getStatusColor(status: string): string {
  const statusColors: Record<string, string> = {
    active: 'text-green-600 bg-green-50',
    locked: 'text-red-600 bg-red-50',
    pending: 'text-yellow-600 bg-yellow-50',
    in_progress: 'text-blue-600 bg-blue-50',
    completed: 'text-green-600 bg-green-50',
    paused: 'text-orange-600 bg-orange-50',
    not_started: 'text-gray-600 bg-gray-50',
    in_stock: 'text-green-600 bg-green-50',
    low_stock: 'text-orange-600 bg-orange-50',
    out_of_stock: 'text-red-600 bg-red-50',
  };
  return statusColors[status] || 'text-gray-600 bg-gray-50';
}

/**
 * Get role badge color
 */
export function getRoleColor(role: string): string {
  const roleColors: Record<string, string> = {
    admin: 'bg-admin text-white',
    pm: 'bg-pm text-white',
    foreman: 'bg-foreman text-white',
    client: 'bg-client text-white',
  };
  return roleColors[role] || 'bg-gray-600 text-white';
}

/**
 * Calculate days left from a date
 */
export function calculateDaysLeft(endDate: string): number {
  const end = new Date(endDate);
  const now = new Date();
  const diff = end.getTime() - now.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}

/**
 * Get variance color (positive = green, negative = red)
 */
export function getVarianceColor(variance: number): string {
  if (variance > 0) return 'text-green-600';
  if (variance < 0) return 'text-red-600';
  return 'text-gray-600';
}

/**
 * Truncate text to specified length
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + '...';
}

/**
 * Generate random ID
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 9);
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: unknown[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
