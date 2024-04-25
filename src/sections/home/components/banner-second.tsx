// type TextStyleT = {
//   filter: string
// }

export default function BannerSecond() {
  // const textStyle: TextStyleT = {
  //   filter:
  //     'drop-shadow(0 1px 0px rgb(255 255 255)) drop-shadow(0 -1px 1px rgb(255 255 255))',
  // }

  return (
    <>
      <div className="relative block w-full bg-gradient-to-b from-[#0B241A] to-[#037A4E] md:hidden">
        <div className="mx-auto  flex max-w-screen-xl flex-wrap items-center justify-between pb-[50px] md:pb-0">
          <div className="block w-full pt-[25px] md:flex">
            <div className="basis-full md:basis-6/12">
              <h2 className="text-center text-[34px] font-[700] text-white md:text-left md:text-[38px]">
                บริษัท ฟีล เทเลคอม คอร์ปอเรชั่น จำกัด <br />
                <span className="text-[14px] md:text-[26px]">
                  (Feels Telecom Corporation Company Limited)
                </span>
              </h2>
              <p className="mx-4 my-[25px] text-center text-[16px] text-white md:mx-0 md:text-left">
                Feels ประกอบกิจการและให้บริการโทรคมนาคม
                โดยธุรกิจหลักเป็นผู้ให้บริการ เครือข่ายโทรศัพท์เคลื่อนที่แบบ
                MVNO (Mobile Virtual Network Operator)
                เน้นการให้บริการไปยังลูกค้ากลุ่มเป้าหมายในกลุ่ม ลูกค้าองค์กร
                ลูกค้ากลุ่มนักท่องเที่ยว รวมถึงลูกค้าองค์กรที่ต้องการเชื่อมต่อ
                อุปกรณ์อีเล็กทรอนิกส์กับสัญญาณโทรศัพท์เคลื่อนที่ (IoT) เป็นต้น
                และประกอบกิจการขายส่งบริการโทรคมนาคม MVNA (Mobile Virtual
                Network Aggregator) อีกด้วย
              </p>
              {/* <p
                style={textStyle}
                className="hidden bg-gradient-to-b from-[#3DD877] to-[#016827] bg-clip-text font-[700] text-transparent md:inline-block md:text-[85px]"
              >
                เน็ตเร็ว แรงที่สุด!
              </p>
              <p className="hidden text-center font-medium text-white md:block md:text-[38px]">
                ใช้งานง่ายที่สุด
              </p> */}
            </div>
            {/* <div className="basis-full md:basis-6/12">
              <img
                src="/assets/images/4g.png"
                className="relative bottom-0 right-0 h-full max-h-[593px] w-full max-w-[913px] object-fill md:absolute"
                alt="4g-logo"
              />
              <p
                style={textStyle}
                className="ml-[50%] inline-block -translate-x-[50%] bg-gradient-to-b from-[#3DD877] to-[#016827] bg-clip-text text-center text-[45px] font-[700] text-transparent md:hidden md:text-[85px]"
              >
                เน็ตเร็ว แรงที่สุด!
              </p>
              <p className="block text-center text-[30px] font-medium text-white md:hidden md:text-[38px]">
                ใช้งานง่ายที่สุด
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </>
  )
}
