import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <section className="bg-blue-light cont-px py-10">
      <div className="cont-px flex flex-col min-[995px]:flex-row justify-between gap-14">
        <div className="flex-1">
          <img src="logo.svg" alt="Dala logo" className="h-auto w-30" />
          <img
            src="arabic-txt.svg"
            alt="arabic text 'دالا القابضة'"
            className="h-auto w-31 mt-3"
          />
          <p className="text-xs leading-[150%] max-w-[55ch] my-6">
            Guided by Saudi Arabia’s Vision 2030, DALA Holding contributes to
            national transformation by promoting localization, innovation,
            knowledge transfer, and the empowerment of national talent.
          </p>
          <div className="flex gap-x-4">
            <a href="">
              <img
                src="./icons/twitter.svg"
                alt="twitter icon"
                className="h-auto w-6"
              />
            </a>
            <a href="">
              <img
                src="./icons/linkedin.svg"
                alt="linkedin icon"
                className="h-auto w-6"
              />
            </a>
            <a href="">
              <img
                src="./icons/facebook.svg"
                alt="facebook icon"
                className="h-auto w-6"
              />
            </a>
            <a href="">
              <img
                src="./icons/instagram.svg"
                alt="instagram icon"
                className="h-auto w-6"
              />
            </a>
          </div>
        </div>

        <div className="text-sm flex flex-col min-[450px]:flex-row justify-between flex-1 gap-8 min-[450px]:gap-0">
            <div>
                <p className="uppercase underline underline-offset-[3px] decoration-1 leading-[150%] font-bold">Links</p>
                <div className="text-semibold flex flex-col gap-y-4 mt-6">
                    <Link to="/subsidiaries">Subsidiaries</Link>
                    <Link to="about">About Us</Link>
                </div>
            </div>
            <div>
                <p className="uppercase underline underline-offset-[3px] decoration-1 leading-[150%] font-bold">Contact Us</p>
                <div className="text-semibold flex flex-col gap-y-4 mt-6">
                    <Link to="/subsidiaries">Al Khobar, Kingdom of Saudi Arabia</Link>
                    <Link to="about">info@dala.sa</Link>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
