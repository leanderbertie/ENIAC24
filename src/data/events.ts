export interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  time: string;
  venue: string;
  registrationLink: string;
  rules: string[];
}

export const eventsData: Record<string, Event[]> = {
  onstage: [
    {
      id: "Title Event",
      title: "Title Event",
      description: "Create and present an innovative advertisement in a limited time. Test your creativity, improvisation, and presentation skills in this exciting challenge.",
      image: "/images/titleevent.jpg",
      date: "13 December 2024",
      time: "10:00 AM - 12:00 PM",
      venue: "Bertram hall",
      registrationLink: "https://forms.google.com/adzap-registration",
      rules: [
        "Teams of 4-5 members",
        "Time limit: 30 minutes for preparation",
        "5 minutes for presentation",
        "Product/service will be given on spot",
        "Props usage is allowed",
        "Language: English or Tamil"
      ]
    },
    {
      id: "Adzap",
      title: "Adzap",
      description: "Switch between different TV channel genres in this unique performance challenge. Show your versatility in acting and improvisation.",
      image: "",
      date: "13 December 2024",
      time: "2:00 PM - 4:00 PM",
      venue: "Mini Hall",
      registrationLink: "https://forms.google.com/channel-surfing-registration",
      rules: [
        "Teams of 3-4 members",
        "Performance time: 7-10 minutes",
        "Minimum 4 channel changes",
        "Original content only",
        "No offensive content",
        "Props must be minimal"
      ]
    },
    {
      id: "Channel surfing",
      title: "Channel surfing",
      description: "Create and present an innovative advertisement in a limited time. Test your creativity, improvisation, and presentation skills in this exciting challenge.",
      image: "",
      date: "13 December 2024",
      time: "10:00 AM - 12:00 PM",
      venue: "Bertram hall",
      registrationLink: "https://forms.google.com/adzap-registration",
      rules: [
        "Teams of 4-5 members",
        "Time limit: 30 minutes for preparation",
        "5 minutes for presentation",
        "Product/service will be given on spot",
        "Props usage is allowed",
        "Language: English or Tamil"
      ]
    },{
      id: "IPL auction",
      title: "IPL auction",
      description: "Create and present an innovative advertisement in a limited time. Test your creativity, improvisation, and presentation skills in this exciting challenge.",
      image: "",
      date: "13 December 2024",
      time: "10:00 AM - 12:00 PM",
      venue: "Smart room",
      registrationLink: "https://forms.google.com/adzap-registration",
      rules: [
        "Teams of 4-5 members",
        "Time limit: 30 minutes for preparation",
        "5 minutes for presentation",
        "Product/service will be given on spot",
        "Props usage is allowed",
        "Language: English or Tamil"
      ]
    }
  ],
  technical: [
    {
      id: "debugging",
      title: "Debugging",
      description: "Put your problem-solving skills to the test in this intensive debugging challenge. Find and fix bugs in various programming languages.",
      image: "",
      date: "13 December 2024",
      time: "9:00 AM - 12:00 PM",
      venue: "Computer Lab",
      registrationLink: "https://forms.google.com/debugging-registration",
      rules: [
        "Individual participation",
        "Multiple programming languages supported",
        "Time limit: 3 hours",
        "Internet access restricted",
        "Bring your own laptop",
        "IDE will be provided"
      ]
    },
    {
      id: "web-design",
      title: "Web Design",
      description: "Create a stunning and functional website from scratch. Showcase your web development and design skills in this competitive event.",
      image: "",
      date: "13 December 2024",
      time: "2:00 PM - 5:00 PM",
      venue: "Design Lab",
      registrationLink: "https://forms.google.com/web-design-registration",
      rules: [
        "Teams of 2 members",
        "Original design required",
        "Framework usage allowed",
        "Responsive design mandatory",
        "Time limit: 3 hours",
        "Live presentation required"
      ]
    }, {
      id: "debugging",
      title: "Debugging",
      description: "Put your problem-solving skills to the test in this intensive debugging challenge. Find and fix bugs in various programming languages.",
      image: "",
      date: "13 December 2024",
      time: "9:00 AM - 12:00 PM",
      venue: "Computer Lab",
      registrationLink: "https://forms.google.com/debugging-registration",
      rules: [
        "Individual participation",
        "Multiple programming languages supported",
        "Time limit: 3 hours",
        "Internet access restricted",
        "Bring your own laptop",
        "IDE will be provided"
      ]
    },
    {
      id: "web-design",
      title: "Web Design",
      description: "Create a stunning and functional website from scratch. Showcase your web development and design skills in this competitive event.",
      image: "",
      date: "13 December 2024",
      time: "2:00 PM - 5:00 PM",
      venue: "Design Lab",
      registrationLink: "https://forms.google.com/web-design-registration",
      rules: [
        "Teams of 2 members",
        "Original design required",
        "Framework usage allowed",
        "Responsive design mandatory",
        "Time limit: 3 hours",
        "Live presentation required"
      ]
    }, {
      id: "Quiz",
      title: "Quiz",
      description: "Put your problem-solving skills to the test in this intensive debugging challenge. Find and fix bugs in various programming languages.",
      image: "",
      date: "13 December 2024",
      time: "9:00 AM - 12:00 PM",
      venue: "Computer Lab",
      registrationLink: "https://forms.google.com/debugging-registration",
      rules: [
        "Individual participation",
        "Multiple programming languages supported",
        "Time limit: 3 hours",
        "Internet access restricted",
        "Bring your own laptop",
        "IDE will be provided"
      ]
    },
    {
      id: "Paper presentation",
      title: "Paper presentation",
      description: "Create a stunning and functional website from scratch. Showcase your web development and design skills in this competitive event.",
      image: "",
      date: "13 December 2024",
      time: "2:00 PM - 5:00 PM",
      venue: "Design Lab",
      registrationLink: "https://forms.google.com/web-design-registration",
      rules: [
        "Teams of 2 members",
        "Original design required",
        "Framework usage allowed",
        "Responsive design mandatory",
        "Time limit: 3 hours",
        "Live presentation required"
      ]
    }
  ],
  online: [
    {
      id: "meme-creation",
      title: "Meme Creation",
      description: "Create original and hilarious memes based on given themes. Show your creativity and humor in this online competition.",
      image: "",
      date: "13 December 2024",
      time: "Flexible",
      venue: "Online",
      registrationLink: "https://forms.google.com/meme-creation-registration",
      rules: [
        "Individual participation",
        "Original content only",
        "No offensive content",
        "Maximum 3 submissions",
        "Include source credits",
        "Format: JPG or PNG"
      ]
    },
    {
      id: "poster-making",
      title: "Poster Making",
      description: "Design eye-catching posters for given themes. Demonstrate your graphic design skills in this digital art competition.",
      image: "",
      date: "13 December 2024",
      time: "Flexible",
      venue: "Online",
      registrationLink: "https://forms.google.com/poster-making-registration",
      rules: [
        "Individual participation",
        "Digital submissions only",
        "Original artwork required",
        "Resolution: minimum 300 DPI",
        "Format: PDF or AI",
        "Include design explanation"
      ]
    }
  ]
};