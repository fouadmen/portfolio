import * as React from "react"
import "../styles/styles.scss"
import Header from '../components/header'

const IndexPage = () => {
  const data = [
    {
      id:"dwdw343d33dx3",
      company : "Funkycorp Ltd",
      position:"Fullstack Engineer",
      period : "April 2020 - Present",
      tasks : [
        "Improved governmental tourism websites loading speed by an average of 20% by leveraging browser and server caching, optimizing staticfiles and boosting Django server response times.",
        "Integrated UI designs and constructed solid websites utilizing HTML, CSS, VueJs, and Django within an agile development team, and in close collaboration with designers.",
        "Designed and developed backend automated solutions for CMS operations.",
        "Successfully migrated multiple projects from Ansible to Dockerized structure."
      ]
    },
    {
      id:"d866w3438673dx3",
      company : "Passiv Energy Japan",
      position:"Software Engineer Intern",
      period : "Septembre 2019 - February 2020",
      tasks : [
        "Developed the whole real time and event based system architecture from scratch for air conditioning passive controller.",
        "Developed a mobile application to control and monitor the air condition in React Native, as well as designing and developing RESTful API with NodeJS on the backend and data modelling.",
        "Optimized ESP32 firmware."
      ]
    },
    {
      id:"dwvvhjk88733dx3",
      company : "IBITEK France",
      position:"Software Engineer Intern",
      period : "February 2018 - August 2018 | February 2019 - July 2019",
      tasks : [
        "Contributed to the development of Sales Management Software's backend and frontend in ASP .Net.",
        "Contributed to the development and deployment of a “Technical Documents” management software.",
        "Meeting with clients for future deployments and to define their needs.",
        "Deployed the software solutions on the clients' factories in France, Morocco and Algeria."
      ]
    }
  ]

  const companies = data.map(d =>( {id: d.id, company:  d.company}))

  const [currentCompany, setcurrentCompany] = React.useState(0)

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
      <section className="section section__experiences" id="experience">
        <h2>fm<span className="highlight">.experiences()</span></h2>
        <div className="expriences__wrapper">
          <div className="tab">
              {
                companies.map((c, k)=>(<div onClick={()=>setcurrentCompany(k)} className={`tab__item ${k===currentCompany ? "tab__item__active" : ""}`}>{c.company}</div>))
              }
          </div>
          <div className="experience">
            <h3 className="company_name">{data[currentCompany].position} <span className="highlight">@ {data[currentCompany].company}</span></h3>
            <p className="period">{data[currentCompany].period}</p>
            <ul className="tasks">
              {
                data[currentCompany].tasks.map((t)=>(<li>{t}</li>))
              }
            </ul>
          </div>
        </div>
      </section>

      <section className="section section__works" id="works">
        <h2>fm<span className="highlight">.works("<span className="parameter">Latest</span>")</span></h2>
        <p className="comment">// Projects I have been working on recently</p>
        {/* <div className="works__wrapper">
          
        </div> */}
        <div className="works__item">
          <img className="project_snapshot" src="https://unsplash.com/photos/pxax5WuM7eY/download?force=true&w=640"  alt="lesthy"/>
          <div className="works__item__content_wrapper">
            <h3 className="project_title">Lesthy</h3>
            <p className="project_description">
              Lesthy is a platform which will take beauty services in Morocco to a whole new level.
              Lesthy allows clients and salon owners to seamlessly book and orginize their reservations. 
            </p>
            <ul className="tech_stack">
              <li>React Native</li>
              <li>React</li>
              <li>NodeJS</li>
              <li>Typescript</li>
              <li>Postgresql</li>
              <li>Redis</li>
              <li>Docker</li>
              <li>EC2</li>
            </ul>
            <div className="links">
              <a className="link external_link" href="#" target="_blank"></a>
            </div>
          </div>
        </div>
      </section>


      {/* about */}

      <section className="section" id="about">
        <h2>fm<span className="highlight">.about()</span></h2>
        <p className="subtitle">I am a passionate Full-Stack Web & Mobile Developer.</p>
        <p className="subtitle">From Morocco 🇲🇦 and living in beautiful Tokyo 🇯🇵.</p>
        <h3>Main skills and tools</h3>
        <ul className="skills">
          <li>
            <h4 className="skils__category">Frontend Development</h4>
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
