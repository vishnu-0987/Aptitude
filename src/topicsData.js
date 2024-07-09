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
  "order-and-ranking": {
    description:
      "Order and ranking refer to the arrangement or placement of items, entities, or individuals based on a specific criterion or criteria...",
    realLife: [
      {
        id: 1,
        title: "Sports Tournaments",
        content:
          "Order and ranking play a significant role in sports tournaments, such as leagues or championships. Teams or individuals are ranked based on their performance, points, or statistics. The order and ranking determine the matchups, fixtures, and progression of the tournament, ultimately leading to the determination of the winner.",
      },
      {
        id: 2,
        title: "Academic Grading",
        content:
          "In education, order and ranking are commonly used for academic grading. Students' performance is assessed and ranked based on their scores, assignments, exams, or other criteria. The order and ranking of students help determine their standing or position relative to their peers.",
      },
      {
        id: 3,
        title: "Employment and Promotions",
        content:
          "Order and ranking are also relevant in the context of employment and promotions. Companies often evaluate employees based on their performance, skills, experience, or other factors. The order and ranking allow employers to identify high-performing individuals, recognize their contributions, and make decisions regarding promotions, salary increases, or other career advancements.",
      },
    ],
    concepts: {
      des: "Order and ranking refer to the arrangement and relative positioning of items or individuals based on certain criteria or attributes. It involves assigning a specific order or rank to each element in a set, allowing for comparisons and determining their relative positions within that set.The concepts of order and ranking are widely applicable in various fields, including mathematics, statistics, competitions, and organizational structures.Here are some of the important order and ranking concepts:",
      subConcepts: [
        {
          id: 1,
          title: "Ascending and Descending Order",
          content:
            "The first concept revolves around arranging elements in either ascending or descending order. Ascending order refers to arranging items from the smallest or lowest value to the largest or highest value.",
        },
        {
          id: 2,
          title: "Rank and Position",
          content:
            "The second concept focuses on assigning a specific rank or position to each element within a set. Rank represents the relative position of an item compared to others in terms of a specific criterion.",
        },
        {
          id: 3,
          title: "Relative Comparison",
          content:
            "The third concept involves making relative comparisons between different elements based on their order or rank. It allows us to analyze the relationships and distinctions among the items within a set.",
        },
        {
          id: 4,
          title: "Ties and Fractional Ranking",
          content:
            "The fourth concept addresses situations where two or more items have the same value or score, resulting in a tie. In such cases, fractional ranking can be applied, where the ranks of the tied items are averaged.",
        },
        {
          id: 5,
          title: "Multiple Criteria Ranking",
          content:
            "The fifth concept involves considering multiple criteria to determine the ranking or order of items. It takes into account various attributes or factors and assigns ranks accordingly.",
        },
      ],
    },
    formulae: "Order and Ranking formulae here...",
    practiceQuestions: [
      {
        id: 1,
        question:
          "If John ranks 12th from the top in a class of 50 students, what is his rank from the bottom?",
        options: ["38th", "39th", "40th", "41st"],
        correctAnswer: "39th",
      },
      {
        id: 2,
        question:
          "If Jane ranks 8th from the bottom in a group of 25 students, what is her rank from the top?",
        options: ["16th", "17th", "18th", "19th"],
        correctAnswer: "18th",
      },
      {
        id: 3,
        question:
          "In a race of 10 participants, if Amy finishes 2nd and Ben finishes 5th, how many participants finish between them?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "2",
      },
      {
        id: 4,
        question:
          "If Kevin is ranked 15th from the top and 10th from the bottom in a competition, how many participants are there?",
        options: ["24", "25", "26", "27"],
        correctAnswer: "24",
      },
      {
        id: 5,
        question:
          "In a class of 30 students, if Sarah is ranked 3rd and Lisa is ranked 28th, how many students are between them?",
        options: ["24", "25", "26", "27"],
        correctAnswer: "24",
      },
      {
        id: 6,
        question:
          "If Paul is ranked 6th from the top in a list of 20, what is his rank from the bottom?",
        options: ["14th", "15th", "16th", "17th"],
        correctAnswer: "15th",
      },
      {
        id: 7,
        question:
          "In a row of 50 students, if Peter is 20th from the left, what is his position from the right?",
        options: ["29th", "30th", "31st", "32nd"],
        correctAnswer: "31st",
      },
      {
        id: 8,
        question:
          "If Mary is ranked 10th in a class of 40 students, how many students are ranked below her?",
        options: ["29", "30", "31", "32"],
        correctAnswer: "30",
      },
      {
        id: 9,
        question:
          "In a group of 35 students, if Tom is ranked 5th from the top, what is his rank from the bottom?",
        options: ["30th", "31st", "32nd", "33rd"],
        correctAnswer: "31st",
      },
      {
        id: 10,
        question:
          "If Anna is ranked 8th from the bottom in a class of 45 students, what is her rank from the top?",
        options: ["36th", "37th", "38th", "39th"],
        correctAnswer: "38th",
      },
    ],
  },
  "series-completion": {
    description:
      "Series completion involves identifying the pattern in a sequence of numbers, letters, or symbols to determine the next item in the series...",
    realLife: [
      {
        id: 1,
        title: "Financial Forecasting",
        content:
          "Analysts use series completion to predict future financial trends based on historical data.",
      },
      {
        id: 2,
        title: "Weather Prediction",
        content:
          "Meteorologists analyze weather patterns to forecast future conditions, often using series completion techniques.",
      },
      {
        id: 3,
        title: "Inventory Management",
        content:
          "Businesses use series completion to predict inventory needs based on past sales patterns.",
      },
    ],
    concepts: {
      des: "Series completion is a critical skill in pattern recognition and problem-solving. It involves identifying the underlying rule or pattern governing a series...",
      subConcepts: [
        {
          id: 1,
          title: "Arithmetic Series",
          content:
            "An arithmetic series involves a sequence of numbers with a constant difference between consecutive terms.",
        },
        {
          id: 2,
          title: "Geometric Series",
          content:
            "A geometric series involves a sequence of numbers where each term is a fixed multiple of the previous term.",
        },
        {
          id: 3,
          title: "Mixed Series",
          content:
            "A mixed series combines different types of patterns, such as alternating arithmetic and geometric sequences.",
        },
      ],
    },
    formulae: "Series Completion formulae here...",
    practiceQuestions: [
      {
        id: 1,
        question: "Find the next number in the series: 2, 4, 8, 16, ?",
        options: ["32", "20", "18", "12"],
        correctAnswer: "32",
      },
      {
        id: 2,
        question: "Find the missing number: 5, 10, 20, 40, ?",
        options: ["80", "60", "50", "30"],
        correctAnswer: "80",
      },
      {
        id: 3,
        question: "Complete the series: 3, 9, 27, 81, ?",
        options: ["243", "162", "90", "54"],
        correctAnswer: "243",
      },
      {
        id: 4,
        question: "Find the next term: 7, 14, 28, 56, ?",
        options: ["112", "84", "60", "40"],
        correctAnswer: "112",
      },
      {
        id: 5,
        question: "Complete the series: 4, 8, 16, 32, ?",
        options: ["64", "48", "36", "24"],
        correctAnswer: "64",
      },
      {
        id: 6,
        question: "Find the missing number: 6, 12, 24, 48, ?",
        options: ["96", "84", "60", "54"],
        correctAnswer: "96",
      },
      {
        id: 7,
        question: "Complete the series: 1, 2, 4, 8, ?",
        options: ["16", "12", "10", "6"],
        correctAnswer: "16",
      },
      {
        id: 8,
        question: "Find the next term: 11, 22, 44, 88, ?",
        options: ["176", "120", "100", "64"],
        correctAnswer: "176",
      },
      {
        id: 9,
        question: "Complete the series: 5, 15, 45, 135, ?",
        options: ["405", "200", "150", "75"],
        correctAnswer: "405",
      },
      {
        id: 10,
        question: "Find the next number: 8, 16, 32, 64, ?",
        options: ["128", "80", "70", "50"],
        correctAnswer: "128",
      },
    ],
  },
  "letter-and-symbol-series": {
    description:
      "Letter and symbol series involve identifying patterns in sequences of letters or symbols to determine the next item...",
    realLife: [
      {
        id: 1,
        title: "Cryptography",
        content:
          "In cryptography, understanding letter and symbol series can help in decoding messages.",
      },
      {
        id: 2,
        title: "Data Encoding",
        content:
          "Data encoding techniques often involve patterns of letters and symbols for efficient information storage and transmission.",
      },
      {
        id: 3,
        title: "Pattern Recognition",
        content:
          "Pattern recognition in AI and machine learning involves identifying sequences and patterns in data.",
      },
    ],
    concepts: {
      des: "Letter and symbol series require recognizing and extending patterns based on specific rules governing sequences of letters or symbols...",
      subConcepts: [
        {
          id: 1,
          title: "Alphabet Series",
          content:
            "Alphabet series involve sequences of letters with a specific pattern, such as alphabetical order or skipping certain letters.",
        },
        {
          id: 2,
          title: "Symbol Series",
          content:
            "Symbol series involve sequences of symbols following a specific pattern or rule.",
        },
        {
          id: 3,
          title: "Complex Patterns",
          content:
            "Complex patterns may involve a combination of letters, symbols, and numbers in a sequence.",
        },
      ],
    },
    formulae: "Letter and Symbol Series formulae here...",
    practiceQuestions: [
      {
        id: 1,
        question: "Find the next letter in the series: A, C, E, G, ?",
        options: ["I", "H", "J", "K"],
        correctAnswer: "I",
      },
      {
        id: 2,
        question: "Complete the series: P, R, T, V, ?",
        options: ["X", "U", "W", "Y"],
        correctAnswer: "X",
      },
      {
        id: 3,
        question: "Find the missing letter: B, D, F, H, ?",
        options: ["J", "I", "K", "L"],
        correctAnswer: "J",
      },
      {
        id: 4,
        question: "Complete the series: Z, X, V, T, ?",
        options: ["R", "S", "U", "Q"],
        correctAnswer: "R",
      },
      {
        id: 5,
        question: "Find the next symbol in the series: @, #, $, %, ?",
        options: ["&", "!", "*", "+"],
        correctAnswer: "&",
      },
      {
        id: 6,
        question: "Complete the series: *, &, %, @, ?",
        options: ["#", "$", "!", "+"],
        correctAnswer: "#",
      },
      {
        id: 7,
        question: "Find the missing symbol: ^, *, &, %, ?",
        options: ["$", "#", "!", "+"],
        correctAnswer: "$",
      },
      {
        id: 8,
        question: "Complete the series: !, @, #, $, ?",
        options: ["%", "^", "&", "*"],
        correctAnswer: "%",
      },
      {
        id: 9,
        question: "Find the next letter: C, F, I, L, ?",
        options: ["O", "M", "P", "N"],
        correctAnswer: "O",
      },
      {
        id: 10,
        question: "Complete the series: M, Q, U, Y, ?",
        options: ["C", "A", "B", "D"],
        correctAnswer: "C",
      },
    ],
  },
  "number-series": {
    description:
      "Number series involve identifying patterns in sequences of numbers to determine the next item...",
    realLife: [
      {
        id: 1,
        title: "Financial Analysis",
        content:
          "In finance, analysts use number series to predict future trends based on historical data.",
      },
      {
        id: 2,
        title: "Engineering",
        content:
          "Engineers use number series to identify patterns in data and design efficient systems.",
      },
      {
        id: 3,
        title: "Scientific Research",
        content:
          "Scientists use number series to analyze experimental data and identify trends or anomalies.",
      },
    ],
    concepts: {
      des: "Number series involve recognizing and extending patterns in numerical sequences based on specific rules...",
      subConcepts: [
        {
          id: 1,
          title: "Arithmetic Series",
          content:
            "An arithmetic series involves a sequence of numbers with a constant difference between consecutive terms.",
        },
        {
          id: 2,
          title: "Geometric Series",
          content:
            "A geometric series involves a sequence of numbers where each term is a fixed multiple of the previous term.",
        },
        {
          id: 3,
          title: "Fibonacci Series",
          content:
            "A Fibonacci series involves a sequence where each term is the sum of the two preceding ones.",
        },
      ],
    },
    formulae: "Number Series formulae here...",
    practiceQuestions: [
      {
        id: 1,
        question: "Find the next number in the series: 2, 4, 6, 8, ?",
        options: ["10", "12", "14", "16"],
        correctAnswer: "10",
      },
      {
        id: 2,
        question: "Find the missing number: 3, 6, 9, 12, ?",
        options: ["15", "14", "18", "21"],
        correctAnswer: "15",
      },
      {
        id: 3,
        question: "Complete the series: 5, 10, 15, 20, ?",
        options: ["25", "30", "35", "40"],
        correctAnswer: "25",
      },
      {
        id: 4,
        question: "Find the next term: 7, 14, 21, 28, ?",
        options: ["35", "42", "49", "56"],
        correctAnswer: "35",
      },
      {
        id: 5,
        question: "Complete the series: 1, 4, 9, 16, ?",
        options: ["25", "20", "30", "36"],
        correctAnswer: "25",
      },
      {
        id: 6,
        question: "Find the missing number: 8, 16, 24, 32, ?",
        options: ["40", "48", "56", "64"],
        correctAnswer: "40",
      },
      {
        id: 7,
        question: "Complete the series: 2, 3, 5, 8, ?",
        options: ["13", "10", "15", "20"],
        correctAnswer: "13",
      },
      {
        id: 8,
        question: "Find the next term: 1, 1, 2, 3, 5, 8, ?",
        options: ["13", "10", "12", "15"],
        correctAnswer: "13",
      },
      {
        id: 9,
        question: "Complete the series: 10, 20, 40, 80, ?",
        options: ["160", "120", "100", "200"],
        correctAnswer: "160",
      },
      {
        id: 10,
        question: "Find the next number: 3, 9, 27, 81, ?",
        options: ["243", "120", "90", "70"],
        correctAnswer: "243",
      },
    ],
  },
  "making-judgements": {
    description:
      "Making judgements involves evaluating information and arguments to form a reasoned opinion or conclusion...",
    realLife: [
      {
        id: 1,
        title: "Legal Decision-Making",
        content:
          "Judges and lawyers use judgement skills to evaluate evidence and arguments in legal cases.",
      },
      {
        id: 2,
        title: "Business Strategy",
        content:
          "Business leaders make judgements to formulate strategies and make decisions that affect the company's future.",
      },
      {
        id: 3,
        title: "Medical Diagnosis",
        content:
          "Doctors use judgement skills to diagnose medical conditions based on symptoms and test results.",
      },
    ],
    concepts: {
      des: "Making judgements requires critical thinking and the ability to evaluate information and arguments logically...",
      subConcepts: [
        {
          id: 1,
          title: "Evaluating Evidence",
          content:
            "Assessing the reliability and relevance of evidence is crucial in making informed judgements.",
        },
        {
          id: 2,
          title: "Weighing Arguments",
          content:
            "Considering the strength and validity of different arguments helps in forming balanced conclusions.",
        },
        {
          id: 3,
          title: "Forming Conclusions",
          content:
            "Drawing logical conclusions based on the evaluated information is the final step in making judgements.",
        },
      ],
    },
    formulae: "Making Judgements formulae here...",
    practiceQuestions: [
      {
        id: 1,
        question:
          "Statement: The company reported a 20% increase in profits this year.\nJudgement: The company will continue to grow at the same rate next year.",
        options: ["Strong", "Weak"],
        correctAnswer: "Weak",
      },
      {
        id: 2,
        question:
          "Statement: The new policy has reduced the number of traffic accidents.\nJudgement: The policy is effective in improving road safety.",
        options: ["Strong", "Weak"],
        correctAnswer: "Strong",
      },
      {
        id: 3,
        question:
          "Statement: The book received positive reviews from critics.\nJudgement: The book is a bestseller.",
        options: ["Strong", "Weak"],
        correctAnswer: "Weak",
      },
      {
        id: 4,
        question:
          "Statement: The restaurant has a five-star rating on a review website.\nJudgement: The restaurant offers excellent food and service.",
        options: ["Strong", "Weak"],
        correctAnswer: "Strong",
      },
      {
        id: 5,
        question:
          "Statement: The candidate has a degree from a prestigious university.\nJudgement: The candidate is well-qualified for the job.",
        options: ["Strong", "Weak"],
        correctAnswer: "Strong",
      },
    ],
  },
  "analyzing-arguments": {
    description:
      "Analyzing arguments involves examining the structure, validity, and soundness of arguments to determine their strength...",
    realLife: [
      {
        id: 1,
        title: "Debate and Discussion",
        content:
          "Analyzing arguments is essential in debates and discussions to evaluate opposing viewpoints.",
      },
      {
        id: 2,
        title: "Critical Reading",
        content:
          "Critical reading requires analyzing arguments presented in texts to understand and evaluate their claims.",
      },
      {
        id: 3,
        title: "Scientific Research",
        content:
          "In scientific research, analyzing arguments helps in evaluating the validity of hypotheses and experimental results.",
      },
    ],
    concepts: {
      des: "Analyzing arguments requires understanding the logical structure and assessing the validity of the premises and conclusion...",
      subConcepts: [
        {
          id: 1,
          title: "Identifying Premises",
          content:
            "Recognizing the premises or assumptions that support the argument is the first step in analysis.",
        },
        {
          id: 2,
          title: "Evaluating Validity",
          content:
            "Assessing whether the premises logically lead to the conclusion determines the argument's validity.",
        },
        {
          id: 3,
          title: "Identifying Fallacies",
          content:
            "Spotting logical fallacies helps in identifying weaknesses or errors in the argument.",
        },
      ],
    },
    formulae: "Analyzing Arguments formulae here...",
    practiceQuestions: [
      {
        id: 1,
        question:
          "Argument: All students who study hard get good grades. John studies hard. Therefore, John will get good grades.\nIs the argument valid?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
      },
      {
        id: 2,
        question:
          "Argument: Some fruits are apples. All apples are sweet. Therefore, some fruits are sweet.\nIs the argument valid?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
      },
      {
        id: 3,
        question:
          "Argument: If it rains, the ground will be wet. It did not rain. Therefore, the ground is not wet.\nIs the argument valid?",
        options: ["Yes", "No"],
        correctAnswer: "No",
      },
      {
        id: 4,
        question:
          "Argument: All cats are animals. Some animals are pets. Therefore, all cats are pets.\nIs the argument valid?",
        options: ["Yes", "No"],
        correctAnswer: "No",
      },
      {
        id: 5,
        question:
          "Argument: All birds can fly. Penguins are birds. Therefore, penguins can fly.\nIs the argument valid?",
        options: ["Yes", "No"],
        correctAnswer: "No",
      },
    ],
  },
  "statement-and-assumption": {
    description:
      "Statement and assumption questions involve identifying the underlying assumptions in given statements...",
    realLife: [
      {
        id: 1,
        title: "Marketing and Advertising",
        content:
          "Marketers use assumptions about consumer behavior to create effective advertising strategies.",
      },
      {
        id: 2,
        title: "Political Analysis",
        content:
          "Political analysts make assumptions about voter behavior to predict election outcomes.",
      },
      {
        id: 3,
        title: "Business Planning",
        content:
          "Business planners make assumptions about market trends and economic conditions to develop strategies.",
      },
    ],
    concepts: {
      des: "Identifying assumptions involves recognizing implicit premises that support the given statement...",
      subConcepts: [
        {
          id: 1,
          title: "Implicit Assumptions",
          content:
            "Implicit assumptions are unstated premises that must be true for the statement to hold.",
        },
        {
          id: 2,
          title: "Evaluating Assumptions",
          content:
            "Assessing whether the assumptions are reasonable and valid is crucial in evaluating the statement.",
        },
        {
          id: 3,
          title: "Assumption Types",
          content:
            "Assumptions can be classified into different types based on their nature and relevance to the statement.",
        },
      ],
    },
    formulae: "Statement and Assumption formulae here...",
    practiceQuestions: [
      {
        id: 1,
        question:
          "Statement: The company should invest in new technology to improve efficiency.\nAssumption: New technology will improve efficiency.",
        options: ["Assumption is implicit", "Assumption is not implicit"],
        correctAnswer: "Assumption is implicit",
      },
      {
        id: 2,
        question:
          "Statement: The government should reduce taxes to increase consumer spending.\nAssumption: Reducing taxes will increase consumer spending.",
        options: ["Assumption is implicit", "Assumption is not implicit"],
        correctAnswer: "Assumption is implicit",
      },
      {
        id: 3,
        question:
          "Statement: The school needs to hire more teachers to improve education quality.\nAssumption: Hiring more teachers will improve education quality.",
        options: ["Assumption is implicit", "Assumption is not implicit"],
        correctAnswer: "Assumption is implicit",
      },
      {
        id: 4,
        question:
          "Statement: The city should build more parks to promote healthy living.\nAssumption: Building more parks will promote healthy living.",
        options: ["Assumption is implicit", "Assumption is not implicit"],
        correctAnswer: "Assumption is implicit",
      },
      {
        id: 5,
        question:
          "Statement: The restaurant should lower prices to attract more customers.\nAssumption: Lowering prices will attract more customers.",
        options: ["Assumption is implicit", "Assumption is not implicit"],
        correctAnswer: "Assumption is implicit",
      },
    ],
  },
  "course-of-action": {
    description:
      "Course of action involves determining appropriate steps or measures to address a given problem or situation...",
    realLife: [
      {
        id: 1,
        title: "Crisis Management",
        content:
          "In crisis situations, determining the best course of action is crucial to mitigate impact.",
      },
      {
        id: 2,
        title: "Project Planning",
        content:
          "Project managers decide the course of action to ensure successful project completion.",
      },
      {
        id: 3,
        title: "Medical Treatment",
        content:
          "Doctors determine the best course of action to treat patients based on their conditions.",
      },
    ],
    concepts: {
      des: "Course of action involves analyzing the situation, considering possible measures, and selecting the most appropriate steps...",
      subConcepts: [
        {
          id: 1,
          title: "Problem Analysis",
          content:
            "Analyzing the problem to understand its nature and impact is the first step in determining the course of action.",
        },
        {
          id: 2,
          title: "Evaluating Measures",
          content:
            "Assessing the potential measures to determine their feasibility and effectiveness.",
        },
        {
          id: 3,
          title: "Decision Making",
          content:
            "Selecting the best course of action based on the analysis and evaluation.",
        },
      ],
    },
    formulae: "Course of Action formulae here...",
    practiceQuestions: [
      {
        id: 1,
        question:
          "Problem: The company's sales have been declining for the past three quarters.\nCourse of Action: The company should conduct market research to identify the reasons for the decline.",
        options: ["Correct", "Incorrect"],
        correctAnswer: "Correct",
      },
      {
        id: 2,
        question:
          "Problem: The city has been experiencing heavy traffic congestion.\nCourse of Action: The city should invest in public transportation to reduce traffic.",
        options: ["Correct", "Incorrect"],
        correctAnswer: "Correct",
      },
      {
        id: 3,
        question:
          "Problem: The school is facing a shortage of teachers.\nCourse of Action: The school should increase salaries to attract more teachers.",
        options: ["Correct", "Incorrect"],
        correctAnswer: "Correct",
      },
      {
        id: 4,
        question:
          "Problem: The restaurant has been receiving complaints about food quality.\nCourse of Action: The restaurant should improve food quality to satisfy customers.",
        options: ["Correct", "Incorrect"],
        correctAnswer: "Correct",
      },
      {
        id: 5,
        question:
          "Problem: The company's website has been experiencing frequent downtime.\nCourse of Action: The company should upgrade its server infrastructure to improve website reliability.",
        options: ["Correct", "Incorrect"],
        correctAnswer: "Correct",
      },
    ],
  },
  "statement-and-conclusion": {
    description:
      "Statement and conclusion questions involve determining whether a given conclusion logically follows from the provided statement...",
    realLife: [
      {
        id: 1,
        title: "Scientific Research",
        content:
          "Scientists use statement and conclusion analysis to determine if experimental results support their hypotheses.",
      },
      {
        id: 2,
        title: "Legal Reasoning",
        content:
          "Lawyers use statement and conclusion analysis to build and evaluate legal arguments.",
      },
      {
        id: 3,
        title: "Business Analysis",
        content:
          "Business analysts use statement and conclusion analysis to make informed decisions based on data.",
      },
    ],
    concepts: {
      des: "Determining whether a conclusion logically follows from a statement requires understanding the logical relationship between them...",
      subConcepts: [
        {
          id: 1,
          title: "Direct Conclusions",
          content:
            "Direct conclusions logically follow from the given statement without additional assumptions.",
        },
        {
          id: 2,
          title: "Indirect Conclusions",
          content:
            "Indirect conclusions require additional assumptions or information to logically follow from the statement.",
        },
        {
          id: 3,
          title: "Evaluating Validity",
          content:
            "Assessing the validity of the conclusion based on the provided statement.",
        },
      ],
    },
    formulae: "Statement and Conclusion formulae here...",
    practiceQuestions: [
      {
        id: 1,
        question:
          "Statement: All dogs are animals.\nConclusion: All animals are dogs.",
        options: ["Conclusion follows", "Conclusion does not follow"],
        correctAnswer: "Conclusion does not follow",
      },
      {
        id: 2,
        question:
          "Statement: Some fruits are apples.\nConclusion: Some apples are fruits.",
        options: ["Conclusion follows", "Conclusion does not follow"],
        correctAnswer: "Conclusion follows",
      },
      {
        id: 3,
        question:
          "Statement: All cars are vehicles.\nConclusion: Some vehicles are cars.",
        options: ["Conclusion follows", "Conclusion does not follow"],
        correctAnswer: "Conclusion follows",
      },
      {
        id: 4,
        question: "Statement: No cats are dogs.\nConclusion: No dogs are cats.",
        options: ["Conclusion follows", "Conclusion does not follow"],
        correctAnswer: "Conclusion follows",
      },
      {
        id: 5,
        question:
          "Statement: Some books are novels.\nConclusion: All novels are books.",
        options: ["Conclusion follows", "Conclusion does not follow"],
        correctAnswer: "Conclusion follows",
      },
    ],
  },
  "cause-and-effect": {
    description:
      "Cause and effect questions involve identifying the relationship between events where one event is the result of the other...",
    realLife: [
      {
        id: 1,
        title: "Scientific Research",
        content:
          "Scientists study cause and effect to understand the relationship between variables in experiments.",
      },
      {
        id: 2,
        title: "Policy Making",
        content:
          "Policy makers analyze cause and effect to predict the outcomes of implementing new policies.",
      },
      {
        id: 3,
        title: "Healthcare",
        content:
          "Doctors study cause and effect to determine the causes of diseases and the effects of treatments.",
      },
    ],
    concepts: {
      des: "Identifying cause and effect relationships involves understanding how one event leads to another...",
      subConcepts: [
        {
          id: 1,
          title: "Direct Cause and Effect",
          content:
            "Direct cause and effect relationships are straightforward, where one event directly causes another.",
        },
        {
          id: 2,
          title: "Indirect Cause and Effect",
          content:
            "Indirect cause and effect relationships involve a series of intermediate steps or events.",
        },
        {
          id: 3,
          title: "Correlation vs. Causation",
          content:
            "Understanding the difference between correlation and causation is crucial to avoid false conclusions.",
        },
      ],
    },
    formulae: "Cause and Effect formulae here...",
    practiceQuestions: [
      {
        id: 1,
        question:
          "Event: It rained heavily last night.\nEffect: The streets are flooded.\nIs this a cause and effect relationship?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
      },
      {
        id: 2,
        question:
          "Event: The power went out.\nEffect: The refrigerator stopped working.\nIs this a cause and effect relationship?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
      },
      {
        id: 3,
        question:
          "Event: He studied hard for the exam.\nEffect: He scored high marks.\nIs this a cause and effect relationship?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
      },
      {
        id: 4,
        question:
          "Event: She forgot her umbrella.\nEffect: She got wet in the rain.\nIs this a cause and effect relationship?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
      },
      {
        id: 5,
        question:
          "Event: The company increased its marketing budget.\nEffect: Sales decreased.\nIs this a cause and effect relationship?",
        options: ["Yes", "No"],
        correctAnswer: "No",
      },
    ],
  },
  "theme-detection": {
    description:
      "Theme detection involves identifying the central idea or underlying message in a given text or situation...",
    realLife: [
      {
        id: 1,
        title: "Literary Analysis",
        content:
          "Literary critics analyze themes in novels, poems, and other works of literature.",
      },
      {
        id: 2,
        title: "Film and Media Studies",
        content:
          "Film critics and media analysts identify themes in movies, TV shows, and other media.",
      },
      {
        id: 3,
        title: "Communication",
        content:
          "Effective communication often requires understanding the underlying themes in conversations and speeches.",
      },
    ],
    concepts: {
      des: "Detecting themes requires recognizing recurring ideas and messages that give deeper meaning to the content...",
      subConcepts: [
        {
          id: 1,
          title: "Identifying Main Ideas",
          content:
            "Recognizing the main ideas that are repeated or emphasized in the content.",
        },
        {
          id: 2,
          title: "Understanding Context",
          content:
            "Understanding the context in which the content is presented helps in identifying themes.",
        },
        {
          id: 3,
          title: "Interpreting Messages",
          content:
            "Interpreting the messages conveyed through various elements like words, images, and actions.",
        },
      ],
    },
    formulae: "Theme Detection formulae here...",
    practiceQuestions: [
      {
        id: 1,
        question:
          "Text: The story revolves around a young girl who overcomes various obstacles to achieve her dreams.\nTheme: Perseverance.\nIs this the correct theme?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
      },
      {
        id: 2,
        question:
          "Text: The movie depicts the impact of war on soldiers and their families.\nTheme: Courage.\nIs this the correct theme?",
        options: ["Yes", "No"],
        correctAnswer: "No",
      },
      {
        id: 3,
        question:
          "Text: The poem explores the beauty of nature and the fleeting nature of time.\nTheme: Transience.\nIs this the correct theme?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
      },
      {
        id: 4,
        question:
          "Text: The article discusses the importance of honesty in personal and professional relationships.\nTheme: Integrity.\nIs this the correct theme?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
      },
      {
        id: 5,
        question:
          "Text: The novel portrays the struggles of an immigrant family adapting to a new country.\nTheme: Resilience.\nIs this the correct theme?",
        options: ["Yes", "No"],
        correctAnswer: "Yes",
      },
    ],
  },
};

export default topicsData;
