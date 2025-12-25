import { Notification } from '@/types/common';

export const mockNotifications: Notification[] = [
  {
    id: 'n1',
    type: 'warning',
    title: 'Vượt ngân sách',
    message: 'Dự án Vinhomes Landmark - Căn A1 đã vượt 96% ngân sách',
    timestamp: new Date('2024-12-24T10:30:00'),
    read: false,
    link: '/admin/projects/1',
  },
  {
    id: 'n2',
    type: 'info',
    title: 'Yêu cầu vật tư mới',
    message: 'PM Nguyễn Văn An yêu cầu cấp 50 bao xi măng cho dự án',
    timestamp: new Date('2024-12-24T09:15:00'),
    read: false,
    link: '/admin/projects/1',
  },
  {
    id: 'n3',
    type: 'success',
    title: 'Hoàn thành giai đoạn',
    message: 'Dự án The Sun Avenue đã hoàn thành giai đoạn hoàn thiện',
    timestamp: new Date('2024-12-23T16:45:00'),
    read: false,
    link: '/admin/projects/3',
  },
  {
    id: 'n4',
    type: 'error',
    title: 'Trễ tiến độ',
    message: 'Dự án Gateway Thảo Điền bị tạm dừng do thiếu vật tư',
    timestamp: new Date('2024-12-23T14:20:00'),
    read: true,
    link: '/admin/projects/7',
  },
  {
    id: 'n5',
    type: 'info',
    title: 'Nhân viên mới',
    message: 'Foreman Trần Văn Khánh đã tham gia dự án Imperia An Phú',
    timestamp: new Date('2024-12-23T11:00:00'),
    read: true,
    link: '/admin/staff',
  },
  {
    id: 'n6',
    type: 'warning',
    title: 'Vật tư sắp hết',
    message: 'Xi măng PCB40 còn 100 bao, dưới mức tối thiểu',
    timestamp: new Date('2024-12-22T15:30:00'),
    read: true,
    link: '/admin/settings',
  },
  {
    id: 'n7',
    type: 'success',
    title: 'Dự án hoàn thành',
    message: 'Saigon Pearl - Căn E5 đã hoàn thành và bàn giao',
    timestamp: new Date('2024-12-22T10:00:00'),
    read: true,
    link: '/admin/projects/5',
  },
  {
    id: 'n8',
    type: 'info',
    title: 'Cập nhật tiến độ',
    message: 'Dự án Estella Heights đạt 65% tiến độ',
    timestamp: new Date('2024-12-21T16:00:00'),
    read: true,
    link: '/admin/projects/4',
  },
  {
    id: 'n9',
    type: 'warning',
    title: 'Kiểm tra chất lượng',
    message: 'Cần kiểm tra chất lượng công việc tại Masteri Thảo Điền',
    timestamp: new Date('2024-12-21T13:45:00'),
    read: true,
    link: '/admin/projects/2',
  },
  {
    id: 'n10',
    type: 'info',
    title: 'Đặt hàng vật tư',
    message: 'Đơn hàng 200m2 gạch ốp lát đã được đặt',
    timestamp: new Date('2024-12-21T09:30:00'),
    read: true,
  },
];

// Generate more notifications
const generateNotifications = (start: number, count: number): Notification[] => {
  const types: ('info' | 'warning' | 'success' | 'error')[] = ['info', 'warning', 'success', 'error'];
  const titles = [
    'Cập nhật dự án',
    'Yêu cầu vật tư',
    'Hoàn thành công việc',
    'Kiểm tra tiến độ',
    'Thay đổi nhân sự',
    'Phê duyệt ngân sách',
    'Báo cáo tuần',
    'Họp dự án',
    'Bảo trì thiết bị',
    'Thanh toán hóa đơn',
  ];
  
  const result: Notification[] = [];
  for (let i = 0; i < count; i++) {
    const daysAgo = Math.floor(i / 5);
    result.push({
      id: `n${start + i}`,
      type: types[i % types.length],
      title: titles[i % titles.length],
      message: `Thông báo số ${start + i} về hoạt động dự án và quản lý`,
      timestamp: new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000 - (i % 5) * 60 * 60 * 1000),
      read: i > 10,
    });
  }
  return result;
};

export const allMockNotifications = [...mockNotifications, ...generateNotifications(11, 40)];
