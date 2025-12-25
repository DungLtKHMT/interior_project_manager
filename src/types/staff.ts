import { User, Activity } from './common';

export interface StaffMember extends User {
  status: 'active' | 'locked' | 'pending';
  projectCount?: number;
  performance?: number;
  expertise?: string[];
  company?: string;
  address?: string;
  createdAt: string;
  activities: Activity[];
  permissions?: string[];
}

export interface StaffFormData {
  name: string;
  email: string;
  phone: string;
  role: 'admin' | 'pm' | 'foreman' | 'client';
  status: 'active' | 'locked' | 'pending';
  avatarUrl?: string;
  expertise?: string[];
  company?: string;
  address?: string;
  permissions?: string[];
  password?: string;
}

export interface StaffFilters {
  search?: string;
  role?: string;
  status?: string;
  projectCount?: number;
}
