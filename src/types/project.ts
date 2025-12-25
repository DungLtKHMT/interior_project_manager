import { Address, Status, Priority, Activity } from './common';

export interface ProjectCategory {
  id: string;
  name: string;
  description?: string;
  progress: number;
  budget: number;
  spent: number;
}

export interface TeamMember {
  id: string;
  name: string;
  role: 'pm' | 'foreman' | 'worker';
  avatar?: string;
  workload?: number;
}

export interface MaterialUsage {
  materialId: string;
  materialName: string;
  quantity: number;
  unit: string;
  cost: number;
}

export interface Project {
  id: string;
  name: string;
  code: string;
  status: Status;
  priority: Priority;
  progress: number;
  budget: number;
  spent: number;
  startDate: Date;
  endDate: Date;
  estimatedEndDate?: Date;
  address: Address;
  client: {
    id: string;
    name: string;
    email: string;
    phone: string;
  };
  pm: {
    id: string;
    name: string;
    avatar?: string;
  };
  team: TeamMember[];
  categories: ProjectCategory[];
  materials: MaterialUsage[];
  activities: Activity[];
  description?: string;
  images?: string[];
}

export interface ProjectStats {
  total: number;
  inProgress: number;
  completed: number;
  paused: number;
}
