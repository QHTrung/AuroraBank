import '../css/intro.css';
import Service from './Service';

function Intro() {
  return (
    <section className="intro__container">
      <div className="intro__heading text-center">
        <h2 className="intro__heading--bolder">Life is easier with Aurora</h2>
        <h6 className="intro-heading__desc">
          Let&apos;s explore thousands of utilities from Vietnam&apos;s leading
          banking services
        </h6>
      </div>
      <Service />
    </section>
  );
}

export default Intro;
