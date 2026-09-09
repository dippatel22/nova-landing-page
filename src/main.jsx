import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, Check, ChevronDown, Clock3, Command, Layers3, Menu, Moon, Play, ShieldCheck, Sparkles, Sun, Users, X, Zap } from 'lucide-react';
import './styles.css';

const features = [
  { icon: Zap, title: 'Automate the busywork', text: 'Turn repetitive steps into simple workflows that keep moving while your team focuses on the work that matters.' },
  { icon: Layers3, title: 'One place for projects', text: 'Plan projects, share files, track decisions and see what needs attention without jumping between tools.' },
  { icon: Sparkles, title: 'AI that feels useful', text: 'Summarize updates, draft next steps and surface blockers with AI built around your real workflow.' },
  { icon: Users, title: 'Work together clearly', text: 'Keep conversations close to the work with mentions, comments and focused team spaces.' },
  { icon: Clock3, title: 'Know what is next', text: 'Smart views give everyone a clear picture of priorities, deadlines and progress at a glance.' },
  { icon: ShieldCheck, title: 'Built for trust', text: 'Permissions, secure workspaces and sensible controls help your team collaborate with confidence.' }
];

const testimonials = [
  { quote: 'NOVA gave us the missing layer between planning and actually getting things done. Our weekly meetings are shorter, and our projects are clearer.', name: 'Maya Shah', role: 'Head of Operations, Arc Studio', initials: 'MS' },
  { quote: 'The best part is that it does not feel like another complicated system. Our team understood it quickly and started using it on day one.', name: 'Daniel Kim', role: 'Product Lead, Northstar', initials: 'DK' },
  { quote: 'We replaced a pile of scattered docs and status messages with one calm workspace. It has made a bigger difference than I expected.', name: 'Elena Torres', role: 'Founder, Loom & Co.', initials: 'ET' }
];

const faqs = [
  ['What is NOVA?', 'NOVA is an AI-powered productivity workspace for teams. It brings projects, tasks, conversations and helpful automation together in one place.'],
  ['Can I try NOVA before paying?', 'Yes. Every plan starts with a 14-day free trial. No credit card is required, so you can explore the workspace before deciding.'],
  ['Does NOVA work for small teams?', 'Absolutely. NOVA is designed to scale from a small startup to a growing organization. You can start small and add people as your needs change.'],
  ['Can I connect my existing tools?', 'NOVA is designed to fit into your stack. The product roadmap includes integrations for calendars, communication, storage and development tools.'],
  ['How does the AI use our data?', 'NOVA keeps workspace access controlled by your organization. AI features are designed to work with the information you choose to use inside your workspace.'],
  ['Can I cancel anytime?', 'Yes. Plans are month-to-month unless you choose annual billing, and you can change or cancel your subscription from your workspace settings.']
];

function Logo(){ return <a className="logo" href="#top" aria-label="NOVA home"><span className="logo-mark"><span></span><span></span></span><span>NOVA</span></a> }
function Button({children, href='#contact', variant='primary', onClick}){ return <a href={href} onClick={onClick} className={`btn ${variant}`}>{children}<ArrowRight size={16}/></a> }

