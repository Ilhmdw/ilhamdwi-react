import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const blogData = [
    {
        id: 1,
        image: require('../assets/images/blog1.jpg'),
        time: '14 April 2025',
        title: 'Coffee Lovers',
        description: 'Nikmati sensasi kopi dari berbagai belahan dunia. Mulai dari aroma kopi arabika yang lembut hingga robusta yang kuat, artikel ini cocok untuk para pecinta kopi sejati.',
        link: 'https://www.google.com'
      },
      {
        id: 2,
        image: require('../assets/images/blog2.jpg'),
        time: '10 April 2025',
        title: 'Tips for UI Design',
        description: 'Pelajari tips dan trik mendesain antarmuka pengguna yang menarik dan ramah pengguna. Dari pemilihan warna hingga struktur layout yang efektif.',
        link: 'https://www.facebook.com'
      },
      {
        id: 3,
        image: require('../assets/images/blog3.jpg'),
        time: '07 April 2025',
        title: 'Beautiful Day',
        description: 'Hari yang cerah adalah waktu terbaik untuk menyegarkan pikiran. Temukan inspirasi dan ide-ide sederhana untuk menikmati hari Anda dengan lebih bermakna.',
        link: 'https://www.twitter.com'
      }
      
]

export default function AppBlog() {
  return (
    <section id="blog" className="block blog-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Latest from blog</h2>
          <div className="subtitle">get our latest news from blog</div>
        </div>
        <Row>
          {
            blogData.map(blog => {
              return (
                <Col sm={4} key={blog.id}>
                  <div className='holder'>
                    <Card>
                      <Card.Img variant="top" src={blog.image} />
                      <Card.Body>
                        <time>{blog.time}</time>
                        <Card.Title>{blog.title}</Card.Title>
                        <Card.Text>
                          {blog.description}
                        </Card.Text>
                        <a href={blog.link} className="btn btn-primary">Read More <i className="fas fa-chevron-right"></i></a>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              )
            })
          }
        </Row>
      </Container>
    </section>
  )
}

