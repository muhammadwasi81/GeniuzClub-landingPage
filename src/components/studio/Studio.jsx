import CustomCard from '../UI/CustomCard';
import './studio.scss';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CardOne from '../../assets/img/card1.png';
import CardTwo from '../../assets/img/card2.png';
import CardThree from '../../assets/img/card3.png';
import CardFour from '../../assets/img/card4.png';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Studio = () => {
  return (
    <section className="studio__wrapper" id="ourstudio">
      <div className="container pt-5 text-white">
        <div
          className="head__wrapper"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <h1 className="nft__head">NFT PERSONAGGI STORIC!</h1>
        </div>
        <div data-aos="fade-up" data-aos-duration="3000">
          <Carousel
            responsive={responsive}
            partialVisible={true}
            draggable={false}
            infinite={true}
            autoPlay={responsive.desktop !== 'mobile' ? true : false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            removeArrowOnDeviceType={['tablet']}
            swipeable={false}
            ssr={true}
            transitionDuration={500}
            containerClass="carousel-container"
            stopOnHover={true}
            itemClass="carousel-item-padding-40-px"
          >
            <div className="row d-flex justify-content-around pt-5 mx-1">
              <CustomCard
                src={CardOne}
                alt="old-man"
                subhead="together in esport"
                children="Lorem ispum dolor smit emit"
              />
            </div>
            <div className="row d-flex justify-content-around pt-5 mx-1">
              <CustomCard
                src={CardTwo}
                alt="old-man"
                subhead="together in esport"
                children="Lorem ispum dolor smit emit"
              />
            </div>
            <div className="row d-flex justify-content-around pt-5 mx-1">
              <CustomCard
                src={CardThree}
                alt="old-man"
                subhead="together in esport"
                children="Lorem ispum dolor smit emit"
              />
            </div>
            <div className="row d-flex justify-content-around pt-5 mx-1">
              <CustomCard
                src={CardFour}
                alt="old-man"
                subhead="together in esport"
                children="Lorem ispum dolor smit emit"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Studio;
