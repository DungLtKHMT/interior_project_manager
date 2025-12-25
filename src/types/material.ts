export interface Material {
  id: string;
  code: string;
  name: string;
  category: string;
  categoryId: string;
  unit: string;
  pricePerUnit: number;
  stock: number;
  warningLevel: number;
  status: 'in_stock' | 'low_stock' | 'out_of_stock';
  imageUrl: string;
  supplier: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface MaterialCategory {
  id: string;
  name: string;
  icon: string;
  color?: string;
  parentId?: string;
  children?: MaterialCategory[];
  itemCount: number;
}

export interface MaterialFormData {
  code?: string;
  name: string;
  categoryId: string;
  unit: string;
  pricePerUnit: number;
  stock: number;
  warningLevel: number;
  imageUrl?: string;
  supplier: string;
  description: string;
}

export interface Unit {
  id: string;
  name: string;
  symbol: string;
  type: 'quantity' | 'weight' | 'area' | 'volume' | 'length';
  note?: string;
}

export interface ConstructionCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  estimatedDays: number;
  checklist: string[];
  materials: string[];
  createdAt: string;
}
