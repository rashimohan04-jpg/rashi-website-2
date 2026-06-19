import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Mail, ArrowUpRight, ChevronRight, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./components/figma/ImageWithFallback";
import mapPhoto from "../imports/migration_asylum_project_converted.jpg";
import partIIIPhoto from "../imports/part_iii.jpg";
import chaudhryPhoto from "../imports/yug_mohit_chaudhry.jpg";
import jeevikaPhoto from "../imports/jeevika.jpg";
import conferencePhoto from "../imports/main_conferenece.jpeg";
import headshotPhoto from "../imports/headshot.JPG";
import rc1Photo from "../imports/fem_reading_circle_1.jpg";
import rc2Photo from "../imports/fem_reading_circle_2.jpg";
import rc3Photo from "../imports/fem_reading_circle_3.jpg";
import rc4Photo from "../imports/fem_reading_circle_4.jpg";
import alfPhoto from "../imports/alternate_law_forum_converted.jpg";
import partIIINewPhoto from "../imports/part_iii_new.jpg";
import jurysOutPhoto from "../imports/Screenshot_2026-06-01_at_2.06.14_PM.png";
import quizzingPhoto from "../imports/Screenshot_2026-06-01_at_2.08.18_PM.png";
import womenAtWorkPhoto from "../imports/Screenshot_2026-06-01_at_2.09.42_PM.png";
import cwcrPhoto from "../imports/Screenshot_2026-06-01_at_2.11.29_PM.png";
import cvFile from "../imports/Rashi_Mohan_CV_NEW.pdf";

