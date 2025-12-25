import { Status, Priority } from '@/types/common';

// Get status color
export function getStatusColor(status: Status): string {
  const colors: Record<Status, string> = {
    active: 'bg-green-100 text-green-800',
    inactive: 'bg-gray-100 text-gray-800',
    pending: 'bg-yellow-100 text-yellow-800',
    completed: 'bg-blue-100 text-blue-800',
    paused: 'bg-orange-100 text-orange-800',
    cancelled: 'bg-red-100 text-red-800',
  };
  return colors[status] || colors.inactive;
}

// Get priority color
export function getPriorityColor(priority: Priority): string {
  const colors: Record<Priority, string> = {
    low: 'bg-gray-100 text-gray-800',
    medium: 'bg-blue-100 text-blue-800',
    high: 'bg-orange-100 text-orange-800',
    urgent: 'bg-red-100 text-red-800',
  };
  return colors[priority] || colors.low;
}

// Get role color
export function getRoleColor(role: string): string {
  const colors: Record<string, string> = {
    admin: 'bg-purple-100 text-purple-800',
    pm: 'bg-blue-100 text-blue-800',
    foreman: 'bg-orange-100 text-orange-800',
    client: 'bg-green-100 text-green-800',
  };
  return colors[role] || colors.client;
}

// Calculate progress color
export function getProgressColor(progress: number): string {
  if (progress >= 90) return 'bg-green-500';
  if (progress >= 70) return 'bg-blue-500';
  if (progress >= 50) return 'bg-yellow-500';
  return 'bg-orange-500';
}

// Calculate budget status color
export function getBudgetStatusColor(spent: number, budget: number): string {
  const percentage = (spent / budget) * 100;
  if (percentage >= 100) return 'text-red-600';
  if (percentage >= 90) return 'text-orange-600';
  if (percentage >= 80) return 'text-yellow-600';
  return 'text-green-600';
}

// Generate random color
export function generateRandomColor(): string {
  const colors = [
    '#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6',
    '#EC4899', '#06B6D4', '#84CC16', '#F97316', '#6366F1'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Truncate text
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length) + '...';
}

// Generate initials from name
export function getInitials(name: string): string {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
}

// Sort array by key
export function sortBy<T>(array: T[], key: keyof T, direction: 'asc' | 'desc' = 'asc'): T[] {
  return [...array].sort((a, b) => {
    const aVal = a[key];
    const bVal = b[key];
    
    if (aVal < bVal) return direction === 'asc' ? -1 : 1;
    if (aVal > bVal) return direction === 'asc' ? 1 : -1;
    return 0;
  });
}

// Filter array by search term
export function filterBySearch<T>(
  array: T[],
  searchTerm: string,
  keys: (keyof T)[]
): T[] {
  if (!searchTerm) return array;
  
  const lowerSearch = searchTerm.toLowerCase();
  return array.filter(item =>
    keys.some(key => {
      const value = item[key];
      return String(value).toLowerCase().includes(lowerSearch);
    })
  );
}

// Paginate array
export function paginate<T>(array: T[], page: number, perPage: number): T[] {
  const start = (page - 1) * perPage;
  const end = start + perPage;
  return array.slice(start, end);
}

// Calculate total pages
export function getTotalPages(total: number, perPage: number): number {
  return Math.ceil(total / perPage);
}
