import Image from "next/image";
import { LocationIcon } from "@/templates/components/icon/locationIcon";
import { FacebookIcon } from "@/templates/components/icon/facebookIcon";
import { YoutubeIcon } from "@/templates/components/icon/youtubeIcon";
import { InstagramIcon } from "@/templates/components/icon/instagramIcon";
import { LineIcon } from "@/templates/components/icon/LineIcon";
import { XIcon } from "@/templates/components/icon/XIcon";
import { LinkedInIcon } from "@/templates/components/icon/LinkedInIcon";
import { TikTokIcon } from "@/templates/components/icon/tiktokIcon";
import { CallIcon } from "@/templates/components/icon/callIcon";

export function Footer() {
  return (
    <footer
      id="footer"
      className="grid w-full gap-x-32 gap-y-7 bg-blue-500 px-6 py-4 text-neutral-100 lg:grid-cols-2 lg:gap-y-14 lg:px-12 lg:py-8"
    >
      <div className="flex gap-x-4 py-4 text-2xl">
        <Image
          src="/templates/components/PKK.png"
          className="mb-1 h-[10vw] w-[10vw] md:h-[8vw] md:w-[8vw] lg:h-[5vw] lg:w-[5vw]"
          alt="Logo PKK"
          sizes="100%"
          width={0}
          height={0}
        />
        <p className="text-xs font-medium lg:text-xl">
          TIM PENGGERAK PEMBERDAYAAN
          <br />
          & KESEJAHTERAAN KELUARGA (PKK)
          <br />
          PROVINSI PAPUA PEGUNUNGAN
        </p>
      </div>
      <div>
        <div className="flex items-center gap-x-3 pb-2 text-xl font-normal">
          <LocationIcon className="h-6 w-6" />
          <p>Alamat</p>
        </div>
        <p className="font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua.
        </p>
      </div>
      <div className="my-2">
        <p className="pb-4 text-xl">Media Sosial</p>
        <div className="flex items-center gap-x-2 *:px-1 lg:gap-x-4">
          <FacebookIcon className="group h-8 w-8 lg:h-12 lg:w-12" />
          <YoutubeIcon className="group h-8 w-8 lg:h-12 lg:w-12" />
          <InstagramIcon className="group h-8 w-8 lg:h-12 lg:w-12" />
          <LineIcon className="group h-8 w-8 lg:h-12 lg:w-12" />
          <XIcon className="group h-8 w-8 lg:h-12 lg:w-12" />
          <LinkedInIcon className="group h-8 w-8 lg:h-12 lg:w-12" />
          <TikTokIcon className="group h-8 w-8 lg:h-12 lg:w-12" />
        </div>
      </div>
      <div>
        <div className="flex items-center gap-x-3 pb-2 text-xl font-normal">
          <CallIcon className="h-6 w-6" />
          <p>Kontak</p>
        </div>
        <div className="font-light">
          <p>Email: johndoe@gmail.com</p>
          <p>Telepon: +1234567</p>
          <p>Fax: +1234567</p>
        </div>
      </div>
    </footer>
  );
}
