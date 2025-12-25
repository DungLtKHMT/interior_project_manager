import { useMemo } from 'react';
import { useDataContext } from '@/context/DataContext';
import { Project, ProjectStats } from '@/types/project';
import { filterBySearch, sortBy } from '@/utils/helpers';

export const useProjects = () => {
  const { projects, getProject, addProject, updateProject, deleteProject } = useDataContext();

  const projectStats: ProjectStats = useMemo(() => {
    const active = projects.filter((p) => p.status === 'active').length;
    const completed = projects.filter((p) => p.status === 'completed').length;
    const paused = projects.filter((p) => p.status === 'paused').length;

    return {
      total: projects.length,
      inProgress: active,
      completed,
      paused,
    };
  }, [projects]);

  const filterProjects = (
    searchTerm: string = '',
    status?: string,
    priority?: string
  ): Project[] => {
    let filtered = [...projects];

    if (searchTerm) {
      filtered = filterBySearch(filtered, searchTerm, ['name', 'code', 'client']);
    }

    if (status && status !== 'all') {
      filtered = filtered.filter((p) => p.status === status);
    }

    if (priority && priority !== 'all') {
      filtered = filtered.filter((p) => p.priority === priority);
    }

    return filtered;
  };

  const sortProjects = (
    projects: Project[],
    sortKey: keyof Project,
    direction: 'asc' | 'desc' = 'asc'
  ): Project[] => {
    return sortBy(projects, sortKey, direction);
  };

  const getProjectsOverBudget = (): Project[] => {
    return projects
      .filter((p) => p.spent > p.budget)
      .sort((a, b) => b.spent / b.budget - a.spent / a.budget);
  };

  const getProjectsByPM = (pmId: string): Project[] => {
    return projects.filter((p) => p.pm.id === pmId);
  };

  return {
    projects,
    projectStats,
    getProject,
    addProject,
    updateProject,
    deleteProject,
    filterProjects,
    sortProjects,
    getProjectsOverBudget,
    getProjectsByPM,
  };
};