function App(){
  const [menuOpen,setMenuOpen]=useState(false), [dark,setDark]=useState(false), [openFaq,setOpenFaq]=useState(0), [annual,setAnnual]=useState(false), [demo,setDemo]=useState(false), [visibleStats,setVisibleStats]=useState(false);
  useEffect(()=>{ document.documentElement.classList.toggle('dark',dark); },[dark]);
  useEffect(()=>{ const io=new IntersectionObserver(([e])=>{if(e.isIntersecting)setVisibleStats(true)},{threshold:.3}); const el=document.querySelector('.stats'); if(el)io.observe(el); return ()=>io.disconnect(); },[]);
  const closeMenu=()=>setMenuOpen(false);
  return <div id="top">
    <header className="nav-wrap"><nav className="nav container">
      <Logo/>
      <div className={`nav-links ${menuOpen?'open':''}`}>
        {['Product','Solutions','Pricing','FAQ'].map(x=><a key={x} href={'#'+x.toLowerCase()} onClick={closeMenu}>{x}</a>)}
        <a href="#about" onClick={closeMenu}>About</a>
        <div className="mobile-actions"><Button href="#contact" onClick={closeMenu}>Get started</Button></div>
      </div>
      <div className="nav-actions"><button className="icon-btn" aria-label="Toggle theme" onClick={()=>setDark(!dark)}>{dark?<Sun size={18}/>:<Moon size={18}/>}</button><Button href="#contact">Get started</Button></div>
      <button className="hamburger" aria-label={menuOpen?'Close menu':'Open menu'} onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X/>:<Menu/>}</button>
    </nav></header>

    <main>
      <section className="hero section container">
        <div className="hero-copy reveal"><div className="eyebrow"><span className="eyebrow-dot"></span> A calmer way to work</div><h1>Build better.<br/><em>Work smarter.</em></h1><p className="hero-text">NOVA brings your projects, people and everyday work together — with AI that helps your team move faster without adding more noise.</p><div className="hero-actions"><Button href="#pricing">Start free trial</Button><button className="text-btn" onClick={()=>setDemo(true)}><span className="play"><Play size={13} fill="currentColor"/></span> See how it works</button></div><div className="hero-note"><div className="avatar-stack"><span>AK</span><span>MS</span><span>JT</span><span>+</span></div><span>Join 4,000+ teams building with NOVA</span></div></div>
        <div className="hero-visual reveal-delay">
          <div className="glow"></div><div className="dashboard">
            <div className="dash-top"><div className="mini-brand"><span className="mini-dot"></span> Product launch</div><div className="dash-icons"><span></span><span></span><span className="avatar">AK</span></div></div>
            <div className="dash-body"><aside><div className="side-title">WORKSPACE</div><div className="side-item active">⌁ Overview</div><div className="side-item">□ My tasks</div><div className="side-item">◇ Projects</div><div className="side-item">◎ Calendar</div><div className="side-title second">TEAMS</div><div className="side-item">● Design</div><div className="side-item">● Marketing</div></aside>
              <div className="dash-main"><div className="dash-heading"><div><span>Monday, September 9</span><h3>Good morning, Alex <span>✦</span></h3></div><button className="small-btn">+ New task</button></div><div className="metric-row"><div className="metric"><span>Tasks completed</span><strong>24</strong><small>↑ 18% this week</small></div><div className="metric"><span>Project health</span><strong>92%</strong><small>On track</small></div><div className="metric"><span>Focus time</span><strong>6.4h</strong><small>↑ 42m today</small></div></div><div className="board"><div className="board-head"><strong>Launch checklist</strong><span>12 of 18</span></div><div className="progress"><i style={{width:'67%'}}></i></div>{['Finalize landing page','Review launch email','Prepare customer demo'].map((t,i)=><div className="task" key={t}><span className={`check ${i<2?'done':''}`}>{i<2?'✓':''}</span><span>{t}</span><b>{i===0?'Today':i===1?'Tomorrow':'Sep 12'}</b></div>)}</div></div>
            </div>
          </div>
        </div>
      </section>

      <section className="trusted"><div className="container trusted-inner"><span>Trusted by teams at</span><div className="logos"><b>arc<span>studio</span></b><b>north<span>star</span></b><b>LOOM&CO.</b><b>vertex<span>labs</span></b><b>HARBOR</b></div></div></section>

      <section id="product" className="section features container"><div className="section-head"><div><div className="eyebrow">Everything in sync</div><h2>Less chasing.<br/><em>More doing.</em></h2></div><p>Designed for teams that want clarity without another layer of complexity. NOVA gives every person the context they need to do their best work.</p></div><div className="feature-grid">{features.map(({icon:Icon,title,text},i)=><article className="feature-card" key={title}><div className="feature-icon"><Icon size={20}/></div><span className="feature-no">0{i+1}</span><h3>{title}</h3><p>{text}</p><a href="#contact">Learn more <ArrowRight size={15}/></a></article>)}</div></section>

      <section id="about" className="section story"><div className="container story-grid"><div className="story-visual"><div className="orbit orbit-one"></div><div className="orbit orbit-two"></div><div className="story-card"><div className="spark">✦</div><strong>Work, <em>in flow.</em></strong><p>Turn scattered ideas into clear next steps.</p><div className="flow-line"><span>Idea</span><i></i><span>Plan</span><i></i><span>Ship</span></div></div></div><div className="story-copy"><div className="eyebrow">Made for momentum</div><h2>Your team has enough<br/><em>tabs open.</em></h2><p>NOVA is built around a simple idea: your tools should make work feel lighter, not make your process heavier.</p><div className="check-list"><div><Check size={17}/><span>One shared source of truth for every project.</span></div><div><Check size={17}/><span>AI assistance that saves time, not personality.</span></div><div><Check size={17}/><span>Flexible enough for the way your team already works.</span></div></div><Button href="#solutions">Explore solutions</Button></div></div></section>

      <section className="section process container"><div className="center-head"><div className="eyebrow">Simple by design</div><h2>From thought to <em>done.</em></h2><p>Three steps. One workspace. A lot less back-and-forth.</p></div><div className="steps"><div className="step"><span>01</span><div className="step-icon">⌁</div><h3>Capture</h3><p>Bring ideas, requests and tasks into one place before they get lost.</p></div><div className="step"><span>02</span><div className="step-icon">◇</div><h3>Connect</h3><p>Give work the right people, context and deadlines automatically.</p></div><div className="step"><span>03</span><div className="step-icon">✦</div><h3>Move forward</h3><p>Use smart summaries and clear priorities to keep momentum every day.</p></div></div></section>

      <section className="stats"><div className="container stats-grid"><div><strong>{visibleStats?'4,000+':'0'}</strong><span>teams worldwide</span></div><div><strong>{visibleStats?'38%':'0%'}</strong><span>less time in status meetings</span></div><div><strong>{visibleStats?'2.4×':'0×'}</strong><span>faster project handoffs</span></div><div><strong>{visibleStats?'99.9%':'0%'}</strong><span>platform uptime</span></div></div></section>

      <section id="solutions" className="section solutions container"><div className="section-head"><div><div className="eyebrow">Built around your work</div><h2>One platform.<br/><em>Many ways to use it.</em></h2></div><p>Whether you are launching a product, running a creative studio or scaling a growing company, NOVA adapts to the way your team works.</p></div><div className="solution-grid"><article><div className="solution-top"><span className="solution-icon">↗</span><span>01</span></div><h3>Product teams</h3><p>Keep roadmaps, specs, decisions and launches moving together.</p><a href="#contact">Explore product workflows <ArrowRight size={15}/></a></article><article><div className="solution-top"><span className="solution-icon">✦</span><span>02</span></div><h3>Creative teams</h3><p>Move from first concept to final approval without endless threads.</p><a href="#contact">Explore creative workflows <ArrowRight size={15}/></a></article><article><div className="solution-top"><span className="solution-icon">◎</span><span>03</span></div><h3>Growing companies</h3><p>Create repeatable processes while keeping your team flexible.</p><a href="#contact">Explore team workflows <ArrowRight size={15}/></a></article></div></section>

      <section className="section testimonials"><div className="container"><div className="center-head"><div className="eyebrow">Good work, good words</div><h2>Loved by people who <em>ship.</em></h2></div><div className="testimonial-grid">{testimonials.map(t=><article className="quote" key={t.name}><div className="quote-mark">“</div><p>{t.quote}</p><div className="person"><span>{t.initials}</span><div><strong>{t.name}</strong><small>{t.role}</small></div></div></article>)}</div></div></section>

      <section id="pricing" className="section pricing container"><div className="center-head"><div className="eyebrow">Straightforward pricing</div><h2>Pick your <em>pace.</em></h2><p>Start free. Upgrade when your team is ready.</p><div className="toggle"><button className={!annual?'active':''} onClick={()=>setAnnual(false)}>Monthly</button><button className={annual?'active':''} onClick={()=>setAnnual(true)}>Yearly <span>Save 20%</span></button></div></div><div className="pricing-grid">
        {[['Starter',annual?'$8':'$10','For small teams getting organized',['Unlimited projects','AI summaries','5 GB file storage','Basic automations']],['Growth',annual?'$16':'$20','For teams building momentum',['Everything in Starter','Advanced automations','50 GB file storage','Custom workflows']],['Scale',annual?'$32':'$40','For organizations moving fast',['Everything in Growth','Unlimited storage','Priority support','Advanced permissions']]].map((p,i)=><article className={`price-card ${i===1?'featured':''}`} key={p[0]}>{i===1&&<div className="popular">Most popular</div>}<h3>{p[0]}</h3><p>{p[2]}</p><div className="price"><strong>{p[1]}</strong><span>/ user / mo</span></div><Button href="#contact" variant={i===1?'primary':'secondary'}>Choose {p[0]}</Button><ul>{p[3].map(x=><li key={x}><Check size={16}/>{x}</li>)}</ul></article>)}
      </div></section>

      <section id="faq" className="section faq container"><div className="faq-intro"><div className="eyebrow">Questions, answered</div><h2>Still curious?</h2><p>If you cannot find what you are looking for, our team is always happy to help.</p><a href="mailto:hello@nova.example">Talk to our team <ArrowRight size={15}/></a></div><div className="faq-list">{faqs.map(([q,a],i)=><div className={`faq-item ${openFaq===i?'open':''}`} key={q}><button onClick={()=>setOpenFaq(openFaq===i?-1:i)} aria-expanded={openFaq===i}><span>{q}</span><ChevronDown size={18}/></button><div className="faq-answer"><p>{a}</p></div></div>)}</div></section>

      <section id="contact" className="cta"><div className="container cta-inner"><div><div className="eyebrow">Ready when you are</div><h2>Make your next<br/><em>good idea happen.</em></h2><p>Start your free 14-day trial and see what a calmer workflow feels like.</p></div><div className="cta-actions"><Button href="#pricing">Start free trial</Button><a href="mailto:hello@nova.example" className="outline-btn">Talk to us <ArrowRight size={16}/></a></div></div></section>
    </main>
    <footer><div className="container footer-grid"><div><Logo/><p>A calmer workspace for teams that care about doing great work.</p></div><div><strong>Product</strong><a href="#product">Features</a><a href="#pricing">Pricing</a><a href="#faq">FAQ</a></div><div><strong>Company</strong><a href="#about">About</a><a href="#solutions">Solutions</a><a href="mailto:hello@nova.example">Contact</a></div><div><strong>Stay in the loop</strong><p>Monthly ideas for better work.</p><form onSubmit={e=>{e.preventDefault();alert('Thanks — you’re on the list!')}}><input aria-label="Email address" type="email" placeholder="you@company.com" required/><button aria-label="Subscribe"><ArrowRight size={17}/></button></form></div></div><div className="container footer-bottom"><span>© 2026 NOVA. Fictional company for demonstration.</span><span>Privacy · Terms</span></div></footer>
    {demo&&<div className="modal-backdrop" onClick={()=>setDemo(false)}><div className="modal" onClick={e=>e.stopPropagation()}><button className="modal-close" onClick={()=>setDemo(false)} aria-label="Close"><X/></button><div className="modal-play"><Play size={24} fill="currentColor"/></div><h3>See NOVA in action</h3><p>This demo is intentionally lightweight. In a production site, this space could hold a product walkthrough video or interactive tour.</p><Button href="#product" onClick={()=>setDemo(false)}>Explore features</Button></div></div>}
  </div>
}
createRoot(document.getElementById('root')).render(<App/>);
