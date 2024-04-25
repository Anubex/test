export default function BannerHome() {
  return (
    <>
      <div className="relative">
        <img
          className="hidden w-full md:block"
          src="/assets/images/top-banner.png"
          alt="home-first-banner"
        />
        <img
          className="block w-full md:hidden"
          src="/assets/images/top-banner-mb.png"
          alt="home-first-banner-mobile"
        />
        <h1 className="absolute bottom-[25px] left-[50%] block -translate-x-[50%] text-center text-[26px] font-[700] text-white md:hidden">
          WE SERVE <br />
          THE BEST CONNECTION
        </h1>
      </div>
    </>
  )
}
