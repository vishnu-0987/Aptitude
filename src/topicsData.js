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
        toCalculate: "Decimal to Binary Conversion",
        formuales:
          "To convert a decimal number to binary, divide the decimal number by 2 repeatedly and note the remainders in reverse order.",
      },
      {
        id: 2,
        toCalculate: "Binary to Decimal Conversion",
        formuales:
          "To convert a binary number to decimal, multiply each digit by its positional value and sum the results.",
      },
      {
        id: 3,
        toCalculate: "Decimal to Hexadecimal Conversion",
        formuales:
          "To convert a decimal number to hexadecimal, divide the decimal number by 16 repeatedly and note the remainders in reverse order.",
      },
      {
        id: 4,
        toCalculate: "Hexadecimal to Decimal Conversion",
        formuales:
          "To convert a hexadecimal number to decimal, multiply each digit by its positional value and sum the results.",
      },
      {
        id: 5,
        toCalculate: "Binary Addition",
        formuales:
          "Perform addition of binary numbers following the rules of binary addition: 0 + 0 = 0, 0 + 1 = 1, 1 + 0 = 1, 1 + 1 = 10 (carry 1, write 0).",
      },
      {
        id: 6,
        toCalculate: "Binary Subtraction",
        formuales:
          "Perform subtraction of binary numbers following the rules of binary subtraction: 0 - 0 = 0, 1 - 0 = 1, 1 - 1 = 0, borrow from higher place value if necessary.",
      },
      {
        id: 7,
        toCalculate: "Binary Multiplication",
        formuales:
          "Perform multiplication of binary numbers following the rules of binary multiplication: 0 × 0 = 0, 0 × 1 = 0, 1 × 0 = 0, 1 × 1 = 1.",
      },
      {
        id: 8,
        toCalculate: "Decimal to Binary Conversion",
        formuales:
          "To convert a decimal number to binary, divide the decimal number by 2 repeatedly and note the remainders in reverse order.",
      },
      {
        id: 9,
        toCalculate: "Binary to Decimal Conversion",
        formuales:
          "To convert a binary number to decimal, multiply each digit by its positional value and sum the results.",
      },
      {
        id: 10,
        toCalculate: "Decimal to Hexadecimal Conversion",
        formuales:
          "To convert a decimal number to hexadecimal, divide the decimal number by 16 repeatedly and note the remainders in reverse order.",
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
        template: "Four defensive football players are chasing the opposing wide receiver, who has the ball. Calvin is directly behind the ball carrier. Jenkins and Burton are side by side behind Calvin. Zeller is behind Jenkins and Burton. Calvin tries for the tackle but misses and falls. Burton trips. Which defensive player tackles the receiver?",
        variables: {},
        correctAnswerFormula: "Jenkins",
        optionsFormula: [
          "Calvin",
          "Jenkins",
          "Burton",
          "Zeller"
        ],
        explanationTemplate: `Given the scenario:
        
        - Calvin is directly behind the ball carrier but misses the tackle and falls.
        - Burton, who is side by side with Jenkins, trips.
        - Zeller is behind Jenkins and Burton.
        
        Since Calvin misses the tackle and Burton trips, Jenkins, who is still in position, would be the one to tackle the receiver.
        
        Therefore, the correct answer is Jenkins.`
      }, {
        id: 2,
        template: "A four-person crew from Classic Colors is painting Mr. Field's house. Michael is painting the front of the house. Ross is in the alley behind the house painting the back. Jed is painting the window frames on the north side, and Shawn is on the south. If Michael switches places with Jed, and Jed then switches places with Shawn, where is Shawn?",
        variables: {},
        correctAnswerFormula: "In front of the house",
        optionsFormula: [
          "In the alley behind the house",
          "On the north side of the house",
          "In front of the house",
          "On the south side of the house"
        ],
        explanationTemplate: `Given the scenario:
      
        - Initially, Michael is in front of the house, Ross is at the back, Jed is on the north side, and Shawn is on the south side.
        - Michael switches places with Jed, so Michael is now on the north side and Jed is in front of the house.
        - Jed then switches places with Shawn, so Jed is now on the south side and Shawn is in front of the house.
      
        Therefore, the correct answer is that Shawn is in front of the house.`
      },
      {
        id: 3,
        template: "In a four-day period Monday through Thursday, each of the following temporary office workers worked only one day, each on a different day. Ms. Johnson was scheduled to work on Monday, but she traded with Mr. Carter, who was originally scheduled to work on Wednesday. Ms. Falk traded with Mr. Kirk, who was originally scheduled to work on Thursday. After all the switching was done, who worked on Tuesday?",
        variables: {},
        correctAnswerFormula: "Ms. Falk",
        optionsFormula: [
          "Ms. Johnson",
          "Mr. Carter",
          "Ms. Falk",
          "Mr. Kirk"
        ],
        explanationTemplate: `Given the scenario:
      
        - Ms. Johnson was originally scheduled for Monday but switched with Mr. Carter, who was supposed to work on Wednesday. So, Mr. Carter now works on Monday, and Ms. Johnson on Wednesday.
        - Ms. Falk was originally scheduled for Tuesday but traded with Mr. Kirk, who was supposed to work on Thursday. This means Ms. Falk now works on Thursday, and Mr. Kirk on Tuesday.
      
        Therefore, after all the switching, Ms. Falk worked on Tuesday.`
      },
      {
        id: 4,
        template: "Four people witnessed a mugging. Each gave a different description of the mugger. Which description is probably right?",
        variables: {},
        correctAnswerFormula: "The one that is most consistent with common details",
        optionsFormula: [
          "He was average height, thin, and middle-aged.",
          "He was tall, thin, and middle-aged.",
          "He was tall, thin, and young.",
          "He was tall, of average weight, and middle-aged."
        ],
        explanationTemplate: `In scenarios like this, the description that aligns with the most common details provided by the witnesses is likely the most accurate. 
      
        For example:
        - If three witnesses describe the mugger as tall and thin, those details are more likely accurate.
        - The age or weight could vary based on the witnesses' perspectives or the conditions under which they observed the mugger.
      
        Therefore, the description that includes the most consistent and corroborated details is probably correct.`
      },
      {
        id: 5,
        template: "Fact 1: Jessica has four children. Fact 2: Two of the children have blue eyes and two of the children have brown eyes. Fact 3: Half of the children are girls. If the first three statements are facts, which of the following statements must also be a fact? I: At least one girl has blue eyes. II: Two of the children are boys. III: The boys have brown eyes.",
        variables: {},
        correctAnswerFormula: "II: Two of the children are boys",
        optionsFormula: [
          "I: At least one girl has blue eyes",
          "II: Two of the children are boys",
          "III: The boys have brown eyes"
        ],
        explanationTemplate: `Given the facts:
      
        - Jessica has four children.
        - Two have blue eyes, and two have brown eyes.
        - Half of the children are girls, meaning two are girls and two are boys.
      
        From these facts, we can deduce:
        
        - Statement I: "At least one girl has blue eyes" is not necessarily a fact because we do not have information on the specific distribution of eye color among the girls and boys.
        - Statement II: "Two of the children are boys" must be a fact because half of four children (as per Fact 3) is two.
        - Statement III: "The boys have brown eyes" is not necessarily a fact because, based on the given information, the boys could have either blue or brown eyes.
      
        Therefore, the correct answer is statement II: Two of the children are boys.`
      },
      {
        id: 6,
        template: "Fact 1: All drink mixes are beverages.\nFact 2: All beverages are drinkable.\nFact 3: Some beverages are red.\nIf the first three statements are facts, which of the following statements must also be a fact?\nI: Some drink mixes are red.\nII: All beverages are drink mixes.\nIII: All red drink mixes are drinkable.",
        variables: {},
        correctAnswerFormula: "III: All red drink mixes are drinkable",
        optionsFormula: [
          "I: Some drink mixes are red",
          "II: All beverages are drink mixes",
          "III: All red drink mixes are drinkable"
        ],
        explanationTemplate: `Given the facts:
      
        - Fact 1: All drink mixes are beverages.
        - Fact 2: All beverages are drinkable.
        - Fact 3: Some beverages are red.
      
        From these facts, we can deduce:
        
        - Statement I: "Some drink mixes are red" is not necessarily a fact because while some beverages are red, there's no direct statement that links red color specifically to drink mixes.
        - Statement II: "All beverages are drink mixes" is false because not all beverages are necessarily drink mixes.
        - Statement III: "All red drink mixes are drinkable" must be a fact because all drink mixes (whether red or not) are beverages, and all beverages are drinkable (as per Fact 2).
      
        Therefore, the correct answer is statement III: All red drink mixes are drinkable.`
      },
      {
        id: 7,
        template: "Fact 1: All chickens are birds.\nFact 2: Some chickens are hens.\nFact 3: Female birds lay eggs.\nIf the first three statements are facts, which of the following statements must also be a fact?\nI: All birds lay eggs.\nII: Some hens are birds.\nIII: Some chickens are not hens.",
        variables: {},
        correctAnswerFormula: "II: Some hens are birds",
        optionsFormula: [
          "I: All birds lay eggs",
          "II: Some hens are birds",
          "III: Some chickens are not hens"
        ],
        explanationTemplate: `Given the facts:
      
        - Fact 1: All chickens are birds.
        - Fact 2: Some chickens are hens.
        - Fact 3: Female birds lay eggs.
      
        From these facts, we can deduce:
        
        - Statement I: "All birds lay eggs" is not necessarily a fact because Fact 3 only states that female birds lay eggs, not all birds.
        - Statement II: "Some hens are birds" must be a fact because hens are a type of chicken, and all chickens are birds (Fact 1).
        - Statement III: "Some chickens are not hens" is a possible scenario but is not necessarily a fact based on the given information.
      
        Therefore, the correct answer is statement II: Some hens are birds.`
      },
      {
        id: 8,
        template: "Fact 1: All hats have brims.\nFact 2: There are black hats and blue hats.\nFact 3: Baseball caps are hats.\nIf the first three statements are facts, which of the following statements must also be a fact?\nI: All caps have brims.\nII: Some baseball caps are blue.\nIII: Baseball caps have no brims.",
        variables: {},
        correctAnswerFormula: "I: All caps have brims",
        optionsFormula: [
          "I: All caps have brims",
          "II: Some baseball caps are blue",
          "III: Baseball caps have no brims"
        ],
        explanationTemplate: `Given the facts:
      
        - Fact 1: All hats have brims.
        - Fact 2: There are black hats and blue hats.
        - Fact 3: Baseball caps are hats.
      
        From these facts, we can deduce:
      
        - Statement I: "All caps have brims" must be a fact because baseball caps are a type of hat, and all hats have brims (Fact 1).
        - Statement II: "Some baseball caps are blue" is not necessarily a fact because we do not have information on the specific color distribution of baseball caps.
        - Statement III: "Baseball caps have no brims" is false because it contradicts Fact 1.
      
        Therefore, the correct answer is statement I: All caps have brims.`
      },
      {
        id: 9,
        template: "Fact 1: Eyeglass frames cost between $35 and $350.\nFact 2: Some eyeglass frames are made of titanium.\nFact 3: Some eyeglass frames are made of plastic.\nIf the first three statements are facts, which of the following statements must also be a fact?\nI: Titanium eyeglass frames cost more than plastic frames.\nII: Expensive eyeglass frames last longer than cheap frames.\nIII: Only a few eyeglass frames cost less than $35.",
        variables: {},
        correctAnswerFormula: "III: Only a few eyeglass frames cost less than $35.",
        optionsFormula: [
          "I: Titanium eyeglass frames cost more than plastic frames.",
          "II: Expensive eyeglass frames last longer than cheap frames.",
          "III: Only a few eyeglass frames cost less than $35."
        ],
        explanationTemplate: `Given the facts:
      
        - Fact 1: Eyeglass frames cost between $35 and $350.
        - Fact 2: Some eyeglass frames are made of titanium.
        - Fact 3: Some eyeglass frames are made of plastic.
      
        From these facts, we can deduce:
      
        - Statement I: "Titanium eyeglass frames cost more than plastic frames" is not necessarily a fact because there is no information linking the material to cost.
        - Statement II: "Expensive eyeglass frames last longer than cheap frames" is a common assumption but is not a fact based on the given information.
        - Statement III: "Only a few eyeglass frames cost less than $35" is a fact because the cost range starts at $35, meaning frames costing less than $35 are rare or non-existent.
      
        Therefore, the correct answer is statement III: Only a few eyeglass frames cost less than $35.`
      },
      {
        id: 10,
        template: "Fact 1: Most stuffed toys are stuffed with beans.\nFact 2: There are stuffed bears and stuffed tigers.\nFact 3: Some chairs are stuffed with beans.\nIf the first three statements are facts, which of the following statements must also be a fact?\nI: Only children's chairs are stuffed with beans.\nII: All stuffed tigers are stuffed with beans.\nIII: Stuffed monkeys are not stuffed with beans.",
        variables: {},
        correctAnswerFormula: "None of the statements is a known fact",
        optionsFormula: [
          "I: Only children's chairs are stuffed with beans.",
          "II: All stuffed tigers are stuffed with beans.",
          "III: Stuffed monkeys are not stuffed with beans."
        ],
        explanationTemplate: `Given the facts:
      
        - Fact 1: Most stuffed toys are stuffed with beans.
        - Fact 2: There are stuffed bears and stuffed tigers.
        - Fact 3: Some chairs are stuffed with beans.
      
        From these facts, we can deduce:
      
        - Statement I: "Only children's chairs are stuffed with beans" is not supported by the facts because there is no information specifying the type of chairs.
        - Statement II: "All stuffed tigers are stuffed with beans" cannot be determined because we only know that most stuffed toys are stuffed with beans, not all.
        - Statement III: "Stuffed monkeys are not stuffed with beans" is not supported by the facts because no information is provided about stuffed monkeys.
      
        Therefore, none of the provided statements can be confirmed as a fact based on the given information.`
      }

      ,
      // {
      //   id: 11,
      //   question:
      //     "If some crunks are crinks and some crinks are cronks, are some crunks definitely cronks?",
      //   options: ["Yes", "No"],
      //   correctAnswer: "No",
      // },
      // {
      //   id: 12,
      //   question:
      //     "Which one of the following is a meaningful word if the consonants are deleted: INSIGHT, INCITE, INPUT, ICON?",
      //   options: ["INSIGHT", "INCITE", "INPUT", "ICON"],
      //   correctAnswer: "ICON",
      // },
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
        template: "In a row of certain persons, Pradip is sitting 463 from the left end and 531 from the right end. Find out the total number of persons in that row.",
        variables: {},
        correctAnswerFormula: "993",
        optionsFormula: [
          "963",
          "942",
          "993",
          "Can’t be determined"
        ],
        explanationTemplate: `To find the total number of persons in the row, add Pradip's positions from both ends and subtract 1 (since Pradip is counted twice in this addition).
      
        Total number of persons = (Position from left end) + (Position from right end) - 1
                                = 463 + 531 - 1
                                = 993
      
        Therefore, the total number of persons in the row is 993.`
      },
      {
        id: 2,
        template: "In a row all the persons are facing north, Rahul is 33rd from the left end and in the right side of Rahul, there are only 16 persons. Find out total number of persons in this queue.",
        variables: {},
        correctAnswerFormula: "50",
        optionsFormula: [
          "49",
          "50",
          "51",
          "Can’t be determined"
        ],
        explanationTemplate: `To find the total number of persons in the row, add Rahul's position from the left end and the number of persons to the right of Rahul, then add 1 (to include Rahul himself).
      
        Total number of persons = (Position from left end) + (Number of persons to the right of Rahul) + 1
                                = 33 + 16 + 1
                                = 50
      
        Therefore, the total number of persons in the queue is 50.`
      },
      {
        id: 3,
        template: "In a row of 60 persons, Ganesh is 26th from the left end. Find out his position from the right end.",
        variables: {},
        correctAnswerFormula: "35",
        optionsFormula: [
          "35",
          "36",
          "34",
          "Can’t be determined"
        ],
        explanationTemplate: `To find Ganesh's position from the right end, subtract his position from the left end from the total number of persons and then add 1 (to include Ganesh himself).
      
        Position from right end = Total number of persons - Position from left end + 1
                                 = 60 - 26 + 1
                                 = 35
      
        Therefore, Ganesh's position from the right end is 35.`
      },
      {
        id: 4,
        template: "In a row, Yash is 15th from left end while Rima is 56th from right end and 16th to the right of Monu. Find out total number of persons of this queue.",
        variables: {},
        correctAnswerFormula: "94",
        optionsFormula: [
          "65",
          "83",
          "94",
          "Can’t be determined"
        ],
        explanationTemplate: `To determine the total number of persons in the row, follow these steps:
      
        1. Find Monu's position. Since Rima is 16th to the right of Monu, Monu's position from the right end is Rima's position from the right end plus 16.
           Monu's position from the right end = 56 + 16 = 72
      
        2. Find Monu's position from the left end. Subtract Monu's position from the right end from the total number of persons and then add 1.
           Monu's position from the left end = Total number of persons - 72 + 1
      
        3. Given that Yash is 15th from the left end, and Yash and Monu must be included in the count of total persons:
           Monu's position from the left end must be equal to Yash's position from the left end plus the gap between Yash and Monu.
           Total number of persons = Yash's position from the left end + Monu's position from the left end - Yash's position from the left end + 1
           = 15 + (72 - 15) = 94
      
        Therefore, the total number of persons in the queue is 94.`
      },
      {
        id: 5,
        template: "Siya is 18th from left end and 12th to the right of Rinku who is 38th from the right end. If all of them are facing north, find out total number of persons in the row.",
        variables: {},
        correctAnswerFormula: "43",
        optionsFormula: [
          "44",
          "43",
          "45",
          "Can’t be determined"
        ],
        explanationTemplate: `To find the total number of persons in the row, follow these steps:
      
        1. Determine Rinku's position from the left end. Since Siya is 12th to the right of Rinku, Siya's position from the left end can be used to find Rinku's position from the left end.
           Siya's position from the left end = Rinku's position from the left end + 12
           So, Rinku's position from the left end = Siya's position from the left end - 12
                                                  = 18 - 12
                                                  = 6
      
        2. Calculate the total number of persons in the row. Subtract Rinku's position from the right end from the total number of persons and add Rinku's position from the left end and 1.
           Total number of persons = Rinku's position from the left end + Rinku's position from the right end - 1
                                   = 6 + 38 - 1
                                   = 43
      
        Therefore, the total number of persons in the row is 43.`
      },
      {
        id: 6,
        template: "In a group of 105 students, Ravi’s rank is 36th from the top and Sarika’s rank is 41st from the bottom. How many students are there in between Ravi and Sarika (if no two persons got the same rank)?",
        variables: {},
        correctAnswerFormula: "28",
        optionsFormula: [
          "28",
          "39",
          "Can’t be determined",
          "None of these"
        ],
        explanationTemplate: `To find the number of students in between Ravi and Sarika, follow these steps:
      
        1. Determine Sarika's rank from the top. Since Sarika's rank is 41st from the bottom and there are 105 students in total:
           Sarika's rank from the top = Total number of students - Sarika's rank from the bottom + 1
                                      = 105 - 41 + 1
                                      = 65
      
        2. Calculate the number of students between Ravi and Sarika:
           Number of students in between = Sarika's rank from the top - Ravi's rank from the top - 1
                                          = 65 - 36 - 1
                                          = 28
      
        Therefore, there are 28 students between Ravi and Sarika.`
      },
      {
        id: 7,
        template: "In a batch of 100 students, Kavya’s rank is 50th from the top and Lucky’s rank is 68th from the bottom. How many students are there in between Kavya and Lucky (if no two persons got the same rank)?",
        variables: {},
        correctAnswerFormula: "13",
        optionsFormula: [
          "Less than 10",
          "16",
          "Can’t be determined",
          "13"
        ],
        explanationTemplate: `To find the number of students in between Kavya and Lucky, follow these steps:
      
        1. Determine Lucky's rank from the top. Since Lucky's rank is 68th from the bottom and there are 100 students in total:
           Lucky's rank from the top = Total number of students - Lucky's rank from the bottom + 1
                                     = 100 - 68 + 1
                                     = 33
      
        2. Calculate the number of students between Kavya and Lucky:
           Number of students in between = Kavya's rank from the top - Lucky's rank from the top - 1
                                          = 50 - 33 - 1
                                          = 16
      
        Therefore, there are 16 students between Kavya and Lucky.`
      },
      {
        id: 8,
        template: "In a single row, there are some girls and all of them are facing north. Diksha’s rank is 19th from the left end and Trisha’s rank is 17th from the right end. If 5 students are sitting in between them, find the number of students in the class.",
        variables: {},
        correctAnswerFormula: "42",
        optionsFormula: [
          "31",
          "49",
          "50",
          "42"
        ],
        explanationTemplate: `To find the total number of students in the class, follow these steps:
      
        1. Determine Trisha's position from the left end. Since there are 5 students between Diksha and Trisha, the total distance between them is 5 + 2 (Diksha's and Trisha's positions) = 7 positions.
           Trisha's position from the left end = Diksha's position from the left end + 5 + 1
                                                = 19 + 5 + 1
                                                = 25
      
        2. Calculate the total number of students in the class. Since Trisha's position from the right end is 17:
           Total number of students = Diksha's position from the left end + Trisha's position from the right end - 1
                                     = 25 + 17 - 1
                                     = 41
      
        Therefore, the total number of students in the class is 42.`
      },
      {
        id: 9,
        template: "In a single row, there are some boys and all of them are facing north. Gaurav’s rank is 29th from the left end and Tarun’s rank is 27th from the right end. If 26 students are sitting in between them, find the number of students in the class.",
        variables: {},
        correctAnswerFormula: "82",
        optionsFormula: [
          "21",
          "9",
          "10",
          "82"
        ],
        explanationTemplate: `To find the total number of students in the class, follow these steps:
      
        1. Determine the total number of students between Gaurav and Tarun:
           Number of students between them = 26
      
        2. Calculate Tarun's position from the left end:
           Tarun's position from the left end = Gaurav's position from the left end + Number of students between them + 1
                                               = 29 + 26 + 1
                                               = 56
      
        3. Calculate the total number of students in the class. Since Tarun's position from the right end is 27:
           Total number of students = Tarun's position from the left end + Tarun's position from the right end - 1
                                     = 56 + 27 - 1
                                     = 82
      
        Therefore, the total number of students in the class is 82.`
      }
      , {
        id: 10,
        template: "In a class, Vijay’s rank is 34th from the left and Ajay’s rank is 37th from the right. If only Diwakar sits exactly in between them, what could be the minimum number of students in the class?",
        variables: {},
        correctAnswerFormula: "68",
        optionsFormula: [
          "59",
          "37",
          "68",
          "Can’t be determined"
        ],
        explanationTemplate: `To find the minimum number of students in the class, follow these steps:
          
            1. Determine the number of students between Vijay and Ajay:
               Since Diwakar sits exactly between Vijay and Ajay, the total number of students between Vijay and Ajay must be 1 (Diwakar) + 1 = 2.
          
            2. Calculate the total number of students in the class:
               Total number of students = Vijay's rank from the left + Ajay's rank from the right + Number of students between them
                                         = 34 + 37 + 1
                                         = 72
          
            3. Since we need the minimum number, subtract 2 from the total number:
               Minimum number of students = 72 - 4 (for the number of students between Vijay and Ajay)
                                          = 68
          
            Therefore, the minimum number of students in the class is 68.`
      }

      ,
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
        template: "Find the next number in the series: 2, 4, 8, 16, ?",
        variables: {},
        correctAnswerFormula: "32",
        optionsFormula: [
          "24",
          "28",
          "30",
          "32"
        ],
        explanationTemplate: `To find the next number in the series, observe the pattern:
      
        - The sequence is: 2, 4, 8, 16
        - Each number is multiplied by 2 to get the next number in the series.
      
        Therefore, the next number after 16 is 16 * 2 = 32.
      
        Hence, the next number in the series is 32.`
      },
      {
        id: 2,
        template: "Find the missing number: 5, 10, 20, 40, ?",
        variables: {},
        correctAnswerFormula: "80",
        optionsFormula: [
          "60",
          "70",
          "80",
          "90"
        ],
        explanationTemplate: `To find the missing number, observe the pattern:
      
        - The sequence is: 5, 10, 20, 40
        - Each number is multiplied by 2 to get the next number in the series.
      
        Therefore, the missing number after 40 is 40 * 2 = 80.
      
        Hence, the missing number is 80.`
      },
      {
        id: 3,
        template: "Complete the series: 3, 9, 27, 81, ?",
        variables: {},
        correctAnswerFormula: "243",
        optionsFormula: [
          "162",
          "216",
          "243",
          "324"
        ],
        explanationTemplate: `To complete the series, observe the pattern:
      
        - The sequence is: 3, 9, 27, 81
        - Each number is multiplied by 3 to get the next number in the series.
      
        Therefore, the next number after 81 is 81 * 3 = 243.
      
        Hence, the number that completes the series is 243.`
      },
      {
        id: 4,
        template: "Find the next term: 7, 14, 28, 56, ?",
        variables: {},
        correctAnswerFormula: "112",
        optionsFormula: [
          "84",
          "98",
          "112",
          "126"
        ],
        explanationTemplate: `To find the next term, observe the pattern:
      
        - The sequence is: 7, 14, 28, 56
        - Each number is multiplied by 2 to get the next number in the series.
      
        Therefore, the next term after 56 is 56 * 2 = 112.
      
        Hence, the next term in the series is 112.`
      },
      {
        id: 5,
        template: "Complete the series: 4, 8, 16, 32, ?",
        variables: {},
        correctAnswerFormula: "64",
        optionsFormula: [
          "48",
          "56",
          "64",
          "72"
        ],
        explanationTemplate: `To complete the series, observe the pattern:
      
        - The sequence is: 4, 8, 16, 32
        - Each number is multiplied by 2 to get the next number in the series.
      
        Therefore, the next number after 32 is 32 * 2 = 64.
      
        Hence, the number that completes the series is 64.`
      },
      {
        id: 6,
        template: "Find the missing number: 6, 12, 24, 48, ?",
        variables: {},
        correctAnswerFormula: "96",
        optionsFormula: [
          "72",
          "84",
          "96",
          "108"
        ],
        explanationTemplate: `To find the missing number, observe the pattern:
      
        - The sequence is: 6, 12, 24, 48
        - Each number is multiplied by 2 to get the next number in the series.
      
        Therefore, the missing number after 48 is 48 * 2 = 96.
      
        Hence, the missing number is 96.`
      },
      {
        id: 7,
        template: "Complete the series: 1, 2, 4, 8, ?",
        variables: {},
        correctAnswerFormula: "16",
        optionsFormula: [
          "12",
          "14",
          "16",
          "18"
        ],
        explanationTemplate: `To complete the series, observe the pattern:
      
        - The sequence is: 1, 2, 4, 8
        - Each number is multiplied by 2 to get the next number in the series.
      
        Therefore, the next number after 8 is 8 * 2 = 16.
      
        Hence, the number that completes the series is 16.`
      },
      {
        id: 8,
        template: "Find the next term: 11, 22, 44, 88, ?",
        variables: {},
        correctAnswerFormula: "176",
        optionsFormula: [
          "132",
          "154",
          "176",
          "198"
        ],
        explanationTemplate: `To find the next term, observe the pattern:
      
        - The sequence is: 11, 22, 44, 88
        - Each number is multiplied by 2 to get the next number in the series.
      
        Therefore, the next term after 88 is 88 * 2 = 176.
      
        Hence, the next term in the series is 176.`
      },
      {
        id: 9,
        template: "Complete the series: 5, 15, 45, 135, ?",
        variables: {},
        correctAnswerFormula: "405",
        optionsFormula: [
          "270",
          "315",
          "360",
          "405"
        ],
        explanationTemplate: `To complete the series, observe the pattern:
      
        - The sequence is: 5, 15, 45, 135
        - Each number is multiplied by 3 to get the next number in the series.
      
        Therefore, the next number after 135 is 135 * 3 = 405.
      
        Hence, the number that completes the series is 405.`
      },
      {
        id: 10,
        template: "Find the next number: 8, 16, 32, 64, ?",
        variables: {},
        correctAnswerFormula: "128",
        optionsFormula: [
          "96",
          "108",
          "120",
          "128"
        ],
        explanationTemplate: `To find the next number, observe the pattern:
      
        - The sequence is: 8, 16, 32, 64
        - Each number is multiplied by 2 to get the next number in the series.
      
        Therefore, the next number after 64 is 64 * 2 = 128.
      
        Hence, the next number in the series is 128.`
      }
      ,
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
        template: "Find the next letter in the series: A, C, E, G, ?",
        variables: {},
        correctAnswerFormula: "I",
        optionsFormula: [
          "H",
          "I",
          "J",
          "K"
        ],
        explanationTemplate: `To find the next letter in the series, observe the pattern:
      
        - The sequence is: A, C, E, G
        - The position of each letter in the alphabet is: A(1), C(3), E(5), G(7)
        - The pattern is an increment of 2 positions in the alphabet.
      
        Therefore, the next letter after G (7) is I (9), following the same pattern.
      
        Hence, the next letter in the series is I.`
      },
      {
        id: 2,
        template: "Complete the series: P, R, T, V, ?",
        variables: {},
        correctAnswerFormula: "X",
        optionsFormula: [
          "W",
          "X",
          "Y",
          "Z"
        ],
        explanationTemplate: `To complete the series, observe the pattern:
      
        - The sequence is: P, R, T, V
        - The positions of these letters in the alphabet are: P(16), R(18), T(20), V(22)
        - The pattern is an increment of 2 positions in the alphabet.
      
        Therefore, the next letter after V (22) is X (24), following the same pattern.
      
        Hence, the letter that completes the series is X.`
      },
      {
        id: 3,
        template: "Find the missing letter: B, D, F, H, ?",
        variables: {},
        correctAnswerFormula: "J",
        optionsFormula: [
          "I",
          "J",
          "K",
          "L"
        ],
        explanationTemplate: `To find the missing letter, observe the pattern:
      
        - The sequence is: B, D, F, H
        - The positions of these letters in the alphabet are: B(2), D(4), F(6), H(8)
        - The pattern is an increment of 2 positions in the alphabet.
      
        Therefore, the next letter after H (8) is J (10), following the same pattern.
      
        Hence, the missing letter in the series is J.`
      },
      {
        id: 4,
        template: "Complete the series: Z, X, V, T, ?",
        variables: {},
        correctAnswerFormula: "R",
        optionsFormula: [
          "R",
          "S",
          "U",
          "W"
        ],
        explanationTemplate: `To complete the series, observe the pattern:
      
        - The sequence is: Z, X, V, T
        - The positions of these letters in the alphabet are: Z(26), X(24), V(22), T(20)
        - The pattern is a decrement of 2 positions in the alphabet.
      
        Therefore, the next letter after T (20) is R (18), following the same pattern.
      
        Hence, the letter that completes the series is R.`
      },
      {
        id: 5,
        template: "Find the next symbol in the series: @, #, $, %, ?",
        variables: {},
        correctAnswerFormula: "^",
        optionsFormula: [
          "&",
          "^",
          "*",
          "+"
        ],
        explanationTemplate: `To find the next symbol in the series, observe the pattern:
      
        - The sequence is: @, #, $, %, ?
        - The symbols are commonly used in the order of increasing keyboard symbols.
      
        Therefore, the next symbol in the series, following the pattern, is ^.
      
        Hence, the next symbol in the series is ^.`
      },
      {
        id: 6,
        template: "Complete the series: *, &, %, @, ?",
        variables: {},
        correctAnswerFormula: "#",
        optionsFormula: [
          "#",
          "^",
          "+",
          "!"
        ],
        explanationTemplate: `To complete the series, observe the pattern:
      
        - The sequence is: *, &, %, @, ?
        - The symbols are commonly used in the order of increasing keyboard symbols.
      
        The pattern suggests using symbols commonly found on a keyboard.
      
        Therefore, the next symbol in the series, following the pattern, is #.
      
        Hence, the symbol that completes the series is #.`
      },
      {
        id: 7,
        template: "Find the missing symbol: ^, *, &, %, ?",
        variables: {},
        correctAnswerFormula: "$",
        optionsFormula: [
          "$",
          "#",
          "@",
          "+"
        ],
        explanationTemplate: `To find the missing symbol, observe the pattern:
      
        - The sequence is: ^, *, &, %, ?
        - The symbols are commonly used in the order of increasing keyboard symbols.
      
        The pattern suggests using symbols commonly found on a keyboard and following a sequence.
      
        Therefore, the missing symbol in the series, following the pattern, is $.
      
        Hence, the missing symbol is $.`
      },
      {
        id: 8,
        template: "Complete the series: !, @, #, $, ?",
        variables: {},
        correctAnswerFormula: "%",
        optionsFormula: [
          "%",
          "^",
          "&",
          "*"
        ],
        explanationTemplate: `To complete the series, observe the pattern:
      
        - The sequence is: !, @, #, $, ?
        - The symbols are commonly used on a keyboard in a sequential order.
      
        The pattern suggests using symbols commonly found on a keyboard, with increasing complexity.
      
        Therefore, the next symbol in the series, following the pattern, is %.
      
        Hence, the symbol that completes the series is %.`
      },
      {
        id: 9,
        template: "Find the next letter: C, F, I, L, ?",
        variables: {},
        correctAnswerFormula: "O",
        optionsFormula: [
          "M",
          "N",
          "O",
          "P"
        ],
        explanationTemplate: `To find the next letter in the series, observe the pattern:
      
        - The sequence is: C, F, I, L
        - The positions of these letters in the alphabet are: C(3), F(6), I(9), L(12)
        - The pattern is an increment of 3 positions in the alphabet.
      
        Therefore, the next letter after L (12) is O (15), following the same pattern.
      
        Hence, the next letter in the series is O.`
      },
      {
        id: 10,
        template: "Complete the series: M, Q, U, Y, ?",
        variables: {},
        correctAnswerFormula: "C",
        optionsFormula: [
          "A",
          "B",
          "C",
          "D"
        ],
        explanationTemplate: `To complete the series, observe the pattern:
      
        - The sequence is: M, Q, U, Y
        - The positions of these letters in the alphabet are: M(13), Q(17), U(21), Y(25)
        - The pattern is an increment of 4 positions in the alphabet.
      
        Therefore, the next letter after Y (25) is C (3), following the same pattern with wrap-around in the alphabet.
      
        Hence, the letter that completes the series is C.`
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
        template: "Find the next number in the series: 2, 4, 6, 8, ?",
        variables: {},
        correctAnswerFormula: "10",
        optionsFormula: [
          "8",
          "9",
          "10",
          "11"
        ],
        explanationTemplate: `To find the next number, observe the pattern:
      
        - The sequence is: 2, 4, 6, 8
        - Each number is incremented by 2 to get the next number in the series.
      
        Therefore, the next number after 8 is 8 + 2 = 10.
      
        Hence, the next number in the series is 10.`
      },
      {
        id: 2,
        template: "Find the missing number: 3, 6, 9, 12, ?",
        variables: {},
        correctAnswerFormula: "15",
        optionsFormula: [
          "13",
          "14",
          "15",
          "16"
        ],
        explanationTemplate: `To find the missing number, observe the pattern:
      
        - The sequence is: 3, 6, 9, 12
        - Each number is incremented by 3 to get the next number in the series.
      
        Therefore, the missing number after 12 is 12 + 3 = 15.
      
        Hence, the missing number is 15.`
      },
      {
        id: 3,
        template: "Complete the series: 5, 10, 15, 20, ?",
        variables: {},
        correctAnswerFormula: "25",
        optionsFormula: [
          "22",
          "23",
          "24",
          "25"
        ],
        explanationTemplate: `To complete the series, observe the pattern:
      
        - The sequence is: 5, 10, 15, 20
        - Each number is incremented by 5 to get the next number in the series.
      
        Therefore, the next number after 20 is 20 + 5 = 25.
      
        Hence, the number that completes the series is 25.`
      },
      {
        id: 4,
        template: "Find the next term: 7, 14, 21, 28, ?",
        variables: {},
        correctAnswerFormula: "35",
        optionsFormula: [
          "30",
          "32",
          "34",
          "35"
        ],
        explanationTemplate: `To find the next term, observe the pattern:
      
        - The sequence is: 7, 14, 21, 28
        - Each number is incremented by 7 to get the next number in the series.
      
        Therefore, the next term after 28 is 28 + 7 = 35.
      
        Hence, the next term in the series is 35.`
      },
      {
        id: 5,
        template: "Complete the series: 1, 4, 9, 16, ?",
        variables: {},
        correctAnswerFormula: "25",
        optionsFormula: [
          "20",
          "21",
          "22",
          "25"
        ],
        explanationTemplate: `To complete the series, observe the pattern:
      
        - The sequence is: 1, 4, 9, 16
        - These are perfect squares: 1^2, 2^2, 3^2, 4^2.
      
        Therefore, the next number in the series is 5^2 = 25.
      
        Hence, the number that completes the series is 25.`
      },
      {
        id: 6,
        template: "Find the missing number: 8, 16, 24, 32, ?",
        variables: {},
        correctAnswerFormula: "40",
        optionsFormula: [
          "36",
          "38",
          "40",
          "42"
        ],
        explanationTemplate: `To find the missing number, observe the pattern:
      
        - The sequence is: 8, 16, 24, 32
        - Each number is incremented by 8 to get the next number in the series.
      
        Therefore, the missing number after 32 is 32 + 8 = 40.
      
        Hence, the missing number is 40.`
      },
      {
        id: 7,
        template: "Complete the series: 2, 3, 5, 8, ?",
        variables: {},
        correctAnswerFormula: "13",
        optionsFormula: [
          "11",
          "12",
          "13",
          "14"
        ],
        explanationTemplate: `To complete the series, observe the pattern:
      
        - The sequence is: 2, 3, 5, 8
        - The pattern is that each number is the sum of the previous two numbers:
          - 2 + 3 = 5
          - 3 + 5 = 8
          - Therefore, the next number is 5 + 8 = 13
      
        Hence, the number that completes the series is 13.`
      },
      {
        id: 8,
        template: "Find the next term: 1, 1, 2, 3, 5, 8, ?",
        variables: {},
        correctAnswerFormula: "13",
        optionsFormula: [
          "11",
          "12",
          "13",
          "14"
        ],
        explanationTemplate: `To find the next term, observe the pattern:
      
        - The sequence is: 1, 1, 2, 3, 5, 8
        - This is the Fibonacci sequence where each number is the sum of the two preceding numbers:
          - 1 + 1 = 2
          - 1 + 2 = 3
          - 2 + 3 = 5
          - 3 + 5 = 8
          - Therefore, the next number is 5 + 8 = 13
      
        Hence, the next term in the series is 13.`
      },
      {
        id: 9,
        template: "Complete the series: 10, 20, 40, 80, ?",
        variables: {},
        correctAnswerFormula: "160",
        optionsFormula: [
          "120",
          "140",
          "160",
          "180"
        ],
        explanationTemplate: `To complete the series, observe the pattern:
      
        - The sequence is: 10, 20, 40, 80
        - Each number is multiplied by 2 to get the next number in the series.
      
        Therefore, the next number after 80 is 80 * 2 = 160.
      
        Hence, the number that completes the series is 160.`
      },
      {
        id: 10,
        template: "Find the next number: 3, 9, 27, 81, ?",
        variables: {},
        correctAnswerFormula: "243",
        optionsFormula: [
          "162",
          "216",
          "243",
          "324"
        ],
        explanationTemplate: `To find the next number, observe the pattern:
      
        - The sequence is: 3, 9, 27, 81
        - Each number is multiplied by 3 to get the next number in the series.
      
        Therefore, the next number after 81 is 81 * 3 = 243.
      
        Hence, the next number in the series is 243.`
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
        template: "Statement: The company reported a 20% increase in profits this year.\nJudgement: The company will continue to grow at the same rate next year.",
        variables: {},
        correctAnswerFormula: "Cannot be determined",
        optionsFormula: [
          "Yes",
          "No",
          "Cannot be determined"
        ],
        explanationTemplate: `The statement indicates that the company experienced a 20% increase in profits this year, but it does not provide information about future performance. The judgement that the company will continue to grow at the same rate next year is speculative and cannot be confirmed based on the given information.
      
        Therefore, the correct answer is "Cannot be determined."`
      },
      {
        id: 2,
        template: "Statement: The new policy has reduced the number of traffic accidents.\nJudgement: The policy is effective in improving road safety.",
        variables: {},
        correctAnswerFormula: "Yes",
        optionsFormula: [
          "Yes",
          "No",
          "Cannot be determined"
        ],
        explanationTemplate: `The statement indicates that the new policy has led to a reduction in the number of traffic accidents. This reduction suggests that the policy is having a positive impact on road safety. While further evidence could strengthen the conclusion, the observed reduction supports the judgement that the policy is effective in improving road safety.
      
        Therefore, the correct answer is "Yes."`
      },
      {
        id: 3,
        template: "Statement: The book received positive reviews from critics.\nJudgement: The book is a bestseller.",
        variables: {},
        correctAnswerFormula: "Cannot be determined",
        optionsFormula: [
          "Yes",
          "No",
          "Cannot be determined"
        ],
        explanationTemplate: `The statement indicates that the book received positive reviews from critics, but it does not provide information about the book's sales performance. Positive reviews do not necessarily imply that the book is a bestseller. Therefore, there is not enough information to determine if the book is a bestseller based on the given statement.
      
        Therefore, the correct answer is "Cannot be determined."`
      },
      {
        id: 4,
        template: "Statement: The restaurant has a five-star rating on a review website.\nJudgement: The restaurant offers excellent food and service.",
        variables: {},
        correctAnswerFormula: "Yes",
        optionsFormula: [
          "Yes",
          "No",
          "Cannot be determined"
        ],
        explanationTemplate: `A five-star rating on a review website generally indicates high praise from reviewers, suggesting that the restaurant offers excellent food and service. While individual experiences may vary, a five-star rating typically reflects overall positive feedback in these areas.
      
        Therefore, the correct answer is "Yes."`
      },
      {
        id: 5,
        template: "Statement: The candidate has a degree from a prestigious university.\nJudgement: The candidate is well-qualified for the job.",
        variables: {},
        correctAnswerFormula: "Cannot be determined",
        optionsFormula: [
          "Yes",
          "No",
          "Cannot be determined"
        ],
        explanationTemplate: `Having a degree from a prestigious university suggests that the candidate has received high-quality education, which can be an important factor in qualifications. However, being well-qualified for a job depends on additional factors such as relevant experience, skills, and specific job requirements. The statement alone does not provide enough information to fully determine if the candidate is well-qualified for the job.
      
        Therefore, the correct answer is "Cannot be determined."`
      }
      ,
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
        template: "Argument: All students who study hard get good grades. John studies hard. Therefore, John will get good grades.\nIs the argument valid?",
        variables: {},
        correctAnswerFormula: "Yes",
        optionsFormula: [
          "Yes",
          "No",
          "Cannot be determined"
        ],
        explanationTemplate: `The argument is valid because it follows the logical form of a syllogism:
        
        - Premise 1: All students who study hard get good grades.
        - Premise 2: John studies hard.
        - Conclusion: Therefore, John will get good grades.
      
        Since the premises logically support the conclusion, the argument is valid.
      
        Therefore, the correct answer is "Yes."`
      },
      {
        id: 2,
        template: "Argument: Some fruits are apples. All apples are sweet. Therefore, some fruits are sweet.\nIs the argument valid?",
        variables: {},
        correctAnswerFormula: "Yes",
        optionsFormula: [
          "Yes",
          "No",
          "Cannot be determined"
        ],
        explanationTemplate: `The argument is valid because it follows the logical structure of a syllogism:
      
        - Premise 1: Some fruits are apples.
        - Premise 2: All apples are sweet.
        - Conclusion: Therefore, some fruits are sweet.
      
        If some fruits are apples and all apples are sweet, it logically follows that at least some of those fruits (the apples) are sweet. Therefore, the argument is valid.
      
        Therefore, the correct answer is "Yes."`
      },
      {
        id: 3,
        template: "Argument: If it rains, the ground will be wet. It did not rain. Therefore, the ground is not wet.\nIs the argument valid?",
        variables: {},
        correctAnswerFormula: "No",
        optionsFormula: [
          "Yes",
          "No",
          "Cannot be determined"
        ],
        explanationTemplate: `The argument is not valid because it commits the fallacy of denying the antecedent:
      
        - Premise 1: If it rains, the ground will be wet.
        - Premise 2: It did not rain.
        - Conclusion: Therefore, the ground is not wet.
      
        The argument incorrectly assumes that the only way the ground could be wet is if it rains. However, there could be other reasons for the ground being wet (e.g., someone watering the garden). Therefore, the argument is not logically valid.
      
        Therefore, the correct answer is "No."`
      },
      {
        id: 4,
        template: "Argument: All cats are animals. Some animals are pets. Therefore, all cats are pets.\nIs the argument valid?",
        variables: {},
        correctAnswerFormula: "No",
        optionsFormula: [
          "Yes",
          "No",
          "Cannot be determined"
        ],
        explanationTemplate: `The argument is not valid because it commits the fallacy of affirming the consequent:
      
        - Premise 1: All cats are animals.
        - Premise 2: Some animals are pets.
        - Conclusion: Therefore, all cats are pets.
      
        The conclusion assumes that because some animals are pets, all cats must be pets, which is not logically supported by the premises. There could be cats that are not pets. Thus, the argument does not logically follow from the premises.
      
        Therefore, the correct answer is "No."`
      },
      {
        id: 5,
        template: "Argument: All birds can fly. Penguins are birds. Therefore, penguins can fly.\nIs the argument valid?",
        variables: {},
        correctAnswerFormula: "No",
        optionsFormula: [
          "Yes",
          "No",
          "Cannot be determined"
        ],
        explanationTemplate: `The argument is not valid because it is based on a false premise:
      
        - Premise 1: All birds can fly. (This premise is false, as not all birds can fly.)
        - Premise 2: Penguins are birds.
        - Conclusion: Therefore, penguins can fly.
      
        Even if penguins are birds, the claim that all birds can fly is incorrect. In reality, penguins cannot fly. Therefore, the argument does not logically follow from the premises.
      
        Therefore, the correct answer is "No."`
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
        template: "Statement: The company should invest in new technology to improve efficiency.\nAssumption: New technology will improve efficiency.",
        variables: {},
        correctAnswerFormula: "Yes",
        optionsFormula: [
          "Yes",
          "No",
          "Cannot be determined"
        ],
        explanationTemplate: `The assumption is that new technology will improve efficiency. For the statement to be valid, this assumption must hold true. The statement suggests investing in new technology with the expectation of improved efficiency. Therefore, the assumption that new technology will improve efficiency is necessary for the statement to make sense.
      
        Therefore, the correct answer is "Yes."`
      },
      {
        id: 2,
        template: "Statement: The government should reduce taxes to increase consumer spending.\nAssumption: Reducing taxes will increase consumer spending.",
        variables: {},
        correctAnswerFormula: "Yes",
        optionsFormula: [
          "Yes",
          "No",
          "Cannot be determined"
        ],
        explanationTemplate: `The assumption is that reducing taxes will lead to an increase in consumer spending. For the statement to be valid, this assumption must be true. The statement suggests that reducing taxes is a means to achieve higher consumer spending, so the assumption that reducing taxes will indeed increase consumer spending is necessary for the statement to be justified.
      
        Therefore, the correct answer is "Yes."`
      },
      {
        id: 3,
        template: "Statement: The school needs to hire more teachers to improve education quality.\nAssumption: Hiring more teachers will improve education quality.",
        variables: {},
        correctAnswerFormula: "Yes",
        optionsFormula: [
          "Yes",
          "No",
          "Cannot be determined"
        ],
        explanationTemplate: `The assumption is that hiring more teachers will lead to an improvement in education quality. For the statement to be valid, this assumption must be true. The statement implies that increasing the number of teachers is a method to enhance education quality, so the assumption that hiring more teachers will improve education quality is necessary for the statement to be valid.
      
        Therefore, the correct answer is "Yes."`
      },
      {
        id: 4,
        template: "Statement: The city should build more parks to promote healthy living.\nAssumption: Building more parks will promote healthy living.",
        variables: {},
        correctAnswerFormula: "Yes",
        optionsFormula: [
          "Yes",
          "No",
          "Cannot be determined"
        ],
        explanationTemplate: `The assumption is that building more parks will encourage or support healthy living. For the statement to be valid, this assumption must hold true. The statement suggests that constructing additional parks is a strategy to promote healthy living, so the assumption that building more parks will indeed lead to healthier lifestyles is essential for the statement's validity.
      
        Therefore, the correct answer is "Yes."`
      },
      {
        id: 5,
        template: "Statement: The restaurant should lower prices to attract more customers.\nAssumption: Lowering prices will attract more customers.",
        variables: {},
        correctAnswerFormula: "Yes",
        optionsFormula: [
          "Yes",
          "No",
          "Cannot be determined"
        ],
        explanationTemplate: `The assumption is that reducing prices will result in an increase in the number of customers. For the statement to be valid, this assumption must be true. The statement proposes lowering prices as a means to attract more customers, so the assumption that lowering prices will indeed lead to more customers is necessary for the statement to be justified.
      
        Therefore, the correct answer is "Yes."`
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
        template: "Problem: The company's sales have been declining for the past three quarters.\nCourse of Action: The company should conduct market research to identify the reasons for the decline.",
        variables: {},
        correctAnswerFormula: "Yes",
        optionsFormula: [
          "Yes",
          "No",
          "Cannot be determined"
        ],
        explanationTemplate: `The course of action suggests conducting market research to understand the reasons behind the declining sales. Given that the problem is a decline in sales, identifying the underlying reasons through market research is a relevant and appropriate action to address the issue. Therefore, the proposed course of action is sensible and justified.
      
        Therefore, the correct answer is "Yes."`
      },
      {
        id: 2,
        template: "Problem: The city has been experiencing heavy traffic congestion.\nCourse of Action: The city should invest in public transportation to reduce traffic.",
        variables: {},
        correctAnswerFormula: "Yes",
        optionsFormula: [
          "Yes",
          "No",
          "Cannot be determined"
        ],
        explanationTemplate: `The course of action suggests investing in public transportation as a solution to the problem of heavy traffic congestion. Improving public transportation can help reduce the number of vehicles on the road, which in turn may alleviate traffic congestion. Therefore, this action is a relevant and appropriate response to the problem.
      
        Therefore, the correct answer is "Yes."`
      },
      {
        id: 3,
        template: "Problem: The school is facing a shortage of teachers.\nCourse of Action: The school should increase salaries to attract more teachers.",
        variables: {},
        correctAnswerFormula: "Yes",
        optionsFormula: [
          "Yes",
          "No",
          "Cannot be determined"
        ],
        explanationTemplate: `The course of action suggests increasing salaries as a way to address the shortage of teachers. Higher salaries can be an effective incentive to attract more teachers. Therefore, this course of action is a relevant and appropriate response to the problem.
      
        Therefore, the correct answer is "Yes."`
      },
      {
        id: 4,
        template: "Problem: The restaurant has been receiving complaints about food quality.\nCourse of Action: The restaurant should improve food quality to satisfy customers.",
        variables: {},
        correctAnswerFormula: "Yes",
        optionsFormula: [
          "Yes",
          "No",
          "Cannot be determined"
        ],
        explanationTemplate: `The course of action suggests improving food quality as a response to complaints about it. Addressing the complaints by enhancing food quality is a relevant and appropriate measure to satisfy customers and resolve the issue.
      
        Therefore, the correct answer is "Yes."`
      },
      {
        id: 5,
        template: "Problem: The company's website has been experiencing frequent downtime.\nCourse of Action: The company should upgrade its server infrastructure to improve website reliability.",
        variables: {},
        correctAnswerFormula: "Yes",
        optionsFormula: [
          "Yes",
          "No",
          "Cannot be determined"
        ],
        explanationTemplate: `The course of action suggests upgrading server infrastructure to address frequent website downtime. Improving server infrastructure is a relevant and appropriate measure to enhance website reliability and reduce downtime.
      
        Therefore, the correct answer is "Yes."`
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
        template: "Statement: All dogs are animals.\nConclusion: All animals are dogs.",
        variables: {},
        correctAnswerFormula: "Conclusion does not follow",
        optionsFormula: [
          "Conclusion follows",
          "Conclusion does not follow"
        ],
        explanationTemplate: `The statement "All dogs are animals" indicates that dogs are a subset of animals, but it does not imply that all animals are dogs. The conclusion "All animals are dogs" does not follow logically from the statement.
      
        Therefore, the correct answer is "Conclusion does not follow."`
      },
      {
        id: 2,
        template: "Statement: Some fruits are apples.\nConclusion: Some apples are fruits.",
        variables: {},
        correctAnswerFormula: "Conclusion follows",
        optionsFormula: [
          "Conclusion follows",
          "Conclusion does not follow"
        ],
        explanationTemplate: `The statement "Some fruits are apples" indicates that there is an overlap between fruits and apples, meaning that some apples are indeed fruits. Therefore, the conclusion "Some apples are fruits" logically follows from the statement.
      
        Therefore, the correct answer is "Conclusion follows."`
      },
      {
        id: 3,
        template: "Statement: All cars are vehicles.\nConclusion: Some vehicles are cars.",
        variables: {},
        correctAnswerFormula: "Conclusion follows",
        optionsFormula: [
          "Conclusion follows",
          "Conclusion does not follow"
        ],
        explanationTemplate: `The statement "All cars are vehicles" means that cars are a subset of vehicles. This implies that there are some vehicles that are cars. Therefore, the conclusion "Some vehicles are cars" logically follows from the statement.
      
        Therefore, the correct answer is "Conclusion follows."`
      },
      {
        id: 4,
        template: "Statement: No cats are dogs.\nConclusion: No dogs are cats.",
        variables: {},
        correctAnswerFormula: "Conclusion follows",
        optionsFormula: [
          "Conclusion follows",
          "Conclusion does not follow"
        ],
        explanationTemplate: `The statement "No cats are dogs" means that there is no overlap between cats and dogs; they are entirely separate categories. Consequently, if no cats are dogs, it must also be true that no dogs are cats. This is the contrapositive of the original statement.
      
        Therefore, the correct answer is "Conclusion follows."`
      },
      {
        id: 5,
        template: "Statement: Some books are novels.\nConclusion: All novels are books.",
        variables: {},
        correctAnswerFormula: "Conclusion does not follow",
        optionsFormula: [
          "Conclusion follows",
          "Conclusion does not follow"
        ],
        explanationTemplate: `The statement "Some books are novels" means that there is an overlap between books and novels, but it does not provide information about the relationship of all novels to books. To conclude that "All novels are books" would require that every novel falls under the category of books, which is not supported by the initial statement.
      
        Therefore, the correct answer is "Conclusion does not follow."`
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
        template: "Event: It rained heavily last night.\nEffect: The streets are flooded.\nIs this a cause and effect relationship?",
        variables: {},
        correctAnswerFormula: "Yes",
        optionsFormula: [
          "Yes",
          "No"
        ],
        explanationTemplate: `
      To determine if there is a cause and effect relationship between the event and the effect, we need to consider whether the event directly leads to the effect. 
      
      In this case, the event is "It rained heavily last night," and the effect is "The streets are flooded." Heavy rain can indeed cause streets to become flooded, demonstrating a cause and effect relationship.
      
      Therefore, the correct answer is "Yes."
      `
      },
      {
        id: 2,
        template: "Event: The power went out.\nEffect: The refrigerator stopped working.\nIs this a cause and effect relationship?",
        variables: {},
        correctAnswerFormula: "Yes",
        optionsFormula: [
          "Yes",
          "No"
        ],
        explanationTemplate: `
      To determine if there is a cause and effect relationship between the event and the effect, we need to assess whether the event directly leads to the effect.
      
      In this case, the event is "The power went out," and the effect is "The refrigerator stopped working." When the power goes out, it causes electrical appliances, such as refrigerators, to stop functioning. This demonstrates a direct cause and effect relationship.
      
      Therefore, the correct answer is "Yes."
      `
      },
      {
        id: 3,
        template: "Event: He studied hard for the exam.\nEffect: He scored high marks.\nIs this a cause and effect relationship?",
        variables: {},
        correctAnswerFormula: "Yes",
        optionsFormula: [
          "Yes",
          "No"
        ],
        explanationTemplate: `
      To determine if there is a cause and effect relationship between the event and the effect, we need to assess whether the event directly leads to the effect.
      
      In this case, the event is "He studied hard for the exam," and the effect is "He scored high marks." Studying hard is generally known to improve performance and increase the likelihood of scoring high marks on an exam. This demonstrates a cause and effect relationship.
      
      Therefore, the correct answer is "Yes."
      `
      },
      {
        id: 4,
        template: "Event: She forgot her umbrella.\nEffect: She got wet in the rain.\nIs this a cause and effect relationship?",
        variables: {},
        correctAnswerFormula: "Yes",
        optionsFormula: [
          "Yes",
          "No"
        ],
        explanationTemplate: `
      To determine if there is a cause and effect relationship between the event and the effect, we need to assess whether the event directly leads to the effect.
      
      In this case, the event is "She forgot her umbrella," and the effect is "She got wet in the rain." Forgetting an umbrella in the rain typically leads to getting wet because the umbrella serves as protection from the rain.
      
      Therefore, the correct answer is "Yes."
      `
      },
      {
        id: 5,
        template: "Event: The company increased its marketing budget.\nEffect: Sales decreased.\nIs this a cause and effect relationship?",
        variables: {},
        correctAnswerFormula: "No",
        optionsFormula: [
          "Yes",
          "No"
        ],
        explanationTemplate: `
      To determine if there is a cause and effect relationship between the event and the effect, we need to assess whether the event directly leads to the effect.
      
      In this case, the event is "The company increased its marketing budget," and the effect is "Sales decreased." Typically, increasing a marketing budget is intended to boost sales, so a decrease in sales despite the increase in marketing budget suggests that there may be other factors at play or that the expected effect did not occur. 
      
      Therefore, the correct answer is "No."
      `
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
        template: "Event: The company increased its marketing budget.\nEffect: Sales decreased.\nIs this a cause and effect relationship?",
        variables: {},
        correctAnswerFormula: "No",
        optionsFormula: [
          "Yes",
          "No"
        ],
        explanationTemplate: `Increasing the marketing budget is generally intended to boost sales, not decrease them. If the effect is a decrease in sales, it suggests that there may be another factor at play or that the increased budget did not achieve its intended purpose. Therefore, this is not a straightforward cause and effect relationship.
      
        Therefore, the correct answer is "No".`
      },
      {
        id: 2,
        template: "Text: The movie depicts the impact of war on soldiers and their families.\nTheme: Courage.\nIs this the correct theme?",
        variables: {},
        correctAnswerFormula: "No",
        optionsFormula: [
          "Yes",
          "No"
        ],
        explanationTemplate: `The theme of a movie should accurately reflect its central message or underlying ideas. The provided text indicates that the movie focuses on the impact of war on soldiers and their families, which suggests themes such as trauma, loss, or resilience rather than courage alone.
      
        Therefore, the correct answer is "No."`
      },
      {
        id: 3,
        template: "Text: The poem explores the beauty of nature and the fleeting nature of time.\nTheme: Transience.\nIs this the correct theme?",
        variables: {},
        correctAnswerFormula: "Yes",
        optionsFormula: [
          "Yes",
          "No"
        ],
        explanationTemplate: `The theme of "Transience" refers to the impermanence and fleeting nature of life, which aligns well with the poem's exploration of the beauty of nature and the transient nature of time. Both elements—nature's beauty and the passage of time—support the theme of transience.
      
        Therefore, the correct answer is "Yes."`
      },
      {
        id: 4,
        template: "Text: The article discusses the importance of honesty in personal and professional relationships.\nTheme: Integrity.\nIs this the correct theme?",
        variables: {},
        correctAnswerFormula: "Yes",
        optionsFormula: [
          "Yes",
          "No"
        ],
        explanationTemplate: `The theme of "Integrity" encompasses the concept of honesty, which is crucial in both personal and professional relationships. Since the article highlights the significance of honesty, which is a core component of integrity, the theme is accurately represented.
      
        Therefore, the correct answer is "Yes."`
      },
      {
        id: 5,
        template: "Text: The novel portrays the struggles of an immigrant family adapting to a new country.\nTheme: Resilience.\nIs this the correct theme?",
        variables: {},
        correctAnswerFormula: "Yes",
        optionsFormula: [
          "Yes",
          "No"
        ],
        explanationTemplate: `The theme of "Resilience" is appropriate for a novel that depicts the challenges faced by an immigrant family adjusting to a new country. Resilience involves overcoming difficulties and adapting to change, which aligns with the struggles described in the novel.
      
        Therefore, the correct answer is "Yes."`
      },
    ],
  },
};

export default topicsData;
