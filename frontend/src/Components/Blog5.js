import React from "react";
import "../Styles/Blog.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Import image used in blog post
import blog5 from "../Assets/gutter1.jpg";

function Blog5() {
  const post = {
      title: "Spend Less Time Cleaning — Let Experts Handle the Mess",
      content: `<p>Keeping your home clean and fresh shouldn’t mean sacrificing your weekends or free time. One of the best ways to get your time back — while still enjoying a spotless space — is to let professional cleaners handle the heavy lifting for you.</p>
  
  <p>Hiring cleaning experts isn’t just about convenience; it’s a smart way to protect your home’s value, boost your well-being, and free up hours each week for what truly matters. Here’s why trusting the pros is worth it.</p>
  
  <br />
  
  <h3>1. Gain Back Hours Every Week</h3>
  <p>Deep cleaning, scrubbing, dusting, and tackling hard-to-reach spots can easily eat up your time. Professional cleaners handle these tasks efficiently, so you can spend your evenings and weekends relaxing, spending time with family, or doing what you love.</p>
  
  <br />
  
  <h3>2. A Deeper, Healthier Clean</h3>
  <p>Pros bring specialized tools and products that reach the dirt, germs, and allergens you might miss with everyday cleaning. This means better air quality, fewer allergens, and a healthier home environment for your family.</p>
  
  <br />
  
  <h3>3. Extend the Life of Your Home</h3>
  <p>Routine professional cleaning keeps carpets, floors, upholstery, and appliances in great condition. Dirt and grime break things down over time — but with regular care, your home stays beautiful and functional for years to come.</p>
  
  <br />
  
  <h3>4. No More Stressful Catch-Up</h3>
  <p>When you’re busy, chores can pile up fast. Hiring cleaners means you never have to face an overwhelming mess again. They’ll keep your space tidy and guest-ready, even during your busiest seasons.</p>
  
  <br />
  
  <h4>Bonus Tip: Make It a Habit</h4>
  <p>Consider scheduling regular cleanings — weekly, bi-weekly, or monthly. It’s one of the easiest ways to stay ahead of messes and keep your home consistently spotless without lifting a finger.</p>
  
  <br />
  
  <h4>Final Thoughts</h4>
  <p>Life is too short to spend it scrubbing floors and dusting shelves. Let the experts handle the mess so you can focus on what really matters. A clean, fresh home and more free time? That’s a win-win!</p>
  
  <br />
  
  <p>Relax and reclaim your time — you deserve it! 🧼🕒✨</p>
  `,
    image: blog5
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

export default Blog5;
