import { useTranslation } from 'react-i18next'

export default function BannerFive() {
  const { t } = useTranslation()

  return (
    <div id="apk-app" className="row w-100 justify-content-center m-0 pt-0">
      <div id="newsspec-19854-app" className="mingalaba-app col-12 m-0">
        <div className="mingalaba-app-text">
          <div className="mingalaba-app-text__download">
            {t('home-page.five.title')}
          </div>
          <div className="mingalaba-app-text__tagline mt-2">
            {t('home-page.five.detail')}
          </div>
          <br />
        </div>
        <div className="mingalaba-app__section">
          <div className="mingalaba-app-subsection">
            <img
              className="mingalaba-app__bbc-logo"
              src="assets/icons/feels-logo.png"
              width={106}
              height={106}
              alt="mingalaba-app-icon"
              style={{
                borderRadius: '24px',
              }}
            />
          </div>
          <div className="mingalaba-app-subsection">
            <a
              className="mingalaba-app-subsection--link mingalaba-app-subsection--apk"
              href="https://cdn.feels.co.th/dealer.apk"
              target="_parent"
              aria-label="Download apk"
            >
              <img
                className="mingalaba-app__apk"
                src="assets/images/Android-Badge_Black.png"
                width={161}
                height="auto"
                alt="apk-button"
              />
            </a>
            {/* <a class="mingalaba-app-subsection--link mingalaba-app-subsection--playstore" href="https://play.google.com/store/apps/details?id=bbc.mobile.news.ww&amp;hl=en" target="_parent">
            <img class="mingalaba-app__play-store" src="//news.files.bbci.co.uk/include/newsspec/19854/assets/app-project-assets/google_play_store.svg" width="161" height="auto" border="0">
          </a>
          <a class="mingalaba-app-subsection--link mingalaba-app-subsection--appstore" href="https://itunes.apple.com/us/app/bbc-news/id364147881?mt=8" target="_parent">
            <img class="mingalaba-app__app-store" src="//news.files.bbci.co.uk/include/newsspec/19854/assets/app-project-assets/ios_app_store.svg" width="161" height="auto" border="0">
          </a> */}
          </div>
        </div>
        <div className="mingalaba-app__section"></div>
      </div>
    </div>
  )
}
