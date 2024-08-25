const quantitativeTopic = {
  "time-and-work": {
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
    concepts: `
      <h1>Understanding the Concepts of Time and Work</h1>
    <p>Time and work problems develop when a given quantity of work must be completed in a specific length of time. There are different types of problems.</p>
    <ul>
        <li>Group efficiency problems</li>
        <li>Individual efficiency problems with people</li>
        <li>Individual efficiency problems with pipes and cisterns, with the notion of negative work included</li>
    </ul>
    <p>For the benefit of cross-material learnings, we shall use the phrase <strong>Time &amp; Work</strong> to refer to individual efficiency problems with people from now on.</p>
    <p>These sorts of problems can be addressed utilising two approaches:</p>
    <ol>
        <li>Fraction method or Unitary work Method</li>
        <li>LCM Method</li>
    </ol>
    <p>To have a better understanding of these concepts, let's look at an example and solve both of the following:</p>

    <h2>1. Fraction Method or Unitary Work Method</h2>
    <p>In this method, we will assume the total work to be 1 unit and calculate the individual efficiency in terms of fractions and solve the problem. Let's solve the above example problem by using the fraction method to understand it better.</p>
    <h3>Example Problem</h3>
    <p>Person A and B can do a piece of work in 20 and 30 days respectively. If both of them work together, in how many days will the work be completed?</p>
    <p><strong>Step 1:</strong> Assume the total work to be 1.</p>
    <p><strong>Step 2:</strong> Calculate the individual efficiencies of the given people.</p>
    <p>Here, Person A will complete the work in 20 days, so in 1 day he will do 1/20th of the total work.</p>
    <p>Person B will complete the work in 30 days, so in 1 day he will do 1/30th of the total work.</p>
    <p><strong>Step 3:</strong> Calculate the combined efficiency of both these people in a day.</p>
    <p>Here, Combined work done in 1 day = (1/20) + (1/30)</p>
    <p>After solving we get, Combined work done in 1 day = 1/12.</p>
    <p><strong>Step 4:</strong> Taking the inverse of work done in 1 day will give us the total time taken to complete the task.</p>
    <p>So, if both of them work together, work will be completed in 12 days.</p>

    <h2>2. LCM Method</h2>
    <p>In this method, we will assume the total work to be the LCM of the given numbers and calculate the individual efficiency in terms of integers and solve the problem. This will help us to solve the problem faster. Let's solve the above example problem by using the fraction method to understand it better.</p>
    <h3>Example Problem</h3>
    <p>Person A and B can do a piece of work in 20 and 30 days respectively. If both of them work together, in how many days will the work be completed?</p>
    <p><strong>Step 1:</strong> Assume the total work to be the LCM of 20 and 30, Here LCM = 60.</p>
    <p><strong>Step 2:</strong> Calculate the individual efficiencies of the given pipes with LCM as total work.</p>
    <p>Here, Person A will do the entire work (60 work) in 20 days, so in 1 day it will fill 60/20 of the tank = 3 work/day.</p>
    <p>Person B will do the entire work (60 work) in 30 days, so in 1 day it will fill 60/30 of the tank = 2 work/day.</p>
    <p><strong>Step 3:</strong> Calculate the combined efficiency of both the persons in a day.</p>
    <p>Here, Combined work done in 1 day = 3+2</p>
    <p>Solving these we get, Combined work done in 1 day = 5 work/day.</p>
    <p><strong>Step 4:</strong> Divide the total work by the work done in 1 day &rarr; 60/5 &rarr; 12 days.</p>
    <p>So, if both of them work together, work will be completed in 12 days.</p>
    <p>There can be several types of questions asked in Time and Work, and essentially all of them can be addressed by utilizing the aforementioned methods.</p>
    `,

    formulae: [
      {
        id: 1,
        toCalculate: "When two people are working on a task",
        formuales: "Total time taken to complete the work = ((XY)/Y+X)",
      },
      {
        id: 2,
        toCalculate: "When three people are working on a task	",
        formuales:
          "Total time taken to complete the work = (XYZ)/ (XY + YZ + ZX)",
      },
    ],
    practiceQuestions: [
      {
        id: 1,
        template:
          "A can complete a piece of work in {{A_days}} days, while B can complete the same work in {{B_days}} days. How long will it take for both A and B to complete the work together?",
        limits: {
          A_days: [8, 20],
          B_days: [10, 25],
        },
        correctAnswerFormula: "(A_days * B_days) / (A_days + B_days)",
        optionsFormula: [
          "(A_days * B_days) / (A_days + B_days) +1",
          "(A_days * B_days) / (A_days + B_days)",
          "(A_days * B_days) / (A_days + B_days) +3",
          "(A_days * B_days) / (A_days + B_days) +4",
        ],
        explanationTemplate:
          "To find out how long it will take for A and B to complete the work together, we use the formula for combined work: <br><br> 1/(1/{{A_days}} + 1/{{B_days}}). Substituting the given values, we get: <br> 1/(1/{{A_days}} + 1/{{B_days}}) = ({{A_days}} * {{B_days}}) / ({{A_days}} + {{B_days}}) = {{final_answer}} days.<br><br> Therefore, it will take {{final_answer}} days for A and B to complete the work together.<br><br>",
      },
      {
        id: 2,
        template:
          "A can complete a piece of work in {{A_days}} days, and B can complete the same work in {{B_days}} days. If they work together for {{work_days}} days, what fraction of the work is left?",
        limits: {
          A_days: [10, 18],
          B_days: [14, 24],
          work_days: [3, 7],
        },
        correctAnswerFormula: "1 - (work_days / A_days + work_days / B_days)",
        optionsFormula: [
          "1 - (work_days / A_days + work_days / B_days) +1",
          "1 - (work_days / A_days + work_days / B_days)",
          "1 - (work_days / A_days + work_days / B_days) +3",
          "1 - (work_days / A_days + work_days / B_days) +4",
        ],
        explanationTemplate:
          "To determine the fraction of work left after A and B work together for {{work_days}} days, we first find their combined work rate. A's work rate is 1/{{A_days}} of the work per day, and B's work rate is 1/{{B_days}} of the work per day.<br><br> Combined, A and B can complete (1/{{A_days}} + 1/{{B_days}}) of the work per day.<br><br> In {{work_days}} days, they can complete {{work_days}} * (1/{{A_days}} + 1/{{B_days}}) of the work.<br><br> The fraction of the work left is therefore: 1 - ({{work_days}} * (1/{{A_days}} + 1/{{B_days}})) = {{final_answer}}.<br><br> Therefore, the fraction of work left is {{final_answer}}.<br><br>",
      },
      {
        id: 3,
        template:
          "A and B can do a piece of work in {{AB_days}} days, B and C can do the same work in {{BC_days}} days, and A and C can do it in {{AC_days}} days. How long will it take for A, B, and C to complete the work together?",
        limits: {
          AB_days: [6, 14],
          BC_days: [8, 16],
          AC_days: [10, 18],
        },
        correctAnswerFormula: "1 / (1 / AB_days + 1 / BC_days + 1 / AC_days)",
        optionsFormula: [
          "1 / (1 / AB_days + 1 / BC_days + 1 / AC_days) +1",
          "1 / (1 / AB_days + 1 / BC_days + 1 / AC_days)",
          "1 / (1 / AB_days + 1 / BC_days + 1 / AC_days) +3",
          "1 / (1 / AB_days + 1 / BC_days + 1 / AC_days) +4",
        ],
        explanationTemplate:
          "To determine how long it will take for A, B, and C to complete the work together, we need to find their combined work rate.<br><br> The work rate for A and B together is 1/{{AB_days}} of the work per day.<br> The work rate for B and C together is 1/{{BC_days}} of the work per day.<br> The work rate for A and C together is 1/{{AC_days}} of the work per day.<br><br> Using the principle of inclusion-exclusion, the combined work rate of A, B, and C is given by:<br> 1/(1/{{AB_days}} + 1/{{BC_days}} + 1/{{AC_days}}).<br><br> So, A, B, and C together can complete the work in 1 / (1/{{AB_days}} + 1/{{BC_days}} + 1/{{AC_days}}) = {{final_answer}} days.<br><br> Therefore, A, B, and C together can complete the work in {{final_answer}} days.<br><br>",
      },
    ],
  },

  "time-speed-and-distance": {
    description:
      "Time and distance problems involve calculating the time required to travel a certain distance at a given speed, or vice versa. These problems often require understanding the relationship between speed, time, and distance.",
    realLife: [
      {
        id: 1,
        title: "Travel Planning",
        content:
          "Calculating travel times and distances for planning trips or journeys.",
      },
      {
        id: 2,
        title: "Vehicle Maintenance",
        content:
          "Estimating time to complete maintenance tasks based on distance traveled.",
      },
      {
        id: 3,
        title: "Sports",
        content:
          "Understanding the time required to complete a race or the distance covered in a certain time during athletic events.",
      },
    ],
    concepts: `

    <h1>Understanding the Concepts of Time, Speed, and Distance</h1>
    <p>The fundamental concepts of Time, Speed, and Distance can be properly represented using the diagram below.</p>
    <img src="https://static.placementpreparation.io/concepts/time-speed-and-distance-concepts.png" style=\"width:500px; height:300px;\"/><br>
    <h2>Time, Speed, and Distance Concepts</h2>
    <p>Let us understand the meaning of these concepts/terms one by one:</p>
    
    <h3>1. Speed</h3>
    <p>Speed is a motion concept that describes how slowly or swiftly an item moves. Speed is defined as the distance divided by Time. Speed is measured in m/s, km/hr</p>
    <p><strong>Speed = Distance / Time</strong></p>
    
    <h3>2. Time</h3>
    <p>Time can be defined in physics by its unit of measurement - time is the reading on a clock. In classical, non-relativistic physics, it is a scalar quantity and measured in seconds (s), minutes (min), and hours (hr).</p>
    
    <h3>3. Distance</h3>
    <p>Distance refers to an object's total movement, independent of direction. The amount of area covered by an item, independent of its beginning or finishing location, can be described as distance. It is measured in Metre (m), kilometre (km), miles, and feet.</p>
    
    <h2>Concept of Proportionality</h2>
    <p>To address problems faster, we must also comprehend the concept of proportionality between these elements.</p>
    
    <h3>1. Direct Proportion</h3>
    <p>The term 'direct proportion' refers to the direct link between two quantities. When one quantity rises, the other rises as well, and vice-versa. As a result, a direct proportion is expressed as y ∝ x.</p>
    <p><strong>For Example:</strong> When the speed of a car is raised, it travels a greater distance in a given amount of time.</p>
    <ul>
        <li>Time &amp; Distance are directly proportional</li>
        <li>Speed &amp; Distance are directly proportional</li>
    </ul>
    
    <h3>2. Inverse Proportion</h3>
    <p>Inverse proportion explains the connection between two quantities in which one rises while the other falls and vice-versa. As a result, an inverse proportion is expressed as y ∝ 1/x.</p>
    <p><strong>For Example:</strong> If the speed of a vehicle is increased, it will cover a fixed distance in less time.</p>
    <ul>
        <li>Time &amp; Speed are Inversely proportional</li>
    </ul>
    
    <h2>Subconcepts of Time, Speed, and Distance</h2>
    <p>Subconcepts of Time, Speed, and Distance include:</p>
    <ul>
        <li>Unit Conversion</li>
        <li>Average Speed</li>
        <li>Concept of Relative Speed</li>
        <li>Effective Speed Concepts</li>
    </ul>
    
    <h3>1. Unit Conversion</h3>
    <p>We are required to convert all the parameters into a single unit in some of the Time, Speed, and Distance problems where speed is given in one unit and distance is provided in another.</p>
    <p>The following conversion formula can assist you in accomplishing this:</p>
    <p><strong>Speed conversion from km/hr to m/s and vice-versa</strong></p>
    <p>1 kilometre equals 1000 m, and 1 hour equals 3600 seconds.<br>
    Therefore, 1 km/hr = 1000m/3600s = 5/18 m/s.</p>
    <p><strong>So, to translate the speed from kmph to m/s</strong></p>
    <ul>
        <li>Multiply the given speed with 5/18</li>
    </ul>
    <p><strong>And to convert the speed from m/s to kmph</strong></p>
    <ul>
        <li>Multiply the given speed with 18/5</li>
    </ul>
    
    <h3>2. Average Speed</h3>
    <p>The ratio of total distance travelled to total time taken is described as average speed.</p>
    <p><strong>Total distance / Total time taken = Average speed</strong></p>
    <p><strong>Shortcut formula:</strong> We can use the following shortcut formula to get the average speed when two different speeds are provided but the distance travelled in both segments is identical.</p>
    <p><strong>Average speed = 2xy/(x+y)</strong><br>
    where x and y represent the two speeds.</p>
    
    <h3>Example Problem</h3>
    <p>A person travels from X to Y at a speed of 20 kmph and returns at a speed of 30 kmph. What is his average speed for the entire trip?</p>
    <p>We can utilise the aforementioned shorthand calculation:</p>
    <p><strong>Average Speed: 2xy/(x+y)</strong></p>
    <p>⇒ 2*20*30 / (20+30)</p>
    <p>The answer is 24 kmph.</p>
    
    <h3>3. Concept of Relative Speed (Problems on Trains)</h3>
    <p>This concept is frequently used in train-related problems. The concept of relative speeds can be applied when two things are heading toward each other or in the same direction, one after the other.</p>
    <p><strong>In terms of relative speed:</strong></p>
    <ul>
        <li>If two objects are moving from opposing directions towards each other, always add their speeds.</li>
        <li>When two objects are moving in the same direction, following each other, always subtract their speeds.</li>
    </ul>
    <p>We'll learn more about this in the Problems on Trains concepts.</p>
    
    <h3>4. Effective Speed Concepts (Boats &amp; Streams)</h3>
    <p>This concept is often used in boats and streams. The effective speed is the net speed at which the thing moves in relation to the speed of the other moving object.</p>
    <p><strong>Downstream or Downhill</strong> refers to when both objects are flowing in the same direction, either with the water or with gravity, as when descending down a staircase.</p>
    <p>Likewise, if both items are travelling in opposing directions, or moving against the flow of water or against gravity, such as climbing a flight of stairs, it is referred to as <strong>upstream or uphill.</strong></p>
    <p>This can be effectively summarised using the formula:</p>
    <p><strong>Downstream Speed = Speed of the Boat + Speed of the Stream/Current/Water</strong></p>
    <p><strong>Upstream Speed = Speed of the Boat - Speed of the Stream/Current/Water</strong></p>
      `,
    formulae: [
      {
        id: 1,
        toCalculate: "Speed Fundamental Formula",
        formuales: "Distance / Time",
      },
      {
        id: 2,
        toCalculate: "Unit Conversion of X kmph to m/s",
        formuales: "X * 5/18",
      },
      {
        id: 3,
        toCalculate: "Unit Conversion of X m/s to kmph",
        formuales: "X * 18/5",
      },
      {
        id: 4,
        toCalculate:
          "Average Speed when unequal distances and many speeds are given",
        formuales: "Total Distance / Total Time",
      },
      {
        id: 5,
        toCalculate:
          "Average Speed when two equal distances and two different speeds are given",
        formuales: "2xy/(x+y)",
      },
      {
        id: 6,
        toCalculate:
          "Relative Speed Formula when two objects are traveling in opposite directions",
        formuales: "X + Y",
      },
      {
        id: 7,
        toCalculate:
          "Relative Speed Formula when two objects are traveling in the same direction",
        formuales: "X - Y",
      },
      {
        id: 8,
        toCalculate:
          "Upstream Speed (Effective Speed Formula when two objects are traveling in opposite directions)",
        formuales: "SB - SW",
      },
      {
        id: 9,
        toCalculate:
          "Downstream Speed (Relative Speed Formula when two objects are traveling in the same direction)",
        formuales: "SB + SW",
      },
    ],
    practiceQuestions: [
      {
        id: 1,
        template:
          "A person travels from A to B at a speed of {{speed}} km/h and returns at a speed of {{returnSpeed}} km/h. If the total time taken for the journey is {{totalTime}} hours, find the distance between A and B.",
        limits: {
          speed: [40, 80],
          returnSpeed: [30, 70],
          totalTime: [5, 9],
        },
        correctAnswerFormula:
          "(totalTime * speed * returnSpeed) / (speed + returnSpeed)",
        optionsFormula: [
          "(totalTime * speed * returnSpeed) / (speed + returnSpeed)",
          "(totalTime * speed * returnSpeed) / (speed - returnSpeed)",
          "(totalTime * speed + returnSpeed) / (speed + returnSpeed)",
          "(totalTime * speed + returnSpeed) / (speed - returnSpeed)",
        ],
        explanationTemplate:
          "To find the distance between A and B, we use the formula for time, speed, and distance:<br><br> - Let the distance be D km.<br><br> 1. Time taken to travel from A to B at a speed of {{speed}} km/h is D/{{speed}} hours.<br> 2. Time taken to return from B to A at a speed of {{returnSpeed}} km/h is D/{{returnSpeed}} hours.<br><br> The total time for the journey is the sum of these two times:<br><br> (D / {{speed}}) + (D / {{returnSpeed}}) = {{totalTime}}<br><br> Simplifying, we get:<br><br> D (1/{{speed}} + 1/{{returnSpeed}}) = {{totalTime}}<br><br> Therefore, D = ({{totalTime}} * {{speed}} * {{returnSpeed}}) / ({{speed}} + {{returnSpeed}})<br><br> Using the given values, we get:<br><br> D = ({{totalTime}} * {{speed}} * {{returnSpeed}}) / ({{speed}} + {{returnSpeed}}) = {{final_answer}} km.<br><br>",
      },
      {
        id: 2,
        template:
          "A man covers the first half of the journey at the speed of {{speed1}} km/h and the remaining at the speed of {{speed2}} km/h. Find his average speed.",
        limits: {
          speed1: [30, 70],
          speed2: [50, 90],
        },
        correctAnswerFormula: "(2 * speed1 * speed2) / (speed1 + speed2)",
        optionsFormula: [
          "(2 * speed1 * speed2) / (speed1 + speed2)",
          "(speed1 + speed2) / 2",
          "(speed1 * speed2) / (speed1 + speed2)",
          "((speed1 + speed2) * 2) / (speed1 + speed2)",
        ],
        explanationTemplate:
          "To find the average speed for the entire journey, we use the formula for average speed when distances are the same:<br><br> Average Speed = (2 * speed1 * speed2) / (speed1 + speed2)<br><br> Where:<br> - speed1 is the speed for the first half of the journey: {{speed1}} km/h<br> - speed2 is the speed for the second half of the journey: {{speed2}} km/h<br><br> Substituting the given values, we get:<br><br> Average Speed = (2 * {{speed1}} * {{speed2}}) / ({{speed1}} + {{speed2}}) = {{final_answer}} km/h.<br><br> Therefore, the man's average speed for the entire journey is {{final_answer}} km/h.<br><br>",
      },
      {
        id: 3,
        template:
          "A man completes a journey in {{total_time}} hours. He travels the first half of the journey at the rate of {{speed1}} km/hr and the second half at the rate of {{speed2}} km/hr. Find the total journey in km.",
        limits: {
          total_time: [8, 15],
          speed1: [18, 27],
          speed2: [20, 32],
        },
        correctAnswerFormula:
          "total_time * (2 * speed1 * speed2) / (speed1 + speed2)",
        optionsFormula: [
          "total_time * (2 * speed1 * speed2) / (speed1 + speed2)",
          "(total_time * speed1 * speed2) / (speed1 + speed2)",
          "(total_time * (speed1 + speed2)) / 2",
          "(total_time * (speed1 + speed2)) / (speed1 * speed2)",
        ],
        explanationTemplate:
          "To find the total journey in km, we use the concept of average speed when the journey is completed in a given time:<br><br> Total Distance = Total Time × Average Speed<br><br> Where:<br> - Average Speed = (2 * speed1 * speed2) / (speed1 + speed2)<br> - speed1 is the speed for the first half of the journey: {{speed1}} km/h<br> - speed2 is the speed for the second half of the journey: {{speed2}} km/h<br><br> Substituting the given values, we get:<br><br> Average Speed = (2 * {{speed1}} * {{speed2}}) / ({{speed1}} + {{speed2}})<br><br> Total Distance = {{total_time}} hours × Average Speed<br><br> Therefore, the total journey in km is:<br> Total Distance = {{total_time}} × (2 * {{speed1}} * {{speed2}}) / ({{speed1}} + {{speed2}}) = {{final_answer}} km.<br><br> Hence, the total journey is {{final_answer}} km.<br><br>",
      },
    ],
  },

  "number-series": {
    description:
      "Number series problems involve sequences of numbers that follow a specific mathematical pattern or rule. The task is to identify the pattern and determine the next number in the series. These problems test numerical reasoning, pattern recognition, and mathematical skills. Patterns can be based on arithmetic operations, geometric progressions, or other mathematical relationships.",
    realLife: [
      {
        id: 1,
        title: "Financial Projections",
        content:
          "Predicting future financial performance based on historical data trends.",
      },
      {
        id: 2,
        title: "Inventory Management",
        content:
          "Forecasting inventory requirements by analyzing sales data patterns.",
      },
      {
        id: 3,
        title: "Climate Studies",
        content:
          "Analyzing temperature or precipitation data over time to predict future trends.",
      },
    ],
    concepts: {
      des: "Understanding number series problems requires recognizing common patterns and mathematical relationships in sequences.",
      subConcepts: [
        {
          id: 1,
          title: "Arithmetic Progression",
          content:
            "A sequence where the difference between consecutive terms is constant.",
        },
        {
          id: 2,
          title: "Geometric Progression",
          content:
            "A sequence where each term is found by multiplying the previous term by a fixed, non-zero number.",
        },
        {
          id: 3,
          title: "Fibonacci Series",
          content:
            "A sequence where each term is the sum of the two preceding ones.",
        },
      ],
    },
    formulae:
      "Various patterns and rules depending on the series type, such as the common difference in arithmetic progression or the common ratio in geometric progression.",
    practiceQuestions: [
      {
        id: 1,
        template: "Identify the next number in the series: {{series}}.",
        variables: {
          series: [
            [2, 4, 6, 8, 10],
            [3, 9, 27, 81, 243],
            [1, 1, 2, 3, 5, 8],
          ],
        },
        correctAnswerFormula: "next term based on identified pattern",
        optionsFormula: [
          "correct answer",
          "correct answer + 2",
          "correct answer - 2",
          "correct answer + 5",
        ],
        explanationTemplate: `To find the next number in the series, we first identify the pattern:<br><br>
  
  Series: {{series}}<br><br>
  
  Identified Pattern: {{pattern_description}}<br><br>
  
  The next number in the series is {{final_answer}}.<br><br>
`,
      },
      {
        id: 2,
        template: "Find the missing number in the series: {{series}}.",
        variables: {
          series: [
            [5, 10, "__", 20, 25],
            [2, 6, 18, "__", 162],
            [1, 4, 9, "__", 25],
          ],
        },
        correctAnswerFormula: "missing term based on identified pattern",
        optionsFormula: [
          "correct answer",
          "correct answer + 1",
          "correct answer - 1",
          "correct answer + 3",
        ],
        explanationTemplate: `To find the missing number in the series, we first identify the pattern:<br><br>
  
  Series: {{series}}<br><br>
  
  Identified Pattern: {{pattern_description}}<br><br>
  
  The missing number in the series is {{final_answer}}.<br><br>
`,
      },
      {
        id: 3,
        template:
          "Determine the rule governing the series and find the next number: {{series}}.",
        variables: {
          series: [
            [7, 14, 28, 56, 112],
            [5, 15, 45, 135, 405],
            [8, 16, 24, 32, 40],
          ],
        },
        correctAnswerFormula: "next term based on identified rule",
        optionsFormula: [
          "correct answer",
          "correct answer + 4",
          "correct answer - 4",
          "correct answer + 8",
        ],
        explanationTemplate: `To find the next number in the series, we determine the rule governing the series:<br><br>
  
  Series: {{series}}<br><br>
  
  Identified Rule: {{rule_description}}<br><br>
  
  The next number in the series is {{final_answer}}.<br><br>
`,
      },
    ],
  },

  percentages: {
    description:
      "Percentage problems involve calculating the part of a whole represented by a certain percentage, or determining what percentage one number is of another.",
    realLife: [
      {
        id: 1,
        title: "Discount Calculation",
        content:
          "Determining the final price after applying a discount percentage to an item's price.",
      },
      {
        id: 2,
        title: "Interest Calculation",
        content:
          "Calculating interest earned or paid on loans and investments based on a percentage rate.",
      },
      {
        id: 3,
        title: "Grade Calculation",
        content:
          "Figuring out what percentage of the total possible marks a student has scored.",
      },
    ],
    concepts: `
      <h1>Understanding the Concepts of Percentage</h1>
    <p>Percentages are an essential and high-weightage concept in aptitude-based assessments. Many problems in other aptitude topics, like Profit and Loss, Simple Interest, Compound Interest, and Data Interpretation, can be addressed with a good understanding of percentage.</p>
    <p>There are three main types of problems or concepts in percentage; they are:</p>
    <ul>
        <li>Calculation Based</li>
        <li>% Increase Decrease</li>
        <li>% Successive Increase Decrease</li>
    </ul>
    <p>We will understand each of these with an example:</p>

    <h2>1. Calculation Based</h2>
    <p>These are problems that need direct calculations. They are commonly found in simplification problems. Understanding these concepts will help us address data interpretation challenges and perform real-world calculations.</p>
    <p>Sample questions will look like these: Find 33.33% of 24 + 25% of 32.</p>
    <p>These difficulties are readily handled by understanding percentage to a fractional value, approximation, and elimination approaches utilizing digital sums. (These approaches will not work for all problems.)</p>

    <h3>Fractional Value Techniques</h3>
    <p>Certain percentage values can be replaced with fractions, which will enable us to solve the problems faster.</p>
    <p>In the above example:</p>
    <p>33.33% can be written as <sup>1</sup>/<sub>3</sub> of a number,</p>
    <p>25% can be written as <sup>1</sup>/<sub>4</sub> of a number.</p>
    <p>So applying these, we will be able to rewrite the problem as:</p>
    <p>(<sup>1</sup>/<sub>3</sub> * 24) + (<sup>1</sup>/<sub>4</sub> * 32),</p>
    <p>which can be easily simplified as 8 + 8, and the answer is 16.</p>
    <p>So it's advisable to remember standard fractional values of percentages to solve some problems faster.</p>
    <p>Given below is a standard percentage to fractions table to remember:</p>
    <img src="https://static.placementpreparation.io/concepts/percentage-to-fraction-table.png" style=\"width:550px; height:450px;\"><br>
    <p><strong>percentage to fraction table</strong></p>

    <p>Approximation and elimination procedures are rational thinking techniques for guessing answer choices when they are distant from one another.</p>
    <p>In the above example, for 33.33% of 24, we can roughly guess:</p>
    <p>10% of 24 as 2.4,</p>
    <p>And 30% will be 7.2,</p>
    <p>And 33.33% of 24 will be slightly more than 7.2, so we can take 8 for ease of calculation.</p>

    <h2>2. % Increase Decrease</h2>
    <p>In these types of concepts, one percentage increase will be given, and a corresponding percentage decrease will be asked, or vice-versa. Both the parameters will be inversely proportional to each other.</p>
    <h3>Example Problem</h3>
    <p>Arvind has 25% more rupees than Pinku. How much percent less rupees does Pinku have as compared to Arvind?</p>
    <p>These types of problems can be solved by learning percentage change concepts.</p>
    <p>General percentage change formula:</p>
    <p><strong>Percentage change = [(change in value) / (base value)] × 100</strong></p>
    <p>In the above example, let's assume that Pinku has Rs. 100, so we know Arvind will have Rs. 125 from the given data.</p>
    <p>% change = [(125 - 100) / 125] × 100</p>
    <p>We get = [25 / 125] × 100 ⇒ 20% is the answer.</p>

    <h2>3. % Successive Increase Decrease</h2>
    <p>In these types of multiple percentage increases/decreases, values will be given, and questions will be asked based on the percentage change.</p>
    <h3>Example Problem</h3>
    <p>In an election between two candidates, 20% of the votes were invalid, and one got 55% of the total valid votes. If the total number of votes was 7500, the number of valid votes that the other candidate got was?</p>
    <p>These types of problems can be solved using many approaches, but a simple formula that will help us solve these problems is given below:</p>
    <p>If the value of an object x is successively changed by a%, b%, and then by c%, the final value is x (1 ± a/100) (1 ± b/100) (1 ± c/100),</p>
    <p>where:</p>
    <ul>
        <li>positive sign (+) indicates an increment</li>
        <li>negative sign (-) indicates a decrement.</li>
    </ul>
    <p>Applying the above in the example, we get:</p>
    <p>= 7500 × (1 - (20 / 100)) × (1 - (55 / 100))</p>
    <p>Or simply we can write this as:</p>
    <p>= 7500 × (80 / 100) × (45 / 100)</p>
    <p>= 2700 is the answer.</p>

    <p>There can be several types of questions asked in Time and Work, and essentially all of them can be addressed by utilizing the aforementioned methods.</p>
    `,
    formulae: [
      {
        id: 1,
        toCalculate: "x% of y",
        formuales: "(x/100)*y",
      },
      {
        id: 2,
        toCalculate: "x is what % of y",
        formuales: "(x/y)*100",
      },
      {
        id: 3,
        toCalculate: "Percentage change",
        formuales: "[(change in value)/(base value)]*100",
      },
      {
        id: 4,
        toCalculate:
          "Final value in Percentage Successive Increase/Decrease concepts",
        formuales:
          "X (1 ± a/100) (1 ± b/100) (1 ± c/100),\nWhere X is the initial value",
      },
    ],
    practiceQuestions: [
      {
        id: 1,
        template: "What is {{percentage}}% of {{whole}}?",
        limits: {
          percentage: [1, 100],
          whole: [50, 1000],
        },
        correctAnswerFormula: "(percentage * whole) / 100",
        optionsFormula: [
          "(percentage * whole) / 100",
          "(percentage * whole) / 100 + 10",
          "(percentage * whole) / 100 - 10",
          "(percentage * whole) / 100 + 20",
        ],
        explanationTemplate:
          "To find {{percentage}}% of {{whole}}, we use the formula:<br><br> Part = (Percentage × Whole) / 100.<br><br> Substituting the given values, we get:<br><br> Part = ({{percentage}} × {{whole}}) / 100 = {{final_answer}}.<br><br> Therefore, {{percentage}}% of {{whole}} is {{final_answer}}.<br><br>",
      },
      {
        id: 2,
        template: "{{part}} is what percentage of {{whole}}?",
        limits: {
          part: [10, 100],
          whole: [50, 1000],
        },
        correctAnswerFormula: "(part / whole) * 100",
        optionsFormula: [
          "(part / whole) * 100",
          "(part / whole) * 100 + 5",
          "(part / whole) * 100 - 5",
          "(part / whole) * 100 + 10",
        ],
        explanationTemplate:
          "To find what percentage {{part}} is of {{whole}}, we use the formula:<br><br> Percentage = (Part / Whole) × 100.<br><br> Substituting the given values, we get:<br><br> Percentage = ({{part}} / {{whole}}) × 100 = {{final_answer}}%.<br><br> Therefore, {{part}} is {{final_answer}}% of {{whole}}.<br><br>",
      },
    ],
  },

  "ratios-and-proportions": {
    description:
      "Proportion problems involve determining if two ratios are equivalent, or finding a missing value in a proportion.",
    realLife: [
      {
        id: 1,
        title: "Map Reading",
        content:
          "Using a map scale to find actual distances between locations.",
      },
      {
        id: 2,
        title: "Cooking",
        content:
          "Adjusting recipes based on serving sizes using proportional relationships.",
      },
      {
        id: 3,
        title: "Construction",
        content:
          "Scaling up or down measurements in construction projects to maintain proportions.",
      },
    ],
    concepts: `
      <h1>Understanding the Concepts of Ratio and Proportion</h1>
    <p>You can now understand the fundamental concepts of Ratio and Proportion.</p>
    <p>Listed below are the different concepts of the topic:</p>
    <ul>
        <li>Ratio</li>
        <li>Proportion</li>
        <li>Concept of Proportionality</li>
    </ul>

    <h2>1. Ratio</h2>
    <p>A ratio is a comparison of two quantities obtained by dividing the first by the second.</p>
    <p>Ratio can be properly represented using the diagram below:</p>
    <img src="https://static.placementpreparation.io/concepts/ratio-concept-and-formula.png" style=\"width:650px; height:300px;\"/><br>
    <p>If <i>a</i> and <i>b</i> are two values of the same kind and with the same units, and <i>b</i> is not equal to zero, then the quotient <i>a/b</i> is known as the ratio between <i>a</i> and <i>b</i>.</p>
    <p>The colon sign is used to denote ratios (:). This means that the ratio <i>a/b</i> has no unit and can be expressed as <i>a: b</i>.</p>

    <h2>2. Proportion</h2>
    <p>The equality of two ratios is referred to as proportion. Two equal ratios are always proportional. Proportions are represented by the symbol (::) and assist us in solving for unknown quantities.</p>
    <img src="https://static.placementpreparation.io/concepts/ratio-and-proportion-concept-and-formula.png" style=\"width:650px; height:350px;\"/>
    <p>To put it another way, proportion is an equation or statement that shows that two ratios or fractions are equivalent.</p>
    <p>If <i>a: b</i> = <i>c: d</i>, four non-zero values, <i>a</i>, <i>b</i>, <i>c</i>, and <i>d</i>, are said to be in proportion.</p>
    <h3>For Example</h3>
    <p>3 : 5 and 15 : 25</p>
    <p>In this case:</p>
    <ul>
        <li>3:5 can be written as 3/5 = 0.6</li>
        <li>15:25 can be written as 15/25 = 3/5 = 0.6</li>
    </ul>
    <p>Because both ratios are equal, we can conclude that they are proportional.</p>

    <h2>3. Concept of Proportionality</h2>
    <p>To address problems faster, we must also comprehend the concept of proportionality between these elements.</p>

    <h3>1. Direct Proportion</h3>
    <p>The term 'direct proportion' refers to the direct link between two quantities. When one quantity rises, the other rises as well, and vice-versa. As a result, a direct proportion is expressed as <i>y ∝ x</i>.</p>
    <h4>For Example</h4>
    <p>When the speed of a car is raised, it travels a greater distance in a given amount of time.</p>
    <ul>
        <li>Time & Distance are directly proportional</li>
        <li>Speed & Distance are directly proportional</li>
    </ul>

    <h3>2. Inverse Proportion</h3>
    <p>Inverse proportion explains the connection between two quantities in which one rises while the other falls and vice-versa. As a result, an inverse proportion is expressed as <i>y ∝ 1/x</i>.</p>
    <h4>For Example</h4>
    <p>If the speed of a vehicle is increased, it will cover a fixed distance in less time.</p>
    <ul>
        <li>Time & Speed are inversely proportional</li>
    </ul>
    `,
    formulae: [
      {
        id: 1,
        toCalculate: "Ratio Formula For any two given quantities say x and y",
        formuales: "x:y ===> x/y",
      },
      {
        id: 2,
        toCalculate: "Proportion Formula Consider two ratios a: b and c: d",
        formuales: "a: b::c:d ===> a/b = c/d",
      },
    ],
    practiceQuestions: [
      {
        id: 1,
        template: "If {{a}}/{{b}} = {{c}}/x, what is the value of x?",
        limits: {
          a: [1, 10],
          b: [2, 20],
          c: [3, 30],
        },
        correctAnswerFormula: "(c * b) / a",
        optionsFormula: [
          "(c * b) / a",
          "(a * b) / c",
          "(c * a) / b",
          "(b * c) / a + 2",
        ],
        explanationTemplate:
          "To find the value of x, we use the cross multiplication method:<br><br> a/b = c/x ⟹ a * x = b * c ⟹ x = (b * c) / a.<br><br> Substituting the given values, we get:<br><br> x = ({{b}} * {{c}}) / {{a}} = {{final_answer}}.<br><br> Therefore, the value of x is {{final_answer}}.<br><br>",
      },
      {
        id: 2,
        template:
          "The ratio of {{a}} to {{b}} is the same as {{c}} to {{d}}. If {{a}} = {{givenA}} and {{b}} = {{givenB}}, what is {{d}}?",
        limits: {
          a: [1, 10],
          b: [2, 20],
          c: [3, 30],
          d: [1, 10],
          givenA: [5, 50],
          givenB: [10, 100],
        },
        correctAnswerFormula: "(givenA * d) / a",
        optionsFormula: [
          "(givenA * d) / a",
          "(givenB * d) / b",
          "(givenA * b) / a",
          "(givenA * c) / a",
        ],
        explanationTemplate:
          "To find the value of {{d}}, we use the proportion:<br><br> a/b = c/d ⟹ a * d = b * c ⟹ d = (a * d) / b.<br><br> Substituting the given values, we get:<br><br> d = ({{givenA}} * {{d}}) / {{a}} = {{final_answer}}.<br><br> Therefore, the value of {{d}} is {{final_answer}}.<br><br>",
      },
      {
        id: 3,
        template:
          "In a mixture of {{total}} litres, the ratio of milk to water is {{initialMilkRatio}} : {{initialWaterRatio}}. If this ratio is to be changed to {{finalMilkRatio}} : {{finalWaterRatio}}, how much water should be added?",
        limits: {
          total: [50, 200],
          initialMilkRatio: [1, 5],
          initialWaterRatio: [1, 5],
          finalMilkRatio: [1, 5],
          finalWaterRatio: [1, 5],
        },
        correctAnswerFormula:
          "((total * initialMilkRatio) / (initialMilkRatio + initialWaterRatio)) * (finalWaterRatio / finalMilkRatio) - (total / (initialMilkRatio + initialWaterRatio)) * initialWaterRatio",
        optionsFormula: [
          "((total * initialMilkRatio) / (initialMilkRatio + initialWaterRatio)) * (finalWaterRatio / finalMilkRatio) - (total / (initialMilkRatio + initialWaterRatio)) * initialWaterRatio",
          "((total * initialMilkRatio) / (initialMilkRatio + initialWaterRatio)) * (finalWaterRatio / finalMilkRatio) + (total / (initialMilkRatio + initialWaterRatio)) * initialWaterRatio",
          "((total * finalMilkRatio) / (initialMilkRatio + initialWaterRatio)) * (initialWaterRatio / finalMilkRatio) - (total / (initialMilkRatio + initialWaterRatio)) * initialWaterRatio",
          "((total * finalMilkRatio) / (initialMilkRatio + initialWaterRatio)) * (initialWaterRatio / finalMilkRatio) + (total / (initialMilkRatio + initialWaterRatio)) * initialWaterRatio",
        ],
        explanationTemplate:
          "To find the amount of water to be added, we need to follow these steps:<br><br> 1. Calculate the amount of milk and water in the initial mixture:<br><br> - Amount of milk = ({{total}} * {{initialMilkRatio}}) / ({{initialMilkRatio}} + {{initialWaterRatio}})<br> - Amount of water = ({{total}} * {{initialWaterRatio}}) / ({{initialMilkRatio}} + {{initialWaterRatio}})<br><br> 2. In the final mixture, the amount of milk remains the same, but the ratio changes:<br><br> - Let the total final amount be T.<br> - New amount of water (W) needed = (Amount of milk * {{finalWaterRatio}}) / {{finalMilkRatio}}<br><br> 3. The amount of water to be added is the difference between the new amount of water and the initial amount of water:<br><br> - Water to be added = W - Initial amount of water<br><br> Using the given values, we get:<br><br> - Initial amount of milk = ({{total}} * {{initialMilkRatio}}) / ({{initialMilkRatio}} + {{initialWaterRatio}}) = {{milk_amount}} litres.<br> - Initial amount of water = ({{total}} * {{initialWaterRatio}}) / ({{initialMilkRatio}} + {{initialWaterRatio}}) = {{water_amount}} litres.<br><br> To change the ratio to {{finalMilkRatio}} : {{finalWaterRatio}}, the new amount of water needed is:<br><br> W = ({{milk_amount}} * {{finalWaterRatio}}) / {{finalMilkRatio}} = {{new_water_amount}} litres.<br><br> Therefore, the quantity of water to be added is:<br><br> Water to be added = {{new_water_amount}} - {{water_amount}} = {{final_answer}} litres.<br><br>",
      },
    ],
  },
  "number-system": {
    description:
      "A number system is a way of representing and expressing numerical quantities. It provides a framework for counting, measuring, and performing mathematical operations. In the context of number system aptitude tests, understanding the concepts and principles of number systems is important. It allows individuals to solve numerical problems efficiently and accurately.",
    realLife: [
      {
        id: 1,
        title: "Banking and Finance",
        content:
          "Number systems play a fundamental role in banking and finance. From calculating interest rates, managing accounts, and performing financial analysis, understanding number systems is essential. Decimal and binary systems are commonly used in financial transactions and data representation.",
      },
      {
        id: 2,
        title: "Measurement and Engineering",
        content:
          "Number systems are used extensively in measurement and engineering fields. Whether it's converting units of length, weight, or time, or working with scientific notation, engineers and scientists rely on number systems to make precise calculations and measurements.",
      },
      {
        id: 3,
        title: "Data Analysis and Statistics",
        content:
          "Number systems are vital in data analysis and statistics. Analyzing and interpreting data often involves working with different number systems to perform calculations, measure central tendencies, and calculate probabilities. Statistical software and programming languages employ number systems to process and manipulate large datasets efficiently.",
      },
    ],
    concepts: `<h1>Understanding the Concepts of Number System</h1>
    <p>The number system is a fundamental concept in mathematics that deals with the representation and manipulation of numbers. It encompasses various number systems, such as the decimal system, binary system, octal system, and hexadecimal system. Understanding the concepts of the number system is essential for performing numerical operations, conversions, and solving problems.</p>
    
    <p>The following are the important number system concepts:</p>
    
    <h2>1. Number Bases</h2>
    <p>Number bases refer to the positional notation systems used to represent numbers. The most commonly used base is the decimal system (base-10), but there are other bases like binary (base-2), octal (base-8), and hexadecimal (base-16). Each base has a set of digits and a positional value system.</p>
    
    <h2>2. Operations on Number Systems</h2>
    <p>The number system allows for various operations, including addition, subtraction, multiplication, and division. These operations are performed based on the rules and properties of the specific number system being used.</p>
    
    <h2>3. Decimal System</h2>
    <p>The decimal system, also known as the base-10 system, is the most commonly used number system. It uses ten digits (0-9) to represent numbers. Each digit's position in a number carries a value based on powers of 10.</p>
    <p><strong>For Example:</strong></p>
    <p>The number 352 is interpreted as 3 × 10<sup>2</sup> + 5 × 10<sup>1</sup> + 2 × 10<sup>0</sup>.</p>
    
    <h2>4. Binary System</h2>
    <p>The binary system, also known as the base-2 system, is widely used in computer science and digital electronics. It uses two digits (0 and 1) to represent numbers. Each digit's position in a binary number carries a value based on powers of 2.</p>
    <p><strong>For Example:</strong></p>
    <p>The binary number 101 is interpreted as 1 × 2<sup>2</sup> + 0 × 2<sup>1</sup> + 1 × 2<sup>0</sup>, which equals 5 in the decimal system.</p>
    
    <h2>5. Hexadecimal System</h2>
    <p>The hexadecimal system, also known as the base-16 system, is commonly used in computer programming and digital representation. It uses sixteen digits (0-9 and A-F) to represent numbers.</p>
    <p>The decimal numbers 10 to 15 are represented by the letters A to F, respectively. Each digit's position in a hexadecimal number carries a value based on powers of 16.</p>
    <p><strong>For Example:</strong></p>
    <p>The hexadecimal number A3 is interpreted as 10 × 16<sup>1</sup> + 3 × 16<sup>0</sup>, which equals 163 in the decimal system.</p>
    
    <h2>6. Rational Numbers</h2>
    <p>Rational numbers are numbers that can be expressed as a fraction of two integers. They can be positive, negative, or zero. Rational numbers include integers, fractions, terminating decimals, and repeating decimals.</p>
    <p><strong>For Example:</strong></p>
    <p>3/4, -5, 0.6, and 1.333... are all rational numbers.</p>
    
    <h2>7. Irrational Numbers</h2>
    <p>Irrational numbers are numbers that cannot be expressed as a fraction of two integers. They are non-repeating and non-terminating decimals.</p>
    <p><strong>For Example:</strong></p>
    <p>Irrational numbers include π (pi) and √2 (square root of 2). These numbers cannot be expressed exactly as a finite decimal or fraction.</p>
    
    <h2>8. Real Numbers</h2>
    <p>Real numbers are the combination of rational and irrational numbers. They include all rational and irrational numbers. Real numbers can be represented on the number line and are used to measure quantities in various contexts, such as distance, time, and temperature.</p>`,
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
    practiceQuestions: [],
  },
  "hcf-and-lcm": {
    description:
      "The Highest Common Factor (HCF) is defined as the Highest Common Factor found in two or more numbers. Similarly, the lowest number is a Least Common Multiple (LCM) of the given numbers.",
    realLife: [
      {
        id: 1,
        title: "",
        content:
          "Consider a room with dimensions 48 x 56. What is the minimum number of identical square tiles we can tile the room?",
      },
      {
        id: 2,
        title: "",
        content:
          "Assume you have ropes of different lengths(e.g. 100m, 150m, 175m), and you need to cut them into small pieces of equal lengths.",
      },
      {
        id: 3,
        title: "",
        content:
          "What length would you choose to cut so that you have all the ropes of maximum lengths without leaving any spare?",
      },
    ],
    concepts: `  <h1>Understanding the Concepts of HCF & LCM</h1>
    <p>You can now understand the fundamental concepts of HCF and LCM. Listed below are the different HCF and LCM concepts:</p>
    
    <ul>
        <li><strong>What is HCF?</strong></li>
        <li><strong>How to Find the HCF of the given numbers?</strong></li>
        <li><strong>What is LCM?</strong></li>
        <li><strong>How to Find the LCM of the given numbers?</strong></li>
    </ul>
    
    <h2>1. Highest Common Factor (HCF)</h2>
    <p>The Highest Common Factor (HCF) of two or more given numbers is the largest number which divides each given number without leaving any remainder.</p>
    <p><strong>For example:</strong> The HCF of 24 and 36 is 12 because 12 is the largest number which can divide the numbers altogether.</p>
    
    <h2>2. How to Find the HCF of the given numbers?</h2>
    <p>There are multiple methods to find the HCF of the given numbers: Prime factorisation method, L-Division method, and Normal Division method.</p>
    
    <h3>2.1 Prime Factorisation Method</h3>
    <p>To find the HCF of the given numbers by prime factorisation:</p>
    <ol>
        <li>We find the prime factors of those numbers.</li>
        <li>After finding the factors, we see the product of the prime factors common to each given number.</li>
    </ol>
    <p><strong>Example Problem:</strong></p>
    <p>Let us find the HCF of 45 and 60 by the prime factorisation method.</p>
    <p>The prime factors of 45 = 3 × 3 × 5</p>
    <p>The prime factors of 60 = 2 × 5 × 2 × 3</p>
    <p>The common factors of 45 and 60 are 3 × 5.</p>
    <p>Thus, HCF of (45, 60) = 15.</p>
    
    <h3>2.2 L-Division Method</h3>
    <p>This method is the most commonly used method and is efficient in finding the HCF of 2-digit or 3-digit numbers which have many factors.</p>
    <p><strong>Example Problem:</strong></p>
    <p>Let us find the HCF of 24 and 15 using the L-Division method.</p>
    <ol>
        <li>Divide the given numbers by the least common prime factor. Here, 3 is the least common prime factor of 24 and 15.</li>
        <li>Continue until there is no more common prime factor. Then multiply all the divisors.</li>
    </ol>
    <p>Divisions of 24 and 15 by 3 will leave 8 and 5 as their remainders respectively. 8 and 5 do not have a common prime factor.</p>
    <p>Hence, the HCF of 24 and 15 is 3.</p>
    
    <h3>2.3 Normal Division Method</h3>
    <p>This method is rarely used and is more efficient in finding the HCF of 3-digit or 4-digit odd numbers for which finding factors might look challenging.</p>
    <p><strong>Example Problem:</strong></p>
    <p>Let's find the HCF of 24 and 15 by the normal division method.</p>
    <ol>
        <li>Divide the largest number by the smallest number. Here, the largest number is 24 and the smaller one is 15. Divide 24 by 15.</li>
        <li>Take the divisor as a new dividend and the remainder as the new divisor, i.e., divide the first divisor by the first remainder.</li>
        <li>Proceed until the remainder is zero and the last divisor will be the HCF of the given numbers.</li>
    </ol>
    <p>Therefore, the HCF of 24 and 15 is 3.</p>
    
    <h2>3. Least Common Multiple (LCM)</h2>
    <p>The Lowest Common Multiple (LCM) of two or more numbers is the smallest of the common multiples of those numbers.</p>
    <p><strong>For example:</strong> Let us take two numbers, 8 and 16.</p>
    <p>Multiples of 8 are: 8, 16, 24, 32, 40, 48, 56, 64, 72, 80, 88, and so on.</p>
    <p>The multiples of 16 are: 16, 32, 48, 64, 80, 96, and so on.</p>
    <p>The first common value among these multiples is the Least Common Multiple (LCM) for 8 and 16, which is 16.</p>
    <p>Thus, LCM of 8 & 16 is 16.</p>
    
    <h2>4. How to Find the LCM of the Given Numbers?</h2>
    <p>There are multiple methods to find the LCM of the given numbers: Prime factorisation method & L-Division method.</p>
    
    <h3>4.1 L-Division Method</h3>
    <p>This is the most commonly used method to find the LCM of the given numbers.</p>
    <p>This method divides the given numbers by a common prime number until the remainder is a prime number or one. LCM will be the product obtained by multiplying all divisors and remaining prime numbers.</p>
    <p><strong>Example Problem:</strong></p>
    <p>Find the LCM of 24 and 15 by the division method.</p>
    <p><strong>Solution:</strong></p>
    <ol>
        <li>Divide the given numbers by the least prime number. Here, 2 is the least number which will divide 24.</li>
        <li>Write the quotient and the number which is not divisible by the above prime number in the second row.</li>
        <li>Divide the numbers with another least prime number.</li>
        <li>Continue division until the remainder is a prime number or 1.</li>
        <li>Multiply all the divisors and the remaining prime number (if any) to obtain the LCM.</li>
    </ol>
    <p>LCM of 24 and 15 = 2 × 2 × 2 × 3 × 5 = 120</p>
    
    <h3>4.2 Prime Factorisation Method</h3>
    <p>The following steps must be performed to find the LCM using the prime factorisation method. This method is less commonly used.</p>
    <ol>
        <li>List the prime factors of the given numbers and note the common prime factors.</li>
        <li>The LCM of the given numbers = product of the common prime factors and the uncommon prime factors of the numbers.</li>
    </ol>
    <p><strong>Note:</strong> Common factors will be included only once.</p>
    <p><strong>Example Problem:</strong></p>
    <p>Let us find the LCM of 45 and 60 using prime factorisation.</p>
    <ol>
        <li>The prime factors of 45 = 3 × 3 × 5 and 60 = 2 × 2 × 3 × 5.</li>
        <li>The product of all the prime factors = Common prime factors (3 × 5) × Uncommon prime factors (2 × 2 × 3) = 180.</li>
    </ol>
    <p>Therefore, the LCM of 45 and 60 = 180.</p>`,
    formulae: [
      {
        id: 1,
        toCalculate: "When HCF & LCM Given",
        formuales: "HCF x LCM = N1 x N2 (product of the given numbers)",
      },
      {
        id: 2,
        toCalculate: "HCF of Co-Prime numbers",
        formuales: "Always 1",
      },
      {
        id: 3,
        toCalculate: "LCM of Co-Prime numbers",
        formuales: "Product of the given numbers",
      },
      {
        id: 4,
        toCalculate: "HCF of Given numbers",
        formuales: "Lesser than or equal to the lowest number",
      },
      {
        id: 5,
        toCalculate: "LCM of Given numbers",
        formuales: "Greater than or equal to the highest number",
      },
    ],
    practiceQuestions: [
      {
        id: 1, // A unique ID for this question
        template:
          "The product of two numbers is {{product}}. If their HCF is {{hcf}}, what is their LCM?",
        limits: {
          product: [2000, 3000], // Fixed value
          hcf: [1, 15], // Fixed value
        },
        correctAnswerFormula: "product / hcf",
        optionsFormula: [
          "product / hcf",
          "hcf * hcf",
          "product / (hcf * 2)",
          "product / (hcf / 2)",
        ],
        explanationTemplate:
          "To find the LCM of two numbers when the product and HCF are given, we use the relation:<br><br>" +
          "LCM × HCF = Product of the numbers<br><br>" +
          "Therefore, LCM = Product / HCF<br><br>" +
          "Given:<br>" +
          "Product of the numbers = {{product}}<br>" +
          "HCF = {{hcf}}<br><br>" +
          "Substituting the values into the formula, we get:<br><br>" +
          "LCM = {{product}} / {{hcf}} = {{final_answer}}<br><br>" +
          "Hence, the LCM of the two numbers is {{final_answer}}.<br><br>",
      },
      {
        id: 2,
        template:
          "Three numbers are in the ratio of {{ratio1}} : {{ratio2}} : {{ratio3}} and their L.C.M. is {{lcm}}. Their H.C.F. is:",
        limits: {
          ratio1: [2, 5], // Range for ratio1
          ratio2: [3, 6], // Range for ratio2
          ratio3: [4, 7], // Range for ratio3
          lcm: [10, 5000], // Range for LCM
        },
        correctAnswerFormula: "lcm / (ratio1 * ratio2 * ratio3)",
        optionsFormula: [
          "lcm / (ratio1 * ratio2 * ratio3)",
          "lcm / (ratio1 + ratio2 + ratio3)",
          "(lcm * (ratio1 + ratio2 + ratio3)) / 3",
          "lcm / (ratio1 * ratio2)",
        ],
        explanationTemplate:
          "Given the L.C.M. and the ratio of the three numbers, the H.C.F. can be calculated using the formula:<br><br> H.C.F. = L.C.M / (Product of ratios)<br><br> Substituting the values:<br><br> H.C.F. = {{lcm}} / ({{ratio1}} * {{ratio2}} * {{ratio3}})<br><br> Therefore, the H.C.F. is {{final_answer}}.<br><br>",
      },
      {
        id: 3,
        template:
          "The HCF of two numbers is {{hcf}} and their sum is {{sum}}. How many such pairs of numbers are possible?",
        limits: {
          hcf: [10, 30], // Range for HCF
          sum: [200, 300], // Range for the sum
        },
        correctAnswerFormula: "Math.floor(sum / hcf) - 1",
        optionsFormula: [
          "Math.floor(sum / hcf) - 1",
          "Math.floor(sum / hcf) - 2",
          "Math.floor(sum / hcf)",
          "Math.floor(sum / hcf) - 3",
        ],
        explanationTemplate:
          "Given that the HCF of two numbers is {{hcf}} and their sum is {{sum}}, the number of such pairs can be found by dividing the sum by the HCF and subtracting 1:<br><br>Number of pairs = (Sum / HCF) - 1<br><br>Substituting the given values:<br>Number of pairs = ({{sum}} / {{hcf}}) - 1 = {{final_answer}}.<br><br>Thus, there are {{final_answer}} such pairs of numbers.",
      },
    ],
  },
  average: {
    description:
      "The derived 'central' value of a set of numbers is the Average. 'Average' denotes the 'middle' or 'centre' position. In layman's terms, an Average is a value that represents a normal representation of a set of data.",
    realLife: [
      {
        id: 1,
        title: "",
        content:
          "Higher education institutions and employers establish qualifying standards to choose the best applicants. Based on education, they search for average marks in a group of courses to narrow down the list of applicants.",
      },
      {
        id: 2,
        title: "",
        content:
          "Financial experts can establish a budget for the following year using the previous year's spending. The average spending value also helps to determine how much money may be saved in a year.",
      },
      {
        id: 3,
        title: "",
        content:
          "Average goals per match, average runs scored by a batter, and other variables are used by statisticians to discern patterns in athletic performance.",
      },
    ],
    concepts: `<h1>Understanding the Concepts of Average</h1>
<p>You can now understand the fundamental concepts of Average. Listed below are the different Average concepts:</p>
<h2>What is Average?</h2>
<p>In mathematics, Average is defined as the mean value, which is equal to the ratio of the sum of all values in a set to the total number of values/units present in the set.</p>
<p>The data can be anything like age, money, runs, etc. Average has many applications in real-life.</p>
<p>Average = sum of elements / number of elements</p>
<h3>Example Problem</h3>
<p>The Average of 3, 6, and 9 is 3 + 6 + 9 = 18÷ 3 = 6. So the Average is 6. It means 6 is the central value of 3, 6, and 9.</p>
<p>Therefore, Average means to find out the mean value of a group of numbers.</p>
<h2>How to Find the Average of the given numbers?</h2>
<h3>Example Problem</h3>
<p>The marks obtained by 8 students in a class test are 12, 15, 16, 18, 20, 10, 11, and 21. Use the Average formula and find out what the Average of the marks obtained by the students is.</p>
<h3>Solution:</h3>
<p>Marks obtained by 8 students in class test = 12, 15, 16, 18, 20, 10, 11, and 21 (given)</p>
<p>Total marks obtained by 8 students in class test =(12+15+16+18+20+10+11+21) = 123/8</p>
<p>Using the Average formula,</p>
<p>Average = (Sum of Observation) ÷ (Total numbers of Observations)</p>
<p>Average = (12+15+16+18+20+10+11+21) ÷ 8</p>
<p>Average = 123/8</p>
<p>Average of marks obtained by 8 students = 15.375</p>
<h2>Rules of Average</h2>
<p>Here are some handy tricks for Average which will make your calculation faster and more efficient with practice:</p>
<p>(1) If the value of each number is increased by the same value 'a', then the Average of all numbers will also increase by 'a'.</p>
<p>(2) If the value of each number is decreased by the same value 'a', then the Average of all numbers will also decrease by 'a'.</p>
<p>(3) If the value of each number is multiplied by the same value 'a', then the Average of all numbers will also get multiplied by 'a'.</p>   

<p>(4) If the value of each number is divided by the same value 'a', then the Average of all numbers will also get divided by 'a'.</p>
<h2>Average of two or more groups taken together</h2>
<p>(a) If the number of quantities in two groups is n₁ and n₂ and their Average is x and Y, respectively, the combined Average (Average of all of them put together) is =(n₁ x+n₂ Y)/(n₁+n₂ )</p>
<p>(b) If the Average of ₁ quantities is x and the Average of n₂ quantities out of them is Y, the average of the remaining group (rest of the quantities) is =(n₁ x-n₂ Y)/(n₁ – n₂ )</p>
<h2>What is Average Speed?</h2>
<p>Average Speed is the rate at which a journey takes place. Throughout a journey, the Speed is not constant; it varies from time to time.</p>
<h3>Average Speed Formula</h3>
<p>The Average Speed of an object is equal to the total distance covered by the object, divided by the total time taken to cover the distance.</p>
<p>Average Speed = Total distance covered ÷ Total time taken.</p>
<p>S = D/T.</p>
<p>Where</p>
<p>'D' is the distance travelled in some time 'T'</p>
<p>'S' is the Speed of the object for this journey.</p>`,
    formulae: [
      {
        id: 1,
        toCalculate: "Average of first n natural numbers",
        formuales: "(a+1)/2",
      },
      {
        id: 2,
        toCalculate: "Average of squares of first n natural numbers",
        formuales: "(n+1)(2n+1)/6",
      },
      {
        id: 3,
        toCalculate: "Average of cubes of first n natural numbers",
        formuales: "n(n+1)^2/4",
      },
      {
        id: 4,
        toCalculate: "Average of first n even numbers",
        formuales: "(n+1)",
      },
      {
        id: 5,
        toCalculate: "Average of squares of first n even numbers",
        formuales: "2(n+1)(2n+1)/3",
      },
      {
        id: 6,
        toCalculate: "Average of cube of first n even numbers",
        formuales: "2n(n+1)^2",
      },
      {
        id: 7,
        toCalculate: "Average of first n odd numbers",
        formuales: "n",
      },
      {
        id: 8,
        toCalculate: "Average of squares of first n odd numbers",
        formuales: "(2n-1)(2n+1)/3",
      },
      {
        id: 9,
        toCalculate: "Average of cube of first n odd numbers",
        formuales: "n(2n^2-1)",
      },
      {
        id: 10,
        toCalculate:
          "Average (If the value of each number is increased/decreased/multiplied/divided by the same value ‘a’)",
        formuales:
          "Then the average of all numbers will also be increased/decreased/multiplied/divided by the same value ‘a’.",
      },
      {
        id: 11,
        toCalculate:
          "New Average (Change in average due to insertion and deletion of values)",
        formuales: "Old Average ±(Deviation / number of people)",
      },
      {
        id: 12,
        toCalculate: "Average Speed",
        formuales: "	Total distance covered ÷ Total time taken",
      },
    ],
    practiceQuestions: [
      {
        id: 1,
        template:
          "What is the average of the following set of numbers: {{num1}}, {{num2}}, {{num3}}, {{num4}}, {{num5}}?",
        limits: {
          num1: [100, 400],
          num2: [100, 400],
          num3: [100, 400],
          num4: [100, 400],
          num5: [100, 400],
        },
        correctAnswerFormula: "(num1 + num2 + num3 + num4 + num5) / 5",
        optionsFormula: [
          "(num1 + num2 + num3 + num4 + num5) / 5",
          "(num1 + num2 + num3 + num4 + num5 + 10) / 5",
          "(num1 + num2 + num3 + num4 + num5 - 10) / 5",
          "(num1 + num2 + num3 + num4 + num5 + 20) / 5",
        ],
        explanationTemplate:
          "To find the average of the numbers {{num1}}, {{num2}}, {{num3}}, {{num4}}, and {{num5}}, you sum them up and divide by the total number of values: ({{num1}} + {{num2}} + {{num3}} + {{num4}} + {{num5}}) / 5. Substituting the values, the average is {{final_answer}}.",
      },
      {
        id: 5,
        template:
          "The average age of A, B, and C is {{average_ABC}} years. If the average age of A and C is {{average_AC}} years, what is the age of B in a year?",
        limits: {
          average_ABC: [20, 40], // The average age of A, B, and C
          average_AC: [20, 40], // The average age of A and C
        },
        correctAnswerFormula: "((average_ABC * 3) - (average_AC * 2)) + 1",
        optionsFormula: [
          "((average_ABC * 3) - (average_AC * 2)) + 1",
          "((average_ABC * 3) - (average_AC * 2))",
          "((average_ABC * 3) - (average_AC * 2)) - 1",
          "((average_ABC * 3) - (average_AC * 2)) + 2",
        ],
        explanationTemplate:
          "To find the age of B, we need to use the following steps:<br><br> 1. The total age of A, B, and C combined is {{average_ABC}} × 3.<br> 2. The total age of A and C combined is {{average_AC}} × 2.<br> 3. The age of B can be found by subtracting the total age of A and C from the total age of A, B, and C: ({{average_ABC}} × 3) - ({{average_AC}} × 2).<br><br> Adding 1 year to the result gives us the age of B in a year: {{final_answer}}.",
      },
      {
        id: 3,
        template:
          "Three years ago, the average age of a family of {{members}} members was {{average_old}} years. A baby has been born, and the average age of the family is the same today. What is the present age of the baby?",
        limits: {
          members: [4, 10], // Number of family members
          average_old: [10, 30], // Average age of the family three years ago
        },
        correctAnswerFormula: "3 * (members + 1) - 3 * members",
        optionsFormula: [
          "3 * (members + 1) - 3 * members",
          "3 * (members + 1) - 3 * members + 1",
          "3 * (members + 1) - 3 * members - 1",
          "3 * (members + 1)",
        ],
        explanationTemplate:
          "To find the present age of the baby, follow these steps:<br><br> 1. Calculate the total age of the family three years ago: {{average_old}} × {{members}}.<br> 2. Calculate the total age of the family today: ({{average_old}} + 3) × {{members}}.<br> 3. The age of the baby is the difference between the total age today and the total age three years ago: ({{average_old}} + 3) × {{members}} - {{average_old}} × {{members}}.<br><br> Therefore, the present age of the baby is {{final_answer}}.",
      },
    ],
  },
  "arithmetic-progression": {
    description:
      "Arithmetic progression, or arithmetic sequence, is a numerical series in which the difference between consecutive terms is constant. Arithmetic progression problems require students to identify the next or missing term.",
    realLife: [
      {
        id: 1,
        title: "",
        content:
          "When you are at a bus stop waiting for a bus. Provided that traffic moves at a steady speed, you can estimate when the next bus will arrive.",
      },
      {
        id: 2,
        title: "",
        content:
          "A taxi ride has an arithmetic progression as well. When you take a taxi, you will be charged an initial fee followed by a per hour or per kilometre charge.",
      },
      {
        id: 3,
        title: "",
        content:
          "If two individuals approach a spot at periodic intervals and the periods differ, we can estimate whether they will cross and at which time.",
      },
    ],
    concepts: `<h1>Understanding the Concepts of Arithmetic Progression</h1>
    <p>A progression is an exclusive type of sequence for which the formula for the nth term can be found and obtained.</p>
    <p>The most often used sequence in mathematics is an Arithmetic Progression, or AP.</p>
    
    <p>The concept of AP can be defined in two ways, which are as follows:</p>
    
    <h2>Definition 1:</h2>
    <p>An Arithmetic Progression (AP) is a mathematical sequence in which the difference between two consecutive terms is constant.</p>
    
    <h2>Definition 2:</h2>
    <p>An Arithmetic Progression (AP) is a number sequence in which the second number is determined by adding a constant or fixed number to the first for each pair of successive terms.</p>
    
    <p>You can now understand the fundamental concepts of Arithmetic Progression (AP). Listed below are the different Arithmetic Progression (AP) concepts:</p>
    
    <ul>
        <li>Common Difference and First Term</li>
        <li>Calculation of the nth term of an AP</li>
        <li>Calculation of the sum of the first n terms of an AP</li>
    </ul>
    
    <h2>1. Common Difference and First Term</h2>
    <p>The 'common difference' of AP is the fixed or constant number that is added to any term of an Arithmetic Progression or AP to obtain its following term.</p>
    
    <p>The commonly used terms in an Arithmetic Progression or AP for a given series or sequence include the first term of the AP, its common difference, and the nth term.</p>
    
    <p>Let's say the sequence a<sub>1</sub>, a<sub>2</sub>, a<sub>3</sub>, a<sub>4</sub>,...a<sub>n</sub> is in AP. We can calculate the common difference, 'd,' using the following formula:</p>
    
    <p>d = a<sub>2</sub> − a<sub>1</sub> = a<sub>3</sub> − a<sub>2</sub> = a<sub>4</sub> − a<sub>3</sub> = a<sub>n</sub> − a<sub>n−1</sub></p>
    
    <p>Where 'd' represents the common difference, which could be positive, negative, or zero.</p>
    
    <p>The Arithmetic Progression can be represented or written as follows in terms of the common difference:</p>
    
    <p>a, a+d, a+2d, a+3d, ... , a+(n−1)d</p>
    
    <p>where 'a' refers to an AP's first term.</p>
    
    <h2>2. Calculation of nth term of an AP</h2>
    <p>The formula for determining the nth term of an Arithmetic Progression or AP is:</p>
    
    <p>a<sub>n</sub> = a + (n - 1)d</p>
    
    <p>Where:</p>
    <ul>
        <li>a - First term</li>
        <li>d - Common difference</li>
        <li>n - Number of terms</li>
    </ul>
    
    <p>It is critical to emphasize that the order of an Arithmetic Progression is determined by its common difference, d.</p>
    
    <p>If the common difference, or d, is positive, the terms of an AP will advance to the positive side of infinity. If the common difference, or d, is negative, the terms of AP will advance towards the negative side of infinity.</p>
    
    <h2>3. Calculation of the sum of the first n terms of an AP</h2>
    <p>The formula for calculating the sum of the first n terms of an Arithmetic Progression, or AP:</p>
    
    <p>S = n/2(2a+(n-1)d)</p>
    
    <p>Where:</p>
    <ul>
        <li>a - First term</li>
        <li>d - Common difference</li>
        <li>n - Number of terms</li>
        <li>S - Sum of the first n term of an AP</li>
    </ul>`,
    formulae: [
      {
        id: 1,
        toCalculate: "General Form of AP",
        formuales: "a,a+d,a+2d,a+3d,....",
      },
      {
        id: 2,
        toCalculate: "The nth term of AP (an)",
        formuales: "a+(n-1)*d",
      },
      {
        id: 3,
        toCalculate: "Sum of n terms in AP (S)",
        formuales: "n/2(2a+(n-1)*d)",
      },
      {
        id: 4,
        toCalculate:
          "	Sum of all terms in a finite AP with the last term as ‘l’",
        formuales: "n/2(a+1)",
      },
    ],
    practiceQuestions: [
      {
        id: 1,
        template:
          "A man ate {{total_bananas}} bananas in {{total_days}} days, each day eating {{increase}} more than the previous day. How many bananas did he eat on the first day?",
        limits: {
          total_bananas: [80, 150], // Total bananas eaten
          total_days: [3, 10], // Total days
          increase: [2, 10], // Increase in bananas each day
        },
        correctAnswerFormula:
          "total_bananas / total_days - (total_days - 1) * increase / 2",
        optionsFormula: [
          "total_bananas / total_days - (total_days - 1) * increase / 2",
          "total_bananas / total_days + (total_days - 1) * increase / 2",
          "total_bananas / total_days - (total_days - 1) * increase",
          "total_bananas / total_days + (total_days - 1) * increase",
        ],
        explanationTemplate:
          "To find out how many bananas he ate on the first day, follow these steps:<br><br> 1. Calculate the total increase in bananas eaten over the days: (total_days - 1) × increase.<br> 2. The total bananas eaten is the sum of an arithmetic series: total_bananas = first_day + (first_day + increase) + ... + (first_day + (total_days - 1) × increase).<br> 3. Using the formula for the sum of an arithmetic series, solve for the number of bananas eaten on the first day.<br><br> Therefore, the number of bananas eaten on the first day is {{final_answer}}.",
      },

      {
        id: 2,
        template:
          "Find the {{term}}th term of the arithmetic progression {{start}}, {{start + increment}}, {{start + 2 * increment}}, …. ",
        limits: {
          term: [5, 10], // Position of the term to find
          start: [1, 10], // First term of the series
          increment: [3, 5], // Common difference
        },
        correctAnswerFormula: "start + (term - 1) * increment",
        optionsFormula: [
          "start + (term - 1) * increment",
          "start + term * increment",
          "start * increment + (term - 1)",
          "start + (term + 1) * increment",
        ],
        explanationTemplate:
          "To find the {{term}}th term of an arithmetic progression, use the formula:<br><br> Term_n = {{start}} + ({{term}} - 1) × {{increment}}<br><br> Where:<br> - Term_n is the {{term}}th term<br> - start is the first term<br> - increment is the common difference<br><br> Substituting the given values, we get:<br><br> Term_n = {{start}} + ({{term}} - 1) × {{increment}}<br><br> Therefore, the {{term}}th term is {{final_answer}}.",
      },
    ],
  },
  "simple-interest": {
    description:
      "Simple interest is determined by multiplying the daily interest rate by the principal by the number of days elapsed between payments. It is a simple and effective method of calculating the returns on a given principal amount.",
    realLife: [
      {
        id: 1,
        title: "",
        content:
          "Imagine you purchase stocks in a company named ITC for Rs.1,000,000, and the business pays a 10% yearly dividend. In how many years would you earn approximately twice the money in returns?",
      },
      {
        id: 2,
        title: "",
        content:
          "Consider that you have lent Rs.2,00,000 to someone at an interest rate of 2% S.I per month. How much money will you receive as interest at the end of 8 months?",
      },
    ],
    concepts: ` <h1>Real-Life Applications of Simple Interest (S.I.)</h1>
    <p>Real-life examples where the concept of Simple Interest (S.I.) is involved are:</p>

    <h2>Application 1:</h2>
    <p>Imagine you purchase stocks in a company named ITC for Rs.1,000,000, and the business pays a 10% yearly dividend. In how many years would you earn approximately twice the money in returns?</p>

    <h2>Application 2:</h2>
    <p>Consider that you have lent Rs.2,00,000 to someone at an interest rate of 2% S.I per month. How much money will you receive as interest at the end of 8 months?</p>
`,
    formulae: [
      {
        id: 1,
        toCalculate: "Simple Interest for certain number of years",
        formuales: "(P*N*R)/100",
      },
      {
        id: 2,
        toCalculate: "Simple Interest for certain number of months",
        formuales: "(P*N*R)/(12*100)",
      },
      {
        id: 3,
        toCalculate: "Simple Interest for certain number of days",
        formuales: "(P*N*R)/(365*100)",
      },
      {
        id: 4,
        toCalculate: "Amount",
        formuales: "Principal+Simple Intreset",
      },
      {
        id: 5,
        toCalculate:
          "Rate of interest (R) (If sum of money becomes (n times) in (T) years at SI)",
        formuales: "100(n-1)/T",
      },
      {
        id: 6,
        toCalculate:
          "Time (If sum of money becomes (n times) at rate of interest (R) % per annum at SI)",
        formuales: "100(n-1)/R",
      },
    ],
    practiceQuestions: [
      {
        id: 1,
        template:
          "A sum of Rs {{principal}} amounts to Rs {{amount}} in {{years}} years at the rate of simple interest. Find the rate percent.",
        limits: {
          principal: [10000, 15000],
          amount: [15000, 20000],
          years: [1, 10],
        },
        correctAnswerFormula:
          "(amount - principal) * 100 / (principal * years)",
        optionsFormula: [
          "(amount - principal) * 100 / (principal * years)",
          "(principal - amount) * 100 / (principal * years)",
          "principal * 100 / (amount - principal)",
          "(amount - principal) * 100 / years",
        ],
        explanationTemplate:
          "To find the rate percent in simple interest, use the formula:<br><br> Rate Percent = (Amount - Principal) × 100 / (Principal × Years)<br><br> Here:<br> - Principal = {{principal}}<br> - Amount = {{amount}}<br> - Years = {{years}}<br><br> Substituting the given values:<br><br> Rate Percent = ({{amount}} - {{principal}}) × 100 / ({{principal}} × {{years}})<br><br> Therefore, the rate percent is {{final_answer}}%.",
      },

      {
        id: 2,
        template:
          "Satish took a loan at {{rate}}% p.a. simple interest. After {{years}} years, he returned the principal along with the interest. If he returns in all Rs. {{total_amount}}, what is the principal amount?",
        limits: {
          rate: [5, 15],
          years: [1, 10],
          total_amount: [2000, 5000],
        },
        correctAnswerFormula: "total_amount / (1 + (rate / 100 * years))",
        optionsFormula: [
          "total_amount / (1 + (rate / 100 * years))",
          "total_amount * (1 + (rate / 100 * years))",
          "total_amount - (rate / 100 * years)",
          "total_amount / years",
        ],
        explanationTemplate:
          "To find the principal amount, use the formula:<br><br> Principal = Total Amount / (1 + (Rate / 100 × Years))<br><br> Here:<br> - Total Amount = Rs. {{total_amount}}<br> - Rate = {{rate}}%<br> - Years = {{years}}<br><br> Substituting these values into the formula gives:<br><br> Principal = {{total_amount}} / (1 + ({{rate}} / 100 × {{years}}))<br><br> Therefore, the principal amount is Rs. {{final_answer}}.",
      },
      {
        id: 1,
        template:
          "If A lends Rs. {{principal}} to B at {{rate1}}% p.a. and B lends the same sum to C at {{rate2}}% p.a., then the gain of B (in Rs.) in a period of {{years}} years is",
        limits: {
          principal: [3000, 4000], // Range for the principal amount
          rate1: [8, 12], // Range for A's rate of interest
          rate2: [10, 15], // Range for B's rate of interest
          years: [1, 5], // Range for the number of years
        },
        correctAnswerFormula: "principal * ((rate2 - rate1) / 100) * years",
        optionsFormula: [
          "principal * ((rate2 - rate1) / 100) * years",
          "principal * ((rate1 - rate2) / 100) * years",
          "principal * (rate2 / 100) * years - principal * (rate1 / 100) * years",
          "principal * (rate2 / 100) * years",
        ],
        explanationTemplate:
          "To find the gain of B, we need to calculate the difference in interest earned by B from C and paid by B to A.<br><br> Interest earned by B from C = principal × (rate2 / 100) × years<br> Interest paid by B to A = principal × (rate1 / 100) × years<br><br> Gain of B = (Interest earned - Interest paid)<br><br> Gain of B = principal × ((rate2 - rate1) / 100) × years<br><br> Substituting the given values, we get:<br><br> Gain of B = {{principal}} × (({{rate2}} - {{rate1}}) / 100) × {{years}}<br><br> Therefore, the gain of B in {{years}} years is {{final_answer}} Rs.<br><br> Hence, the gain of B is {{final_answer}} Rs.<br><br>",
      },
    ],
  },

  partnership: {
    description:
      "When two or more individuals put their money or enter into a conventional arrangement, they are referred to as Partners, and their connection is referred to as a Partnership.",
    realLife: [
      {
        id: 1,
        title: "",
        content:
          "Imagine you and your friend started a business. You invested 10 lakh, while your friend invested 5 lakh. The business made a profit of Rs. 12 lakhs. What would be the split of the profits?",
      },
      {
        id: 2,
        title: "",
        content:
          "Ajay and Suresh contributed Rs. 8,000 and Rs. 1,000 in a company, respectively. After seven months, one investor, Manoj, followed them with a Rs. 6,000 investment. What returns would Ajay, Suresh, and Manoj receive if the total profit at the completion of three years is Rs. 19,660?",
      },
      {
        id: 3,
        title: "",
        content:
          "Ram, George, and Atishay made an investment in a company and contributed Rs. 5000, Rs. 3000, and Rs. 7,200, respectively, with the contract that each would obtain 5% on their respective investments. And that the remainder of the company's profit, if any, would be divided among them in the proportion of the sum originally advanced. The company's total profit was Rs. 20,000; what was Ram's portion of the overall profit?",
      },
    ],
    concepts: `  <h1>Understanding the Concepts of Partnership</h1>
    <p>Partnership is a derived concept of Ratio and Proportion.</p>
    <p>In one form of partnership, all participants share equal benefits and liabilities; however, in another type of partnership, the partners might have fixed responsibilities.</p>

    <p>Listed below are the different Partnership concepts:</p>
    <ul>
        <li>Simple Partnership</li>
        <li>Compound Partnership</li>
    </ul>

    <h2>1. Simple Partnership</h2>
    <p>In this type of partnership, all resources are contributed for the exact same period by all investors. It might be capital or other assets. Furthermore, profit is distributed in accordance with the availability of resources.</p>

    <p>The following is a partnership formula:</p>
    <p>When all of the partners' investments are for the same amount of time, the profit or loss is split among the partners in proportion to their investments.</p>

    <h3>Example</h3>
    <p>If A and B each invest Rs. x and Rs. y in a company for a year, at the end of the year:</p>
    <p><strong>(A's profit share) : (B's profit share) = x : y</strong></p>

    <h2>2. Compound Partnership</h2>
    <p>As the title indicates, the money in such a partnership is contributed at different times by many investors. Furthermore, the benefit-sharing ratio is validated by duplicating the capital provided with the unit of time.</p>
    
    <p>When investments are for different time periods, comparable capitals for a unit of time are determined by taking (capital x number of units of time).</p>
    <p>The profit or loss is now split by the capitals' ratio.</p>

    <h3>Example</h3>
    <p>If A invests Rs. x for p months and B invests Rs. y for Q months, the result is:</p>
    <p><strong>(A's profit share) : (B's profit share) = xp : yQ</strong></p>`,
    formulae: [
      {
        id: 1,
        toCalculate:
          "If we consider X and Y as two contributors who contribute P and Q amount respectively for a year in a particular business, then their profit or loss earned at that time will be:",
        formuales: "X’s profit or loss: Y’s profit or loss = P : Q",
      },
      {
        id: 2,
        toCalculate:
          "In a compound partnership, the money is invested during different periods of time by multiple investors. The benefit-sharing proportion is ascertained by duplicating the capital contributed with the unit of time (generally months).",
        formuales: "P1 : P2 = C1 × T1 : C2 × T2",
      },
    ],
    practiceQuestions: [
      {
        id: 1,
        template:
          "A and B invest in a business in the ratio {{ratio1}} : {{ratio2}}. If {{charity_percentage}}% of the total profit goes to charity and A's share is Rs. {{a_share}}, the total profit is:",
        limits: {
          ratio1: [1, 10], // Range for A's ratio
          ratio2: [1, 10], // Range for B's ratio
          charity_percentage: [1, 10], // Fixed value as per the problem (5% for charity)
          a_share: [500, 2000], // Range for A's share
        },
        correctAnswerFormula:
          "(a_share * 100) / (ratio1 * (100 - charity_percentage))",
        optionsFormula: [
          "(a_share * 100) / (ratio1 * (100 - charity_percentage))",
          "(a_share * (ratio1 + ratio2) * 100) / ((ratio1 * (100 - charity_percentage)))",
          "(a_share * 100) / (ratio1 * charity_percentage)",
          "(a_share * 100) / (ratio1 * (100 - charity_percentage) / 100)",
        ],
        explanationTemplate:
          "To find the total profit, we need to account for the portion that goes to charity and the ratio of the investment between A and B.<br><br> Total Profit = A's Share / (Investment Ratio × (1 - Charity Percentage))<br><br> Given:<br> - A's Share = Rs. {{a_share}}<br> - Investment Ratio of A = {{ratio1}}<br> - Charity Percentage = {{charity_percentage}}%<br><br> Total Profit = {{a_share}} × 100 / ({{ratio1}} × (100 - {{charity_percentage}}))<br><br> Substituting the given values, we get:<br><br> Total Profit = {{a_share}} × 100 / ({{ratio1}} × (100 - {{charity_percentage}})) = {{final_answer}} Rs.<br><br> Hence, the total profit is {{final_answer}} Rs.<br><br>",
      },
      {
        id: 2,
        template:
          "A, B, and C jointly thought of engaging themselves in a business venture. It was agreed that A would invest Rs. {{investmentA}} for {{monthsA}} months, B, Rs. {{investmentB}} for {{monthsB}} months, and C, Rs. {{investmentC}} for {{monthsC}} months. A wants to be the working member for which he was to receive {{workingMemberPercent}}% of the profits. The profit earned was Rs. {{totalProfit}}. Calculate the share of B in the profit.",
        limits: {
          investmentA: [5000, 10000], // Range for investment by A
          monthsA: [1, 12], // Range for months A invested
          investmentB: [5000, 10000], // Range for investment by B
          monthsB: [1, 12], // Range for months B invested
          investmentC: [5000, 10000], // Range for investment by C
          monthsC: [1, 12], // Range for months C invested
          workingMemberPercent: [0, 10], // Range for working member percentage
          totalProfit: [5000, 10000], // Range for total profit
        },
        correctAnswerFormula:
          "totalProfit * (1 - workingMemberPercent / 100) * (investmentB * monthsB) / (investmentA * monthsA + investmentB * monthsB + investmentC * monthsC)",
        optionsFormula: [
          "totalProfit * (1 - workingMemberPercent / 100) * (investmentB * monthsB) / (investmentA * monthsA + investmentB * monthsB + investmentC * monthsC)",
          "totalProfit * (investmentB * monthsB) / (investmentA * monthsA + investmentB * monthsB + investmentC * monthsC)",
          "totalProfit * (1 - workingMemberPercent / 100) * (investmentB * monthsB) / (investmentA * monthsA)",
          "totalProfit * (1 - workingMemberPercent / 100) * (investmentB * monthsB) / (investmentB * monthsB + investmentC * monthsC)",
        ],
        explanationTemplate:
          "To calculate the share of B in the profit, follow these steps:<br><br>1. **Calculate the total profit available for distribution:**<br>   Deduct A's share for being the working member from the total profit.<br>   `Available Profit = Total Profit * (1 - Working Member Percentage / 100)`<br><br>2. **Calculate the ratio of investments:**<br>   Find the effective investment of each partner based on the amount invested and the time period.<br>   `Investment Ratio = (Investment * Months)`<br><br>3. **Calculate B's share:**<br>   Distribute the remaining profit based on the ratio of investments.<br>   `B's Share = Available Profit * (B's Investment Ratio) / (Total Investment Ratio)`<br><br>Using the provided values, B's share in the profit is Rs. {{final_answer}}.<br><br>",
      },

      {
        id: 3,
        template:
          "A, B, C rent a pasture. A puts {{oxenA}} oxen for {{monthsA}} months, B puts {{oxenB}} oxen for {{monthsB}} months, and C puts {{oxenC}} oxen for {{monthsC}} months for grazing. If the rent of the pasture is Rs. {{totalRent}}, how much must C pay as his share of rent?",
        limits: {
          oxenA: [1, 20], // Range for the number of oxen by A
          oxenB: [1, 20], // Range for the number of oxen by B
          oxenC: [1, 20], // Range for the number of oxen by C
          monthsA: [1, 12], // Range for the number of months A's oxen are put for
          monthsB: [1, 12], // Range for the number of months B's oxen are put for
          monthsC: [1, 12], // Range for the number of months C's oxen are put for
          totalRent: [100, 500], // Range for the total rent of the pasture
        },
        correctAnswerFormula:
          "(oxenC * monthsC) / ((oxenA * monthsA) + (oxenB * monthsB) + (oxenC * monthsC)) * totalRent",
        optionsFormula: [
          "(oxenC * monthsC) / ((oxenA * monthsA) + (oxenB * monthsB) + (oxenC * monthsC)) * totalRent",
          "(oxenC * monthsC) / (oxenA * monthsA + oxenB * monthsB) * totalRent",
          "(oxenC * monthsC) / (oxenA * monthsA) * totalRent",
          "(oxenC * monthsC) / (oxenB * monthsB) * totalRent",
        ],
        explanationTemplate:
          "To find out how much C should pay, we first need to determine the total number of oxen-months provided by each person. The formula to calculate the share of rent is:<br><br> Share of C = (OxenC × MonthsC) / ( (OxenA × MonthsA) + (OxenB × MonthsB) + (OxenC × MonthsC) ) × TotalRent<br><br> Given:<br> - Oxen put by A = {{oxenA}}<br> - Months A's oxen were used = {{monthsA}}<br> - Oxen put by B = {{oxenB}}<br> - Months B's oxen were used = {{monthsB}}<br> - Oxen put by C = {{oxenC}}<br> - Months C's oxen were used = {{monthsC}}<br> - Total rent = Rs. {{totalRent}}<br><br> Therefore, C's share of rent is Rs. {{final_answer}}.<br><br>",
      },
    ],
  },

  "mixture-and-alligation": {
    description:
      "A Mixture is mixing two or more things together, and Alligation helps us to find the ratio in which the ingredients/ things have been mixed and at what price they are sold to earn a profit or incur a loss.",
    realLife: [
      {
        id: 1,
        title: "",
        content:
          "Imagine that you need to make tea. You have milk, but not enough for four people. You must now combine 60% milk and 40% water. How do you make tea in the right proportions without ruining the taste?",
      },
      {
        id: 2,
        title: "",
        content:
          "Imagine we have two bottles of juice mixes, one with a juice concentration of 80% and the other with a juice concentration of 20%. How will you provide juice with a 50% concentration to your visitor?",
      },
    ],
    concepts: `<h1>Understanding the Concepts of Mixture and Alligation</h1>
    <p>Following is an overview of Mixture and Alligation, along with various examples to help learners understand the concepts.</p>

    <p>Listed below are the different concepts:</p>
    <ul>
        <li>Mixture</li>
        <li>Alligation</li>
        <li>Mean Price</li>
    </ul>

    <h2>1. Mixture</h2>
    <p>A mixture is formed by combining two or more different kinds of quantities.</p>

    <h3>Types of Mixture</h3>
    <h4>1.1. Simple Mixture</h4>
    <p>A simple mixture is generated when two or more separate elements are combined together.</p>
    <p><strong>Example:</strong> Apple shake</p>
    
    <h4>1.2. Compound Mixture</h4>
    <p>A compound mixture is produced when two or more simple mixtures are combined.</p>
    <p><strong>Example:</strong> Coffee soda</p>

    <h2>2. Alligation</h2>
    <p>Alligation is a method of solving mathematical problems involving element combinations. This rule allows us to determine the ratio in which two or more ingredients at particular prices must be blended to attain the desired price mixture.</p>

    <h2>3. Mean Price</h2>
    <p>The cost price of a unit quantity of a mixture made by combining two or more elements.</p>
    
    <p>These concepts can be solved by the following methods:</p>
    <ul>
        <li>Formula Method</li>
        <li>Criss-Cross Method</li>
    </ul>

    <h3>3.1. Formula Method</h3>
    <p>The general formula to find the ratio of ingredients in the mixture is:</p>
    <p><strong>(Quantity of cheaper / Quantity of dearer) = ((Cost price of Dearer - Mean price) / (Mean price – Cost price of the cheaper))</strong></p>

    <h4>Example Problem</h4>
    <p><strong>Problem:</strong> In what proportion must tea at Rs. 7.50 per kg be mixed with tea at Rs. 10.50 per kg to produce a mixture worth Rs. 8.50 per kg?</p>
    <p><strong>Solution:</strong></p>
    <p>Applying the formula method with the given data, we get:</p>
    <p><strong>(Quantity of cheaper (X) / Quantity of dearer (Y)) = ((Cost price of Dearer (10.5 Rs) - Mean price (8.5 Rs)) / (Mean price (8.5 Rs) – Cost price of the cheaper (7.5 Rs)))</strong></p>
    <p>⇒ X/Y = (10.5 - 8.5) / (8.5 - 7.5)</p>
    <p>⇒ X/Y = 2/1</p>
    <p>So we get the final ratio as 2 : 1.</p>

    <h3>3.2. Criss-Cross Method</h3>
    <p>The criss-cross method can be represented using a diagram:</p>

    <h4>Example Problem</h4>
    <p><strong>Problem:</strong> In what proportion must tea at Rs. 7.50 per kg be mixed with tea at Rs. 10.50 per kg to produce a mixture worth Rs. 8.50 per kg?</p>
    <p><strong>Solution:</strong></p>
    <p>Using the criss-cross method, we get the answer as 2 : 1.</p>`,
    formulae: [
      {
        id: 1,
        toCalculate: "Ratio of two quantities",
        formuales:
          "Quantity of cheaper/ Quantity of dearer) = ((Cost price of Dearer- Mean price) / (Mean price – cost price of the cheaper))",
      },
      {
        id: 2,
        toCalculate: "Ratio and the mean or average price or quantity",
        formuales: "image Error !",
      },
      {
        id: 3,
        toCalculate:
          "Repeated dilutions (finding the quantity of pure element after ‘n’ replacements)",
        formuales:
          "P x [1 – (R / P)]^n, where P is the initial quantity of pure element R is the quantity replaced every time n is the number of replacements",
      },
    ],
    practiceQuestions: [
      {
        id: 1,
        template:
          "The cost of Type 1 rice is Rs. {{price1}} per kg and Type 2 rice is Rs. {{price2}} per kg. If both Type 1 and Type 2 are mixed in the ratio of {{ratio1}} : {{ratio2}}, then the price per kg of the mixed variety of rice is:",
        limits: {
          price1: [10, 30], // Range for the price of Type 1 rice per kg
          price2: [15, 40], // Range for the price of Type 2 rice per kg
          ratio1: [1, 5], // Range for the ratio of Type 1 rice
          ratio2: [1, 5], // Range for the ratio of Type 2 rice
        },
        correctAnswerFormula:
          "(price1 * ratio1 + price2 * ratio2) / (ratio1 + ratio2)",
        optionsFormula: [
          "(price1 * ratio1 + price2 * ratio2) / (ratio1 + ratio2)",
          "(price1 + price2) / 2",
          "price1 * ratio1 + price2 * ratio2",
          "(price1 + price2) / (ratio1 + ratio2)",
        ],
        explanationTemplate:
          "To find the price per kg of the mixed variety of rice:<br><br>1. **Calculate the total cost of the mixture:**<br>   Multiply the price of each type of rice by its ratio and sum them up.<br>   `Total Cost = (Price1 * Ratio1) + (Price2 * Ratio2)`<br><br>2. **Calculate the total ratio:**<br>   Sum the ratios of both types of rice.<br>   `Total Ratio = Ratio1 + Ratio2`<br><br>3. **Calculate the price per kg of the mixed rice:**<br>   Divide the total cost by the total ratio.<br>   `Price per kg = Total Cost / Total Ratio`<br><br>Using the given values, the price per kg of the mixed variety of rice is Rs. {{final_answer}}.<br><br>",
      },
      {
        id: 2,
        template:
          "A shopkeeper has {{totalQuantity}} kg of rice. A part of which he sells at {{profit1}} profit and remaining at {{loss}} loss. He gains {{overallGain}} on the whole. Find the quantity sold at {{profit1}} profit.",
        limits: {
          totalQuantity: [40, 60], // Range for the total quantity of rice
          profit1: [5, 15], // Range for the profit percentage on the first part
          loss: [5, 15], // Range for the loss percentage on the second part
          overallGain: [5, 10], // Range for the overall gain percentage
        },
        correctAnswerFormula:
          "totalQuantity * (overallGain - (profit1 - loss)) / (profit1 + loss)",
        optionsFormula: [
          "totalQuantity * (overallGain - (profit1 - loss)) / (profit1 + loss)",
          "totalQuantity * profit1 / overallGain",
          "totalQuantity * (profit1 - loss) / (overallGain - (profit1 + loss))",
          "totalQuantity * (profit1 + loss) / overallGain",
        ],
        explanationTemplate:
          "To find the quantity sold at {{profit1}} profit:<br><br>1. **Calculate the gain or loss percentage on each part:**<br>   Let the quantity sold at {{profit1}} profit be `x` kg.<br>   The remaining quantity is `totalQuantity - x` kg.<br><br>2. **Calculate the total gain:**<br>   The overall gain percentage is 7%.<br>   Hence, the gain on the total quantity is 7% of `totalQuantity`.<br><br>3. **Use the gain formula to set up the equation:**<br>   [ \text{Total Gain} = left(x \times \frac{{profit1}}{100}\right) + left((totalQuantity - x) \times left(-\frac{{loss}}{100}\right)\right) ]<br><br>4. **Solve for `x`:**<br>   Set up the equation based on the overall gain percentage and solve for `x`.<br><br>Using the given values, the quantity sold at {{profit1}} profit is {{final_answer}} kg.<br><br>",
      },
    ],
  },
  "chain-rule": {
    description:
      "The Chain Rule can be used in questions that include two or more elements. With the exception of one element, which has one part missing, each element contains two figures. By using subsequent comparison, the chain rule is utilised to determine this missing component of an element.",
    realLife: [
      {
        id: 1,
        title: "",
        content: `"Real-life examples where the concept of Chain Rule is involved are:
Construction projects.

Addressing the Compound Interest problems promptly and accurately.

Estimation of the family budget.

Total class hours at school and college.

To estimate the number of man-days required to complete the project.

`,
      },
    ],
    concepts: `<h1>Understanding the Concepts of Chain Rule</h1>
    <p>The Chain Rule is a subtopic of Time and Work. The fundamental concept behind the Chain Rule is that a certain number of people will work for a certain number of days to complete the given piece of work.</p>
    <p>Generally, work depends upon various parameters like the number of people working, hours per day for which they work, and the number of days for which they operate. In dissimilar group problems, efficiency is also a parameter.</p>

    <p><strong>Work done = Number of persons × Time (Day × Hours)</strong></p>
    <p><strong>W = M × T</strong></p>

    <p>Here, the unit of work is man-days or man-hours. The problems of time and work can primarily be divided into two types:</p>
    <ol>
        <li>The first type includes problems where individuals work with different efficiencies, alone or in combination, to complete a task.</li>
        <li>The second type includes problems where group efficiencies are involved. Chain Rule concepts can be applied to group efficiency problems.</li>
    </ol>

    <p>Also, when two work scenarios are given, we can change the above formula as:</p>
    <p><img src="chain_rule_concepts_formula.png" alt="Chain Rule Concepts and Formula"></p>

    <h2>Example Problem</h2>
    <p><strong>Problem:</strong> 39 persons can repair a road in 12 days, working 5 hours daily. How many days will 30 people, working 6 hours a day, complete the work?</p>
    <p><strong>Solution:</strong></p>
    <p>Applying the chain rule formula, we get:</p>
    <p><strong>[39(M<sub>1</sub>) × 12(D<sub>1</sub>) × 5(T<sub>1</sub>) / 1(W<sub>1</sub>)] = [30(M<sub>2</sub>) × X(D<sub>2</sub>) × 6(T<sub>2</sub>) / 1(W<sub>2</sub>)]</strong></p>
    <p>Here, work is the same in both cases, so we can take it as 1.</p>
    <p><strong>39 × 5 × 12 = 30 × X × 6</strong></p>
    <p>In conclusion, X = 13 Days.</p>`,
    formulae: [
      {
        id: 1,
        toCalculate: "M1 ",
        formuales: "Number of men in the first scenario,",
      },
      {
        id: 2,
        toCalculate: "D1",
        formuales: "Number of days in the first scenario,",
      },
      {
        id: 3,
        toCalculate: "T1",
        formuales: "Number of hours worked per day in the first scenario,",
      },
      {
        id: 4,
        toCalculate: "W1",
        formuales: "Total work completed in the first scenario.",
      },
      {
        id: 5,
        toCalculate: "M2",
        formuales: "Number of men in the second scenario,",
      },
      {
        id: 6,
        toCalculate: "D2",
        formuales: "Number of days in the second scenario,",
      },
      {
        id: 7,
        toCalculate: "T2",
        formuales: "Number of hours worked per day in the second scenario,",
      },
      {
        id: 8,
        toCalculate: "W2 ",
        formuales: "Total work completed in the second scenario.",
      },
    ],
    practiceQuestions: [
      {
        id: 2,
        template:
          "4 mat-weavers can weave 4 mats in 4 days. At the same rate, how many mats would be woven by 8 mat-weavers in 8 days?",
        limits: {
          initial_weavers: [4, 10], // Range for the number of initial mat-weavers
          initial_mats: [4, 10], // Range for the number of initial mats
          initial_days: [4, 10], // Range for the initial number of days
          new_weavers: [4, 12], // Range for the number of new mat-weavers
          new_days: [4, 12], // Range for the number of new days
        },
        correctAnswerFormula:
          "(new_weavers * new_days / initial_weavers / initial_days) * initial_mats",
        optionsFormula: [
          "(new_weavers * new_days / initial_weavers / initial_days) * initial_mats",
          "(new_weavers / initial_weavers) * (new_days / initial_days) * initial_mats",
          "(new_weavers / initial_weavers) * initial_mats",
          "(new_days / initial_days) * initial_mats",
        ],
        explanationTemplate:
          "To determine how many mats 8 mat-weavers can weave in 8 days:<br><br>1. **Find the Rate of Weaving:**<br>   4 mat-weavers can weave 4 mats in 4 days. This implies that the rate is 1 mat-weaver can weave 1 mat in 4 days.<br><br>2. **Calculate the Rate for 8 Mat-Weavers:**<br>   We need to scale the initial rate based on the new number of mat-weavers and days.<br>   Use the formula:<br>   [ \text{Number of mats} = left(\frac{\text{new_weavers}}{\text{initial_weavers}}\right) \times left(\frac{\text{new_days}}{\text{initial_days}}\right) \times \text{initial_mats} ]<br><br>3. **Substitute Values:**<br>   Plug in the values to get the number of mats woven by 8 mat-weavers in 8 days.<br>   The result will be {{final_answer}} mats.<br><br>",
      },
      {
        id: 3,
        template:
          "If {{initial_pumps}} pumps can raise {{initial_water}} tonnes of water in {{initial_days}} days, working {{initial_hours}} hours a day, in how many days will {{new_pumps}} pumps raise {{new_water}} tonnes, working {{new_hours}} hours a day?",
        limits: {
          initial_pumps: [10, 20], // Range for the number of initial pumps
          initial_water: [2000, 2200], // Range for the amount of initial water
          initial_days: [5, 15], // Range for the number of initial days
          initial_hours: [5, 10], // Range for the number of hours per day initially
          new_pumps: [10, 20], // Range for the number of new pumps
          new_water: [1600, 1800], // Range for the amount of new water
          new_hours: [5, 10], // Range for the number of hours per day in new scenario
        },
        correctAnswerFormula:
          "((initial_pumps * initial_days * initial_hours) / (new_pumps * new_hours)) * (initial_water / new_water)",
        optionsFormula: [
          "((initial_pumps * initial_days * initial_hours) / (new_pumps * new_hours)) * (initial_water / new_water)",
          "(initial_pumps / new_pumps) * (new_hours / initial_hours) * (initial_days * (initial_water / new_water))",
          "(initial_pumps * initial_days * new_hours) / (new_pumps * initial_hours)",
          "(new_pumps * new_hours) / (initial_pumps * initial_days) * (initial_water / new_water)",
        ],
        explanationTemplate:
          "To find out how many days it will take for {{new_pumps}} pumps to raise {{new_water}} tonnes of water, working {{new_hours}} hours a day:<br><br>1. **Calculate the Total Work Done:**<br>   The total work done by 18 pumps in 10 days, working 7 hours a day, is:<br>   [ \text{Total Work} = \text{initial_pumps} \times \text{initial_days} \times \text{initial_hours} ]<br><br>2. **Find the Work Done Per Day by New Pumps:**<br>   Calculate how much work can be done by 16 pumps working 9 hours a day:<br>   [ \text{Work Done Per Day} = \frac{\text{Total Work}}{\text{new_pumps} \times \text{new_hours}} ]<br><br>3. **Determine the Number of Days:**<br>   To find the number of days required, use the formula:<br>   [ \text{Number of Days} = \frac{\text{new_water}}{\text{Work Done Per Day}} ]<br>   Substitute the values to get the number of days required to raise {{new_water}} tonnes of water.<br>   The result will be {{final_answer}} days.<br><br>",
      },
      {
        id: 3,
        template:
          "In a camp, there is a meal for {{men_capacity}} men or {{children_capacity}} children. If {{children_present}} children have taken the meal, how many men will be catered to with the remaining meal?",
        limits: {
          men_capacity: [100, 150], // Range for the number of men that the meal can cater to
          children_capacity: [150, 250], // Range for the number of children that the meal can cater to
          children_present: [100, 200], // Range for the number of children who have taken the meal
        },
        correctAnswerFormula:
          "((men_capacity * children_present) / children_capacity) - men_capacity",
        optionsFormula: [
          "((men_capacity * (children_capacity - children_present)) / children_capacity)",
          "((men_capacity * children_present) / children_capacity)",
          "((men_capacity - (children_present * men_capacity / children_capacity)))",
          "((men_capacity * (children_capacity - children_present)) / children_capacity) + men_capacity",
        ],
        explanationTemplate:
          "To determine how many men can be catered to with the remaining meal after {{children_present}} children have taken the meal:<br><br>1. **Calculate the Total Meal Capacity in Terms of Children:**<br>   The total meal capacity is sufficient for {{children_capacity}} children or {{men_capacity}} men.<br><br>2. **Calculate the Remaining Meal for Men:**<br>   The remaining meal after {{children_present}} children have taken their share is:<br>   [ \text{Remaining Meal} = \text{Total Meal Capacity} - \text{Meal Consumed by Children} ]<br>   [ \text{Remaining Meal} = \text{(men_capacity * (children_capacity - children_present)) / children_capacity} ]<br><br>3. **Find the Number of Men that Can be Catered to with the Remaining Meal:**<br>   The number of men that can be catered to with the remaining meal is:<br>   [ \text{Number of Men} = \text{Remaining Meal} / \text{Meal per Man} ]<br>   Substitute the values into the formula to get the number of men catered to with the remaining meal.<br>   The result will be {{final_answer}} men.<br><br>",
      },
    ],
  },

  "races-and-games": {
    description:
      "A Race is a challenge in which contestants must complete a specific distance in the shortest amount of time. Races and games are a subtopic of Time, Speed, and Distance.",
    realLife: [
      {
        id: 1,
        title: "",
        content: `In the August 2022 Formula One race, Max Verstappen (first) beat S. Pérez by 17.84 seconds. The results that we see at the end of the race are generally determined by the time taken by the winner as well as other participants. For example, the runner-up took 17.8 seconds longer to complete the race. The second runner-up took an additional 26.88 seconds to complete the race.`,
      },
      {
        id: 2,
        title: "",
        content:
          "It is also used to evaluate the performance of athletes. Assume that in the first week, athlete A takes 10 minutes to run 1000 metres. He only takes 9 minutes to cover the 1000 metre distance next week. Athlete A performance has clearly increased.",
      },
    ],
    concepts: `  <h1>Understanding the Concepts of Races and Games</h1>
    <p>Races are a sub-concept of time, speed, and distance, and most racing problems can be handled by understanding these concepts.</p>

    <p>First and foremost, we must have a fundamental conceptual knowledge of the relationship between Time, Speed, and Distance.</p>
    <p><strong>Speed = Distance / Time.</strong></p>

    <p>Second, in order to solve problems faster, we must comprehend the concept of proportionality between these terms.</p>

    <h2>1. Direct Proportion</h2>
    <p>The term 'direct proportion' refers to the direct link between two quantities. When one quantity rises, the other rises as well, and vice versa. As a result, a direct proportion is expressed as <strong>y ∝ x</strong>.</p>

    <h3>For Example</h3>
    <ul>
        <li>When the speed of a car is raised, it travels a greater distance in a given amount of time.</li>
        <li>Time & Distance are directly proportional.</li>
        <li>Speed & Distance are directly proportional.</li>
    </ul>

    <h2>2. Inverse Proportion</h2>
    <p>Inverse proportion explains the connection between two quantities in which one rises while the other falls and vice versa. As a result, an inverse proportion is expressed as <strong>y ∝ 1/x</strong>.</p>

    <h3>For Example</h3>
    <ul>
        <li>If the speed of a vehicle is increased, it will cover a fixed distance in less time.</li>
        <li>Time & Speed are inversely proportional.</li>
    </ul>

    <h2>Example Problem</h2>
    <p><strong>Problem:</strong> A can defeat B by 25 metres in a 100-metre race, while B can beat C by 4 metres. A can beat C in the same race by:</p>

    <p><strong>Solution:</strong></p>
    <p>This problem is commonly addressed using ratio concepts; from the provided data, we can deduce that after A completes the race, B covers 75 metres; this may be expressed as:</p>
    <p><strong>A : B = 100 : 75</strong> — Equation 1</p>

    <p>Conversely, we can deduce from the data that when B completes the race, C covers 96 metres, which may be written as:</p>
    <p><strong>B : C = 100 : 96</strong> — Equation 2</p>

    <p>When we combine these two equations, we obtain:</p>
    <p><strong>A : B : C = 100 : 75 : 72</strong></p>

    <p>So A beats C by <strong>(100 - 72) metres = 28 metres</strong>.</p>`,
    formulae: [
      {
        id: 1,
        toCalculate: "Speed",
        formuales: "Distance / Time",
      },
      {
        id: 2,
        toCalculate:
          "Distance covered by A : B, If A beats B by ‘X’ metre in a ‘N’ metre race",
        formuales: "N : (N-X).",
      },
      {
        id: 3,
        toCalculate: "A beats B by ‘N’ seconds",
        formuales: "B will take N more seconds to complete the race.",
      },
      {
        id: 4,
        toCalculate: "A gives B a start of ‘X’ metre",
        formuales:
          "To cover a race of 100 metre in this case, A will have to cover 100 metre while B will have to cover only (100−x) metre.While A starts from the starting point and B starts X metre ahead of the same starting point at the same time.",
      },
      {
        id: 5,
        toCalculate:
          "Relative Speed Formula when two objects are traveling in the same direction",
        formuales: "X - Y",
      },
      {
        id: 6,
        toCalculate:
          "Upstream Speed (Effective Speed Formula when two objects are traveling in opposite directions)",
        formuales: "SB-SW",
      },
      {
        id: 7,
        toCalculate:
          "Downstream Speed (Relative Speed Formula when two objects are traveling in the same direction)",
        formuales: "SB + SW",
      },
    ],
    practiceQuestions: [
      {
        id: 1,
        template:
          "In a {{race_distance}} metres race, A beats B by {{distance_beaten}} m or {{time_difference}} seconds. A's time over the course is:",
        limits: {
          race_distance: [100, 500], // Range for the race distance
          distance_beaten: [10, 50], // Range for how much A beats B by
          time_difference: [5, 15], // Range for the time difference in seconds
        },
        correctAnswerFormula:
          "(distance_beaten / time_difference) * time_difference",
        optionsFormula: [
          "(distance_beaten / time_difference) * time_difference",
          "(distance_beaten / time_difference) * race_distance / 100",
          "(distance_beaten / time_difference) * race_distance / 100",
          "(distance_beaten / time_difference) * race_distance / 10",
        ],
        explanationTemplate:
          "To find A's time over the course of a {{race_distance}} metres race where A beats B by {{distance_beaten}} m or {{time_difference}} seconds:<br><br>1. **Calculate B's Speed:**<br>   B covers {{distance_beaten}} metres in {{time_difference}} seconds, so B's speed is:<br>   [ \text{Speed of B} = \frac{{\text{distance_beaten}}}{{\text{time_difference}}} ]<br><br>2. **Calculate A's Time:**<br>   A covers the whole distance of {{race_distance}} metres. We need to find A's time over the course.<br>   Since A beats B by {{distance_beaten}} metres, it means A's time to cover the distance is:<br>   [ \text{A's Time} = \frac{{\text{race_distance}}}{{\text{Speed of A}}} ]<br>   where the speed of A can be calculated as:<br>   [ \text{Speed of A} = \frac{{\text{distance_beaten}}}{{\text{time_difference}}} ]<br><br>3. **Substitute Values:**<br>   Substitute the values into the formula to get A's time.<br>   Using the given values, A's time over the course is {{final_answer}} seconds.<br><br>",
      },
      // {
      //   id: 2,
      //   template:
      //     "In a {{race_distance}} m race, the ratio of the speeds of two contestants A and B is {{speed_ratio}}. A has a start of {{start_distance}} m. Then, A wins by:",
      //   limits: {
      //     race_distance: [100, 1000], // Range for the race distance
      //     speed_ratio: [
      //       [1, 2],
      //       [3, 4],
      //     ], // Range for speed ratios
      //     start_distance: [50, 200], // Range for the start distance
      //   },
      //   correctAnswerFormula:
      //     "(race_distance - start_distance) * (speed_ratio[1] / (speed_ratio[0] + speed_ratio[1]))",
      //   optionsFormula: [
      //     "(race_distance - start_distance) * (speed_ratio[1] / (speed_ratio[0] + speed_ratio[1]))",
      //     "(race_distance - start_distance) * (speed_ratio[0] / (speed_ratio[1] + speed_ratio[0]))",
      //     "(race_distance - start_distance) * (speed_ratio[0] / speed_ratio[1])",
      //     "(race_distance - start_distance) * (speed_ratio[1] / speed_ratio[0])",
      //   ],
      //   explanationTemplate:
      //     "To find how much A wins by in a {{race_distance}} m race where A has a start of {{start_distance}} m and the ratio of their speeds is {{speed_ratio}}:<br><br>1. **Calculate the Distance Covered by B:**<br>   B covers the whole distance of {{race_distance}} m, while A has a head start of {{start_distance}} m. The effective distance B needs to cover is:<br>   [ \text{Effective Distance} = \text{race_distance} - \text{start_distance} ]<br><br>2. **Calculate the Time Taken by B to Cover Effective Distance:**<br>   B’s time to cover the effective distance can be found using:<br>   [ \text{Time Taken by B} = \frac{\text{Effective Distance}}{\text{Speed of B}} ]<br>   Since the speeds are in the ratio, you can express the speed of A in terms of B's speed:<br>   [ \text{Speed of A} = \frac{\text{speed_ratio[0]}}{\text{speed_ratio[1]}} \times \text{Speed of B} ]<br><br>3. **Calculate the Distance Covered by A in the Same Time:**<br>   Use the time taken by B to determine the distance covered by A in the same duration:<br>   [ \text{Distance Covered by A} = \text{Speed of A} \times \text{Time Taken by B} ]<br><br>4. **Calculate the Winning Margin:**<br>   The winning margin is:<br>   [ \text{Winning Margin} = \text{Distance Covered by A} - \text{start_distance} ]<br><br>5. **Substitute Values:**<br>   Substitute the values into the formula to find out by how much A wins. The result is {{final_answer}} meters.<br><br>",
      // },
    ],
  },
  logarithm: {
    description:
      "The logarithm is the opposite of exponentiation as a function. That is, the logarithm of a given integer x is the exponent to which another set number, the base b, must be increased in order to generate x.",
    realLife: [
      {
        id: 1,
        title: "",
        content: `Logarithms are useful in finance when dealing with continuous interest rate accumulation.`,
      },
      {
        id: 2,
        title: "",
        content:
          "Logarithmic scales are mostly utilised in the measurement of the Richter scale in earthquakes.",
      },
      {
        id: 3,
        title: "",
        content:
          "It is a logarithmic scale whenever you refer to something in db (decibels), such as loudness, WiFi signal intensity, etc.",
      },
    ],
    concepts: `<h1>Understanding the Concepts of Logarithm</h1>
    <p>A logarithm is the power to which a number must be raised to obtain another number. Logarithmic problems can often be solved by applying a few key formulas and properties of logarithms.</p>

    <p>The basic logarithmic equation can be expressed as:</p>
    <p><strong>log<sub>a</sub>b = X</strong> if and only if <strong>a<sup>X</sup> = b</strong></p>

    <h2>Properties and Formulas of Logarithms</h2>
    <p>For any <strong>a</strong> where <strong>a > 0</strong> and <strong>a ≠ 1</strong>, and any <strong>x</strong> and <strong>y</strong> where <strong>y > 0</strong>, the following properties hold:</p>

    <ul>
        <li><strong>log<sub>a</sub>1 = 0</strong></li>
        <li><strong>log<sub>a</sub>a = 1</strong></li>
        <li><strong>log<sub>a</sub>(x . y) = log<sub>a</sub>x + log<sub>a</sub>y</strong></li>
        <li><strong>log<sub>a</sub>(x / y) = log<sub>a</sub>x − log<sub>a</sub>y</strong></li>
        <li><strong>log<sub>a</sub>(1 / x) = −log<sub>a</sub>x</strong></li>
        <li><strong>log<sub>a</sub>(x<sup>p</sup>) = p * log<sub>a</sub>x</strong></li>
        <li><strong>log<sub>a</sub>x = log<sub>b</sub>x / log<sub>b</sub>a</strong> (Change of Base Formula)</li>
        <li><strong>log<sub>a</sub>x = 1 / log<sub>x</sub>a</strong></li>
    </ul>

    <p>By applying these formulas and properties, you can efficiently solve logarithmic problems.</p>
`,
    formulae: [
      {
        id: 1,
        toCalculate: "<wrong>",
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
    practiceQuestions: [],
  },
  ages: {
    description:
      "Age is defined as the length of time that an individual has existed. Age is expressed in hours, months, years, decades, etc. Ages problems are centred on people's ages. These types of questions are asked in a word problem format",
    realLife: [
      {
        id: 1,
        title: "",
        content: `When you go to a grocery store. To determine the freshness of a product, you check its expiry or best before date.`,
      },
      {
        id: 2,
        title: "",
        content:
          "When someone inquires about your sibling's age, you respond that she is three years younger or older than you.",
      },
      {
        id: 3,
        title: "",
        content:
          "Analysing the growth rings of a chopped tree stump is the most precise approach for foresters to establish the age of a tree.",
      },
    ],
    concepts: ` <h1>Understanding the Concepts of Ages</h1>
    <p>Ages questions in mathematics are a special type of mathematical problem that involve the ages of individuals. These problems usually include the ages of two or more individuals and the relationship between their ages over a period of time.</p>

    <h2>Different Concepts of Ages</h2>
    <ul>
        <li>Average Based</li>
        <li>Algebra Based</li>
        <li>Ratio Based</li>
    </ul>

    <h2>1. Average Based</h2>
    <p>These problems involve using fundamental average principles. The average is calculated as:</p>
    <p><strong>Average = Sum of elements / Number of elements</strong></p>
    <p>Example Problem:</p>
    <p>The average age of the husband, wife, and their child 3 years ago was 27 years, and that of the wife and the child 5 years ago was 20 years. What is the present age of the husband?</p>
    <p><strong>Solution:</strong></p>
    <p>Sum of the present ages of husband, wife, and child = (27 * 3 + 3 * 3) years = 90 years.</p>
    <p>Sum of the present ages of wife and child = (20 * 2 + 5 * 2) years = 50 years.</p>
    <p>Therefore, Husband's present age = (90 - 50) years = 40 years.</p>

    <h2>2. Algebra Based</h2>
    <p>These problems involve using foundational algebra principles, such as equation formation.</p>
    <p>Example Problem:</p>
    <p>The sum of the ages of 5 children born at intervals of 3 years each is 50 years. What is the age of the youngest child?</p>
    <p><strong>Solution:</strong></p>
    <p>Let the ages of the children be x, (x + 3), (x + 6), (x + 9), and (x + 12) years.</p>
    <p>Then, x + (x + 3) + (x + 6) + (x + 9) + (x + 12) = 50</p>
    <p>5x = 20</p>
    <p>x = 4.</p>
    <p>Age of the youngest child = x = 4 years.</p>

    <h2>3. Ratio Based</h2>
    <p>These problems involve using foundational ratio principles.</p>
    <p>Example Problem:</p>
    <p>Sameer and Anand's present ages are in the ratio 5:4, respectively. Three years hence, the ratio of their ages will become 11:9. What is Anand's present age?</p>
    <p><strong>Soluti`,
    formulae: [
      {
        id: 1,
        toCalculate: "Age 'n' times",
        formuales: "(nx) years",
      },
      {
        id: 2,
        toCalculate: "Age 'n' years later",
        formuales: "(n+x)years",
      },
      {
        id: 3,
        toCalculate: "Age n years ago",
        formuales: "(n-x)years",
      },
      {
        id: 4,
        toCalculate: "Age of A & B in a ratio a:b",
        formuales: "(ax and bx) years",
      },
      {
        id: 5,
        toCalculate: "1/n of the Age",
        formuales: "(x/n) Years",
      },
    ],
    practiceQuestions: [
      {
        id: 1,
        template:
          "The sum of ages of 5 children born at the intervals of {{interval}} years each is {{total_age}} years. What is the age of the youngest child?",
        limits: {
          interval: [2, 5], // Range for the interval in years
          total_age: [40, 60], // Range for the total sum of ages
        },
        correctAnswerFormula: "total_age / 5 - interval * (5 - 1) / 10",
        optionsFormula: [
          "total_age / 5 - interval * (5 - 1) / 10",
          "total_age / 5 - interval * (5 - 1)",
          "total_age / 5 + interval * (5 - 1) / 10",
          "total_age / 5 - interval * 5",
        ],
        explanationTemplate:
          "To find the age of the youngest child when the sum of ages of 5 children born at intervals of {{interval}} years each is {{total_age}} years:<br><br>1. **Understand the Age Sequence:**<br>   The ages of the children can be represented as: <br>   [ \text{Age of youngest child} = x ]<br>   [ \text{Age of second child} = x + \text{interval} ]<br>   [ \text{Age of third child} = x + 2 \times \text{interval} ]<br>   [ \text{Age of fourth child} = x + 3 \times \text{interval} ]<br>   [ \text{Age of fifth child} = x + 4 \times \text{interval} ]<br><br>2. **Sum of Ages:**<br>   The sum of the ages is:<br>   [ \text{Total Age} = x + (x + \text{interval}) + (x + 2 \times \text{interval}) + (x + 3 \times \text{interval}) + (x + 4 \times \text{interval}) ]<br>   Simplify to:<br>   [ \text{Total Age} = 5x + 10 \times \text{interval} ]<br><br>3. **Calculate the Youngest Child's Age:**<br>   Rearranging the formula to find the age of the youngest child:<br>   [ x = \frac{\text{Total Age} - 10 \times \text{interval}}{5} ]<br>   Substitute the given values to find the age of the youngest child. The age of the youngest child is {{final_answer}} years.<br><br>",
      },
      //
      {
        id: 2,
        template:
          "A father said to his son, 'I was as old as you are at the present at the time of your birth'. If the father's age is {{father_age}} years now, the son's age five years back was:",
        limits: {
          father_age: [30, 50], // Range for the father's age
        },
        correctAnswerFormula: "father_age / 2 - 5",
        optionsFormula: [
          "father_age / 2 - 5",
          "father_age / 2 - 10",
          "father_age / 2",
          "father_age / 2 + 5",
        ],
        explanationTemplate:
          "To find the son's age five years back:<br><br>1. **Set Up the Equation:**<br>   Let the son's present age be ( x ). According to the statement, the father's age at the time of the son's birth was the same as the son's present age. Therefore, the father's current age is equal to the sum of the son's age and the son's age at the time of his birth.<br>   Thus, the father's age is ( x + x ) or ( 2x ).<br><br>2. **Solve for Son's Age:**<br>   Given that the father's current age is {{father_age}}, we have:<br>   [ 2x = \text{father_age} ]<br>   [ x = \frac{\text{father_age}}{2} ]<br><br>3. **Calculate the Son's Age Five Years Back:**<br>   The son's age five years back is ( x - 5 ). Substitute ( x = \frac{\text{father_age}}{2} ):<br>   [ \text{Son's Age Five Years Back} = \frac{\text{father_age}}{2} - 5 ]<br><br>",
      },
    ],
  },

  "pipes-and-cistern": {
    description:
      "Pipes and Cistern is a problem that is remarkably related to 'Time and Work,' but with the inclusion of the notion of negative work. Thus, having a strong knowledge of Individual efficiency concepts in Time and Work can effectively come up with solutions.",
    realLife: [
      {
        id: 1,
        title: "",
        content: `In daily activities, we can observe its applicability in filling the main water storage tank and the time it takes for the water to be supplied.`,
      },
      {
        id: 2,
        title: "",
        content:
          "In larger scale applications, such as dams, reservoirs, ponds, tanks, etc., inflow and water discharge rate calculation.",
      },
    ],
    concepts: `<h1>Understanding the Concepts of Pipes and Cisterns</h1>
    <p>Pipes and Cisterns is a subtopic of Time & Work that includes the concept of individual efficiency and negative work. In this context, time spent filling the cistern equals the time spent doing the work, the volume of the cistern equals total work, and the speed of filling the cistern equals work efficiency.</p>
    <p>When a pipe is connected to a cistern to fill it, it is referred to as an inlet. This represents positive work. Conversely, when another pipe is connected to the cistern to empty it, it is referred to as an outlet or a 'leak,' representing negative work.</p>
    
    <h2>Methods to Solve Pipes and Cistern Problems</h2>
    <ul>
        <li>Fraction Method or Unitary Work Method</li>
        <li>LCM Method</li>
    </ul>
    
    <h2>1. Fraction Method or Unitary Work Method</h2>
    <p>In this method, assume the total work to be 1 unit, calculate the individual efficiency in fractions, and solve the problem.</p>
    <p>Example Problem:</p>
    <p>Pipes A and B can fill a tank in 30 and 40 hours respectively. Pipe C can empty it in 20 hours. If all three pipes are opened together, how long will it take to fill the tank?</p>
    
    <p><strong>Step 1:</strong> Assume the total work to be 1.</p>
    <p><strong>Step 2:</strong> Calculate the individual efficiencies of the given pipes:</p>
    <ul>
        <li>Pipe A fills the tank in 30 hours, so in 1 hour, it fills <strong>1/30</strong> of the tank.</li>
        <li>Pipe B fills the tank in 40 hours, so in 1 hour, it fills <strong>1/40</strong> of the tank.</li>
        <li>Pipe C empties the tank in 20 hours, so in 1 hour, it empties <strong>1/20</strong> of the tank.</li>
    </ul>
    <p><strong>Step 3:</strong> Calculate the combined efficiency of all the pipes in an hour:</p>
    <p>Combined work done in 1 hour = (1/30) + (1/40) - (1/20)</p>
    <p>Solving this, Combined work done in 1 hour = 1/120</p>
    
    <p><strong>Step 4:</strong> Taking the inverse of work done in 1 hour gives the total time to complete the task.</p>
    <p>So, the tank will be filled in 120 hours.</p>
    
    <h2>2. LCM Method</h2>
    <p>In this method, assume the total work to be the LCM of the given numbers, calculate the individual efficiency in terms of integers, and solve the problem.</p>
    <p>Example Problem:</p>
    <p>Pipes A and B can fill a tank in 30 and 40 hours respectively. Pipe C can empty it in 20 hours. If all three pipes are opened together, how long will it take to fill the tank?</p>
    
    <p><strong>Step 1:</strong> Assume the total work to be the LCM of 30, 40, and 20. Here, LCM = 120.</p>
    <p><strong>Step 2:</strong> Calculate the individual efficiencies of the given pipes with LCM as total work:</p>
    <ul>
        <li>Pipe A will fill 120 units of work in 30 hours, so in 1 hour, it fills <strong>120/30 = 4</strong> units of work.</li>
        <li>Pipe B will fill 120 units of work in 40 hours, so in 1 hour, it fills <strong>120/40 = 3</strong> units of work.</li>
        <li>Pipe C will empty 120 units of work in 20 hours, so in 1 hour, it empties <strong>120/20 = 6</strong> units of work.</li>
    </ul>
    <p><strong>Step 3:</strong> Calculate the combined efficiency of all the pipes in an hour:</p>
    <p>Combined work done in 1 hour = 4 + 3 - 6</p>
    <p>Solving this, Combined work done in 1 hour = 1 unit.</p>
    
    <p><strong>Step 4:</strong> Divide the total work by the work done in 1 hour:</p>
    <p>120 / 1 = 120</p>
    
    <p>So, the tank will be filled in 120 hours.</p>`,
    formulae: [
      {
        id: 1,
        toCalculate: "When two inlet pipes are given",
        formuales: "Total time taken to fill the tank = ((XY)/Y+X) hours",
      },
      {
        id: 2,
        toCalculate: "When three inlet pipes are given",
        formuales:
          "Total time taken to fill the tank = (XYZ)/ (XY + YZ + ZX) hours",
      },
      {
        id: 3,
        toCalculate: "When inlet efficiency is more than the outlet",
        formuales: "Total time taken to fill the tank = (BA) / (A-B) hours",
      },
      {
        id: 4,
        toCalculate: "When outlet efficiency is more than the inlet",
        formuales: "Total time taken to empty the tank = (BA) / (B-A) hours",
      },
      {
        id: 5,
        toCalculate: "When two inlet and one outlet pipe Is given",
        formuales:
          "Total time taken to fill the tank = (1/A)+(1/B)-(1/C) hours",
      },
    ],
    practiceQuestions: [
      {
        id: 1,
        template:
          "Two pipes A and B can fill a cistern in {{combined_time}} hours together. If opened separately, pipe B would have taken {{additional_time}} hours more than pipe A to fill the cistern. How much time will be taken by pipe A to fill the cistern separately?",
        limits: {
          combined_time: [1, 10], // Range for the time taken by both pipes to fill the cistern together
          additional_time: [1, 10], // Range for the additional time B takes compared to A
        },
        correctAnswerFormula:
          "(combined_time * additional_time) / (additional_time - 6)",
        optionsFormula: [
          "(combined_time * additional_time) / (additional_time - combined_time)",
          "(combined_time * additional_time) / (combined_time - additional_time)",
          "(combined_time + additional_time) / (additional_time - combined_time)",
          "(combined_time * (additional_time + 6)) / additional_time",
        ],
        explanationTemplate:
          "To find the time taken by pipe A to fill the cistern separately:<br><br>1. **Define Variables:**<br>   Let the time taken by pipe A to fill the cistern separately be ( x ) hours.<br>   Then the time taken by pipe B to fill the cistern separately will be ( x + \text{additional_time} ) hours.<br><br>2. **Calculate the Rates:**<br>   The filling rate of pipe A is ( \frac{1}{x} ) cisterns per hour.<br>   The filling rate of pipe B is ( \frac{1}{x + \text{additional_time}} ) cisterns per hour.<br>   The combined filling rate is ( \frac{1}{\text{combined_time}} ) cisterns per hour.<br><br>3. **Set Up the Equation:**<br>   The sum of the rates of pipes A and B equals their combined rate:<br>   [ \frac{1}{x} + \frac{1}{x + \text{additional_time}} = \frac{1}{\text{combined_time}} ]<br>   Solve this equation to find ( x ), the time taken by pipe A to fill the cistern separately.<br><br>4. **Substitute Values:**<br>   Substitute the given values into the formula to find the time taken by pipe A.<br>",
      },
      {
        id: 2,
        template:
          "The work efficiency of pipe B is 2 times that of pipe A, and the work efficiency of pipe C is 2 times that of pipe B. All three pipes A, B, and C can fill a cistern in {{combined_time}} hours together. Find the time taken by pipe A to fill the cistern alone.",
        limits: {
          combined_time: [1, 10], // Range for the time taken by all three pipes to fill the cistern together
        },
        correctAnswerFormula: "combined_time * 7 / 3",
        optionsFormula: [
          "combined_time * 7 / 3",
          "combined_time * 7 / 4",
          "combined_time * 5 / 2",
          "combined_time * 5 / 3",
        ],
        explanationTemplate:
          "To find the time taken by pipe A to fill the cistern alone:<br><br>1. **Define Variables:**<br>   Let the time taken by pipe A to fill the cistern alone be ( x ) hours.<br>   Therefore, the work efficiencies are:<br>   - Pipe A's efficiency is ( \frac{1}{x} ) cisterns per hour.<br>   - Pipe B's efficiency is ( \frac{2}{x} ) cisterns per hour.<br>   - Pipe C's efficiency is ( \frac{4}{x} ) cisterns per hour.<br><br>2. **Calculate Combined Efficiency:**<br>   The combined efficiency of all three pipes is:<br>   [ \text{Combined Efficiency} = \frac{1}{x} + \frac{2}{x} + \frac{4}{x} = \frac{7}{x} ]<br>   This combined efficiency fills the cistern in ( \text{combined_time} ) hours, so:<br>   [ \text{Combined Efficiency} = \frac{1}{\text{combined_time}} ]<br><br>3. **Set Up the Equation:**<br>   Equate the combined efficiency to the reciprocal of the combined time:<br>   [ \frac{7}{x} = \frac{1}{\text{combined_time}} ]<br><br>4. **Solve for ( x ):**<br>   Rearranging gives:<br>   [ x = \text{combined_time} \times 7 ]<br><br>5. **Substitute Values:**<br>   Substitute the given value of combined_time to find ( x ), the time taken by pipe A to fill the cistern alone.<br>",
      },
    ],
  },
  "problem-on-trains": {
    description:
      "Problems on trains involve calculating various parameters such as speed, time, and distance when two objects, typically trains, are moving relative to each other...",
    realLife: [
      {
        id: 1,
        title: "Meeting Points of Moving Vehicles",
        content:
          "The relative speed concept helps us determine the meeting point of two vehicles, like trains or buses, moving towards each other.",
      },
      {
        id: 2,
        title: "Transportation Time Calculation",
        content:
          "Relative speed is used to calculate the time and speed needed to transport goods when two objects are moving in the same or opposite directions.",
      },
    ],
    concepts: `
    <h1>Understanding the Concepts of Problems on Trains</h1>
    <p>Problems involving trains are a common part of competitive exams and require a strong understanding of concepts such as Time, Speed, Distance, and Relative Speed. These principles are not only fundamental but are also interlinked, allowing us to solve complex problems efficiently. This guide will walk you through these key concepts and their application to problems involving trains.</p>
    
    <h2>Key Concepts of Problems on Trains</h2>
    <p>Let's explore the fundamental concepts that are essential for solving problems related to trains:</p>
    
    <h3>1. Speed</h3>
    <p>Speed is a fundamental concept in motion that describes how quickly or slowly an object moves. It is defined as the distance traveled divided by the time taken to cover that distance. Speed is typically measured in meters per second (m/s) or kilometers per hour (km/hr).</p>
    <p><strong>Formula:</strong></p>
    <p><strong>Speed = Distance / Time</strong></p>
    <p>Understanding speed is crucial in problems involving trains, as it allows us to determine how fast a train is moving over a certain distance, which is often a key part of solving these problems.</p>
    
    <h3>2. Time</h3>
    <p>Time is another essential element in problems on trains. In physics, time is a scalar quantity measured in seconds (s), minutes (min), and hours (hr). Time can be defined as the duration during which an event occurs, and it is crucial in determining how long a train takes to travel from one point to another.</p>
    <p>In the context of problems on trains, time is often used to calculate the speed of the train, given the distance it has traveled, or to find the distance covered given the speed and time.</p>
    
    <h3>3. Distance</h3>
    <p>Distance refers to the total movement of an object, irrespective of direction. It is the length of the path traveled by an object and is measured in units such as meters (m), kilometers (km), miles, and feet. In train problems, distance could refer to the length of the journey the train covers or the distance between two points, such as two stations.</p>
    <p><strong>Formula:</strong></p>
    <p><strong>Distance = Speed × Time</strong></p>
    <p>This formula is often rearranged depending on the problem, helping to solve for speed, distance, or time as required.</p>
    
    <h3>4. Unit Conversion</h3>
    <p>Unit conversion plays a vital role in solving train problems, especially when speed and distance are provided in different units. It is essential to convert all units into a common system before solving the problem. A common conversion in train problems is between kilometers per hour (km/hr) and meters per second (m/s).</p>
    <p>The following conversion formulas are commonly used:</p>
    <p><strong>To convert speed from km/hr to m/s:</strong></p>
    <ul>
        <li>Multiply the given speed by 5/18</li>
    </ul>
    <p><strong>To convert speed from m/s to km/hr:</strong></p>
    <ul>
        <li>Multiply the given speed by 18/5</li>
    </ul>
    <p>For example, if a train is moving at a speed of 90 km/hr, its speed in m/s would be:</p>
    <p><strong>Speed = 90 × 5/18 = 25 m/s</strong></p>
    <p>These conversions are necessary for consistency in calculations and accurate problem-solving.</p>
    
    <h3>5. Relative Speed</h3>
    <p>Relative speed is a crucial concept, especially in problems where two trains are moving. The relative speed between two objects is the rate at which one object is moving relative to the other. This concept is particularly useful when two trains are either moving towards each other or in the same direction.</p>
    <p><strong>For Trains Moving Towards Each Other:</strong></p>
    <p>When two trains are moving towards each other, the relative speed is the sum of their individual speeds.</p>
    <p><strong>Relative Speed = Speed of Train 1 + Speed of Train 2</strong></p>
    <p>This formula helps to determine how quickly the distance between the two trains is decreasing.</p>
    <p><strong>For Trains Moving in the Same Direction:</strong></p>
    <p>When two trains are moving in the same direction, the relative speed is the difference between their speeds.</p>
    <p><strong>Relative Speed = Speed of Faster Train - Speed of Slower Train</strong></p>
    <p>This calculation is essential for finding out how long it will take for one train to catch up with the other or the distance they will cover before meeting.</p>
    
    <h3>6. Crossing Scenarios</h3>
    <p>Problems involving trains often include scenarios where one train passes another or a stationary object like a pole or platform. The time taken for a train to pass a certain point is calculated using the concept of relative speed.</p>
    <p><strong>When a Train Passes a Pole:</strong></p>
    <p>Here, the distance covered is equal to the length of the train, and the time taken can be calculated by:</p>
    <p><strong>Time = Length of Train / Speed of Train</strong></p>
    <p><strong>When a Train Passes Another Train:</strong></p>
    <p>In this case, the distance covered is equal to the sum of the lengths of the two trains, and the time taken can be calculated using the relative speed.</p>
    <p><strong>Time = (Length of Train 1 + Length of Train 2) / Relative Speed</strong></p>
    <p>Understanding these crossing scenarios is essential in solving complex problems involving multiple trains.</p>
    
    <h2>Subconcepts and Application in Problems on Trains</h2>
    <p>To effectively solve problems on trains, it is crucial to understand and apply the following subconcepts:</p>
    <ul>
        <li>Understanding of Average Speed</li>
        <li>Handling different scenarios like trains crossing each other, crossing platforms, etc.</li>
        <li>Utilization of proportionality between Time, Speed, and Distance.</li>
    </ul>
    
    <h3>1. Average Speed</h3>
    <p>Average speed is the total distance traveled divided by the total time taken. In problems involving multiple segments of travel at different speeds, the average speed is often used to find the overall speed of the journey.</p>
    <p><strong>Formula:</strong></p>
    <p><strong>Average Speed = Total Distance / Total Time</strong></p>
    <p>This concept is particularly useful in problems where a train travels at different speeds for different segments of the journey. It provides a way to calculate a single, effective speed for the entire trip.</p>
    
    <h3>2. Crossing Trains and Platforms</h3>
    <p>These problems often involve calculating the time taken for a train to pass another train or a stationary object like a platform. The key is to understand the relationship between the train's speed, the relative speed (if another train is involved), and the total distance covered, which could include the lengths of both trains or the train and the platform.</p>
    <p><strong>For example:</strong> If a train 150 meters long passes a platform 350 meters long at a speed of 60 km/hr, the time taken can be calculated as:</p>
    <p><strong>Time = (Length of Train + Length of Platform) / Speed of Train</strong></p>
    <p>After converting the speed from km/hr to m/s:</p>
    <p><strong>Speed = 60 × 5/18 = 16.67 m/s</strong></p>
    <p><strong>Time = (150 + 350) / 16.67 ≈ 30 seconds</strong></p>
    <p>This problem demonstrates the application of distance, speed, and relative speed concepts in practical scenarios.</p>
    
    <h2>Conclusion</h2>
    <p>Mastering the concepts of Time, Speed, Distance, and Relative Speed is essential for solving problems on trains. These problems often involve the application of multiple concepts simultaneously, making it necessary to have a clear understanding of each. Practicing these concepts in different scenarios, such as trains passing each other or platforms, will help in developing the skills needed to tackle these problems effectively in exams.</p>
    

    `,
    formulae: [
      {
        id: 1,
        toCalculate: "Speed",
        formuales:
          "Speed is calculated as Distance divided by Time. Speed = Distance / Time.",
      },
      {
        id: 2,
        toCalculate: "Time",
        formuales:
          "Time is calculated as Distance divided by Speed. Time = Distance / Speed.",
      },
      {
        id: 3,
        toCalculate: "Distance",
        formuales:
          "Distance is calculated as Speed multiplied by Time. Distance = Speed × Time.",
      },
      {
        id: 4,
        toCalculate: "Unit Conversion from km/hr to m/s",
        formuales:
          "To convert speed from kilometers per hour (km/h) to meters per second (m/s), multiply by 5/18. 1 km/h = 5/18 m/s.",
      },
      {
        id: 5,
        toCalculate: "Unit Conversion from m/s to km/hr",
        formuales:
          "To convert speed from meters per second (m/s) to kilometers per hour (km/h), multiply by 18/5. 1 m/s = 18/5 km/h.",
      },
      {
        id: 6,
        toCalculate: "Relative Speed when moving towards each other",
        formuales:
          "If two objects move towards each other, add their speeds. Relative Speed = Speed1 + Speed2.",
      },
      {
        id: 7,
        toCalculate: "Relative Speed when moving in the same direction",
        formuales:
          "If two objects move in the same direction, subtract their speeds. Relative Speed = Speed1 - Speed2.",
      },
      {
        id: 8,
        toCalculate: "Time for two trains to cross each other",
        formuales:
          "Time = (Length of Train1 + Length of Train2) / Relative Speed.",
      },
    ],
    practiceQuestions: [
      {
        id: 1,
        template:
          "Two trains, Train A and Train B, are moving in opposite directions. Train A is moving at a speed of {{speed_A}} km/hr and Train B is moving at a speed of {{speed_B}} km/hr. If the length of Train A is {{length_A}} meters and the length of Train B is {{length_B}} meters, how long will it take for the two trains to cross each other?",
        limits: {
          speed_A: [40, 80],
          speed_B: [30, 70],
          length_A: [200, 400],
          length_B: [150, 350],
        },
        correctAnswerFormula:
          "(length_A + length_B) / ((speed_A + speed_B) * 5/18)",
        optionsFormula: [
          "(length_A + length_B) / ((speed_A + speed_B) * 5/18)",
          "(length_A + length_B) / ((speed_A + speed_B) * 5/18) + 5",
          "(length_A + length_B) / ((speed_A + speed_B) * 5/18) + 10",
          "(length_A + length_B) / ((speed_A + speed_B) * 5/18) + 15",
        ],
        explanationTemplate:
          "To find the time it takes for the two trains to cross each other, we use the formula for time and speed:<br><br> - Time = (Total Length of the Trains) / (Relative Speed).<br><br> Since the trains are moving in opposite directions, their relative speed is the sum of their speeds. We need to convert the speeds from km/hr to m/s by multiplying by 5/18.<br><br> Therefore, Time = ({{length_A}} + {{length_B}}) / ({{speed_A}} + {{speed_B}}) * 5/18 = {{final_answer}} seconds.<br><br> Using the given values, we get:<br><br> Time = ({{length_A}} + {{length_B}}) / ({{speed_A}} + {{speed_B}}) * 5/18 = {{final_answer}} seconds.<br><br>",
      },
      {
        id: 2,
        template:
          "A train traveling at {{speed}} km/hr takes {{time}} seconds to pass a pole. What is the length of the train?",
        limits: {
          speed: [30, 70],
          time: [10, 30],
        },
        correctAnswerFormula: "(speed * 5/18) * time",
        optionsFormula: [
          "(speed * 5/18) * time",
          "(speed * 5/18) * time + 10",
          "(speed * 5/18) * time + 20",
          "(speed * 5/18) * time + 30",
        ],
        explanationTemplate:
          "To find the length of the train, we use the formula for distance:<br><br> - Length = Speed * Time.<br><br> We need to convert the speed from km/hr to m/s by multiplying by 5/18.<br><br> Therefore, Length = {{speed}} * 5/18 * {{time}} = {{final_answer}} meters.<br><br> Using the given values, we get:<br><br> Length = {{speed}} * 5/18 * {{time}} = {{final_answer}} meters.<br><br>",
      },
      {
        id: 3,
        template:
          "Two trains of lengths {{length_A}} meters and {{length_B}} meters are running on parallel tracks in the same direction at speeds of {{speed_A}} km/hr and {{speed_B}} km/hr respectively. How long will it take for the faster train to pass the slower train?",
        limits: {
          length_A: [100, 300],
          length_B: [120, 320],
          speed_A: [50, 90],
          speed_B: [40, 80],
        },
        correctAnswerFormula:
          "(length_A + length_B) / ((speed_A - speed_B) * 5/18)",
        optionsFormula: [
          "(length_A + length_B) / ((speed_A - speed_B) * 5/18)",
          "(length_A + length_B) / ((speed_A - speed_B) * 5/18) + 5",
          "(length_A + length_B) / ((speed_A - speed_B) * 5/18) + 10",
          "(length_A + length_B) / ((speed_A - speed_B) * 5/18) + 15",
        ],
        explanationTemplate:
          "To find the time it takes for the faster train to pass the slower train, we use the formula for time and speed:<br><br> - Time = (Total Length of the Trains) / (Relative Speed).<br><br> Since the trains are moving in the same direction, their relative speed is the difference of their speeds. We need to convert the speeds from km/hr to m/s by multiplying by 5/18.<br><br> Therefore, Time = ({{length_A}} + {{length_B}}) / ({{speed_A}} - {{speed_B}}) * 5/18 = {{final_answer}} seconds.<br><br> Using the given values, we get:<br><br> Time = ({{length_A}} + {{length_B}}) / ({{speed_A}} - {{speed_B}}) * 5/18 = {{final_answer}} seconds.<br><br>",
      },
    ],
  },
  "boats-and-streams": {
    description: `Boats and Streams problems involve calculating the effective speed of a boat when moving in water with or against the current, reflecting scenarios of downstream and upstream movement...
      `,

    realLife: [
      {
        id: 1,
        title: "Traveling Uphill/Downhill",
        content:
          "Understanding effective speed helps in estimating time and effort required when traveling uphill or downhill in hilly areas, as well as in swimming by accounting for the water current.",
      },
      {
        id: 2,
        title: "Workout on Treadmill",
        content:
          "Effective speed concepts are also applied in understanding the number of calories burned during treadmill workouts, where the treadmill belt's motion impacts the actual effort exerted.",
      },
    ],
    concepts: `
    <h1>Comprehensive Guide to Understanding Boats and Streams</h1>
    <p>The Boats and Streams problems are an integral part of the broader category of problems dealing with Effective Speed. These problems focus on the interplay between time, speed, and distance, particularly when an object moves in relation to a moving medium such as water. Mastery of these concepts is crucial for success in competitive exams and practical applications, as they provide insight into the dynamics of relative motion.</p>
    
    <h2>Core Concepts of Boats and Streams</h2>
    <p>To solve Boats and Streams problems effectively, it is essential to grasp the following core concepts:</p>
    
    <h3>1. Effective Speed</h3>
    <p>Effective speed refers to the resultant speed of an object when moving within a medium that itself is in motion. This concept is particularly vital in scenarios involving boats moving in rivers or streams, airplanes flying with or against the wind, or people walking on moving walkways.</p>
    <p><strong>Explanation:</strong> In the context of a boat, the effective speed is determined by combining the boat's speed relative to the water with the speed of the water itself (the stream or current). The relative direction of the stream to the boat's movement is a key factor that alters the effective speed. If the boat moves with the current, the effective speed increases; if it moves against the current, the effective speed decreases.</p>
    
    <h3>2. Downstream</h3>
    <p>Downstream scenarios occur when the boat is moving in the same direction as the stream or current. In this case, the effective speed of the boat is enhanced because the current aids the boat’s motion.</p>
    <p><strong>Formula:</strong></p>
    <p><strong>Downstream Speed = Speed of the Boat in Still Water (U) + Speed of the Stream (V)</strong></p>
    <p><strong>Example:</strong> Suppose a boat's speed in still water is 8 km/h, and the stream's speed is 2 km/h. The downstream speed of the boat would be:</p>
    <p><strong>Downstream Speed = 8 + 2 = 10 km/h</strong></p>
    <p>In this situation, the boat covers more distance in the same time due to the additional speed provided by the stream.</p>
    
    <h3>3. Upstream</h3>
    <p>Upstream scenarios arise when the boat moves against the direction of the stream or current. Here, the effective speed of the boat is reduced because the stream opposes the boat’s motion.</p>
    <p><strong>Formula:</strong></p>
    <p><strong>Upstream Speed = Speed of the Boat in Still Water (U) - Speed of the Stream (V)</strong></p>
    <p><strong>Example:</strong> If a boat's speed in still water is 8 km/h and the stream's speed is 2 km/h, the upstream speed would be:</p>
    <p><strong>Upstream Speed = 8 - 2 = 6 km/h</strong></p>
    <p>This reduction in speed means the boat takes longer to cover the same distance when moving against the current.</p>
    
    <h2>Advanced Concepts and Applications in Boats and Streams</h2>
    <p>Beyond the basic downstream and upstream calculations, several other concepts are crucial for solving more complex problems and understanding real-world applications:</p>
    
    <h3>4. Calculating Time Taken to Cover a Distance</h3>
    <p>The time taken to travel a certain distance is directly related to the speed at which the object is moving. This relationship is expressed by the formula:</p>
    <p><strong>Time = Distance / Speed</strong></p>
    <p>In the context of boats and streams, this formula adapts to account for downstream and upstream movements:</p>
    <ul>
        <li><strong>Time Downstream:</strong> Time taken to travel a distance downstream is calculated as <strong>Distance / Downstream Speed</strong>.</li>
        <li><strong>Time Upstream:</strong> Time taken to travel a distance upstream is calculated as <strong>Distance / Upstream Speed</strong>.</li>
    </ul>
    <p><strong>Example:</strong> If the distance between two points along a river is 24 km, and a boat’s downstream speed is 10 km/h, the time taken to travel downstream would be:</p>
    <p><strong>Time Downstream = 24 km / 10 km/h = 2.4 hours</strong></p>
    
    <h3>5. Determining the Speed of the Boat or Stream</h3>
    <p>Often, problems require determining the speed of either the boat in still water or the stream. These can be calculated using the following relationships:</p>
    <p><strong>Speed of the Boat in Still Water (U) = 1/2 * (Downstream Speed + Upstream Speed)</strong></p>
    <p><strong>Speed of the Stream (V) = 1/2 * (Downstream Speed - Upstream Speed)</strong></p>
    <p><strong>Example:</strong> If the downstream speed is 12 km/h and the upstream speed is 8 km/h, then:</p>
    <ul>
        <li><strong>Speed of the Boat (U) = 1/2 * (12 + 8) = 10 km/h</strong></li>
        <li><strong>Speed of the Stream (V) = 1/2 * (12 - 8) = 2 km/h</strong></li>
    </ul>
    
    <h3>6. Real-World Applications of Boats and Streams Concepts</h3>
    <p>These principles extend beyond mathematical problems and have significant real-world applications:</p>
    <ul>
        <li><strong>Navigation and Travel:</strong> Sailors, pilots, and mariners use these principles to calculate travel times and optimize routes, taking into account currents, tides, and winds.</li>
        <li><strong>Engineering and Design:</strong> Engineers apply these concepts when designing boats, aircraft, and other vehicles to ensure efficient operation in varying environmental conditions.</li>
        <li><strong>Environmental Science:</strong> Researchers utilize these concepts to understand and model the movement of water, pollutants, and nutrients in rivers, oceans, and other aquatic environments.</li>
    </ul>
    
    <h3>7. Example Problem and Solution</h3>
    <p><strong>Problem:</strong> A boat takes 2 hours to travel downstream and 3 hours to return upstream over the same distance. If the speed of the stream is 2 km/h, find the speed of the boat in still water and the distance between the two points.</p>
    <p><strong>Solution:</strong></p>
    <p>Let the speed of the boat in still water be U km/h. The downstream speed is (U + 2) km/h, and the upstream speed is (U - 2) km/h.</p>
    <ul>
        <li>Distance = Time Downstream * Downstream Speed = 2 * (U + 2)</li>
        <li>Distance = Time Upstream * Upstream Speed = 3 * (U - 2)</li>
    </ul>
    <p>Equating the two distances gives us the equation:</p>
    <p><strong>2(U + 2) = 3(U - 2)</strong></p>
    <p>Solving this equation:</p>
    <p>2U + 4 = 3U - 6</p>
    <p>U = 10 km/h</p>
    <p>Now, using the downstream speed to find the distance:</p>
    <p><strong>Distance = 2 * (10 + 2) = 24 km</strong></p>
    <p>Thus, the speed of the boat in still water is 10 km/h, and the distance between the two points is 24 km.</p>
    
    <h2>Conclusion</h2>
    <p>A thorough understanding of the concepts of Effective Speed, downstream, upstream, and related calculations is essential for solving Boats and Streams problems efficiently. Mastery of these principles not only aids in academic success but also has practical applications in navigation, engineering, and environmental studies. Regular practice and application of these concepts will improve problem-solving skills in this area, preparing you for a wide range of competitive exams and real-world challenges.</p>
    
      `,
    formulae: [
      {
        id: 1,
        toCalculate: "Upstream Speed",
        formuales: "(u - v) km/hr",
      },
      {
        id: 2,
        toCalculate: "Downstream Speed",
        formuales: "(u + v) km/hr",
      },
      {
        id: 3,
        toCalculate: "Speed of Boat in Still Water",
        formuales: "1/2(Downstream Speed + Upstream Speed)",
      },
      {
        id: 4,
        toCalculate: "Speed of Stream",
        formuales: "1/2(Downstream Speed - Upstream Speed)",
      },
      {
        id: 5,
        toCalculate: "Average Speed of Boat",
        formuales:
          "{(Upstream Speed x Downstream Speed) / Boat's Speed in Still Water}",
      },
      {
        id: 6,
        toCalculate: "Speed of Boat or Swimmer in Still Water",
        formuales: "1/2(Downstream Speed + Upstream Speed)",
      },
    ],
    practiceQuestions: [
      {
        id: 1,
        template:
          "A boat can travel {{downstream_speed}} km/hr downstream and {{upstream_speed}} km/hr upstream. What is the speed of the stream?",
        limits: {
          downstream_speed: [16, 32],
          upstream_speed: [8, 24],
        },
        correctAnswerFormula: "(downstream_speed - upstream_speed) / 2",
        optionsFormula: [
          "(downstream_speed - upstream_speed) / 2 + 1",
          "(downstream_speed - upstream_speed) / 2",
          "(downstream_speed - upstream_speed) / 2 + 3",
          "(downstream_speed - upstream_speed) / 2 + 5",
        ],
        explanationTemplate:
          "To find the speed of the stream, we use the formula:<br><br>Speed of the stream = (Downstream speed - Upstream speed) / 2.<br><br>Substituting the given values, we get:<br>Speed of the stream = ({{downstream_speed}} - {{upstream_speed}}) / 2 = {{final_answer}} km/hr.<br><br>Therefore, the speed of the stream is {{final_answer}} km/hr.<br><br>",
      },
      {
        id: 2,
        template:
          "A boat takes {{time_upstream}} hours to travel upstream and {{time_downstream}} hours to travel the same distance downstream. If the speed of the boat in still water is {{boat_speed}} km/hr, what is the speed of the stream?",
        limits: {
          time_upstream: [5, 9],
          time_downstream: [3, 7],
          boat_speed: [15, 27],
        },
        correctAnswerFormula:
          "(boat_speed * (time_downstream - time_upstream)) / (time_upstream + time_downstream)",
        optionsFormula: [
          "(boat_speed * (time_downstream - time_upstream)) / (time_upstream + time_downstream) + 1",
          "(boat_speed * (time_downstream - time_upstream)) / (time_upstream + time_downstream)",
          "(boat_speed * (time_downstream - time_upstream)) / (time_upstream + time_downstream) + 3",
          "(boat_speed * (time_downstream - time_upstream)) / (time_upstream + time_downstream) + 5",
        ],
        explanationTemplate:
          "To find the speed of the stream, we use the formula:<br><br>Speed of the stream = (Speed of the boat in still water * (Time downstream - Time upstream)) / (Time upstream + Time downstream).<br><br>Substituting the given values, we get:<br>Speed of the stream = ({{boat_speed}} * ({{time_downstream}} - {{time_upstream}})) / ({{time_upstream}} + {{time_downstream}}) = {{final_answer}} km/hr.<br><br>Therefore, the speed of the stream is {{final_answer}} km/hr.<br><br>",
      },
      {
        id: 3,
        template:
          "A boat covers a distance of {{distance}} km in {{time_downstream}} hours going downstream and in {{time_upstream}} hours going upstream. What is the speed of the stream?",
        limits: {
          distance: [60, 100],
          time_downstream: [2, 6],
          time_upstream: [3, 7],
        },
        correctAnswerFormula:
          "((distance / time_downstream) - (distance / time_upstream)) / 2",
        optionsFormula: [
          "((distance / time_downstream) - (distance / time_upstream)) / 2 + 1",
          "((distance / time_downstream) - (distance / time_upstream)) / 2",
          "((distance / time_downstream) - (distance / time_upstream)) / 2 + 3",
          "((distance / time_downstream) - (distance / time_upstream)) / 2 + 5",
        ],
        explanationTemplate:
          "To find the speed of the stream, we use the formula:<br><br>Speed of the stream = (Downstream speed - Upstream speed) / 2.<br><br>Downstream speed = Distance / Time downstream.<br><br>Upstream speed = Distance / Time upstream.<br><br>Substituting the given values, we get:<br>Speed of the stream = (({{distance}} / {{time_downstream}}) - ({{distance}} / {{time_upstream}})) / 2 = {{final_answer}} km/hr.<br><br>Therefore, the speed of the stream is {{final_answer}} km/hr.<br><br>",
      },
    ],
  },
  circles: {
    description:
      "Circles are fundamental 2D geometric shapes with various properties like radius, diameter, circumference, and area, which are essential in solving higher-level geometry and mensuration problems...",
    realLife: [
      {
        id: 1,
        title: "Manufacturing and Design",
        content:
          "Concepts of circles are used to manufacture spheres like ball bearings, cylinders like cans to keep food fresh, and cups to drink from.",
      },
      {
        id: 2,
        title: "Gardening",
        content:
          "Circle principles help in determining the area required for plants to grow in a garden.",
      },
      {
        id: 3,
        title: "Engineering",
        content:
          "Circles are widely used in engineering, such as in the design of automobile gears.",
      },
      {
        id: 4,
        title: "Automobile Distance Calculation",
        content:
          "The circumference of tires and the number of axle rotations are used to calculate the distance traveled by a vehicle.",
      },
    ],
    concepts: `
    <h1>Understanding the Concepts of Circles</h1>
    <p>Circles are fundamental geometric shapes that appear frequently in various mathematical problems. A strong understanding of the properties and concepts related to circles is essential for solving complex geometric problems. Let's delve into the key topics associated with circles.</p>
    
    <h2>Key Concepts of Circles</h2>
    <p>Let's explore the fundamental concepts of circles one by one:</p>
    
    <h3>1. Radius</h3>
    <p>The radius of a circle is the distance from its center to any point on its outer edge. It is denoted by the symbol <strong>r</strong>. The radius is a crucial element in various calculations involving circles, such as determining the area or circumference.</p>
    <p><strong>Example:</strong> If the radius of a circle is 5 cm, the distance from the center of the circle to any point on its boundary is 5 cm.</p>
    
    <h3>2. Chord</h3>
    <p>A chord is a line segment that connects two points on the circumference of a circle. Unlike the diameter, a chord does not necessarily pass through the center of the circle. The length of a chord can be calculated using the formula:</p>
    <p><strong>Chord Length = 2√(r^2 - d^2)</strong></p>
    <p>where <strong>d</strong> is the perpendicular distance from the center to the chord.</p>
    <p><strong>Example:</strong> In a circle with a radius of 10 cm, if the perpendicular distance from the center to the chord is 6 cm, the length of the chord is 16 cm.</p>
    
    <h3>3. Diameter</h3>
    <p>The diameter is the longest chord in a circle, passing through its center, and is equal to twice the radius. It is denoted by the symbol <strong>D</strong>.</p>
    <p><strong>Formula:</strong> D = 2r</p>
    <p><strong>Example:</strong> If the radius of a circle is 7 cm, the diameter is 14 cm.</p>
    
    <h3>4. Circumference</h3>
    <p>The circumference of a circle is its perimeter, or the distance around the outer edge of the circle. It is calculated using the formula:</p>
    <p><strong>Circumference = 2πr</strong></p>
    <p>The circumference plays an important role in various applications, including determining the length of the boundary of circular objects.</p>
    <p><strong>Example:</strong> If the radius of a circle is 4 cm, the circumference is approximately 25.12 cm.</p>
    
    <h3>5. Area</h3>
    <p>The area of a circle is the total surface enclosed by its boundary. It is calculated using the formula:</p>
    <p><strong>Area = πr^2</strong></p>
    <p>The area is a crucial concept in determining the amount of space within the circle, and it has numerous applications in fields like engineering, architecture, and design.</p>
    <p><strong>Example:</strong> If the radius of a circle is 3 cm, the area is approximately 28.27 cm².</p>
    
    <h3>6. Arc</h3>
    <p>An arc is a part of the circumference of a circle. The length of an arc can be calculated using the formula:</p>
    <p><strong>Arc Length = θ/360° × 2πr</strong></p>
    <p>where <strong>θ</strong> is the central angle in degrees. Arcs are used to define sectors, segments, and angles within a circle.</p>
    <p><strong>Example:</strong> For a circle with a radius of 6 cm and a central angle of 60°, the length of the arc is approximately 6.28 cm.</p>
    
    <h3>7. Segment</h3>
    <p>A segment of a circle is the area enclosed by a chord and its corresponding arc. Segments are classified as minor and major, depending on the size of the arc. The area of a segment can be calculated by subtracting the area of the corresponding triangle from the area of the sector.</p>
    <p><strong>Formula:</strong> Area of Segment = Area of Sector - Area of Triangle</p>
    <p><strong>Example:</strong> If a circle has a radius of 8 cm and the chord subtends a central angle of 90°, the area of the minor segment can be calculated accordingly.</p>
    
    <h3>8. Sector</h3>
    <p>A sector is a region formed by connecting the ends of an arc to the center of the circle. Sectors are also classified as minor and major, depending on the size of the arc. The area of a sector is calculated using the formula:</p>
    <p><strong>Area of Sector = θ/360° × πr^2</strong></p>
    <p>Sectors are often used to represent portions of a circle in pie charts and other circular diagrams.</p>
    <p><strong>Example:</strong> For a circle with a radius of 5 cm and a central angle of 120°, the area of the sector is approximately 26.18 cm².</p>
    
    <h2>Additional Concepts and Applications</h2>
    <p>In addition to the basic concepts mentioned above, several other important properties and theorems related to circles are essential for advanced problem-solving:</p>
    
    <h3>9. Tangents and Secants</h3>
    <p>A tangent is a line that touches a circle at exactly one point, while a secant is a line that intersects a circle at two points. The relationship between tangents and secants is explored in various geometric theorems, such as the Power of a Point theorem.</p>
    
    <h3>10. Angles in Circles</h3>
    <p>Angles in circles include central angles, inscribed angles, and angles formed by chords, tangents, and secants. These angles have specific properties that are frequently tested in geometry problems.</p>
    
    <h3>11. Real-Life Applications of Circle Geometry</h3>
    <p>Understanding the properties of circles is crucial in various real-life applications, including:</p>
    <ul>
        <li><strong>Engineering and Architecture:</strong> Circles are used in the design of gears, wheels, and arches, where precise calculations of radius, circumference, and area are essential.</li>
        <li><strong>Navigation and Astronomy:</strong> Circles play a role in the orbits of planets and satellites, where the concepts of radius and circumference are applied to determine distances and paths.</li>
        <li><strong>Art and Design:</strong> Circles are fundamental in creating symmetrical and aesthetically pleasing designs, such as mandalas and circular patterns.</li>
    </ul>
    
    <h3>12. Example Problem</h3>
    <p><strong>Problem:</strong> A circle has a radius of 10 cm. Calculate the length of a chord that is 6 cm away from the center.</p>
    <p><strong>Solution:</strong></p>
    <p>Using the chord length formula:</p>
    <p><strong>Chord Length = 2√(r^2 - d^2)</strong></p>
    <p>Here, r = 10 cm and d = 6 cm.</p>
    <p>Chord Length = 2√(10^2 - 6^2) = 2√(100 - 36) = 2√64 = 16 cm</p>
    <p>Therefore, the length of the chord is 16 cm.</p>
    
    <p>Mastering these concepts will greatly enhance your ability to solve a wide range of geometric problems involving circles.</p>
    
    `,
    formulae: [
      {
        id: 1,
        toCalculate: "Diameter",
        formuales: "2r",
      },
      {
        id: 2,
        toCalculate: "Circumference",
        formuales: "2πr",
      },
      {
        id: 3,
        toCalculate: "Area",
        formuales: "π*(r^2)",
      },
      {
        id: 4,
        toCalculate: "Arc Length",
        formuales: "(θ/360) * 2πr",
      },
      {
        id: 5,
        toCalculate: "Area of Sector",
        formuales: "(θ/360)* π*(r^2)",
      },
    ],
    practiceQuestions: [
      {
        id: 1,
        template:
          "If the circumference of a circle is {{circumference}} cm, what is the radius of the circle?",
        limits: {
          circumference: [44, 132],
        },
        correctAnswerFormula: "circumference / (2 * Math.PI)",
        optionsFormula: [
          "circumference / (2 * Math.PI) + 1",
          "circumference / (2 * Math.PI)",
          "circumference / (2 * Math.PI) + 2",
          "circumference / (2 * Math.PI) + 3",
        ],
        explanationTemplate:
          "To find the radius of the circle, we use the formula:<br><br>Radius = Circumference / (2 * π).<br><br>Substituting the given value, we get:<br>Radius = {{circumference}} / (2 * π) = {{final_answer}} cm.<br><br>Therefore, the radius of the circle is {{final_answer}} cm.<br><br>",
      },
      {
        id: 2,
        template:
          "If the area of a circle is {{area}} cm², what is the diameter of the circle?",
        limits: {
          area: [154, 3850],
        },
        correctAnswerFormula: "2 * Math.sqrt(area / Math.PI)",
        optionsFormula: [
          "2 * Math.sqrt(area / Math.PI) + 2",
          "2 * Math.sqrt(area / Math.PI)",
          "2 * Math.sqrt(area / Math.PI) + 4",
          "2 * Math.sqrt(area / Math.PI) + 6",
        ],
        explanationTemplate:
          "To find the diameter of the circle, we use the formula:<br><br>Diameter = 2 * √(Area / π).<br><br>Substituting the given value, we get:<br>Diameter = 2 * √({{area}} / π) = {{final_answer}} cm.<br><br>Therefore, the diameter of the circle is {{final_answer}} cm.<br><br>",
      },
      {
        id: 3,
        template:
          "What is the length of an arc of a circle with a radius of {{radius}} cm that subtends an angle of {{angle}} degrees at the center?",
        limits: {
          radius: [7, 35],
          angle: [30, 150],
        },
        correctAnswerFormula: "(angle / 360) * 2 * Math.PI * radius",
        optionsFormula: [
          "(angle / 360) * 2 * Math.PI * radius + 2",
          "(angle / 360) * 2 * Math.PI * radius",
          "(angle / 360) * 2 * Math.PI * radius + 4",
          "(angle / 360) * 2 * Math.PI * radius + 6",
        ],
        explanationTemplate:
          "To find the length of the arc, we use the formula:<br><br>Arc Length = (Angle / 360) * 2 * π * Radius.<br><br>Substituting the given values, we get:<br>Arc Length = ({{angle}} / 360) * 2 * π * {{radius}} = {{final_answer}} cm.<br><br>Therefore, the length of the arc is {{final_answer}} cm.<br><br>",
      },
    ],
  },
  mensuration: {
    description:
      "Mensuration involves the measurement of various geometric shapes and objects, both in 2D and 3D, using standard and nonstandard units. It is crucial for calculating areas, perimeters, volumes, and surface areas...",
    realLife: [
      {
        id: 1,
        title: "Agricultural and Real Estate Measurement",
        content:
          "Mensuration concepts are applied in measuring agricultural fields and floor space, essential for purchase and sale transactions.",
      },
      {
        id: 2,
        title: "Packaging and Volumes",
        content:
          "Volumes are crucial in packaging, particularly for measuring milk, liquids, and solid edible food products.",
      },
      {
        id: 3,
        title: "Surface Area in Construction",
        content:
          "Surface area measurements help estimate the cost of painting houses, buildings, and other structures.",
      },
      {
        id: 4,
        title: "Water Levels and Quantities",
        content:
          "Mensuration is used to determine water levels and quantities in rivers and lakes by calculating volumes and heights.",
      },
    ],
    concepts: `
       <h1>Understanding the Concepts of Mensuration</h1>
    <p>Mensuration is a branch of mathematics that deals with the measurement of various geometric shapes and figures, including both two-dimensional (2D) and three-dimensional (3D) objects. It involves calculating key measurements such as area, perimeter, volume, and surface area, which are essential for solving real-world problems. Let's explore the fundamental concepts associated with mensuration.</p>

    <h2>Key Concepts of Mensuration</h2>
    <p>Mensuration can be broadly divided into the study of 2D shapes (like squares, rectangles, and circles) and 3D shapes (like cubes, cylinders, and spheres). Below are the primary concepts and formulas used in mensuration:</p>

    <h3>1. Area (A)</h3>
    <p>The area is the amount of surface occupied by a closed region in a plane. It is measured in square units (e.g., cm², m²) and varies depending on the shape of the region. For different 2D shapes, the area can be calculated using specific formulas:</p>
    <ul>
      <li><strong>Rectangle:</strong> Area = length × width</li>
      <li><strong>Square:</strong> Area = side²</li>
      <li><strong>Triangle:</strong> Area = ½ × base × height</li>
      <li><strong>Circle:</strong> Area = π × r²</li>
    </ul>
    <p><strong>Example:</strong> If the side of a square is 4 cm, the area is 16 cm².</p>

    <h3>2. Perimeter (P)</h3>
    <p>The perimeter is the total length of the boundaries of a 2D shape. It is measured in linear units (e.g., cm, m) and varies depending on the shape:</p>
    <ul>
      <li><strong>Rectangle:</strong> Perimeter = 2 × (length + width)</li>
      <li><strong>Square:</strong> Perimeter = 4 × side</li>
      <li><strong>Triangle:</strong> Perimeter = sum of all sides</li>
      <li><strong>Circle (Circumference):</strong> Perimeter = 2πr</li>
    </ul>
    <p><strong>Example:</strong> If the radius of a circle is 7 cm, the perimeter (circumference) is approximately 44 cm.</p>

    <h3>3. Volume (V)</h3>
    <p>Volume is the amount of space occupied by a 3D object. It is measured in cubic units (e.g., cm³, m³) and varies depending on the shape:</p>
    <ul>
      <li><strong>Cuboid:</strong> Volume = length × width × height</li>
      <li><strong>Cylinder:</strong> Volume = π × r² × height</li>
      <li><strong>Cone:</strong> Volume = ⅓ × π × r² × height</li>
      <li><strong>Sphere:</strong> Volume = ⁴⁄₃ × π × r³</li>
    </ul>
    <p><strong>Example:</strong> If the radius of a sphere is 5 cm, the volume is approximately 523.6 cm³.</p>

    <h3>4. Curved Surface Area (CSA)</h3>
    <p>The Curved Surface Area (CSA) refers to the area of the curved surface of a 3D object, excluding the base and top. This concept is commonly used for shapes like cylinders, cones, and spheres:</p>
    <ul>
      <li><strong>Cylinder:</strong> CSA = 2πrh</li>
      <li><strong>Cone:</strong> CSA = πrl (where l is the slant height)</li>
      <li><strong>Sphere:</strong> CSA = 4πr² (also known as the surface area of the sphere)</li>
    </ul>
    <p><strong>Example:</strong> If the radius of a cylinder is 3 cm and its height is 7 cm, the CSA is approximately 131.9 cm².</p>

    <h3>5. Total Surface Area (TSA)</h3>
    <p>The Total Surface Area (TSA) is the sum of the areas of all the surfaces of a 3D object. It provides a measure of the total area covered by the surface of the object:</p>
    <ul>
      <li><strong>Cuboid:</strong> TSA = 2 × (length × width + width × height + height × length)</li>
      <li><strong>Cylinder:</strong> TSA = 2πr (r + h)</li>
      <li><strong>Cone:</strong> TSA = πr (l + r)</li>
      <li><strong>Sphere:</strong> TSA = 4πr²</li>
    </ul>
    <p><strong>Example:</strong> If the radius of a sphere is 6 cm, the TSA is approximately 452.4 cm².</p>

    <h3>6. Square Unit</h3>
    <p>A square unit is a unit of area measurement, representing the area of a square with sides of one unit each. Square units are used to express the area of 2D shapes. For instance, if the side of a square is 5 cm, the area is expressed as 25 cm² (25 square centimeters).</p>

    <h3>7. Cubic Unit</h3>
    <p>A cubic unit is a unit of volume measurement, representing the volume of a cube with sides of one unit each. Cubic units are used to express the volume of 3D shapes. For example, if the side of a cube is 4 cm, the volume is expressed as 64 cm³ (64 cubic centimeters).</p>

    <h2>Additional Concepts and Applications</h2>
    <p>Mensuration is not just limited to the above concepts; it also involves several advanced topics and real-life applications:</p>

    <h3>8. Surface Area to Volume Ratio</h3>
    <p>The surface area to volume ratio is an important concept in biology, physics, and engineering. It describes how the surface area of an object relates to its volume. This ratio has significant implications in areas such as heat transfer, where objects with a high surface area to volume ratio cool down faster.</p>

    <h3>9. Applications in Real Life</h3>
    <ul>
      <li><strong>Construction:</strong> Mensuration is used to calculate the amount of materials needed for building structures, such as determining the volume of concrete required for a foundation or the surface area of walls for painting.</li>
      <li><strong>Packaging:</strong> Understanding the volume and surface area of packages helps in optimizing the packaging process, reducing material costs, and ensuring efficient storage and transportation.</li>
      <li><strong>Environmental Science:</strong> Mensuration principles are applied in calculating areas of land, volumes of water bodies, and other environmental measurements.</li>
    </ul>

    <h3>10. Example Problem</h3>
    <p><strong>Problem:</strong> A cylindrical water tank has a radius of 5 m and a height of 10 m. Calculate the volume and the total surface area of the tank.</p>
    <p><strong>Solution:</strong></p>
    <p><strong>Volume:</strong> V = πr²h = π × (5)² × 10 = 250π ≈ 785.4 m³</p>
    <p><strong>Total Surface Area:</strong> TSA = 2πr (r + h) = 2π × 5 × (5 + 10) = 150π ≈ 471.2 m²</p>
    <p>The volume of the tank is approximately 785.4 cubic meters, and the total surface area is approximately 471.2 square meters.</p>

    <p>Mastering these concepts will greatly enhance your ability to solve various mathematical and real-life problems involving measurements of 2D and 3D shapes.</p>

    `,
    formulae: [
      {
        id: 1,
        toCalculate: "Area of a Circle",
        formuales: "π * r^2",
      },
      {
        id: 2,
        toCalculate: "Perimeter of a Circle",
        formuales: "2πr",
      },
      {
        id: 3,
        toCalculate: "Area of a Square",
        formuales: "side^2",
      },
      {
        id: 4,
        toCalculate: "Perimeter of a Square",
        formuales: "4 * side",
      },
      {
        id: 5,
        toCalculate: "Area of a Rectangle",
        formuales: "length * breadth",
      },
      {
        id: 6,
        toCalculate: "Perimeter of a Rectangle",
        formuales: "2 * (length + breadth)",
      },
      {
        id: 7,
        toCalculate: "Area of a Scalene Triangle",
        formuales:
          "sqrt(s * (s - a) * (s - b) * (s - c)), where s = (a + b + c) / 2",
      },
      {
        id: 8,
        toCalculate: "Area of an Isosceles Triangle",
        formuales: "(1/2) * base * sqrt(a^2 - (b^2 / 4))",
      },
      {
        id: 9,
        toCalculate: "Area of an Equilateral Triangle",
        formuales: "(sqrt(3) / 4) * side^2",
      },
      {
        id: 10,
        toCalculate: "Perimeter of an Equilateral Triangle",
        formuales: "3 * side",
      },
      {
        id: 11,
        toCalculate: "Area of a Right Angled Triangle",
        formuales: "(1/2) * base * height",
      },
      {
        id: 12,
        toCalculate: "Area of a Parallelogram",
        formuales: "base * height",
      },
      {
        id: 13,
        toCalculate: "Area of a Trapezium",
        formuales: "(1/2) * height * (sum of parallel sides)",
      },
      {
        id: 14,
        toCalculate: "Area of a Rhombus",
        formuales: "(1/2) * diagonal1 * diagonal2",
      },
      {
        id: 15,
        toCalculate: "Volume of a Cone",
        formuales: "(1/3) * π * r^2 * h",
      },
      {
        id: 16,
        toCalculate: "Curved Surface Area of a Cone",
        formuales: "π * r * l",
      },
      {
        id: 17,
        toCalculate: "Volume of a Cube",
        formuales: "side^3",
      },
      {
        id: 18,
        toCalculate: "Surface Area of a Cube",
        formuales: "6 * side^2",
      },
      {
        id: 19,
        toCalculate: "Volume of a Cuboid",
        formuales: "length * breadth * height",
      },
      {
        id: 20,
        toCalculate: "Surface Area of a Cuboid",
        formuales:
          "2 * (length * breadth + breadth * height + height * length)",
      },
      {
        id: 21,
        toCalculate: "Volume of a Cylinder",
        formuales: "π * r^2 * h",
      },
      {
        id: 22,
        toCalculate: "Curved Surface Area of a Cylinder",
        formuales: "2π * r * h",
      },
      {
        id: 23,
        toCalculate: "Volume of a Hemisphere",
        formuales: "(2/3) * π * r^3",
      },
      {
        id: 24,
        toCalculate: "Surface Area of a Hemisphere",
        formuales: "3π * r^2",
      },
      {
        id: 25,
        toCalculate: "Surface Area of a Sphere",
        formuales: "4π * r^2",
      },
      {
        id: 26,
        toCalculate: "Volume of a Sphere",
        formuales: "(4/3) * π * r^3",
      },
    ],
    practiceQuestions: [
      {
        id: 1,
        template:
          "What is the surface area of a cylinder with radius {{radius}} cm and height {{height}} cm?",
        limits: {
          radius: [3, 4, 5, 6, 7],
          height: [10, 15, 20, 25, 30],
        },
        correctAnswerFormula: "2 * Math.PI * radius * (radius + height)",
        optionsFormula: [
          "2 * Math.PI * radius * (radius + height) + 20",
          "2 * Math.PI * radius * (radius + height)",
          "2 * Math.PI * radius * (radius + height) + 40",
          "2 * Math.PI * radius * (radius + height) + 60",
        ],
        explanationTemplate: `
          To find the surface area of the cylinder, we use the formula: <br><br>
          Surface Area = 2 * π * Radius * (Radius + Height).<br><br>
          Substituting the given values, we get: <br>
          Surface Area = 2 * π * {{radius}} * ({{radius}} + {{height}}) = {{final_answer}} cm².<br><br>
          Therefore, the surface area of the cylinder is {{final_answer}} cm².<br><br>
        `,
      },
      {
        id: 2,
        template:
          "What is the perimeter of a triangle with sides {{side1}}, {{side2}}, and {{side3}} cm?",
        limits: {
          side1: [3, 4, 5, 6, 7],
          side2: [5, 6, 7, 8, 9],
          side3: [7, 8, 9, 10, 11],
        },
        correctAnswerFormula: "side1 + side2 + side3",
        optionsFormula: [
          "side1 + side2 + side3 + 5",
          "side1 + side2 + side3",
          "side1 + side2 + side3 + 10",
          "side1 + side2 + side3 + 15",
        ],
        explanationTemplate: `
          To find the perimeter of the triangle, we use the formula: <br><br>
          Perimeter = Side1 + Side2 + Side3.<br><br>
          Substituting the given values, we get: <br>
          Perimeter = {{side1}} + {{side2}} + {{side3}} = {{final_answer}} cm.<br><br>
          Therefore, the perimeter of the triangle is {{final_answer}} cm.<br><br>
        `,
      },
      {
        id: 3,
        template:
          "What is the volume of a cone with radius {{radius}} cm and height {{height}} cm?",
        limits: {
          radius: [2, 3, 4, 5, 6],
          height: [6, 9, 12, 15, 18],
        },
        correctAnswerFormula:
          "(1 / 3) * Math.PI * Math.pow(radius, 2) * height",
        optionsFormula: [
          "(1 / 3) * Math.PI * Math.pow(radius, 2) * height + 10",
          "(1 / 3) * Math.PI * Math.pow(radius, 2) * height",
          "(1 / 3) * Math.PI * Math.pow(radius, 2) * height + 20",
          "(1 / 3) * Math.PI * Math.pow(radius, 2) * height + 30",
        ],
        explanationTemplate: `
          To find the volume of the cone, we use the formula: <br><br>
          Volume = (1 / 3) * π * Radius² * Height.<br><br>
          Substituting the given values, we get: <br>
          Volume = (1 / 3) * π * {{radius}}² * {{height}} = {{final_answer}} cm³.<br><br>
          Therefore, the volume of the cone is {{final_answer}} cm³.<br><br>
        `,
      },
    ],
  },
  "height-and-distance": {
    description:
      "Heights and Distance concepts involve calculating the height or distance of an object using trigonometric ratios, often in real-life scenarios like construction, aviation, and navigation...",
    realLife: [
      {
        id: 1,
        title: "Slope and Height in Construction",
        content:
          "The concepts of height and distance help in determining the slope and height of buildings or structures during construction. By knowing the angle of elevation and distance from the building, one can calculate its height.",
      },
      {
        id: 2,
        title: "Measuring Peak or Building Height",
        content:
          "Using trigonometric ratios, the height of a peak or building can be accurately measured, even from a distance.",
      },
      {
        id: 3,
        title: "Application in Aviation",
        content:
          "In aviation, the angle of elevation and depression is crucial in determining the flight path, enabling the calculation of the required angles to reach a specific target or destination.",
      },
    ],
    concepts: `
    <h1>Understanding the Concepts of Height and Distance</h1>
    <p>Height and distance problems are fundamental in trigonometry and geometry, often involving the use of trigonometric functions, the Pythagorean theorem, and angles of elevation and depression. These concepts are crucial for determining unknown heights or distances in various practical scenarios, such as in surveying, architecture, and astronomy.</p>
    
    <h2>Key Concepts of Height and Distance</h2>
    <p>The problems in height and distance typically involve right-angled triangles, where the relationship between the sides and angles is used to calculate unknown quantities. Below are the primary concepts involved in these calculations:</p>
    
    <h3>1. Angle of Elevation</h3>
    <p>The angle of elevation is the angle formed between the horizontal line of sight and the line of sight to an object that is above the observer. This angle is crucial in determining the height of an object when the distance from the observer to the object is known. The angle of elevation increases as the object moves higher relative to the observer's position.</p>
    <p><strong>Example:</strong> If you are standing 50 meters away from a building and looking up at the top, the angle between your line of sight and the ground is the angle of elevation.</p>
    
    <h3>2. Angle of Depression</h3>
    <p>The angle of depression is the angle formed between the horizontal line of sight and the line of sight to an object that is below the observer. This angle is used to determine the distance to an object located below the observer, such as when viewing from the top of a hill or a building.</p>
    <p><strong>Example:</strong> If you are at the top of a lighthouse looking down at a boat in the water, the angle between your line of sight and the horizontal is the angle of depression.</p>
    
    <h3>3. Base</h3>
    <p>The base in the context of height and distance problems refers to the horizontal distance between the observer and the point directly below the object. In a right-angled triangle, this is the side adjacent to the angle of elevation or depression.</p>
    <p><strong>Example:</strong> If you are 100 meters away from a tower and measuring its height, the distance of 100 meters represents the base of the triangle formed.</p>
    
    <h3>4. Height</h3>
    <p>Height is the vertical distance from the base to the top of the object being observed. In height and distance problems, this is typically the quantity we aim to determine using the angle of elevation or depression and the base.</p>
    <p><strong>Example:</strong> If you need to find the height of a flagpole, the vertical distance from the ground (base) to the top of the pole is the height.</p>
    
    <h3>5. Hypotenuse</h3>
    <p>The hypotenuse is the longest side of a right-angled triangle, opposite the right angle. In height and distance problems, the hypotenuse often represents the line of sight from the observer to the top or bottom of the object. It connects the base and the height.</p>
    <p><strong>Example:</strong> In the triangle formed by the observer’s line of sight, the building's height, and the distance to the building, the hypotenuse is the distance from the observer’s eye to the top of the building.</p>
    
    <h3>6. Pythagorean Theorem</h3>
    <p>The Pythagorean theorem is a fundamental principle in geometry that relates the sides of a right-angled triangle. It states that the square of the hypotenuse is equal to the sum of the squares of the other two sides (base and height). This theorem is often used in height and distance problems to calculate unknown distances.</p>
    <p><strong>Formula:</strong> c² = a² + b², where c is the hypotenuse, a is the base, and b is the height.</p>
    <p><strong>Example:</strong> If the base of a triangle is 3 meters and the height is 4 meters, the hypotenuse can be found as √(3² + 4²) = √(9 + 16) = √25 = 5 meters.</p>
    
    <h2>Applications and Example Problems</h2>
    <p>The concepts of height and distance are widely used in various fields, including engineering, architecture, navigation, and astronomy. Here are some applications and example problems to illustrate their use:</p>
    
    <h3>7. Application in Real Life</h3>
    <ul>
      <li><strong>Surveying:</strong> Surveyors use the concepts of height and distance to determine the height of mountains, buildings, and other structures. By measuring the angle of elevation and the horizontal distance, they can accurately calculate these heights.</li>
      <li><strong>Architecture:</strong> Architects and builders use these concepts to determine the appropriate dimensions of structures and to ensure that buildings are constructed to the correct height.</li>
      <li><strong>Astronomy:</strong> Astronomers use the angle of elevation to calculate the distance of celestial objects from the Earth. By knowing the angle and applying trigonometric functions, they can estimate how far away stars or planets are.</li>
    </ul>
    
    <h3>8. Example Problem</h3>
    <p><strong>Problem:</strong> A man is standing 50 meters away from a building and observes the top of the building at an angle of elevation of 30°. Calculate the height of the building.</p>
    <p><strong>Solution:</strong></p>
    <p>Using the formula for the tangent of the angle of elevation:</p>
    <p>tan(θ) = opposite/adjacent = height/base</p>
    <p>tan(30°) = height/50</p>
    <p>height = 50 × tan(30°)</p>
    <p>Using the value of tan(30°) = 1/√3 ≈ 0.577:</p>
    <p>height = 50 × 0.577 ≈ 28.85 meters</p>
    <p>Thus, the height of the building is approximately 28.85 meters.</p>
    
    <p>Understanding these concepts will enhance your ability to solve various real-world problems involving heights and distances, using trigonometric functions and geometric principles.</p>
    
    `,
    formulae: [
      {
        id: 1,
        toCalculate: "Sine Ratio",
        formuales: "sin θ = Opposite/Hypotenuse = AB/AC",
      },
      {
        id: 2,
        toCalculate: "Cosine Ratio",
        formuales: "cos θ = Adjacent/Hypotenuse = BC/AC",
      },
      {
        id: 3,
        toCalculate: "Tangent Ratio",
        formuales: "tan θ = Opposite/Adjacent = AB/BC",
      },
      {
        id: 4,
        toCalculate: "Pythagoras Theorem",
        formuales: "AC² = AB² + BC²",
      },
    ],
    practiceQuestions: [
      {
        id: 1,
        template:
          "A ladder of length {{ladder_length}} meters is leaning against a wall. The bottom of the ladder is {{distance_from_wall}} meters away from the wall. What is the height of the top of the ladder from the ground?",
        limits: {
          ladder_length: [10, 15, 20, 25, 30],
          distance_from_wall: [6, 8, 10, 12, 14],
        },
        correctAnswerFormula:
          "Math.sqrt(Math.pow(ladder_length, 2) - Math.pow(distance_from_wall, 2))",
        optionsFormula: [
          "Math.sqrt(Math.pow(ladder_length, 2) - Math.pow(distance_from_wall, 2)) + 1",
          "Math.sqrt(Math.pow(ladder_length, 2) - Math.pow(distance_from_wall, 2))",
          "Math.sqrt(Math.pow(ladder_length, 2) - Math.pow(distance_from_wall, 2)) + 2",
          "Math.sqrt(Math.pow(ladder_length, 2) - Math.pow(distance_from_wall, 2)) + 3",
        ],
        explanationTemplate: `
          To find the height of the top of the ladder from the ground, we use the Pythagorean theorem: <br><br>
          Height = √(Ladder Length² - Distance from Wall²).<br><br>
          Substituting the given values, we get: <br>
          Height = √({{ladder_length}}² - {{distance_from_wall}}²) = {{final_answer}} meters.<br><br>
          Therefore, the height of the top of the ladder from the ground is {{final_answer}} meters.<br><br>
        `,
      },
      {
        id: 2,
        template:
          "A tree casts a shadow of {{shadow_length}} meters when the angle of elevation of the sun is {{angle_of_elevation}} degrees. What is the height of the tree?",
        limits: {
          shadow_length: [10, 15, 20, 25, 30],
          angle_of_elevation: [30, 45, 60, 75, 90],
        },
        correctAnswerFormula:
          "shadow_length * Math.tan(angle_of_elevation * Math.PI / 180)",
        optionsFormula: [
          "shadow_length * Math.tan(angle_of_elevation * Math.PI / 180) + 1",
          "shadow_length * Math.tan(angle_of_elevation * Math.PI / 180)",
          "shadow_length * Math.tan(angle_of_elevation * Math.PI / 180) + 2",
          "shadow_length * Math.tan(angle_of_elevation * Math.PI / 180) + 3",
        ],
        explanationTemplate: `
          To find the height of the tree, we use the formula for tangent: <br><br>
          Height = Shadow Length * tan(Angle of Elevation).<br><br>
          Substituting the given values, we get: <br>
          Height = {{shadow_length}} * tan({{angle_of_elevation}}°) = {{final_answer}} meters.<br><br>
          Therefore, the height of the tree is {{final_answer}} meters.<br><br>
        `,
      },
      {
        id: 3,
        template:
          "The angle of elevation of the top of a tower from a point on the ground is {{angle_of_elevation}} degrees. If the distance of the point from the base of the tower is {{distance_from_base}} meters, what is the height of the tower?",
        limits: {
          angle_of_elevation: [30, 45, 60, 75, 90],
          distance_from_base: [20, 25, 30, 35, 40],
        },
        correctAnswerFormula:
          "distance_from_base * Math.tan(angle_of_elevation * Math.PI / 180)",
        optionsFormula: [
          "distance_from_base * Math.tan(angle_of_elevation * Math.PI / 180) + 2",
          "distance_from_base * Math.tan(angle_of_elevation * Math.PI / 180)",
          "distance_from_base * Math.tan(angle_of_elevation * Math.PI / 180) + 4",
          "distance_from_base * Math.tan(angle_of_elevation * Math.PI / 180) + 6",
        ],
        explanationTemplate: `
          To find the height of the tower, we use the formula for tangent: <br><br>
          Height = Distance from Base * tan(Angle of Elevation).<br><br>
          Substituting the given values, we get: <br>
          Height = {{distance_from_base}} * tan({{angle_of_elevation}}°) = {{final_answer}} meters.<br><br>
          Therefore, the height of the tower is {{final_answer}} meters.<br><br>
        `,
      },
    ],
  },
  "coordinate-geometry": {
    description:
      "Coordinate Geometry involves the study of geometric figures using a coordinate system, enabling the calculation of distances, slopes, areas, and other geometric properties. It is widely used in real-life applications such as locating points on a map, seating arrangements, and more...",
    realLife: [
      {
        id: 1,
        title: "Determining Areas and Volumes",
        content:
          "Coordinate geometry helps in determining the areas and volumes of various objects, making it crucial in fields like engineering and architecture.",
      },
      {
        id: 2,
        title: "Seating Arrangements in Theatres and Airlines",
        content:
          "Seating systems in theatres and airlines are based on coordinate systems, with numbered rows and seats resembling coordinates.",
      },
      {
        id: 3,
        title: "Chess Notation and Grid-Based Games",
        content:
          "Chess notation uses a coordinate system to express moves, and many other grid-based games utilize similar systems for simplicity and precision.",
      },
      {
        id: 4,
        title: "Geographic Coordinates",
        content:
          "Geographic coordinates allow for pinpointing specific locations on the Earth’s surface, essential for navigation and mapping.",
      },
    ],
    concepts: `
    <h1>Understanding the Concepts of Coordinate Geometry</h1>
    <p>Coordinate Geometry, also known as analytic geometry, is the study of geometry using a coordinate system. By representing geometric shapes like points, lines, and curves on a coordinate plane, problems in geometry can be solved algebraically. Key concepts include the coordinate plane, distance formulas, slopes, midpoints, section formulas, and the equations of lines and curves.</p>
    
    <h2>Key Concepts of Coordinate Geometry</h2>
    <p>Coordinate Geometry bridges algebra and geometry, providing a powerful tool for analyzing geometric figures. Below are the fundamental concepts involved in this field:</p>
    
    <h3>1. Coordinate Plane</h3>
    <p>The coordinate plane, also known as the Cartesian plane, is a two-dimensional surface divided by the x-axis (horizontal) and y-axis (vertical). These axes intersect at the origin (0, 0), and any point on the plane can be described by a pair of coordinates (x, y). The plane is divided into four quadrants, where the signs of x and y vary.</p>
    <p><strong>Example:</strong> A point located at (3, 4) lies 3 units along the x-axis and 4 units along the y-axis from the origin.</p>
    
    <h3>2. Coordinates of a Point</h3>
    <p>The coordinates of a point represent its exact position on the coordinate plane, expressed as (x, y). The first number (x) indicates the horizontal position, while the second number (y) indicates the vertical position. These coordinates are essential for plotting points and analyzing geometric shapes on the plane.</p>
    <p><strong>Example:</strong> The coordinates (−2, 5) indicate a point that is 2 units to the left of the origin and 5 units above it.</p>
    
    <h3>3. Distance Calculation (Two-Point Formula)</h3>
    <p>The distance between two points on the coordinate plane can be calculated using the distance formula. If the coordinates of the points are (x₁, y₁) and (x₂, y₂), the distance (D) between them is given by:</p>
    <p><strong>Formula:</strong> D = √((x₂−x₁)² + (y₂−y₁)²)</p>
    <p><strong>Example:</strong> To find the distance between points (1, 2) and (4, 6), substitute into the formula: D = √((4−1)² + (6−2)²) = √(3² + 4²) = √(9 + 16) = √25 = 5 units.</p>
    
    <h3>4. Slope</h3>
    <p>The slope of a line measures its steepness and is calculated as the ratio of the change in y to the change in x between two points on the line. If the points are (x₁, y₁) and (x₂, y₂), the slope (m) is given by:</p>
    <p><strong>Formula:</strong> m = (y₂−y₁)/(x₂−x₁) or m = tanθ, where θ is the angle the line makes with the positive x-axis.</p>
    <p><strong>Example:</strong> The slope between points (2, 3) and (6, 7) is m = (7−3)/(6−2) = 4/4 = 1.</p>
    
    <h3>5. Midpoint</h3>
    <p>The midpoint of a line segment connecting two points is the point exactly halfway between them. For points (x₁, y₁) and (x₂, y₂), the midpoint (M) is calculated as:</p>
    <p><strong>Formula:</strong> M = [(x₁+x₂)/2, (y₁+y₂)/2]</p>
    <p><strong>Example:</strong> The midpoint of the line segment between (2, 4) and (6, 8) is M = [(2+6)/2, (4+8)/2] = (4, 6).</p>
    
    <h3>6. Section Formula</h3>
    <p>The section formula determines the coordinates of a point that divides a line segment between two points (x₁, y₁) and (x₂, y₂) in a given ratio m:n. The formula for the coordinates (x, y) of the dividing point is:</p>
    <p><strong>Formula:</strong> (x, y) = [(mx₂ + nx₁)/(m+n), (my₂ + ny₁)/(m+n)]</p>
    <p><strong>Example:</strong> To find the point dividing the line segment between (1, 2) and (4, 6) in the ratio 2:1, use the formula: (x, y) = [(2×4 + 1×1)/(2+1), (2×6 + 1×2)/(2+1)] = (9/3, 14/3) = (3, 4.67).</p>
    
    <h3>7. Centroid of a Triangle</h3>
    <p>The centroid of a triangle is the point where its three medians intersect. The coordinates of the centroid (G) for a triangle with vertices at (x₁, y₁), (x₂, y₂), and (x₃, y₃) are given by:</p>
    <p><strong>Formula:</strong> G = [(x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3]</p>
    <p><strong>Example:</strong> For a triangle with vertices at (1, 2), (3, 4), and (5, 6), the centroid is G = [(1+3+5)/3, (2+4+6)/3] = (3, 4).</p>
    
    <h3>8. Area of a Triangle</h3>
    <p>The area of a triangle in a coordinate plane can be calculated using the vertices' coordinates. For a triangle with vertices at (x₁, y₁), (x₂, y₂), and (x₃, y₃), the area (A) is given by:</p>
    <p><strong>Formula:</strong> A = 1/2 |x₁(y₂−y₃) + x₂(y₃−y₁) + x₃(y₁−y₂)|</p>
    <p><strong>Example:</strong> To find the area of a triangle with vertices (1, 2), (4, 6), and (5, 2), substitute into the formula: A = 1/2 |1(6−2) + 4(2−2) + 5(2−6)| = 1/2 |4 + 0 − 20| = 8 square units.</p>
    
    <h3>9. Equation of a Line</h3>
    <p>The equation of a line in coordinate geometry can be expressed in various forms, depending on the information available. The slope-intercept form is:</p>
    <p><strong>Formula:</strong> y = mx + c, where m is the slope and c is the y-intercept.</p>
    <p>Other forms include:</p>
    <ul>
      <li><strong>General form:</strong> ax + by + c = 0</li>
      <li><strong>Point-slope form:</strong> y − y₁ = m(x − x₁)</li>
      <li><strong>Two-point form:</strong> (y − y₁) = [(y₂−y₁)/(x₂−x₁)](x − x₁)</li>
    </ul>
    <p><strong>Example:</strong> The equation of a line with slope 2 and y-intercept 3 is y = 2x + 3.</p>
    
    <h2>Applications and Example Problems</h2>
    <p>Coordinate geometry has extensive applications in fields like physics, engineering, computer graphics, and more. Below are some practical applications and example problems:</p>
    
    <h3>10. Application in Real Life</h3>
    <ul>
      <li><strong>Physics:</strong> Coordinate geometry is used in physics to analyze the motion of objects, such as the trajectory of a projectile or the path of a moving car.</li>
      <li><strong>Engineering:</strong> Engineers use coordinate geometry to design structures, analyze forces, and optimize systems in fields such as civil engineering and robotics.</li>
      <li><strong>Computer Graphics:</strong> In computer graphics, coordinate geometry is used to render images, simulate environments, and create animations.</li>
    </ul>
    
    <h3>11. Example Problem</h3>
    <p><strong>Problem:</strong> Find the equation of a line passing through the points (2, 3) and (5, 11).</p>
    
    <p><strong>Solution:</strong></p>
    <p>To find the equation of the line passing through two points (x1, y1) and (x2, y2), we use the point-slope form of the equation of a line, which is given by:</p>
    <p><strong>Point-Slope Form:</strong> y - y1 = m(x - x1)</p>
    <p>where <strong>m</strong> is the slope of the line, calculated as:</p>
    <p><strong>Slope (m):</strong> m = (y2 - y1) / (x2 - x1)</p>
    
    <p>For the given points (2, 3) and (5, 11):</p>
    <ul>
      <li><strong>Coordinates (x1, y1):</strong> (2, 3)</li>
      <li><strong>Coordinates (x2, y2):</strong> (5, 11)</li>
      <li><strong>Slope (m):</strong> m = (11 - 3) / (5 - 2) = 8 / 3</li>
    </ul>
    
    <p>Using the point-slope form with one of the points, say (2, 3):</p>
    <p><strong>Equation:</strong> y - 3 = (8 / 3)(x - 2)</p>
    
    <p>To convert this into the slope-intercept form (y = mx + b), simplify the equation:</p>
    <p>y - 3 = (8 / 3)x - (16 / 3)</p>
    <p>y = (8 / 3)x - (16 / 3) + 3</p>
    <p>y = (8 / 3)x - (16 / 3) + (9 / 3)</p>
    <p>y = (8 / 3)x - (7 / 3)</p>
    
    <p><strong>Final Equation:</strong> y = (8 / 3)x - (7 / 3)</p>
    
    <p>The equation of the line passing through the points (2, 3) and (5, 11) is y = (8 / 3)x - (7 / 3).</p>
    
    
    `,
    formulae: [
      {
        id: 1,
        toCalculate: "Distance Between Two Points",
        formuales: "D = √((x2−x1)² + (y2−y1)²)",
      },
      {
        id: 2,
        toCalculate: "Slope of a Line",
        formuales: "m = (y2−y1)/(x2−x1)",
      },
      {
        id: 3,
        toCalculate: "Mid-point",
        formuales: "(x, y) = [(x1+x2)/2, (y1+y2)/2]",
      },
      {
        id: 4,
        toCalculate: "Section Formula",
        formuales: "(x, y) = [(mx2 + nx1)/(m+n), (my2 + ny1)/(m+n)]",
      },
      {
        id: 5,
        toCalculate: "Centroid of a Triangle",
        formuales: "(x, y) = [(x1+x2+x3)/3, (y1+y2+y3)/3]",
      },
      {
        id: 6,
        toCalculate: "Area of a Triangle",
        formuales: "Area = 1/2 |x1(y2−y3) + x2(y3−y1) + x3(y1−y2)|",
      },
      {
        id: 7,
        toCalculate: "Equation of a Line",
        formuales: "y = mx + c",
      },
    ],
    practiceQuestions: [
      {
        id: 1,
        template:
          "Find the distance between the points ({{x1}}, {{y1}}) and ({{x2}}, {{y2}}).",
        limits: {
          x1: [1, 3, 5, 7, 9],
          y1: [2, 4, 6, 8, 10],
          x2: [2, 4, 6, 8, 10],
          y2: [3, 5, 7, 9, 11],
        },
        correctAnswerFormula:
          "Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))",
        optionsFormula: [
          "Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)) + 1",
          "Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))",
          "Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)) + 2",
          "Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2)) + 3",
        ],
        explanationTemplate: `
          To find the distance between two points, we use the distance formula: <br><br>
          Distance = √[(x2 - x1)² + (y2 - y1)²].<br><br>
          Substituting the given values, we get: <br>
          Distance = √[({{x2}} - {{x1}})² + ({{y2}} - {{y1}})²] = {{final_answer}}.<br><br>
          Therefore, the distance between the points is {{final_answer}}.<br><br>
        `,
      },
      {
        id: 2,
        template:
          "Find the midpoint of the line segment joining the points ({{x1}}, {{y1}}) and ({{x2}}, {{y2}}).",
        limits: {
          x1: [1, 3, 5, 7, 9],
          y1: [2, 4, 6, 8, 10],
          x2: [2, 4, 6, 8, 10],
          y2: [3, 5, 7, 9, 11],
        },
        correctAnswerFormula: "[(x1 + x2) / 2, (y1 + y2) / 2]",
        optionsFormula: [
          "[(x1 + x2) / 2 + 1, (y1 + y2) / 2 + 1]",
          "[(x1 + x2) / 2, (y1 + y2) / 2]",
          "[(x1 + x2) / 2 + 2, (y1 + y2) / 2 + 2]",
          "[(x1 + x2) / 2 + 3, (y1 + y2) / 2 + 3]",
        ],
        explanationTemplate: `
          To find the midpoint of a line segment, we use the midpoint formula: <br><br>
          Midpoint = [(x1 + x2) / 2, (y1 + y2) / 2].<br><br>
          Substituting the given values, we get: <br>
          Midpoint = [({{x1}} + {{x2}}) / 2, ({{y1}} + {{y2}}) / 2] = {{final_answer}}.<br><br>
          Therefore, the midpoint of the line segment is {{final_answer}}.<br><br>
        `,
      },
      {
        id: 3,
        template:
          "Find the slope of the line passing through the points ({{x1}}, {{y1}}) and ({{x2}}, {{y2}}).",
        limits: {
          x1: [1, 2, 3, 4, 5],
          y1: [3, 4, 5, 6, 7],
          x2: [6, 7, 8, 9, 10],
          y2: [8, 9, 10, 11, 12],
        },
        correctAnswerFormula: "(y2 - y1) / (x2 - x1)",
        optionsFormula: [
          "(y2 - y1) / (x2 - x1) + 1",
          "(y2 - y1) / (x2 - x1)",
          "(y2 - y1) / (x2 - x1) + 2",
          "(y2 - y1) / (x2 - x1) + 3",
        ],
        explanationTemplate: `
          To find the slope of a line passing through two points, we use the formula: <br><br>
          Slope = (y2 - y1) / (x2 - x1).<br><br>
          Substituting the given values, we get: <br>
          Slope = ({{y2}} - {{y1}}) / ({{x2}} - {{x1}}) = {{final_answer}}.<br><br>
          Therefore, the slope of the line is {{final_answer}}.<br><br>
        `,
      },
    ],
  },
  "profit-and-loss": {
    description:
      "Profit and Loss is a fundamental concept in business and everyday life, determining the financial outcome of transactions. It involves calculating the difference between the selling price and the cost price to assess profit or loss. Understanding this concept is crucial for managing finances effectively...",
    realLife: [
      {
        id: 1,
        title: "Business Operations",
        content:
          "Profit and Loss are essential in any organization or industry, helping businesses to evaluate their financial health and make informed decisions about pricing, investments, and expenses.",
      },
      {
        id: 2,
        title: "Shopping Discounts",
        content:
          "When you shop and receive a discount, you're experiencing a form of profit. Understanding how discounts relate to profit can help consumers make better purchasing decisions.",
      },
    ],
    concepts: `
    <h1>Understanding the Concepts of Profit and Loss</h1>
    <p>Profit and Loss are fundamental concepts in both personal finance and business operations, involving the comparison of the selling price (S.P.) and cost price (C.P.) of goods or services. These calculations help determine whether a transaction results in financial gain or loss, and they are essential for making informed financial decisions. Key terms such as profit, loss, cost price, selling price, marked price, and discount are crucial to understanding this topic.</p>
    
    <h2>Key Concepts of Profit and Loss</h2>
    <p>Profit and loss calculations are used in various financial scenarios, from simple daily transactions to complex business operations. Below are the primary concepts and their explanations:</p>
    
    <h3>1. Profit (P)</h3>
    <p>Profit is earned when an item is sold at a price higher than its cost price. It represents the financial gain obtained from a transaction. The profit can be calculated using the formula:</p>
    <p><strong>Formula:</strong> Profit (P) = Selling Price (S.P.) - Cost Price (C.P.)</p>
    <p><strong>Example:</strong> If a book is bought for $50 and sold for $70, the profit made is P = $70 - $50 = $20.</p>
    
    <h3>2. Loss (L)</h3>
    <p>Loss occurs when an item is sold at a price lower than its cost price, indicating a financial loss in the transaction. The loss can be calculated using the formula:</p>
    <p><strong>Formula:</strong> Loss (L) = Cost Price (C.P.) - Selling Price (S.P.)</p>
    <p><strong>Example:</strong> If a gadget is bought for $100 and sold for $80, the loss incurred is L = $100 - $80 = $20.</p>
    
    <h3>3. Cost Price (C.P.)</h3>
    <p>The cost price is the original price at which an item is purchased. It forms the basis for calculating both profit and loss and is a crucial factor in determining the selling price.</p>
    <p><strong>Example:</strong> If a smartphone is purchased for $300, the cost price is $300, which will be used to calculate any potential profit or loss when selling the phone.</p>
    
    <h3>4. Selling Price (S.P.)</h3>
    <p>The selling price is the price at which an item is sold to a buyer. It is compared to the cost price to determine whether a profit or loss has been made. The selling price may be higher, lower, or equal to the cost price, depending on various factors like market demand, competition, and discounts.</p>
    <p><strong>Example:</strong> If the smartphone mentioned above is sold for $350, the selling price is $350, which can be used to calculate the profit.</p>
    
    <h3>5. Marked Price</h3>
    <p>The marked price is the price initially set by the seller before any discounts or negotiations. It is often higher than the selling price and serves as a reference point for offering discounts or incentives to buyers.</p>
    <p><strong>Example:</strong> A jacket might have a marked price of $100, but after a 20% discount, the selling price becomes $80.</p>
    
    <h3>6. Discount</h3>
    <p>A discount is a reduction from the marked price, offered by the seller to attract buyers or clear stock. Discounts are calculated as the difference between the marked price and the selling price and are often expressed as a percentage of the marked price.</p>
    <p><strong>Formula:</strong> Discount = Marked Price - Selling Price</p>
    <p><strong>Example:</strong> If the marked price of a pair of shoes is $120 and a discount of $30 is offered, the selling price would be $90, with the discount calculated as $120 - $90 = $30.</p>
    
    <h2>Calculating Profit Percentage and Loss Percentage</h2>
    <p>To evaluate the efficiency of a transaction, it's common to calculate the profit or loss as a percentage of the cost price. This provides a relative measure of the gain or loss, making it easier to compare across different transactions.</p>
    
    <h3>7. Profit Percentage</h3>
    <p>The profit percentage is calculated by dividing the profit by the cost price and multiplying by 100. It indicates how much profit is made relative to the cost price.</p>
    <p><strong>Formula:</strong> Profit Percentage = (Profit / Cost Price) × 100</p>
    <p><strong>Example:</strong> If a laptop is bought for $500 and sold for $600, the profit is $100, and the profit percentage is (100/500) × 100 = 20%.</p>
    
    <h3>8. Loss Percentage</h3>
    <p>The loss percentage is calculated by dividing the loss by the cost price and multiplying by 100. It shows the extent of the loss relative to the cost price.</p>
    <p><strong>Formula:</strong> Loss Percentage = (Loss / Cost Price) × 100</p>
    <p><strong>Example:</strong> If a piece of furniture is bought for $800 and sold for $600, the loss is $200, and the loss percentage is (200/800) × 100 = 25%.</p>
    
    <h2>Break-even Point</h2>
    <p>The break-even point is the selling price at which there is no profit or loss. At this point, the selling price equals the cost price, and the transaction results in neither gain nor loss.</p>
    <p><strong>Example:</strong> If a trader buys goods for $100 and sells them for $100, they are at the break-even point, with zero profit and zero loss.</p>
    
    <h2>Applications and Example Problems</h2>
    <p>Profit and loss concepts are widely applied in various real-life situations, from simple day-to-day transactions to complex business scenarios. Below are some practical applications and example problems:</p>
    
    <h3>9. Application in Business</h3>
    <ul>
      <li><strong>Retail:</strong> Retailers use profit and loss calculations to price goods, manage discounts, and maximize profits.</li>
      <li><strong>Investments:</strong> Investors analyze the profitability of their investments by calculating the potential profit or loss from buying and selling stocks, real estate, or other assets.</li>
      <li><strong>Manufacturing:</strong> Manufacturers use these concepts to determine the cost-effectiveness of production processes, pricing strategies, and profit margins.</li>
    </ul>
    
    <h3>10. Example Problem</h3>
    <p><strong>Problem:</strong> A shopkeeper bought 50 units of a product at $10 each. He sold 30 units at $15 each and the remaining 20 units at $8 each. Calculate the total profit or loss made by the shopkeeper.</p>
    <p><strong>Solution:</strong></p>
    <ul>
      <li>Cost Price of 50 units = 50 × $10 = $500</li>
      <li>Selling Price of 30 units = 30 × $15 = $450</li>
      <li>Selling Price of 20 units = 20 × $8 = $160</li>
      <li>Total Selling Price = $450 + $160 = $610</li>
      <li>Total Profit = $610 - $500 = $110</li>
      <li>Profit Percentage = (110/500) × 100 = 22%</li>
    </ul>
    <p>The shopkeeper made a total profit of $110, with a profit percentage of 22%.</p>
    
    <h2>Conclusion</h2>
    <p>Understanding profit and loss is essential for making informed financial decisions, whether in personal finance, business, or investments. These calculations provide insight into the financial outcomes of transactions, helping individuals and businesses maximize profits and minimize losses.</p>
    
    `,
    formulae: [
      {
        id: 1,
        toCalculate: "Profit or Gain",
        formuales: "Profit = Selling Price – Cost Price",
      },
      {
        id: 2,
        toCalculate: "Loss",
        formuales: "Loss = Cost Price – Selling Price",
      },
      {
        id: 3,
        toCalculate: "Profit/Loss Percentage",
        formuales:
          "Profit or Loss Percentage = ((Profit or Loss)/Cost Price) x 100",
      },
      {
        id: 4,
        toCalculate:
          "Relation Between Marked Price, Discount, and Selling Price",
        formuales: "Marked Price – Discount = Selling Price",
      },
      {
        id: 5,
        toCalculate: "Profit Percentage for False Weight",
        formuales: "[(True Weight – False Weight)/False Weight] x 100",
      },
    ],
    practiceQuestions: [
      {
        id: 1,
        template:
          "A shopkeeper buys an item for {{cost_price}} and sells it for {{selling_price}}. What is the profit percentage?",
        limits: {
          cost_price: [100, 150, 200, 250, 300],
          selling_price: [120, 180, 240, 300, 360],
        },
        correctAnswerFormula:
          "((selling_price - cost_price) / cost_price) * 100",
        optionsFormula: [
          "((selling_price - cost_price) / cost_price) * 100",
          "((selling_price - cost_price + 10) / cost_price) * 100",
          "((selling_price - cost_price - 10) / cost_price) * 100",
          "((selling_price - cost_price + 5) / cost_price) * 100",
        ],
        explanationTemplate:
          "To find the profit percentage, use the formula:<br><br> Profit Percentage = (Profit / Cost Price) * 100.<br><br> Profit = Selling Price - Cost Price = {{selling_price}} - {{cost_price}} = {{selling_price - cost_price}}.<br><br> Profit Percentage = ({{selling_price - cost_price}} / {{cost_price}}) * 100 = {{final_answer}}%.<br><br> Therefore, the profit percentage is {{final_answer}}%.",
      },
      {
        id: 2,
        template:
          "A man buys {{quantity}} items for {{total_cost}} and sells them at a profit of {{profit_percentage}}%. What is the selling price of each item?",
        limits: {
          quantity: [10, 20, 30, 40, 50],
          total_cost: [100, 200, 300, 400, 500],
          profit_percentage: [10, 20, 30, 40, 50],
        },
        correctAnswerFormula:
          "(total_cost / quantity) * (1 + profit_percentage / 100)",
        optionsFormula: [
          "(total_cost / quantity) * (1 + profit_percentage / 100)",
          "(total_cost / quantity) * (1 + (profit_percentage + 10) / 100)",
          "(total_cost / quantity) * (1 + (profit_percentage - 10) / 100)",
          "(total_cost / quantity) * (1 + profit_percentage / 100) + 5",
        ],
        explanationTemplate:
          "To find the selling price of each item, use the formula:<br><br> Selling Price per Item = (Cost Price per Item) * (1 + Profit Percentage / 100).<br><br> Cost Price per Item = Total Cost / Quantity = {{total_cost}} / {{quantity}} = {{total_cost / quantity}}.<br><br> Selling Price per Item = {{total_cost / quantity}} * (1 + {{profit_percentage}} / 100) = {{final_answer}}.<br><br> Therefore, the selling price of each item is {{final_answer}}.",
      },
      {
        id: 3,
        template:
          "A shopkeeper marks up the price of an item by {{markup_percentage}}% and then offers a discount of {{discount_percentage}}%. If the cost price of the item is {{cost_price}}, what is the final selling price?",
        limits: {
          markup_percentage: [20, 30, 40, 50, 60],
          discount_percentage: [10, 20, 30, 40, 50],
          cost_price: [100, 200, 300, 400, 500],
        },
        correctAnswerFormula:
          "(cost_price * (1 + markup_percentage / 100)) * (1 - discount_percentage / 100)",
        optionsFormula: [
          "(cost_price * (1 + markup_percentage / 100)) * (1 - discount_percentage / 100)",
          "(cost_price * (1 + markup_percentage / 100)) * (1 - (discount_percentage - 5) / 100)",
          "(cost_price * (1 + markup_percentage / 100)) * (1 - (discount_percentage + 5) / 100)",
          "(cost_price * (1 + markup_percentage / 100)) * (1 - discount_percentage / 100) + 10",
        ],
        explanationTemplate:
          "To find the final selling price, use the formula:<br><br> Final Selling Price = Marked Price * (1 - Discount Percentage / 100).<br><br> Marked Price = Cost Price * (1 + Markup Percentage / 100) = {{cost_price}} * (1 + {{markup_percentage}} / 100) = {{cost_price * (1 + markup_percentage / 100)}}.<br><br> Final Selling Price = {{cost_price * (1 + markup_percentage / 100)}} * (1 - {{discount_percentage}} / 100) = {{final_answer}}.<br><br> Therefore, the final selling price is {{final_answer}}.",
      },
    ],
  },
  "compound-interest": {
    description:
      "Compound Interest (C.I.) is a financial concept where interest is calculated on the initial principal and also on the accumulated interest of previous periods. This process of earning 'interest on interest' results in the exponential growth of investments over time...",
    realLife: [
      {
        id: 1,
        title: "Rule of 72",
        content:
          "The Rule of 72 is a quick way to estimate how long it will take for an investment to double in value with compound interest. Many people unknowingly benefit from compound interest through savings accounts, investments, and retirement funds.",
      },
    ],
    concepts: `
    <h1>Understanding the Concepts of Compound Interest</h1>
    <p>Compound Interest is a key concept in finance, playing a crucial role in personal financial planning, investments, and savings. Unlike simple interest, where interest is calculated only on the principal, compound interest takes into account both the principal and the accumulated interest from previous periods. This results in the exponential growth of investments over time, making it a powerful tool for wealth creation.</p>
    
    <h2>Key Concepts of Compound Interest</h2>
    <p>Below are the primary concepts related to compound interest, with explanations and examples to help in understanding this essential financial topic:</p>
    
    <h3>1. Compound Interest (C.I.)</h3>
    <p>Compound Interest is the interest calculated on the initial principal and the interest that has already been added to the principal. This means that interest is earned not only on the original amount but also on the accumulated interest, leading to exponential growth over time.</p>
    <p><strong>Formula:</strong> The basic formula to calculate compound interest annually is:</p>
    <p><strong>C.I. = P(1 + R/100)<sup>N</sup> - P</strong></p>
    <p>Where:</p>
    <ul>
      <li><strong>P</strong> = Principal amount (the initial investment or loan amount)</li>
      <li><strong>R</strong> = Rate of interest per annum (as a percentage)</li>
      <li><strong>N</strong> = Number of years the money is invested or borrowed for</li>
    </ul>
    <p><strong>Example:</strong> If $1,000 is invested at an annual interest rate of 5% for 3 years, the compound interest is calculated as:</p>
    <p>C.I. = 1000(1 + 5/100)<sup>3</sup> - 1000 = $157.63</p>
    <p>So, the interest earned over 3 years is $157.63.</p>
    
    <h3>2. Amount</h3>
    <p>The amount refers to the total value of the investment or loan after the interest has been added. It is the sum of the principal and the compound interest.</p>
    <p><strong>Formula:</strong> The amount can be calculated using:</p>
    <p><strong>Amount = Principal + Compound Interest</strong></p>
    <p>Alternatively, it can be directly calculated using:</p>
    <p><strong>Amount = P(1 + R/100)<sup>N</sup></strong></p>
    <p><strong>Example:</strong> For the same example above, the total amount after 3 years would be:</p>
    <p>Amount = 1000(1 + 5/100)<sup>3</sup> = $1,157.63</p>
    <p>Thus, the investment grows to $1,157.63 over 3 years.</p>
    
    <h3>3. Formula for Compound Interest</h3>
    <p>The basic formula for calculating compound interest annually has been mentioned above, but there are other variations depending on the compounding frequency, such as semi-annually, quarterly, or monthly.</p>
    <p>Here’s a more generalized formula that accounts for different compounding frequencies:</p>
    <p><strong>C.I. = P(1 + (R/100n))<sup>nN</sup> - P</strong></p>
    <p>Where:</p>
    <ul>
      <li><strong>P</strong> = Principal amount</li>
      <li><strong>R</strong> = Annual interest rate (as a percentage)</li>
      <li><strong>n</strong> = Number of times interest is compounded per year</li>
      <li><strong>N</strong> = Number of years</li>
    </ul>
    <p><strong>Example:</strong> If $1,000 is invested at an annual interest rate of 5%, compounded quarterly (n=4), for 3 years, the compound interest is calculated as:</p>
    <p>C.I. = 1000(1 + (5/100×4))<sup>4×3</sup> - 1000 = $159.27</p>
    <p>The interest earned over 3 years, when compounded quarterly, is $159.27.</p>
    
    <h2>Impact of Compounding Frequency</h2>
    <p>The frequency of compounding has a significant impact on the amount of interest earned. The more frequently interest is compounded, the higher the total interest will be. Common compounding frequencies include:</p>
    <ul>
      <li><strong>Annually:</strong> Interest is compounded once a year.</li>
      <li><strong>Semi-Annually:</strong> Interest is compounded twice a year.</li>
      <li><strong>Quarterly:</strong> Interest is compounded four times a year.</li>
      <li><strong>Monthly:</strong> Interest is compounded twelve times a year.</li>
      <li><strong>Daily:</strong> Interest is compounded every day of the year.</li>
    </ul>
    <p>For instance, if interest is compounded monthly instead of annually, the amount of interest earned will be higher, due to the effect of compounding on accumulated interest within shorter intervals.</p>
    
    <h3>4. Continuous Compounding</h3>
    <p>Continuous compounding is an extreme case where interest is compounded an infinite number of times per year. The formula for continuous compounding is:</p>
    <p><strong>Amount = P × e<sup>r×t</sup></strong></p>
    <p>Where:</p>
    <ul>
      <li><strong>P</strong> = Principal amount</li>
      <li><strong>e</strong> = Euler's number (approximately equal to 2.71828)</li>
      <li><strong>r</strong> = Annual interest rate (in decimal)</li>
      <li><strong>t</strong> = Time period (in years)</li>
    </ul>
    <p><strong>Example:</strong> If $1,000 is invested at a 5% interest rate, compounded continuously for 3 years:</p>
    <p>Amount = 1000 × e<sup>0.05×3</sup> ≈ $1,161.83</p>
    <p>The total amount after 3 years with continuous compounding would be $1,161.83.</p>
    
    <h3>5. Rule of 72</h3>
    <p>The Rule of 72 is a simple way to estimate the time it will take for an investment to double, given a fixed annual rate of interest. It is particularly useful for quick mental calculations.</p>
    <p><strong>Formula:</strong> Time to double ≈ 72 / Interest Rate</p>
    <p><strong>Example:</strong> If you have an investment with an annual interest rate of 6%, the time it will take to double is approximately:</p>
    <p>Time ≈ 72 / 6 ≈ 12 years</p>
    <p>So, the investment will double in about 12 years.</p>
    
    <h2>Applications and Example Problems</h2>
    <p>Compound interest is widely used in various financial applications, including savings accounts, loans, investments, and retirement planning. Below are some practical applications and example problems:</p>
    
    <h3>6. Application in Savings Accounts</h3>
    <p>Savings accounts often use compound interest to calculate the interest earned on deposits. The more frequently the interest is compounded, the more money you earn on your savings.</p>
    <p><strong>Example:</strong> A savings account offers a 4% annual interest rate, compounded monthly. If you deposit $5,000, the amount in your account after 5 years will be calculated using the formula for compound interest with monthly compounding.</p>
    
    <h3>7. Application in Loans</h3>
    <p>Loans often involve compound interest, which means that the interest accrued is added to the principal, and subsequent interest calculations are based on this increased amount. This can significantly increase the total amount repaid over time.</p>
    <p><strong>Example:</strong> A loan of $10,000 with a 7% interest rate, compounded annually, will accrue more interest over time compared to a simple interest loan.</p>
    
    
    `,
    formulae: [
      {
        id: 1,
        toCalculate: "Compound Interest Annually",
        formuales: "(P(1 + R/100)^N) - P",
      },
      {
        id: 2,
        toCalculate: "Compound Interest Half Yearly",
        formuales: "(P(1 + R/(2*100))^2N) - P",
      },
      {
        id: 3,
        toCalculate: "Compound Interest Quarterly",
        formuales: "(P(1 + R/(4*100))^4N) - P",
      },
      {
        id: 4,
        toCalculate: "Rule of 72 (Doubling Time)",
        formuales: "72 / Rate of Interest (years)",
      },
    ],
    practiceQuestions: [
      {
        id: 1,
        template:
          "Calculate the compound interest on a principal of {{principal}} at a rate of {{rate}}% per annum for {{time}} years, compounded annually.",
        limits: {
          principal: [1000, 2000, 3000, 4000, 5000],
          rate: [5, 6, 7, 8, 9],
          time: [2, 3, 4, 5, 6],
        },
        correctAnswerFormula:
          "principal * Math.pow((1 + rate / 100), time) - principal",
        optionsFormula: [
          "principal * Math.pow((1 + rate / 100), time) - principal",
          "principal * Math.pow((1 + (rate + 1) / 100), time) - principal",
          "principal * Math.pow((1 + rate / 100), time) - principal + 100",
          "principal * Math.pow((1 + (rate - 1) / 100), time) - principal",
        ],
        explanationTemplate:
          "To calculate the compound interest, we use the formula:<br><br> Compound Interest = Principal * (1 + Rate / 100)^Time - Principal.<br><br> Substituting the given values, we get:<br> Compound Interest = {{principal}} * (1 + {{rate}} / 100)^{{time}} - {{principal}} = {{final_answer}}.<br><br> Therefore, the compound interest is {{final_answer}}.",
      },
      {
        id: 2,
        template:
          "Find the amount after {{time}} years on a principal of {{principal}} at a rate of {{rate}}% per annum, compounded semi-annually.",
        limits: {
          principal: [1000, 2000, 3000, 4000, 5000],
          rate: [4, 5, 6, 7, 8],
          time: [2, 3, 4, 5, 6],
        },
        correctAnswerFormula:
          "principal * Math.pow((1 + (rate / 2) / 100), 2 * time)",
        optionsFormula: [
          "principal * Math.pow((1 + (rate / 2) / 100), 2 * time)",
          "principal * Math.pow((1 + (rate + 1) / 2 / 100), 2 * time)",
          "principal * Math.pow((1 + (rate / 2) / 100), 2 * time) + 100",
          "principal * Math.pow((1 + (rate - 1) / 2 / 100), 2 * time)",
        ],
        explanationTemplate:
          "To find the amount after {{time}} years with interest compounded semi-annually, use the formula:<br><br> Amount = Principal * (1 + (Rate / 2) / 100)^(2 * Time).<br><br> Substituting the given values, we get:<br> Amount = {{principal}} * (1 + ({{rate}} / 2) / 100)^(2 * {{time}}) = {{final_answer}}.<br><br> Therefore, the amount after {{time}} years is {{final_answer}}.",
      },
      {
        id: 3,
        template:
          "What is the principal if the amount after {{time}} years at {{rate}}% per annum, compounded annually, is {{amount}}?",
        limits: {
          time: [2, 3, 4, 5, 6],
          rate: [4, 5, 6, 7, 8],
          amount: [2000, 3000, 4000, 5000, 6000],
        },
        correctAnswerFormula: "amount / Math.pow((1 + rate / 100), time)",
        optionsFormula: [
          "amount / Math.pow((1 + rate / 100), time)",
          "amount / Math.pow((1 + (rate + 1) / 100), time)",
          "amount / Math.pow((1 + rate / 100), time) + 100",
          "amount / Math.pow((1 + (rate - 1) / 100), time)",
        ],
        explanationTemplate:
          "To find the principal given the amount, use the formula:<br><br> Principal = Amount / (1 + Rate / 100)^Time.<br><br> Substituting the given values, we get:<br> Principal = {{amount}} / (1 + {{rate}} / 100)^{{time}} = {{final_answer}}.<br><br> Therefore, the principal is {{final_answer}}.",
      },
    ],
  },
  "permutations-and-combinations": {
    description:
      "Permutations and Combinations are fundamental concepts in mathematics used to count and arrange objects. Permutations focus on the arrangement of items where the order matters, while combinations focus on selection where the order is irrelevant...",
    realLife: [
      {
        id: 1,
        title: "Making a Sandwich",
        content:
          "When making a sandwich with two slices of bread from a total of 10 slices, you can create 45 different combinations (10C2). Additionally, if the order of slices matters, you have 90 possible permutations (10P2) for arranging the sandwich.",
      },
      {
        id: 2,
        title: "Security and Cryptography",
        content:
          "Permutations and combinations are crucial in security applications, including number locks, pattern locks in mobile phones, and cryptographic algorithms used to secure data.",
      },
      {
        id: 3,
        title: "Arranging Books on a Shelf",
        content:
          "If you have 12 novels and want to arrange them on a shelf, permutations help determine the number of possible ways to arrange these books in the traditional upright orientation.",
      },
    ],
    concepts: `
       
<h1>Understanding the Concepts of Permutations and Combinations</h1>
<p>Permutations and Combinations are fundamental mathematical concepts used to determine the number of possible arrangements or selections of a set of objects. These concepts are essential tools in probability, statistics, and various real-life applications, such as creating passwords, organizing events, or solving complex counting problems. The fundamental principle of counting underpins these concepts, providing a systematic approach to problem-solving.</p>

<h2>Key Concepts of Permutations and Combinations</h2>
<p>Understanding the difference between permutations and combinations is crucial. While permutations involve arranging objects in a specific order, combinations focus on selecting objects without considering the order. Both concepts are intertwined with the fundamental principle of counting, which serves as the foundation for solving related problems.</p>

<h3>1. Permutations</h3>
<p>Permutations refer to the arrangement of objects in a specific order. The concept of permutations is used when the order of the objects matters. The number of permutations of 'n' objects taken 'r' at a time is calculated using the formula:</p>
<p><strong>Formula:</strong> nPr = n! / (n-r)!</p>
<p><strong>Where:</strong></p>
<ul>
  <li><strong>n:</strong> The total number of objects.</li>
  <li><strong>r:</strong> The number of objects chosen.</li>
  <li><strong>n!:</strong> The factorial of n, which is the product of all positive integers up to n.</li>
</ul>
<p><strong>Example:</strong> Suppose you have 5 books and want to arrange 3 of them on a shelf. The number of possible arrangements (permutations) is calculated as 5P3 = 5! / (5-3)! = 5 × 4 × 3 = 60.</p>

<h3>2. Combinations</h3>
<p>Combinations refer to the selection of objects without considering the order. The concept of combinations is used when the order of the objects does not matter. The number of combinations of 'n' objects taken 'r' at a time is calculated using the formula:</p>
<p><strong>Formula:</strong> nCr = n! / [r!(n-r)!]</p>
<p><strong>Where:</strong></p>
<ul>
  <li><strong>n:</strong> The total number of objects.</li>
  <li><strong>r:</strong> The number of objects chosen.</li>
  <li><strong>n!:</strong> The factorial of n, which is the product of all positive integers up to n.</li>
  <li><strong>r!:</strong> The factorial of r, which is the product of all positive integers up to r.</li>
</ul>
<p><strong>Example:</strong> Suppose you have 5 fruits and want to select 3 of them for a fruit salad. The number of possible selections (combinations) is calculated as 5C3 = 5! / [3!(5-3)!] = 10.</p>

<h3>3. Fundamental Principle of Counting</h3>
<p>The fundamental principle of counting is a key concept that underlies permutations and combinations. It provides a systematic approach to counting the number of possible outcomes in various scenarios:</p>
<ul>
  <li><strong>Multiplication Principle:</strong> If one event can occur in 'm' ways and a second event can occur independently of the first in 'n' ways, then the total number of ways both events can occur is m × n.</li>
  <li><strong>Addition Principle:</strong> If one event can occur in 'm' ways and another mutually exclusive event can occur in 'n' ways, then the total number of ways either event can occur is m + n.</li>
</ul>
<p><strong>Example:</strong> If you have 4 shirts and 3 pants, the total number of possible outfits you can create is 4 × 3 = 12.</p>

<h2>Applications of Permutations and Combinations</h2>
<p>Permutations and combinations have numerous applications in various fields, from mathematics to real-world scenarios. Below are some examples:</p>

<h3>4. Creating Passwords</h3>
<p>Permutations are often used to calculate the number of possible passwords that can be created using a set of characters. For instance, if you have 5 different characters and need to create a 3-character password, the number of possible permutations is 5P3 = 60. This is because the order in which the characters are arranged matters.</p>

<h3>5. Lottery and Games</h3>
<p>Combinations are commonly used in lottery systems, where the order of the selected numbers does not matter. For example, if a lottery requires you to select 6 numbers out of 49, the number of possible combinations is 49C6, which is a large number, indicating the low probability of winning.</p>

<h3>6. Organizing Events</h3>
<p>When planning events, permutations can be used to determine the possible arrangements of seating guests, while combinations can be used to decide the groups or teams without considering the order. For example, if you need to arrange 4 speakers in a sequence, you can calculate the number of possible arrangements using permutations.</p>

<h3>7. Probability Calculations</h3>
<p>Permutations and combinations are integral to probability theory, where they help calculate the likelihood of various outcomes. For instance, the probability of drawing a specific hand in a card game can be calculated using combinations, as the order of the cards in the hand does not matter.</p>

<h2>Advanced Concepts in Permutations and Combinations</h2>
<p>Beyond the basic formulas, there are advanced concepts and variations of permutations and combinations that are useful in more complex scenarios:</p>

<h3>8. Circular Permutations</h3>
<p>Circular permutations deal with arrangements of objects in a circle, where the position is relative, and rotations of the arrangement are considered equivalent. The number of circular permutations of 'n' objects is given by (n-1)!, since one object is fixed, and the remaining (n-1) objects can be arranged linearly.</p>
<p><strong>Example:</strong> If 5 people are to be seated around a circular table, the number of possible arrangements is (5-1)! = 4! = 24.</p>

<h3>9. Repeated Permutations</h3>
<p>In some cases, objects may be repeated in the permutation. The number of permutations of 'n' objects, where there are repeats of identical objects, is given by n! / (p1! × p2! × ... × pk!), where p1, p2, ..., pk are the frequencies of the repeated objects.</p>
<p><strong>Example:</strong> The number of distinct permutations of the word "BALLOON" (where 'L' and 'O' are repeated) is calculated as 7! / (2! × 2!) = 1260.</p>

<h3>10. Combinations with Restrictions</h3>
<p>Combinations can also be used with restrictions, such as excluding certain objects or ensuring that certain objects are always included. For instance, if you need to form a committee of 4 people from a group of 10, but one person must always be included, the number of possible combinations is calculated by first including that person and then choosing the remaining 3 from the other 9, which gives 9C3.</p>

<h2>Example Problems</h2>
<p>Let's explore some example problems to better understand how permutations and combinations are applied:</p>

<h3>11. Example Problem: Arranging Books on a Shelf</h3>
<p><strong>Problem:</strong> You have 6 different books and want to arrange 4 of them on a shelf. How many different arrangements are possible?</p>
<p><strong>Solution:</strong></p>
<ul>
  <li>Total number of books (n) = 6</li>
  <li>Number of books to arrange (r) = 4</li>
  <li>Number of permutations = 6P4 = 6! / (6-4)! = 360</li>
</ul>
<p>Therefore, there are 360 possible arrangements of 4 books out of 6.</p>


    `,
    formulae: [
      {
        id: 1,
        toCalculate: "Permutation Formula",
        formuales: "nPr = (n!) / (n-r)!",
      },
      {
        id: 2,
        toCalculate: "Combination Formula",
        formuales: "nCr = nC(n-r) = n! / {r!(n-r)!}",
      },
      {
        id: 3,
        toCalculate: "Relation between Permutation and Combination",
        formuales: "nPr = nCr * r!",
      },
      {
        id: 4,
        toCalculate: "Permutation with Repetition Allowed",
        formuales: "nPr = n^r",
      },
      {
        id: 5,
        toCalculate: "Combination with Repetition Allowed",
        formuales: "nCr = (n+r-1)! / {r!(n-r)!}",
      },
      {
        id: 6,
        toCalculate: "Number of Permutations of n Distinct Things",
        formuales: "nPn = n!",
      },
      {
        id: 7,
        toCalculate: "Number of Circular Permutations",
        formuales: "(n-1)!",
      },
      {
        id: 8,
        toCalculate: "Circular Permutations (Clockwise and Anticlockwise)",
        formuales: "(n-1)!/2",
      },
      {
        id: 9,
        toCalculate: "Selection of One or More Objects from n Distinct Objects",
        formuales: "nC1 + nC2 + ... + nCn = (2^n) - 1",
      },
      {
        id: 10,
        toCalculate: "Selection from Multiple Alike Objects",
        formuales: "(S1 + 1)(S2 + 1)...(Sn + 1) - 1",
      },
      {
        id: 11,
        toCalculate: "Total Number of Handshakes",
        formuales: "nC2",
      },
      {
        id: 12,
        toCalculate: "Number of Triangles in a Polygon",
        formuales: "nC3",
      },
      {
        id: 13,
        toCalculate: "Number of Quadrilaterals in a Polygon",
        formuales: "nC4",
      },
      {
        id: 14,
        toCalculate: "Triangles with Collinear Points",
        formuales: "nC3 - mC3",
      },
      {
        id: 15,
        toCalculate: "Triangles with No Collinear Points",
        formuales: "nC3",
      },
      {
        id: 16,
        toCalculate: "Straight Lines with Collinear Points",
        formuales: "nC2 - mC2 + 1",
      },
      {
        id: 17,
        toCalculate: "Straight Lines with No Collinear Points",
        formuales: "nC2",
      },
      {
        id: 18,
        toCalculate: "Number of Rectangles",
        formuales: "mC2 * nC2",
      },
      {
        id: 19,
        toCalculate: "Number of Diagonals in a Polygon",
        formuales: "n(n-3)/2",
      },
    ],
    practiceQuestions: [
      {
        id: 1,
        template:
          "In how many different ways can {{n}} different objects be arranged?",
        limits: {
          n: [3, 4, 5, 6, 7],
        },
        correctAnswerFormula: "factorial(n)",
        optionsFormula: [
          "factorial(n)",
          "factorial(n) + 1",
          "factorial(n) - 1",
          "factorial(n) + 2",
        ],
        explanationTemplate:
          "The number of ways to arrange {{n}} different objects is given by n! (n factorial).<br><br> {{n}}! = {{final_answer}}.<br><br> Therefore, the number of different ways to arrange the objects is {{final_answer}}.",
      },
      {
        id: 2,
        template:
          "How many ways can {{r}} objects be selected from {{n}} different objects?",
        limits: {
          n: [5, 6, 7, 8, 9],
          r: [2, 3, 4, 5, 6],
        },
        correctAnswerFormula:
          "factorial(n) / (factorial(r) * factorial(n - r))",
        optionsFormula: [
          "factorial(n) / (factorial(r) * factorial(n - r))",
          "factorial(n) / (factorial(r) * factorial(n - r)) + 1",
          "factorial(n) / (factorial(r) * factorial(n - r)) - 1",
          "factorial(n) / (factorial(r + 1) * factorial(n - r))",
        ],
        explanationTemplate:
          "The number of ways to select {{r}} objects from {{n}} different objects is given by the combination formula:<br><br> nCr = n! / (r! * (n-r)!)<br><br> Substituting the given values, we get:<br> {{n}}C{{r}} = {{final_answer}}.<br><br> Therefore, the number of ways to select {{r}} objects is {{final_answer}}.",
      },
      {
        id: 3,
        template:
          "In how many ways can the letters of the word '{{word}}' be arranged?",
        limits: {
          word: ["APPLE", "BANANA", "CHERRY", "MANGO", "PEACH"],
        },
        correctAnswerFormula:
          "factorial(word.length) / (factorial(repeated_char_count))",
        optionsFormula: [
          "factorial(word.length) / (factorial(repeated_char_count))",
          "factorial(word.length) / (factorial(repeated_char_count)) + 1",
          "factorial(word.length) / (factorial(repeated_char_count)) - 1",
          "factorial(word.length) / factorial(repeated_char_count + 1)",
        ],
        explanationTemplate:
          "The number of ways to arrange the letters of the word '{{word}}' is given by the formula:<br><br> n! / (k1! * k2! * ... * kr!)<br><br> where n is the total number of letters and k1, k2, ... are the factorials of the counts of each repeated letter.<br><br> Substituting the given values, we get:<br> Number of arrangements = {{final_answer}}.<br><br> Therefore, the number of ways to arrange the letters of '{{word}}' is {{final_answer}}.",
      },
    ],
  },
  probability: {
    description:
      "Probability is a branch of mathematics that deals with the likelihood or chance of different outcomes occurring. It is used in a wide range of real-life scenarios, from predicting weather patterns to assessing medical risks and making informed decisions in uncertain situations...",
    realLife: [
      {
        id: 1,
        title: "Medical Decision-Making",
        content:
          "Patients often want to know the probability of success before undergoing a surgical procedure. The likelihood of success, expressed as a probability, helps patients make informed decisions about their healthcare.",
      },
      {
        id: 2,
        title: "Weather Forecasting",
        content:
          "When planning outdoor activities, people often consider the probability of rainfall. Meteorologists use historical weather data and trends to estimate the likelihood of rain, though the prediction is never certain, only probable.",
      },
      {
        id: 3,
        title: "Rolling a Dice",
        content:
          "When rolling a six-sided dice, there is a 50% probability of getting an even number (2, 4, or 6) since half of the outcomes are even.",
      },
    ],
    concepts: `
    <h1>Understanding the Concepts of Probability</h1>
    <p>Probability is the branch of mathematics that deals with the likelihood of events occurring. It provides a quantitative measure of uncertainty, predicting the chances of different outcomes in various scenarios. Whether it's predicting the weather, making investment decisions, or playing games of chance, probability is an essential tool in our daily lives and various fields like statistics, finance, science, and engineering.</p>
    
    <h2>Key Concepts in Probability</h2>
    <p>To fully grasp the concept of probability, it's crucial to understand its basic principles, scales, and applications. Probability is calculated by comparing the number of favorable outcomes to the total number of possible outcomes, and it can be represented in various forms such as fractions, decimals, or percentages.</p>
    
    <h3>1. Understanding Probability</h3>
    <p>Probability quantifies how likely an event is to happen. It is calculated by dividing the number of favorable outcomes by the total number of possible outcomes. The formula for probability is:</p>
    <p><strong>Formula:</strong> P(E) = Number of Favorable Outcomes / Total Number of Possible Outcomes</p>
    <p><strong>Example:</strong> Consider a simple scenario of flipping a fair coin. There are two possible outcomes: heads (H) or tails (T). The probability of getting heads is calculated as:</p>
    <ul>
      <li><strong>Total Number of Outcomes:</strong> 2 (H, T)</li>
      <li><strong>Number of Favorable Outcomes for Heads:</strong> 1 (H)</li>
      <li><strong>Probability of Getting Heads (P(H)):</strong> 1/2 = 0.5 = 50%</li>
    </ul>
    <p>Thus, the probability of getting heads when flipping a coin is 0.5, indicating an equal likelihood of either outcome.</p>
    
    <h3>2. Probability Scale</h3>
    <p>Probabilities are expressed on a scale from 0 to 1, where 0 indicates impossibility and 1 indicates certainty. This scale helps in understanding the likelihood of different events occurring. The closer the probability is to 1, the more likely the event is to occur, and the closer it is to 0, the less likely the event is to occur.</p>
    <ul>
      <li><strong>Probability of 0:</strong> Indicates that the event is impossible (e.g., rolling a 7 on a standard 6-sided die).</li>
      <li><strong>Probability of 0.5:</strong> Indicates that the event is equally likely to occur or not occur (e.g., flipping a fair coin).</li>
      <li><strong>Probability of 1:</strong> Indicates that the event is certain (e.g., the sun rising in the east).</li>
    </ul>
    <p><strong>Example:</strong> If the probability of rain tomorrow is 0.8, it indicates a high likelihood of rain. Conversely, a probability of 0.2 would suggest that rain is unlikely.</p>
    
    <h3>3. Theoretical vs. Experimental Probability</h3>
    <p>There are two main types of probability: theoretical and experimental.</p>
    <ul>
      <li><strong>Theoretical Probability:</strong> Based on the assumption that all outcomes are equally likely. It is calculated using the formula P(E) = Number of Favorable Outcomes / Total Number of Possible Outcomes. For example, the theoretical probability of rolling a 3 on a fair 6-sided die is 1/6.</li>
      <li><strong>Experimental Probability:</strong> Based on actual experiments or observations. It is calculated by dividing the number of times an event occurs by the total number of trials. For example, if you roll a die 60 times and get a 3 ten times, the experimental probability of rolling a 3 is 10/60 = 1/6.</li>
    </ul>
    
    <h3>4. Independent and Dependent Events</h3>
    <p>Understanding the difference between independent and dependent events is crucial in probability:</p>
    <ul>
      <li><strong>Independent Events:</strong> Events where the outcome of one event does not affect the outcome of another. For example, flipping a coin and rolling a die are independent events because the result of one does not influence the result of the other.</li>
      <li><strong>Dependent Events:</strong> Events where the outcome of one event affects the outcome of another. For example, drawing two cards from a deck without replacement is a dependent event because the first draw affects the probability of the second draw.</li>
    </ul>
    <p><strong>Example:</strong> If you roll a die and flip a coin, the probability of getting a 4 on the die and heads on the coin is calculated by multiplying the individual probabilities: P(4 and H) = P(4) × P(H) = 1/6 × 1/2 = 1/12.</p>
    
    <h3>5. Complementary Events</h3>
    <p>Complementary events are pairs of events where one event's occurrence means the other cannot occur, and their probabilities sum to 1. The complement of an event A is denoted as A', and it includes all outcomes not in A. The probability of A' is given by:</p>
    <p><strong>Formula:</strong> P(A') = 1 - P(A)</p>
    <p><strong>Example:</strong> If the probability of raining tomorrow is 0.3, the probability of it not raining (the complement) is P(Not Rain) = 1 - 0.3 = 0.7.</p>
    
    <h3>6. Conditional Probability</h3>
    <p>Conditional probability deals with the probability of an event occurring given that another event has already occurred. The formula for conditional probability is:</p>
    <p><strong>Formula:</strong> P(A | B) = P(A ∩ B) / P(B), provided P(B) ≠ 0</p>
    <p><strong>Where:</strong></p>
    <ul>
      <li>P(A | B): The probability of event A occurring given that B has occurred.</li>
      <li>P(A ∩ B): The probability that both A and B occur.</li>
      <li>P(B): The probability of event B occurring.</li>
    </ul>
    <p><strong>Example:</strong> Consider drawing two cards from a deck without replacement. The probability that the second card is an ace, given that the first card was an ace, is calculated using conditional probability. Since one ace has already been removed, the probability changes from 4/52 to 3/51.</p>
    
    <h3>7. Example of Probability in Birth Outcomes</h3>
    <p>Consider the example of predicting the gender of a newborn. When a baby is born, there are two possible outcomes: boy (B) or girl (G). Assuming each outcome is equally likely, the probabilities are:</p>
    <ul>
      <li>P(B) = 1/2 = 0.5 = 50%</li>
      <li>P(G) = 1/2 = 0.5 = 50%</li>
    </ul>
    <p>For twins, the possible outcomes increase to four: (B, B), (B, G), (G, B), and (G, G), each with a probability of 1/4 or 25%.</p>
    
    <h3>8. Mutually Exclusive and Non-Mutually Exclusive Events</h3>
    <p>Events are considered mutually exclusive if they cannot occur simultaneously. Non-mutually exclusive events can occur at the same time. The probability formulas for these events are:</p>
    <ul>
      <li><strong>Mutually Exclusive Events:</strong> P(A or B) = P(A) + P(B) - P(A ∩ B), where P(A ∩ B) = 0</li>
      <li><strong>Non-Mutually Exclusive Events:</strong> P(A or B) = P(A) + P(B) - P(A ∩ B)</li>
    </ul>
    <p><strong>Example:</strong> Consider rolling a die. The events "rolling an even number" and "rolling an odd number" are mutually exclusive because they cannot happen at the same time. The probability of rolling an even or odd number is 1/2 + 1/2 = 1. On the other hand, the events "rolling a number greater than 2" and "rolling an even number" are non-mutually exclusive because they can overlap (e.g., rolling a 4).</p>
    
    <h3>9. Bayes' Theorem</h3>
    <p>Bayes' Theorem is a powerful tool in probability that allows for updating the probability of a hypothesis based on new evidence. The formula is:</p>
    <p><strong>Formula:</strong> P(A | B) = [P(B | A) × P(A)] / P(B)</p>
    <p><strong>Where:</strong></p>
    <ul>
      <li>P(A | B): The probability of event A given that B has occurred.</li>
      <li>P(B | A): The probability of event B given that A has occurred.</li>
      <li>P(A): The prior probability of event A.</li>
      <li>P(B): The total probability of event B.</li>
    </ul>
    <p><strong>Example:</strong> Suppose a factory has two machines, A and B. Machine A produces 60% of the items, and 90% of those items are of high quality. Machine B produces 40% of the items, and 80% of those items are of high quality. If a randomly selected item is of high quality, we want to determine the probability that it was produced by Machine A.</p>
    <p>Let's use Bayes' Theorem to find this probability:</p>
    <ul>
      <li>P(A) = 0.6 (probability that an item is produced by Machine A)</li>
      <li>P(B) = 0.4 (probability that an item is produced by Machine B)</li>
      <li>P(Quality | A) = 0.9 (probability that an item is of high quality given it was produced by Machine A)</li>
      <li>P(Quality | B) = 0.8 (probability that an item is of high quality given it was produced by Machine B)</li>
    </ul>
    <p>We first calculate the total probability of high quality items:</p>
    <p><strong>Formula:</strong> P(Quality) = P(Quality | A) * P(A) + P(Quality | B) * P(B)</p>
    <p>P(Quality) = (0.9 * 0.6) + (0.8 * 0.4) = 0.54 + 0.32 = 0.86</p>
    <p>Now we apply Bayes' Theorem:</p>
    <p><strong>Formula:</strong> P(A | Quality) = [P(Quality | A) * P(A)] / P(Quality)</p>
    <p>P(A | Quality) = (0.9 * 0.6) / 0.86 ≈ 0.627</p>
    <p>Thus, the probability that a high-quality item was produced by Machine A is approximately 0.627, or 62.7%.</p>

    `,
    formulae: [
      {
        id: 1,
        toCalculate: "Probability Formula",
        formuales: "P(A) = n(E) / n(S)",
      },
      {
        id: 2,
        toCalculate: "Probability of an Event Not Happening",
        formuales: "P(Not A) = 1 - P(A)",
      },
    ],
    practiceQuestions: [
      {
        id: 1,
        template:
          "What is the probability of getting a {{face}} when a fair die is rolled?",
        limits: {
          face: [1, 2, 3, 4, 5, 6],
        },
        correctAnswerFormula: "1 / 6",
        optionsFormula: ["1 / 6", "1 / 5", "1 / 4", "1 / 7"],
        explanationTemplate: `
          The probability of getting a {{face}} when a fair die is rolled is calculated as:<br><br>
          P(Event) = Number of favorable outcomes / Total number of outcomes.<br><br>
          Since there is only 1 favorable outcome and 6 possible outcomes, the probability is 1/6.<br><br>
          Therefore, the probability is {{final_answer}}.
        `,
      },
      {
        id: 2,
        template:
          "A box contains {{total_balls}} balls, out of which {{red_balls}} are red. If one ball is drawn at random, what is the probability that it is red?",
        limits: {
          total_balls: [10, 12, 15, 18, 20],
          red_balls: [3, 4, 5, 6, 7],
        },
        correctAnswerFormula: "red_balls / total_balls",
        optionsFormula: [
          "red_balls / total_balls",
          "(red_balls + 1) / total_balls",
          "red_balls / (total_balls + 1)",
          "(red_balls - 1) / total_balls",
        ],
        explanationTemplate: `
          The probability of drawing a red ball is given by the formula:<br><br>
          P(Red) = Number of red balls / Total number of balls.<br><br>
          Substituting the given values, we get:<br>
          P(Red) = {{red_balls}} / {{total_balls}} = {{final_answer}}.<br><br>
          Therefore, the probability that the ball drawn is red is {{final_answer}}.
        `,
      },
      {
        id: 3,
        template:
          "Two cards are drawn at random from a pack of 52 cards. What is the probability that both cards are aces?",
        limits: {},
        correctAnswerFormula: "(4 / 52) * (3 / 51)",
        optionsFormula: [
          "(4 / 52) * (3 / 51)",
          "(4 / 52) * (3 / 50)",
          "(3 / 52) * (2 / 51)",
          "(4 / 51) * (3 / 52)",
        ],
        explanationTemplate: `
          The probability of drawing the first ace is 4/52. After one ace is drawn, there are 3 aces left out of 51 remaining cards, so the probability of drawing the second ace is 3/51.<br><br>
          The combined probability is:<br>
          P(Two Aces) = (4 / 52) * (3 / 51) = {{final_answer}}.<br><br>
          Therefore, the probability that both cards are aces is {{final_answer}}.
        `,
      },
    ],
  },

  "geometric-progression": {
    description:
      "Geometric Progression (GP) is a sequence in which each term after the first is obtained by multiplying the previous term by a fixed, non-zero number called the common ratio. It is a crucial concept in mathematics and is widely used in various fields, including finance, physics, and computer science...",
    realLife: [
      {
        id: 1,
        title: "Compound Interest Calculation",
        content:
          "Geometric Progression is used in calculating compound interest, where the amount grows exponentially over time. This helps in understanding the growth of investments and savings in financial planning.",
      },
      {
        id: 2,
        title: "Sum of Infinite Series",
        content:
          "GP is also applied in calculating the sum of infinite divergent series. This is essential in solving paradoxes like Zeno's conundrum, where the sum of an infinite series leads to finite results.",
      },
    ],
    concepts: `
  <h1>Understanding the Concepts of Geometric Progression (GP)</h1>
  <p>Geometric Progression (GP) is a type of sequence where each term after the first is found by multiplying the previous term by a constant factor known as the common ratio. This sequence is prevalent in various fields, including finance, biology, physics, and more, where exponential growth or decay is observed. Understanding GP is crucial for analyzing patterns, predicting future behavior, and solving problems involving exponential change.</p>
  
  <h2>Key Concepts in Geometric Progression</h2>
  <p>To fully understand Geometric Progression, it's important to grasp the concepts of its general form, the common ratio, and the sum of terms. GP can also be classified into finite and infinite sequences, each with its own unique properties and applications.</p>
  
  <h3>1. General Form of Geometric Progression (GP)</h3>
  <p>The general form of a Geometric Progression is a sequence in which each term is obtained by multiplying the previous term by a constant ratio. The sequence can be represented as:</p>
  <ul>
    <li><strong>General Sequence:</strong> a, ar, ar^2, ar^3, ...</li>
  </ul>
  <p><strong>Where:</strong></p>
  <ul>
    <li><strong>a:</strong> The first term of the sequence.</li>
    <li><strong>r:</strong> The common ratio.</li>
    <li><strong>ar^(n-1):</strong> The nth term of the sequence.</li>
  </ul>
  <p>The nth term of a GP can be calculated using the formula:</p>
  <p><strong>Formula:</strong> an = a * r^(n-1)</p>
  <p><strong>Example:</strong> Consider the GP 3, 6, 12, 24, ... Here, the first term a = 3 and the common ratio r = 2. The nth term (an) for this GP can be found as:</p>
  <ul>
    <li>For n = 1: a1 = 3 * 2^(1-1) = 3</li>
    <li>For n = 2: a2 = 3 * 2^(2-1) = 6</li>
    <li>For n = 3: a3 = 3 * 2^(3-1) = 12</li>
  </ul>
  <p>This formula is essential for identifying specific terms in the sequence and understanding the progression's behavior over time.</p>
  
  <h3>2. Common Ratio</h3>
  <p>The common ratio (r) is the factor by which each term in the sequence is multiplied to obtain the next term. It is a key characteristic of GP and determines the sequence's growth or decay rate. The common ratio can be calculated by dividing any term by its preceding term:</p>
  <p><strong>Formula:</strong> r = an/an-1</p>
  <p><strong>Example:</strong> Consider the GP 5, 10, 20, 40, ... The common ratio r is calculated as:</p>
  <ul>
    <li>r = 10/5 = 2</li>
    <li>r = 20/10 = 2</li>
    <li>r = 40/20 = 2</li>
  </ul>
  <p>This indicates that each term is twice the preceding term, resulting in an exponential growth pattern.</p>
  <p>The common ratio can be positive, negative, or even fractional, depending on the sequence. If the common ratio is greater than 1, the sequence exhibits exponential growth. If the common ratio is between 0 and 1, the sequence shows exponential decay. A negative common ratio causes the terms to alternate in sign.</p>
  
  <h3>3. Sum of n Terms of a Geometric Progression</h3>
  <p>The sum of the first 'n' terms of a Geometric Progression can be calculated using a specific formula, which varies depending on the value of the common ratio. This sum is crucial for determining the total value of the sequence over a specific number of terms:</p>
  <p><strong>Formula:</strong> Sn = a[(r^n – 1)/(r – 1)], where r ≠ 1</p>
  <p><strong>Where:</strong></p>
  <ul>
    <li><strong>Sn:</strong> The sum of the first 'n' terms.</li>
    <li><strong>a:</strong> The first term of the sequence.</li>
    <li><strong>r:</strong> The common ratio.</li>
    <li><strong>n:</strong> The number of terms.</li>
  </ul>
  <p><strong>Example:</strong> Consider the GP 2, 4, 8, 16, ... with a = 2 and r = 2. The sum of the first 4 terms (S4) is calculated as:</p>
  <ul>
    <li>S4 = 2[(2^4 – 1)/(2 – 1)]</li>
    <li>S4 = 2[(16 – 1)/1] = 2 * 15 = 30</li>
  </ul>
  <p>The sum of the first 4 terms of this GP is 30.</p>
  <p>If the common ratio r is equal to 1, the sequence becomes a constant sequence, and the sum of the first 'n' terms is simply n times the first term:</p>
  <p><strong>Formula:</strong> Sn = n * a, where r = 1</p>
  
  <h3>4. Finite and Infinite Geometric Progression</h3>
  <p>Geometric Progressions can be classified into two types: finite and infinite. Understanding the difference between these two types is crucial for applying GP to real-world problems.</p>
  
  <h4>Finite Geometric Progression</h4>
  <p>A finite GP has a fixed number of terms, and the sum of these terms can be calculated using the formula provided above. Finite GPs are commonly encountered in situations where there is a specific start and end point, such as the total payments made over a fixed period of time in an investment plan.</p>
  <p><strong>Example:</strong> Consider the GP 3, 9, 27, 81. The sum of these 4 terms is finite and can be calculated as:</p>
  <p><strong>Formula:</strong> S4 = 3[(3^4 – 1)/(3 – 1)] = 3[80/2] = 3 * 40 = 120</p>
  
  <h4>Infinite Geometric Progression</h4>
  <p>An infinite GP continues indefinitely, and its sum can only be calculated if the common ratio is between -1 and 1. The sum of an infinite GP is given by a simple formula:</p>
  <p><strong>Formula:</strong> S∞ = a/(1 – r), where |r| &lt; 1</p>
  <p><strong>Where:</strong></p>
  <ul>
    <li><strong>S∞:</strong> The sum of the infinite series.</li>
    <li><strong>a:</strong> The first term of the sequence.</li>
    <li><strong>r:</strong> The common ratio.</li>
  </ul>
  <p><strong>Example:</strong> Consider the infinite GP 1, 1/2, 1/4, 1/8, ... with a = 1 and r = 1/2. The sum of this infinite GP is calculated as:</p>
  <ul>
    <li>S∞ = 1/(1 – 1/2) = 1/(1/2) = 2</li>
  </ul>
  <p>This sum of 2 represents the total value of the infinite series.</p>
  
  <h3>5. Applications of Geometric Progression</h3>
  <p>Geometric Progressions have numerous applications in various fields. Some of the common applications include:</p>
  <ul>
    <li><strong>Financial Modeling:</strong> GP is used in calculating compound interest, annuities, and other financial products where exponential growth is observed.</li>
    <li><strong>Population Growth:</strong> In biology, GP models are used to predict the growth of populations under ideal conditions, where resources are unlimited.</li>
    <li><strong>Physics:</strong> GP is used to model radioactive decay, where the amount of a substance decreases exponentially over time.</li>
    <li><strong>Computer Science:</strong> GP is used in algorithms and data structures, such as binary search and hashing techniques, where exponential growth or reduction is involved.</li>
  </ul>
  
  <h3>6. Example of Geometric Progression in Real Life</h3>
  <p>Consider an example where you invest $1000 in a bank account that offers an annual interest rate of 5%, compounded annually. The amount of money in the account after each year forms a GP with the first term a = 1000 and the common ratio r = 1.05:</p>
  <ul>
    <li><strong>After 1 year:</strong> a1 = 1000 * 1.05 = $1050</li>
    <li><strong>After 2 years:</strong> a2 = 1000 * (1.05)^2 = $1102.50</li>
    <li><strong>After 3 years:</strong> a3 = 1000 * (1.05)^3 = $1157.63</li>
  </ul>
  <p>The sequence continues to grow exponentially, demonstrating the power of compound interest, which is a direct application of geometric progression.</p>
  
  `,
    formulae: [
      {
        id: 1,
        toCalculate: "General Form of GP Terms",
        formuales: "a, ar, ar^2, ar^3,..., ar^(n-1)",
      },
      {
        id: 2,
        toCalculate: "Common Ratio",
        formuales: "r = (Any term) / (Preceding term)",
      },
      {
        id: 3,
        toCalculate: "nth Term of a GP",
        formuales: "an = a * r^(n-1)",
      },
      {
        id: 4,
        toCalculate: "Sum of the First n Terms of a GP",
        formuales: "Sn = a[(r^n – 1)/(r – 1)] if r ≠ 1 and r > 1",
      },
      {
        id: 5,
        toCalculate: "Sum of an Infinite GP",
        formuales: "S∞ = a / (1 - r) if |r| < 1",
      },
    ],
    practiceQuestions: [],
  },
};

export default quantitativeTopic;
