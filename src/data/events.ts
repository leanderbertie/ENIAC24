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
      description: "Title event is a prestigious individual event.Participants will undergo several different rounds based on judges decisions. Each round has elimination among all participants.The last person standing will be crowned as MR/MRS ENIAC 2024.",
      image: "/images/title event poster.webp",
      date: "13 December 2024",
      time: "10:00 AM",
      venue: "Sauliere hall",
      registrationLink: "https://forms.gle/MTd3QuYEtUzXjcjK8",
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
          name: "joseph",
          phone: "6380805183"
        },
        {
          name: "Joshwa",
          phone: "7397566377"
        }
      ]
    },
    {
      id: "QUIZTOPIA",
      title: "Quiztopia (Quiz)",
      description: "Questions covering general topics like entertainment,sports,business,arts and monument ,history ,popculture,food presented to test participants critical thinking with a prelims and finals round",
      image: "/images/QUIZ POSTER copy (1).webp",
      date: "13 December 2024",
      time: "12:00 PM",
      venue: "Sauliere HALL",
      registrationLink: "https://forms.gle/js2VFikdHG6TTWvf6",
      rules: [
      "One team should have maximum of 3 people.",
      "There will be two rounds (Preliminary round followed by final round).",
      "The use of electronic gadgets like mobile phone , iPad , tabs etc during quiz is strictly prohibited .",
      "Quiz Master’s decision will be final."

      ],
      contacts: [
        {
          name: "Prithvi",
          phone: "63827 03760"
        },
        {
          name: "Kaarmukil",
          phone: "7305284603"
        }
      ]
    },
    {
      id: "Ad Mavericks",
      title: "Ad Mavericks (Adzap)",
      description: "Participants create entertaining skits to promote a product or brand. The best performance wins",
      image: "/images/adzap poster.webp",
      date: "13 December 2024",
      time: "1:00 PM",
      venue: "Sauliere Hall",
      registrationLink: "https://docs.google.com/forms/d/1VedCU9Jh53soSG73GQsyGxZ12SvDr-OrcnCB2Z38cTg/edit",
      rules: [
        "It is a group event.",
       " A team can consist of 5-8 participants (including emcee)",
        "Time Limit: 5 minutes performance + 1 minute preparation.",
      "  Product will be given on spot.",
        "No props are allowed.",
        "Negative marks will be allocated for extra time.",
        "No form of vulgarity is allowed.",
        "Judges' decision is final and binding.",
       " Judging criteria: Content and script, acting skills, team coordination and costumes. "  
    ],
      contacts: [
        {
          name: "Joshwa",
          phone: "63808 05183"
        },
        {
          name: "Tony",
          phone: "84380 88445"
        }
      ]
    },
    {
      id: "Remote Chaos",
      title: "Remote Chaos (Channel Surfing)",
      description: "Perform a skit showcasing rapidly changing TV or YouTube channels, with names provided on the spot.",
      image: "/images/CHANNEL SURFING POSTER.webp",
      date: "13 December 2024",
      time: "02:00 PM",
      venue: "Sauliere  hall",
      registrationLink: "https://docs.google.com/forms/d/1uiMCtDvPRv84iPGahjh5GoKd15erzo7eUaoigOySb0w/edit",
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
          name: "Prasath",
          phone: "9342854369"
        },
        {
          name: "Alwin",
          phone: "8056253230"
        }
      ]
    }
  ],
  technical: [
    {
      id: "Bug Hunter Arena",
      title: "Bug Hunter Arena (Debugging)",
      description: "Put your debugging skills to the test and fix bugs in multiple programming language",
      image: "/images/debugging poster.webp",
      date: "13 December 2024",
      time: "10:30 AM",
      venue: "Computer Lab",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSdlMeuLPJstnxKuqA4__kM4vve7vg_kYDQMuauOKqZYdlSaTw/viewform?usp=sf_link",
      rules: [
        "No. of participants per team : 2",
        "No. of teams per college: 1",
        
        "Languages : Java, Python. The participants need to debug a program which might be in any of these languages",
        "Multiple rounds will be conducted if necessary",
        "The errors will be mostly logical in nature and not language specific",
        "Decision of judges will be final"
      ],
      contacts: [
        {
          name: "Adithyan",
          phone: "8072257590"
        },
        {
          name: "Kailash",
          phone: "93617 72822"
        }
      ]
    },
    {
      id: "Pixel Craft",
      title: "Pixel Craft (Web Design)",
      description: "Create web designs based on a given theme.",
      image: "/images/WEB DESIGN POSTER copy (1).webp",
      date: "13 December 2024",
      time: "11:00 AM",
      venue: "Computer Lab",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSeJfEW70SZIzwmTZa_4cNmDY7j9CFcW0PUdZQdoNs0sMyezlQ/viewform?usp=sf_link",
      rules: [
        "No Of Participants:  2",
        "Participants  Are Expected To Be Present In The Venue  Before 30 Minutes",
        "Prelims Will Be Conducted If Needed",
        "The Design Must Reflect The Given Theme",
        "Participants Is Required To Present And Explain Their Design Followed By Short Deliberations By The Judges",
        "Judges Decision Will Be Final."


      ],
      contacts: [
        {
          name: "Enoch",
          phone: "8838556901"
        },
        {
          name: "Sachin",
          phone: "8946076405"
        }
      ]
    },
    {
      id: "Electrocode",
      title: "Electrocode (Weird Coding)",
      description: " The weird coding challenge is an exciting competition designed to test your programming skills across a variety of coding languages . This challenge pushs participants to adapt and solve problems using different programming languages .",
      image: "/images/wired-coding-poster_01.webp",
      date: "13 December 2024",
      time: "10:30 AM",
      venue: "Computer Lab",
      registrationLink: "https://docs.google.com/forms/d/e/1FAIpQLSd9ihnQgMOinxXmgNFAz_jIJGBMKkdX8FjLrnzxJzLVIWtKqw/viewform?usp=sf_link",
      rules: [
        "2 members per team",
        "Only one team per department",
        "Manual for the coding language will be given to each team",
        "20 mins will be given to explain and to prepare for the challenge",
        "40 mins to solve the problem given",
        "Programming languages will be explained onspot",
        "Judging criteria is based on amount of time taken to solve the problems and no. of errors in your code"
      ],
      contacts: [
        {
          name: "Antony",
          phone: "70106 51219"
        },
        {
          name: "Rhea",
          phone: "7483588879" 
        }
      ]
    }, {
      id: "Team Hunt",
      title: "Team Hunt (IPL Auction)",
      description: "Answer questions on IPL and bid for your favourite players",
      image: "/images/ipl auction poster2024c.webp",
      date: "13 December 2024",
      time: "10:30 AM ",
      venue: "Smart room",
      registrationLink: "https://forms.gle/hwwfm1UKZHZYF2Cg7",
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
          name: "Jude",
          phone: "8300179606"
        },
        {
          name: "Hadithya",
          phone: "8825753676"
        }
      ]
     
    },
    {
      id: "Think Tank",
      title: "Think Tank (Paper Presentation)",
      description: "Showcase cutting-edge research and advancements through engaging presentations. Teams will present on a chosen topic from the given topics for 6 minutes and will face a query session for another 2 mins. The team with the best presentation will win. The presentations should be emailed to the organiser before the event",
      image: "/images/PAPER PRESENTATION POSTER copy (1).webp",
      date: "13 December 2024",
      time: "10:30 AM",
      venue: "Computer Lab",
      registrationLink: "https://forms.gle/8kxSEnAgTmHiX6iq6",
      rules: [
        "paper presentation topics:Data mining, Data efficiency management,Big data analytics,Machine Learning Data analytics, Deep learning IOT Data analytics,Ai in Data management",
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
          name: "Jai Harish",
          phone: "6385310868"
        },
        {
          name: "Rhea",
          phone: " 7483588879"
        }
      ]
    }
  ]
};