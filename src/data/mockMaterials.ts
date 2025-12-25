import { Material, MaterialCategory, Unit } from '@/types/material';

export const mockUnits: Unit[] = [
  { id: 'u1', name: 'Bao', symbol: 'bao', description: 'Đơn vị đếm bao' },
  { id: 'u2', name: 'Mét vuông', symbol: 'm2', description: 'Diện tích' },
  { id: 'u3', name: 'Mét khối', symbol: 'm3', description: 'Thể tích' },
  { id: 'u4', name: 'Mét', symbol: 'm', description: 'Chiều dài' },
  { id: 'u5', name: 'Viên', symbol: 'viên', description: 'Đơn vị đếm' },
  { id: 'u6', name: 'Cái', symbol: 'cái', description: 'Đơn vị đếm' },
  { id: 'u7', name: 'Bộ', symbol: 'bộ', description: 'Bộ sản phẩm' },
  { id: 'u8', name: 'Lít', symbol: 'L', description: 'Dung tích' },
  { id: 'u9', name: 'Kg', symbol: 'kg', description: 'Khối lượng' },
  { id: 'u10', name: 'Tấn', symbol: 'tấn', description: 'Khối lượng lớn' },
];

export const mockMaterialCategories: MaterialCategory[] = [
  {
    id: 'cat1',
    name: 'Vật liệu xây dựng',
    description: 'Xi măng, cát, đá, gạch',
    icon: 'Hammer',
    color: '#3B82F6',
    children: [
      { id: 'cat1-1', name: 'Xi măng', parentId: 'cat1', icon: 'Package', color: '#3B82F6' },
      { id: 'cat1-2', name: 'Cát đá', parentId: 'cat1', icon: 'Mountain', color: '#3B82F6' },
      { id: 'cat1-3', name: 'Gạch ngói', parentId: 'cat1', icon: 'Grid3x3', color: '#3B82F6' },
      { id: 'cat1-4', name: 'Vữa xây', parentId: 'cat1', icon: 'Package2', color: '#3B82F6' },
    ],
  },
  {
    id: 'cat2',
    name: 'Vật tư điện',
    description: 'Đèn, ổ cắm, dây điện',
    icon: 'Zap',
    color: '#F59E0B',
    children: [
      { id: 'cat2-1', name: 'Đèn chiếu sáng', parentId: 'cat2', icon: 'Lightbulb', color: '#F59E0B' },
      { id: 'cat2-2', name: 'Ổ cắm công tắc', parentId: 'cat2', icon: 'ToggleRight', color: '#F59E0B' },
      { id: 'cat2-3', name: 'Dây cáp điện', parentId: 'cat2', icon: 'Cable', color: '#F59E0B' },
      { id: 'cat2-4', name: 'Thiết bị điện', parentId: 'cat2', icon: 'Cpu', color: '#F59E0B' },
    ],
  },
  {
    id: 'cat3',
    name: 'Vật tư nước',
    description: 'Thiết bị vệ sinh, ống nước, van khóa',
    icon: 'Droplet',
    color: '#06B6D4',
    children: [
      { id: 'cat3-1', name: 'Thiết bị vệ sinh', parentId: 'cat3', icon: 'Bath', color: '#06B6D4' },
      { id: 'cat3-2', name: 'Ống nước', parentId: 'cat3', icon: 'Pipe', color: '#06B6D4' },
      { id: 'cat3-3', name: 'Van khóa', parentId: 'cat3', icon: 'Settings', color: '#06B6D4' },
      { id: 'cat3-4', name: 'Phụ kiện nước', parentId: 'cat3', icon: 'Wrench', color: '#06B6D4' },
    ],
  },
  {
    id: 'cat4',
    name: 'Vật tư gỗ',
    description: 'Gỗ công nghiệp, gỗ tự nhiên',
    icon: 'TreePine',
    color: '#84CC16',
    children: [
      { id: 'cat4-1', name: 'Gỗ công nghiệp', parentId: 'cat4', icon: 'Layers', color: '#84CC16' },
      { id: 'cat4-2', name: 'Gỗ tự nhiên', parentId: 'cat4', icon: 'TreePine', color: '#84CC16' },
      { id: 'cat4-3', name: 'Ván ép', parentId: 'cat4', icon: 'Square', color: '#84CC16' },
    ],
  },
  {
    id: 'cat5',
    name: 'Sơn & phụ kiện',
    description: 'Sơn nước, sơn dầu, chất chống thấm',
    icon: 'Paintbrush',
    color: '#EF4444',
    children: [
      { id: 'cat5-1', name: 'Sơn nước', parentId: 'cat5', icon: 'Paintbrush', color: '#EF4444' },
      { id: 'cat5-2', name: 'Sơn dầu', parentId: 'cat5', icon: 'Paintbrush2', color: '#EF4444' },
      { id: 'cat5-3', name: 'Chất chống thấm', parentId: 'cat5', icon: 'Shield', color: '#EF4444' },
      { id: 'cat5-4', name: 'Phụ kiện sơn', parentId: 'cat5', icon: 'Palette', color: '#EF4444' },
    ],
  },
];

