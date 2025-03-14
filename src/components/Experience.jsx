import { Container, Row, Col } from "react-bootstrap";
import "../css/Experience.css";
import 'animate.css'

const experiences = [
    {
      year: "2024 - Present",
      title: "Software Developer | Full Stack",
      company: "Pacific Data Resources (Asia) Inc.",
      duration: "September 2024 - Present",
      description: [
        "Developed and integrated scalable web services using ASP.NET Web API and WCF for GIS applications, streamlining data management with Oracle Database.",
        "Took charge of the planning and design of database architecture for company projects, ensuring scalability, efficiency, and future-proofing of the system.",
        "Developed and maintained the Billing System project using ASP.NET Core MVC, implementing complex business logic and ensuring seamless integration with Microsoft SQL Server.",
        "Implemented best programming practices, ensuring clean, readable, and efficient code for team-wide consistency.",
        "Created internal C# and JavaScript libraries to enhance development efficiency, streamline processes, and improve codebase maintainability, reducing common bugs and errors.",
        "Optimized data processing in the Billing System module, reducing the time to process uploaded Excel files from 15 seconds to 0.135 seconds, achieving a 99.10% reduction in processing time and a 110x increase in speed.",
        "Refined UI components using HTML, CSS, JavaScript, jQuery, and Bootstrap, boosting user experience and interactivity.",
        "Contributed to Agile practices, including daily stand-ups, sprint planning, and code reviews, ensuring efficient project delivery.",
      ],
    },
    {
      year: "2023 - 2024",
      title: "Software Engineer | Full Stack .Net Development",
      company: "Collabera Digital Client PJLI | Makati City",
      duration: "February 2023 – August 2024",
      description: [
        "Developed features and fixed issues for a Financial Service Provider company.",
        "Created API for internal use of the main web service.",
        "Handled production support issues, investigating errors, fixing data inconsistencies, and resolving system bugs quickly.",
        "Developed SQL scripts and implemented stored procedures in SQL Server Management Studio to optimize database operations and enhance system functionality.",
        "Organized tasks within each project using Jira Board.",
      ],
    },
    {
      year: "2020 - 2023",
      title: "Website Developer",
      company: "Tilden Tasks LLC. dba WP Tangerine | Berkeley, California",
      duration: "January 2020 – February 2023",
      description: [
        "Developed an E-commerce project using C# ASP.NET Core.",
        "Worked as a WordPress and Shopify Developer at Tilden Tasks LLC, optimizing user experience and implementing e-commerce solutions.",
        "Proficient in developing and customizing WordPress and Shopify websites.",
        "Skilled in HTML, CSS, JavaScript, C#, and responsive design techniques.",
      ],
    },
  ];
  
export default function Experience() {
  return (
    <section id='experience' className="experience-section">
      <Container>
        <h2 className="experience-heading">Experience</h2>
        <div className="timeline">
          {experiences.map((exp, index) => (
            <Row key={index} className="timeline-item animate__animated animate__fadeInLeft">
              <Col md={3} className="d-flex align-items-center">
                <div className="year-box">{exp.year}</div>
                <div className="timeline-icon">
                  <div className="glowing-dot"></div>
                  <div className="timeline-line"></div>
                </div>
              </Col>

              <Col md={9} className="timeline-content">
                <h3 className="experience-title">{exp.title}</h3>
                <h4 className="experience-company">{exp.company}</h4>
                <ul className="experience-description">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li> 
                  ))}
                </ul>
              </Col>
            </Row>
          ))}
        </div>
      </Container>
    </section>
  );
}
