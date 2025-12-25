import { Activity } from '@/types/common';

export const mockActivities: Activity[] = [
  {
    id: 'act1',
    type: 'status_change',
    title: 'Thay đổi trạng thái dự án',
    description: 'Thay đổi trạng thái từ "Đang tiến hành" sang "Tạm dừng"',
    userId: 'pm5',
    userName: 'Vũ Văn Hoàng',
    timestamp: new Date('2024-12-24T14:30:00'),
    metadata: { from: 'active', to: 'paused' },
  },
  {
    id: 'act2',
    type: 'update',
    title: 'Cập nhật tiến độ',
    description: 'Cập nhật tiến độ dự án lên 85%',
    userId: 'pm1',
    userName: 'Nguyễn Văn An',
    timestamp: new Date('2024-12-24T11:15:00'),
    metadata: { progress: 85 },
  },
  {
    id: 'act3',
    type: 'budget_change',
    title: 'Điều chỉnh ngân sách',
    description: 'Tăng ngân sách thêm 5,000,000 VND cho hạng mục hoàn thiện',
    userId: 'a1',
    userName: 'Admin Nguyễn Văn Anh',
    timestamp: new Date('2024-12-24T09:45:00'),
    metadata: { amount: 5000000, category: 'Hoàn thiện' },
  },
  {
    id: 'act4',
    type: 'comment',
    title: 'Thêm ghi chú',
    description: 'Cần kiểm tra chất lượng gạch ốp lát trước khi thi công',
    userId: 'f1',
    userName: 'Lê Văn Cường',
    timestamp: new Date('2024-12-23T16:20:00'),
  },
  {
    id: 'act5',
    type: 'file_upload',
    title: 'Tải lên hình ảnh',
    description: 'Tải lên 5 hình ảnh tiến độ thi công',
    userId: 'f3',
    userName: 'Hoàng Văn Em',
    timestamp: new Date('2024-12-23T14:00:00'),
    metadata: { fileCount: 5 },
  },
  {
    id: 'act6',
    type: 'update',
    title: 'Cập nhật vật tư',
    description: 'Sử dụng 50 bao xi măng PCB40',
    userId: 'f2',
    userName: 'Phạm Văn Đạt',
    timestamp: new Date('2024-12-23T10:30:00'),
    metadata: { material: 'Xi măng PCB40', quantity: 50 },
  },
  {
    id: 'act7',
    type: 'status_change',
    title: 'Hoàn thành giai đoạn',
    description: 'Hoàn thành giai đoạn xây thô',
    userId: 'pm2',
    userName: 'Trần Thị Bích',
    timestamp: new Date('2024-12-22T15:45:00'),
    metadata: { phase: 'Xây thô' },
  },
  {
    id: 'act8',
    type: 'comment',
    title: 'Phản hồi từ khách hàng',
    description: 'Khách hàng yêu cầu thay đổi màu sơn phòng khách',
    userId: 'c1',
    userName: 'Nguyễn Thị Mai',
    timestamp: new Date('2024-12-22T11:20:00'),
  },
  {
    id: 'act9',
    type: 'update',
    title: 'Thêm nhân sự',
    description: 'Thêm 2 thợ vào đội thi công',
    userId: 'pm3',
    userName: 'Lê Văn Chiến',
    timestamp: new Date('2024-12-21T14:00:00'),
    metadata: { count: 2 },
  },
  {
    id: 'act10',
    type: 'budget_change',
    title: 'Chi phí phát sinh',
    description: 'Phát sinh chi phí 2,000,000 VND cho sửa chữa',
    userId: 'f4',
    userName: 'Vũ Văn Phát',
    timestamp: new Date('2024-12-21T09:15:00'),
    metadata: { amount: 2000000, reason: 'Sửa chữa' },
  },
];

// Generate more activities
const generateActivities = (start: number, count: number): Activity[] => {
  const types: Activity['type'][] = ['update', 'comment', 'status_change', 'file_upload', 'budget_change'];
  const titles = [
    'Cập nhật tiến độ',
    'Thêm ghi chú',
    'Thay đổi trạng thái',
    'Tải lên tài liệu',
    'Điều chỉnh ngân sách',
  ];
  const descriptions = [
    'Cập nhật thông tin dự án',
    'Thêm ghi chú về công việc',
    'Thay đổi trạng thái công việc',
    'Tải lên tài liệu mới',
    'Điều chỉnh chi phí dự án',
  ];
  
  const result: Activity[] = [];
  for (let i = 0; i < count; i++) {
    const daysAgo = Math.floor(i / 3);
    result.push({
      id: `act${start + i}`,
      type: types[i % types.length],
      title: titles[i % titles.length],
      description: descriptions[i % descriptions.length],
      userId: `u${(i % 10) + 1}`,
      userName: `Người dùng ${(i % 10) + 1}`,
      timestamp: new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000 - (i % 3) * 60 * 60 * 1000),
    });
  }
  return result;
};

export const allMockActivities = [...mockActivities, ...generateActivities(11, 20)];