// Generate materials with realistic Vietnamese names
const materials: Material[] = [
  // Xi măng (10 items)
  { id: 'm1', name: 'Xi măng PCB40', code: 'XM001', categoryId: 'cat1-1', categoryName: 'Xi măng', unit: 'bao', unitPrice: 100000, stock: 500, minStock: 100, supplier: 'Xi măng Hoàng Thạch' },
  { id: 'm2', name: 'Xi măng PC40', code: 'XM002', categoryId: 'cat1-1', categoryName: 'Xi măng', unit: 'bao', unitPrice: 95000, stock: 600, minStock: 100, supplier: 'Xi măng Hoàng Thạch' },
  { id: 'm3', name: 'Xi măng Holcim', code: 'XM003', categoryId: 'cat1-1', categoryName: 'Xi măng', unit: 'bao', unitPrice: 110000, stock: 400, minStock: 100, supplier: 'Holcim' },
  { id: 'm4', name: 'Xi măng Vicem', code: 'XM004', categoryId: 'cat1-1', categoryName: 'Xi măng', unit: 'bao', unitPrice: 98000, stock: 450, minStock: 100, supplier: 'Vicem' },
  { id: 'm5', name: 'Xi măng INSEE', code: 'XM005', categoryId: 'cat1-1', categoryName: 'Xi măng', unit: 'bao', unitPrice: 105000, stock: 550, minStock: 100, supplier: 'INSEE' },
  { id: 'm6', name: 'Xi măng Nghi Sơn', code: 'XM006', categoryId: 'cat1-1', categoryName: 'Xi măng', unit: 'bao', unitPrice: 92000, stock: 700, minStock: 150, supplier: 'Nghi Sơn' },
  { id: 'm7', name: 'Xi măng Tân Thắng', code: 'XM007', categoryId: 'cat1-1', categoryName: 'Xi măng', unit: 'bao', unitPrice: 93000, stock: 650, minStock: 150, supplier: 'Tân Thắng' },
  { id: 'm8', name: 'Xi măng Hà Tiên 1', code: 'XM008', categoryId: 'cat1-1', categoryName: 'Xi măng', unit: 'bao', unitPrice: 102000, stock: 500, minStock: 100, supplier: 'Hà Tiên 1' },
  { id: 'm9', name: 'Xi măng Long Sơn', code: 'XM009', categoryId: 'cat1-1', categoryName: 'Xi măng', unit: 'bao', unitPrice: 97000, stock: 480, minStock: 100, supplier: 'Long Sơn' },
  { id: 'm10', name: 'Xi măng Tây Đô', code: 'XM010', categoryId: 'cat1-1', categoryName: 'Xi măng', unit: 'bao', unitPrice: 94000, stock: 520, minStock: 100, supplier: 'Tây Đô' },

  // Cát đá (15 items)
  { id: 'm11', name: 'Cát vàng xây dựng', code: 'CD001', categoryId: 'cat1-2', categoryName: 'Cát đá', unit: 'm3', unitPrice: 350000, stock: 100, minStock: 20, supplier: 'Vật liệu xây dựng Thành Phát' },
  { id: 'm12', name: 'Cát trắng', code: 'CD002', categoryId: 'cat1-2', categoryName: 'Cát đá', unit: 'm3', unitPrice: 400000, stock: 80, minStock: 20, supplier: 'Vật liệu xây dựng Thành Phát' },
  { id: 'm13', name: 'Cát đen', code: 'CD003', categoryId: 'cat1-2', categoryName: 'Cát đá', unit: 'm3', unitPrice: 320000, stock: 90, minStock: 20, supplier: 'Vật liệu xây dựng Thành Phát' },
  { id: 'm14', name: 'Đá 1x2', code: 'CD004', categoryId: 'cat1-2', categoryName: 'Cát đá', unit: 'm3', unitPrice: 380000, stock: 110, minStock: 25, supplier: 'Đá Hưng Thịnh' },
  { id: 'm15', name: 'Đá 4x6', code: 'CD005', categoryId: 'cat1-2', categoryName: 'Cát đá', unit: 'm3', unitPrice: 350000, stock: 120, minStock: 25, supplier: 'Đá Hưng Thịnh' },
  { id: 'm16', name: 'Đá mi', code: 'CD006', categoryId: 'cat1-2', categoryName: 'Cát đá', unit: 'm3', unitPrice: 330000, stock: 95, minStock: 20, supplier: 'Đá Hưng Thịnh' },
  { id: 'm17', name: 'Sỏi đen', code: 'CD007', categoryId: 'cat1-2', categoryName: 'Cát đá', unit: 'm3', unitPrice: 360000, stock: 75, minStock: 20, supplier: 'Đá Hưng Thịnh' },
  { id: 'm18', name: 'Sỏi trắng', code: 'CD008', categoryId: 'cat1-2', categoryName: 'Cát đá', unit: 'm3', unitPrice: 420000, stock: 60, minStock: 15, supplier: 'Đá Hưng Thịnh' },
  { id: 'm19', name: 'Đá dăm', code: 'CD009', categoryId: 'cat1-2', categoryName: 'Cát đá', unit: 'm3', unitPrice: 340000, stock: 85, minStock: 20, supplier: 'Đá Hưng Thịnh' },
  { id: 'm20', name: 'Cát bê tông', code: 'CD010', categoryId: 'cat1-2', categoryName: 'Cát đá', unit: 'm3', unitPrice: 380000, stock: 100, minStock: 25, supplier: 'Vật liệu xây dựng Thành Phát' },
  { id: 'm21', name: 'Cát san lấp', code: 'CD011', categoryId: 'cat1-2', categoryName: 'Cát đá', unit: 'm3', unitPrice: 300000, stock: 150, minStock: 30, supplier: 'Vật liệu xây dựng Thành Phát' },
  { id: 'm22', name: 'Đá xanh', code: 'CD012', categoryId: 'cat1-2', categoryName: 'Cát đá', unit: 'm3', unitPrice: 370000, stock: 70, minStock: 20, supplier: 'Đá Hưng Thịnh' },
  { id: 'm23', name: 'Đá hộc', code: 'CD013', categoryId: 'cat1-2', categoryName: 'Cát đá', unit: 'm3', unitPrice: 450000, stock: 50, minStock: 15, supplier: 'Đá Hưng Thịnh' },
  { id: 'm24', name: 'Cát rửa', code: 'CD014', categoryId: 'cat1-2', categoryName: 'Cát đá', unit: 'm3', unitPrice: 410000, stock: 65, minStock: 20, supplier: 'Vật liệu xây dựng Thành Phát' },
  { id: 'm25', name: 'Đá ốp lát', code: 'CD015', categoryId: 'cat1-2', categoryName: 'Cát đá', unit: 'm2', unitPrice: 250000, stock: 200, minStock: 40, supplier: 'Đá Hưng Thịnh' },

  // Gạch ngói (25 items)
  { id: 'm26', name: 'Gạch ốp lát 60x60 Đồng Tâm', code: 'GN001', categoryId: 'cat1-3', categoryName: 'Gạch ngói', unit: 'm2', unitPrice: 180000, stock: 500, minStock: 100, supplier: 'Gạch Đồng Tâm' },
  { id: 'm27', name: 'Gạch ốp lát 80x80 Đồng Tâm', code: 'GN002', categoryId: 'cat1-3', categoryName: 'Gạch ngói', unit: 'm2', unitPrice: 250000, stock: 400, minStock: 80, supplier: 'Gạch Đồng Tâm' },
  { id: 'm28', name: 'Gạch men 30x60 Prime', code: 'GN003', categoryId: 'cat1-3', categoryName: 'Gạch ngói', unit: 'm2', unitPrice: 120000, stock: 600, minStock: 120, supplier: 'Prime Group' },
  { id: 'm29', name: 'Gạch granite 60x60 Viglacera', code: 'GN004', categoryId: 'cat1-3', categoryName: 'Gạch ngói', unit: 'm2', unitPrice: 200000, stock: 450, minStock: 90, supplier: 'Viglacera' },
  { id: 'm30', name: 'Gạch Terrazzo 60x60', code: 'GN005', categoryId: 'cat1-3', categoryName: 'Gạch ngói', unit: 'm2', unitPrice: 350000, stock: 300, minStock: 60, supplier: 'Terrazzo VN' },
];

