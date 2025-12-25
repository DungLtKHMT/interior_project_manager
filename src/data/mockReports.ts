// Mock reports data for 12 months
export interface MonthlyReport {
  month: string;
  revenue: number;
  cost: number;
  profit: number;
  projectsCompleted: number;
  projectsInProgress: number;
}

export const mockMonthlyReports: MonthlyReport[] = [
  {
    month: 'Tháng 1',
    revenue: 450000000,
    cost: 320000000,
    profit: 130000000,
    projectsCompleted: 2,
    projectsInProgress: 8,
  },
  {
    month: 'Tháng 2',
    revenue: 520000000,
    cost: 380000000,
    profit: 140000000,
    projectsCompleted: 3,
    projectsInProgress: 9,
  },
  {
    month: 'Tháng 3',
    revenue: 680000000,
    cost: 490000000,
    profit: 190000000,
    projectsCompleted: 4,
    projectsInProgress: 11,
  },
  {
    month: 'Tháng 4',
    revenue: 750000000,
    cost: 550000000,
    profit: 200000000,
    projectsCompleted: 3,
    projectsInProgress: 13,
  },
  {
    month: 'Tháng 5',
    revenue: 820000000,
    cost: 610000000,
    profit: 210000000,
    projectsCompleted: 5,
    projectsInProgress: 14,
  },
  {
    month: 'Tháng 6',
    revenue: 890000000,
    cost: 660000000,
    profit: 230000000,
    projectsCompleted: 4,
    projectsInProgress: 15,
  },
  {
    month: 'Tháng 7',
    revenue: 920000000,
    cost: 680000000,
    profit: 240000000,
    projectsCompleted: 6,
    projectsInProgress: 14,
  },
  {
    month: 'Tháng 8',
    revenue: 950000000,
    cost: 710000000,
    profit: 240000000,
    projectsCompleted: 5,
    projectsInProgress: 15,
  },
  {
    month: 'Tháng 9',
    revenue: 1020000000,
    cost: 760000000,
    profit: 260000000,
    projectsCompleted: 7,
    projectsInProgress: 16,
  },
  {
    month: 'Tháng 10',
    revenue: 1100000000,
    cost: 820000000,
    profit: 280000000,
    projectsCompleted: 6,
    projectsInProgress: 17,
  },
  {
    month: 'Tháng 11',
    revenue: 1150000000,
    cost: 860000000,
    profit: 290000000,
    projectsCompleted: 8,
    projectsInProgress: 16,
  },
  {
    month: 'Tháng 12',
    revenue: 1200000000,
    cost: 900000000,
    profit: 300000000,
    projectsCompleted: 7,
    projectsInProgress: 15,
  },
];

export interface ProjectReport {
  projectId: string;
  projectName: string;
  revenue: number;
  cost: number;
  profit: number;
  profitMargin: number;
  status: 'completed' | 'in_progress';
}

export const mockProjectReports: ProjectReport[] = [
  {
    projectId: '1',
    projectName: 'Vinhomes Landmark - Căn A1',
    revenue: 150000000,
    cost: 145000000,
    profit: 5000000,
    profitMargin: 3.3,
    status: 'in_progress',
  },
  {
    projectId: '2',
    projectName: 'Masteri Thảo Điền - Căn B3',
    revenue: 120000000,
    cost: 98000000,
    profit: 22000000,
    profitMargin: 18.3,
    status: 'in_progress',
  },
  {
    projectId: '3',
    projectName: 'The Sun Avenue - Căn C2',
    revenue: 180000000,
    cost: 175000000,
    profit: 5000000,
    profitMargin: 2.8,
    status: 'in_progress',
  },
  {
    projectId: '4',
    projectName: 'Estella Heights - Căn D1',
    revenue: 200000000,
    cost: 140000000,
    profit: 60000000,
    profitMargin: 30.0,
    status: 'in_progress',
  },
  {
    projectId: '5',
    projectName: 'Saigon Pearl - Căn E5',
    revenue: 160000000,
    cost: 158000000,
    profit: 2000000,
    profitMargin: 1.3,
    status: 'completed',
  },
  {
    projectId: '6',
    projectName: 'Diamond Island - Căn F2',
    revenue: 140000000,
    cost: 70000000,
    profit: 70000000,
    profitMargin: 50.0,
    status: 'in_progress',
  },
  {
    projectId: '7',
    projectName: 'Gateway Thảo Điền - Căn G3',
    revenue: 130000000,
    cost: 50000000,
    profit: 80000000,
    profitMargin: 61.5,
    status: 'in_progress',
  },
  {
    projectId: '8',
    projectName: 'Imperia An Phú - Căn H1',
    revenue: 175000000,
    cost: 165000000,
    profit: 10000000,
    profitMargin: 5.7,
    status: 'in_progress',
  },
  {
    projectId: '9',
    projectName: 'Sala Sadora - Căn I4',
    revenue: 190000000,
    cost: 187000000,
    profit: 3000000,
    profitMargin: 1.6,
    status: 'completed',
  },
  {
    projectId: '10',
    projectName: 'Vinhomes Central Park - Căn J5',
    revenue: 220000000,
    cost: 168000000,
    profit: 52000000,
    profitMargin: 23.6,
    status: 'in_progress',
  },
];
