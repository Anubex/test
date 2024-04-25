import { useTranslation } from 'react-i18next'
import { FaPhone } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <>
      <footer className="bg-[#1E1E1E] py-4 text-white">
        <div className="mx-auto block max-w-screen-xl flex-wrap items-center justify-center p-4 md:flex md:items-start md:justify-between">
          <div className="mb-[25px] text-center text-[16px] font-bold md:mb-0 md:text-left">
            © Copyright 2024 Feels. All Rights Reserved.
          </div>
          <div className="mb-[25px] text-center text-[16px] md:mb-0 md:text-left">
            <span className="font-bold">
              {t('footer.contact-address-title')}
            </span>
            <br />
            21/111-112 Soi Soonvijai, Rama9<br /> rd.Bangkapi, Huaikwang,
            <br />
            Bangkok, 10310
          </div>
          <div className="mb-[25px] text-center text-[16px] md:mb-0 md:text-left">
            <span className="font-bold">{t('footer.contact-phone-title')}</span>
            <div className="my-[10px] flex flex-nowrap items-center justify-center gap-[10px] md:justify-start">
              <FaPhone />
              <Link to="tel:021147069" className="block hover:text-[#28A745]">
                (+66) 021147069
              </Link>
            </div>
            <br />
            <span className="font-bold">{t('footer.contact-other-title')}</span>
            <div className="my-[10px] flex flex-nowrap items-center justify-center gap-[10px] md:justify-start">
              <Link
                to="/"
                className="block h-[20px] w-[20px] hover:text-[#28A745]"
              >
                <img src="/assets/images/mdi_youtube.svg" alt="youtube-icon" />
              </Link>
              <Link to="/" className="block h-[20px] w-[20px]">
                <img
                  src="/assets/images/ic_baseline-facebook.svg"
                  alt="facebook-icon"
                  className="footer-btn"
                />
              </Link>
              <Link
                to="https://lin.ee/6SypTGt"
                className="block h-[20px] w-[20px]"
                target="_blank"
              >
                <img
                  src="/assets/images/line-logo-svgrepo-com-1.svg"
                  alt="line-icon"
                  className="footer-btn"
                />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
