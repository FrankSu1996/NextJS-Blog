import classes from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/Frank.jpg"
          alt="An image showing Frank"
          width={300}
          height={300}
        />
      </div>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <h1>Hi, I'm Frank</h1>
      <p>I made this blog website to learn NextJs. </p>
    </section>
  );
};

export default Hero;
