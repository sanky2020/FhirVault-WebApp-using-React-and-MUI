import CarouselComponent from "../component/CarouselComponent";
import Formss from "../component/Formss";
import homeClass from "../styling/homePage.module.css";

function home() {
  return (
    <>
      <div className={homeClass.landingPage}></div>
      <section className={homeClass.itConsultingParent}>
        <div className={homeClass.itConsultingChild}>
          <div className="itConsultingDescription">
            <h2>
              IT Consulting
              <br /> & Services
            </h2>
            <div className={homeClass.insideChild}>
              <p></p>
              <p className={homeClass.para}>
                I'm a paragraph. Click here to add your own text and edit me.
                click “Edit Text” or double click me to add your own content and
                make changes to the font. I’m a great place for you to tell a
                story and let your users know a little more about you.
              </p>
            </div>
          </div>

          <div className={`${homeClass.more} ${homeClass.reusableMore}`}>
            <p>+</p>
            <p>Find out more</p>
          </div>
        </div>
      </section>
      <section id="serviceSection" className={homeClass.firstSection}>
        <div className={homeClass.serviceSection}>
          <div className={homeClass.serviceHeader}>
            <div className="insideServiceHeader">
              <h2>Our Services</h2>
              <p className={`${homeClass.para} ${homeClass.firstPara}`}>
                I'm a paragraph. Click here to add your own text and edit me.
                <br />
                It’s easy. Just click “Edit Text” or double click me.
              </p>
            </div>

            <div className={homeClass.cards}>
              <div className={homeClass.cardContainer}>
                <div className={homeClass.perCard}>
                  <h3>Cloud Solutions</h3>
                  <p>
                    I'm a paragraph. Click here to add your own text and edit
                    me. It’s easy. Just click “Edit Text” or double click me.
                  </p>
                  <h5>+ Learn More</h5>
                </div>
              </div>

              <div className={homeClass.cardContainer}>
                <div className={homeClass.perCard}>
                  <h3>Managed IT Services</h3>
                  <p>
                    I'm a paragraph. Click here to add your own text and edit
                    me. It’s easy. Just click “Edit Text” or double click me.
                  </p>
                  <h5>+ Learn More</h5>
                </div>
              </div>

              <div className={homeClass.cardContainer}>
                <div className={homeClass.perCard}>
                  <h3>Disaster Recovery</h3>
                  <p>
                    I'm a paragraph. Click here to add your own text and edit
                    me. It’s easy. Just click “Edit Text” or double click me.
                  </p>
                  <h5>+ Learn More</h5>
                </div>
              </div>

              <div className={homeClass.cardContainer}>
                <div className={homeClass.perCard}>
                  <h3>Cloud Desktop</h3>
                  <p>
                    I'm a paragraph. Click here to add your own text and edit
                    me. It’s easy. Just click “Edit Text” or double click me.
                  </p>
                  <h5>+ Learn More</h5>
                </div>
              </div>

              <div className={homeClass.cardContainer}>
                <div className={homeClass.perCard}>
                  <h3>Network Solutions</h3>
                  <p>
                    I'm a paragraph. Click here to add your own text and edit
                    me. It’s easy. Just click “Edit Text” or double click me.
                  </p>
                  <h5>+ Learn More</h5>
                </div>
              </div>

              <div className={homeClass.cardContainer}>
                <div className={homeClass.perCard}>
                  <h3>Support Consulting</h3>
                  <p>
                    I'm a paragraph. Click here to add your own text and edit
                    me. It’s easy. Just click “Edit Text” or double click me.
                  </p>
                  <h5>+ Learn More</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={homeClass.CarouselComponentSection}>
        <CarouselComponent />
      </section>
      <section>
        <div className={homeClass.moreParentDiv}>
          <div>
            <h2>Ready to find out more?</h2>
            <div className={homeClass.insideChild}>
              <p></p>
              <p className={homeClass.para}>
                I'm a paragraph. Click here to add your own text and edit me.
                click “Edit Text” or double click me to add your own content and
                make changes to the font. I’m a great place for you to tell a
                story and let your users know a little more about you.
              </p>
            </div>
          </div>

          <div className={homeClass.more}>
            <p>+</p>
            <p>Find out more</p>
          </div>
        </div>
      </section>
      <Formss />
    </>
  );
}
export default home;
