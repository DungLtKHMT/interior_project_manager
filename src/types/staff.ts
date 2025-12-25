import { Status, Contact, Address } from './common';

export type Role = 'admin' | 'pm' | 'foreman' | 'client';

export interface StaffMember {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: Role;
  status: Status;
  avatar?: string;
  address?: Address;
  dateJoined: Date;
  projects: {
    id: string;
    name: string;
    role: string;
  }[];
  specialization?: string;
  experience?: number; // years
  salary?: number;
  workload?: number; // percentage
  lastActivity?: Date;
}

export interface StaffStats {
  total: number;
  active: number;
  inactive: number;
  byRole: {
    admin: number;
    pm: number;
    foreman: number;
    client: number;
  };
}
