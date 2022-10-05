import CustomCard from '../UI/CustomCard'
import './studio.scss'

const Studio = () => {
  return (
    <section className="studio__wrapper" id="ourstudio">
      <div className="container">
        <div className="row" data-aos="fade-up" data-aos-duration="3000">
          <div className="col-sm-12 col-md-6 col-lg-3 mt-lg-5 pt-lg-5 mt-3 pt-3">
            <CustomCard
              src="https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="play games"
              subhead="Having fun playing together in esport"
              children="lorem ispum dolor smit amet lorem ispum dolor smit amet"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mt-lg-5 pt-lg-5 mt-3 pt-3">
            <CustomCard
              src="https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="play games"
              subhead="Having fun playing together in esport"
              children="lorem ispum dolor smit amet lorem ispum dolor smit amet"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mt-lg-5 pt-lg-5 mt-3 pt-3">
            <CustomCard
              src="https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="play games"
              subhead="Having fun playing together in esport"
              children="lorem ispum dolor smit amet lorem ispum dolor smit amet"
            />
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 mt-lg-5 pt-lg-5 mt-3 pt-3">
            <CustomCard
              src="https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="play games"
              subhead="Having fun playing together in esport"
              children="lorem ispum dolor smit amet lorem ispum dolor smit amet"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Studio