// ─── PALETTE ────────────────────────────────────────────────────────────────
const C = {
  blue: "#2B4DC8",
  steel: "#3A6B8C",
  purple: "#8B7BC4",
  lavender: "#B9B3D0",
  black: "#111111",
  bg: "#ffffff",
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const internships = [
  {
    id: "i01",
    role: "Research Internship",
    org: "Migration and Asylum Project",
    period: "November – December 2025",
    tags: ["Gender & GBV", "Labour Law", "Legal Aid"],
    summary: "Assisted the Gender Equality Empowerment and Labour Migration teams with client intakes, legal petitions, and awareness drives.",
    paragraphs: [
      "I interned at MAP under the Gender Equality Empowerment Team and Labour Migration and Mobility Team. These teams frequently receive clients who are victims of gender based abuse or labour law violations, respectively, which I assisted with.",
      "The gender based abuse victims were mainly underprivileged women who were victims of domestic abuse, and lacked any support mechanisms to seek access to justice. During their intakes, I would note down all minute details of their story and then draft an initial legal petition. These intakes would often end up spanning multiple hours and become very emotional as these women shared the pain they had endured in their marriages. Although the legal process was slow-moving, the support from MAP empowered these women to take up roles as para-legal volunteers or connect them with other roles, such as beauticians and household helpers.",
      "Apart from this, I also had the chance to help organise workshops and awareness drives, during which we assisted people living in the Adivasi Camp to register for documentation, such as birth certificates, vaccination certificates, Aadhaar cards, and school marksheets.",
    ],
    learnings: "My experience at MAP was very integral to my understanding of how the system arranges itself in circles and mazes to inundate the working class. I saw firsthand the pains of persons struggling with court files, documentation, stamps, permissions and e-portals, and was motivated to help resolve even a small fraction of them.",
    photo: mapPhoto,
    isRedirect: false,
    redirectTo: "",
  },
  {
    id: "i02",
    role: "Research Internship (Part-time)",
    org: "Part III",
    period: "August – October 2025",
    tags: ["Criminal Law", "SC/ST Atrocities Act", "Data Research"],
    summary: "Data collation and pattern analysis of criminal case acquittals across state and district committee reports at the Patna office.",
    paragraphs: [
      "I interned online at Part III, Patna office. The project I was handling essentially worked with data collation from the reports of the State and District level committee reports that dealt with an analysis of the number of acquittals that happened in criminal cases, owing to reasons such as lack of evidence, absence of public prosecutor, absence of witnesses, or collation between parties.",
      "There was a hypothesis that such acquittals due to procedural lapses were exceedingly common in crimes that fell under the SC/ST Atrocities Act, and therefore I was directed to compile the data of all acquittals that took place in a systemic manner to understand the patterns of such cases.",
    ],
    learnings: "As this internship was online I was not able to interact with any persons whose cases I read or dealt with. However, most of the documentation was very lengthy and written in Hindi, which challenged my skills and made me very fluent in legal Hindi as well.",
    photo: partIIINewPhoto,
    isRedirect: false,
    redirectTo: "",
  },
  {
    id: "i03",
    role: "Legal Internship",
    org: "Chambers of Sr. Adv. Yug Mohit Chaudhry",
    period: "June – July 2025",
    tags: ["Death Penalty", "Criminal Law", "Legal Aid"],
    summary: "First and only chamber internship — reading death penalty case files and understanding evidence interpretation under Sr. Adv. Yug Mohit Chaudhry.",
    paragraphs: [
      "This was my first and only Law Chamber internship, and I am extremely grateful that it was under the extraordinary guidance of Senior Advocate Yug Mohit Chaudhry. His genuine knack and wisdom for criminal law seemed to have taught me years worth of nuance in a single month.",
      "As Sr. Adv. Chaudhry only takes death penalty cases for mercy petitions, this internship required me to read through many case files that dealt with gruesome crimes. He taught me how to interpret evidence and understand where exactly the holes in the prosecution framings lie, and how the system of policing in India works almost only to arrest and harass the underprivileged. Even though I did not perform research or grassroots work in this internship, the practical experience of legal aid enabled me to understand access to justice from its very core.",
    ],
    learnings: "Additionally, I also read a book given to me by Mr. Chaudhry called Begunaah Qaidi (Innocent Prisoner), about the lived experience of a school teacher who was wrongfully incarcerated for 9 years, with respect to the 2006 Mumbai Train Blasts. To my surprise, this book had been dedicated to Mr. Chaudhry as the author had been his erstwhile client. The book revealed many failures of the Indian police system, and also the targeted abuse meted out to minorities such as Muslims or Dalits.",
    photo: chaudhryPhoto,
    isRedirect: false,
    redirectTo: "",
  },
  {
    id: "i04",
    role: "Legal Internship",
    org: "Alternate Law Forum",
    period: "November – December 2024",
    tags: ["Human Rights", "Community Organising", "Public Interest Law"],
    summary: "Legal research, case filing, and community advocacy at a pioneering public interest law practice in Bengaluru.",
    paragraphs: [
      "My internship at ALF was very special, as this was the first time I became truly aware of the power of organising. Based out of Bengaluru, Alternative Law Forum is a legal practice and community-building organisation founded by Arvind Narrain.",
      "During my time in ALF, I assisted with legal research and filing for multiple cases, including cases on domestic violence, land acquisition compensation, and parental abuse. Further I also drafted complaints on hate speech, an FAQ document on laws against sexual violence, and subsections for a PUCL report on reservations. In my last week, I made a research note on incidents under the Places of Worship Act.",
      "I also created a database on UN resolutions on Israel-Palestine, and a Zero Hour Note for Parliament on labor deployment to Israel and humanitarian aid to Palestine. All this work was done in an environment that was incredibly motivating and encouraging. On weekends we attended protests and conclaves held in Freedom Park, Bengaluru regarding the Israeli occupation of Palestine.",
    ],
    learnings: "This internship taught me how to use the skills I am taught at law school for real change, that I could see happen in front of my eyes. Being surrounded by people who felt the same burning need to help the community made me feel incredibly seen.",
    photo: alfPhoto,
    isRedirect: false,
    redirectTo: "",
  },
  {
    id: "i05",
    role: "Legal Internship (Part-time)",
    org: "Jeevika, Centre for Civil Society",
    period: "August – December 2024",
    tags: ["Street Vendors", "Municipal Law", "Unorganised Labour"],
    summary: "Drafted petitions and resolved cases for street vendors facing municipal harassment, using the Jeevika app as an SOS mechanism.",
    paragraphs: [
      "My internship with Jeevika was online. Jeevika is a program under CCS and also the name of their application, which seeks to address the routine harassment that municipality officials perform on street vendors.",
      "During this internship, I drafted many petitions, and resolved cases for many street vendors whose goods such as pots, pans, or sellable items had been seized by the municipal officers. These officers also harassed these vendors on the basis of their authority and spoke to them brashly. I assisted these vendors in speaking to the municipal officers and in filing their complaints to the police as well.",
    ],
    learnings: "The harsh treatment given to street vendors who were registered and performing their daily wage activities in a legal, regulated way taught me how those without land property are treated in the eyes of the law. While they are protected by law, the rough treatment given to them was what the ground reality of any municipal area looks like. This experience showed me how the unorganised workforce suffers the brunt of their occupation as well as systemic hurdles, creating a vicious cycle of poverty. The Jeevika app creates an SOS mechanism for such incidents and supports street vendors access justice.",
    photo: jeevikaPhoto,
    isRedirect: false,
    redirectTo: "",
  },
];

const positions = [
  {
    id: "p01",
    role: "Organiser",
    org: "March for Women: Women at Work Conference 2026",
    period: "March 2026",
    tags: ["Conference", "Gender", "Informal Labour"],
    summary: "Organised a two-day conference on Women in the Informal Sector in collaboration with the Gender Resource Centre, Government of Gujarat.",
    paragraphs: [
      "This conference was held on 7th and 8th March 2026 and was focused on Women in the Informal Sectors of Employment. The three themes for panel discussions were domestic housework, sex work, and workplace safety for women. It was held in collaboration with the Gender Resource Centre, Government of Gujarat.",
      "The experience of organising Women at Work was a labour of love, which took many, many months of sleepless nights and a brilliant team of highly charged students, ready to take it forward. It was made possible with the continuous support of our Faculty Head, Dr Asha Verma.",
      "Seeing the conference come together was an illuminating experience, one that I will never forget. The diverse panel enabled an exchange of many new perspectives on gender and labour in India.",
    ],
    learnings: "Interacting with our guest speakers after the sessions, however, would remain the most special part. As we all sat down for lunch or tea, there was so much discussion at every table that I was overcome with the possibilities for endless conversation. I managed my time somehow and enjoyed speaking to all the brilliant guests we had invited, and received their behind-the-scenes insights on the systemic hurdles that disadvantage women in the informal sectors in India.",
    photo: womenAtWorkPhoto,
    isRedirect: false,
    redirectTo: "",
  },
  {
    id: "p02",
    role: "Convener",
    org: "GNLU Centre for Women and Child Rights",
    period: "2024 – Present",
    tags: ["Leadership", "Gender Rights", "76-member team"],
    summary: "Heading the 76-member student team at GNLU's Centre for Women and Child Rights.",
    paragraphs: [
      "I joined the Centre for Women and Child Rights in my first year, and in my fifth year, I am honoured to be heading the wonderful team of 76 students! I am extremely grateful to this Centre, which has acted as a springboard for me to explore all my passion projects.",
    ],
    learnings: "",
    photo: cwcrPhoto,
    isRedirect: false,
    redirectTo: "",
  },
  {
    id: "p03",
    role: "Editor-in-Chief",
    org: "Jury's Out Magazine",
    period: "2024 – Present",
    tags: ["Editorial", "Pop Culture", "Campus"],
    summary: "Co-running GNLU's campus magazine covering pop culture, current events, politics, and literature.",
    paragraphs: [
      "The Jury's Out Magazine is run by Suhani Srivastava and me. This magazine serves as a wonderful medium for engaging with pop culture, campus current events, and even politics and literature. I love my time as the EIC at Jury's Out, as it exposes me to so many brilliant minds on our editorial board and constantly inspires me to be cooler!",
    ],
    learnings: "",
    photo: jurysOutPhoto,
    isRedirect: false,
    redirectTo: "",
  },
  {
    id: "p04",
    role: "Organiser",
    org: "Read Reflect Resist: A Feminist Reading Circle",
    period: "Ongoing",
    tags: ["Feminist Theory", "Reading Circle", "Campus"],
    summary: "The feminist reading circle is my favourite thing I do on campus, every Friday.",
    paragraphs: [],
    learnings: "",
    photo: "",
    isRedirect: true,
    redirectTo: "#reading-circle",
  },
  {
    id: "p05",
    role: "Club Head",
    org: "GNLU Quizzing Circuit",
    period: "Ongoing",
    tags: ["Quizzing", "Club Leadership"],
    summary: "Heading the GNLU Quizzing Circuit, with a weekly Wednesday quiz.",
    paragraphs: [
      "There are very few things I enjoy that are not related to politics or law, and quizzing is one of them. I realised my knack for quizzing in my second year, and since then, I have been devoted to it. There is a quiz hosted every Wednesday, and it is a part of my week that I really look forward to.",
    ],
    learnings: "",
    photo: quizzingPhoto,
    isRedirect: false,
    redirectTo: "",
  },
];

const researchProjects = [
  {
    id: "r01",
    type: "Publication",
    title: '"Union of India vs. Reliance Industries" — Case Comment',
    venue: "Journal of Unique Laws and Students",
    detail: "Volume II Issue IV · ISSN: 2583-1607",
    status: "Published",
    link: "",
    color: C.blue,
  },
  {
    id: "r02",
    type: "Article",
    title: "Fantasy And Feminism: The Preference For 'Bad Boys' In Literature",
    venue: "Feminism in India",
    detail: "March 2025",
    status: "Published",
    link: "https://feminisminindia.com/2025/03/20/fantasy-and-feminism-the-preference-for-bad-boys-in-literature/",
    color: C.purple,
  },
  {
    id: "r03",
    type: "Coordination",
    title: "Vadiya Village Project",
    venue: "GNLU Centre for Women and Child Rights & Gender Resource Centre, Government of Gujarat",
    detail: "Under GNLU CWCR",
    status: "Ongoing",
    link: "",
    color: C.steel,
  },
  {
    id: "r04",
    type: "Coordination",
    title: "ICC Handbook Project",
    venue: "GNLU Centre for Women and Child Rights & Gender Resource Centre, Government of Gujarat",
    detail: "Under GNLU CWCR",
    status: "Ongoing",
    link: "",
    color: C.steel,
  },
  {
    id: "r05",
    type: "Coordination",
    title: "OHCHR Submission on Historical and Contemporary Forms of Violations against Indigenous Women and Girls' Reproductive Health and Rights",
    venue: "GNLU Centre for Women and Child Rights",
    detail: "OHCHR Submission",
    status: "In Press",
    link: "",
    color: C.purple,
  },
];

const articles = [
  {
    title: "Ethics and Economics of AI Boyfriends",
    publication: "Jury's Out",
    date: "September 2025",
    excerpt: "",
    link: "https://jurysoutblog.wordpress.com/2025/09/20/the-ethics-and-economics-of-ai-boyfriends/",
    tag: "Essay",
    color: C.blue,
  },
  {
    title: "GNLU is Opening a Can of Worms, Dobara",
    publication: "Jury's Out",
    date: "August 2024",
    excerpt: "",
    link: "https://jurysoutblog.wordpress.com/2024/08/18/gnlu-is-opening-a-can-of-worms-dobara/",
    tag: "Campus",
    color: C.blue,
  },
  {
    title: "Death of the Ghazal",
    publication: "Jury's Out",
    date: "October 2024",
    excerpt: "",
    link: "https://jurysoutblog.wordpress.com/2024/10/01/death-of-the-ghazal/",
    tag: "Culture",
    color: C.blue,
  },
  {
    title: "Love Aaj Kal, on Clankers, Capitalism and AI Boyfriends",
    publication: "Substack",
    date: "",
    excerpt: "",
    link: "https://substack.com/@rdrashi/p-172078515",
    tag: "Essay",
    color: C.purple,
  },
  {
    title: "Anora Jaan, The Sex Worker in Film",
    publication: "Substack",
    date: "",
    excerpt: "",
    link: "https://substack.com/@rdrashi/p-178202699",
    tag: "Film",
    color: C.purple,
  },
  {
    title: "Ranjish Hee Sahi by Ahmed Faraz, a Translation",
    publication: "Substack",
    date: "",
    excerpt: "",
    link: "https://substack.com/@rdrashi/p-187742805",
    tag: "Poetry",
    color: C.purple,
  },
];


// ─── SHARED COMPONENTS ───────────────────────────────────────────────────────

function Tag({ label, color = C.lavender }: { label: string; color?: string }) {
  return (
    <span
      className="inline-block text-xs px-2 py-0.5 border"
      style={{ color, borderColor: color, fontFamily: "'Space Mono', monospace" }}
    >
      {label}
    </span>
  );
}

type Entry = typeof internships[0];

function EntryList({
  entries,
  selected,
  onSelect,
  accentColor,
}: {
  entries: Entry[];
  selected: string;
  onSelect: (id: string) => void;
  accentColor: string;
}) {
  return (
    <div className="space-y-0.5">
      {entries.map((entry) => (
        <button
          key={entry.id}
          onClick={() => onSelect(entry.id)}
          className="w-full text-left px-4 py-5 transition-all border-l-2 group"
          style={{
            borderLeftColor: selected === entry.id ? accentColor : "transparent",
            background: selected === entry.id ? "#f0f0fa" : "transparent",
          }}
        >
          <div className="flex items-start justify-between gap-2">
            <div>
              <div className="text-xs tracking-widest mb-1" style={{ color: C.lavender }}>
                {entry.period}
              </div>
              <div
                className="text-sm font-bold leading-tight"
                style={{ color: selected === entry.id ? accentColor : C.black }}
              >
                {entry.role}
              </div>
              <div className="text-xs mt-0.5" style={{ color: C.steel }}>
                {entry.org}
              </div>
            </div>
            <ChevronRight
              size={14}
              className="mt-1 flex-shrink-0 transition-transform"
              style={{
                color: C.lavender,
                transform: selected === entry.id ? "rotate(90deg)" : "none",
              }}
            />
          </div>
        </button>
      ))}
    </div>
  );
}

function EntryDetail({ entry }: { entry: Entry }) {
  if (entry.isRedirect) {
    return (
      <div className="py-8 px-2">
        <div className="flex flex-wrap gap-2 mb-6">
          {entry.tags.map((t) => <Tag key={t} label={t} color={C.purple} />)}
        </div>
        <h3 className="text-2xl font-bold mb-1" style={{ color: C.purple }}>
          {entry.role}
        </h3>
        <p className="text-sm mb-8" style={{ color: C.steel }}>
          {entry.org} · {entry.period}
        </p>
        <p className="text-sm leading-relaxed mb-8" style={{ color: C.black }}>
          {entry.summary}
        </p>
        <a
          href={entry.redirectTo}
          className="inline-flex items-center gap-2 text-sm font-bold border-2 px-5 py-3 hover:opacity-70 transition-opacity"
          style={{ borderColor: C.purple, color: C.purple }}
        >
          Read more about this here <ArrowUpRight size={14} />
        </a>
      </div>
    );
  }

  return (
    <motion.div
      key={entry.id}
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      {entry.photo && (
        <ImageWithFallback
          src={entry.photo}
          alt={entry.org}
          className="w-full object-cover mb-8"
          style={{ height: 220 }}
        />
      )}
      <div className="flex flex-wrap gap-2 mb-6">
        {entry.tags.map((t) => <Tag key={t} label={t} color={C.blue} />)}
      </div>
      <h3 className="text-2xl font-bold mb-1" style={{ color: C.blue }}>
        {entry.role}
      </h3>
      <p className="text-sm mb-6" style={{ color: C.steel }}>
        {entry.org} · {entry.period}
      </p>
      <div className="space-y-4 mb-6">
        {entry.paragraphs.map((para, i) => (
          <p key={i} className="text-sm leading-relaxed" style={{ color: C.black }}>
            {para}
          </p>
        ))}
      </div>
      {entry.learnings && (
        <div
          className="p-4 border-l-4"
          style={{ borderLeftColor: C.purple, background: "#f5f3fb" }}
        >
          <p className="text-xs tracking-widest uppercase mb-2" style={{ color: C.purple }}>
            What I learnt
          </p>
          <p className="text-sm leading-relaxed italic" style={{ color: C.black }}>
            {entry.learnings}
          </p>
        </div>
      )}
    </motion.div>
  );
}

function MobileAccordion({ entries }: { entries: Entry[] }) {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <div className="space-y-2">
      {entries.map((entry) => (
        <div key={entry.id} style={{ border: `1px solid ${C.lavender}` }}>
          <button
            onClick={() => setOpen(open === entry.id ? null : entry.id)}
            className="w-full text-left px-4 py-4 flex items-start justify-between gap-4"
          >
            <div>
              <div className="text-xs tracking-widest mb-1" style={{ color: C.lavender }}>
                {entry.period}
              </div>
              <div className="text-sm font-bold" style={{ color: open === entry.id ? C.blue : C.black }}>
                {entry.role}
              </div>
              <div className="text-xs mt-0.5" style={{ color: C.steel }}>{entry.org}</div>
            </div>
            <ChevronRight
              size={14}
              className="mt-1 flex-shrink-0 transition-transform"
              style={{
                color: C.lavender,
                transform: open === entry.id ? "rotate(90deg)" : "none",
              }}
            />
          </button>
          {open === entry.id && (
            <div className="px-4 pb-6 pt-2">
              {entry.isRedirect ? (
                <div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: C.black }}>
                    {entry.summary}
                  </p>
                  <a
                    href={entry.redirectTo}
                    className="inline-flex items-center gap-1.5 text-sm font-bold"
                    style={{ color: C.purple }}
                  >
                    Read more <ArrowUpRight size={13} />
                  </a>
                </div>
              ) : (
                <>
                  {entry.photo && (
                    <ImageWithFallback src={entry.photo} alt={entry.org} className="w-full object-cover mb-4" style={{ height: 160 }} />
                  )}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {entry.tags.map((t) => <Tag key={t} label={t} color={C.blue} />)}
                  </div>
                  <div className="space-y-3 mb-4">
                    {entry.paragraphs.map((para, i) => (
                      <p key={i} className="text-sm leading-relaxed" style={{ color: C.black }}>{para}</p>
                    ))}
                  </div>
                  {entry.learnings && (
                    <div className="p-4 border-l-4" style={{ borderLeftColor: C.purple, background: "#f5f3fb" }}>
                      <p className="text-xs tracking-widest uppercase mb-2" style={{ color: C.purple }}>What I learnt</p>
                      <p className="text-sm leading-relaxed italic" style={{ color: C.black }}>{entry.learnings}</p>
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ─── NAV ─────────────────────────────────────────────────────────────────────

function Nav({ scrolled }: { scrolled: boolean }) {
  const links = [
    { label: "about", href: "#about" },
    { label: "experience", href: "#experience" },
    { label: "writing", href: "#writing" },
    { label: "reading circle", href: "#reading-circle" },
    { label: "contact", href: "#contact" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.08)" : "none",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#top" className="text-sm font-bold tracking-widest uppercase" style={{ color: C.blue }}>
          Rashi
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-wider uppercase transition-colors hover:opacity-60"
              style={{ color: C.black }}
            >
              {link.label}
            </a>
          ))}
        </div>
        <a href="mailto:rashimohan04@gmail.com" className="hidden md:flex items-center gap-1.5 text-xs" style={{ color: C.blue }}>
          <Mail size={12} />
          <span>rashimohan04@gmail.com</span>
        </a>
      </div>
    </nav>
  );
}

// ─── HERO ────────────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section id="top" className="min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm tracking-widest uppercase mb-6" style={{ color: C.lavender }}>
            — curriculum vitae + more
          </p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-8" style={{ color: C.blue }}>
            Hi,<br />I&apos;m Rashi!
          </h1>
          <div className="flex flex-wrap gap-4">
            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold border-2 transition-all hover:opacity-80"
              style={{ borderColor: C.blue, color: C.blue }}
            >
              See my work <ChevronRight size={14} />
            </a>
            <a
              href="#writing"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-bold transition-all hover:opacity-60"
              style={{ color: C.purple }}
            >
              Read my writing <ArrowUpRight size={14} />
            </a>
          </div>
        </motion.div>
        <div className="absolute right-12 top-1/3 hidden lg:flex flex-col gap-3 items-center">
          {[C.black, C.blue, C.steel, C.purple, C.lavender].map((color, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.5, ease: "backOut" }}
              className="rounded-full"
              style={{ width: 10, height: 10, background: color }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT ───────────────────────────────────────────────────────────────────

function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-widest uppercase mb-12" style={{ color: C.lavender }}>
          — about
        </p>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <ImageWithFallback
              src={headshotPhoto}
              alt="Rashi"
              className="object-cover object-top mb-8"
              style={{ width: 120, height: 120, borderRadius: "50%", border: `3px solid ${C.lavender}` }}
            />
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8" style={{ color: C.blue }}>
              I like to think,<br />question, and<br />understand.
            </h2>
            <p className="text-sm leading-relaxed mb-4" style={{ color: C.black }}>
              I&apos;m a final-year student at Gujarat National Law University. My primary area of interest is access to justice among marginalised groups, and I am specifically interested in understanding the complex relationship between law, gender, and poverty.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: C.black }}>
             Beyond academics, I like to write on Substack or for my college magazine, Jury&apos;s Out. I also love listening to Hindustani classical music, reading poetry, and spending time with my friends.
            </p>
          </div>
          <div className="space-y-6">
            {[
              { label: "Based in", value: "Navi Mumbai" },
              { label: "Currently", value: "Final year BA LLB, Gujarat National Law University" },
              { label: "Writing at", value: "Substack · Jury's Out" },
              { label: "Interested in", value: "Gender Politics · Law and Economics · Marxist Political Theory" },
            ].map(({ label, value }) => (
              <div key={label} className="flex flex-col gap-1 pb-6" style={{ borderBottom: `1px solid ${C.lavender}` }}>
                <span className="text-xs tracking-wider uppercase" style={{ color: C.lavender }}>{label}</span>
                <span className="text-sm font-bold" style={{ color: C.black }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── EXPERIENCE ──────────────────────────────────────────────────────────────

type ExperienceTab = "internships" | "positions" | "research";

function Experience() {
  const [tab, setTab] = useState<ExperienceTab>("internships");
  const [selectedInternship, setSelectedInternship] = useState("i01");
  const [selectedPosition, setSelectedPosition] = useState("p01");

  const activeInternship = internships.find((e) => e.id === selectedInternship)!;
  const activePosition = positions.find((e) => e.id === selectedPosition)!;

  const tabs: { id: ExperienceTab; label: string }[] = [
    { id: "internships", label: "Internships" },
    { id: "positions", label: "Positions of Responsibility" },
    { id: "research", label: "Research & Publications" },
  ];

  return (
    <section id="experience" className="py-24 px-6" style={{ background: C.bg }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-widest uppercase mb-8" style={{ color: C.lavender }}>
          — curriculum vitae
        </p>

        {/* Tab bar */}
        <div
          className="flex flex-wrap gap-0 mb-12"
          style={{ borderBottom: `1px solid ${C.lavender}` }}
        >
          {tabs.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setTab(id)}
              className="px-5 py-3 text-xs tracking-wider uppercase transition-all"
              style={{
                color: tab === id ? C.blue : C.black,
                fontFamily: "'Space Mono', monospace",
                borderBottom: tab === id ? `2px solid ${C.blue}` : "2px solid transparent",
                marginBottom: "-1px",
                fontWeight: tab === id ? 700 : 400,
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Internships tab */}
        {tab === "internships" && (
          <>
            {/* Desktop */}
            <div className="hidden md:grid md:grid-cols-5 gap-12">
              <div className="col-span-2">
                <EntryList
                  entries={internships}
                  selected={selectedInternship}
                  onSelect={setSelectedInternship}
                  accentColor={C.blue}
                />
              </div>
              <div className="col-span-3 sticky top-24 self-start">
                <EntryDetail entry={activeInternship} />
              </div>
            </div>
            {/* Mobile */}
            <div className="md:hidden">
              <MobileAccordion entries={internships} />
            </div>
          </>
        )}

        {/* Positions tab */}
        {tab === "positions" && (
          <>
            {/* Desktop */}
            <div className="hidden md:grid md:grid-cols-5 gap-12">
              <div className="col-span-2">
                <EntryList
                  entries={positions}
                  selected={selectedPosition}
                  onSelect={setSelectedPosition}
                  accentColor={C.blue}
                />
              </div>
              <div className="col-span-3 sticky top-24 self-start">
                <EntryDetail entry={activePosition} />
              </div>
            </div>
            {/* Mobile */}
            <div className="md:hidden">
              <MobileAccordion entries={positions} />
            </div>
          </>
        )}

        {/* Research & Publications tab */}
        {tab === "research" && (
          <div className="grid md:grid-cols-2 gap-4">
            {researchProjects.map((project) => (
              <div
                key={project.id}
                className="p-6"
                style={{ border: `1px solid ${C.lavender}`, background: "#fafaff" }}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <Tag label={project.type} color={project.color} />
                  <span
                    className="text-xs font-bold px-2 py-0.5"
                    style={{
                      background: project.status === "Published" ? C.blue :
                                  project.status === "In Press" ? C.purple : C.lavender,
                      color: "#fff",
                      fontFamily: "'Space Mono', monospace",
                    }}
                  >
                    {project.status}
                  </span>
                </div>
                <h3 className="text-sm font-bold leading-snug mb-3" style={{ color: C.black }}>
                  {project.title}
                </h3>
                <p className="text-xs leading-relaxed mb-1" style={{ color: C.steel }}>
                  {project.venue}
                </p>
                <p className="text-xs mb-4" style={{ color: C.lavender }}>
                  {project.detail}
                </p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold hover:opacity-70 transition-opacity"
                    style={{ color: project.color }}
                  >
                    Read <ExternalLink size={11} />
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

// ─── WRITING ─────────────────────────────────────────────────────────────────

function Writing() {
  return (
    <section id="writing" className="py-24 px-6" style={{ background: "#fafaff" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs tracking-widest uppercase mb-2" style={{ color: C.lavender }}>
              — writing & projects
            </p>
            <h2 className="text-3xl font-bold" style={{ color: C.blue }}>
              Words I&apos;ve put into the world.
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:flex items-center gap-1.5 text-xs font-bold hover:opacity-60 transition-opacity"
            style={{ color: C.purple }}
          >
            Substack <ExternalLink size={11} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Jury's Out column */}
          <div>
            <div className="flex items-center gap-3 mb-6" style={{ borderBottom: `1px solid ${C.lavender}`, paddingBottom: "1rem" }}>
              <span className="text-sm font-bold" style={{ color: C.blue }}>Jury&apos;s Out</span>
              <a
                href="https://jurysoutblog.wordpress.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs hover:opacity-60 transition-opacity"
                style={{ color: C.lavender }}
              >
                jurysoutblog.wordpress.com <ExternalLink size={10} />
              </a>
            </div>
            <div className="space-y-0">
              {articles.filter(a => a.publication === "Jury's Out").map((article) => (
                <a
                  key={article.title}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-4 py-4 transition-opacity hover:opacity-60"
                  style={{ borderBottom: `1px solid rgba(185,179,208,0.3)` }}
                >
                  <div className="flex items-start gap-3">
                    <Tag label={article.tag} color={article.color} />
                    <span className="text-sm font-bold leading-snug" style={{ color: C.black }}>
                      {article.title}
                    </span>
                  </div>
                  <ArrowUpRight size={14} className="flex-shrink-0 mt-0.5" style={{ color: C.lavender }} />
                </a>
              ))}
            </div>
          </div>

          {/* Substack column */}
          <div>
            <div className="flex items-center gap-3 mb-6" style={{ borderBottom: `1px solid ${C.lavender}`, paddingBottom: "1rem" }}>
              <span className="text-sm font-bold" style={{ color: C.purple }}>Substack</span>
              <a
                href="https://substack.com/@rdrashi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs hover:opacity-60 transition-opacity"
                style={{ color: C.lavender }}
              >
                @rdrashi <ExternalLink size={10} />
              </a>
            </div>
            <div className="space-y-0">
              {articles.filter(a => a.publication === "Substack").map((article) => (
                <a
                  key={article.title}
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-4 py-4 transition-opacity hover:opacity-60"
                  style={{ borderBottom: `1px solid rgba(185,179,208,0.3)` }}
                >
                  <div className="flex items-start gap-3">
                    <Tag label={article.tag} color={article.color} />
                    <span className="text-sm font-bold leading-snug" style={{ color: C.black }}>
                      {article.title}
                    </span>
                  </div>
                  <ArrowUpRight size={14} className="flex-shrink-0 mt-0.5" style={{ color: C.lavender }} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── READING CIRCLE ──────────────────────────────────────────────────────────

function ReadingCircle() {
  const sessions = [
    {
      work: "The Second Sex — Simone de Beauvoir",
      text: "This work has been personally monumental in understanding the philosophy and politics behind gender, and the systemic 'othering' faced by women.",
      highlight: true,
    },
    {
      work: "Women (Re)Public — Nivedita Menon",
      text: "Intersectionality and the Indian context, how women do not have a monolithic identity and their lives are fundamentally shaped by caste, class, and religion.",
      highlight: false,
    },
    {
      work: "Disabled Women: An Excluded Agenda of Indian Feminism",
      text: "About the systemic exclusion of disabled women from feminist theory, how the feminist movement has failed them so far, and recent efforts being taken for inclusion.",
      highlight: false,
    },
  ];

  return (
    <section id="reading-circle" className="py-24 px-6" style={{ background: "#f5f3fb" }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-widest uppercase mb-2" style={{ color: C.lavender }}>
          — campus initiative
        </p>
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-8" style={{ color: C.purple }}>
              Read, Reflect,<br />Resist.
            </h2>
            <p className="text-xs tracking-widest uppercase mb-3" style={{ color: C.lavender }}>
              A Feminist Reading Circle
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: C.black }}>
              The feminist reading circle is my favourite thing I do on campus.
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: C.black }}>
              We started our first session by reading the Introduction to{" "}
              <em>The Second Sex</em> by Simone de Beauvoir. The discourse was
              illuminating — people shared their experience of how to be a woman is to be
              separated from all your natural instincts.
            </p>
            <p className="text-sm leading-relaxed mb-4" style={{ color: C.black }}>
              Over the course of two years, we have engaged in many sessions reading theory
              and sometimes watching short films. I am incredibly proud of this endeavour
              to bring feminist thought into the walls of a heavily corporate law-oriented
              curriculum. Every session feels like a breath of fresh air.
            </p>
            <p className="text-sm leading-relaxed" style={{ color: C.black }}>
              Moderating these sessions has been an evolving experience in thinking, active
              listening, and speaking — and I am always on the hunt for more recommendations.
            </p>
            <a
              href="mailto:cwcr@gnlu.ac.in"
              className="inline-flex items-center gap-2 mt-8 text-sm font-bold border-2 px-5 py-3 hover:opacity-70 transition-opacity"
              style={{ borderColor: C.purple, color: C.purple }}
            >
              <Mail size={13} />
              Send a reading suggestion
            </a>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase mb-6" style={{ color: C.lavender }}>
              Sessions that stand out
            </p>
            <div className="space-y-4">
              {sessions.map((s, i) => (
                <div
                  key={i}
                  className="p-5"
                  style={{
                    background: s.highlight ? C.purple : "#fff",
                    border: `1px solid ${s.highlight ? C.purple : C.lavender}`,
                  }}
                >
                  <p
                    className="text-xs font-bold tracking-wide uppercase mb-2"
                    style={{ color: s.highlight ? "rgba(255,255,255,0.7)" : C.lavender }}
                  >
                    {s.work}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: s.highlight ? "#fff" : C.black }}>
                    {s.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Photo gallery */}
        <div className="mt-12">
          <p className="text-xs tracking-widest uppercase mb-6" style={{ color: C.lavender }}>
            — from our sessions
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { src: rc1Photo, alt: "Feminist reading circle session" },
              { src: rc2Photo, alt: "Feminist reading circle discussion" },
              { src: rc3Photo, alt: "Feminist reading circle gathering" },
              { src: rc4Photo, alt: "Feminist reading circle participants" },
            ].map((photo, i) => (
              <div key={i} className="overflow-hidden" style={{ height: 220 }}>
                <ImageWithFallback
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


// ─── FOOTER ──────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer id="contact" className="py-20 px-6" style={{ background: C.black, color: "#fff" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-end">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold leading-none mb-6" style={{ color: C.blue }}>
              Say hello.
            </h2>
            <p className="text-sm leading-relaxed max-w-sm mb-8" style={{ color: C.lavender }}>
              I&apos;m always interested in interesting conversations, collaborations,
              or just hearing what you&apos;re thinking about.
            </p>
            <a
              href="mailto:rashimohan04@gmail.com"
              className="inline-flex items-center gap-3 text-base font-bold hover:opacity-70 transition-opacity"
              style={{ color: "#fff" }}
            >
              <Mail size={16} />
              rashimohan04@gmail.com
            </a>
          </div>
          <div className="space-y-4">
            {[
              { label: "Substack", href: "https://substack.com/@rdrashi" },
              { label: "LinkedIn", href: "https://www.linkedin.com/in/rashi-mohan-ab37a8248/" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between py-4 group hover:opacity-60 transition-opacity"
                style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", color: "#fff" }}
              >
                <span className="text-sm font-bold tracking-wide">{label}</span>
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: C.lavender }}
                />
              </a>
            ))}
            <a
              href={cvFile}
              download="Rashi_Mohan_CV.pdf"
              className="flex items-center justify-between py-4 group hover:opacity-60 transition-opacity"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.1)", color: "#fff" }}
            >
              <span className="text-sm font-bold tracking-wide">Download my CV</span>
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ color: C.lavender }}
              />
            </a>
          </div>
        </div>
        <div
          className="mt-16 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-xs" style={{ color: C.lavender }}>
            © 2026 Rashi. Built with Space Mono and too much time.
          </p>
          <div className="flex gap-1.5">
            {[C.black, C.blue, C.steel, C.purple, C.lavender].map((c, i) => (
              <div
                key={i}
                className="rounded-full"
                style={{ width: 8, height: 8, background: c, border: i === 0 ? `1px solid ${C.lavender}` : "none" }}
              />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

// ─── ROOT ─────────────────────────────────────────────────────────────────────
export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="relative" style={{ fontFamily: "'Space Mono', monospace" }}>
      <Nav scrolled={scrolled} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Writing />
        <ReadingCircle />
      </main>
      <Footer />
    </div>
  );
}
