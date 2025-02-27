import BrandLogo from "./brandlogo";

function Footer() {
  return (
    <>
      <footer>
        <div className="d-flex align-item-center justify-content-center text-decoration-none text-black">
          <span className="d-flex">Powered by </span>
          <span className="d-flex ps-2">
            <a href="https://rocket.chat" target={"blank"}>
              <BrandLogo
              brandLink={"/"}
              brandLogoSrc={
                "https://global-uploads.webflow.com/611a19b9853b7414a0f6b3f6/611bbb87319adfd903b90f24_logoRC.svg"
              }
              imageTitle={"Rocket.Chat"}
              brandName={"Rocket.Chat Community"}
              height={32}
              width={98}
            />
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;