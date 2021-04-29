import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import Button from "../Button/button"
import { Link } from "react-scroll"
import { motion } from "framer-motion"
import { BannerStyles } from "../../styles/bannerStyles"
import { Parallax } from 'react-scroll-parallax';

const Banner = () => {
  const { placeholderImage } = useStaticQuery(
    graphql`
      query {
        placeholderImage: file(relativePath: { eq: "hero-bg.jpeg" }) {
          childImageSharp {
            gatsbyImageData(quality: 90, width: 1000, formats: [AUTO, WEBP])
          }
        }
      }
    `
  )

  const image = getImage(placeholderImage)

  const bgImage = convertToBgImage(image)

  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: 20 },
  }

  return (

    <BannerStyles>


      <BackgroundImage
            Tag="section"
            {...bgImage}
            preserveStackingContext
            className="hero-image"
          >
      <Parallax
        offsetYMin={-100}
        offsetYMax={100}
      >
      <GatsbyImage image={image} />
      </Parallax>
      <div className="hero-content">

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ ease: "easeOut", duration: 0.8, delay: 1 }}
        >
          Systemische Therapie & Beratung in Augsburg, München, Berlin und <span>Umgebung</span>
        </motion.h1>

        <motion.p
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ ease: "easeOut", duration: 0.8, delay: 1.5 }}
        >
          Ich biete Ihnen in Gesprächen einen Rahmen, der eine selbstbestimmte, konstruktive und effektive Bearbeitung Ihrer Anliegen ermöglicht. Gerne berate ich Sie als Einzelperson oder auch als Paar in Fragen zu Ihrer Beziehung, Partnerschaft und Sexualität. Für Ihre beruflichen Fragen biete ich im Raum Augsburg und München ein Coaching  für Sie und Ihr Team als Beraterin oder Supervisorin. Dabei ist meine Arbeit grundlegend von einer systemischen Haltung geprägt.
          </motion.p>
        <Link to="about" smooth={true} duration={500}>
          <span className="sr-only">Weiterlesen</span>
          <Button
            cta="Weiterlesen"
            label="Banner Weiterlesen"
            anchor={true}
            href="linking"
          />
        </Link>
      </div>

      </BackgroundImage>

    </BannerStyles >
  )
}

export default Banner
