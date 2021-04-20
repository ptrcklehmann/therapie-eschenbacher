import React from "react"
import { DiGithubBadge } from "react-icons/di"
import { FaTwitter, FaLinkedin } from "react-icons/fa"

export const mainMenuItems = [
  {
    path: "/",
    title: "Startseite",
  },
  {
    path: "/angebot",
    title: "Angebot",
  },
  {
    path: "/systemisches-denken",
    title: "Systemisches Denken",
  },
  {
    path: "/termine",
    title: "Termine & Hoonorare",
  },
  {
    path: "/zur-person",
    title: "Zur Person",
  },
  {
    path: "/kontakt",
    title: "Kontakt & Impressum",
  },
]

export const socialMenuItems = [
  {
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/morgan-baker-developer-inverness",
    name: "LinkedIn",
  },
  {
    icon: <FaTwitter />,
    url: "https://www.twitter.com",
    name: "Twitter",
  },
  {
    icon: <DiGithubBadge />,
    url: "https://github.com/bagseye",
    name: "GitHub",
  },
]

export const footerMenuItems = [
  {
    path: "/privacy",
    title: "privacy",
  },
  {
    path: "/cookies",
    title: "cookies",
  },
]
