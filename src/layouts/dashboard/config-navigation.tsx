import i18n from '@/i18n'
import { TbLayoutDashboard, TbUserShield, TbUsersGroup } from 'react-icons/tb'

// ----------------------------------------------------------------------

const navConfig = [
  {
    title: i18n.t('menu.dashboard'),
    path: '/dashboard/app',
    icon: <TbLayoutDashboard size={24} />,
    permission: '',
  },
  {
    title: i18n.t('menu.customer'),
    path: '/dashboard/customer',
    icon: <TbUsersGroup size={24} />,
    permission: 'Customer',
  },
  {
    title: i18n.t('menu.user'),
    path: '/dashboard/user',
    icon: <TbUserShield size={24} />,
    permission: 'User',
  },
]

export default navConfig
