import './footer.scss'

const Footer = () => {
  return (
    <footer className="container-fluid footer__wrapper" id="Contact">
      <div className="row">
        <div className="col-sm-12 col-lg-3">
          <img
            src="https://starpng.com/public/uploads/preview/airbnb-logo-airbnb-logo-white-on-black-png-image-transparent-101576586899a2xgsawyyh.png"
            alt="footer logo"
            loading="lazy"
            className="img-fluid w-75"
          />
        </div>
        <div className="col-sm-12 col-lg-6 col-md-6">
          <div className="footer__text">
            <span>Terms of use &nbsp;&nbsp;- &nbsp;&nbsp;privacy policy</span>
            <h6 className="text-white mt-2 fw-bold">
              &copy; {new Date().getFullYear()}&nbsp; All right reserved.
            </h6>
          </div>
        </div>
        <div className="col-sm-12 col-lg-3"></div>
      </div>
    </footer>
  )
}

export default Footer
