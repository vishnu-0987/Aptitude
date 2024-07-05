import Header from "../Header";
import Topic from "../Topic";
import "./index.css";

const topics = [
  "Clock",
  "Calender",
  "Odd Man Out",
  "Statement and Argument",
  "Order and Ranking",
  "Series Completion",
  "Letter and Symbol Series",
  "Number Series",
  "Logical Problems",
  "Making Judgements",
  "Analyzing Arguments",
  "Statement and Assumption",
  "Course of Action",
  "Statement and Conclusion",
  "Cause and Effect",
  "Theme Detection",
  "Order and Ranking",
];

const LogicalReasoning = () => (
  <div className="main-container">
    <Header />
    <div className="logical-container">
      <div className="img-container">
        <img src="./logicalbanner.jpg" alt="logical-banner" />
      </div>
      <div className="all-topics-container">
        <h1>Important Topics</h1>
        <ul className="topics-container">
          {topics.map((item) => (
            <Topic item={item} key={item} />
          ))}
        </ul>
      </div>
      <div className="description-container">
        <h1>Why Logical Resoning?</h1>
        <p>
          Logical reasoning is a vital skill for placement preparation and
          career advancement. It enhances your problem-solving abilities,
          critical thinking, and decision-making skills, which are essential for
          excelling in job interviews and workplace challenges. Companies highly
          value candidates who can think logically and solve complex problems
          efficiently. Mastering logical reasoning not only helps you crack
          various competitive exams and aptitude tests but also prepares you to
          tackle real-world business problems with confidence. Logical reasoning
          tests are a common part of the recruitment process in many top-tier
          companies, and being proficient in this area can significantly
          increase your chances of securing a coveted position in your dream
          company. Additionally, developing strong logical reasoning skills is
          crucial for personal growth as it improves your analytical
          capabilities, allowing you to make better decisions and understand
          complex concepts more easily. In today's competitive job market,
          having sharp logical reasoning skills gives you an edge over other
          candidates, demonstrating your ability to think critically, work under
          pressure, and approach problems methodically. Investing time in honing
          your logical reasoning abilities will pay off in numerous ways, from
          performing well in placement exams to excelling in your professional
          career. Start practicing today to unlock your full potential!
        </p>
      </div>
      <div className="description-container">
        <h1>Weightage</h1>
        <p>
          Logical reasoning typically carries substantial weight in general
          aptitude tests, often accounting for around 30% to 50% of the total
          score. This proportion varies depending on the specific test and its
          focus, but the following general breakdown can be observed:
        </p>
        <ul className="ul">
          <li>
            <span className="span">Pre-Employment Assessments:</span> In
            pre-employment aptitude tests, such as those conducted by top
            companies during campus placements or job interviews, logical
            reasoning sections can constitute about 40% to 50% of the total
            test. This high weightage reflects the importance employers place on
            candidates’ analytical and problem-solving abilities.
          </li>
          <li>
            <span className="span">Competitive Exams:</span> In competitive
            exams for government jobs, MBA entrance exams, and other
            professional certifications, logical reasoning may account for 30%
            to 40% of the total marks. For instance, exams like the GRE, CAT,
            and UPSC often include a significant portion of questions from
            logical reasoning to assess a candidate's critical thinking and
            problem-solving skills.
          </li>
          <li>
            <span className="span">University Entrance Exams:</span> For
            undergraduate and postgraduate university entrance exams, logical
            reasoning may contribute 30% to 35% of the total marks. These exams
            use logical reasoning questions to gauge students ability to analyze
            information and draw conclusions.
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default LogicalReasoning;
