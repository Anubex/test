import { useTranslation } from 'react-i18next'

export interface MenuItem {
  title: string
  path: string
}

const useMenuItems = (): MenuItem[] => {
  const { t } = useTranslation()

  return [
    {
      title: t('header.top-up'),
      path: '/home',
    },
    {
      title: t('header.package'),
      path: '/package',
    },
    {
      title: t('header.register-sim'),
      path: '/activate-sim',
    },
    {
      title: "test",
      path: '/test',
    },
    // {
    //   title: 'E-Service',
    //   path: '/e-service',
    // },
  ]
}

export default useMenuItems
