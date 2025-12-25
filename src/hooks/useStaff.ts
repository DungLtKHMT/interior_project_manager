import { useMemo } from 'react';
import { useDataContext } from '@/context/DataContext';
import { StaffMember, StaffStats } from '@/types/staff';
import { filterBySearch, sortBy } from '@/utils/helpers';

export const useStaff = () => {
  const { staff, getStaffMember, addStaffMember, updateStaffMember, deleteStaffMember } =
    useDataContext();

  const staffStats: StaffStats = useMemo(() => {
    const active = staff.filter((s) => s.status === 'active').length;
    const inactive = staff.filter((s) => s.status === 'inactive').length;

    const byRole = {
      admin: staff.filter((s) => s.role === 'admin').length,
      pm: staff.filter((s) => s.role === 'pm').length,
      foreman: staff.filter((s) => s.role === 'foreman').length,
      client: staff.filter((s) => s.role === 'client').length,
    };

    return {
      total: staff.length,
      active,
      inactive,
      byRole,
    };
  }, [staff]);

  const filterStaff = (searchTerm: string = '', role?: string, status?: string): StaffMember[] => {
    let filtered = [...staff];

    if (searchTerm) {
      filtered = filterBySearch(filtered, searchTerm, ['name', 'email', 'phone']);
    }

    if (role && role !== 'all') {
      filtered = filtered.filter((s) => s.role === role);
    }

    if (status && status !== 'all') {
      filtered = filtered.filter((s) => s.status === status);
    }

    return filtered;
  };

  const sortStaff = (
    staff: StaffMember[],
    sortKey: keyof StaffMember,
    direction: 'asc' | 'desc' = 'asc'
  ): StaffMember[] => {
    return sortBy(staff, sortKey, direction);
  };

  const getPMWorkload = (): StaffMember[] => {
    return staff
      .filter((s) => s.role === 'pm')
      .sort((a, b) => (b.workload || 0) - (a.workload || 0));
  };

  return {
    staff,
    staffStats,
    getStaffMember,
    addStaffMember,
    updateStaffMember,
    deleteStaffMember,
    filterStaff,
    sortStaff,
    getPMWorkload,
  };
};
