import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';

var testimonialsData = [
    {
        id: 1,
        name: 'John Wills',
        description: 'Sebagai Manager, saya sangat terkesan dengan semangat kerja tim ini. Setiap proyek ditangani dengan detail dan dedikasi tinggi. Komunikasi antar tim pun sangat lancar, membuat proses kerja menjadi lebih efisien.',
        designation: 'Manager'
      },
      {
        id: 2,
        name: 'Jasmine Perry',
        description: 'Tim ini sangat profesional dalam menangani laporan keuangan dan administrasi. Semua disusun rapi, transparan, dan tepat waktu. Sangat membantu dalam pengambilan keputusan keuangan perusahaan.',
        designation: 'Accountant'
      },
      {
        id: 3,
        name: 'Rocky Johnson',
        description: 'Sebagai CEO, saya bangga dengan pencapaian tim ini. Mereka tidak hanya menyelesaikan pekerjaan, tetapi juga memberikan solusi dan inovasi yang berdampak besar bagi pertumbuhan perusahaan.',
        designation: 'CEO'
      }
      
]

export default function AppTestimonials() {
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Client testimonials</h2>
          <div className="subtitle">what client says about us</div>
        </div>
        <Carousel controls={false}>
          {
            testimonialsData.map(testimonials => {
              return (
                <Carousel.Item key={testimonials.id}>
                  <blockquote>
                    <p>{testimonials.description}</p>
                    <cite>
                      <span className='name'>{testimonials.name}</span>
                      <span className='designation'>{testimonials.designation}</span>
                    </cite>
                  </blockquote>             
                </Carousel.Item>
              );
            })
          }
        </Carousel>
      </Container>
    </section>
  );
}

