import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faImage, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import Carousel, { Modal, ModalGateway } from 'react-images';

interface Props {
  title: string,
  description: string,
  images: any[],
  tools?: string[],
  demo?: string,
  source?: string,
}

function importAll(r: any) {
  return r.keys().map(r);
}

const PreviousWork = () => {
  console.log(importAll(
    require.context(
      "../assets/img/works/ett-dashboard",
      false,
      /\.(png|jpe?g|svg)$/
    )))
  const works = [
    {
      title: "ETT Dashboard",
      tools: ["React", "TypeScript", "MaterialUI", "SWR"],
      type: "Web App",
      description: `This was my Bachelor graduation design project. It was a dashboard created for <a href="https://esportsteamtwente.nl/" target=_blank>Esports Team Twente</a>, who wanted a centralized dashboard where you could upload replay files from game, run them through a data analysis pipeline, and store and display statistics from matches. We created the frontend, backend, API and database implementation to solve their use case.`,
      source: "",
      images: importAll(
        require.context(
          "../assets/img/works/ett-dashboard",
          false,
          /\.(png|jpe?g|svg)$/
        )
      )
    },
    {
      title: "There Is More Than One Way To Zen Your Python",
      tools: [],
      type: "Research paper",
      description: `This was my Bachelor thesis project, which was then partially rewritten and submitted to SPLASH conference on Software Language Engineering, and subsequently published. This paper explores the concept of "pythonicity" and the so-called "pythonic-idioms" -- in other words, what makes good Python code good. We conducted a literature review, detected uses of the idioms in open source code, and commented on idiom usage trends over time. One of the products of this research is my Pythonic idiom catalog, which can be found <a href="https://slimshadyiam.github.io/ZenYourPython/" target="_blank">here</a>, and the full paper can be found <a href="https://dl.acm.org/doi/10.1145/3486608.3486909" target="_blank">here</a>.`,
      source: "",
      images: importAll(
        require.context(
          "../assets/img/works/zen-your-python",
          false,
          /\.(png|jpe?g|svg)$/
        )
      )
    },
    {
      title: "Bloo (GIR)",
      tools: ["Python", "pycord", "MongoDB"],
      type: "Discord bot",
      description: `A Discord bot for the r/Jailbreak Discord community, a server with over 60,000 members. This bot handles moderation commands, as well as message filtering, an XP system and various other utilities for users and moderators.`,
      source: "https://github.com/SlimShadyIAm/BottyMcBotface",
      images: importAll(
        require.context(
          "../assets/img/works/gir",
          false,
          /\.(png|jpe?g|svg)$/
        )
      )
    },
    {
      title: "EZ-Sign",
      tools: ["VueJS", "Figma", "Bulma"],
      description: `This web app was created as a high fidelity proof of concept, as a final project for my human-computer interaction course. This is a non-functional prototype.<br>The concept was designed to help sign language users interact with non-sign language users in their daily lives by building a smart sign language translation app by using the camera on your phone.`,
      demo: "https://ezsign.slim.rocks/",
      source: "https://github.com/SlimShadyIAm/ezsign",
      images: importAll(
        require.context(
          "../assets/img/works/ezsign",
          false,
          /\.(png|jpe?g|svg)$/
        )
      ),
    },
    {
      title: "ApexTweaks",
      tools: ["Jekyll", "Custom CSS", "Flexbox"],
      description: `A portfolio/showcase for a developer group that creates popular jailbreak tweaks.`,
      demo: "https://apextweaks.com/",
      images: importAll(
        require.context(
          "../assets/img/works/apex",
          false,
          /\.(png|jpe?g|svg)$/
        )
      ),
    },
    {
      title: "gm!streaks",
      tools: ["Python", "discord.py", "MariaDB"],
      description: `A Snapchat inspired bot for Discord, to send your friends memes and start streaks.\nUsers can send each other "snaps", similar to Snapchat, and each user must send each other one snap within every 24 hour window.\nEach snap adds one point to each user's score, and every day a streak is maintained you get a fire badge.\n\nWatch the demo to learn more!`,
      demo:
        "https://twitter.com/slimshadydev/status/1292915536628678657",
      images: importAll(
        require.context(
          "../assets/img/works/gmstreaks",
          false,
          /\.(png|jpe?g|svg)$/
        )
      ),
    },
    {
      title: "Releasy McReleaseface",
      tools: ["Python", "discord.py", "sqlite3", "RSS feeds"],
      description: `A Discord bot which watches Apple's release feed for new updates to iOS, iPadOS, macOS, watchOS and tvOS.\n\nServer managers have the ability to subscribe to updates from a device and choose a channel for updates to be posted to. Additionally, you can set a role to ping for each OS type, when an update is posted.`,
      demo:
        "https://twitter.com/slimshadydev/status/1291014460400861184",
      source:
        "https://github.com/SlimShadyIAm/ReleasyMcReleaseface",
      images: importAll(
        require.context(
          "../assets/img/works/releasy",
          false,
          /\.(png|jpe?g|svg)$/
        )
      ),
    },
    {
      title: "Runner Assist Dashboard",
      tools: [
        "React",
        "Figma",
        "MaterializeCSS",
        "Jersey",
        "Java servlets",
      ],
      description: `This project was tasked to us as a final project for the Data & Information course. This site is a dashboard to display data collected from running sensors they developed by a local company. We created the frontend in React, and API and backend in Jeresy and Java servlets.</i>`,
      demo: "",
      source:
        "https://github.com/SlimShadyIAm/runner-assist-frontend/",
      images: importAll(
        require.context(
          "../assets/img/works/trimm",
          false,
          /\.(png|jpe?g|svg)$/
        )
      ),
    },
    {
      title: "TalkBoard",
      tools: ["VueJS", "Gridsome", "Bulma", "Github actions"],
      description: `A website I created for the host of the TalkBoard podcast, Aaron, a prominent member of the iOS jailbreak community. The podcast invites the most talented developers, from the jailbreaking scene and the general tech industry, for a candid conversation about their passion for their work.`,
      demo: "https://talkboard.live/",
      source:
        "https://github.com/SlimShadyIAm/talkboard-gridsome",
      images: importAll(
        require.context(
          "../assets/img/works/talkboard",
          false,
          /\.(png|jpe?g|svg)$/
        )
      ),
    },
    {
      title: "AussieJump",
      tools: [
        "Electron",
        "HTML canvas",
        "Javascript for game",
        "raspberry pi system I/O",
      ],
      description: `This was a game written as a final group project for my Computer Systems course. We used Electron to make the game and an FPGA+accelerometer to add motion controls.<br>Aussie jump is a sidescroller game inspired by Flappy Bird and Google's T-Rex game on Chrome, featuring an Australian theme. Jump to avoid the obstacles. Click the link to watch our demo video!`,
      demo: "https://youtu.be/Kcm_Yac7x3U",
      source: "https://github.com/SlimShadyIAm/AussieJump",
      images: importAll(
        require.context(
          "../assets/img/works/aussiejump",
          false,
          /\.(png|jpe?g|svg)$/
        )
      ),
    },
    // {
    // 	id: uuid.v4(),
    // 	title: "Material Admin",
    // 	tools: ["Static HTML", "MaterializeCSS"],
    // 	description: `An adminisrative panel template based on the <a href="http://materializecss.com">materializecss.com</a> CSS framework. This template is currently in use as the moderator control panel at <a href="https://opdessertstorm.com">opdessertstorm.com</a>, a game with over <strong>32,000 accounts</strong>. This template was also used in my Runner Assist project, and it was adapted for <a href="https://zira.ovh">Zira's</a> dashboard <a href="https://projects.aamirfarooq.dev/zira/">(demo here</a>, screenshots in gallery).`,
    // 	demo: "https://projects.aamirfarooq.dev/material-admin/",
    // 	source: "https://github.com/SlimShadyIAm/material-admin/",
    // 	images: importAll(
    // 		require.context(
    // 			"../assets/img/works/material-admin",
    // 			false,
    // 			/\.(png|jpe?g|svg)$/
    // 		)
    // 	),
    // },
    {
      title: "Froebel's Model UN 2016",
      tools: ["Static HTML", "Bootstrap"],
      description: `This website was created to be used as the informational site for the Model UN of Froebel's International School, the high school I attended. A version of this is still being used today: <a href="https://froebels.edu.pk/fromun">froebels.edu.pk/fromun</a>.`,
      demo: "https://projects.aamirfarooq.dev/fromun-site",
      source: "https://github.com/SlimShadyIAm/fromun-site",
      images: importAll(
        require.context(
          "../assets/img/works/fromun",
          false,
          /\.(png|jpe?g|svg)$/
        )
      ),
    },
    {
      title: "This website!",
      tools: ["React", "TailwindCSS"],
      description: `This website was written by me, using the frontend JavaScript framework <a href='https://reactjs.org'>React.js</a>, and <a href="https://tailwindcss.com">TailwindCSS</a> as the CSS framework.`,
      demo: "https://aamirfarooq.dev",
      source: "https://github.com/SlimShadyIAm/portfolio-react/",
      images: importAll(
        require.context(
          "../assets/img/works/portfolio",
          false,
          /\.(png|jpe?g|svg)$/
        )
      ),
    },
  ]

  return (
    <div className="container mt-8 mb-16">
      <div className="font-bold text-gray-800 text-3xl mb-3">Previous Work</div>
      <div className="space-y-8">
        {works.map((work, index) => {
          return (
            <Work title={work.title} description={work.description} images={work.images} tools={work.tools} source={work.source} demo={work.demo} key={index} />
          )
        })}
      </div>
    </div>
  )
}

