import { Container, Row, Col } from "react-bootstrap";
import "../css/Skills.css"; 
import { 
    FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaWordpress, FaCuttlefish 
} from "react-icons/fa";
import { 
    SiTailwindcss, SiWebpack, SiNpm, SiSass, SiDotnet, SiShopify, SiDocker, SiKubernetes 
} from "react-icons/si";
import { MdDns } from "react-icons/md"; // IIS
import { TbServerBolt } from "react-icons/tb"; // XAMPP
import { BsMicrosoft } from "react-icons/bs"; // Microsoft Office

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <Container>
        <h2 className="skills-heading text-success">SKILLS</h2>
        <p className="skills-subheading">The skills, tools, and technologies I use:</p>

        <Row className="skills-icons">
          {/* Technical Skills */}
          <Col xs={3} md={2}><FaHtml5 className="skill-icon html" title="HTML" /></Col>
          <Col xs={3} md={2}><FaCss3Alt className="skill-icon css" title="CSS" /></Col>
          <Col xs={3} md={2}><FaJs className="skill-icon js" title="JavaScript" /></Col>
          <Col xs={3} md={2}><FaReact className="skill-icon react" title="React" /></Col>
          {/* <Col xs={3} md={2}><SiTailwindcss className="skill-icon tailwind" title="Tailwind CSS" /></Col> */}
          <Col xs={3} md={2}><SiNpm className="skill-icon npm" title="NPM" /></Col>
          <Col xs={3} md={2}><SiWebpack className="skill-icon webpack" title="Webpack" /></Col>
          <Col xs={3} md={2}><FaGitAlt className="skill-icon git" title="Git" /></Col>
          <Col xs={3} md={2}><FaWordpress className="skill-icon wordpress" title="WordPress" /></Col>
          <Col xs={3} md={2}><SiSass className="skill-icon sass" title="Sass" /></Col>
          <Col xs={3} md={2}><FaCuttlefish className="skill-icon csharp" title="C#" /><span className="fs-4"><b>#</b></span></Col>
          <Col xs={3} md={2}><SiDotnet className="skill-icon dotnet" title="ASP.Net MVC Core" /></Col>
          <Col xs={3} md={2}><TbServerBolt className="skill-icon xampp" title="XAMPP Server" /></Col>
          <Col xs={3} md={2} className="SQL" title="SQL Server Management Studio">SQL</Col>
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
