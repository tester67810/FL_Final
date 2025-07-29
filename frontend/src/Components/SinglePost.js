// import React from "react";
// import { useParams } from "react-router-dom";
// import "../Styles/Blog.css";

// import Navbar from "./Navbar";
// import Footer from "./Footer";

// // Import all images from src/Assets
// import heroImg from "../Assets/roof1.jpg";
// import blog1 from "../Assets/House-cleaning1.jpg";





// import blog7 from "../Assets/deep2.jpg";
// import blog8 from "../Assets/deep3.jpg";
// import blog9 from "../Assets/final1.jpg";


// const blogPosts = [
//   {
//     id: "1",
//     title: "Effortless Ways to Keep Your Home Fresh All Year",
//    content: `
// <p>Keeping your home spotless year-round doesn’t have to feel like a never-ending chore. With the right habits and a little planning, you can enjoy a tidy, welcoming space every single day — without spending your entire weekend cleaning.</p>

// <p>A spotless home is all about consistency — not perfection. Focus on small, daily habits that add up over time. And don’t be afraid to ask for help when needed. For bigger tasks or when life gets busy, consider hiring a professional cleaning service to give your home a fresh start. A clean, clutter-free space makes life more comfortable and relaxing — and you’ll always be ready to welcome guests with pride!</p>

// <br />

// <h3>1. Declutter Frequently</h3>
// <p>One of the biggest secrets to a spotless home is keeping clutter at bay. Take 10–15 minutes every evening to put away items that have accumulated on countertops, tables, and floors. Donate, sell, or throw away things you no longer need. A clutter-free space instantly looks cleaner — and is much easier to maintain.</p>

// <br />

// <h3>2. Make Your Bed Every Morning</h3>
// <p>This small habit sets the tone for the whole day. A made bed instantly makes your bedroom look more organized. Teach kids to make their beds too — it only takes a few minutes, but the payoff is huge.</p>

// <br />

// <h3>3. Establish a Simple Daily Cleaning Routine</h3>
// <p>Instead of waiting until your home is a mess, do small tasks daily. Wipe kitchen counters after meals, sweep high-traffic areas, and tidy up common spaces. This prevents dirt and mess from piling up and makes deep cleaning sessions much quicker.</p>

// <br />

// <h3>4. Tackle One Deep-Cleaning Task Each Week</h3>
// <p>Choose one area to deep clean every week — like scrubbing bathroom tiles, vacuuming behind furniture, or cleaning out the fridge. By rotating tasks, you’ll cover your whole home each month without feeling overwhelmed.</p>

// <br />

// <h3>5. Keep Cleaning Supplies Handy</h3>
// <p>Store essential supplies where you need them most. For example, keep disinfecting wipes in the bathroom and kitchen for quick clean-ups. Having supplies within reach makes it easier to handle spills or messes right away.</p>

// <br />

// <h4>Bonus Tip: Involve the Whole Family</h4>
// <p>Keeping a home spotless shouldn’t be a one-person job. Assign simple tasks to everyone in the household. Even young kids can help by putting away toys or wiping down tables. Make it fun by turning on music or setting a timer for quick clean-up races!</p>

// <br />

// <h4>Final Thoughts</h4>
// <p>A fresh, welcoming home is all about consistency — not perfection. Focus on daily habits that make cleaning feel effortless and manageable. And when life gets hectic, don’t hesitate to get a little extra help. You deserve to relax in a home you’re proud of — all year long!</p>

// <br />

// <p>Happy cleaning! 🧽✨</p>

// `
// ,
//     image: blog1
//   },
//   {

//     image: blog2
//   },
//   {
 
//     image: blog3
//   },
//    {

//     image: blog4
//   },
//   {
 
  
//     image: blog5
//   },
//   {

   
//     image: blog6
//   },  
//    {
//     id: "7",
//     title: "Keep Your Home Spotless: Quick Wins for Busy People",
//     content: `<p>Life gets busy, but that doesn’t mean your home has to suffer. If you feel like you don’t have time to keep your space clean and welcoming, you’re not alone — and you don’t need to spend your entire weekend scrubbing to stay on top of it.</p>

