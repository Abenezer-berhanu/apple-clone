import IphoneWallpaper from "../Components/iphone/IphoneWallpaper";
import MacNav from "../Components/mac/MacNav";
import MacNavData from "../Components/mac/MacNavData";
import "./Iphone.css";
import IpadEssential from "../Components/ipad/IpadEssential";
import IpadTypesTitle from "../Components/ipad/IpadTypesTitle";
import MacWhichMac from "../Components/mac/MacWhichMac";
import WaysToSave from "../Components/iphone/WaysToSave";
import MacService from "../Components/mac/MacService";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import MapsUgcIcon from "@mui/icons-material/MapsUgc";
import IpadVideoTitle from "../Components/ipad/IpadVideoTitle";
import MacAutoScrollMovie from "../Components/mac/MacAutoScrollMovie";
import IpadFooterImageScroll from "../Components/ipad/IpadFooterImageScroll";
import IpadGift from "../Components/ipad/IpadGift";
import StoreQuickLinks from "../Components/store/StoreQuickLinks";
import StoreFooterLinks from "../Components/store/StoreFooterLinks";
import StoreBottomFooter from "../Components/store/StoreBottomFooter";



export default function Iphone() {
  const macNav = MacNavData.map((data) => {
    return <MacNav key={data.id} name={data.name} icon={data.icon} />;
  });
  return (
    <div>
      <div className="mac--nav--container">{macNav}</div>
      <div className="iphone--wallpapers">
        <IphoneWallpaper
          status="new"
          type="wonderfull."
          name="iPhone 14"
          img="./imagesIphone/iphone_one.png "
        />
      </div>
      <div className="iphone--wallpapers">
        <IphoneWallpaper
          black={true}
          type="Pro. Beyond."
          name="iPhone 14 Pro"
          img="./imagesIphone/iphone_two.png "
        />
      </div>
      <div className="iphone--second--wallpapers">
        <IpadEssential
          title="iPhone11"
          description={`The best place for all your \n photos, files, and more.`}
          img="./imagesIphone/iphone_five.png"
          className="ipad--essential--card"
        />
      </div>
      <div className="iphone--second--wallpapers">
        <IpadEssential
          title={`Iphone`}
          description={`The safer way to make secure, \n contactless purchases in stores and online.`}
          img="./imagesIphone/iphone_four.png"
          className="ipad--essential--card"
        />
      </div>
      <div className="ipad--type--container full--span">
        <IpadTypesTitle name="iPhone" />
        <MacWhichMac name="iPhone" img="./imagesIphone/iphone_five.png" />
      </div>
      <div className="iphone--second--wallpaper--container">
        <div>
          <WaysToSave
            className="ways--to--save--card"
            defination={`Get credit toward\niPhone 14 or\niPhone 14 Pro when\nyou trade in an\neligible smartphone.1`}
            linkText="See what your device is worth"
            img="./imagesIphone/iphone_six.png"
          />
        </div>
        <div>
          <WaysToSave
            className="ways--to--save--card"
            defination={`Save up to $1000 \non iPhone 14 Pro or\niPhone 14 Pro Max\nwith carrier deals at\nApple.`}
            linkText="See iPhone deals"
            img="./imagesIphone/iphone_seven.png"
          />
        </div>
        <div>
          <WaysToSave
            className="ways--to--save--card"
            defination={`Pay 0% APR over\n24 months with\nApple Card.`}
            linkText="Learn more"
            information={`Choose Apple Card Month\n Installments when you check out.**`}
            img="./imagesIphone/iphone_eight.png"
          />
        </div>
        <div className="iphone--full--span full--span--one">
          <WaysToSave
            className="ways--to--save--card"
            title={`Why Apple is the best\nplace to buy iPhone.`}
            linkText="Learn more"
            defination={`You can choose a payment option that works for\n you, pay less with a trade‑in, connect your new\niPhone to your carrier, and get set up quickly.\nYou can also chat with a Specialist anytime.`}
          />
        </div>
        <div className="iphone--full--span full--span--two">
          <WaysToSave
            className="ways--to--save--card--reversed"
            title={`MagSafe`}
            description={`Snap on a magnetic case, wallet,\nor both. And get faster\nwireless charging.`}
            linkText="Shop MagSafe accessories"
            img="./imagesIphone/iphone_ten.png"
          />
        </div>
        <div className="iphone--full--span full--span--three">
          <WaysToSave
            className="ways--to--save--card--reversed--double"
            title={`AirTag`}
            description={`Attach one to your keys. Put another in your\nbackpack. If they’re misplaced, just use the\nFind My app.`}
            linkText="Shop MagSafe accessories"
            img="./imagesIphone/iphone_11.png"
            buy={true}
          />
        </div>
        <div className="iphone--full--span full--span--four">
          <WaysToSave
            className="ways--to--save--card"
            title={`Magic runs in\nthe family.`}
            description={`Explore all AirPods models and\nfind the best ones for you.`}
            linkText="Learn more"
          />
        </div>
        <div className="mac--service--container iphone--full--span">
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
        <div className="iphone--full--span full--span--three">
          <WaysToSave
            className="ways--to--save--card--reversed--center"
            title={`iOS 16`}
            description={`Personal is powerful.`}
            linkText="Learn more"
            img="./imagesIphone/iphone_13.png"
            buy={false}
          />
        </div>
        <div className="iphone--full--span full--span--iphone_five">
          <div>
            <WaysToSave
              className="ways--to--save--card"
              title={`iOS`}
              description={`wonderfull. smart`}
              linkText="Learn more"
              img="./imagesIphone/iphone_14.png"
              buy={false}
            />
          </div>
          <div>
            <WaysToSave
              className="ways--to--save--card--reversed--center--two"
              title={`iOS 18`}
              description={`Personal is powerful.`}
              linkText="Learn more"
              img="./imagesIphone/iphone_15.png"
              buy={false}
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
            title={`buy now`}
            description={`The safer way to make secure, \n contactless purchases in stores and online.`}
            img="./images/giftCard.png"
            className="ipad--essential--card"
          />
        </div>
        <div>
          <IpadGift
            title="what is new"
            description={`Get 3 months of Apple News+ free \n when you buy an iPad.9`}
            img1="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuBfNmqr5ZdhRiyzewNe31aUNu-a8vE0HazA&usqp=CAU"
            img2="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR32b7B87EL6fdW56grOhyq-KxihMCglUtBLQ&usqp=CAU"
            img3="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRrpdZffI-tETS4tnV6QAHbOxCYJO_Vy5oBw&usqp=CAU"
          />
        </div>
        </div>
      </div>
      <div className="full--span">
          <StoreQuickLinks />
          <StoreFooterLinks />
          <StoreBottomFooter />
        </div>
    </div>
  );
}
