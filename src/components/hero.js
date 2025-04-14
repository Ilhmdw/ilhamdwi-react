import Carousel from 'react-bootstrap/Carousel';


var heroData = [
    {
        id: 1,
        image: require('../assets/images/img-hero1.jpg'),
        title: 'The perfect design for your website',
        description: 'Design Terbaik',
        link: 'https://www.google.com'
      },
      {
        id: 2,
        image: require('../assets/images/img-hero2.jpg'),
        title: 'Start Your Future Financial Plan',
        description: 'Mulai Bisnis Anda',
        link: 'https://www.facebook.com'
      },
      {
        id: 3,
        image: require('../assets/images/img-hero3.jpg'),
        title: 'Enjoy the Difference',
        description: 'Lebih Dari Yang Lain!',
        link: 'https://www.twitter.com'
      }
]
export default function AppHero () {
    return (
<section id="home" className="hero-block">
<Carousel>
          {
            heroData.map(hero => {
              return (
                <Carousel.Item key={hero.id}>
                  <img
                    className="d-block w-100"
                    src={hero.image}
                    alt={"slide " + hero.id}
                  />
                  <Carousel.Caption>
                    <h2>{hero.title}</h2>
                    <p>{hero.description}</p>
                    <a className="btn btn-primary" href={hero.link}>Learn More <i className="fas fa-chevron-right"></i></a>
                  </Carousel.Caption>             
                </Carousel.Item>
              );
            })
          }
      </Carousel>
</section>
    )
}

