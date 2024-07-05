import type { NextPage } from "next";
import Head from "next/head";
import Image, { StaticImageData } from "next/legacy/image";
import React, { FC } from "react";
import { RainbowOverlay } from "../components/RainbowOverlay";
import { UnitedNationsLogo } from "../components/UnitedNationsLogo";
import styles from "../styles/Home.module.scss";
import TFLLogo from "../public/TFLLogo.png";
import AkcgLogo from "../public/logo_akcg3 1.png";
import PrEpLogo from "../public/logo_prep-trans 1.png";
import KaleidoscopeTrustLogo from "../public/logo_kt-white 1.png";
import EvanDavisLogo from "../public/logo_evan-small 1.png";
import GOTLogo from "../public/logo_got-white 1.png";
import NHSLogo from "../public/logo-trans_nhs 1.png";
import GridLinkLogo from "../public/logo_gridlink-white 1.png";
import CREALogo from "../public/logo_crea-small 1.png";
import HDTLogo from "../public/logo_hdt 1.png";
import WHALogo from "../public/logo_wha 1.png";
import OAPILogo from "../public/logo_oapi@2x 1.png";
import IconInfrastructureLogo from "../public/logo_icon-alt 1.png";
import WLELogo from "../public/logo_wle-small 1.png";
import { AlzSocietyLogo } from "../components/AlzSocietyLogo";
import { SohoStrategyLogo } from "../components/SohoStrategyLogo";
import { UKAGELogo } from "../components/UKAGELogo";
import { ChevronRightIcon } from "../components/ChevronRightIcon";

type Client = {
  name: string;
  height?: number;
  SvgLogo?: FC<JSX.IntrinsicElements["svg"]>;
  imageSrc?: StaticImageData;
};

const mapClientToElement = ({ SvgLogo, imageSrc, name, height }: Client) => (
  <React.Fragment key={name}>
    {SvgLogo ? (
      <SvgLogo className={styles["client-logo"]} />
    ) : imageSrc ? (
      <Image
        src={imageSrc}
        alt={name}
        layout="fixed"
        width={((height ?? 75) / imageSrc.height) * imageSrc.width}
        height={height ?? 75}
        className={styles["client-logo"]}
      />
    ) : null}
  </React.Fragment>
);

const clients: Client[] = [
  {
    name: "United Nations",
    SvgLogo: UnitedNationsLogo,
  },
  {
    name: "TFL",
    imageSrc: TFLLogo,
  },
  {
    name: "AKCG",
    imageSrc: AkcgLogo,
  },
  {
    name: "PrEP Guide",
    imageSrc: PrEpLogo,
  },
  {
    name: "Kaleidoscope Trust",
    imageSrc: KaleidoscopeTrustLogo,
    height: 50,
  },
  {
    name: "Evan Davis",
    imageSrc: EvanDavisLogo,
  },
  {
    name: "GOT",
    imageSrc: GOTLogo,
  },
  {
    name: "NHS",
    imageSrc: NHSLogo,
    height: 60,
  },
  {
    name: "UK Alliance for Global Equality",
    SvgLogo: UKAGELogo,
  },
  {
    name: "GridLink",
    imageSrc: GridLinkLogo,
    height: 60,
  },
  {
    name: "CREA",
    imageSrc: CREALogo,
  },
  {
    name: "HDT",
    imageSrc: HDTLogo,
    height: 60,
  },
  {
    name: "WHA",
    imageSrc: WHALogo,
    height: 60,
  },
  {
    name: "OAPI",
    imageSrc: OAPILogo,
  },
  {
    name: "Icon Infrastructure",
    imageSrc: IconInfrastructureLogo,
    height: 30,
  },
  {
    name: "WLE",
    imageSrc: WLELogo,
    height: 50,
  },
  {
    name: "Alzheimer's Society",
    SvgLogo: AlzSocietyLogo,
  },
];

const Home: NextPage = () => {
  const evenClients = clients.filter((_, i) => i % 2 === 0);
  const oddClients = clients.filter((_, i) => i % 2 === 1);

  return (
    <>
      <Head>
        <title>Soho Strategy</title>
        <meta
          name="description"
          content="SOHO is a high-performance, data-driven product studio based in London, England."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles["rainbow-overlay-wrapper"]}>
          <RainbowOverlay />
        </div>
        <div className={styles["content-wrapper"]}>
          <main className={styles.main}>
            <SohoStrategyLogo />
            <h1>We are not currently accepting new clients</h1>
            <p>
              Since January 2019 we have been working exclusively with our
              existing client base and on{" "}
              <a href="https://hash.ai">
                HASH <ChevronRightIcon className={styles["chevron-right"]} />
              </a>
            </p>
            <p>
              If you are an existing client, please contact your account manager
              or email{" "}
              <a href="mailto:clients@sohostrategy.com">
                clients@sohostrategy.com
              </a>
            </p>
          </main>
        </div>
        <div className={styles["clients-wrapper"]}>
          <div className={styles["desktop-client-logos"]}>
            {clients.map(mapClientToElement)}
          </div>
          <div className={styles["mobile-client-logos"]}>
            <div className={styles["scroll-track"]}>
              <div>
                <div>{evenClients.map(mapClientToElement)}</div>
                <div>{oddClients.map(mapClientToElement)}</div>
              </div>
              <div>
                <div>{evenClients.map(mapClientToElement)}</div>
                <div>{oddClients.map(mapClientToElement)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
