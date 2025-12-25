import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Project } from '@/types/project';
import { StaffMember } from '@/types/staff';
import { Material, MaterialCategory, Unit } from '@/types/material';
import { Notification } from '@/types/common';
import { allMockProjects } from '@/data/mockProjects';
import { allMockStaff } from '@/data/mockStaff';
import { mockMaterials, mockMaterialCategories, mockUnits } from '@/data/mockMaterials';
import { allMockNotifications } from '@/data/mockNotifications';

interface DataContextType {
  // Projects
  projects: Project[];
  getProject: (id: string) => Project | undefined;
  addProject: (project: Project) => void;
  updateProject: (id: string, project: Partial<Project>) => void;
  deleteProject: (id: string) => void;

  // Staff
  staff: StaffMember[];
  getStaffMember: (id: string) => StaffMember | undefined;
  addStaffMember: (staff: StaffMember) => void;
  updateStaffMember: (id: string, staff: Partial<StaffMember>) => void;
  deleteStaffMember: (id: string) => void;

  // Materials
  materials: Material[];
  getMaterial: (id: string) => Material | undefined;
  addMaterial: (material: Material) => void;
  updateMaterial: (id: string, material: Partial<Material>) => void;
  deleteMaterial: (id: string) => void;

  // Material Categories
  materialCategories: MaterialCategory[];
  addMaterialCategory: (category: MaterialCategory) => void;
  updateMaterialCategory: (id: string, category: Partial<MaterialCategory>) => void;
  deleteMaterialCategory: (id: string) => void;

  // Units
  units: Unit[];
  addUnit: (unit: Unit) => void;
  updateUnit: (id: string, unit: Partial<Unit>) => void;
  deleteUnit: (id: string) => void;

  // Notifications
  notifications: Notification[];
  markNotificationAsRead: (id: string) => void;
  markAllNotificationsAsRead: () => void;
}

const DataContext = createContext<DataContextType | undefined>(undefined);

const STORAGE_KEYS = {
  PROJECTS: 'interior_projects',
  STAFF: 'interior_staff',
  MATERIALS: 'interior_materials',
  CATEGORIES: 'interior_categories',
  UNITS: 'interior_units',
  NOTIFICATIONS: 'interior_notifications',
};

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Initialize state from localStorage or use mock data
  const [projects, setProjects] = useState<Project[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.PROJECTS);
    return stored ? JSON.parse(stored) : allMockProjects;
  });

  const [staff, setStaff] = useState<StaffMember[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.STAFF);
    return stored ? JSON.parse(stored) : allMockStaff;
  });

  const [materials, setMaterials] = useState<Material[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.MATERIALS);
    return stored ? JSON.parse(stored) : mockMaterials;
  });

  const [materialCategories, setMaterialCategories] = useState<MaterialCategory[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.CATEGORIES);
    return stored ? JSON.parse(stored) : mockMaterialCategories;
  });

  const [units, setUnits] = useState<Unit[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.UNITS);
    return stored ? JSON.parse(stored) : mockUnits;
  });

  const [notifications, setNotifications] = useState<Notification[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.NOTIFICATIONS);
    return stored ? JSON.parse(stored) : allMockNotifications;
  });

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.STAFF, JSON.stringify(staff));
  }, [staff]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.MATERIALS, JSON.stringify(materials));
  }, [materials]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.CATEGORIES, JSON.stringify(materialCategories));
  }, [materialCategories]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.UNITS, JSON.stringify(units));
  }, [units]);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(notifications));
  }, [notifications]);

  // Project operations
  const getProject = (id: string) => projects.find((p) => p.id === id);
  const addProject = (project: Project) => setProjects([...projects, project]);
  const updateProject = (id: string, update: Partial<Project>) => {
    setProjects(projects.map((p) => (p.id === id ? { ...p, ...update } : p)));
  };
  const deleteProject = (id: string) => setProjects(projects.filter((p) => p.id !== id));

  // Staff operations
  const getStaffMember = (id: string) => staff.find((s) => s.id === id);
  const addStaffMember = (member: StaffMember) => setStaff([...staff, member]);
  const updateStaffMember = (id: string, update: Partial<StaffMember>) => {
    setStaff(staff.map((s) => (s.id === id ? { ...s, ...update } : s)));
  };
  const deleteStaffMember = (id: string) => setStaff(staff.filter((s) => s.id !== id));

  // Material operations
  const getMaterial = (id: string) => materials.find((m) => m.id === id);
  const addMaterial = (material: Material) => setMaterials([...materials, material]);
  const updateMaterial = (id: string, update: Partial<Material>) => {
    setMaterials(materials.map((m) => (m.id === id ? { ...m, ...update } : m)));
  };
  const deleteMaterial = (id: string) => setMaterials(materials.filter((m) => m.id !== id));

  // Material Category operations
  const addMaterialCategory = (category: MaterialCategory) =>
    setMaterialCategories([...materialCategories, category]);
  const updateMaterialCategory = (id: string, update: Partial<MaterialCategory>) => {
    setMaterialCategories(materialCategories.map((c) => (c.id === id ? { ...c, ...update } : c)));
  };
  const deleteMaterialCategory = (id: string) =>
    setMaterialCategories(materialCategories.filter((c) => c.id !== id));

  // Unit operations
  const addUnit = (unit: Unit) => setUnits([...units, unit]);
  const updateUnit = (id: string, update: Partial<Unit>) => {
    setUnits(units.map((u) => (u.id === id ? { ...u, ...update } : u)));
  };
  const deleteUnit = (id: string) => setUnits(units.filter((u) => u.id !== id));

  // Notification operations
  const markNotificationAsRead = (id: string) => {
    setNotifications(notifications.map((n) => (n.id === id ? { ...n, read: true } : n)));
  };

  const markAllNotificationsAsRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, read: true })));
  };

  return (
    <DataContext.Provider
      value={{
        projects,
        getProject,
        addProject,
        updateProject,
        deleteProject,
        staff,
        getStaffMember,
        addStaffMember,
        updateStaffMember,
        deleteStaffMember,
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
        notifications,
        markNotificationAsRead,
        markAllNotificationsAsRead,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error('useDataContext must be used within a DataProvider');
  }
  return context;
};
