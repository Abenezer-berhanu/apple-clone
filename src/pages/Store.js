import { Link } from "@mui/material";
import "./Store.css";
import StoreFirstScroll from "../Components/store/StoreFirstScroll";
import StoreFirstScrollData from "../Components/store/StoreFirstScrollData";
import StoreSecondScroll from "../Components/store/StoreSecondScroll";
import StoreSecondScrollData from "../Components/store/StoreSecondScrollData";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import StoreThirdScroll from "../Components/store/StoreThirdScroll";
import StoreThirdScrollData from "../Components/store/StoreThirdScrollData";
import StoreFourthScrollData from "../Components/store/StoreFourthScrollData";
import StoreFourthScroll from "../Components/store/StoreFourthScroll";
import StoreFifthScrollData from "../Components/store/StoreFifthScrollData";
import StoreFifthScroll from "../Components/store/StoreFifthScroll";
import StoreQuickLinks from "../Components/store/StoreQuickLinks";
import StoreFooterLinks from "../Components/store/StoreFooterLinks";
import StoreBottomFooter from "../Components/store/StoreBottomFooter";

export default function Store() {
  const firstScroll = StoreFirstScrollData.map((data) => {
    return <StoreFirstScroll key={data.id} name={data.name} img={data.img} />;
  });

  const secondScroll = StoreSecondScrollData.map((data) => {
    return (
      <StoreSecondScroll
        key={data.id}
        className={data.className}
        name={data.name}
        title={data.title}
        description={data.description}
        img={data.img}
      />
    );
  });

  const scrollFirstToLeft = () => {
    let scrollToLeft = document.getElementById("first--slide");
    scrollToLeft.scrollLeft = scrollToLeft.scrollLeft - 200;
  };

  const scrollFirstToRight = () => {
    let scrollToLeft = document.getElementById("first--slide");
    scrollToLeft.scrollLeft = scrollToLeft.scrollLeft + 200;
  };

  const scrollSecondToLeft = () => {
    let scrollToLeft = document.getElementById(
      "store--second--scroll--container"
    );
    scrollToLeft.scrollLeft = scrollToLeft.scrollLeft - 400;
  };

  const scrollSecondToRight = () => {
    let scrollToLeft = document.getElementById(
      "store--second--scroll--container"
    );
    scrollToLeft.scrollLeft = scrollToLeft.scrollLeft + 400;
  };

  const StoreThirdScrol = StoreThirdScrollData.map((data) => {
    return (
      <StoreThirdScroll
        key={data.id}
        name={data.name}
        title={data.title}
        status={data.status}
        black={data.black}
        description={data.description}
        img={data.img}
      />
    );
  });

  const storeFourthScroll = StoreFourthScrollData.map((data) => {
    return (
      <StoreFourthScroll
        key={data.id}
        name={data.name}
        title={data.title}
        description={data.description}
        black={data.black}
        img={data.img}
      />
    );
  });

  const storeFifthScroll = StoreFifthScrollData.map((data) => {
    return (
      <StoreFifthScroll
        key={data.id}
        color={data.color}
        linearGradient={data.linearGradient}
        icon={data.icon}
        descriptionOne={data.descriptionOne}
        descriptionTwo={data.descriptionTwo}
        spanOne={data.spanOne}
        spanTwo={data.spanTwo}
      />
    );
  });

  return (
    <div className="store--container">
      <div className="store--title">
        <h2 className="store--title--header">
          Store. <span>The best way to buy the products you love.</span>
        </h2>
        <div className="store--title--links--container">
          <div className="store--title--links">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMp93ubvDbfK5OowFQqqvKx0RF5GyB8Dn3pA&usqp=CAU"
              alt=""
            />
            <span>
              <p>Need shopping help?</p>
              <Link>Ask a Specialist</Link>
            </span>
          </div>
          <div className="store--title--links">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMp93ubvDbfK5OowFQqqvKx0RF5GyB8Dn3pA&usqp=CAU"
              alt=""
            />
            <span>
              <p>Need shopping help?</p>
              <Link>Ask a Specialist</Link>
            </span>
          </div>
        </div>
      </div>
      <div className="store--first--scroll--parent">
        <ArrowCircleLeftIcon
          className="scroll--arrow first--scroll--arrow--left"
          sx={{ fontSize: 30 }}
          onClick={scrollFirstToLeft}
        />
        <div className="store--first--scroll--container" id="first--slide">
          {firstScroll}
        </div>
        <ArrowCircleRightIcon
          className="scroll--arrow first--scroll--arrow--right"
          sx={{ fontSize: 30 }}
          onClick={scrollFirstToRight}
        />
      </div>
      <h2 className="second--scroll--title">
        The latest. <span>Take a look at what’s new, right now.</span>
      </h2>
      <div className="store--second--scroll--parent">
        <ArrowCircleLeftIcon
          className="scroll--arrow second--scroll--arrow--left"
          sx={{ fontSize: 40 }}
          onClick={scrollSecondToLeft}
        />
        <div
          className="store--second--scroll--container"
          id="store--second--scroll--container"
        >
          {secondScroll}
        </div>
        <ArrowCircleRightIcon
          className="scroll--arrow second--scroll--arrow--right"
          sx={{ fontSize: 40 }}
          onClick={scrollSecondToRight}
        />
      </div>
      <h3 className="store--third--scroll--header">
        Help is here. <span>Whenever and however you need it.</span>
      </h3>
      <div className="store--third--scroll--container">{StoreThirdScrol}</div>
      <h3 className="store--fourth--scroll--header">
        The Apple experience.
        <span> Do even more with Apple products and services.</span>
      </h3>
      <div className="store--fourth--scroll--container">
        {storeFourthScroll}
      </div>
      <h3 className="store--fifth--scroll--header">
        The Apple Store difference.{" "}
        <span>Even more reasons to shop with us.</span>{" "}
      </h3>
      <div className="store--fifth--scroll--container">{storeFifthScroll}</div>
      <h3 className="store--fourth--scroll--header">Quick Links</h3>
      <div clsssName="store--quick--link--container">
        <StoreQuickLinks />
        <StoreFooterLinks />
        <StoreBottomFooter />
      </div>
    </div>
  );
}
