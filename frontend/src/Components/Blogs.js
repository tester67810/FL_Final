import React from "react";
import "../Styles/Blog.css";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";

const blogPosts = [
  {
    id: 1,
    title: "Effortless Ways to Keep Your Home Fresh All Year",
    excerpt: "Simple daily routines and quick tasks to help you enjoy a sparkling clean home without stress.",
    image: "House-cleaning1.jpg"
  },
  {
    id: 2,
    title: "Why Hiring Pros for Cleaning Actually Saves You More",
    excerpt: "Find out how regular professional cleaning keeps your home in top shape and cuts hidden costs.",
    image: "House-cleaning2.webp"
  },
  {
    id: 3,
    title: "5 Quick Cleaning Tips and Hacks Busy People Swear By",
    excerpt: "Learn when a deep clean is worth it and when standard cleaning will keep your home guest-ready.",
    image: "car2.webp"
  },
  {
    id: 4,
    title: "Secrets to a Tidy Home: 5 Daily Habits You’ll Love",
    excerpt: "Adopt easy habits that naturally keep your living spaces organized and dirt-free every day.",
    image: "car1.png"
  },
  {
    id: 5,
    title: "Spend Less Time Cleaning — Let Experts Handle the Mess",
    excerpt: "Discover how professional cleaners save you hours each week and extend the life of your home.",
    image: "gutter1.jpg"
  },
  {
    id: 6,
    title: "Is It Time for a Deep Clean? Signs You Shouldn’t Ignore",
    excerpt: "Get clear on what each service covers so you never overpay or under-clean your spaces.",
    image: "deep1.jpg"
  },
  {
    id: 7,
    title: "Keep Your Home Spotless: Quick Wins for Busy People",
    excerpt: "Practical tricks for busy homeowners to maintain a neat home without spending all weekend scrubbing.",
    image: "deep2.jpg"
  },
  {
    id: 8,
    title: "Professional Cleaners: An Investment That Pays Off",
    excerpt: "Explore the hidden benefits of regular cleaning services for your comfort, health, and savings.",
    image: "deep3.jpg"
  },
  {
    id: 9,
    title: "Deep Cleaning vs. Regular Service: What’s Best for You?",
    excerpt: "Weigh the pros and cons of each cleaning style to match your home’s needs and your budget.",
    image: "final1.jpg"
  }
];

function Blog() {
  const getImageUrl = (filename) => require(`../Assets/${filename}`);

  return (
    <div className="blog-page">
      <Navbar />

      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${require("../Assets/blog123.jpg")})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="overlay-content" style={{ marginTop: "20%" }}>
          <h1>Our Blog</h1>
          <h2>Tips, Insights & Inspiration</h2>
          <p>
            Get the latest cleaning advice, home care tips, and behind-the-scenes updates from the Ivory Standard team.
          </p>
        </div>
      </section>

      {/* Blog Cards */}
      <section className="blog-list-section">
        <div className="blog-list">
          {blogPosts.map((post) => (
            <div className="blog-card" key={post.id}>
              <div
                className="blog-card-image"
                style={{
                  backgroundImage: `url(${getImageUrl(post.image)})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              ></div>
              <div className="blog-card-content">
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link to={`/blog/${post.id}`} className="read-more">
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Blog;
