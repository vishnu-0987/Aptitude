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
        template:
          "A can complete a piece of work in {{A_days}} days, while B can complete the same work in {{B_days}} days. How long will it take for both A and B to complete the work together?",
        variables: {
          A_days: [8, 10, 12, 15, 20],
          B_days: [10, 12, 15, 18, 25],
        },
        correctAnswerFormula: "(A_days * B_days) / (A_days + B_days)",
        optionsFormula: [
          "(A_days * B_days) / (A_days + B_days) +1",
          "(A_days * B_days) / (A_days + B_days)",
          "(A_days * B_days) / (A_days + B_days) +3",
          "(A_days * B_days) / (A_days + B_days) +4",
        ],
        explanationTemplate: `To find out how long it will take for A and B to complete the work together, we use the formula for combined work: <br><br>
  1/(1/{{A_days}} + 1/{{B_days}}). Substituting the given values, we get: <br>
  1/(1/{{A_days}} + 1/{{B_days}}) = ({{A_days}} * {{B_days}}) / ({{A_days}} + {{B_days}}) = {{final_answer}} days.<br><br>
  Therefore, it will take {{final_answer}} days for A and B to complete the work together.<br><br>
`,
      },
      {
        id: 2,
        template:
          "A can complete a piece of work in {{A_days}} days, and B can complete the same work in {{B_days}} days. If they work together for {{work_days}} days, what fraction of the work is left?",
        variables: {
          A_days: [10, 12, 14, 16, 18],
          B_days: [14, 16, 18, 20, 24],
          work_days: [3, 4, 5, 6, 7],
        },
        correctAnswerFormula: "1 - (work_days / A_days + work_days / B_days)",
        optionsFormula: [
          "1 - (work_days / A_days + work_days / B_days) +1",
          "1 - (work_days / A_days + work_days / B_days)",
          "1 - (work_days / A_days + work_days / B_days) +3",
          "1 - (work_days / A_days + work_days / B_days) +4",
        ],
        explanationTemplate: `
To determine the fraction of work left after A and B work together for {{work_days}} days, we first find their combined work rate. A's work rate is 1/{{A_days}} of the work per day, and B's work rate is 1/{{B_days}} of the work per day.<br><br>

Combined, A and B can complete (1/{{A_days}} + 1/{{B_days}}) of the work per day.<br><br>

In {{work_days}} days, they can complete {{work_days}} * (1/{{A_days}} + 1/{{B_days}}) of the work.<br><br>

The fraction of the work left is therefore: 1 - ({{work_days}} * (1/{{A_days}} + 1/{{B_days}})) = {{final_answer}}.<br><br>

Therefore, the fraction of work left is {{final_answer}}.<br><br>
`,
      },
      {
        id: 3,
        template:
          "A and B can do a piece of work in {{AB_days}} days, B and C can do the same work in {{BC_days}} days, and A and C can do it in {{AC_days}} days. How long will it take for A, B, and C to complete the work together?",
        variables: {
          AB_days: [6, 8, 10, 12, 14],
          BC_days: [8, 10, 12, 14, 16],
          AC_days: [10, 12, 14, 16, 18],
        },
        correctAnswerFormula: "1 / (1 / AB_days + 1 / BC_days + 1 / AC_days)",
        optionsFormula: [
          "1 / (1 / AB_days + 1 / BC_days + 1 / AC_days) +1",
          "1 / (1 / AB_days + 1 / BC_days + 1 / AC_days)",
          "1 / (1 / AB_days + 1 / BC_days + 1 / AC_days) +3",
          "1 / (1 / AB_days + 1 / BC_days + 1 / AC_days) +4",
        ],
        explanationTemplate: `
To determine how long it will take for A, B, and C to complete the work together, we need to find their combined work rate.<br><br>

The work rate for A and B together is 1/{{AB_days}} of the work per day.<br>
The work rate for B and C together is 1/{{BC_days}} of the work per day.<br>
The work rate for A and C together is 1/{{AC_days}} of the work per day.<br><br>
Using the principle of inclusion-exclusion, the combined work rate of A, B, and C is given by:<br>

1/(1/{{AB_days}} + 1/{{BC_days}} + 1/{{AC_days}}).<br><br>

So, A, B, and C together can complete the work in 1 / (1/{{AB_days}} + 1/{{BC_days}} + 1/{{AC_days}}) = {{final_answer}} days.<br><br>

Therefore, A, B, and C together can complete the work in {{final_answer}} days.<br><br>
`,
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
    concepts: {
      des: "Understanding time and distance problems requires knowledge of the basic formula: Distance = Speed × Time.",
      subConcepts: [
        {
          id: 1,
          title: "Speed Calculation",
          content: "Speed is calculated as Distance divided by Time.",
        },
        {
          id: 2,
          title: "Time Calculation",
          content: "Time is calculated as Distance divided by Speed.",
        },
        {
          id: 3,
          title: "Distance Calculation",
          content: "Distance is calculated as Speed multiplied by Time.",
        },
      ],
    },
    formulae: "Distance = Speed × Time",
    practiceQuestions: [
      {
        id: 1,
        template:
          "A person travels from {{start}} to {{destination}} at a speed of {{speed}} km/h and returns at a speed of {{returnSpeed}} km/h. If the total time taken for the journey is {{totalTime}} hours, find the distance between {{start}} and {{destination}}.",
        variables: {
          start: ["City A", "Town B", "Village C", "City D", "Town E"],
          destination: ["City B", "Town C", "Village D", "City E", "Town F"],
          speed: [40, 50, 60, 70, 80],
          returnSpeed: [30, 40, 50, 60, 70],
          totalTime: [5, 6, 7, 8, 9],
        },
        correctAnswerFormula:
          "(totalTime * speed * returnSpeed) / (speed + returnSpeed)",
        optionsFormula: [
          "(totalTime * speed * returnSpeed) / (speed + returnSpeed)",
          "(totalTime * speed * returnSpeed) / (speed - returnSpeed)",
          "(totalTime * speed + returnSpeed) / (speed + returnSpeed)",
          "(totalTime * speed + returnSpeed) / (speed - returnSpeed)",
        ],
        explanationTemplate: `To find the distance between {{start}} and {{destination}}, we use the formula for time, speed, and distance:<br><br>
        
        - Let the distance be D km.<br><br>
        
        1. Time taken to travel from {{start}} to {{destination}} at a speed of {{speed}} km/h is D/{{speed}} hours.<br>
        2. Time taken to return from {{destination}} to {{start}} at a speed of {{returnSpeed}} km/h is D/{{returnSpeed}} hours.<br><br>
        
        The total time for the journey is the sum of these two times:<br><br>
        
        (D / {{speed}}) + (D / {{returnSpeed}}) = {{totalTime}}<br><br>
        
        Simplifying, we get:<br><br>
        
        D (1/{{speed}} + 1/{{returnSpeed}}) = {{totalTime}}<br><br>
        
        Therefore, D = ({{totalTime}} * {{speed}} * {{returnSpeed}}) / ({{speed}} + {{returnSpeed}})<br><br>
        
        Using the given values, we get:<br><br>
        
        D = ({{totalTime}} * {{speed}} * {{returnSpeed}}) / ({{speed}} + {{returnSpeed}}) = {{final_answer}} km.<br><br>`,
      },
      {
        id: 2,
        template:
          "A man covers the first half of the journey at the speed of {{speed1}} km/h and the remaining at the speed of {{speed2}} km/h. Find his average speed.",
        variables: {
          speed1: [30, 40, 50, 60, 70],
          speed2: [50, 60, 70, 80, 90],
        },
        correctAnswerFormula: "(2 * speed1 * speed2) / (speed1 + speed2)",
        optionsFormula: [
          "(2 * speed1 * speed2) / (speed1 + speed2)",
          "(speed1 + speed2) / 2",
          "(speed1 * speed2) / (speed1 + speed2)",
          "((speed1 + speed2) * 2) / (speed1 + speed2)",
        ],
        explanationTemplate: `To find the average speed for the entire journey, we use the formula for average speed when distances are the same:<br><br>
        
        Average Speed = (2 * speed1 * speed2) / (speed1 + speed2)<br><br>
        
        Where:<br>
        - speed1 is the speed for the first half of the journey: {{speed1}} km/h<br>
        - speed2 is the speed for the second half of the journey: {{speed2}} km/h<br><br>
        
        Substituting the given values, we get:<br><br>
        
        Average Speed = (2 * {{speed1}} * {{speed2}}) / ({{speed1}} + {{speed2}}) = {{final_answer}} km/h.<br><br>
        
        Therefore, the man's average speed for the entire journey is {{final_answer}} km/h.<br><br>`,
      },
      {
        id: 3,
        template:
          "A man completes a journey in {{total_time}} hours. He travels the first half of the journey at the rate of {{speed1}} km/hr and the second half at the rate of {{speed2}} km/hr. Find the total journey in km.",
        variables: {
          total_time: [8, 10, 12, 15],
          speed1: [18, 21, 24, 27],
          speed2: [20, 24, 28, 32],
        },
        correctAnswerFormula:
          "total_time * (2 * speed1 * speed2) / (speed1 + speed2)",
        optionsFormula: [
          "total_time * (2 * speed1 * speed2) / (speed1 + speed2)",
          "(total_time * speed1 * speed2) / (speed1 + speed2)",
          "(total_time * (speed1 + speed2)) / 2",
          "(total_time * (speed1 + speed2)) / (speed1 * speed2)",
        ],
        explanationTemplate: `To find the total journey in km, we use the concept of average speed when the journey is completed in a given time:<br><br>
      
        Total Distance = Total Time × Average Speed<br><br>
      
        Where:<br>
        - Average Speed = (2 * speed1 * speed2) / (speed1 + speed2)<br>
        - speed1 is the speed for the first half of the journey: {{speed1}} km/h<br>
        - speed2 is the speed for the second half of the journey: {{speed2}} km/h<br><br>
      
        Substituting the given values, we get:<br><br>
      
        Average Speed = (2 * {{speed1}} * {{speed2}}) / ({{speed1}} + {{speed2}})<br><br>
      
        Total Distance = {{total_time}} hours × Average Speed<br><br>
      
        Therefore, the total journey in km is:<br>
      
        Total Distance = {{total_time}} × (2 * {{speed1}} * {{speed2}}) / ({{speed1}} + {{speed2}}) = {{final_answer}} km.<br><br>
      
        Hence, the total journey is {{final_answer}} km.<br><br>`,
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
    concepts: {
      des: "Understanding percentage problems requires knowledge of basic percentage calculations: Part = (Percentage × Whole) / 100.",
      subConcepts: [
        {
          id: 1,
          title: "Finding the Part",
          content: "Part is calculated as (Percentage × Whole) / 100.",
        },
        {
          id: 2,
          title: "Finding the Whole",
          content: "Whole is calculated as (Part × 100) / Percentage.",
        },
        {
          id: 3,
          title: "Finding the Percentage",
          content: "Percentage is calculated as (Part / Whole) × 100.",
        },
      ],
    },
    formulae: "Part = (Percentage × Whole) / 100",
    practiceQuestions: [
      {
        id: 1,
        template: "What is {{percentage}}% of {{whole}}?",
        variables: {
          percentage: [10, 20, 25, 50, 75],
          whole: [100, 200, 300, 400, 500],
        },
        correctAnswerFormula: "(percentage * whole) / 100",
        optionsFormula: [
          "(percentage * whole) / 100",
          "(percentage * whole) / 100 + 10",
          "(percentage * whole) / 100 - 10",
          "(percentage * whole) / 100 + 20",
        ],
        explanationTemplate: `To find {{percentage}}% of {{whole}}, we use the formula:<br><br>
        
        Part = (Percentage × Whole) / 100.<br><br>
        
        Substituting the given values, we get:<br><br>
        
        Part = ({{percentage}} × {{whole}}) / 100 = {{final_answer}}.<br><br>
        
        Therefore, {{percentage}}% of {{whole}} is {{final_answer}}.<br><br>`,
      },
      {
        id: 2,
        template: "{{part}} is what percentage of {{whole}}?",
        variables: {
          part: [10, 20, 30, 40, 50],
          whole: [100, 200, 300, 400, 500],
        },
        correctAnswerFormula: "(part / whole) * 100",
        optionsFormula: [
          "(part / whole) * 100",
          "(part / whole) * 100 + 5",
          "(part / whole) * 100 - 5",
          "(part / whole) * 100 + 10",
        ],
        explanationTemplate: `To find what percentage {{part}} is of {{whole}}, we use the formula:<br><br>
        
        Percentage = (Part / Whole) × 100.<br><br>
        
        Substituting the given values, we get:<br><br>
        
        Percentage = ({{part}} / {{whole}}) × 100 = {{final_answer}}%.<br><br>
        
        Therefore, {{part}} is {{final_answer}}% of {{whole}}.<br><br>`,
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
    concepts: {
      des: "Understanding proportion problems requires knowledge of equivalent ratios and the ability to solve for unknown values.",
      subConcepts: [
        {
          id: 1,
          title: "Cross Multiplication",
          content:
            "Cross multiplication is used to solve for unknown values in proportions.",
        },
        {
          id: 2,
          title: "Setting Up Proportions",
          content:
            "Setting up proportions involves creating two equivalent ratios.",
        },
        {
          id: 3,
          title: "Solving Proportions",
          content:
            "Solving proportions involves finding the value of the unknown variable.",
        },
      ],
    },
    formulae: "a/b = c/d",
    practiceQuestions: [
      {
        id: 1,
        template: "If {{a}}/{{b}} = {{c}}/x, what is the value of x?",
        variables: {
          a: [1, 2, 3, 4, 5],
          b: [2, 4, 6, 8, 10],
          c: [3, 6, 9, 12, 15],
        },
        correctAnswerFormula: "(c * b) / a",
        optionsFormula: [
          "(c * b) / a",
          "(a * b) / c",
          "(c * a) / b",
          "(b * c) / a + 2",
        ],
        explanationTemplate: `To find the value of x, we use the cross multiplication method:<br><br>
            
            a/b = c/x ⟹ a * x = b * c ⟹ x = (b * c) / a.<br><br>
            
            Substituting the given values, we get:<br><br>
            
            x = ({{b}} * {{c}}) / {{a}} = {{final_answer}}.<br><br>
            
            Therefore, the value of x is {{final_answer}}.<br><br>`,
      },
      {
        id: 2,
        template:
          "The ratio of {{a}} to {{b}} is the same as {{c}} to {{d}}. If {{a}} = {{givenA}} and {{b}} = {{givenB}}, what is {{d}}?",
        variables: {
          a: [1, 2, 3, 4, 5],
          b: [2, 4, 6, 8, 10],
          c: [3, 6, 9, 12, 15],
          d: [1, 2, 3, 4, 5],
          givenA: [5, 10, 15, 20, 25],
          givenB: [10, 20, 30, 40, 50],
        },
        correctAnswerFormula: "(givenA * d) / a",
        optionsFormula: [
          "(givenA * d) / a",
          "(givenB * d) / b",
          "(givenA * b) / a",
          "(givenA * c) / a",
        ],
        explanationTemplate: `To find the value of {{d}}, we use the proportion:<br><br>
            
            a/b = c/d ⟹ a * d = b * c ⟹ d = (a * d) / b.<br><br>
            
            Substituting the given values, we get:<br><br>
            
            d = ({{givenA}} * {{d}}) / {{a}} = {{final_answer}}.<br><br>
            
            Therefore, the value of {{d}} is {{final_answer}}.<br><br>`,
      },
      {
        id: 3,
        template:
          "In a mixture of {{total}} litres, the ratio of milk to water is {{initialMilkRatio}} : {{initialWaterRatio}}. If this ratio is to be changed to {{finalMilkRatio}} : {{finalWaterRatio}}, how much water should be added?",
        variables: {
          total: [60, 80, 100, 120, 150],
          initialMilkRatio: [2, 3, 4, 5],
          initialWaterRatio: [1, 2, 3, 4],
          finalMilkRatio: [1, 2, 3, 4],
          finalWaterRatio: [2, 3, 4, 5],
        },
        correctAnswerFormula:
          "((total * initialMilkRatio) / (initialMilkRatio + initialWaterRatio)) * (finalWaterRatio / finalMilkRatio) - (total / (initialMilkRatio + initialWaterRatio)) * initialWaterRatio",
        optionsFormula: [
          "((total * initialMilkRatio) / (initialMilkRatio + initialWaterRatio)) * (finalWaterRatio / finalMilkRatio) - (total / (initialMilkRatio + initialWaterRatio)) * initialWaterRatio",
          "((total * initialMilkRatio) / (initialMilkRatio + initialWaterRatio)) * (finalWaterRatio / finalMilkRatio) + (total / (initialMilkRatio + initialWaterRatio)) * initialWaterRatio",
          "((total * finalMilkRatio) / (initialMilkRatio + initialWaterRatio)) * (initialWaterRatio / finalMilkRatio) - (total / (initialMilkRatio + initialWaterRatio)) * initialWaterRatio",
          "((total * finalMilkRatio) / (initialMilkRatio + initialWaterRatio)) * (initialWaterRatio / finalMilkRatio) + (total / (initialMilkRatio + initialWaterRatio)) * initialWaterRatio",
        ],
        explanationTemplate: `To find the amount of water to be added, we need to follow these steps:<br><br>
      
      1. Calculate the amount of milk and water in the initial mixture:<br><br>
         - Amount of milk = ({{total}} * {{initialMilkRatio}}) / ({{initialMilkRatio}} + {{initialWaterRatio}})<br>
         - Amount of water = ({{total}} * {{initialWaterRatio}}) / ({{initialMilkRatio}} + {{initialWaterRatio}})<br><br>
      
      2. In the final mixture, the amount of milk remains the same, but the ratio changes:<br><br>
         - Let the total final amount be T.<br>
         - New amount of water (W) needed = (Amount of milk * {{finalWaterRatio}}) / {{finalMilkRatio}}<br><br>
      
      3. The amount of water to be added is the difference between the new amount of water and the initial amount of water:<br><br>
         - Water to be added = W - Initial amount of water<br><br>
      
      Using the given values, we get:<br><br>
      
      - Initial amount of milk = ({{total}} * {{initialMilkRatio}}) / ({{initialMilkRatio}} + {{initialWaterRatio}}) = {{milk_amount}} litres.<br>
      - Initial amount of water = ({{total}} * {{initialWaterRatio}}) / ({{initialMilkRatio}} + {{initialWaterRatio}}) = {{water_amount}} litres.<br><br>
      
      To change the ratio to {{finalMilkRatio}} : {{finalWaterRatio}}, the new amount of water needed is:<br><br>
      
      W = ({{milk_amount}} * {{finalWaterRatio}}) / {{finalMilkRatio}} = {{new_water_amount}} litres.<br><br>
      
      Therefore, the quantity of water to be added is:<br><br>
      
      Water to be added = {{new_water_amount}} - {{water_amount}} = {{final_answer}} litres.<br><br>`,
      },
    ],
  },
};

export default quantitativeTopic;