// <p>With a few smart habits and quick wins, you can keep your home neat and fresh, even on your busiest days. Here’s how to make it happen without the stress.</p>

// <br />

// <h3>1. Tidy as You Go</h3>
// <p>The easiest way to avoid a huge cleaning session? Clean up little messes right away. Put dishes straight in the dishwasher, wipe spills as they happen, and hang up clothes instead of tossing them on a chair. These small actions save hours later.</p>

// <br />

// <h3>2. Focus on High-Traffic Zones</h3>
// <p>When you’re short on time, focus your effort where it matters most — like the living room, kitchen, and bathroom. A quick vacuum, a wiped counter, and fresh towels go a long way to making your whole home feel clean.</p>

// <br />

// <h3>3. Keep Supplies Within Reach</h3>
// <p>Store basic cleaning supplies where you use them: disinfecting wipes in the bathroom, an all-purpose spray in the kitchen. This makes it easy to tackle messes in the moment instead of putting them off for later.</p>

// <br />

// <h3>4. Set a 15-Minute Timer</h3>
// <p>Cleaning doesn’t have to drag on forever. Set a timer for 15 minutes and do as much as you can — pick up clutter, wipe surfaces, sweep the floor. You’ll be surprised how much you can accomplish in a short burst!</p>

// <br />

// <h3>5. Don’t Be Afraid to Ask for Help</h3>
// <p>When life is hectic, don’t carry it all alone. Get the family involved — kids can put away toys or help with laundry. Or hire professional cleaners for a monthly deep clean to keep things under control without the stress.</p>

// <br />

// <h4>Bonus Tip: Stick to a Small Daily Routine</h4>
// <p>A quick tidy-up every day beats marathon cleaning sessions every few weeks. Five minutes here and there keeps dirt and clutter from piling up and makes your weekends feel free again.</p>

// <br />

// <h4>Final Thoughts</h4>
// <p>Keeping your home spotless doesn’t mean spending every free minute scrubbing. With smart habits and a few quick wins, even the busiest people can enjoy a clean, comfortable space — without sacrificing their time.</p>

// <br />

// <p>Stay busy, stay tidy — you’ve got this! ✨🏡🧽</p>
// `,

//     image: blog7
//   },
//   {
//     id: "8",
//     title: "Professional Cleaners — An Investment That Pays Off",
//     content: `<p>Many people see hiring professional cleaners as an extra expense, but it’s actually a smart investment that pays off in ways you might not expect. Beyond saving you time, a trusted cleaning service protects your home’s value, improves your well-being, and can even save you money in the long run.</p>

// <p>Here’s how regular professional cleaning delivers real returns you’ll appreciate every day.</p>

// <br />

// <h3>1. Protects Your Home’s Value</h3>
// <p>Routine cleaning keeps carpets, floors, furniture, and fixtures in great condition. Dust, grime, and neglect can wear down surfaces fast, leading to costly repairs or replacements. Regular upkeep by pros extends the life of what you already own.</p>

// <br />

// <h3>2. Supports a Healthier Living Space</h3>
// <p>Professionals know how to get rid of hidden dust, allergens, and germs that you might miss. This means better air quality, fewer allergies, and a healthier environment for your family — all of which can help cut down on medical costs over time.</p>

// <br />

// <h3>3. Saves You Time — and Time is Money</h3>
// <p>Think of the hours you spend scrubbing, dusting, or vacuuming. When you hire pros, you free up valuable time for work, family, or simply relaxing. For many busy households, that’s worth every penny.</p>

// <br />

// <h3>4. Stress Less, Live More</h3>
// <p>Coming home to a clean, fresh space instantly lifts your mood. No last-minute panic before guests arrive, no more spending weekends catching up on chores. Less stress, more comfort — that’s a return you can feel every day.</p>

