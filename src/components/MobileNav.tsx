import Image from "next/image";


function MobileNav() {
  return (
    <div className="container-sm py-4! w-full">
      <div className="flex justify-between">
        <div>
          <Image
            src={"/mobile-logo.svg"}
            alt=""
            width={58}
            height={20}
          />
        </div>
        <div className="flex gap-4">
          <div className="flex-center gap-1 px-6 py-3 bg-background-gray rounded-lg">
            <span className="font-bold">Sign Up - </span>
            <span>It's Free</span>
          </div>
          <div className="">
            <Image
              src={"/menu.svg"}
              alt=""
              width={40}
              height={40}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileNav;
