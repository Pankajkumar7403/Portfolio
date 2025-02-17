import { Icons } from "@/components/icons";

export const DATA = {
  name: "Pankaj Kumar",
  initials: "Pk",
  adminUserId: "ba7153c9-2262-4a89-9bc2-de924ef78afa",
  url: "https://pankaj.xyz",
  resume: "https://pankaj.xyz",
  sponsore: "https://github.com/sponsors/Pankajkumar7403",
  prevImage: "https://imgur.com/a/qYKQOkX",
  myImage: "/me.png",
  location: "Delhi, India",
  locationLink: "https://maps.app.goo.gl/5Pz7xqJmnrJsYKsW7",
  timeZone: "Asia/Kolkata",
  localCode: "en-IN",
  description:
    "Software developer, tech enthusiast, entrepreneur and Chess lover.",
  about:
    "I'm a tech enthusiast, software developer, and chess lover, born and raised in [Bihar, India](https://maps.app.goo.gl/5Pz7xqJmnrJsYKsW7), passionate about building impactful products that leverage technology to make a difference. I often share my work to [contribute](https://git.new/eTYjNeN) to the community. In addition to my development work, I'm always exploring new ideas, particularly in areas like machine learning and AI.\n\n In my free time i play Chess, listen music also i love to read books of *self-help* genre. I'm a huge fan of The Office(us). Micheal Scott is my favorite.\n\nIt's a pleasure to meet you!",
  bio: "I'm a tech enthusiast, software developer, and chess lover, born and raised [Bihar, India](https://maps.app.goo.gl/5Pz7xqJmnrJsYKsW7), passionate about building impactful products that leverage technology to make a difference. I often share my work to [contribute](https://git.new/eTYjNeN) to the community. In addition to my development work, I'm always exploring new ideas, particularly in areas like machine learning and AI.",
  career:
    "My journey into the world of computers started back in 12th grade, thanks to my friend Ayush—a guy so passionate about tech that he could probably hack a toaster if he wanted to. He introduced me to the magic of the terminal, and I was instantly hooked. Watching him type commands like a movie hacker made me think, Yep, this is my calling!",
  careerFull:
    " My journey into the world of computers started back in 12th grade , thanks to my friend Ayush—a guy so passionate about tech that he could probably hack a toaster if he wanted to. He introduced me to the magic of the terminal, and I was instantly hooked. Watching him type commands like a movie hacker made me think, Yep, this is my calling!\n\nBut my real deep dive into machine learning and data science happened when I stumbled upon the DeepMind vs. Lee Sedol documentary. Watching AI outplay one of the greatest Go players of all time was mind-blowing. That was the moment I knew—I wanted to be a part of this world where machines learn, think, and evolve.\n\nTo take my passion further, I pursued a B.Tech in Computer Science, constantly exploring new ideas in AI and software development.\n\nWhen I'm not coding, you'll probably find me playing chess, diving into self-help books, or rewatching The Office (US) for the hundredth time (yes, Michael Scott is my spirit animal).\n\nAnd that's how my career began.",
  avatarUrl: "/me.png",
  connect:
    "Let's connect and build something cool together. Feel free to reach out to me. I'm always open to new opportunities and collaborations. Reach out to me via **email: (pankaj4earth@gmail.com)** or dm me on [Twitter](https://dub.sh/pankaj-x) or [Instagram](https://dub.sh/pankaj-instagram).",
  skills: [
    "React",
    "Next.js",
    "Machine Learning",
    "SQL",
    "DSA",
    "Statistics",
    "Data Analysis",
    "Data Visualization",
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "Javascript",
  ],
  contact: {
    email: "pankaj4earth@gmail.com",
    tel: "+1234567890",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://git.new/eTYjNeN",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/pankaj-linkedin",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/pankaj-x",
        icon: Icons.x,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://dub.sh/pankaj-instagram",
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:pankaj4earth@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  education: [
    {
      school: "Hindu college of engineering",
      location: "Regular, Sonipat haryana",
      href: "https://www.hcesonepat.org/",
      degree: "B.Tech in Computer Science and Engineering",
      logoUrl: "/buildspace.jpg",
      start: "2020",
      end: "2024",
    },
    {
      school: "DAV Centenary Public School",
      location: "Siwan, Bihar",
      href: "https://davcpssiwan.net.in/",
      degree: "11th and 12th Grade with Science(PCM)",
      logoUrl: "/dav.png",
      start: "2018",
      end: "2020",
    },
    {
      school: "Children Rise high school",
      location: "Siwan, Bihar",
      href: "https://crhs.co.in/",
      degree: "8th to 10th Schooling ",
      logoUrl: "/10thschool.png",
      start: "2015",
      end: "2018",
    },
  ],
  hackathons: [
    {
      title: "Hack Western 5",
      dates: "November 23rd - 25th, 2018",
      location: "London, Ontario",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
  ],
} as const;
