import MacNav from "../Components/mac/MacNav";
import MacNavData from "../Components/mac/MacNavData";
import "./Ipad.css";
import FirstWallpaper from "../Components/ipad/FirstWallpaper";
import FirstWallpaperSecondImage from "../Components/ipad/FirstWallpaperSecondImage";
import SecondWallpaper from "../Components/ipad/SecondWallpaper";
import MacWhichMac from "../Components/mac/MacWhichMac";
import IpadTypesTitle from "../Components/ipad/IpadTypesTitle";
import WhatMakesMacSingle from "../Components/mac/WhatMakesMacSingle";
import MacSecondWallpaper from "../Components/mac/MacSecondWallpaper";
import MacService from "../Components/mac/MacService";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import IpadEssential from "../Components/ipad/IpadEssential";
import MacAutoScrollMovie from "../Components/mac/MacAutoScrollMovie";
import IpadVideoTitle from "../Components/ipad/IpadVideoTitle";
import IpadFooterImageScroll from "../Components/ipad/IpadFooterImageScroll";
import IpadGift from "../Components/ipad/IpadGift";
import StoreQuickLinks from "../Components/store/StoreQuickLinks";
import StoreFooterLinks from "../Components/store/StoreFooterLinks";
import StoreBottomFooter from "../Components/store/StoreBottomFooter";

