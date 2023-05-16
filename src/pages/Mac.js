import { Link } from "react-router-dom";
import "./Mac.css";
import MacNav from "../Components/mac/MacNav";
import MacNavData from "../Components/mac/MacNavData";
import MacFirstWallpapers from "../Components/mac/MacFirstWallpapers";
import MacFirstWallpaperData from "../Components/mac/MacFirstWallpaperData";
import MacWhichMac from "../Components/mac/MacWhichMac";
import WhichMacTitle from "../Components/mac/WhichMacTitle";
import MacSecondWallpaper from "../Components/mac/MacSecondWallpaper";
import { useState } from "react";
import MacService from "../Components/mac/MacService";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import WhatMakesMacSingle from "../Components/mac/WhatMakesMacSingle";
import WhatMakesMacParent from "../Components/mac/WhatMakesMacParent";
import MacAutoScrollMovie from "../Components/mac/MacAutoScrollMovie";
import StoreQuickLinks from "../Components/store/StoreQuickLinks";
import StoreFooterLinks from "../Components/store/StoreFooterLinks";
import StoreBottomFooter from "../Components/store/StoreBottomFooter";

export default function Mac() {
  const [laptop, setLaptop] = useState(true);
  const [desktop, setDesktop] = useState(false);
  const arrow = ">";

  const activeDevice = () => {
    setLaptop(!laptop);
    setDesktop(!desktop);
  };

  const macNav = MacNavData.map((data) => {
    return <MacNav key={data.id} name={data.name} icon={data.icon} />;
  });

  const macFirstWallpapers = MacFirstWallpaperData.map((data) => {
    return (
      <MacFirstWallpapers
        key={data.id}
        status={data.status}
        title={data.title}
        description={data.description}
        price={data.price}
        buyButton={data.buyButton}
        watchButton={data.watchButton}
        link={data.link}
        black={data.black}
        img={data.img}
      />
    );
  });

  return (
    <div className="mac--container">
      <div className="mac--nav--container">{macNav}</div>
      <div className="mac--first--wallpaper">{macFirstWallpapers}</div>
      <WhichMacTitle onclick={activeDevice} />
      {laptop && (
        <div className="which--mac--laptop">
          <MacWhichMac name="MacBook Air" img="./images/laptop.png" />
        </div>
      )}
      {desktop && (
        <div className="which--mac--desktop">
          <MacWhichMac name="MacBook Pro" img="./images/laptop.png" />
        </div>
      )}
      <div className="emergency--links">
        <Link to="https://www.apple.com">Compare mac {arrow}</Link>
        <Link to="https://www.apple.com">Shop mac {arrow}</Link>
      </div>
      <div className="mac--second--wallpaper">
        <div className="second--wallpaper--full--width">
          <MacSecondWallpaper
            information="Behind the Mac"
            title="Hear the Force."
            description={`Learn how the pros at Skywalker Sound \n push the limits of sonic storytelling.`}
            watchFilmLink={true}
            learnLink={false}
            shopButoon={false}
            tradeLink={false}
            img="./images/secondWallpaper.png"
          />
        </div>
        <div className="second--wallpaper--full--width">
          <MacSecondWallpaper
            information={false}
            title={`Get 3% Daily Cash \n back with Apple Card.`}
            description={`And pay for your new Mac over 12 months, \n interest‑free when you choose to check out \n with Apple Card Monthly Installments.*`}
            watchFilmLink={false}
            learnLink={true}
            shopButoon={false}
            tradeLink={false}
            img="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQf7F7asbPii-h0nMtX_gd0wi42OTCUSpsXpzqelvLIrIzY2aPG"
          />
        </div>
        <div>
          <MacSecondWallpaper
            color={true}
            information="Accessories"
            title={`Explore Mac \n accessories.`}
            description={false}
            watchFilmLink={false}
            learnLink={false}
            shopButoon={true}
            tradeLink={false}
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy4o0iX-GVkGD53jJWHUsaAFaEYfGBcGCCwEbfh3h3UaY35xEV"
          />
        </div>
        <div>
          <MacSecondWallpaper
            color={true}
            information="Apple Trade In"
            title={`Get credit toward a \n new Mac.`}
            description={`Just trade in your eligible computer for credit or recycle \n it for free. It’s good for you and the planet.8`}
            watchFilmLink={false}
            learnLink={false}
            shopButoon={false}
            tradeLink={true}
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoaqD63vPK6AObmriDkxbTbRdx2hw5DuCoPnN_C3iPG-xt2-bZ"
          />
        </div>
      </div>
      <div className="mac--service--container">
        <MacService
          icon=<ViewInArIcon sx={{ fontSize: 50 }} />
          title="Fast delivery or pickup"
          description={`Enjoy two‑hour delivery from an \n Apple Store, free delivery, or \n easy pickup.`}
          linkText="Learn more"
        />
        <MacService
          icon=<MonetizationOnIcon sx={{ fontSize: 50 }} />
          title="Pay monthly at 0% APR"
          description={`You can pay over time when you \n choose to check out with Apple Card \n Monthly Installments.*`}
          linkText="Learn more"
        />
        <MacService
          icon=<MapsUgcIcon sx={{ fontSize: 50 }} />
          title="Get help buying"
          description={`Have a question? Call a Specialist or \n chat online. Call 1‑800-MY‑APPLE.`}
          linkText="Contact us"
        />
      </div>
      <p className="what--make--mac--title">What makes a Mac a Mac?</p>
      <div className="what--make--mac--a--mac--container">
        <div className="what--make--mac--single">
          <WhatMakesMacSingle
            className="what--makes--mac--single--card one"
            title="Mac does"
            spanText="that"
            information=""
            description="Discover what Mac can do for you."
            img="./images/beingImage1.png"
          />
        </div>
        <div className="single">
          <WhatMakesMacSingle
            className="what--makes--mac--single--card two"
            title={`All your devices. \n One seamless experience.`}
            information="Continuity"
            description=""
            img="./images/beingImage2.png"
          />
        </div>
        <div className="single">
          <WhatMakesMacSingle
            className="what--makes--mac--single--card three"
            title={`Works smarter.\n Plays harder.\n Goes further.`}
            information="macOS Ventura"
            description=""
            img="./images/beingImage3.png"
          />
        </div>
        <div className="parent">
          <WhatMakesMacParent
            title="Built-in Apps"
            description={`Powerful creativity and productivity tools live inside every Mac — apps that help you explore, connect,\n and work more efficiently.`}
            title1="Pro Apps"
            description1={`For professionals ready to push their creativity, these industry-leading apps offer maximum control over \n editing, processing, and output of music and film.`}
          />
        </div>
        <div className="parent">
          <h2 className="get--more--of--mac--title">Get more out of Mac</h2>
          <WhatMakesMacSingle
            className="what--makes--mac--single--card four"
            title={`Bundle up to six Apple services. \n And enjoy more for less.`}
            information="macOS Ventura"
            description=""
            img="./images/mac-lists.png"
          />
        </div>
      </div>
      <div clsssName="store--quick--link--container">
        <StoreQuickLinks />
        <StoreFooterLinks />
        <StoreBottomFooter />
      </div>
      <div class="single">
        <MacAutoScrollMovie
          clsssName="what--makes--mac--single--card"
          img1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUKm7pZxIPO4vlvDM1Un9fhhRExjcNWCI0QYiX6_twfTBqZ0F3ovmpS-gmyoYBYp_NGR4&usqp=CAU"
          img2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk-d_e-4_8ocL8nC0V2-URw8j76-lFCoOUCdgWuGoGXcxr-rrDiwt7LcT5mr5g_UTZ-N4&usqp=CAU"
          img3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXUhPANcgCtmoe9hpiYmtja5knTF8Y3JKD1g&usqp=CAU"
          img4="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzx_FNxwdfzmeBono228Y9kKKS9NkYQlZS1Q&usqp=CAU"
          img5="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgsjxN8jxozsL76xRi-AazwQpWTqWpmqz7Cw&usqp=CAU"
        />
      </div>
    </div>
  );
}
