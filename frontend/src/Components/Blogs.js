import React from "react";
import "../Styles/Blog.css";
import heroImg from "../Assets/blog123.jpg";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

import blog1 from "../Assets/House-cleaning1.jpg";
import blog2 from "../Assets/House-cleaning2.webp";
import blog3 from "../Assets/car2.webp";
import blog4 from "../Assets/car1.png";
import blog5 from "../Assets/gutter1.jpg";
import blog6 from "../Assets/deep1.jpg";

function Blogs() {
  return (
    <div className="blog-page">
      <Navbar />

      {/* Hero Section */}
      <section className="blog-hero">
        <div className="hero-overlay">
          <h1>Welcome to Our Blog</h1>
          <p>Tips, tricks, and insights to keep your home sparkling and stress-free.</p>
        </div>
        <img src={heroImg} alt="Blog Hero" className="hero-image" />
      </section>

      {/* Blog Cards */}
      <section className="blog-list-section">
        <div className="blog-list">
          {[blog1, blog2, blog3, blog4, blog5, blog6].map((image, index) => {
            const blogTitles = [
              "Effortless Ways to Keep Your Home Fresh All Year",
              "Why Hiring Pros for Cleaning Actually Saves You More",
              "5 Quick Cleaning Tips and Hacks Busy People Swear By",
              "Secrets to a Tidy Home: 5 Daily Habits You’ll Love",
              "Spend Less Time Cleaning — Let Experts Handle the Mess",
              "Is It Time for a Deep Clean? Signs You Shouldn’t Ignore"
            ];
            const blogTexts = [
              "Simple daily routines and quick tasks to help you enjoy a sparkling clean home without stress.",
              "Find out how regular professional cleaning keeps your home in top shape and cuts hidden costs.",
              "Learn when a deep clean is worth it and when standard cleaning will keep your home guest-ready.",
              "Adopt easy habits that naturally keep your living spaces organized and dirt-free every day.",
              "Discover how professional cleaners save you hours each week and extend the life of your home.",
              "Get clear on what each service covers so you never overpay or under-clean your spaces."
            ];
            return (
              <div className="blog-card" key={index}>
                <div
                  className="blog-card-image"
                  style={{ backgroundImage: `url(${image})` }}
                ></div>
                <div className="blog-card-content">
                  <h3>{blogTitles[index]}</h3>
                  <p>{blogTexts[index]}</p>
                  <Link to={`/blog${index + 1}`} className="read-more">Read More →</Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Blogs;
