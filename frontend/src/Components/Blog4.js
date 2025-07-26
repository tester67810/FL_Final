import React from "react";
import "../Styles/Blog.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Import image used in blog post
import blog4 from "../Assets/car1.png";

function Blog4() {
  const post = {

    title: "Secrets to a Tidy Home: 5 Daily Habits You’ll Love",
    content: `<p>A tidy home doesn’t happen by accident — it’s the result of small, simple habits done consistently. The good news? These habits don’t take much time but can make a big difference in how fresh and organized your home feels every single day.</p>

<p>By building these daily routines into your life, you’ll spend less time deep cleaning and more time enjoying a calm, clutter-free space. Here are five effortless habits you can start today!</p>

<br />

<h3>1. Do a 10-Minute Tidy-Up</h3>
<p>Set a timer for 10 minutes each evening to do a quick sweep through your main living areas. Put away stray items, fluff pillows, fold blankets, and wipe down surfaces. It’s amazing how much you can get done in just 10 minutes!</p>

<br />

<h3>2. Wipe Down Counters After Use</h3>
<p>Kitchen and bathroom counters collect crumbs, spills, and grime fast. Make it a habit to wipe them after cooking or brushing your teeth. It only takes seconds but keeps your home looking fresh and prevents sticky messes later.</p>

<br />

<h3>3. Manage Mail and Paper Clutter Immediately</h3>
<p>Don’t let paper pile up on tables or counters. Sort your mail as soon as it comes in — recycle junk, file bills, and keep important papers in a designated spot. This stops clutter from taking over.</p>

<br />

<h3>4. Never Leave Dishes Overnight</h3>
<p>Make it a rule to tackle dirty dishes before bed. Whether you load the dishwasher or wash by hand, waking up to a clean sink sets a positive tone for the next day and prevents odors or pests.</p>

<br />

<h3>5. Put Things Back Where They Belong</h3>
<p>This simple habit saves you time and stress. Teach everyone in your household to put things back after using them — shoes in the rack, keys on the hook, toys in bins. It keeps your space organized with minimal effort.</p>

<br />

<h4>Bonus Tip: Make It Fun!</h4>
<p>Turn tidying into a family routine. Put on upbeat music, make it a quick game, or reward yourself with a treat afterward. When it doesn’t feel like a chore, you’ll stick with it!</p>

<br />

<h4>Final Thoughts</h4>
<p>These tiny habits may seem simple, but together they add up to a consistently tidy, welcoming home — without marathon cleaning sessions. Start with one or two and build from there. Your future self will thank you!</p>

<br />

<p>Happy tidying! 🧹🏡✨</p>
`,
    image: blog4
  };

  return (
    <div className="blog-page">
      <Navbar />

      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${post.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "#fff",
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <div className="overlay-content" style={{ marginTop: 100 }}>
          <h1>{post.title}</h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="single-post-content">
        <div className="container">
          <div
            className="post-body"
            style={{ marginTop: "-2rem", fontSize: "18px", lineHeight: "1.6" }}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Blog4;
