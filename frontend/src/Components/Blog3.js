import React from "react";
import "../Styles/Blog.css";
import Navbar from "./Navbar";
import Footer from "./Footer";

// Import image used in blog post
import blog3 from "../Assets/car2.webp";

function Blog3() {
  const post = {
   
       title: "5 Quick Cleaning Hacks Busy People Swear By",
       content: `<p>Too busy to spend hours cleaning but still want a home that feels fresh and welcoming? Good news — you don’t need an entire day to make a big difference. With a few clever shortcuts, you can keep mess under control and enjoy a tidy space, even on your busiest weeks.</p>
   
   <p>Try these simple, time-saving cleaning hacks that busy homeowners love.</p>
   
   <br />
   
   <h3>1. Keep a Cleaning Caddy Handy</h3>
   <p>Store your favorite supplies — all-purpose spray, microfiber cloths, sponges — in a portable caddy. Carry it from room to room so you’re always prepared for quick cleanups without wasting time hunting for products.</p>
   
   <br />
   
   <h3>2. Tidy in Short Bursts</h3>
   <p>Set a 10-minute timer once or twice a day. Pick one task — like clearing countertops or wiping bathroom sinks — and see how much you can tackle. Short spurts add up to big results without feeling overwhelming.</p>
   
   <br />
   
   <h3>3. Wipe Down High-Touch Spots</h3>
   <p>Handles, switches, and remote controls gather grime fast. Keep disinfecting wipes nearby and do a quick wipe each evening — it keeps germs at bay and your home feeling fresher with almost no effort.</p>
   
   <br />
   
   <h3>4. Do a Nightly Reset</h3>
   <p>Before bed, spend five minutes putting stray items back where they belong. Clear the sink, fluff cushions, and set things straight. Waking up to a tidy space makes mornings feel calmer.</p>
   
   <br />
   
   <h3>5. Embrace the “One-Minute Rule”</h3>
   <p>If a task takes less than a minute — like hanging up a coat or wiping a spill — do it immediately. Small messes handled in the moment prevent bigger chores later.</p>
   
   <br />
   
   <h4>Final Thoughts</h4>
   <p>Keeping a clean home doesn’t mean spending all day scrubbing. A few smart habits and quick daily wins can help you stay ahead of the mess and enjoy a space you’re proud of — no matter how busy life gets.</p>
   
   <br />
   
   <p>Here’s to a cleaner, calmer home — one tiny hack at a time! ✨🏡🧽</p>
   
   `,
    image: blog3
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

export default Blog3;
