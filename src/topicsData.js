// topicsData.js

const topicsData = {
  clock: {
    description:
      "Clock questions are commonly included in quantitative aptitude exams...",
    realLife: [
      {
        id: 1,
        title: "Scheduling and Time Management",
        content:
          "Clock reasoning plays a crucial role in scheduling and time management. People use clocks and calendars to plan their activities, set deadlines, and organize their daily routines.",
      },
      {
        id: 2,
        title: "Problem Solving and Decision Making",
        content:
          "Clock reasoning is essential for problem solving and decision making, particularly when timing and sequencing are crucial factors. For example, in manufacturing processes, engineers need to consider the time it takes for each step, synchronize operations, and optimize production.",
      },
      {
        id: 3,
        title: "Estimating and Predicting",
        content:
          "Clock reasoning enables individuals to estimate and predict future events based on past experiences and patterns. For example, weather forecasting relies on understanding seasonal patterns, historical data, and the movement of weather systems.",
      },
    ],
    concepts: {
      des: "A clock is a device used to measure and display the passage of time. It plays a crucial role in our lives, helping us schedule our activities, manage appointments, and stay organized.",
      subConcepts: [
        {
          id: 1,
          title: "Division of Time Units",
          content:
            "The first concept to grasp is the division of time into units. The most commonly used units are seconds, minutes, and hours. Each unit is a measurement of a specific duration.An hour consists of 60 minutes, and a minute consists of 60 seconds.",
        },
        {
          id: 2,
          title: "Clock Representation",
          content:
            "Another essential concept is the representation of time on analog and digital clocks. Analog clocks use rotating hands to indicate the time, with the longer hand representing the minutes and the shorter hand indicating the hours.On the other hand, digital clocks display the time numerically, usually in the format of HH:MM:SS.",
        },
        {
          id: 3,
          title: "AM/PM and Time Systems",
          content:
            "Timekeeping systems also involve concepts like AM (Ante Meridiem) and PM (Post Meridiem) for differentiating between morning and afternoon/evening.The 12-hour clock system is commonly used in several countries, while the 24-hour clock system is prevalent in military and international contexts.",
        },
      ],
    },
    formulae: [
      {
        id: 1,
        toCalculate: "Total Degrees in a Clock",
        formuales:
          "In a 12-hour analog clock, there are 360 degrees. In a 24-hour analog clock, there are 720 degrees.",
      },
      {
        id: 2,
        toCalculate: "Degrees covered by Hour Hand",
        formuales:
          "The hour hand covers 30 degrees per hour (360 degrees divided by 12 hours in a 12-hour clock). In a 24-hour clock, it covers 15 degrees per hour.",
      },
      {
        id: 3,
        toCalculate: "Degrees covered by Minute Hand",
        formuales:
          "The minute hand covers 6 degrees per minute (360 degrees divided by 60 minutes).",
      },
      {
        id: 4,
        toCalculate: "Degrees covered by Second Hand",
        formuales:
          "The second hand covers 6 degrees per second (360 degrees divided by 60 seconds).",
      },
      {
        id: 5,
        toCalculate: "Angle between Hour and Minute Hands",
        formuales:
          "The angle formed between the hour and minute hands is given by the formula: Angle = [(11 / 2) M - 30 H] ( where M is the minute value and H is the hour value )",
      },
    ],
    practiceQuestions: [
      {
        id: 1,
        question:
          "What is the angle between the minute hand and the hour hand at 3:00?",
        options: ["0 degrees", "45 degrees", "90 degrees", "180 degrees"],
        correctAnswer: "90 degrees",
      },
      {
        id: 2,
        question:
          "What is the angle between the minute hand and the hour hand at 6:00?",
        options: ["0 degrees", "90 degrees", "180 degrees", "270 degrees"],
        correctAnswer: "180 degrees",
      },
      {
        id: 3,
        question:
          "At what time between 2 and 3 o'clock will the minute and hour hands be at right angles?",
        options: ["2:15", "2:30", "2:45", "2:50"],
        correctAnswer: "2:15",
      },
      {
        id: 4,
        question:
          "At what time between 4 and 5 o'clock will the hands of the clock be in a straight line but not together?",
        options: ["4:20", "4:15", "4:40", "4:45"],
        correctAnswer: "4:40",
      },
      {
        id: 5,
        question: "How many times do the hands of a clock coincide in a day?",
        options: ["12", "22", "24", "44"],
        correctAnswer: "22",
      },
      {
        id: 6,
        question:
          "How many times in a day do the hands of a clock form a right angle?",
        options: ["24", "44", "48", "22"],
        correctAnswer: "44",
      },
      {
        id: 7,
        question:
          "How many times in a day do the hands of a clock form an angle of 180 degrees?",
        options: ["24", "22", "12", "44"],
        correctAnswer: "22",
      },
      {
        id: 8,
        question:
          "How much does a watch lose per day if its hands coincide every 64 minutes?",
        options: ["32 minutes", "36 minutes", "40 minutes", "44 minutes"],
        correctAnswer: "32 minutes",
      },
      {
        id: 9,
        question:
          "If a clock shows the time 3:15, what will be the angle between the minute and hour hands?",
        options: ["7.5 degrees", "15 degrees", "30 degrees", "37.5 degrees"],
        correctAnswer: "7.5 degrees",
      },
      {
        id: 10,
        question:
          "At what time between 7 and 8 o'clock will the hands of the clock be in the same straight line but, not together?",
        options: ["7:15", "7:30", "7:45", "7:20"],
        correctAnswer: "7:20",
      },
      {
        id: 11,
        question:
          "If the time is 10:00, how many degrees has the hour hand moved since 7:00?",
        options: ["90 degrees", "120 degrees", "180 degrees", "270 degrees"],
        correctAnswer: "90 degrees",
      },
      {
        id: 12,
        question:
          "What is the angle between the minute hand and the hour hand at 8:20?",
        options: ["30 degrees", "60 degrees", "90 degrees", "120 degrees"],
        correctAnswer: "120 degrees",
      },
    ],
  },
  calender: {
    description:
      "Calendar questions involve finding the day of the week for a given date...",
    realLife: [
      {
        id: 1,
        title: "Scheduling and Time Management",
        content:
          "Calendars play a crucial role in scheduling and time management. They are commonly used in personal, professional, and organizational settings to plan and organize daily activities, appointments, meetings, and deadlines. By providing a visual representation of time, calendars enable individuals and groups to allocate their resources effectively, avoid conflicts, and ensure smooth coordination.",
      },
      {
        id: 2,
        title: "Holidays and Observances",
        content:
          "Calendars are essential for marking and tracking holidays, observances, and special events. They help individuals and communities remember and celebrate important occasions such as national holidays, religious festivals, cultural events, and birthdays.",
      },
      {
        id: 3,
        title: "Academic and Work Schedules",
        content:
          "In educational institutions and workplaces, calendars are used to structure academic terms, semesters, and work schedules. They help students, teachers, and professionals stay organized by providing clear timelines for assignments, exams, project deadlines, and other important events.",
      },
    ],
    concepts: {
      des: "The calendar is a system that organizes and divides time into specific units, typically based on the cycles of the sun and the moon. It helps in tracking and measuring the passage of days, weeks, months, and years. The following are the important calendar concepts:",
      subConcepts: [
        {
          id: 1,
          title: "Days of the Week",
          content:
            "The days of the week are a fundamental concept in calendars. There are seven days in a week: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, and Saturday. This concept helps us establish a weekly cycle and plan our activities accordingly.",
        },
        {
          id: 2,
          title: "Months of the Year",
          content:
            "Months are another crucial concept in calendars. A year is divided into 12 months, each with a varying number of days.<br>The months of the year, in chronological order, are January, February, March, April, May, June, July, August, September, October, November, and December.",
        },
        {
          id: 3,
          title: "Leap Year",
          content:
            "The concept of a leap year accounts for the discrepancy between the calendar year and the solar year. A solar year, which is the time it takes for the Earth to complete one orbit around the Sun, is approximately 365.24 days long. To accommodate this difference, a leap year is introduced every four years. During a leap year, the month of February has 29 days instead of the usual 28.",
        },
        {
          id: 4,
          title: "Days and Dates",
          content:
            "The concept of days and dates involves understanding how to represent a specific day within a month or year. Each month has a varying number of days, with some having 30 days and others having 31. February is an exception, with either 28 or 29 days in a leap year. We express a date by combining the day, month, and year.",
        },
        {
          id: 5,
          title: "Gregorian Calendar",
          content:
            "The Gregorian calendar is the most widely used civil calendar worldwide. It was introduced by Pope Gregory XIII in 1582 as a refinement of the Julian calendar.<br>The Gregorian calendar accounts for the discrepancies in the Julian calendar and adjusts the leap year rule. It has become the standard calendar system, used for both practical and historical reasons.",
        },
      ],
    },
    formulae: [
      {
        id: 1,
        toCalculate: "Total Days in a Year",
        formuales: "Non-leap year: 365 days, Leap year: 366 days",
      },
      {
        id: 2,
        toCalculate: "Total Weeks in a Year",
        formuales: "52 weeks (non-leap year) or 52 weeks + 1 day (leap year)",
      },
      {
        id: 3,
        toCalculate: "Total Days in a Month",
        formuales: "Varies from 28 to 31 days depending on the month",
      },
      {
        id: 4,
        toCalculate: "Number of Leap Years",
        formuales: "(Year / 4) - (Year / 100) + (Year / 400)",
      },
      {
        id: 5,
        toCalculate: "Day of the Week",
        formuales:
          "Various algorithms like Zeller's Congruence, Doomsday Algorithm, etc., can be used to determine the day of the week for a given date.",
      },
    ],
    practiceQuestions: [
      {
        id: 1,
        question: "What day of the week was January 1, 2000?",
        options: ["Saturday", "Sunday", "Monday", "Tuesday"],
        correctAnswer: "Saturday",
      },
      {
        id: 2,
        question:
          "If today is Monday, what will be the day of the week 100 days from now?",
        options: ["Wednesday", "Thursday", "Friday", "Saturday"],
        correctAnswer: "Wednesday",
      },
      {
        id: 3,
        question: "How many days are there in a leap year?",
        options: ["365", "366", "367", "368"],
        correctAnswer: "366",
      },
      {
        id: 4,
        question: "What is the day of the week on 15th August 1947?",
        options: ["Wednesday", "Thursday", "Friday", "Saturday"],
        correctAnswer: "Friday",
      },
      {
        id: 5,
        question: "Which year will have the same calendar as 2024?",
        options: ["2032", "2036", "2040", "2048"],
        correctAnswer: "2040",
      },
      {
        id: 6,
        question:
          "If February 1st of a leap year is Monday, what will be the day on 1st March?",
        options: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        correctAnswer: "Wednesday",
      },
      {
        id: 7,
        question: "What is the day of the week on 1st January 2021?",
        options: ["Wednesday", "Thursday", "Friday", "Saturday"],
        correctAnswer: "Friday",
      },
      {
        id: 8,
        question:
          "If 29th February 2000 was Tuesday, what day of the week was 1st March 2000?",
        options: ["Wednesday", "Thursday", "Friday", "Saturday"],
        correctAnswer: "Wednesday",
      },
      {
        id: 9,
        question: "How many odd days are there in 400 years?",
        options: ["0", "1", "2", "3"],
        correctAnswer: "0",
      },
      {
        id: 10,
        question: "What was the day of the week on 1st January 1901?",
        options: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        correctAnswer: "Tuesday",
      },
      {
        id: 11,
        question:
          "How many days are there from 2nd January 2021 to 2nd March 2021?",
        options: ["58", "59", "60", "61"],
        correctAnswer: "59",
      },
      {
        id: 12,
        question:
          "If today is Friday, what will be the day of the week after 45 days?",
        options: ["Monday", "Tuesday", "Wednesday", "Thursday"],
        correctAnswer: "Monday",
      },
    ],
  },
  "odd-man-out": {
    description:
      "Odd Man Out questions require identifying the item that does not belong in a given set...",
    realLife: [
      {
        id: 1,
        title: "Puzzle-solving",
        content:
          "Odd man out is commonly employed in puzzle-solving activities, brain teasers, or logic games. For example, a series of objects or numbers may be presented, and the task is to identify the one that does not fit the pattern or is different from the others.This application challenges individuals to observe, analyze, and recognize the unique or mismatched element amidst a group.",
      },
      {
        id: 2,
        title: "Hiring and Selection Processes",
        content:
          "In recruitment or selection processes, odd man out can be used to identify the most suitable candidate for a position or role. Job applicants are assessed based on their qualifications, skills, experience, or cultural fit.The odd man out may be identified as someone who possesses unique or exceptional attributes that distinguish them from the other candidates.",
      },
      {
        id: 3,
        title: "Forensic Investigations",
        content:
          "Odd man out can be applied in forensic investigations to identify suspects or anomalies in a given context. Investigators analyze evidence, patterns, or behaviors to identify the outlier or individual who does not conform to the expected norm.This approach can help uncover potential culprits, identify irregularities, or detect unusual patterns that may lead to solving crimes or uncovering hidden information.",
      },
    ],
    concepts: {
      des: "The concept of odd man out involves identifying an element or item that is different or does not fit within a given group or pattern.It is based on the idea of finding a dissimilar or unique element among others that share some common characteristics. The goal is to recognize the odd or outlying item by analyzing its distinct features or properties.Here are some of the important odd man out concepts:",
      subConcepts: [
        {
          id: 1,
          title: "Distinctive Attribute",
          content:
            "The first concept focuses on identifying a distinctive attribute or characteristic that sets apart the odd item from the rest. This attribute may be quantitative, qualitative, or based on specific criteria.",
        },
        {
          id: 2,
          title: "Pattern Deviation",
          content:
            "The second concept involves recognizing a deviation from a given pattern or sequence. The odd man out may not conform to the regular or expected pattern exhibited by the other items. This can be observed in sequences of numbers, letters, shapes, or any other ordered arrangement.",
        },
        {
          id: 3,
          title: "Rule Exception",
          content:
            "The third concept relates to identifying an exception to a rule or set of rules. In a set of elements that follow a specific rule or pattern, the odd man out breaks or violates that rule. This concept requires analyzing the rules governing the group and finding the item that does not adhere to those rules.",
        },
        {
          id: 4,
          title: "Comparative Analysis",
          content:
            "The fourth concept involves conducting a comparative analysis of the given items to determine the odd man out. It requires examining the similarities and differences among the elements and identifying the item that stands out as unique or dissimilar. This can be observed in groups of words, images, or any other set of objects.",
        },
      ],
    },
    formulae: "Odd Man Out formulae here...",
    practiceQuestions: [
      {
        id: 1,
        question: "Find the odd man out: Apple, Orange, Banana, Tomato",
        options: ["Apple", "Orange", "Banana", "Tomato"],
        correctAnswer: "Tomato",
      },
      {
        id: 2,
        question: "Find the odd man out: Circle, Square, Triangle, Sphere",
        options: ["Circle", "Square", "Triangle", "Sphere"],
        correctAnswer: "Sphere",
      },
      {
        id: 3,
        question: "Find the odd man out: Car, Bus, Bicycle, Train",
        options: ["Car", "Bus", "Bicycle", "Train"],
        correctAnswer: "Bicycle",
      },
      {
        id: 4,
        question: "Find the odd man out: Dog, Cat, Lion, Elephant",
        options: ["Dog", "Cat", "Lion", "Elephant"],
        correctAnswer: "Lion",
      },
      {
        id: 5,
        question: "Find the odd man out: Rose, Lily, Tulip, Cactus",
        options: ["Rose", "Lily", "Tulip", "Cactus"],
        correctAnswer: "Cactus",
      },
      {
        id: 6,
        question: "Find the odd man out: Earth, Mars, Jupiter, Moon",
        options: ["Earth", "Mars", "Jupiter", "Moon"],
        correctAnswer: "Moon",
      },
      {
        id: 7,
        question: "Find the odd man out: Table, Chair, Bed, Spoon",
        options: ["Table", "Chair", "Bed", "Spoon"],
        correctAnswer: "Spoon",
      },
      {
        id: 8,
        question: "Find the odd man out: January, February, March, Sunday",
        options: ["January", "February", "March", "Sunday"],
        correctAnswer: "Sunday",
      },
      {
        id: 9,
        question: "Find the odd man out: Piano, Guitar, Violin, Microphone",
        options: ["Piano", "Guitar", "Violin", "Microphone"],
        correctAnswer: "Microphone",
      },
      {
        id: 10,
        question: "Find the odd man out: Apple, Mango, Carrot, Banana",
        options: ["Apple", "Mango", "Carrot", "Banana"],
        correctAnswer: "Carrot",
      },
      {
        id: 11,
        question: "Find the odd man out: Shirt, Trousers, Cap, Shoes",
        options: ["Shirt", "Trousers", "Cap", "Shoes"],
        correctAnswer: "Cap",
      },
      {
        id: 12,
        question: "Find the odd man out: Doctor, Engineer, Teacher, Painter",
        options: ["Doctor", "Engineer", "Teacher", "Painter"],
        correctAnswer: "Painter",
      },
    ],
  },
  "statement-and-argument": {
    description:
      "Statement and Argument questions involve evaluating the strength of arguments related to a given statement...",
    realLife: [
      {
        id: 1,
        title: "Debates and Discussions",
        content:
          "Debates and discussions, whether in academic settings, public forums, or everyday conversations, heavily rely on statements and arguments. Participants present their statements as assertions or claims, and then construct arguments by providing supporting evidence, logical reasoning, or counter arguments to bolster their position.",
      },
      {
        id: 2,
        title: "Legal Proceedings",
        content:
          "In the realm of law, statements and arguments are pivotal. Legal professionals construct arguments based on the relevant laws, precedents, and evidence to support their case. Statements, in the form of testimonies, affidavits, or pleadings, provide the factual basis upon which arguments are built.",
      },
      {
        id: 3,
        title: "Persuasive Writing and Advertising",
        content:
          "Statement and argument techniques are commonly used in persuasive writing and advertising to influence the beliefs or actions of the audience. In advertisements, statements are made about the features or benefits of a product or service, while arguments are constructed to convince consumers that the product or service is worth purchasing.",
      },
    ],
    concepts: {
      des: "Statement and argument is a logical reasoning concept that involves analyzing the relationship between a given statement and a series of arguments. In this concept, a statement is provided, followed by a set of arguments supporting or challenging that statement.The objective is to evaluate the logical validity and strength of each argument in relation to the given statement.Here are some of the important statement and argument concepts:",
      subConcepts: [
        {
          id: 1,
          title: "Validity of Arguments",
          content:
            "The first concept focuses on determining the validity of arguments. Valid arguments are those that have a logical connection and provide evidence or reasoning to support or oppose the given statement.They are based on facts, evidence, or logical deductions.",
        },
        {
          id: 2,
          title: "Strength of Arguments",
          content:
            "The second concept emphasizes the strength of arguments. Strong arguments are those that provide convincing and substantial evidence or reasoning to support or challenge the given statement.They are more persuasive and carry more weight in influencing the acceptance or rejection of the statement.",
        },
        {
          id: 3,
          title: "Relevance of Arguments",
          content:
            "The third concept highlights the relevance of arguments. Relevant arguments are those that directly address the issue presented in the statement and provide relevant information or reasoning.They contribute to a comprehensive understanding of the statement and its implications.",
        },
        {
          id: 4,
          title: "Counter Arguments",
          content:
            "The fourth concept involves considering counter arguments. Counter Arguments are arguments that challenge or oppose the given statement.They present alternative viewpoints or perspectives that question the validity or strength of the statement. Evaluating counter arguments helps in critically assessing the statement and considering different perspectives.",
        },
        {
          id: 5,
          title: "Logical Coherence",
          content:
            "The fifth concept focuses on the logical coherence of arguments. Coherent arguments are those that have a clear and logical flow, with premises leading to a logical conclusion.They avoid logical fallacies, such as circular reasoning or false cause effect relationships. Analyzing the logical coherence of arguments helps in assessing their soundness and reliability.",
        },
      ],
    },
    formulae: "Statement and Argument formulae here...",
    practiceQuestions: [
      {
        id: 1,
        question:
          "Statement: Should the government ban plastic bags?\nArgument: Yes, because plastic bags are harmful to the environment.",
        options: ["Strong", "Weak"],
        correctAnswer: "Strong",
      },
      {
        id: 2,
        question:
          "Statement: Should the government increase funding for public education?\nArgument: No, because the government should focus on other sectors.",
        options: ["Strong", "Weak"],
        correctAnswer: "Weak",
      },
      {
        id: 3,
        question:
          "Statement: Should there be a ban on smoking in public places?\nArgument: Yes, because it affects the health of non-smokers.",
        options: ["Strong", "Weak"],
        correctAnswer: "Strong",
      },
      {
        id: 4,
        question:
          "Statement: Should there be a law to ban deforestation?\nArgument: No, because it will affect the timber industry.",
        options: ["Strong", "Weak"],
        correctAnswer: "Weak",
      },
      {
        id: 5,
        question:
          "Statement: Should college education be free for everyone?\nArgument: Yes, because it will increase the literacy rate.",
        options: ["Strong", "Weak"],
        correctAnswer: "Strong",
      },
      {
        id: 6,
        question:
          "Statement: Should the voting age be reduced to 16?\nArgument: No, because teenagers are not mature enough to make informed decisions.",
        options: ["Strong", "Weak"],
        correctAnswer: "Strong",
      },
      {
        id: 7,
        question:
          "Statement: Should animals be used for scientific research?\nArgument: Yes, because it leads to medical advancements.",
        options: ["Strong", "Weak"],
        correctAnswer: "Strong",
      },
      {
        id: 8,
        question:
          "Statement: Should there be a tax on sugary drinks?\nArgument: No, because people should have the freedom to choose what they consume.",
        options: ["Strong", "Weak"],
        correctAnswer: "Weak",
      },
      {
        id: 9,
        question:
          "Statement: Should homework be banned in schools?\nArgument: Yes, because it puts too much pressure on students.",
        options: ["Strong", "Weak"],
        correctAnswer: "Strong",
      },
      {
        id: 10,
        question:
          "Statement: Should the use of fossil fuels be reduced?\nArgument: Yes, because it will help combat climate change.",
        options: ["Strong", "Weak"],
        correctAnswer: "Strong",
      },
      {
        id: 11,
        question:
          "Statement: Should fast food be banned in schools?\nArgument: No, because it is convenient for students.",
        options: ["Strong", "Weak"],
        correctAnswer: "Weak",
      },
      {
        id: 12,
        question:
          "Statement: Should there be stricter laws for cybercrimes?\nArgument: Yes, because it will reduce online frauds and crimes.",
        options: ["Strong", "Weak"],
        correctAnswer: "Strong",
      },
    ],
  },
  "logical-problems": {
    description:
      "Logical problems involve puzzles and riddles that require logical thinking and problem-solving skills...",
    realLife: [
      {
        id: 1,
        title: "Problem-Solving in Various Fields",
        content:
          "Logical problem-solving skills are essential in various professional fields. For example, in computer programming and software development, engineers often encounter complex logical problems that require systematic analysis and logical reasoning to design efficient algorithms and solve programming challenges.",
      },
      {
        id: 2,
        title: "Decision-Making and Strategic Planning",
        content:
          "Logical thinking plays a crucial role in decision-making and strategic planning. When faced with complex choices or uncertain situations, individuals and organizations rely on logical problem-solving to evaluate options, weigh pros and cons, and anticipate potential outcomes.",
      },
      {
        id: 3,
        title: "Analyzing and Solving Real-Life Challenges",
        content:
          "Logical problems can also arise in everyday situations, requiring individuals to apply logical reasoning to find solutions.",
      },
    ],
    concepts: {
      des: "Logical problems are a fundamental aspect of reasoning and critical thinking. They involve the analysis and evaluation of statements, arguments, and propositions to determine their validity, consistency, and coherence.Logical problems require individuals to apply logical principles and rules to assess the logical structure of information and draw accurate conclusions.The following are the important logical problems concepts:",
      subConcepts: [
        {
          id: 1,
          title: "Deductive Reasoning",
          content:
            "Deductive reasoning is a logical concept that involves drawing specific conclusions from general principles or premises. It follows a top-down approach, where the truth of the premises guarantees the truth of the conclusion.",
        },
        {
          id: 2,
          title: "Inductive Reasoning",
          content:
            "Inductive reasoning is a logical concept that involves drawing general conclusions from specific observations or evidence. It follows a bottom-up approach, where the truth of the premises makes the conclusion probable but not guaranteed.",
        },
        {
          id: 3,
          title: "Logical Fallacies",
          content:
            "Logical fallacies are errors in reasoning that often appear plausible but are invalid or unsound. They can distort arguments and lead to incorrect or misleading conclusions.",
        },
      ],
    },
    formulae: "Logical Problems formulae here...",
    practiceQuestions: [
      {
        id: 1,
        question:
          "If all bloops are razzies and all razzies are lazzies, are all bloops definitely lazzies?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
      },
      {
        id: 2,
        question:
          "Which one of the following is a meaningful word if the consonants are deleted: ENIGMA, IGLOO, EXAMPLE, ORANGE?",
        options: ["ENIGMA", "IGLOO", "EXAMPLE", "ORANGE"],
        correctAnswer: "IGLOO",
      },
      {
        id: 3,
        question:
          "If all wibbles are wobbles and all wobbles are wubbles, are all wibbles definitely wubbles?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
      },
      {
        id: 4,
        question:
          "If some zips are zaps and some zaps are zups, are some zips definitely zups?",
        options: ["Yes", "No"],
        correctAnswer: "No",
      },
      {
        id: 5,
        question:
          "Which one of the following is a meaningful word if the vowels are deleted: BUTTON, BUCKET, BOOT, BOOK?",
        options: ["BUTTON", "BUCKET", "BOOT", "BOOK"],
        correctAnswer: "BOOT",
      },
      {
        id: 6,
        question:
          "If all grints are globs and no globs are glims, are some grints definitely not glims?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
      },
      {
        id: 7,
        question:
          "Which one of the following is a meaningful word if the consonants are deleted: APPLE, APRIL, ALMOND, AVOCADO?",
        options: ["APPLE", "APRIL", "ALMOND", "AVOCADO"],
        correctAnswer: "AVOCADO",
      },
      {
        id: 8,
        question:
          "If all frups are fraps and some fraps are frips, are some frups definitely frips?",
        options: ["Yes", "No"],
        correctAnswer: "No",
      },
      {
        id: 9,
        question:
          "Which one of the following is a meaningful word if the vowels are deleted: WINDOW, WINNER, WONDER, WATER?",
        options: ["WINDOW", "WINNER", "WONDER", "WATER"],
        correctAnswer: "WONDER",
      },
      {
        id: 10,
        question:
          "If all blats are blips and all blips are blups, are all blats definitely blups?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
      },
      {
        id: 11,
        question:
          "If some crunks are crinks and some crinks are cronks, are some crunks definitely cronks?",
        options: ["Yes", "No"],
        correctAnswer: "No",
      },
      {
        id: 12,
        question:
          "Which one of the following is a meaningful word if the consonants are deleted: INSIGHT, INCITE, INPUT, ICON?",
        options: ["INSIGHT", "INCITE", "INPUT", "ICON"],
        correctAnswer: "ICON",
      },
    ],
  },
};

export default topicsData;
