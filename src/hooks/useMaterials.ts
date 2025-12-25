import { useMemo } from 'react';
import { useDataContext } from '@/context/DataContext';
import { Material } from '@/types/material';
import { filterBySearch, sortBy } from '@/utils/helpers';

export const useMaterials = () => {
  const {
    materials,
    getMaterial,
    addMaterial,
    updateMaterial,
    deleteMaterial,
    materialCategories,
    addMaterialCategory,
    updateMaterialCategory,
    deleteMaterialCategory,
    units,
    addUnit,
    updateUnit,
    deleteUnit,
  } = useDataContext();

  const lowStockMaterials = useMemo(() => {
    return materials.filter((m) => m.stock <= m.minStock);
  }, [materials]);

  const filterMaterials = (
    searchTerm: string = '',
    categoryId?: string
  ): Material[] => {
    let filtered = [...materials];

    if (searchTerm) {
      filtered = filterBySearch(filtered, searchTerm, ['name', 'code', 'categoryName']);
    }

    if (categoryId && categoryId !== 'all') {
      filtered = filtered.filter((m) => m.categoryId === categoryId);
    }

    return filtered;
  };

  const sortMaterials = (
    materials: Material[],
    sortKey: keyof Material,
    direction: 'asc' | 'desc' = 'asc'
  ): Material[] => {
    return sortBy(materials, sortKey, direction);
  };

  const getMaterialsByCategory = (categoryId: string): Material[] => {
    return materials.filter((m) => m.categoryId === categoryId);
  };

  return {
    materials,
    getMaterial,
    addMaterial,
    updateMaterial,
    deleteMaterial,
    materialCategories,
    addMaterialCategory,
    updateMaterialCategory,
    deleteMaterialCategory,
    units,
    addUnit,
    updateUnit,
    deleteUnit,
    lowStockMaterials,
    filterMaterials,
    sortMaterials,
    getMaterialsByCategory,
  };
};
