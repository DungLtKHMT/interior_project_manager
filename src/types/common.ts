// Common types used across the application

export type Status = 'active' | 'inactive' | 'pending' | 'completed' | 'paused' | 'cancelled';

export type Priority = 'low' | 'medium' | 'high' | 'urgent';

export interface TimeRange {
  start: Date;
  end: Date;
}

export interface Address {
  street: string;
  ward: string;
  district: string;
  city: string;
}

export interface Contact {
  email: string;
  phone: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'pm' | 'foreman' | 'client';
  avatar?: string;
}

export interface Activity {
  id: string;
  type: 'update' | 'comment' | 'status_change' | 'file_upload' | 'budget_change';
  title: string;
  description: string;
  userId: string;
  userName: string;
  timestamp: Date;
  metadata?: Record<string, unknown>;
}

export interface Notification {
  id: string;
  type: 'info' | 'warning' | 'success' | 'error';
  title: string;
  message: string;
  timestamp: Date;
  read: boolean;
  link?: string;
}
