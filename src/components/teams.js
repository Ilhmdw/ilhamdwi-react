import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const teamsData = [
  {
    id: 1,
    image: require('../assets/images/team1.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Gabriel Hart',
    designation: 'CEO',
    description: 'Memimpin visi dan strategi perusahaan dengan pengalaman lebih dari 15 tahun di bidang teknologi dan bisnis digital.'
  },
  {
    id: 2,
    image: require('../assets/images/team2.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'David Antony',
    designation: 'Manager',
    description: 'Bertanggung jawab atas manajemen proyek dan koordinasi antar divisi untuk memastikan kualitas dan ketepatan waktu delivery.'
  },
  {
    id: 3,
    image: require('../assets/images/team3.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Nicholas Perry',
    designation: 'UX Designer',
    description: 'Menghadirkan desain antarmuka yang intuitif dan menarik dengan pendekatan user-centered design.'
  },
  {
    id: 4,
    image: require('../assets/images/team4.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Sarah Wills',
    designation: 'Developer',
    description: 'Ahli dalam pengembangan web berbasis JavaScript dan framework modern seperti React dan Node.js.'
  },
  {
    id: 5,
    image: require('../assets/images/team5.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Sophia Pitt',
    designation: 'Developer',
    description: 'Fokus pada pengembangan back-end dan integrasi API, serta memastikan keamanan dan stabilitas sistem.'
  },
  {
    id: 6,
    image: require('../assets/images/team6.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Taylor Lopez',
    designation: 'Developer',
    description: 'Spesialis dalam front-end development dan responsive design, memastikan tampilan optimal di semua perangkat.'
  },
  {
    id: 7,
    image: require('../assets/images/team7.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Ryan Giggs',
    designation: 'Content Writer',
    description: 'Menyusun konten yang informatif dan menarik untuk mendukung strategi digital marketing dan SEO.'
  },
  {
    id: 8,
    image: require('../assets/images/team8.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'David Smith',
    designation: 'SEO Expert',
    description: 'Mengoptimalkan visibilitas website di mesin pencari dan meningkatkan traffic organik dengan strategi yang terbukti efektif.'
  }
]

export default function AppTeams() {
  return (
    <section id="teams" className="block teams-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our teams</h2>
          <div className="subtitle">some of our experts</div>
        </div>
        <Row>
          {
            teamsData.map(teams => {
              return (
                <Col sm={3} key={teams.id}>
                  <div className='image'>
                    <Image src={teams.image} />
                    <div className='overlay'>
                      <div className='socials'>
                        <ul>
                          <li><a href={teams.fbLink}><i className="fab fa-facebook-f"></i></a></li>
                          <li><a href={teams.twitterLink}><i className="fab fa-twitter"></i></a></li>
                          <li><a href={teams.linkedinLink}><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='content'>
                    <h3>{teams.name}</h3>
                    <span className='designation'>{teams.designation}</span>
                    <p>{teams.description}</p>
                  </div>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  );
}

