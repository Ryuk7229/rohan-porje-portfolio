/*
====================================================
PROJECT DATABASE
====================================================

This file contains ALL portfolio projects.

IMPORTANT:

featured: true
→ Project appears in the homepage Bento grid.

featured: false
→ Project appears only on /projects.

You can have 10, 20, 50+ projects here.

====================================================
*/

import chryslerBanner from "../assets/ProjectImages/chryslerBanner.png";
import chryslerImage1 from "../assets/ProjectImages/chrysler-1.png";
import chryslerImage2 from "../assets/ProjectImages/chrysler-2.png";
import chryslerImage3 from "../assets/ProjectImages/chrysler-3.png";
import chryslerImage4 from "../assets/ProjectImages/chrysler-4.png";
import Banner from "../assets/ProjectImages/Banner.png";
import bdBanner from "../assets/ProjectImages/bd-banner.png";
import bd1 from "../assets/ProjectImages/bd-1.png";
import bd2 from "../assets/ProjectImages/bd-2.png";
import bd3 from "../assets/ProjectImages/bd-3.png";
import bd4 from "../assets/ProjectImages/bd-4.png";
import symphonyBannerVideo from "../assets/ProjectImages/homepage-video.mp4";
import symphonyBanner from "../assets/ProjectImages/symphonyBanner.png";
import symphony1 from "../assets/ProjectImages/symphony1.png";
import symphony2 from "../assets/ProjectImages/symphony2.png";
import symphony3 from "../assets/ProjectImages/symphony3.png";
import Soulinaire1 from "../assets/ProjectImages/Soulinaire1.png";
import Soulinaire2 from "../assets/ProjectImages/Soulinaire2.png";
import Soulinaire3 from "../assets/ProjectImages/Soulinaire3.png";
import Soulinaire4 from "../assets/ProjectImages/Soulinaire4.png";
import carzato1 from "../assets/ProjectImages/carzato-banner.png";
import carzato2 from "../assets/ProjectImages/carzato2.png";
import carzato3 from "../assets/ProjectImages/carzato3.png";
import carzato4 from "../assets/ProjectImages/carzato4.png";
import rajbanner from "../assets/ProjectImages/raj-banner.jpg";
import raj1 from "../assets/ProjectImages/raj1.png";
import B2B from "../assets/ProjectImages/B2B.jpg";
import raj2 from "../assets/ProjectImages/raj2.png";
import raj3 from "../assets/ProjectImages/raj3.png";
import raj4 from "../assets/ProjectImages/raj4.png";

