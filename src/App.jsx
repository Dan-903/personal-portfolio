import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <header
          id="masthead"
          className="site-header"
          data-anchor-target=".hero"
          data-top="background: rgba(255,255,255,0); padding: 30px 0; box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0);"
          data-top-bottom="background: rgba(255,255,255,1); padding: 10px 0; box-shadow: 0px 0px 20px 6px rgba(0, 0, 0, 0.2);"
        >
          <nav id="primary-navigation" className="site-navigation">
            <div className="container">
              <div className="navbar-header page-scroll">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-target="#portfolio-perfect-collapse"
                  aria-expanded="false"
                >
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                  <span className="icon-bar" />
                </button>
                <a href="#hero" className="site-logo">
                  <img src="/public/assets/img/logo.png" alt="logo" />
                </a>
              </div>
              {/* /.navbar-header */}
              <div className="main-menu" id="portfolio-perfect-collapse">
                <ul className="nav navbar-nav navbar-right">
                  <li className="page-scroll">
                    <a href="#hero">Home</a>
                  </li>
                  <li className="page-scroll">
                    <a href="#about">About</a>
                  </li>
                  <li className="page-scroll">
                    <a href="#service">Service</a>
                  </li>
                  <li className="page-scroll">
                    <a href="#portfolio">Portfolio</a>
                  </li>
                  <li className="page-scroll">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
                {/* /.navbar-nav */}
              </div>
              {/* /.navbar-collapse */}
            </div>
          </nav>
          {/* /.primary-navigation */}
        </header>
        {/* /#header */}
        <div id="hero" className="hero">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h1>Alex Vidal</h1>
                <div className="page-scroll">
                  <p className="job-title">Full Stack Developer</p>
                  <a href="#contact" className="btn btn-fill ">
                    Hire me
                  </a>
                  <div className="clearfix visible-xxs" />
                  <a href="#portfolio" className="btn btn-border">
                    Explore more
                  </a>
                </div>
              </div>
              <div className="col-md-6 text-right">
                <img src="/public/assets/img/alex-vidal.png" alt="alex-vidal" />
              </div>
            </div>
          </div>
        </div>
        {/* /.hero */}
        <main id="main" className="site-main">
          <section id="about" className="site-section section-about text-center">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-md-offset-3">
                  <h2>About</h2>
                  <img src="/public/assets/img/lines.svg" className="img-lines" alt="lines" />
                  <p>
                    Hello! I'm Alex, a full stuck developer, a Ruby enthusiast, and a
                    guy slighty obsessed for code quality. Also I'm a co-founder of
                    pykod.com. I’m currently available for freelance work. If you have
                    a project that you want to get started or think you need my help
                    with something, then get in touch.
                  </p>
                  <a
                    href="http://www.grad.illinois.edu/sites/default/files/pdfs/cvsamples.pdf"
                    className="btn btn-fill"
                    target="_blank"
                    download=""
                  >
                    Download my cv
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/* /.secton-about */}
          <section className="site-section section-skills">
            <div className="container">
              <div className="text-center">
                <h3>My Skills</h3>
                <img src="/public/assets/img/lines.svg" className="img-lines" alt="lines" />
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="skill">
                    <h4>Html/css</h4>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-transitiongoal={100}
                      />
                      {/* /.progress-bar */}
                    </div>
                    {/* /.progress */}
                  </div>
                  {/* /.skill */}
                  <div className="skill">
                    <h4>Python</h4>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-transitiongoal={75}
                      />
                      {/* /.progress-bar */}
                    </div>
                    {/* /.progress */}
                  </div>
                  {/* /.skill */}
                </div>
                <div className="col-md-4">
                  <div className="skill">
                    <h4>Javascript</h4>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-transitiongoal={82}
                      />
                      {/* /.progress-bar */}
                    </div>
                    {/* /.progress */}
                  </div>
                  {/* /.skill */}
                  <div className="skill">
                    <h4>Ruby</h4>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-transitiongoal={66}
                      />
                      {/* /.progress-bar */}
                    </div>
                    {/* /.progress */}
                  </div>
                  {/* /.skill */}
                </div>
                <div className="col-md-4">
                  <div className="skill">
                    <h4>Php</h4>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-transitiongoal={97}
                      />
                      {/* /.progress-bar */}
                    </div>
                    {/* /.progress */}
                  </div>
                  {/* /.skill */}
                  <div className="skill">
                    <h4>Java</h4>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-transitiongoal={45}
                      />
                      {/* /.progress-bar */}
                    </div>
                    {/* /.progress */}
                  </div>
                  {/* /.skill */}
                </div>
              </div>
            </div>
          </section>
          {/* /.secton-skills */}
          <section
            id="service"
            className="site-section section-services overlay text-center"
          >
            <div className="container">
              <div className="row">
                <div className="col-md-12">
                  <h3>What i do</h3>
                  <img src="/public/assets/img/lines.svg" className="img-lines" alt="lines" />
                </div>
                <div className="col-sm-4">
                  <div className="service">
                    <img src="/public/assets/img/front-end.svg" alt="Front End Developer" />
                    <h4>Front-end</h4>
                    <p>
                      As a javascript developer, I have experience in HTML5 and CSS3
                      techniques working with jQuery or more advanced javascript MVC
                      frameworks such as angular
                    </p>
                  </div>
                  {/* /.service */}
                </div>
                <div className="col-sm-4">
                  <div className="service">
                    <img src="/public/assets/img/back-end.svg" alt="Back End Developer" />
                    <h4>Back-end</h4>
                    <p>
                      Utilising php frameworks such as Zend or creating bespoke code,
                      I've written services supporting thousands of users, including
                      REST APIs, e-learning applications and more.
                    </p>
                  </div>
                  {/* /.service */}
                </div>
                <div className="col-sm-4">
                  <div className="service">
                    <img src="/public/assets/img/consultancy.svg" alt="Coding" />
                    <h4>Consultancy</h4>
                    <p>
                      As well as providing development services, I can also help you
                      decide strategic roadmaps via consultancy services.
                    </p>
                  </div>
                  {/* /.service */}
                </div>
              </div>
            </div>
          </section>
          {/* /.secton-services */}
          <section id="portfolio" className="site-section section-portfolio">
            <div className="container">
              <div className="text-center">
                <h3>My recent Works</h3>
                <img src="/public/assets/img/lines.svg" className="img-lines" alt="lines" />
              </div>
              <div className="row">
                <div className="col-md-4 col-xs-6">
                  <div className="portfolio-item">
                    <img
                      src="/public/assets/img/portfolio-1.jpg"
                      className="img-res"
                      alt=""
                    />
                    <div className="portfolio-item-info">
                      <h4>Project Title</h4>
                      <a href="#" data-toggle="modal" data-target="#portfolioItem1">
                        <span className="glyphicon glyphicon-eye-open" />
                      </a>
                      <a href="#">
                        <span className="glyphicon glyphicon-link" />
                      </a>
                    </div>
                    {/* /.portfolio-item-info */}
                  </div>
                  {/* /.portfolio-item */}
                </div>
                <div className="col-md-4 col-xs-6">
                  <div className="portfolio-item">
                    <img
                      src="/public/assets/img/portfolio-2.jpg"
                      className="img-res"
                      alt=""
                    />
                    <div className="portfolio-item-info">
                      <h4>Project Title</h4>
                      <a href="#" data-toggle="modal" data-target="#portfolioItem2">
                        <span className="glyphicon glyphicon-eye-open" />
                      </a>
                      <a href="#">
                        <span className="glyphicon glyphicon-link" />
                      </a>
                    </div>
                    {/* /.portfolio-item-info */}
                  </div>
                  {/* /.portfolio-item */}
                </div>
                <div className="col-md-4 col-xs-6">
                  <div className="portfolio-item">
                    <img
                      src="/public/assets/img/portfolio-3.jpg"
                      className="img-res"
                      alt=""
                    />
                    <div className="portfolio-item-info">
                      <h4>Project Title</h4>
                      <a href="#" data-toggle="modal" data-target="#portfolioItem3">
                        <span className="glyphicon glyphicon-eye-open" />
                      </a>
                      <a href="#">
                        <span className="glyphicon glyphicon-link" />
                      </a>
                    </div>
                    {/* /.portfolio-item-info */}
                  </div>
                  {/* /.portfolio-item */}
                </div>
                <div className="col-md-4 col-xs-6">
                  <div className="portfolio-item">
                    <img
                      src="/public/assets/img/portfolio-4.jpg"
                      className="img-res"
                      alt=""
                    />
                    <div className="portfolio-item-info">
                      <h4>Project Title</h4>
                      <a href="#" data-toggle="modal" data-target="#portfolioItem4">
                        <span className="glyphicon glyphicon-eye-open" />
                      </a>
                      <a href="#">
                        <span className="glyphicon glyphicon-link" />
                      </a>
                    </div>
                    {/* /.portfolio-item-info */}
                  </div>
                  {/* /.portfolio-item */}
                </div>
                <div className="col-md-4 col-xs-6">
                  <div className="portfolio-item">
                    <img
                      src="/public/assets/img/portfolio-5.jpg"
                      className="img-res"
                      alt=""
                    />
                    <div className="portfolio-item-info">
                      <h4>Project Title</h4>
                      <a href="#" data-toggle="modal" data-target="#portfolioItem5">
                        <span className="glyphicon glyphicon-eye-open" />
                      </a>
                      <a href="#">
                        <span className="glyphicon glyphicon-link" />
                      </a>
                    </div>
                    {/* /.portfolio-item-info */}
                  </div>
                  {/* /.portfolio-item */}
                </div>
                <div className="col-md-4 col-xs-6">
                  <div className="portfolio-item">
                    <img
                      src="/public/assets/img/portfolio-6.jpg"
                      className="img-res"
                      alt=""
                    />
                    <div className="portfolio-item-info">
                      <h4>Project Title</h4>
                      <a href="#" data-toggle="modal" data-target="#portfolioItem6">
                        <span className="glyphicon glyphicon-eye-open" />
                      </a>
                      <a href="#">
                        <span className="glyphicon glyphicon-link" />
                      </a>
                    </div>
                    {/* /.portfolio-item-info */}
                  </div>
                  {/* /.portfolio-item */}
                </div>
              </div>
            </div>
          </section>
          {/* /.secton-portfolio */}
          <section className="site-section section-counters text-center">
            <div className="container">
              <div className="row">
                <div className="col-sm-4 col-xs-12">
                  <p className="counter start" data-to={10} data-speed={2000}>
                    0
                  </p>
                  <h4>Years Experience</h4>
                </div>
                <div className="col-sm-4 col-xs-12">
                  <p className="counter start" data-to={120} data-speed={2000}>
                    0
                  </p>
                  <h4>Projects Delivered</h4>
                </div>
                <div className="col-sm-4 col-xs-12">
                  <p
                    id="infinity"
                    className="counter"
                    data-from={0}
                    data-to={1}
                    data-speed={1000}
                  >
                    0
                  </p>
                  <h4>
                    Seconds on this site!
                    <br />
                    What are you waiting for?
                  </h4>
                </div>
              </div>
            </div>
          </section>
          {/* /.section-counters */}
          <section id="contact" className="site-section section-form text-center">
            <div className="container">
              <h3>Contact</h3>
              <img src="/public/assets/img/lines.svg" className="img-lines" alt="lines" />
              <form>
                <div className="row">
                  <div className="col-sm-6">
                    <input
                      type="text"
                      name="name"
                      className="form-control mt-x-0"
                      placeholder="Name"
                      required=""
                    />
                  </div>
                  <div className="col-sm-6">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      required=""
                    />
                  </div>
                  <div className="col-sm-12">
                    <textarea
                      name="message"
                      id="mesaage"
                      className="form-control"
                      placeholder="Message"
                      required=""
                      defaultValue={""}
                    />
                  </div>
                </div>
                <button href="#" className="btn btn-border" type="submit">
                  Hire Me <span className="glyphicon glyphicon-send" />
                </button>
              </form>
            </div>
          </section>
          {/* /.section-form */}
        </main>
        {/* /#main */}
        <footer id="colophon" className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-4 col-xs-12">
                <a className="icon facebook-bg" href="#">
                  <i className="icon-facebook" />
                </a>
                <a className="icon twitter-bg" href="#">
                  <i className="icon-twitter" />
                </a>
                <a className="icon gplus-bg" href="#">
                  <i className="icon-linkedin" />
                </a>
                <a className="icon linkedin-bg" href="#">
                  <i className="icon-gplus" />
                </a>
              </div>
              <div className="col-sm-4 col-sm-offset-0 col-xs-6 col-xs-offset-3">
                <p className="copyright">2017. All Rights Reserved</p>
              </div>
              <div className="col-sm-4 col-xs-3">
                <div className="text-right page-scroll">
                  <a className="icon icon-up-bg" href="#hero">
                    <i className="icon-up" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* /#footer */}
        {/* Modals */}
        <div id="portfolioItem1" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <a className="close" data-dismiss="modal">
                  <span className="glyphicon glyphicon-remove" />
                </a>
                <img className="img-res" src="/public/assets/img/portfolio-1.jpg" alt="" />
              </div>
              <div className="modal-body">
                <h4 className="modal-title">Project title</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  commodo finibus tristique. Maecenas dignissim condimentum sem eu
                  tincidunt. Curabitur in dui quis magna vestibulum pulvinar a ut
                  urna. Nam pellentesque mattis urna. Aenean eget lectus sit amet
                  turpis facilisis consectetur quis vel ante. Integer in massa ut nibh
                  ultricies sagittis imperdiet in ante. Nam sed turpis vel ante
                  placerat feugiat ac tempus magna. Nam aliquet ullamcorper dolor non
                  hendrerit.
                </p>
              </div>
              <div className="modal-footer">
                <a href="#" className="btn btn-fill">
                  Visit Page
                </a>
              </div>
            </div>
            {/* /.modal-content */}
          </div>
          {/* /.modal-dialog */}
        </div>
        {/* /.modal */}
        <div id="portfolioItem2" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <a className="close" data-dismiss="modal">
                  <span className="glyphicon glyphicon-remove" />
                </a>
                <img className="img-res" src="/public/assets/img/portfolio-2.jpg" alt="" />
              </div>
              <div className="modal-body">
                <h4 className="modal-title">Project title</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  commodo finibus tristique. Maecenas dignissim condimentum sem eu
                  tincidunt. Curabitur in dui quis magna vestibulum pulvinar a ut
                  urna. Nam pellentesque mattis urna. Aenean eget lectus sit amet
                  turpis facilisis consectetur quis vel ante. Integer in massa ut nibh
                  ultricies sagittis imperdiet in ante. Nam sed turpis vel ante
                  placerat feugiat ac tempus magna. Nam aliquet ullamcorper dolor non
                  hendrerit.
                </p>
              </div>
              <div className="modal-footer">
                <a href="#" className="btn btn-fill">
                  Visit Page
                </a>
              </div>
            </div>
            {/* /.modal-content */}
          </div>
          {/* /.modal-dialog */}
        </div>
        {/* /.modal */}
        <div id="portfolioItem3" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <a className="close" data-dismiss="modal">
                  <span className="glyphicon glyphicon-remove" />
                </a>
                <img className="img-res" src="/public/assets/img/portfolio-3.jpg" alt="" />
              </div>
              <div className="modal-body">
                <h4 className="modal-title">Project title</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  commodo finibus tristique. Maecenas dignissim condimentum sem eu
                  tincidunt. Curabitur in dui quis magna vestibulum pulvinar a ut
                  urna. Nam pellentesque mattis urna. Aenean eget lectus sit amet
                  turpis facilisis consectetur quis vel ante. Integer in massa ut nibh
                  ultricies sagittis imperdiet in ante. Nam sed turpis vel ante
                  placerat feugiat ac tempus magna. Nam aliquet ullamcorper dolor non
                  hendrerit.
                </p>
              </div>
              <div className="modal-footer">
                <a href="#" className="btn btn-fill">
                  Visit Page
                </a>
              </div>
            </div>
            {/* /.modal-content */}
          </div>
          {/* /.modal-dialog */}
        </div>
        {/* /.modal */}
        <div id="portfolioItem4" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <a className="close" data-dismiss="modal">
                  <span className="glyphicon glyphicon-remove" />
                </a>
                <img className="img-res" src="/public/assets/img/portfolio-4.jpg" alt="" />
              </div>
              <div className="modal-body">
                <h4 className="modal-title">Project title</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  commodo finibus tristique. Maecenas dignissim condimentum sem eu
                  tincidunt. Curabitur in dui quis magna vestibulum pulvinar a ut
                  urna. Nam pellentesque mattis urna. Aenean eget lectus sit amet
                  turpis facilisis consectetur quis vel ante. Integer in massa ut nibh
                  ultricies sagittis imperdiet in ante. Nam sed turpis vel ante
                  placerat feugiat ac tempus magna. Nam aliquet ullamcorper dolor non
                  hendrerit.
                </p>
              </div>
              <div className="modal-footer">
                <a href="#" className="btn btn-fill">
                  Visit Page
                </a>
              </div>
            </div>
            {/* /.modal-content */}
          </div>
          {/* /.modal-dialog */}
        </div>
        {/* /.modal */}
        <div id="portfolioItem5" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <a className="close" data-dismiss="modal">
                  <span className="glyphicon glyphicon-remove" />
                </a>
                <img className="img-res" src="/public/assets/img/portfolio-5.jpg" alt="" />
              </div>
              <div className="modal-body">
                <h4 className="modal-title">Project title</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  commodo finibus tristique. Maecenas dignissim condimentum sem eu
                  tincidunt. Curabitur in dui quis magna vestibulum pulvinar a ut
                  urna. Nam pellentesque mattis urna. Aenean eget lectus sit amet
                  turpis facilisis consectetur quis vel ante. Integer in massa ut nibh
                  ultricies sagittis imperdiet in ante. Nam sed turpis vel ante
                  placerat feugiat ac tempus magna. Nam aliquet ullamcorper dolor non
                  hendrerit.
                </p>
              </div>
              <div className="modal-footer">
                <a href="#" className="btn btn-fill">
                  Visit Page
                </a>
              </div>
            </div>
            {/* /.modal-content */}
          </div>
          {/* /.modal-dialog */}
        </div>
        {/* /.modal */}
        <div id="portfolioItem6" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <a className="close" data-dismiss="modal">
                  <span className="glyphicon glyphicon-remove" />
                </a>
                <img className="img-res" src="/public/assets/img/portfolio-6.jpg" alt="" />
              </div>
              <div className="modal-body">
                <h4 className="modal-title">Project title</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                  commodo finibus tristique. Maecenas dignissim condimentum sem eu
                  tincidunt. Curabitur in dui quis magna vestibulum pulvinar a ut
                  urna. Nam pellentesque mattis urna. Aenean eget lectus sit amet
                  turpis facilisis consectetur quis vel ante. Integer in massa ut nibh
                  ultricies sagittis imperdiet in ante. Nam sed turpis vel ante
                  placerat feugiat ac tempus magna. Nam aliquet ullamcorper dolor non
                  hendrerit.
                </p>
              </div>
              <div className="modal-footer">
                <a href="#" className="btn btn-fill">
                  Visit Page
                </a>
              </div>
            </div>
            {/* /.modal-content */}
          </div>
          {/* /.modal-dialog */}
        </div>
        {/* /.modal */}
</>

  )
}

export default App
