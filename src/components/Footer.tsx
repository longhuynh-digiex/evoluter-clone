import { FOOTER_DATA } from "@/constants/footer-data";
import Image from "next/image";
import CustomInput from "./CustomInput";
import Button from "./Button";

function Footer() {
  return (
    <>
      <div className=" flex justify-center mt-[140px]">
        <div className="container-lg w-full">
          <div className=" flex justify-between flex-wrap">
            <div className="flex flex-wrap gap-15">
              {FOOTER_DATA.map((data, index) => (
                <div key={index}>
                  <h5 className="font-bold text-lg mb-5">{data.section}</h5>
                  <div className="flex flex-col gap-3">
                    {data.contents.map((content) => (
                      <div className="font-semibold cursor-pointer">
                        {content}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full lg:w-[453px]">
              <h5 className="font-bold text-lg mb-5">Newsletter</h5>
              <div className="flex gap-3 w-full">
                <CustomInput placeholder="Enter your email" />
                <Button variant="secondary">Subcribe</Button>
              </div>
              <div className="flex justify-start items-center gap-6">
                <div>Follow us</div>
                <Image
                  className="cursor-pointer"
                  src={"/LinkedIN.svg"}
                  alt="media"
                  height={48}
                  width={48}
                />
                <Image
                  className="cursor-pointer"
                  src={"/Twitter.svg"}
                  alt="media"
                  height={48}
                  width={48}
                />
                <Image
                  className="cursor-pointer"
                  src={"/WhatsApp.svg"}
                  alt="media"
                  height={48}
                  width={48}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-1 lg:gap-4 mt-15 mb-[100px] text-gray-200">
            <span>© 2023 Evoluter. All rights reserved</span>
            <span>・</span>
            <span>Privacy Policy</span>
            <span>・</span>
            <span>Terms & Conditions</span>
            <span>・</span>
            <span>Legal</span>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-full ">
          <img
            src={"/footer.svg"}
            alt="footer"
            className="w-full"
          />
        </div>
      </div>
    </>
  );
}

export default Footer;
