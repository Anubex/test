import { useTranslation } from 'react-i18next'

export interface SideItem {
  title: string
  path: string
}

const useSideItems = (): SideItem[] => {
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

export default useSideItems
