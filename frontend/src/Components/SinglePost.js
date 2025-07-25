import React from "react";
import { useParams, Link } from "react-router-dom";
import "../Styles/Blog.css";
import heroImg from "../Assets/roof1.jpg";
import blog1 from "../Assets/House-cleaning1.jpg"
import blog2 from "../Assets/House-cleaning2.webp"
import blog3 from "../Assets/car2.webp"
import blog4 from "../Assets/car1.png"
import blog5 from "../Assets/gutter1.jpg"
import blog6 from "../Assets/deep1.jpg"
import blog7 from "../Assets/deep2.jpg"
import blog8 from "../Assets/deep3.jpg"
import blog9 from "../Assets/final1.jpg"
import Navbar from "./Navbar";
import Footer from "./Footer";

const blogPosts = [
  {
    id: "1",
    title: "Effortless Ways to Keep Your Home Fresh All Year",
   content: `
<p>Keeping your home spotless year-round doesn’t have to feel like a never-ending chore. With the right habits and a little planning, you can enjoy a tidy, welcoming space every single day — without spending your entire weekend cleaning.</p>

<p>A spotless home is all about consistency — not perfection. Focus on small, daily habits that add up over time. And don’t be afraid to ask for help when needed. For bigger tasks or when life gets busy, consider hiring a professional cleaning service to give your home a fresh start. A clean, clutter-free space makes life more comfortable and relaxing — and you’ll always be ready to welcome guests with pride!</p>

<br />

<h3>1. Declutter Frequently</h3>
<p>One of the biggest secrets to a spotless home is keeping clutter at bay. Take 10–15 minutes every evening to put away items that have accumulated on countertops, tables, and floors. Donate, sell, or throw away things you no longer need. A clutter-free space instantly looks cleaner — and is much easier to maintain.</p>

<br />

<h3>2. Make Your Bed Every Morning</h3>
<p>This small habit sets the tone for the whole day. A made bed instantly makes your bedroom look more organized. Teach kids to make their beds too — it only takes a few minutes, but the payoff is huge.</p>

<br />

<h3>3. Establish a Simple Daily Cleaning Routine</h3>
<p>Instead of waiting until your home is a mess, do small tasks daily. Wipe kitchen counters after meals, sweep high-traffic areas, and tidy up common spaces. This prevents dirt and mess from piling up and makes deep cleaning sessions much quicker.</p>

<br />

<h3>4. Tackle One Deep-Cleaning Task Each Week</h3>
<p>Choose one area to deep clean every week — like scrubbing bathroom tiles, vacuuming behind furniture, or cleaning out the fridge. By rotating tasks, you’ll cover your whole home each month without feeling overwhelmed.</p>

<br />

<h3>5. Keep Cleaning Supplies Handy</h3>
<p>Store essential supplies where you need them most. For example, keep disinfecting wipes in the bathroom and kitchen for quick clean-ups. Having supplies within reach makes it easier to handle spills or messes right away.</p>

<br />

<h4>Bonus Tip: Involve the Whole Family</h4>
<p>Keeping a home spotless shouldn’t be a one-person job. Assign simple tasks to everyone in the household. Even young kids can help by putting away toys or wiping down tables. Make it fun by turning on music or setting a timer for quick clean-up races!</p>

<br />

<h4>Final Thoughts</h4>
<p>A fresh, welcoming home is all about consistency — not perfection. Focus on daily habits that make cleaning feel effortless and manageable. And when life gets hectic, don’t hesitate to get a little extra help. You deserve to relax in a home you’re proud of — all year long!</p>

<br />

<p>Happy cleaning! 🧽✨</p>

`
,
    image: blog1
  },
  {
    id: "2",
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
  },
  {
    id: "3",
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
  },
   {
    id: "4",
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
  },
  {
    id: "5",
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
  },
  {
    id: "6",
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
  },  
   {
    id: "7",
    title: "Keep Your Home Spotless: Quick Wins for Busy People",
    content: `<p>Life gets busy, but that doesn’t mean your home has to suffer. If you feel like you don’t have time to keep your space clean and welcoming, you’re not alone — and you don’t need to spend your entire weekend scrubbing to stay on top of it.</p>

<p>With a few smart habits and quick wins, you can keep your home neat and fresh, even on your busiest days. Here’s how to make it happen without the stress.</p>

<br />

<h3>1. Tidy as You Go</h3>
<p>The easiest way to avoid a huge cleaning session? Clean up little messes right away. Put dishes straight in the dishwasher, wipe spills as they happen, and hang up clothes instead of tossing them on a chair. These small actions save hours later.</p>

<br />

<h3>2. Focus on High-Traffic Zones</h3>
<p>When you’re short on time, focus your effort where it matters most — like the living room, kitchen, and bathroom. A quick vacuum, a wiped counter, and fresh towels go a long way to making your whole home feel clean.</p>

<br />

<h3>3. Keep Supplies Within Reach</h3>
<p>Store basic cleaning supplies where you use them: disinfecting wipes in the bathroom, an all-purpose spray in the kitchen. This makes it easy to tackle messes in the moment instead of putting them off for later.</p>

<br />

<h3>4. Set a 15-Minute Timer</h3>
<p>Cleaning doesn’t have to drag on forever. Set a timer for 15 minutes and do as much as you can — pick up clutter, wipe surfaces, sweep the floor. You’ll be surprised how much you can accomplish in a short burst!</p>

<br />

<h3>5. Don’t Be Afraid to Ask for Help</h3>
<p>When life is hectic, don’t carry it all alone. Get the family involved — kids can put away toys or help with laundry. Or hire professional cleaners for a monthly deep clean to keep things under control without the stress.</p>

<br />

<h4>Bonus Tip: Stick to a Small Daily Routine</h4>
<p>A quick tidy-up every day beats marathon cleaning sessions every few weeks. Five minutes here and there keeps dirt and clutter from piling up and makes your weekends feel free again.</p>

<br />

<h4>Final Thoughts</h4>
<p>Keeping your home spotless doesn’t mean spending every free minute scrubbing. With smart habits and a few quick wins, even the busiest people can enjoy a clean, comfortable space — without sacrificing their time.</p>

<br />

<p>Stay busy, stay tidy — you’ve got this! ✨🏡🧽</p>
`,

    image: blog7
  },
  {
    id: "8",
    title: "Professional Cleaners — An Investment That Pays Off",
    content: `<p>Many people see hiring professional cleaners as an extra expense, but it’s actually a smart investment that pays off in ways you might not expect. Beyond saving you time, a trusted cleaning service protects your home’s value, improves your well-being, and can even save you money in the long run.</p>

<p>Here’s how regular professional cleaning delivers real returns you’ll appreciate every day.</p>

<br />

<h3>1. Protects Your Home’s Value</h3>
<p>Routine cleaning keeps carpets, floors, furniture, and fixtures in great condition. Dust, grime, and neglect can wear down surfaces fast, leading to costly repairs or replacements. Regular upkeep by pros extends the life of what you already own.</p>

<br />

<h3>2. Supports a Healthier Living Space</h3>
<p>Professionals know how to get rid of hidden dust, allergens, and germs that you might miss. This means better air quality, fewer allergies, and a healthier environment for your family — all of which can help cut down on medical costs over time.</p>

<br />

<h3>3. Saves You Time — and Time is Money</h3>
<p>Think of the hours you spend scrubbing, dusting, or vacuuming. When you hire pros, you free up valuable time for work, family, or simply relaxing. For many busy households, that’s worth every penny.</p>

<br />

<h3>4. Stress Less, Live More</h3>
<p>Coming home to a clean, fresh space instantly lifts your mood. No last-minute panic before guests arrive, no more spending weekends catching up on chores. Less stress, more comfort — that’s a return you can feel every day.</p>

<br />

<h4>Bonus Tip: Schedule Consistent Service</h4>
<p>Consistency is key. Booking a bi-weekly or monthly service keeps your home spotless year-round and ensures you get the full benefit of your investment.</p>

<br />

<h4>Final Thoughts</h4>
<p>Professional cleaning isn’t just about a clean house — it’s about protecting your space, your time, and your peace of mind. The returns? More free time, a healthier home, and savings down the line.</p>

<br />

<p>Invest in a clean home — your future self will thank you! 🧽🏡💚</p>
`,

    image: blog8
  },
  {
    id: "9",
    title: "Deep Cleaning vs. Regular Service — What’s Best for You?",
    content: `<p>Not sure whether you need a deep clean or a standard cleaning service? Many homeowners wonder what makes them different — and how to choose the best option for their space and budget.</p>

<p>Let’s break down both services so you can make a confident choice and get the clean home you deserve.</p>

<br />

<h3>1. What’s Included in Regular Cleaning?</h3>
<p>A standard clean keeps your home fresh and presentable day to day. This typically covers dusting surfaces, wiping counters, vacuuming or mopping floors, cleaning bathrooms and kitchens, taking out trash, and tidying up common areas. It’s ideal for weekly or bi-weekly upkeep.</p>

<br />

<h3>2. What Does Deep Cleaning Add?</h3>
<p>Deep cleaning goes beyond the basics. It includes detailed tasks like scrubbing grout, washing baseboards, cleaning inside appliances, dusting blinds and vents, and reaching hidden corners. This type of service is more intensive and leaves your home feeling like new.</p>

<br />

<h3>3. When to Choose Deep Cleaning</h3>
<p>Go for a deep clean when you need a fresh start — like before hosting guests, moving in or out, or after a busy season when routine cleaning just hasn’t cut it. Many people book deep cleans once or twice a year to reset their space.</p>

<br />

<h3>4. When is Standard Cleaning Enough?</h3>
<p>If you keep up with daily tidying and want to maintain a neat, guest-ready home, regular cleaning is perfect. It’s faster, more budget-friendly, and keeps mess under control week after week.</p>

<br />

<h4>Bonus Tip: Combine Both for the Best Results</h4>
<p>Most busy households benefit from regular cleaning with a seasonal deep clean. It’s the best way to protect your home’s condition without overspending or overworking yourself.</p>

<br />

<h4>Final Thoughts</h4>
<p>Deep cleaning and standard cleaning each have their place. Pick what fits your needs today — and don’t be afraid to mix both for a truly fresh, healthy home all year long.</p>

<br />

<p>Clean wisely, live happily! 🧹✨🏠</p>
`,

    image: blog9
  }
];

function SinglePost() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="blog-page">
        <h2>Post Not Found</h2>
       
      </div>
    );
  }

  return (
    <div className="blog-page">
      <Navbar />

      {/* Hero */}
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
        <div className="overlay-content" style={{marginTop:100}}>
          <h1>{post.title}</h1>
          <p className="post-date">{post.date}</p>
        </div>
      </section>

      {/* Content */}
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

export default SinglePost;
