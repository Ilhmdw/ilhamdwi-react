import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const servicesData = [
  {
    id: 1,
    icon: 'fas fa-clone',
    title: 'Responsive Design',
    description: 'Website kami dirancang agar tampil optimal di semua perangkat, dari desktop hingga smartphone. Pengunjung akan mendapatkan pengalaman terbaik tanpa terganggu tampilan yang berantakan.'
  },
  {
    id: 2,
    icon: 'fas fa-snowflake',
    title: 'Creative Design',
    description: 'Kami menawarkan desain yang inovatif dan menarik secara visual, disesuaikan dengan identitas brand Anda untuk menciptakan kesan yang kuat dan profesional.'
  },
  {
    id: 3,
    icon: 'fas fa-plug',
    title: 'SEO Optimized',
    description: 'Optimasi mesin pencari (SEO) menjadi prioritas kami, agar website Anda lebih mudah ditemukan di Google dan menjangkau lebih banyak audiens potensial.'
  },
  {
    id: 4,
    icon: 'fas fa-desktop',
    title: 'Retina Ready',
    description: 'Tampilan tajam dan jernih di semua perangkat beresolusi tinggi. Setiap elemen visual akan tampak profesional dan detail.'
  },
  {
    id: 5,
    icon: 'fas fa-trophy',
    title: 'Brower Compatibility',
    description: 'Website kami kompatibel dengan semua browser populer seperti Chrome, Firefox, Safari, dan Edge, memastikan tampil konsisten tanpa gangguan.'
  },
  {
    id: 6,
    icon: 'fas fa-life-ring',
    title: 'Customer Support',
    description: 'Kami menyediakan dukungan penuh dan siap membantu Anda jika ada masalah, pertanyaan, atau permintaan khusus terkait layanan kami.'
  }
]

export default function AppServices() {
  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our services</h2>
          <div className="subtitle">services we provide</div>
        </div>
        <Row>
          {
            servicesData.map(services => {
              return (
                <Col sm={4} className='holder' key={services.id}>
                  <div className="icon">
                    <i className={services.icon}></i>
                  </div>
                  <h3>{services.title}</h3>
                  <p>{services.description}</p>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  );
}

