import * as React from "react"
import "../styles/styles.scss"
import Header from '../components/header'

const IndexPage = () => {
  return (
    <main className="container">
      <title>Home Page</title>
      <Header />
      {/* hero */}
      <section className="section hero" id="is">
        <h1>fm<span className="highlight">.is()</span></h1>
        <h2>Fouad Mannou</h2>
        <p className="comment">// Passionate Full-stack Developer</p>
        <p>fm<a href="#contact"><span className="highlight">.contact()</span></a></p>
      </section>

      {/* experiences */}

      {/* about */}

      <section className="section" id="about">
        <h2>fm<span className="highlight">.about()</span></h2>
        <p className="subtitle">I am a passionate Full-Stack Web & Mobile Developer.</p>
        <p className="subtitle">From Morocco and living in beautiful Tokyo.</p>
        <h3>Main skills and tools</h3>
        <ul>
          <li>
            <h4>Frontend Development</h4>
            <p>Javascript, CSS, SCSS, Tailwindcss, HTML,React, React Native, Next Js, Vue Js, Nuxt Js, Webpack</p>
          </li>
          <li>
            <h4>Backend Development</h4>
            <p>Django, Django-CMS, NodeJs, ASP .Net</p>
          </li>
          <li>
            <h4>Infrastructure</h4>
            <p>AWS (EC2, S3, ECR, ECS), DigitalOcean, Heroku</p>
          </li>
          <li>
            <h4>Other</h4>
            <p>Contentful API, Cloudinary, Algolia, Figma, Adobe XD</p>
          </li>
        </ul>
      </section>


      {/* contact */}
      <section className="section" id="contact">
        <h2>fm<span className="highlight">.contact()</span></h2>
        <p className="subtitle">Let's get in touch !</p>
        <form>
          <input type="text" name="name" id="name" placeholder="Name"/>
          <input type="text" name="email" id="email" placeholder="Email"/>
          <input type="text" name="subject" id="subject" placeholder="Subject"/>
          <textarea type="text"  name="message" id="message" placeholder="Message"/>
          <input type="submit" name="submit" id="submit" value="Send()"/>
        </form>
      </section>
    </main>
  )
}

export default IndexPage
