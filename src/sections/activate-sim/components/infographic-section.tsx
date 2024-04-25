export default function InfographicSection() {
  return (
    <>
      <div className="relative w-full bg-white pb-[50px] pt-[100px]">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <div className="w-full">
            <h2 className="mb-[50px] text-center text-[36px] font-bold text-[#28A745]">
              ขั้นตอนการใช้งาน
            </h2>
            <div className="block flex-wrap items-center justify-between px-0 text-center md:flex md:px-[150px] md:text-left">
              <div>
                <img
                  src="/assets/images/Group-83.png"
                  className="w-full max-w-[208px]"
                  alt="activate-sim-step1"
                />
                <div className="my-[25px] flex flex-nowrap items-center justify-center gap-[15px] text-left md:hidden">
                  <p className="grid h-[55px] w-[55px] place-content-center place-items-center rounded-full bg-[#227041] text-[24px] font-bold text-white">
                    1.
                  </p>
                  <p>
                    ถ่ายรูปบาร์โค้ดซิม
                    <br /> เพื่อให้ระบบรู้ว่าต้องการลงทะเบียน
                    <br />
                    หมายเลขใด
                  </p>
                </div>
                <img
                  src="/assets/images/right-step.svg"
                  className="my-[25px] ml-[50%] block -translate-x-[50%] rotate-90 md:hidden"
                  alt="arrow-right-icon"
                />
              </div>

              <img
                src="/assets/images/right-step.svg"
                className="hidden md:block"
                alt="arrow-right-icon"
              />
              <div>
                <img
                  src="/assets/images/Group-84.png"
                  className="w-full max-w-[208px]"
                  alt="activate-sim-step2"
                />
                <div className="my-[25px] flex flex-nowrap items-center justify-center gap-[15px] text-left md:hidden">
                  <p className="grid h-[55px] w-[55px] place-content-center place-items-center rounded-full bg-[#227041] text-[24px] font-bold text-white">
                    2.
                  </p>
                  <p>
                    กรอกข้อมูลส่วนตัวต่างๆเพื่อใช้
                    <br />
                    ในการลงทะเบียน
                  </p>
                </div>
                <img
                  src="/assets/images/right-step.svg"
                  className="my-[25px] ml-[50%] block -translate-x-[50%] rotate-90 md:hidden"
                  alt="arrow-right-icon"
                />
              </div>
              <img
                src="/assets/images/right-step.svg"
                className="hidden md:block"
                alt="arrow-right-icon"
              />
              <div>
                <img
                  src="/assets/images/Group-85.png"
                  className="w-full max-w-[208px]"
                  alt="activate-sim-step3"
                />
                <div className="my-[25px] flex flex-nowrap items-center justify-center gap-[15px] text-left md:hidden">
                  <p className="grid h-[55px] w-[55px] place-content-center place-items-center rounded-full bg-[#227041] text-[24px] font-bold text-white">
                    3.
                  </p>
                  <p>เลือกจำนวนเงินที่ต้องการเติม</p>
                </div>
              </div>
            </div>
            <div className="mt-[25px] block flex-wrap items-start justify-between px-0 md:flex md:px-[150px]">
              <div className="hidden flex-nowrap items-start gap-[15px] md:flex">
                <p className="grid h-[55px] w-[55px] place-content-center place-items-center rounded-full bg-[#227041] text-[24px] font-bold text-white">
                  1.
                </p>
                <p>
                  ถ่ายรูปบาร์โค้ดซิม
                  <br /> เพื่อให้ระบบรู้ว่าต้องการลงทะเบียน
                  <br />
                  หมายเลขใด
                </p>
              </div>

              <div className="hidden flex-nowrap items-center gap-[15px] md:flex">
                <p className="grid h-[55px] w-[55px] place-content-center place-items-center rounded-full bg-[#227041] text-[24px] font-bold text-white">
                  2.
                </p>
                <p>
                  กรอกข้อมูลส่วนตัวต่างๆเพื่อใช้
                  <br />
                  ในการลงทะเบียน
                </p>
              </div>
              <div className="hidden flex-nowrap items-center gap-[15px] md:flex">
                <p className="grid h-[55px] w-[55px] place-content-center place-items-center rounded-full bg-[#227041] text-[24px] font-bold text-white">
                  3.
                </p>
                <p>เลือกจำนวนเงินที่ต้องการเติม</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
