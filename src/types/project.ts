import { User, Activity } from './common';

export interface Project {
  id: string;
  name: string;
  address: string;
  area: number;
  type: string;
  status: 'in_progress' | 'completed' | 'paused' | 'not_started';
  progress: number;
  budget: {
    estimated: number;
    actual: number;
  };
  startDate: string;
  endDate: string;
  daysLeft: number;
  imageUrl: string;
  pm: User;
  foreman: User;
  client: User;
  categories: ProjectCategory[];
  timeline: Activity[];
  description?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ProjectCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  progress: number;
  estimatedDays: number;
  daysLeft: number;
  budget: {
    estimated: number;
    actual: number;
  };
  materials?: ProjectMaterial[];
  tasks?: Task[];
}

export interface ProjectMaterial {
  materialId: string;
  materialName: string;
  materialCode: string;
  quantity: number;
  unit: string;
  pricePerUnit: number;
  totalPrice: number;
  status: 'requested' | 'approved' | 'delivered' | 'used';
  requestedBy: string;
  requestedAt: string;
  approvedBy?: string;
  approvedAt?: string;
}

export interface Task {
  id: string;
  name: string;
  description: string;
  status: 'todo' | 'in_progress' | 'completed';
  assignedTo?: User;
  dueDate?: string;
  completedAt?: string;
}

export interface ProjectFormData {
  name: string;
  address: string;
  area: number;
  type: string;
  status: 'in_progress' | 'completed' | 'paused' | 'not_started';
  startDate: string;
  endDate: string;
  budget: number;
  pmId: string;
  foremanId: string;
  clientId: string;
  imageUrl?: string;
  description?: string;
}

export interface ProjectFilters {
  search?: string;
  status?: string;
  pmId?: string;
  startDate?: string;
  endDate?: string;
  budgetMin?: number;
  budgetMax?: number;
  progressMin?: number;
  progressMax?: number;
}
