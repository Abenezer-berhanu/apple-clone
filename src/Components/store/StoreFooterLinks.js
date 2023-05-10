import React from "react";
import AppleIcon from "@mui/icons-material/Apple";
import { Link } from "@mui/material";

export default function StoreFooterLinks() {
  return (
    <div className="store--footer--links--card">
      <div className="store--footer--links--title">
        <AppleIcon />
        <p>Apple Store Online</p>
      </div>
      <div className="store--footer--links--link--container">
        <div className="footer--link--one">
          <div>
            <p className="footer--link--title">Shop and Learn</p>
            <Link>Store</Link>
            <Link>Mac</Link>
            <Link>iPad</Link>
            <Link>iPhone</Link>
            <Link>Watch</Link>
            <Link>AirPods</Link>
            <Link>Tv & Home</Link>
            <Link>AirTag</Link>
            <Link>Accessories</Link>
            <Link>Gift Cards</Link>
          </div>
          <div>
            <p className="footer--link--title">Apple Wallet</p>
            <Link>Wallet</Link>
            <Link>Apple card</Link>
            <Link>Apple Pay</Link>
            <Link>Apple cash</Link>
          </div>
        </div>
        <div className="footer--link--two">
          <div>
          <p className="footer--link--title">Account</p>
          <Link>Manage Your Apple ID</Link>
          <Link>Apple Store Account</Link>
          <Link>iCloud.com</Link>
          </div>
          <div>
          <p className="footer--link--title">Entertainment</p>
          <Link>Apple One</Link>
          <Link>Apple TV+</Link>
          <Link>Apple Music</Link>
          <Link>Apple Arcade</Link>
          <Link>Apple Fitness+</Link>
          <Link>Apple News+</Link>
          <Link>Apple Podcasts</Link>
          <Link>Apple Books</Link>
          <Link>App Store</Link>
          </div>
        </div>
        <div className="footer--link--three">
        <div>
        <p className="footer--link--title">Apple Store</p>
          <Link>Find store</Link>
          <Link>Genius Bar</Link>
          <Link>Today at Apple</Link>
          <Link>Apple Camp</Link>
          <Link>Apple Store App</Link>
          <Link>Certified Refurbished</Link>
          <Link>Financing</Link>
          <Link>Apple Trade In</Link>
          <Link>Order Status</Link>
          <Link>Shopping Help</Link>
        </div>
        </div>
        <div className="footer--link--four">
        <div>
        <p className="footer--link--title">For Bussiness</p>
        <Link>Apple and Business</Link>
        <Link>Shop for Business</Link>
        </div>
        <div>
        <p className="footer--link--title">For Education</p>
        <Link>Apple and Education</Link>
        <Link>Shop for K-12</Link>
        <Link>Shop for College</Link>
        </div>
        <div>
        <p className="footer--link--title">For Helthcare</p>
        <Link>Apple in Healthcare</Link>
        <Link>Health on Apple Watch</Link>
        <Link>Health Records on iPhone</Link>
        </div>
        <div>
        <p className="footer--link--title">For Government</p>
        <Link>Shop for Government</Link>
        <Link>Shop for Veterans and Military</Link>
        </div>
        </div>
        <div className="footer--link--five span">
        <p className="footer--link--title">Apple Values</p>
        <Link>Accessibility</Link>
        <Link>Education</Link>
        <Link>Environment</Link>
        <Link>Inclusion and Diversity</Link>
        <Link>Privacy</Link>
        <Link>Racial Equity and Justice</Link>
        <Link>Supplier Responsibility</Link>
        <div>
        <p className="footer--link--title">About Apple</p>
        <Link>Newsroom</Link>
        <Link>Apple Leadership</Link>
        <Link>Career Opportunities</Link>
        <Link>Investors</Link>
        <Link>Ethics & Compliance</Link>
        <Link>Events</Link>
        <Link>Contact Apple</Link>
        </div>
        </div>
      </div>
    </div>
  );
}
