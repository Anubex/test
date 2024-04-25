import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import useMenuItems from './config-menu'

interface LangT {
  value: string
  label: string
  icon: string
}

export interface ItemT {
  path: string
  title: string
}

export default function Header() {
  const { t, i18n } = useTranslation()
  const menuItems = useMenuItems()
  const [openMenu, setOpenMenu] = useState(false)
  const [openLang, setOpenLang] = useState(false)

  const LANGS: LangT[] = useMemo(
    () => [
      {
        value: 'th',
        label: t('header.language.thai'),
        icon: '/assets/images/th-flag.svg',
      },
      {
        value: 'en',
        label: t('header.language.english'),
        icon: '/assets/images/en-flag.svg',
      },
    ],
    [t],
  )

  const changeLang = (language: string) => {
    i18n.changeLanguage(language)
    setOpenLang(false)
  }

  const toggleOpenMenu = () => setOpenMenu(!openMenu)
  const toggleOpenLang = () => setOpenLang(!openLang)

  const currentLang = LANGS.find((lang) => lang.value === i18n.language)

  const handleClick = (path: string) => {
    setOpenMenu(false)
    const currentPath = window.location.pathname
    if (currentPath === path) {
      window.location.reload()
    }
  }

  return (
    <nav className="fixed start-0 top-0 z-20 h-[66px] w-full bg-gradient-to-b from-[#003B34] to-[#00A18E] shadow-lg shadow-[#00000036] md:shadow-transparent">
      <div className="mx-auto flex max-w-screen-xl flex-col items-center justify-between p-4">
        <Link
          to="/"
          className="flex  items-center space-x-3 rtl:space-x-reverse"
        >
        
        </Link>

        <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            data-dropdown-toggle="language-dropdown-menu"
            className="relative hidden cursor-pointer items-center justify-center rounded-lg px-4 py-2 text-sm font-bold text-white"
            onClick={toggleOpenLang}
          >
            <img
              className="me-3 h-5 w-5 rounded-full"
              src={currentLang?.icon}
              alt={currentLang?.label}
            />
            {currentLang?.label}
            <img
              className="ml-[5px] h-2 w-2"
              src="/assets/images/angle-down.svg"
              alt="arrow-down-icon"
            />
          </button>

          {openLang && (
            <div
              className="z-50 my-4 list-none divide-y divide-gray-100 bg-white text-base shadow"
              style={{
                position: 'absolute',
                marginLeft: '10px',
                marginTop: '35px',
              }}
              id="language-dropdown-menu"
            >
              <ul className="font-medium">
                {LANGS.map((option) => (
                  <li key={option.value}>
                    <a
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400"
                      onClick={() => changeLang(option.value)}
                      style={{ cursor: 'pointer' }}
                    >
                      <img
                        className="me-2 h-3.5 w-3.5 rounded-full"
                        src={option.icon}
                        alt={option.label}
                      />
                      {option.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg p-2 text-sm text-gray-500 transition-all duration-300 hover:bg-[#00781E] focus:outline-none focus:ring-2 focus:ring-gray-200 md:hidden dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            onClick={toggleOpenMenu}
            data-drawer-target="drawer-navigation"
            data-drawer-show="drawer-navigation"
            aria-controls="drawer-navigation"
          >
            <img
              src="/assets/images/hamburger.svg"
              className="h-5 w-5"
              alt="Feels Logo"
            />
          </button>
        </div>

        <div
          className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
          id="navbar-sticky"
        >
          <ul className="mt-4 flex flex-col rounded-lg bg-transparent p-4 font-bold md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse">
            {menuItems.map((item: ItemT) => {
              return (
                <li key={item.title}>
                  <Link
                    to={item.path}
                    className="block px-3 py-2 text-[16px] font-[700] text-white md:p-0 "
                    aria-current="page"
                    onClick={() => handleClick(item.path)}
                  >
                    {item.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>

        {openMenu && (
          <div
            onClick={toggleOpenMenu}
            className="absolute left-0 top-0 z-30 h-[100vh] w-[100%] cursor-pointer bg-black/[0.3]"
          ></div>
        )}
        <div
          id="drawer-navigation"
          className={
            openMenu === true
              ? 'fixed right-0 top-[66px] z-40 h-screen w-64 transform-none overflow-y-auto bg-gradient-to-b from-[#00781E] to-[#13241D] p-4 transition-transform'
              : 'fixed right-0 top-[66px] z-40 h-screen w-64 translate-x-full overflow-y-auto bg-gradient-to-b from-[#00781E] to-[#13241D] p-4 transition-transform'
          }
          aria-labelledby="drawer-navigation-label"
        >
          <ul className="mt-4 flex flex-col rounded-lg bg-transparent p-4 font-bold md:mt-0 md:flex-row md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse">
            {menuItems.map((item: ItemT) => {
              return (
                <li key={item.title}>
                  <Link
                    to={item.path}
                    className="block px-3 py-2 text-[16px] font-[700] text-white md:p-0 "
                    aria-current="page"
                    onClick={() => handleClick(item.path)}
                  >
                    {item.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
      {/* <nav className="fixed start-0 left-0 z-20 h-full w-[256px] bg-gradient-to-b from-[#003B34] to-[#00A18E] shadow-lg shadow-[#00000036] md:shadow-transparent">
      <div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4'>
                    <Link to ='/' className="flex items-center space-x-3 rtl:space-x-reverse" >
                    </Link>
                    <ul className='mt-4 flex flex-col text-left rounded-lg bg-transparent p-4 font-bold md:mt-0 md:flex-col md:space-x-8 md:border-0 md:p-0 rtl:space-x-reverse'>
                        {menuItems.map((item : ItemT)=>{
                            return(
                                <li key={item.title}>
                                <Link
                                  to={item.path}
                                  className="block px-3 py-2 text-[18px] font-[700] text-white md:p-0 "
                                  aria-current="page"
                                  onClick={() => handleClick(item.path)}
                                >
                                  {item.title}
                                </Link>
                                
                              </li>

                              
                            )
                        }
                        )}
                    </ul>
                </div>
      </nav> */}
    </nav>
    
  )
}