// Continue generating materials programmatically for other categories
const generateMaterials = (start: number, category: string, categoryName: string, count: number, unitType: string, priceRange: [number, number]): Material[] => {
  const result: Material[] = [];
  for (let i = 0; i < count; i++) {
    const id = start + i;
    result.push({
      id: `m${id}`,
      name: `${categoryName} ${i + 1}`,
      code: `${category}${String(i + 1).padStart(3, '0')}`,
      categoryId: category,
      categoryName: categoryName,
      unit: unitType,
      unitPrice: Math.floor(Math.random() * (priceRange[1] - priceRange[0]) + priceRange[0]),
      stock: Math.floor(Math.random() * 500) + 50,
      minStock: Math.floor(Math.random() * 50) + 20,
      supplier: `Nhà cung cấp ${categoryName}`,
    });
  }
  return result;
};

// Generate remaining materials
const electricMaterials = generateMaterials(31, 'cat2-1', 'Đèn LED', 30, 'cái', [150000, 2000000]);
const socketMaterials = generateMaterials(61, 'cat2-2', 'Ổ cắm', 20, 'cái', [30000, 500000]);
const cableMaterials = generateMaterials(81, 'cat2-3', 'Dây điện', 25, 'm', [5000, 50000]);
const sanitaryMaterials = generateMaterials(106, 'cat3-1', 'Thiết bị VS', 30, 'bộ', [500000, 15000000]);
const pipeMaterials = generateMaterials(136, 'cat3-2', 'Ống nước', 20, 'm', [20000, 200000]);
const woodMaterials = generateMaterials(156, 'cat4-1', 'Gỗ công nghiệp', 30, 'm2', [200000, 800000]);
const paintMaterials = generateMaterials(186, 'cat5-1', 'Sơn', 20, 'L', [80000, 500000]);

export const mockMaterials: Material[] = [
  ...materials,
  ...electricMaterials,
  ...socketMaterials,
  ...cableMaterials,
  ...sanitaryMaterials,
  ...pipeMaterials,
  ...woodMaterials,
  ...paintMaterials,
];