export const projects = [
  /* =================================================
     01 — CHRYSLER PACIFICA
  ================================================= */

  {
    slug: "chrysler-pacifica",

    title: "Chrysler Pacifica",

    label: "PRODUCT LAUNCH",

    category: "Automotive",

    year: "2024",

    featured: true,

    role: "UI/UX Designer & Frontend Developer",

    heroSummary:
      "Building a fast, modern digital showroom for an iconic American automotive brand",

    // shortDescription:
    //   "Product launch landing page combining premium automotive design with responsive frontend development.",

    description:
      "Chrysler is an American automotive brand with a heritage dating to 1925, now part of Stellantis. Today its lineup centres on the Pacifica family of minivans, including the plug-in hybrid. We developed the Chrysler website as a digital showroom where families can explore the vehicles, compare trims and features, and take the next step toward ownership. The goal was a fast, dependable site that matches the comfort and quality the brand is known for.",

    /* =================================================
       BENTO IMAGE
    =================================================

       TODO:
       Add the project thumbnail used inside
       the homepage Bento card.

       Example:

       image: "/projects/chrysler-pacifica/thumbnail.jpg",

    */

    image: chryslerBanner,

    /* =================================================
       PROJECT HERO IMAGE
    =================================================

       TODO:
       Add the large hero image for the
       dedicated project page.

       Example:

       heroImage: "/projects/chrysler-pacifica/hero.jpg",

    */

    heroImage: chryslerBanner,

    tools: ["Figma", "HTML", "CSS", "JavaScript", "Bootstrap"],

    services: [
      "UI/UX Design",
      "Responsive Web Design",
      "Frontend Development",
      "Accessibility",
    ],

    challenge:
      "A major automotive site has to do many things at once, and each one added a technical requirement. Rich visual content without slow pages. Car buyers expect large imagery, galleries and interactive features, but heavy media can easily hurt load times. Complex product information. Trims, packages, specifications, hybrid details and pricing must be presented accurately and kept up to date. A wide range of devices. Many shoppers research on their phones before visiting a dealer, so the experience had to work smoothly everywhere. Connection to the buying journey. Visitors needed clear paths to build and price a vehicle, find a dealer, check offers and request information. Scale and reliability. A brand of this stature needs consistent performance, accessibility and uptime, with content that marketing teams can update safely.",

    approach:
      "We built the site around three priorities: speed, consistency and ease of maintenance. We began by turning the approved designs into a structured component library, so that every page could be assembled from reusable, tested pieces. Performance was part of every decision from the start, not a clean-up task at the end. We built mobile-first, tested early across devices and browsers, and kept the code clean and well documented so the team could extend the site over time.",

    outcome:
      "Delivered a seamless, visually captivating digital product launch that bridges emotional brand storytelling with clear, conversion-driven automotive purchasing tools.",

    /* =================================================
       CASE STUDY SECTIONS
    =================================================

       TODO:
       Add as many sections as required.

       Every section can contain:

       title
       text
       image

    */

    sections: [
      {
        title: "Technology Used",

        points: [
          "We chose a lightweight, dependable front-end stack that keeps the site fast and easy to maintain.",

          "HTML5: semantic, well-structured markup for accessibility and search-friendliness",

          "CSS3: custom styling that brings the design to life with precision",

          "Bootstrap 5: a responsive grid and reusable components for consistent layouts",

          "JavaScript: interactive elements such as sliders, galleries and dynamic behaviour",

          "Media Queries: fine-tuned layouts for desktop, tablet and mobile breakpoints",

          "Adobe Photoshop: creating and optimising the website imagery",

          "Adobe Premiere Pro: producing and editing the video content",
        ],

        // TODO: Add overview image
        image: chryslerImage1,
      },

      {
        title: "Frontend Development",

        points: [
          "The finished site is a fast, responsive build that puts the vehicles at the centre.",

          "Fully responsive layouts that adapt cleanly across desktop, tablet and mobile using Bootstrap 5 and custom media queries",

          "Interactive vehicle sections with galleries and sliders powered by JavaScript",

          "Custom-prepared imagery from Photoshop, optimised for sharp quality at light file sizes",

          "Engaging video content produced in Premiere Pro to showcase the vehicles",

          "Consistent, reusable components that keep every page visually uniform",

          "Clean, organised code that is easy to update and extend",
        ],

        // TODO: Add overview image
        image: chryslerImage2,

        images: [chryslerImage3, chryslerImage4],
      },
    ],
  },

  /* =================================================
     02 — BEYERDYNAMIC
  ================================================= */

  {
    slug: "beyerdynamic",

    title: "Beyerdynamic Website UI",

    label: "WEBSITE DESIGN",

    category: "E-Commerce",

    year: "2023",

    featured: true,

    role: "UI/UX Designer",

    heroSummary:
      "Designing a global home for a century of German audio craftsmanship",
    // shortDescription:
    //   "Premium website interface designed around Beyerdynamic's high-end audio products.",

    description: [
      "beyerdynamic is one of the best-known names in audio technology. Founded in Berlin in 1924 and based in Heilbronn, Germany, the company makes headphones, microphones and conferencing systems for professionals and music lovers alike. We designed the global website to give this heritage brand a digital home that is as precise and well-crafted as its products. The site lets studio engineers, performers, consumers and business customers each find the right product and learn the story behind it.",
    ],

    // TODO: Add Bento thumbnail
    image: Banner,

    // TODO: Add project hero image
    heroImage: Banner,

    tools: ["Adobe XD", "Photoshop", "Illustrator"],

    services: ["UI Design", "UX Design", "Visual Design", "Responsive Design"],

    challenge: [
      "Several audiences under one brand. Professionals in studio, stage and broadcast, consumers choosing hi-fi headphones, and businesses looking for conferencing and communication solutions all need different information.",

      "A large and technical product range. Headphones, microphones, wireless systems and conference solutions come with detailed specifications that are hard to present without overwhelming visitors.",

      "Heritage and modernity together. The brand's century-long history and handmade in Germany reputation had to feel alive and current, not dated.",

      "A global audience. A worldwide site needs a clear structure and consistent experience that works across regions and languages.",

      "Premium products need a premium presentation. Audio buyers care deeply about quality, so the design had to communicate precision and craftsmanship before a visitor ever pressed play.",
    ],

    approach: [
      "We approached the project the way beyerdynamic approaches its products: with precision and attention to detail. We started from the brand's identity, structured the experience around how different audiences actually navigate, and refined the interface until every element earned its place.",
    ],

    outcome:
      "A stronger, more premium brand impression that matches the products",

    sections: [
      {
        title: "Brand Direction",

        points: [
          "We began by defining how beyerdynamic should feel on screen. The brand combines technical authority with a love of sound, so the direction focused on a few clear principles:",

          "Precision. Clean grids, sharp typography and structured layouts that reflect engineering quality",

          "Craft. Detail-rich product imagery and close-up views that highlight materials, finish and build",

          "Heritage with energy. A confident visual identity that respects the brand's history while feeling contemporary",

          "Clarity. Restrained colour and generous white space, so the products remain the focus",

          "These principles guided every later decision on typography, colour, imagery and tone.",
        ],

        // TODO: Add brand direction image
        image: bdBanner,
      },

      {
        title: "Wireframes",

        points: [
          "Before any visual styling, we worked through structure. We mapped the sitemap and user flows for the main audiences, and then built wireframes to test how people move from the homepage to product discovery to a confident decision.",

          "Audience-based navigation that lets professionals, consumers and business customers find their way quickly",

          "Clear product categories with filters for the specifications that matter most",

          "Product page layouts that balance emotive imagery with scannable technical details",

          "Space for brand storytelling, including heritage, craftsmanship and the people behind the products",

          "Consistent patterns for comparison, support and contact, so the global experience stays coherent",
        ],

        // TODO: Add wireframe image
        image: bd1,
      },

      {
        title: "Final Design",

        points: [
          "The final design brings the brand direction and the wireframes together in a polished, immersive interface.",

          "A striking homepage that introduces the brand, spotlights key products and guides visitors by interest",

          "Image-led product pages with large visuals, key features and clear specifications",

          "Smooth category browsing with filters and comparison that make a broad range easy to explore",

          "Brand and craftsmanship sections that tell the story of German engineering and handmade quality",

          "A consistent component system that keeps typography, buttons, cards and layouts uniform across the site",
        ],

        // TODO: Add final design image
        image: bd2,
        images: [bd3, bd4],
      },
    ],
  },

  /* =================================================
     03 — SYMPHONY AIR COOLER
  ================================================= */

  {
    slug: "symphony-air-cooler",

    title: "Symphony Air Cooler Website",

    label: "WEBSITE EXPERIENCE",

    category: "Consumer",

    year: "2023",

    featured: true,

    role: "UI/UX Designer",

    heroSummary:
      "A scalable design system for the world's leading air cooler brand",

    // shortDescription:
    //   "Product-focused website experience created for Symphony Air Coolers.",

    description: [
      "Symphony Limited is the world's largest air cooler manufacturer, with products spanning household, commercial and industrial cooling. Its range includes tower coolers, personal coolers, smart coolers and large-space cooling solutions, sold in more than 60 countries. We redesigned the Symphony website experience around this wide portfolio, so that a first-time homebuyer and a factory manager can each find the right product quickly.",
    ],

    // Bento grid
    image: symphonyBanner,

    video: symphonyBannerVideo,

    // Project page
    heroImage: symphonyBanner,

    heroVideo: symphonyBannerVideo,

    tools: ["Adobe XD", "Photoshop", "Illustrator"],

    services: ["UI/UX Design", "Visual Design", "Web Design"],

    challenge:
      "Symphony's strength is its breadth, and that was also the design challenge. A very wide product range. Household, commercial and industrial coolers serve very different buyers, but they all live under one brand. Technical choices for everyday buyers. Tank capacity, room size, cooling coverage and features such as smart controls are hard to compare, especially for someone buying an air cooler for the first time. A brand known for design and innovation. The interface needed to reflect that reputation rather than feel like a generic catalogue. Consistency at scale. With many product lines and pages, the experience could easily drift into inconsistent layouts and components. Both discovery and decision. The site had to inspire browsing and also help visitors make a confident choice, whether that meant buying online or finding the right product for a business.",

    approach:
      "We designed for the buying journey instead of the product list. The work moved from understanding how people choose a cooler, to building a design system that could carry the whole portfolio, to crafting the final screens.",

    outcome: "A system built to grow as new products and categories launch",

    sections: [
      {
        title: "Product Research",

        points: [
          "We began with the products and the people who buy them. We studied Symphony's range and how it divides into household, commercial and industrial categories, and which specifications matter most at each stage of the decision. We reviewed how leading appliance and consumer brands present complex products online, and mapped the main user groups: homeowners choosing for a specific room, families comparing models, and business buyers looking for large-space solutions. We then pinpointed where visitors typically get stuck, such as unclear comparisons or hard-to-scan specifications. Together these findings shaped the navigation, the filtering approach and the information shown on each product page.",
        ],

        // TODO: Add research image
        image: symphony1,
      },

      {
        title: "Design System",

        points: [
          "To keep a large portfolio consistent, we built a design system rather than designing page by page. It includes:",

          "Foundations: a defined colour palette, typography scale, spacing and grid",

          "Components: buttons, cards, filters, comparison tables, product galleries, forms and navigation patterns",

          "Product patterns: reusable layouts for product listings, specification blocks, feature highlights and category pages",

          "Responsive rules: guidance so every component works from large desktop screens to mobile",

          "The system gives Symphony a single visual language that feels fresh and cool, supports quick updates, and lets new products and pages be added without redesigning from scratch.",
        ],

        // TODO: Add design system image
        image: symphony2,
      },

      {
        title: "Final Screens",

        points: [
          "The final screens bring the research and the system together into a clear, confident experience.",

          "Homepage: a bold, product-led introduction that guides visitors by need, such as home, office, factory or warehouse",

          "Category pages: clean listings with filters for the criteria buyers care about most",

          "Product detail pages: large imagery, scannable specifications, key features and clear calls to action",

          "Comparison views: side-by-side models that make choosing simple",

          "Commercial and industrial pages: tailored layouts for business buyers, with enquiry paths for large-space solutions",

          "Mobile experience: every key screen designed for smaller devices, where much product research happens",
        ],

        // TODO: Add UI screenshots
        image: symphony3,
      },
    ],
  },

  /* =================================================
     04 — SOULINAIRE
  ================================================= */

  {
    slug: "soulinaire",

    title: "Soulinaire",

    label: "BRAND WEBSITE",

    category: "FMCG",

    year: "2023",

    featured: true,

    role: "UI/UX Designer",

    heroSummary: "A website as refined as the celebrations it caters",

    // shortDescription:
    //   "Modern FMCG website experience combining product storytelling with a premium visual language.",

    description:
      "Soulinaire is a luxury gourmet catering and lifestyle dining brand from IHCL, the hospitality company behind the Taj. It serves everything from intimate home gatherings to large-scale celebrations, with bespoke menus, world cuisine and signature hospitality. We created the brand's website to carry that sense of occasion online and to help visitors explore its catering services, its restaurant and its collaborations in one place.",

    // TODO: Add Bento thumbnail
    image: Soulinaire1,

    // TODO: Add project hero image
    heroImage: Soulinaire1,

    tools: ["Adobe XD", "Photoshop", "Illustrator"],

    services: ["UI/UX Design", "Visual Design", "Web Design"],

    challenge:
      "Soulinaire is a brand with a lot going on. The website had to handle several challenges at once: Many offerings under one name. Outdoor and event catering, a permanent restaurant, a city presence in Ahmedabad and a cultural collaboration in Mumbai all needed clear places to live without confusing visitors. Luxury has to be felt, not just stated. Premium clients judge a catering brand in seconds, so the site had to look and feel as polished as the service. Food is visual. The experience depends on atmosphere, plating and craft, so the site needed to show those qualities rather than simply describe them. A clear path to enquiry. Catering is booked through conversation. The site had to make it easy to reach the right team for the right city or occasion.",

    approach:
      "We treated the website as an extension of the hospitality experience. The goal was a digital version of arriving at a beautifully hosted event: welcoming, unhurried and detailed. We began by understanding the brand and its guests, then built a visual direction around that, and finally shaped it into a site that is easy to navigate and enquire through.",

    outcome:
      "A premium first impression that builds trust with high-value clients",

    sections: [
      {
        title: "Brand Research",

        points: [
          "We started with the brand's story and positioning: a catering brand that grew into a lifestyle dining name, shaped by celebration and by the warmth of Taj hospitality. We studied how Soulinaire presents itself across its channels and how premium catering and hospitality brands communicate online.",

          "We also identified who the site serves, from private hosts planning a gathering to corporate and event clients looking for scale and reliability.",

          "This gave us a clear picture of the brand's tone, its audience and its most important messages: bespoke menus, world cuisine, and seamless execution.",
        ],

        // TODO: Add research image
        image: Soulinaire2,
      },

      {
        title: "Visual Direction",

        points: [
          "From the research, we shaped a visual language that feels elegant without being formal. The direction focuses on:",

          "Rich, appetising imagery that puts food, setting and craft in front of the visitor",

          "A refined colour palette that signals luxury while staying warm and inviting",

          "Considered typography with a graceful hierarchy that lets the content breathe",

          "Generous white space and calm layouts that give the brand a polished, unhurried feel",
        ],

        // TODO: Add moodboard image
        image: Soulinaire3,
      },

      {
        title: "Final Website",

        points: [
          "The finished website presents the full world of Soulinaire in a clear, immersive structure.",

          "A welcoming homepage that introduces the brand and its signature hospitality at a glance",

          "Dedicated pages for gourmet catering, culinary expertise, service excellence and the brand overview",

          "Location-specific pages for the Alibaug restaurant, Ahmedabad and the IF.BE culinary experiences, each with its own character and contact details",

          "Image-led storytelling that shows the food, spaces and occasions rather than listing them",

          "Simple enquiry paths with the right contact for outdoor catering, each city and the restaurant",

          "Fully responsive layouts that look and perform beautifully on desktop, tablet and mobile",
        ],

        // TODO: Add website screenshots
        image: Soulinaire4,
      },
    ],
  },

  /* =================================================
     05 — CARZATO DASHBOARD
  ================================================= */

  {
    slug: "carzato",

    title: "Carzato",

    label: "ORE platform",

    category: "ORE platform",

    year: "2025",

    featured: true,

    role: "UI Developer",

    heroSummary:
      "A fast, scalable WordPress website for an automotive digital retail platform",

    // shortDescription:
    //   "Enterprise analytics dashboard designed to present complex business data through clear visualisation.",

    description:
      "Carzato builds digital retail technology for car dealers and automotive brands, helping shoppers start their purchase online and finish it at the dealership. We developed their marketing website in WordPress. The site explains a technical product clearly to two audiences, dealers and car buyers, and gives the Carzato team full control to update content without a developer.",

    // TODO: Add Bento thumbnail
    image: carzato1,

    // TODO: Add project hero image
    heroImage: carzato1,

    tools: ["Wordpress", "HTML", "CSS", "JavaScript"],

    services: [
      "UX Research",
      "Web Development",
      // "Dashboard Design",
      // "Data Visualization",
    ],

    challenge:
      "Two audiences, one site. Dealers and automotive businesses want to understand features and value, while consumers want to see how the car-buying experience works. Complex features, simple messaging. Online retailing, lead generation, pricing syndication and dealership integration all needed to be explained without overwhelming visitors. Lead generation as the main goal. Every page needed to move decision-makers toward a demo request or enquiry. Easy ownership. The Carzato team needed to update pages, add content and launch new campaigns without relying on developers for every change.",

    approach:
      "We chose WordPress for its flexibility, its mature ecosystem and the editing control it gives non-technical teams. Structure the content around what visitors need. We organised the pages by audience and product capability. Build for editing. Reusable sections and custom layouts let the team assemble new pages without touching code. Make performance part of the build. We optimised images, code and caching from the start rather than as a final step. Treat lead capture as core. Forms, calls to action and tracking were planned alongside the pages themselves.",

    outcome:
      "A scalable foundation that can grow with new features and campaigns",

    sections: [
      {
        title: "Project Overview",

        points: [
          "Industry: Automotive Digital Retail Technology",

          "Services: WordPress Development · Custom Functionality · Performance Optimisation · Lead Form Integration",

          "This was a development-led project. Our work covered the full technical build: setting up the WordPress environment, turning the approved structure into working pages, building custom components, integrating forms and analytics, and preparing the site for launch.",
        ],

        // TODO: Add research image
        image: carzato2,
      },

      {
        title: "Research & Discovery",

        points: [
          "Before development began, we spent time understanding the product, the audience and the technical requirements.",

          "Business and product understanding. We learned how Carzato's platform works and how its value differs for dealers and for shoppers.",

          "Content and sitemap planning. We agreed the pages, hierarchy and navigation so the build had a stable foundation.",

          "Technical requirements. We defined the functionality the site needed, such as lead forms, integrations, analytics and SEO setup, and chose a theme, plugin and hosting approach that balanced flexibility with speed.",

          "Editing workflow. We spoke with the Carzato team about how they plan to update the site, so the CMS setup fits how they actually work.",
        ],

        // TODO: Add IA/user flow image
        image: carzato3,
      },

      {
        title: "Final Website",

        points: [
          "The finished site is a responsive, fast and easy-to-manage WordPress website that presents Carzato's platform clearly and turns visitors into leads.",

          "Clear product presentation. Dedicated sections explain the platform's key capabilities in plain language.",

          "Responsive across devices. Layouts adapt to desktop, tablet and mobile, and are tested across major browsers.",

          "Lead capture built in. Contact and demo-request forms are placed along the main visitor journeys and connected to the team's inbox [or CRM].",

          "Editor-friendly CMS. Reusable blocks and custom layouts let the team update content and create new pages on their own.",
        ],

        // TODO: Add wireframe image
        image: carzato4,
      },

      // {
      //   title: "Data Visualization",

      //   text: "Add information about charts, graphs, KPIs and reporting components.",

      //   // TODO: Add chart/dashboard image
      //   image: "",
      // },

      // {
      //   title: "Final Dashboard",

      //   text: "Add final dashboard screens.",

      //   // TODO: Add final dashboard screenshots
      //   image: "",
      // },
    ],
  },

  /* =================================================
     06 — RAJ PETRO
  ================================================= */

  {
    slug: "raj-petro",

    title: "Raj Petro Oil Industry",

    label: "CORPORATE WEBSITE",

    category: "Oil & Petroleum",

    year: "2023",

    featured: true,

    role: "UI/UX Designer",

    heroSummary:
      "Redesigning the digital face of a specialty lubricants leader",

    description:
      "Raj Petro manufactures lubricants, process oils and specialty petroleum products for industries ranging from power and automotive to food and pharma. We redesigned their website to present a large, technical product range clearly, build trust with B2B buyers, and reflect the scale of a company that serves customers worldwide.",

    // TODO: Add Bento thumbnail
    image: rajbanner,

    // TODO: Add project hero image
    heroImage: rajbanner,

    tools: ["Adobe XD", "Photoshop", "Illustrator"],

    services: ["UI/UX Design", "Corporate Web Design", "Visual Design"],

    challenge:
      "Industrial buyers don't browse, they search with a purpose. Raj Petro's old site made that difficult. A large catalogue with no clear logic. Many product categories, grades and applications competed for attention, which made it hard for visitors to find the right product. A brand that outgrew its website. The company's global reach and quality standards weren't reflected in the design. Different audiences, one experience. Distributors, OEMs, industrial buyers and partners all have different needs, but the site treated them the same.",

    approach:
      "We designed around how Raj Petro's buyers actually look for products, rather than around how the company is organised internally. The process had three stages.",

    outcome:
      "A modern, professional identity that builds trust with B2B buyers",

    sections: [
      {
        title: "Project Discovery",

        text: "We started with the business before the screens. Stakeholder conversations helped us understand Raj Petro's priorities, markets and brand positioning. We audited the existing site and competitor sites in the lubricants and specialty oils space to see where visitors got stuck and what the best sites do well. We then defined the key user groups and their main tasks, such as finding a product by application, checking specifications, verifying credentials and contacting the right team. These findings shaped the project goals and gave every later decision a clear reference point.",

        // TODO: Add discovery image
        image: raj1,
      },

      {
        title: "Information Architecture",

        text: "With a catalogue this large, structure matters more than any visual choice. We reorganised the content around two intuitive entry points: industry and application, and product type. We mapped the full sitemap, simplified the navigation, and defined clear page hierarchies and labels. We also planned user flows for the most important journeys, from landing page to product detail to enquiry, so no key action is more than a few clicks away. Wireframes tested this structure before any visual design began.",

        // TODO: Add sitemap image
        image: B2B,
      },

      {
        title: "UI Design",

        text: "The visual design reflects the confidence and reliability of the brand. We built a clean, modern interface with a strong typographic hierarchy, generous spacing and a considered colour palette that fits the industrial setting without feeling heavy. Product pages present specifications, applications and downloads in a scannable format. Consistent components and a flexible design system keep the site coherent as it grows, and every layout is responsive across desktop, tablet and mobile.",

        // TODO: Add UI screenshots
        image: raj2,
        images: [raj3, raj4],
      },
    ],
  },

  /* =================================================
     07 — ADD MORE PROJECTS BELOW
  =================================================

     Copy this structure whenever you add
     another project.

  ================================================= */
];

/*
====================================================
HELPER FUNCTIONS
====================================================
*/

/* Find project by slug */

export const getProjectBySlug = (slug) => {
  console.log("URL SLUG:", slug);
  console.log(
    "AVAILABLE SLUGS:",
    projects.map((project) => project.slug),
  );

  return projects.find(
    (project) => project.slug.toLowerCase() === slug.toLowerCase(),
  );
};

/* Get featured projects */

export const getFeaturedProjects = () => {
  return projects.filter((project) => project.featured).slice(0, 6);
};

/* Get all projects */

export const getAllProjects = () => {
  return projects;
};

export default projects;
