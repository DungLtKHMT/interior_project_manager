export interface MaterialCategory {
  id: string;
  name: string;
  description?: string;
  icon?: string;
  color?: string;
  parentId?: string;
  children?: MaterialCategory[];
}

export interface Material {
  id: string;
  name: string;
  code: string;
  categoryId: string;
  categoryName: string;
  unit: string;
  unitPrice: number;
  stock: number;
  minStock: number;
  supplier?: string;
  description?: string;
  image?: string;
}

export interface Unit {
  id: string;
  name: string;
  symbol: string;
  description?: string;
}

export interface MaterialRequest {
  id: string;
  projectId: string;
  projectName: string;
  materialId: string;
  materialName: string;
  quantity: number;
  unit: string;
  status: 'pending' | 'approved' | 'rejected' | 'fulfilled';
  requestedBy: string;
  requestedAt: Date;
  approvedBy?: string;
  approvedAt?: Date;
  notes?: string;
}