// <br />

// <h4>Bonus Tip: Schedule Consistent Service</h4>
// <p>Consistency is key. Booking a bi-weekly or monthly service keeps your home spotless year-round and ensures you get the full benefit of your investment.</p>

// <br />

// <h4>Final Thoughts</h4>
// <p>Professional cleaning isn’t just about a clean house — it’s about protecting your space, your time, and your peace of mind. The returns? More free time, a healthier home, and savings down the line.</p>

// <br />

// <p>Invest in a clean home — your future self will thank you! 🧽🏡💚</p>
// `,

//     image: blog8
//   },
//   {
//     id: "9",
//     title: "Deep Cleaning vs. Regular Service — What’s Best for You?",
//     content: `<p>Not sure whether you need a deep clean or a standard cleaning service? Many homeowners wonder what makes them different — and how to choose the best option for their space and budget.</p>

// <p>Let’s break down both services so you can make a confident choice and get the clean home you deserve.</p>

// <br />

// <h3>1. What’s Included in Regular Cleaning?</h3>
// <p>A standard clean keeps your home fresh and presentable day to day. This typically covers dusting surfaces, wiping counters, vacuuming or mopping floors, cleaning bathrooms and kitchens, taking out trash, and tidying up common areas. It’s ideal for weekly or bi-weekly upkeep.</p>

// <br />

// <h3>2. What Does Deep Cleaning Add?</h3>
// <p>Deep cleaning goes beyond the basics. It includes detailed tasks like scrubbing grout, washing baseboards, cleaning inside appliances, dusting blinds and vents, and reaching hidden corners. This type of service is more intensive and leaves your home feeling like new.</p>

// <br />

// <h3>3. When to Choose Deep Cleaning</h3>
// <p>Go for a deep clean when you need a fresh start — like before hosting guests, moving in or out, or after a busy season when routine cleaning just hasn’t cut it. Many people book deep cleans once or twice a year to reset their space.</p>

// <br />

// <h3>4. When is Standard Cleaning Enough?</h3>
// <p>If you keep up with daily tidying and want to maintain a neat, guest-ready home, regular cleaning is perfect. It’s faster, more budget-friendly, and keeps mess under control week after week.</p>

// <br />

// <h4>Bonus Tip: Combine Both for the Best Results</h4>
// <p>Most busy households benefit from regular cleaning with a seasonal deep clean. It’s the best way to protect your home’s condition without overspending or overworking yourself.</p>

// <br />

// <h4>Final Thoughts</h4>
// <p>Deep cleaning and standard cleaning each have their place. Pick what fits your needs today — and don’t be afraid to mix both for a truly fresh, healthy home all year long.</p>

// <br />

// <p>Clean wisely, live happily! 🧹✨🏠</p>
// `,

//     image: blog9
//   }
// ];

// function SinglePost() {
//   const { id } = useParams();
//   const post = blogPosts.find((p) => p.id === id);

//   if (!post) {
//     return (
//       <div className="blog-page">
//         <h2>Post Not Found</h2>
       
//       </div>
//     );
//   }

//   return (
//     <div className="blog-page">
//       <Navbar />

//       {/* Hero */}
//       <section
//         className="hero-section"
//         style={{
//           backgroundImage: `url(${post.image})`,
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           color: "#fff",
//           padding: "100px 20px",
//           textAlign: "center",
//         }}
//       >
//         <div className="overlay-content" style={{marginTop:100}}>
//           <h1>{post.title}</h1>
//           <p className="post-date">{post.date}</p>
//         </div>
//       </section>

//       {/* Content */}
//       <section className="single-post-content">
//         <div className="container">
  

//           <div
//   className="post-body"
//   style={{ marginTop: "-2rem", fontSize: "18px", lineHeight: "1.6" }}
//   dangerouslySetInnerHTML={{ __html: post.content }}
// />

//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// }

// export default SinglePost;