const Work: React.FC<Props> = ({ title, description, images, tools, source, demo }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = () => {
    setCurrentImage(1);
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <div className="custom-shadow">
      <div className="bg-slim-blue px-4 py-2 text-white font-mono text-sm font-normal uppercase rounded-t-sm">{title}</div>
      <div className="pt-4 pb-4 flex-row grid grid-cols-12 gap-4 px-3 md:px-0">
        <div className="px-4 flex justify-center items-center flex-col col-span-12 md:col-span-5">
          <img src={images[0]} style={{ maxHeight: "250px" }} loading="lazy" />
        </div>
        <div className="px-4 flex flex-col col-span-12 md:col-span-7">
          <div className="grow mb-2 description" dangerouslySetInnerHTML={{ __html: description }} />
          {!tools ? "" : (
            <p className='my-1 space-y-1'>
              {tools.map((tool, index) => {
                return (
                  <span className="px-2 py-1 mx-0.5 text-white bg-slim-blue rounded text-xs font-mono uppercase inline-block whitespace-nowrap" key={index}>{tool}</span>
                )
              })
              }
            </p>
          )}
          {images.length > 1 || source || demo ? (
            <div className='flex flex-col sm:flex-row my-1 space-y-1 sm:space-y-0 sm:space-x-1'>
              {images.length == 1 ? "" : (
                <>
                  <a className="px-6 py-2 text-white bg-slim-blue hover:bg-blue-800 hover:text-blue-200 transition-colors hover:cursor-pointer rounded text-md overflow-hidden whitespace-nowrap sm:grow md:grow-0 text-center" onClick={openLightbox}><FontAwesomeIcon icon={faImage} className='mr-2' /> Gallery</a>
                  <ModalGateway>
                    {viewerIsOpen ? (
                      <Modal onClose={closeLightbox}>
                        <Carousel
                          currentIndex={currentImage}
                          views={images.map(x => ({
                            source: x,
                          }))}
                        />
                      </Modal>
                    ) : null}
                  </ModalGateway>
                </>
              )}
              {!source ? "" : (
                <a href={source} className="px-6 py-2 text-white bg-slim-blue hover:bg-blue-800 hover:text-blue-200 transition-colors hover:cursor-pointer rounded text-md whitespace-nowrap sm:grow md:grow-0 text-center"><FontAwesomeIcon icon={faGithub} className='mr-2' /> GitHub</a>
              )}
              {!demo ? "" : (
                <a href={source} className="px-6 py-2 text-white bg-slim-blue hover:bg-blue-800 hover:text-blue-200 transition-colors hover:cursor-pointer rounded text-md whitespace-nowrap sm:grow md:grow-0 text-center"><FontAwesomeIcon icon={faSearch} className='mr-2' /> Demo</a>
              )}
            </div>
          ) : ""}
        </div>
      </div>
    </div>
  )
}

export default PreviousWork
