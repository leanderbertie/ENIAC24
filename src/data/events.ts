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
  contacts: {
    name: string;
    phone: string;
  }[];
}

export const eventsData: Record<string, Event[]> = {
  onstage: [
    {
      id: "Mr & Mrs.ENIAC",
      title: "Mr & Mrs. ENIAC (Title Event)",
      description: "",
      image: "images/title event poster.webp",
      date: "13 December 2024",
      time: "10:00 AM",
      venue: "Sauliere hall",
      registrationLink: "https://forms.google.com/adzap-registration",
      rules: [
        "It is an individual events",
        "Two entry per Departments",
        "Multiple Rounds will be Contacted",
        "Participants will be eliminated after each round.",
        "One MR &MRS will be awarded",
        "Make it till the final round to conquer the title MR/MRS ENIAC",
        "Any form of vulgarity will lead to direct disqualification.",
        "Judge’s decision will be final and binding."
      ],
      contacts: [
        {
          name: "John Doe",
          phone: "+1 555-1234-5678"
        },
        {
          name: "Jane Smith",
          phone: "+1 555-8765-4321"
        }
      ]
    },
    {
      id: "QUIZTOPIA",
      title: "Quiztopia (Quiz)",
      description: "",
      image: "images/QUIZ POSTER copy (1).webp",
      date: "13 December 2024",
      time: "12:00 PM",
      venue: "SAULIERE HALL",
      registrationLink: "https://forms.google.com/debugging-registration",
      rules: [
        "One team should have maximum of 3 people.",
        "There will be two rounds (Preliminary round followed by final round).",
        "The use of electronic gadgets like mobile phone , iPad , tabs etc during quiz is strictly prohibited.",
        "Quiz Master’s decision will be final."
      ],
      contacts: [
        {
          name: "John Doe",
          phone: "+1 555-1234-5678"
        },
        {
          name: "Jane Smith",
          phone: "+1 555-8765-4321"
        }
      ]
    },
    {
      id: "Ad Mavericks",
      title: "Ad Mavericks (Adzap)",
      description: "In an adzap event, participants create short, entertaining skits or performances with the goal of promoting a product or brand. The best performance will win",
      image: "images/adzap poster.webp",
      date: "13 December 2024",
      time: "1:00 PM",
      venue: "Mini Hall",
      registrationLink: "https://forms.google.com/channel-surfing-registration",
      rules: [
        "It is a group event.",
        "A team can consist of 5-8 participants ( including emcee)",
        "Time Limit: 5 minutes performance + 1 minute preparation.",
        "Product will be given on spot.",
        "No props are allowed.",
        "Negative marks will be allocated for extra time.",
        "No form of vulgarity is allowed.",
        "Judges' decision is final and binding.",
        "Judging criteria: Content and script, acting skills, team coordination and costumes."
      ],
      contacts: [
        {
          name: "Jane Smith",
          phone: "+1 555-8765-4321"
        },
        {
          name: "Jane Smith",
          phone: "+1 555-8765-4321"
        }
      ]
    },
    {
      id: "Remote Chaos",
      title: "Remote Chaos (Channel Surfing)",
      description: "Perform a small skit presenting a TV or a youtube channel which changes rapidly. The channel to be given will be given on spot by the Judges and will be changed repeatedly. Channels may include youtube channels. The best performance will win",
      image: "images/CHANNEL SURFING POSTER.webp",
      date: "13 December 2024",
      time: "02:00 PM",
      venue: "Sauliere  hall",
      registrationLink: "https://forms.google.com/adzap-registration",
      rules: [
        "It is a group event ( 4-6 members in a team ).",
        "No props are allowed.",
        "Time limit: 3 to 5 minutes depending on the judges decision.",
        "Participants will be given channel names on spot",
        "Points will be awarded based on spontaneity, humor & originality.",
        "Insensitive reference to any caste/community/ individual/ genders are strictly prohibited.",
        "Vulgarity will lead to immediate disqualification.",
        "Judging Criteria : Accuracy, Content and Spontaneity.",
        "Judges decision will be final and binding."
      ],
      contacts: [
        {
          name: "John Doe",
          phone: "+1 555-1234-5678"
        },
        {
          name: "Jane Smith",
          phone: "+1 555-8765-4321"
        }
      ]
    }
  ],
  technical: [
    {
      id: "Bug Hunter Arena",
      title: "Bug Hunter Arena (Debugging)",
      description: "Put your problem-solving skills to the test in this intensive debugging challenge. Find and fix bugs in various programming languages.",
      image: "images/debugging poster.webp",
      date: "13 December 2024",
      time: "10:30 AM",
      venue: "Computer Lab",
      registrationLink: "https://forms.google.com/debugging-registration",
      rules: [
        "No. of participants per team : 2",
        "No. of teams per college: 1",
        "Duration : 1 hour",
        "Languages : C++, Java, Python. The participants need to debug a program which might be in any of these languages",
        "Multiple rounds will be conducted if necessary",
        "The errors will be mostly logical in nature and not language specific",
        "Decision of judges will be final"
      ],
      contacts: [
        {
          name: "John Doe",
          phone: "+1 555-1234-5678"
        },
        {
          name: "Jane Smith",
          phone: "+1 555-8765-4321"
        }
      ]
    },
    {
      id: "Pixel Craft",
      title: "Pixel Craft (Web Design)",
      description: "Put your problem-solving skills to the test in this intensive debugging challenge. Find and fix bugs in various programming languages.",
      image: "images/WEB DESIGN POSTER copy (1).webp",
      date: "13 December 2024",
      time: "11:00 AM",
      venue: "Computer Lab",
      registrationLink: "https://forms.google.com/debugging-registration",
      rules: [
        "NO OF PARTICIPANTS:  2",
        "PARTICIPANTS  ARE EXPECTED TO BE PRESENT IN THE VENUE  BEFORE 30 MINUTES",
        "PRELIMS WILL BE CONDUCTED IF NEEDED",
        "THE DESIGN MUST REFLECT THE GIVEN THEME",
        "Participants is required to present and explain their design followed by short deliberations by the judges",
        "Judges decision will be final."
      ],
      contacts: [
        {
          name: "John Doe",
          phone: "+1 555-1234-5678"
        },
        {
          name: "Jane Smith",
          phone: "+1 555-8765-4321"
        }
      ]
    },
    {
      id: "Electrocode",
      title: "Electrocode (Wired Coding)",
      description: "Create a stunning and functional website from scratch. Showcase your web development and design skills in this competitive event.",
      image: "",
      date: "13 December 2024",
      time: "10:30 AM",
      venue: "Computer Lab",
      registrationLink: "https://forms.google.com/web-design-registration",
      rules: [
        "Teams of 2 members",
        "Original design required",
        "Framework usage allowed",
        "Responsive design mandatory",
        "Time limit: 3 hours",
        "Live presentation required"
      ],
      contacts: [
        {
          name: "Jane Smith",
          phone: "+1 555-8765-4321"
        },
        {
          name: "Jane Smith",
          phone: "+1 555-8765-4321"
        }
      ]
    }, {
      id: "Team Hunt",
      title: "Team Hunt (IPL Auction)",
      description: "Answer questions on IPL and bid for your favourite players",
      image: "images/ipl auction poster2024c.webp",
      date: "13 December 2024",
      time: "10:00 AM - 12:00 PM",
      venue: "Smart room",
      registrationLink: "https://forms.google.com/adzap-registration",
      rules: [
        "A Team of 3 members max.",
        "Using of electronic gadgets during prelims is strictly prohibited.",
        "There will be two rounds: prelims followed by auction.",
        "8 teams will be selected for the second round.",
        "Each team should set their playing 11 with their purse amounts.",
        "Playing 11 will be ranked by their last season performances.",
        "Committee’s decision will be the final." 
      ],
      contacts: [
        {
          name: "Jane Smith",
          phone: "+1 555-8765-4321"
        },
        {
          name: "Jane Smith",
          phone: "+1 555-8765-4321"
        }
      ]
     
    },
    {
      id: "Think Tank",
      title: "Think Tank (Paper Presentation)",
      description: "Showcase cutting-edge research and advancements through engaging presentations. Teams will present on a chosen topic from the given topics for 6 minutes and will face a query session for another 2 mins. The team with the best presentation will win. The presentations should be emailed to the organiser before the event",
      image: "images/PAPER PRESENTATION POSTER copy (1).webp",
      date: "13 December 2024",
      time: "10:30 AM",
      venue: "Design Lab",
      registrationLink: "https://forms.google.com/web-design-registration",
      rules: [
        "2 person per team and",
        "Timings 6+2 (6mins presentation+2mins preparation)no extra time and will be paused if time limit exceeds",
        "Make your title and content legible",
        "Directly copying from the internet is discouraged and will not be entertained",
        "Abstract should be submitted on or before 8th December",
        "Paper presentation should be submitted on 10th December",
        "Final participants for presenting onstage will be short listed based on contents that they had submitted",
        "Based on application/model/implementation priority will be given"
      ],
      contacts: [
        {
          name: "Jane Smith",
          phone: "+1 555-8765-4321"
        },
        {
          name: "Jane Smith",
          phone: "+1 555-8765-4321"
        }
      ]
    }
  ]
};