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
    concepts: {
      des: "Number system concepts form the foundation of mathematics and are essential for solving a wide range of mathematical problems. Understanding the fundamental concepts of number system is essential for students to excel in their placement examinations.",
      subConcepts: [
        {
          id: 1,
          title: "Number Bases",
          content:
            "Number bases refer to the positional notation systems used to represent numbers. The most commonly used base is the decimal system (base-10), but there are other bases like binary (base-2), octal (base-8), and hexadecimal (base-16). Each base has a set of digits and a positional value system.",
        },
        {
          id: 2,
          title: "Operations on Number Systems",
          content:
            "The number system allows for various operations, including addition, subtraction, multiplication, and division. These operations are performed based on the rules and properties of the specific number system being used.",
        },
        {
          id: 3,
          title: "Decimal System",
          content:
            "The decimal system, also known as the base-10 system, is the most commonly used number system. It uses ten digits (0-9) to represent numbers. Each digit's position in a number carries a value based on powers of 10.<br>For example :<p>The number 352 is interpreted as 3 × 10^2 + 5 × 10^1 + 2 × 10^0.</p>",
        },
      ],
    },
    formulae: "Theme Detection formulae here...",
    practiceQuestions: [
      {

        id: 1,
        template: "Which of the following is not a prime number?\n\nA) 91\nB) 97\nC) 79\nD) 59",
        variables: {},
        correctAnswerFormula: "91",
        optionsFormula: [
          "91",
          "97",
          "79",
          "59"
        ],
        explanationTemplate: `To determine which number is not a prime number, we need to check the divisibility of each option:
        
          - 91: 91 is not a prime number because it can be divided by 7 (91 = 7 * 13).
          - 97: 97 is a prime number because it has no divisors other than 1 and itself.
          - 79: 79 is a prime number because it has no divisors other than 1 and itself.
          - 59: 59 is a prime number because it has no divisors other than 1 and itself.
        
          Therefore, the correct answer is 91, as it is the only number that is not prime.
          `

        ,
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
    concepts: {
      des: "Number system concepts form the foundation of mathematics and are essential for solving a wide range of mathematical problems. Understanding the fundamental concepts of number system is essential for students to excel in their placement examinations.",
      subConcepts: [
        {
          id: 1,
          title: "Number Bases",
          content:
            "Number bases refer to the positional notation systems used to represent numbers. The most commonly used base is the decimal system (base-10), but there are other bases like binary (base-2), octal (base-8), and hexadecimal (base-16). Each base has a set of digits and a positional value system.",
        },
        {
          id: 2,
          title: "Operations on Number Systems",
          content:
            "The number system allows for various operations, including addition, subtraction, multiplication, and division. These operations are performed based on the rules and properties of the specific number system being used.",
        },
        {
          id: 3,
          title: "Decimal System",
          content:
            "The decimal system, also known as the base-10 system, is the most commonly used number system. It uses ten digits (0-9) to represent numbers. Each digit's position in a number carries a value based on powers of 10.<br>For example :<p>The number 352 is interpreted as 3 × 10^2 + 5 × 10^1 + 2 × 10^0.</p>",
        },
      ],
    },
    formulae: "Theme Detection formulae here...",
    practiceQuestions: [
      {

        id: 1,
        template: "Which of the following is not a prime number?\n\nA) 91\nB) 97\nC) 79\nD) 59",
        variables: {},
        correctAnswerFormula: "91",
        optionsFormula: [
          "91",
          "97",
          "79",
          "59"
        ],
        explanationTemplate: `To determine which number is not a prime number, we need to check the divisibility of each option:
        
          - 91: 91 is not a prime number because it can be divided by 7 (91 = 7 * 13).
          - 97: 97 is a prime number because it has no divisors other than 1 and itself.
          - 79: 79 is a prime number because it has no divisors other than 1 and itself.
          - 59: 59 is a prime number because it has no divisors other than 1 and itself.
        
          Therefore, the correct answer is 91, as it is the only number that is not prime.
          `

        ,
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
  "average": {
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
    concepts: {
      des: "Number system concepts form the foundation of mathematics and are essential for solving a wide range of mathematical problems. Understanding the fundamental concepts of number system is essential for students to excel in their placement examinations.",
      subConcepts: [
        {
          id: 1,
          title: "Number Bases",
          content:
            "Number bases refer to the positional notation systems used to represent numbers. The most commonly used base is the decimal system (base-10), but there are other bases like binary (base-2), octal (base-8), and hexadecimal (base-16). Each base has a set of digits and a positional value system.",
        },
        {
          id: 2,
          title: "Operations on Number Systems",
          content:
            "The number system allows for various operations, including addition, subtraction, multiplication, and division. These operations are performed based on the rules and properties of the specific number system being used.",
        },
        {
          id: 3,
          title: "Decimal System",
          content:
            "The decimal system, also known as the base-10 system, is the most commonly used number system. It uses ten digits (0-9) to represent numbers. Each digit's position in a number carries a value based on powers of 10.<br>For example :<p>The number 352 is interpreted as 3 × 10^2 + 5 × 10^1 + 2 × 10^0.</p>",
        },
      ],
    },
    formulae: "Theme Detection formulae here...",
    practiceQuestions: [
      {

        id: 1,
        template: "Which of the following is not a prime number?\n\nA) 91\nB) 97\nC) 79\nD) 59",
        variables: {},
        correctAnswerFormula: "91",
        optionsFormula: [
          "91",
          "97",
          "79",
          "59"
        ],
        explanationTemplate: `To determine which number is not a prime number, we need to check the divisibility of each option:
        
          - 91: 91 is not a prime number because it can be divided by 7 (91 = 7 * 13).
          - 97: 97 is a prime number because it has no divisors other than 1 and itself.
          - 79: 79 is a prime number because it has no divisors other than 1 and itself.
          - 59: 59 is a prime number because it has no divisors other than 1 and itself.
        
          Therefore, the correct answer is 91, as it is the only number that is not prime.
          `

        ,
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
    concepts: {
      des: "Number system concepts form the foundation of mathematics and are essential for solving a wide range of mathematical problems. Understanding the fundamental concepts of number system is essential for students to excel in their placement examinations.",
      subConcepts: [
        {
          id: 1,
          title: "Number Bases",
          content:
            "Number bases refer to the positional notation systems used to represent numbers. The most commonly used base is the decimal system (base-10), but there are other bases like binary (base-2), octal (base-8), and hexadecimal (base-16). Each base has a set of digits and a positional value system.",
        },
        {
          id: 2,
          title: "Operations on Number Systems",
          content:
            "The number system allows for various operations, including addition, subtraction, multiplication, and division. These operations are performed based on the rules and properties of the specific number system being used.",
        },
        {
          id: 3,
          title: "Decimal System",
          content:
            "The decimal system, also known as the base-10 system, is the most commonly used number system. It uses ten digits (0-9) to represent numbers. Each digit's position in a number carries a value based on powers of 10.<br>For example :<p>The number 352 is interpreted as 3 × 10^2 + 5 × 10^1 + 2 × 10^0.</p>",
        },
      ],
    },
    formulae: "Theme Detection formulae here...",
    practiceQuestions: [
      {

        id: 1,
        template: "Which of the following is not a prime number?\n\nA) 91\nB) 97\nC) 79\nD) 59",
        variables: {},
        correctAnswerFormula: "91",
        optionsFormula: [
          "91",
          "97",
          "79",
          "59"
        ],
        explanationTemplate: `To determine which number is not a prime number, we need to check the divisibility of each option:
        
          - 91: 91 is not a prime number because it can be divided by 7 (91 = 7 * 13).
          - 97: 97 is a prime number because it has no divisors other than 1 and itself.
          - 79: 79 is a prime number because it has no divisors other than 1 and itself.
          - 59: 59 is a prime number because it has no divisors other than 1 and itself.
        
          Therefore, the correct answer is 91, as it is the only number that is not prime.
          `

        ,
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
      // {
      //   id: 3,
      //   title: "",
      //   content:
      //     "If two individuals approach a spot at periodic intervals and the periods differ, we can estimate whether they will cross and at which time.",
      // },
    ],
    concepts: {
      des: "Number system concepts form the foundation of mathematics and are essential for solving a wide range of mathematical problems. Understanding the fundamental concepts of number system is essential for students to excel in their placement examinations.",
      subConcepts: [
        {
          id: 1,
          title: "Number Bases",
          content:
            "Number bases refer to the positional notation systems used to represent numbers. The most commonly used base is the decimal system (base-10), but there are other bases like binary (base-2), octal (base-8), and hexadecimal (base-16). Each base has a set of digits and a positional value system.",
        },
        {
          id: 2,
          title: "Operations on Number Systems",
          content:
            "The number system allows for various operations, including addition, subtraction, multiplication, and division. These operations are performed based on the rules and properties of the specific number system being used.",
        },
        {
          id: 3,
          title: "Decimal System",
          content:
            "The decimal system, also known as the base-10 system, is the most commonly used number system. It uses ten digits (0-9) to represent numbers. Each digit's position in a number carries a value based on powers of 10.<br>For example :<p>The number 352 is interpreted as 3 × 10^2 + 5 × 10^1 + 2 × 10^0.</p>",
        },
      ],
    },
    formulae: "Theme Detection formulae here...",
    practiceQuestions: [
      {

        id: 1,
        template: "Which of the following is not a prime number?\n\nA) 91\nB) 97\nC) 79\nD) 59",
        variables: {},
        correctAnswerFormula: "91",
        optionsFormula: [
          "91",
          "97",
          "79",
          "59"
        ],
        explanationTemplate: `To determine which number is not a prime number, we need to check the divisibility of each option:
        
          - 91: 91 is not a prime number because it can be divided by 7 (91 = 7 * 13).
          - 97: 97 is a prime number because it has no divisors other than 1 and itself.
          - 79: 79 is a prime number because it has no divisors other than 1 and itself.
          - 59: 59 is a prime number because it has no divisors other than 1 and itself.
        
          Therefore, the correct answer is 91, as it is the only number that is not prime.
          `

        ,
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
  "ratio-and-proportion": {
    description:
      "A Ratio is a comparison of two quantities. A Proportion is an equality of two ratios.When comparing two numbers of the same type, the ratio is employed.",
    realLife: [
      {
        id: 1,
        title: "",
        content:
          "The grocery shop is an excellent source of real-world ratios. When comparing the prices of various items, you can easily illustrate ratios by comparing two different prices.",
      },
      {
        id: 2,
        title: "",
        content:
          "Ratios are also used in cooking. The proportions of various ingredients in recipes are critical for preparing the majority of meals.",
      },
      {
        id: 3,
        title: "",
        content:
          "To go 30 kilometres, a vehicle requires a particular amount of fuel. The unitary technique can now be used to estimate the quantity of fuel needed for a car to go 90 kilometres. Similarly, the distance that the vehicle can travel with 10 litres of fuel can be calculated.",
      },
    ],
    concepts: {
      des: "Number system concepts form the foundation of mathematics and are essential for solving a wide range of mathematical problems. Understanding the fundamental concepts of number system is essential for students to excel in their placement examinations.",
      subConcepts: [
        {
          id: 1,
          title: "Number Bases",
          content:
            "Number bases refer to the positional notation systems used to represent numbers. The most commonly used base is the decimal system (base-10), but there are other bases like binary (base-2), octal (base-8), and hexadecimal (base-16). Each base has a set of digits and a positional value system.",
        },
        {
          id: 2,
          title: "Operations on Number Systems",
          content:
            "The number system allows for various operations, including addition, subtraction, multiplication, and division. These operations are performed based on the rules and properties of the specific number system being used.",
        },
        {
          id: 3,
          title: "Decimal System",
          content:
            "The decimal system, also known as the base-10 system, is the most commonly used number system. It uses ten digits (0-9) to represent numbers. Each digit's position in a number carries a value based on powers of 10.<br>For example :<p>The number 352 is interpreted as 3 × 10^2 + 5 × 10^1 + 2 × 10^0.</p>",
        },
      ],
    },
    formulae: "Theme Detection formulae here...",
    practiceQuestions: [
      {

        id: 1,
        template: "Which of the following is not a prime number?\n\nA) 91\nB) 97\nC) 79\nD) 59",
        variables: {},
        correctAnswerFormula: "91",
        optionsFormula: [
          "91",
          "97",
          "79",
          "59"
        ],
        explanationTemplate: `To determine which number is not a prime number, we need to check the divisibility of each option:
        
          - 91: 91 is not a prime number because it can be divided by 7 (91 = 7 * 13).
          - 97: 97 is a prime number because it has no divisors other than 1 and itself.
          - 79: 79 is a prime number because it has no divisors other than 1 and itself.
          - 59: 59 is a prime number because it has no divisors other than 1 and itself.
        
          Therefore, the correct answer is 91, as it is the only number that is not prime.
          `

        ,
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
  "partnership": {
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
    concepts: {
      des: "Number system concepts form the foundation of mathematics and are essential for solving a wide range of mathematical problems. Understanding the fundamental concepts of number system is essential for students to excel in their placement examinations.",
      subConcepts: [
        {
          id: 1,
          title: "Number Bases",
          content:
            "Number bases refer to the positional notation systems used to represent numbers. The most commonly used base is the decimal system (base-10), but there are other bases like binary (base-2), octal (base-8), and hexadecimal (base-16). Each base has a set of digits and a positional value system.",
        },
        {
          id: 2,
          title: "Operations on Number Systems",
          content:
            "The number system allows for various operations, including addition, subtraction, multiplication, and division. These operations are performed based on the rules and properties of the specific number system being used.",
        },
        {
          id: 3,
          title: "Decimal System",
          content:
            "The decimal system, also known as the base-10 system, is the most commonly used number system. It uses ten digits (0-9) to represent numbers. Each digit's position in a number carries a value based on powers of 10.<br>For example :<p>The number 352 is interpreted as 3 × 10^2 + 5 × 10^1 + 2 × 10^0.</p>",
        },
      ],
    },
    formulae: "Theme Detection formulae here...",
    practiceQuestions: [
      {

        id: 1,
        template: "Which of the following is not a prime number?\n\nA) 91\nB) 97\nC) 79\nD) 59",
        variables: {},
        correctAnswerFormula: "91",
        optionsFormula: [
          "91",
          "97",
          "79",
          "59"
        ],
        explanationTemplate: `To determine which number is not a prime number, we need to check the divisibility of each option:
        
          - 91: 91 is not a prime number because it can be divided by 7 (91 = 7 * 13).
          - 97: 97 is a prime number because it has no divisors other than 1 and itself.
          - 79: 79 is a prime number because it has no divisors other than 1 and itself.
          - 59: 59 is a prime number because it has no divisors other than 1 and itself.
        
          Therefore, the correct answer is 91, as it is the only number that is not prime.
          `

        ,
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
      // {
      //   id: 3,
      //   title: "",
      //   content:
      //     "Ram, George, and Atishay made an investment in a company and contributed Rs. 5000, Rs. 3000, and Rs. 7,200, respectively, with the contract that each would obtain 5% on their respective investments. And that the remainder of the company's profit, if any, would be divided among them in the proportion of the sum originally advanced. The company's total profit was Rs. 20,000; what was Ram's portion of the overall profit?",
      // },
    ],
    concepts: {
      des: "Number system concepts form the foundation of mathematics and are essential for solving a wide range of mathematical problems. Understanding the fundamental concepts of number system is essential for students to excel in their placement examinations.",
      subConcepts: [
        {
          id: 1,
          title: "Number Bases",
          content:
            "Number bases refer to the positional notation systems used to represent numbers. The most commonly used base is the decimal system (base-10), but there are other bases like binary (base-2), octal (base-8), and hexadecimal (base-16). Each base has a set of digits and a positional value system.",
        },
        {
          id: 2,
          title: "Operations on Number Systems",
          content:
            "The number system allows for various operations, including addition, subtraction, multiplication, and division. These operations are performed based on the rules and properties of the specific number system being used.",
        },
        {
          id: 3,
          title: "Decimal System",
          content:
            "The decimal system, also known as the base-10 system, is the most commonly used number system. It uses ten digits (0-9) to represent numbers. Each digit's position in a number carries a value based on powers of 10.<br>For example :<p>The number 352 is interpreted as 3 × 10^2 + 5 × 10^1 + 2 × 10^0.</p>",
        },
      ],
    },
    formulae: "Theme Detection formulae here...",
    practiceQuestions: [
      {

        id: 1,
        template: "Which of the following is not a prime number?\n\nA) 91\nB) 97\nC) 79\nD) 59",
        variables: {},
        correctAnswerFormula: "91",
        optionsFormula: [
          "91",
          "97",
          "79",
          "59"
        ],
        explanationTemplate: `To determine which number is not a prime number, we need to check the divisibility of each option:
        
          - 91: 91 is not a prime number because it can be divided by 7 (91 = 7 * 13).
          - 97: 97 is a prime number because it has no divisors other than 1 and itself.
          - 79: 79 is a prime number because it has no divisors other than 1 and itself.
          - 59: 59 is a prime number because it has no divisors other than 1 and itself.
        
          Therefore, the correct answer is 91, as it is the only number that is not prime.
          `

        ,
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
  "chain-rule": {
    description:
      "The Chain Rule can be used in questions that include two or more elements. With the exception of one element, which has one part missing, each element contains two figures. By using subsequent comparison, the chain rule is utilised to determine this missing component of an element.",
    realLife: [
      {
        id: 1,
        title: "",
        content:
          `"Real-life examples where the concept of Chain Rule is involved are:
Construction projects.

Addressing the Compound Interest problems promptly and accurately.

Estimation of the family budget.

Total class hours at school and college.

To estimate the number of man-days required to complete the project.

`,
      },
      // {
      //   id: 2,
      //   title: "",
      //   content:
      //     "Imagine we have two bottles of juice mixes, one with a juice concentration of 80% and the other with a juice concentration of 20%. How will you provide juice with a 50% concentration to your visitor?",
      // },
      // {
      //   id: 3,
      //   title: "",
      //   content:
      //     "Ram, George, and Atishay made an investment in a company and contributed Rs. 5000, Rs. 3000, and Rs. 7,200, respectively, with the contract that each would obtain 5% on their respective investments. And that the remainder of the company's profit, if any, would be divided among them in the proportion of the sum originally advanced. The company's total profit was Rs. 20,000; what was Ram's portion of the overall profit?",
      // },
    ],
    concepts: {
      des: "Number system concepts form the foundation of mathematics and are essential for solving a wide range of mathematical problems. Understanding the fundamental concepts of number system is essential for students to excel in their placement examinations.",
      subConcepts: [
        {
          id: 1,
          title: "Number Bases",
          content:
            "Number bases refer to the positional notation systems used to represent numbers. The most commonly used base is the decimal system (base-10), but there are other bases like binary (base-2), octal (base-8), and hexadecimal (base-16). Each base has a set of digits and a positional value system.",
        },
        {
          id: 2,
          title: "Operations on Number Systems",
          content:
            "The number system allows for various operations, including addition, subtraction, multiplication, and division. These operations are performed based on the rules and properties of the specific number system being used.",
        },
        {
          id: 3,
          title: "Decimal System",
          content:
            "The decimal system, also known as the base-10 system, is the most commonly used number system. It uses ten digits (0-9) to represent numbers. Each digit's position in a number carries a value based on powers of 10.<br>For example :<p>The number 352 is interpreted as 3 × 10^2 + 5 × 10^1 + 2 × 10^0.</p>",
        },
      ],
    },
    formulae: "Theme Detection formulae here...",
    practiceQuestions: [
      {

        id: 1,
        template: "Which of the following is not a prime number?\n\nA) 91\nB) 97\nC) 79\nD) 59",
        variables: {},
        correctAnswerFormula: "91",
        optionsFormula: [
          "91",
          "97",
          "79",
          "59"
        ],
        explanationTemplate: `To determine which number is not a prime number, we need to check the divisibility of each option:
        
          - 91: 91 is not a prime number because it can be divided by 7 (91 = 7 * 13).
          - 97: 97 is a prime number because it has no divisors other than 1 and itself.
          - 79: 79 is a prime number because it has no divisors other than 1 and itself.
          - 59: 59 is a prime number because it has no divisors other than 1 and itself.
        
          Therefore, the correct answer is 91, as it is the only number that is not prime.
          `

        ,
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
  "time-and-work": {
    description:
      "Work is defined as something which has an effect or outcome. Work is always seen as a whole or as a single value. There is a correlation between time-speed-distance problems and work.",
    realLife: [
      {
        id: 1,
        title: "",
        content:
          `It will assist us in determining the time required to accomplish a task and the corresponding wages to be paid in relation to the individual effort undertaken`,
      },
      {
        id: 2,
        title: "",
        content:
          "Estimate the amount of time, money, and food that must be prepared if you are organising a celebration or dinner",
      },
      {
        id: 3,
        title: "",
        content:
          "To calculate the number of units produced at a manufacturing facility, the time required to finish production, and the overall time and budget for building projects.",
      },
    ],
    concepts: {
      des: "Number system concepts form the foundation of mathematics and are essential for solving a wide range of mathematical problems. Understanding the fundamental concepts of number system is essential for students to excel in their placement examinations.",
      subConcepts: [
        {
          id: 1,
          title: "Number Bases",
          content:
            "Number bases refer to the positional notation systems used to represent numbers. The most commonly used base is the decimal system (base-10), but there are other bases like binary (base-2), octal (base-8), and hexadecimal (base-16). Each base has a set of digits and a positional value system.",
        },
        {
          id: 2,
          title: "Operations on Number Systems",
          content:
            "The number system allows for various operations, including addition, subtraction, multiplication, and division. These operations are performed based on the rules and properties of the specific number system being used.",
        },
        {
          id: 3,
          title: "Decimal System",
          content:
            "The decimal system, also known as the base-10 system, is the most commonly used number system. It uses ten digits (0-9) to represent numbers. Each digit's position in a number carries a value based on powers of 10.<br>For example :<p>The number 352 is interpreted as 3 × 10^2 + 5 × 10^1 + 2 × 10^0.</p>",
        },
      ],
    },
    formulae: "Theme Detection formulae here...",
    practiceQuestions: [
      {

        id: 1,
        template: "Which of the following is not a prime number?\n\nA) 91\nB) 97\nC) 79\nD) 59",
        variables: {},
        correctAnswerFormula: "91",
        optionsFormula: [
          "91",
          "97",
          "79",
          "59"
        ],
        explanationTemplate: `To determine which number is not a prime number, we need to check the divisibility of each option:
        
          - 91: 91 is not a prime number because it can be divided by 7 (91 = 7 * 13).
          - 97: 97 is a prime number because it has no divisors other than 1 and itself.
          - 79: 79 is a prime number because it has no divisors other than 1 and itself.
          - 59: 59 is a prime number because it has no divisors other than 1 and itself.
        
          Therefore, the correct answer is 91, as it is the only number that is not prime.
          `

        ,
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
  "races-and-games": {
    description:
      "A Race is a challenge in which contestants must complete a specific distance in the shortest amount of time. Races and games are a subtopic of Time, Speed, and Distance.",
    realLife: [
      {
        id: 1,
        title: "",
        content:
          `In the August 2022 Formula One race, Max Verstappen (first) beat S. Pérez by 17.84 seconds. The results that we see at the end of the race are generally determined by the time taken by the winner as well as other participants. For example, the runner-up took 17.8 seconds longer to complete the race. The second runner-up took an additional 26.88 seconds to complete the race.`,
      },
      {
        id: 2,
        title: "",
        content:
          "It is also used to evaluate the performance of athletes. Assume that in the first week, athlete A takes 10 minutes to run 1000 metres. He only takes 9 minutes to cover the 1000 metre distance next week. Athlete A performance has clearly increased.",
      },
      // {
      //   id: 3,
      //   title: "",
      //   content:
      //     "To calculate the number of units produced at a manufacturing facility, the time required to finish production, and the overall time and budget for building projects.",
      // },
    ],
    concepts: {
      des: "Number system concepts form the foundation of mathematics and are essential for solving a wide range of mathematical problems. Understanding the fundamental concepts of number system is essential for students to excel in their placement examinations.",
      subConcepts: [
        {
          id: 1,
          title: "Number Bases",
          content:
            "Number bases refer to the positional notation systems used to represent numbers. The most commonly used base is the decimal system (base-10), but there are other bases like binary (base-2), octal (base-8), and hexadecimal (base-16). Each base has a set of digits and a positional value system.",
        },
        {
          id: 2,
          title: "Operations on Number Systems",
          content:
            "The number system allows for various operations, including addition, subtraction, multiplication, and division. These operations are performed based on the rules and properties of the specific number system being used.",
        },
        {
          id: 3,
          title: "Decimal System",
          content:
            "The decimal system, also known as the base-10 system, is the most commonly used number system. It uses ten digits (0-9) to represent numbers. Each digit's position in a number carries a value based on powers of 10.<br>For example :<p>The number 352 is interpreted as 3 × 10^2 + 5 × 10^1 + 2 × 10^0.</p>",
        },
      ],
    },
    formulae: "Theme Detection formulae here...",
    practiceQuestions: [
      {

        id: 1,
        template: "Which of the following is not a prime number?\n\nA) 91\nB) 97\nC) 79\nD) 59",
        variables: {},
        correctAnswerFormula: "91",
        optionsFormula: [
          "91",
          "97",
          "79",
          "59"
        ],
        explanationTemplate: `To determine which number is not a prime number, we need to check the divisibility of each option:
        
          - 91: 91 is not a prime number because it can be divided by 7 (91 = 7 * 13).
          - 97: 97 is a prime number because it has no divisors other than 1 and itself.
          - 79: 79 is a prime number because it has no divisors other than 1 and itself.
          - 59: 59 is a prime number because it has no divisors other than 1 and itself.
        
          Therefore, the correct answer is 91, as it is the only number that is not prime.
          `

        ,
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
  "logarithm": {
    description:
      "The logarithm is the opposite of exponentiation as a function. That is, the logarithm of a given integer x is the exponent to which another set number, the base b, must be increased in order to generate x.",
    realLife: [
      {
        id: 1,
        title: "",
        content:
          `Logarithms are useful in finance when dealing with continuous interest rate accumulation.`,
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
    concepts: {
      des: "Number system concepts form the foundation of mathematics and are essential for solving a wide range of mathematical problems. Understanding the fundamental concepts of number system is essential for students to excel in their placement examinations.",
      subConcepts: [
        {
          id: 1,
          title: "Number Bases",
          content:
            "Number bases refer to the positional notation systems used to represent numbers. The most commonly used base is the decimal system (base-10), but there are other bases like binary (base-2), octal (base-8), and hexadecimal (base-16). Each base has a set of digits and a positional value system.",
        },
        {
          id: 2,
          title: "Operations on Number Systems",
          content:
            "The number system allows for various operations, including addition, subtraction, multiplication, and division. These operations are performed based on the rules and properties of the specific number system being used.",
        },
        {
          id: 3,
          title: "Decimal System",
          content:
            "The decimal system, also known as the base-10 system, is the most commonly used number system. It uses ten digits (0-9) to represent numbers. Each digit's position in a number carries a value based on powers of 10.<br>For example :<p>The number 352 is interpreted as 3 × 10^2 + 5 × 10^1 + 2 × 10^0.</p>",
        },
      ],
    },
    formulae: "Theme Detection formulae here...",
    practiceQuestions: [
      {

        id: 1,
        template: "Which of the following is not a prime number?\n\nA) 91\nB) 97\nC) 79\nD) 59",
        variables: {},
        correctAnswerFormula: "91",
        optionsFormula: [
          "91",
          "97",
          "79",
          "59"
        ],
        explanationTemplate: `To determine which number is not a prime number, we need to check the divisibility of each option:
        
          - 91: 91 is not a prime number because it can be divided by 7 (91 = 7 * 13).
          - 97: 97 is a prime number because it has no divisors other than 1 and itself.
          - 79: 79 is a prime number because it has no divisors other than 1 and itself.
          - 59: 59 is a prime number because it has no divisors other than 1 and itself.
        
          Therefore, the correct answer is 91, as it is the only number that is not prime.
          `

        ,
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
};

export default quantitativeTopic;
