import { Container, Row, Col } from "react-bootstrap";
import "../css/Skills.css"; 
import { 
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaWordpress, 
} from "react-icons/fa";
import { 
     SiWebpack, SiNpm, SiSass, SiDotnet, SiShopify, SiDocker, SiKubernetes 
} from "react-icons/si";
import { MdDns } from "react-icons/md"; 
import { TbServerBolt } from "react-icons/tb"; 
import { BsMicrosoft } from "react-icons/bs"; 

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <Container>
        <h2 className="skills-heading">SKILLS</h2>
        <p className="skills-subheading">The skills, tools, and technologies I use:</p>

        <Row className="skills-icons">
          <Col xs={3} md={2}><FaHtml5 className="skill-icon html" title="HTML" /></Col>
          <Col xs={3} md={2}><FaCss3Alt className="skill-icon css" title="CSS" /></Col>
          <Col xs={3} md={2}><FaJs className="skill-icon js" title="JavaScript" /></Col>
          <Col xs={3} md={2}><FaReact className="skill-icon react" title="React" /></Col>
          <Col xs={3} md={2}><SiNpm className="skill-icon npm" title="NPM" /></Col>
          <Col xs={3} md={2}><SiWebpack className="skill-icon webpack" title="Webpack" /></Col>
          <Col xs={3} md={2}><FaGitAlt className="skill-icon git" title="Git" /></Col>
          <Col xs={3} md={2}><FaWordpress className="skill-icon wordpress" title="WordPress" /></Col>
          <Col xs={3} md={2}><SiSass className="skill-icon sass" title="Sass" /></Col>
          <Col xs={3} md={2}><i className="devicon-csharp-plain colored" title="C#"></i></Col>
          <Col xs={3} md={2}><SiDotnet className="skill-icon dotnet" title="ASP.Net MVC Core" /></Col>
          <Col xs={3} md={2}><TbServerBolt className="skill-icon xampp" title="XAMPP Server" /></Col>
          <Col xs={3} md={2} ><i className="devicon-sqldeveloper-plain"title="SQL Server Management Studio"></i></Col>
          <Col xs={3} md={2}><MdDns className="skill-icon iis" title="IIS" /></Col>
          <Col xs={3} md={2}><SiShopify className="skill-icon shopify" title="Shopify" /></Col>
          <Col xs={3} md={2}><BsMicrosoft className="skill-icon microsoft" title="Microsoft Office" /></Col>
          <Col xs={3} md={2}><SiDocker className="skill-icon docker" title="Docker" /></Col>
          <Col xs={3} md={2}><SiKubernetes className="skill-icon kubernetes" title="Kubernetes" /></Col>
        </Row>
      </Container>
    </section>
  );
}
