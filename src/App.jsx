

function App() {

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
                <h1>Daniel Latina</h1>
                <div className="page-scroll">
                  <p className="job-title">Front End Developer</p>
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
                <img src={`${import.meta.env.BASE_URL}assets/img/daniellatina.png`} alt="Daniel-Latina" />
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
                  <img src={`${import.meta.env.BASE_URL}assets/img/lines.svg`} className="img-lines" alt="lines" />
                  <p>
                    Hello! I'm Daniel, a Front-end developer, a history enthusiast,
                    likes to read how codes work. I am a lazy person that wants to do
                    things in the most effiecient way "that I know of" possible.
                  </p>
                  <a
                    href={`${import.meta.env.BASE_URL}assets/CV/DANIEL I. LATINA CV.pdf`}
                    className="btn btn-fill"
                    download
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
                <img src={`${import.meta.env.BASE_URL}assets/img/lines.svg`} className="img-lines" alt="lines" />
              </div>
              <div className="row">
                <div className="col-md-4">
                  <div className="skill">
                    <h4>Html/css</h4>
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
                  <div className="skill">
                    <h4>Python</h4>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-transitiongoal={25}
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
                        data-transitiongoal={50}
                      />
                      {/* /.progress-bar */}
                    </div>
                    {/* /.progress */}
                  </div>
                  {/* /.skill */}
                  <div className="skill">
                    <h4>MySQL</h4>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-transitiongoal={50}
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
                        data-transitiongoal={25}
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
                        data-transitiongoal={25}
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
                  <img src={`${import.meta.env.BASE_URL}assets/img/lines.svg`} className="img-lines" alt="lines" />
                </div>
                <div className="col-sm-6">
                  <div className="service">
                    <img src={`${import.meta.env.BASE_URL}assets/img/front-end.svg`} alt="Front End Developer" />
                    <h4>Front-end</h4>
                    <p>
                      I have a modest amounts of experience in using HTML5, CSS and JS.
                      I am also learning how to use react.js and tailwind CSS.
                      
                    </p>
                  </div>
                  {/* /.service */}
                </div>
                <div className="col-sm-6">
                  <div className="service">
                    <img src={`${import.meta.env.BASE_URL}assets/img/back-end.svg`} alt="Back End Developer" />
                    <h4>Back-end</h4>
                    <p>
                     I have little experience in back-end development.
                     Though I have used PHP and MySQL in one project I had.
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
                <img src={`${import.meta.env.BASE_URL}assets/img/lines.svg`} className="img-lines" alt="lines" />
              </div>
              <div className="row">
                <div className="col-md-4 col-sm-10 col-xs-6">
                  <div className="portfolio-item">
                    <img
                      src={`${import.meta.env.BASE_URL}assets/img/daniels-coffee.png`}
                      className="img-res"
                      alt="Daniel's Coffee Website"
                    />
                    <div className="portfolio-item-info">
                      <h4>Daniel's Coffee Website</h4>
                      <a href="#" data-toggle="modal" data-target="#portfolioItem1">
                        <span className="glyphicon glyphicon-eye-open" />
                      </a>
                      <a href="https://danielscoffeetest.netlify.app/" target="_blank">
                        <span className="glyphicon glyphicon-link" />
                      </a>
                    </div>
                    {/* /.portfolio-item-info */}
                  </div>
                  {/* /.portfolio-item */}
                </div>
                <div className="col-md-4 col-sm-10 col-xs-6">
                  <div className="portfolio-item">
                    <img
                      src={`${import.meta.env.BASE_URL}assets/img/mock-portfolio.png`}
                      className="img-res"
                      alt=""
                    />
                    <div className="portfolio-item-info">
                      <h4>Project Title</h4>
                      <a href="#" data-toggle="modal" data-target="#portfolioItem2">
                        <span className="glyphicon glyphicon-eye-open" />
                      </a>
                      <a href="https://my-portfolio-non-responsive.netlify.app/" target="_blank">
                        <span className="glyphicon glyphicon-link" />
                      </a>
                    </div>
                    {/* /.portfolio-item-info */}
                  </div>
                  {/* /.portfolio-item */}
                </div>
                <div className="col-md-4 col-sm-10 col-xs-6">
                  <div className="portfolio-item">
                    <img
                      src={`${import.meta.env.BASE_URL}assets/img/infograph.png`}
                      className="img-res"
                      alt="infograph.png"
                    />
                    <div className="portfolio-item-info">
                      <h4>Project Title</h4>
                      <a href="#" data-toggle="modal" data-target="#portfolioItem3">
                        <span className="glyphicon glyphicon-eye-open" />
                      </a>
                      <a href="https://inforgraphwebsiteactivity.netlify.app/" target="_blank">
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
                  <p className="counter start" data-to={0} data-speed={2000}>
                    0
                  </p>
                  <h4>Years Experience</h4>
                </div>
                <div className="col-sm-4 col-xs-12">
                  <p className="counter start" data-to={3} data-speed={2000}>
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
              <img src={`${import.meta.env.BASE_URL}assets/img/lines.svg`} className="img-lines" alt="lines" />
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
        <footer className="footer">
            <div className="container-foot">
              <div className="row-foot">
                <div className="footer-col">
                  <h4>My Info</h4>
                  <ul>
                    <li>
                      <p>danielisanan@gmail.com</p>
                    </li>
                    <li>
                      <p>McArthur Highway Apalit, Pampanga</p>
                    </li>
                    <li>
                      <p>09771230941</p>
                    </li>
                  </ul>
                </div>
                <div className="footer-col">
                  <h4>My Socials</h4>
                  <div className="social-links">
                    <a href="https://www.facebook.com/Bopz903/" target="_blank">
                      <img className="icons" src={`${import.meta.env.BASE_URL}assets/img/facebook.png`} alt="" />
                    </a>
                    <a href="https://github.com/Dan-903" target="_blank">
                    <img className="icons" src={`${import.meta.env.BASE_URL}assets/img/github.png`} alt="" />
                    </a>
                    <a href="https://www.linkedin.com/in/daniel-latina-b57003278/" target="_blank">
                    <img className="icons" src={`${import.meta.env.BASE_URL}assets/img/linkedin.png`} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>

        {/* Modals */}
        <div id="portfolioItem1" className="modal fade" role="dialog">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <a className="close" data-dismiss="modal">
                  <span className="glyphicon glyphicon-remove" />
                </a>
                <img className="img-res" src={`${import.meta.env.BASE_URL}assets/img/Daniels-coffee.png`} alt="" />
              </div>
              <div className="modal-body">
                <h4 className="modal-title">Daniel's Coffee Website</h4>
                <p>
                  This was a project in my Responsive Web Design subject
                  during my 2nd year of college. I was tasked to convert the main page 
                  of my team's website.
                </p>
              </div>
              <div className="modal-footer">
                <a href="https://danielscoffeetest.netlify.app/" target="_blank" className="btn btn-fill">
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
                <img className="img-res" src={`${import.meta.env.BASE_URL}assets/img/mock-portfolio.png`} alt="mock-portfolio.png" />
              </div>
              <div className="modal-body">
                <h4 className="modal-title">Mock Portfolio</h4>
                <p>
                  This is a mock portfolio project. Isused by my instructor as a project
                  during finals in 1st term of my 2nd year.
                </p>
              </div>
              <div className="modal-footer">
                <a href="https://my-portfolio-non-responsive.netlify.app/" target="_blank" className="btn btn-fill">
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
                  <img className="img-res" src={`${import.meta.env.BASE_URL}assets/img/infograph.png`} alt="infograph.png" />
              </div>
              <div className="modal-body">
                <h4 className="modal-title">Infograph Website</h4>
                <p>
                  I chose to make an infograph about the most popular anime according
                  to My Anime List for my activity. I did not connect my website to My Anime List, 
                  I just typed the info into my HTML.
                </p>
              </div>
              <div className="modal-footer">
                <a href="https://inforgraphwebsiteactivity.netlify.app/" target="_blank" className="btn btn-fill">
                  Visit Page
                </a>
              </div>
            </div>
            {/* /.modal-content */}
          </div>
          {/* /.modal-dialog */}
        </div>
</>

  )
}

export default App
