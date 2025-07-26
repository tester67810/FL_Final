import React from "react";
import "../Styles/Blog.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Import image used in blog post
import blog6 from "../Assets/deep1.jpg";

function Blog6() {
  const post = {
    title: "Is It Time for a Deep Clean? Signs You Shouldn’t Ignore",
    content: `<p>Sometimes, your home looks clean on the surface — but hidden messes and grime could be building up in places you don’t notice every day. That’s where a deep clean comes in. But how do you know when your usual tidying isn’t enough?</p>

<p>If you’re on the fence about whether you need a deeper scrub or just a regular clean, here are a few clear signs it’s time to level up your cleaning routine.</p>

<br />

<h3>1. Stubborn Odors Won’t Go Away</h3>
<p>If you notice lingering smells in the kitchen, bathroom, or carpets even after you’ve tidied up, it’s often a sign that dirt and bacteria are hiding below the surface. A deep clean targets hidden spots that trap odors.</p>

<br />

<h3>2. Allergies or Dust Are Getting Worse</h3>
<p>More sneezing than usual? Excess dust on shelves and vents can mean it’s time for a detailed dusting, vent cleaning, and thorough wipe-down of spots that daily cleans skip.</p>

<br />

<h3>3. You’re Hosting Guests or Moving In/Out</h3>
<p>Getting ready for visitors, planning a big event at home, or moving into a new space? A deep clean gives your home a fresh start so you can welcome people with confidence — or leave a place spotless for the next owners.</p>

<br />

<h3>4. You Can’t Remember the Last Deep Clean</h3>
<p>If you can’t recall when you last cleaned behind furniture, scrubbed baseboards, or washed inside appliances — it’s probably overdue! Seasonal deep cleans keep your home healthier and looking its best.</p>

<br />

<h4>Bonus Tip: Make Deep Cleans a Habit</h4>
<p>Pair your normal weekly cleaning routine with a deep clean once or twice a year. It’s the best way to maintain a fresh, hygienic home without the stress of tackling everything at once.</p>

<br />

<h4>Final Thoughts</h4>
<p>Daily tidying keeps your home looking neat — but a good deep clean keeps it truly fresh and healthy. Watch for the signs, plan ahead, and your home will always feel like new.</p>

<br />

<p>Breathe easy and enjoy your clean haven! 🌿✨🏡</p>

`,
    image: blog6
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

export default Blog6;
