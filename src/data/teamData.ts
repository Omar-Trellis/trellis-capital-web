export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  expertise: string;
  image: string;
}

export interface TeamTestimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: 'Jonathan Paz',
    role: 'CEO & Founder',
    expertise: 'Finance & Strategy',
    bio: '15+ years in investment banking and real estate finance',
    image: '/team/jon_web_portrait.webp'
  },
  {
    name: 'Robert Cullen',
    role: 'COO',
    expertise: 'Operations Excellence',
    bio: 'Former operations director at Fortune 500 real estate firm',
    image: '/team/rob_web_portrait.webp'
  },
  {
    name: 'Juan Del Sol',
    role: 'CRO',
    expertise: 'Acquisitions',
    bio: 'Specialist in distressed property identification and negotiation',
    image: '/team/juan_web_portrait.webp'
  },
  {
    name: 'Omar Magdy',
    role: 'CTO',
    expertise: 'AI Architecture',
    bio: 'Interdisciplinary graduate, machine learning enthusiast',
    image: '/team/magdy_web_portrait.webp'
  },
  {
    name: 'Alexei Semenov',
    role: 'President',
    expertise: 'Investment Strategy',
    bio: 'NHL veteran turned successful real estate investor',
    image: '/team/alexei_web_portrait.png'
  }
];

// Convert team members to testimonial format
export const teamTestimonials: TeamTestimonial[] = [
  {
    quote: "With over 15 years in investment banking and real estate finance, I've built Trellis Capital Group on the foundation of data-driven decisions and transparent partnerships. Our proprietary AI technology gives our investors the competitive edge they need in today's market.",
    name: "Jonathan Paz",
    designation: "CEO & Founder - Finance & Strategy",
    src: "/team/jon_web_portrait.webp"
  },
  {
    quote: "Having led operations at Fortune 500 real estate firms, I bring systematic excellence to every deal. At Trellis, we've streamlined our processes to deliver consistent results while maintaining the highest standards of quality and efficiency.",
    name: "Robert Cullen",
    designation: "COO - Operations Excellence",
    src: "/team/rob_web_portrait.webp"
  },
  {
    quote: "My specialty in distressed property identification and negotiation has helped our investors secure deals with 35-50% ROI potential. I leverage deep market knowledge and strategic relationships to find opportunities others miss.",
    name: "Juan Del Sol",
    designation: "CRO - Acquisitions",
    src: "/team/juan_web_portrait.webp"
  },
  {
    quote: "As an interdisciplinary graduate and machine learning enthusiast, I've developed our proprietary AI platform that analyzes thousands of data points to identify undervalued properties before they hit the market. Technology meets real estate expertise.",
    name: "Omar Magdy",
    designation: "CTO - AI Architecture",
    src: "/team/magdy_web_portrait.webp"
  },
  {
    quote: "My transition from NHL professional to successful real estate investor taught me the importance of strategic thinking and disciplined execution. I bring that championship mindset to every investment opportunity we present to our partners.",
    name: "Alexei Semenov",
    designation: "President - Investment Strategy",
    src: "/team/alexei_web_portrait.png"
  }
]; 