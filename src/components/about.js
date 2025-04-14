import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';

import img1 from '../assets/images/img1.jpg';

export default function AppAbout() {
  const html = 80;
  const responsive = 95;
  const photoshop = 60;


  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>About Us</h2>
          <div className="subtitle">learn more about us</div>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1} />
          </Col>
          <Col sm={6}>
            <p>Kami adalah tim profesional yang berdedikasi dalam pengembangan web dan teknologi digital. Dengan pengalaman di berbagai proyek, kami membantu klien mewujudkan ide menjadi produk digital yang efektif dan responsif.</p>
            <p>Kami percaya bahwa kombinasi antara desain yang menarik dan teknologi yang tepat dapat menciptakan solusi yang berdampak. Tim kami terdiri dari pengembang front-end, back-end, serta spesialis jaringan yang saling berkolaborasi untuk menghasilkan karya terbaik.</p>
            <div className='progress-block'>
              <h4>HTML / CSS / Javascript</h4>
              <ProgressBar now={html} label={`${html}%`} />
            </div>
            <div className='progress-block'>
              <h4>Responsive</h4>
              <ProgressBar now={responsive} label={`${responsive}%`} />
            </div>
            <div className='progress-block'>
              <h4>Networking</h4>
              <ProgressBar now={photoshop} label={`${photoshop}%`} />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