export default function Ipad() {
  const macNav = MacNavData.map((data) => {
    return <MacNav key={data.id} name={data.name} icon={data.icon} />;
  });

  return (
    <div className="ipad--container">
      <div className="black--bg--container">
        <div className="mac--nav--container">{macNav}</div>
        <div className="ipad--first--wallpaper--container">
          <FirstWallpaper />
          <FirstWallpaperSecondImage />
        </div>
      </div>
      <div className="second--mac--container">
        <SecondWallpaper />
      </div>
      <div className="grid--item">
        <div className="ipad--type--container full--span">
          <IpadTypesTitle name="iPad"/>
          <MacWhichMac
            name="iPad Pro"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFrjYEwo9Ex0r3gBVGU1pbwStQ5a8xxa7yZw&usqp=CAU"
          />
        </div>
        <div className="ipad--type--container full--span">
          <WhatMakesMacSingle
            className="what--makes--mac--single--card three"
            title={`Gifts just waiting \n to be picked.`}
            description="It’s not too late to get Mom something great."
            img="./images/iphoneInFlower.png"
          />
        </div>
        <div className="ipad--single--wallpapers">
          <MacSecondWallpaper
            color={true}
            title={`Get 3% Daily Cash \n back with Apple Card.`}
            description={`And pay over time, interest‑free\n when you choose to check out with \n Apple Card Monthly Installments.*`}
            watchFilmLink={false}
            learnLink={false}
            shopButoon={true}
            tradeLink={false}
            img="./images/mobileAtm.png"
          />
        </div>
        <div className="ipad--single--wallpapers">
          <MacSecondWallpaper
            color={true}
            title={`Trade in your current \niPad and get credit\n toward a new one..`}
            description={`With Apple Trade In,\n just give us your eligible iPad and get credit for a new one.\n It’s good for you and the planet,**`}
            watchFilmLink={false}
            learnLink={false}
            shopButoon={true}
            tradeLink={false}
            img="./images/activeImage9.png"
          />
        </div>
        <div className="mac--service--container full--span">
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
        <div className="full--span">
          <h1 className="ipad--essential--title">iPad essentials</h1>
        </div>
        <div className="ipad--esential--single--item">
          <IpadEssential
            title="Apple Pencil"
            description="Dream it up. Jot it down."
            img="./images/ipadPen.png"
            className="ipad--essential--card"
          />
        </div>
        <div className="ipad--esential--single--item">
          <IpadEssential
            title="Keyboards for iPad"
            description="Keyboards that have you covered."
            img="./images/reversed.png"
            className="ipad--essential--card reversed"
          />
        </div>
        <div className="full--span">
          <IpadEssential
            title="Keyboards for iPad"
            description="Keyboards that have you covered."
            img="./images/ipads.png"
            className="ipad--essential--card"
          />
        </div>
        <h1 className="what--makes--ipad--title full--span">
          What makes an iPad an iPad?
        </h1>
        <div className="full--span">
          <IpadEssential
            title="Why iPad"
            description={`Yes, it does that. \n And then some.`}
            img="./images/threeImages.png"
            className="ipad--essential--card three--image"
          />
        </div>
        <div>
          <IpadEssential
            title="iCloud"
            description={`The best place for all your \n photos, files, and more.`}
            img="./images/ipadIcloud.png"
            className="ipad--essential--card"
          />
        </div>
        <div>
          <IpadEssential
            title={`Pay`}
            description={`The safer way to make secure, \n contactless purchases in stores and online.`}
            img="./images/ipadPay.png"
            className="ipad--essential--card"
          />
        </div>
        <div className="full--span">
          <WhatMakesMacSingle
            className="what--makes--mac--single--card four"
            title={`Bundle up to six Apple services. \n And enjoy more for less.`}
            information="macOS Ventura"
            description=""
            img="./images/mac-lists.png"
          />
        </div>
        <div className="ipad--video--conatianer">
          <IpadVideoTitle />
          <div>
            <MacAutoScrollMovie
              img1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFlkF7waLnSr4XoiSORtWr69WHMcbUVTA_wQ&usqp=CAU"
              img2="https://cdn.cinematerial.com/p/297x/iapzbg1m/dune-movie-poster-md.jpg?v=1630953155"
              img3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW0rrTjVtrP6j2G5d9CH-00UFyqVe-N7KHUg&usqp=CAU"
              img4="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD4fwBRP85_xPA3rm4GArz6IKo8Y9upb7Q7w&usqp=CAU"
              img5="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFlkF7waLnSr4XoiSORtWr69WHMcbUVTA_wQ&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpUpIZ9pY6D19FTaHlbW6roycT8r9JMyOCg&usqp=CAUhttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbpUpIZ9pY6D19FTaHlbW6roycT8r9JMyOCg&usqp=CAU"
            />
            <MacAutoScrollMovie
              img1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUKm7pZxIPO4vlvDM1Un9fhhRExjcNWCI0QYiX6_twfTBqZ0F3ovmpS-gmyoYBYp_NGR4&usqp=CAU"
              img2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk-d_e-4_8ocL8nC0V2-URw8j76-lFCoOUCdgWuGoGXcxr-rrDiwt7LcT5mr5g_UTZ-N4&usqp=CAU"
              img3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXUhPANcgCtmoe9hpiYmtja5knTF8Y3JKD1g&usqp=CAU"
              img4="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzx_FNxwdfzmeBono228Y9kKKS9NkYQlZS1Q&usqp=CAU"
              img5="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgsjxN8jxozsL76xRi-AazwQpWTqWpmqz7Cw&usqp=CAU"
            />
          </div>
        </div>
        <div>
          <IpadFooterImageScroll />
        </div>
        <div>
          <IpadEssential
            title={`Pay`}
            description={`The safer way to make secure, \n contactless purchases in stores and online.`}
            img="./images/giftCard.png"
            className="ipad--essential--card"
          />
        </div>
        <div>
          <IpadGift
            title="News"
            description={`Get 3 months of Apple News+ free \n when you buy an iPad.9`}
            img1="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTZc1ZmK4mwC3dZYXoqaSwyydO4OqyyKdQ_gbB_WUhYph-2e4sW"
            img2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6oSz99vQsRy8mgNk5oGLkTYb7vFxnIcxfmg&usqp=CAU"
            img3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe4rcmHjI9wf7LxP4AtmA_8mp6vIGmFNznRQ&usqp=CAU"
          />
        </div>
        <div className="full--span">
          <StoreQuickLinks />
          <StoreFooterLinks />
          <StoreBottomFooter />
        </div>
      </div>
    </div>
  );
}