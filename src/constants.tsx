import { Target, Users, Anchor, BrainCircuit } from 'lucide-react';
import { ServiceItem, Review } from './types';

export const CONTACT_EMAIL = "onepingconsulting@outlook.com";
export const PHONE_NUMBER = "610-854-8234";
export const CALENDLY_LINK = "https://calendly.com/michaeljohnwalters";

export const SERVICES: ServiceItem[] = [
  {
    id: 'ai-marketing',
    title: 'AI Marketing',
    icon: BrainCircuit,
    path: '/services/ai-marketing',
    shortDescription: 'Precision targeting that never sleeps.',
    fullDescription: `
      <h3 class="text-xl font-bold text-cyan-400 mb-2">The Silent Service of Marketing</h3>
      <p class="mb-4">
        AI Marketing is the nuclear reactor of your business growth. It never sleeps, requires no breaks, and processes data at speeds human teams cannot match. 
        It is smarter, faster, and significantly more affordable than traditional agencies.
      </p>
      <p>
        By leveraging advanced algorithms, we target—by design—the monies and business opportunities you are currently missing. 
        Like a passive sonar array, we listen to the market signals, identify the high-value targets, and deploy resources with pinpoint accuracy.
      </p>
    `
  },
  {
    id: 'behavior-profiling',
    title: 'Behavior Profiling',
    icon: Users,
    path: '/services/behavior-profiling',
    shortDescription: 'Decode the human element.',
    fullDescription: `
      <h3 class="text-xl font-bold text-cyan-400 mb-2">Sonar for the Soul</h3>
      <p class="mb-4">
        In the depths of business, understanding who is on your boat is critical to survival. Human Behavior Profiling allows you to understand your clientele and staff at a foundational level.
      </p>
      <p class="mb-4">
        <strong>For Executives:</strong> Don't hire the wrong C-Suite employee. One toxic leader can sink the ship. We provide the intelligence needed to verify compatibility before you hand over the keys.
      </p>
      <p>
        <strong>For Teams & Family:</strong> Get the best performance out of your staff, your children, and your family by understanding their drivers. We map the psychological terrain so you can navigate relationships with confidence.
      </p>
    `
  },
  {
    id: 'pro-coaching',
    title: 'Professional Coaching',
    icon: Anchor,
    path: '/services/pro-coaching',
    shortDescription: 'Unlock your command potential.',
    fullDescription: `
      <h3 class="text-xl font-bold text-cyan-400 mb-2">Command Your Course</h3>
      <p class="mb-4">
        Every Captain needs to know the limits of their vessel. Professional Coaching is about understanding yourself better to unlock your limiting and performance-hindering beliefs.
      </p>
      <p>
        Whether personal or professional, we identify the invisible barriers—the thermal layers—hiding your true potential. 
        Through rigorous self-assessment and guided strategy, we help you breach the surface and operate at full capacity.
      </p>
    `
  }
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    clientName: "Sarah J.",
    service: "AI Marketing",
    text: "One Ping's AI approach found customers we didn't know existed. Our ROI doubled in three months. Lethal efficiency.",
    rating: 5
  },
  {
    id: 2,
    clientName: "Mark T.",
    service: "Behavior Profiling",
    text: "Saved us from a disastrous CFO hire. The behavioral report was scarily accurate. Highly recommend for any board.",
    rating: 5
  },
  {
    id: 3,
    clientName: "Cmdr. David R. (Ret)",
    service: "Professional Coaching",
    text: "Mike helped me transition from service to the boardroom. He helped me identify the beliefs holding me back. A true village leader.",
    rating: 5
  }
];