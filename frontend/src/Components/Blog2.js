import React from "react";
import "../Styles/Blog.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Import image used in blog post
import blog2 from "../Assets/House-cleaning2.webp";

function Blog2() {
  const post = {
    title: "Why Hiring Pros for Cleaning Actually Saves You More",
    content: `<p>Many homeowners think hiring professional cleaners is a luxury — but in reality, it’s an investment that can actually save you time, money, and stress in the long run. A well-maintained home doesn’t just look beautiful; it stays healthier, lasts longer, and requires fewer costly repairs down the road.</p>

<p>When life gets busy, it’s easy to overlook deep cleaning tasks like carpet shampooing, grout scrubbing, or dusting those hard-to-reach spots. Over time, this neglect can lead to wear and tear that costs far more to fix than it would to maintain. Professional cleaners have the tools, skills, and know-how to keep every corner of your home spotless — protecting your investment and your family’s well-being.</p>

<br />

<h3>1. Extend the Life of Your Home</h3>
<p>Regular cleaning prevents dirt, dust, and grime from building up and damaging surfaces, appliances, and fabrics. By hiring pros, you ensure your floors, carpets, furniture, and fixtures stay in great shape for years to come.</p>

<br />

<h3>2. Save on Expensive Repairs</h3>
<p>When your home is cleaned thoroughly and often, you’re less likely to face costly surprises like mold growth, pest infestations, or damage to floors and walls. Preventative cleaning helps you avoid big repair bills later.</p>

<br />

<h3>3. Get Back Your Time</h3>
<p>Your time is valuable. By outsourcing bigger cleaning tasks, you free up hours to spend with family, focus on work, or simply relax. Professionals handle the scrubbing so you don’t have to.</p>

<br />

<h3>4. Healthier Living Environment</h3>
<p>Professional cleaners use proper products and techniques to remove allergens, bacteria, and dust mites that a quick tidy-up might miss. This means fewer colds, allergies, and breathing issues for your family.</p>

<br />

<h4>Bonus Tip: Schedule Regular Visits</h4>
<p>Instead of calling cleaners only before special occasions, book them on a recurring basis. Bi-weekly or monthly services keep your home consistently fresh — and make maintenance easier between visits.</p>

<br />

<h4>Final Thoughts</h4>
<p>Hiring professional cleaners isn’t about spending more — it’s about investing wisely in your home’s longevity and your own peace of mind. The savings on repairs, medical bills, and your precious time can be worth every penny.</p>

<br />

<p>Relax and let the pros handle the mess — your future self will thank you! 🧹✨</p>
`,
    image: blog2
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

export default Blog2;
