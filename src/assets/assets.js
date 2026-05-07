// ============================================================
//  assets.js — Edit this file to update your portfolio content
// ============================================================

import aws from "./icons/amazonwebservices-original-wordmark.svg";
import apache from "./icons/apache-original.svg";
import docker from "./icons/docker-original.svg";
import figma from "./icons/figma-original.svg";
import firebase from "./icons/firebase-original.svg";
import flutter from "./icons/flutter-original.svg";
import github from "./icons/github-original.svg";
import grafana from "./icons/grafana-original.svg";
import illustrator from "./icons/illustrator-original.svg";
import javascript from "./icons/javascript-original.svg";
import kalilinux from "./icons/kalilinux-original.svg";
import linkedin from "./icons/linkedin-original.svg";
import linux from "./icons/linux-original.svg";
import photoshop from "./icons/photoshop-original.svg";
import php from "./icons/php-original.svg";
import mysql from "./icons/mysql-original.svg";
import postman from "./icons/postman-original.svg";
import python from "./icons/python-original.svg";
import react from "./icons/react-original.svg";
import splunk from "./icons/splunk-original-wordmark.svg";
import tailwind from "./icons/tailwindcss-original.svg";
import terraform from "./icons/terraform-original.svg";
import vercel from "./icons/vercel-original.svg";
import vscode from "./icons/vscode-original.svg";
import wireshark from "./icons/wireshark-original.svg";
import autopsy from "./icons/autopsy-original.svg";
import burpsuite from "./icons/burpsuite.svg";

// public images
import sideProfile from "./images/SideProfile.jpg";
import cardProfile from "./images/CardProfile.jpg";
import nikeWeb from "./images/nikeWeb.png"
import bankWeb from "./images/bankWeb.png"
import vhisingWeb from "./images/vhisingWeb.png"
import movieWeb from "./images/movieWeb.png"
import cctvWeb from "./images/cctvWeb.png"
import cctvAI from "./images/cctvAI.png"
import secureSignWeb from "./images/secureSignWeb.png"
import ctfWriteup from "./images/ctfWriteup.png"

export const profile = {
  name: "Ngurah Jaya Deva",
  title: "Cybersecurity & Full-Stack Developer",
  subtitle: "Building secure systems.",
  bio: "passionate about building secure, scalable web applications and protecting digital infrastructure. I bridge the gap between offensive security and modern web development.",
  location: "Jakarta, Indonesia",
  email: "jayadeva2121@gmail.com",
  phone: "+62 859-7780-3802",
  resumeUrl: "https://drive.google.com/file/d/1JbgaTWct04Y8L7P8q68SqNM4WUSCfeNX/view?usp=drive_link",
  cardProfileUrl: cardProfile,
  avatarUrl: sideProfile,
  avatarInitials: "JD",
};

export const socials = [
  { id: 1, label: "GitHub",   url: "https://github.com/RahJade21",    icon: "github"    },
  { id: 2, label: "LinkedIn", url: "https://www.linkedin.com/in/ngurah-jaya-deva-5b401528b/",  icon: "linkedin"  },
  { id: 3, label: "Instagram",url: "https://instagram.com/jayadeva.21", icon: "instagram" },
  { id: 4, label: "Email",    url: "mailto:jayadeva2121@gmail.com",icon: "mail"      },
];

export const education = [
  {
    id: 1,
    degree: "Bachelor of Computer Science",
    major: "Cybersecurity Concentration",
    institution: "President University",
    location: "Cikarang, Indonesia",
    period: "2023 – 2026",
    gpa: "3.85 / 4.00",
  },
  {
    id: 2,
    degree: "Vocational High School",
    major: "Multimedia",
    institution: "SMK Maitreyawira",
    location: "Batam, Indonesia",
    period: "2020 - 2023",
    gpa: 89,
  },
];

export const experience = [
  {
    id: 1,
    role: "IT Intern",
    company: "PT Telkom Indonesia",
    period: "Sep 2025 – Apr 2026",
    description: "gained knowledge in IoT architecture, including sensor systems, communication protocols, AI vision, and fundamental of AWS cloud infrastructure.",
    tags: ["Cloud", "Networking", "IoT", "AI"],
    companyUrl: "https://www.telkom.co.id/",
  },
  // {
  //   id: 2,
  //   role: "Freelance Web Developer",
  //   company: "Independent",
  //   period: "Jan 2025 – Present",
  //   description: "Delivered 5+ web projects as personal projects. Focused on secure, performant, and accessible web applications.",
  //   tags: ["React", "TailwindCSS", "Git"],
  //   companyUrl: null,
  // },
  {
    id: 3,
    role: "CTF Writeup",
    company: "President University CTF Team",
    period: "July 2025",
    description: "Developed and published writeup as a team for the President University CTF competition.",
    tags: ["Burp Suite", "Linux", "Autopsy", "Python"],
    companyUrl: null,
  },
  {
    id: 4,
    role: "Graphic Designer",
    company: "CV. Leo Printing",
    period: "June 2021 - Nov 2021",
    description: "Design marketing materials according to client needs and carry out print production.",
    tags: ["CorelDraw", "Adobe Illustrator", "Photoshop"],
    companyUrl: "https://share.google/QJ3RmidnfdClCMfzV",
  },
];

// Tech logos and colors for the Tech Stack section. Add more as needed!
export const techStack = [
  { id: 1, name: "React",         logo: react,      color: "#61DAFB" },
  { id: 2, name: "JavaScript",    logo: javascript, color: "#F7DF1E" },
  { id: 3, name: "Python",        logo: python,     color: "#3776AB" },
  { id: 4, name: "AWS",           logo: aws,        color: "#FF9900" },
  { id: 5, name: "Linux",         logo: linux,      color: "#FCC624" },
  { id: 6, name: "Docker",        logo: docker,     color: "#2496ED" },
  { id: 7, name: "MySQL",         logo: mysql,      color: "#F24E1E" },
  { id: 8, name: "Firebase",      logo: firebase,   color: "#FFCA28" },
  { id: 9, name: "Figma",         logo: figma,      color: "#02569B" },
  { id: 10, name: "GitHub",       logo: github,     color: "#181717" },
  { id: 11, name: "Grafana",      logo: grafana,    color: "#F46800" },
  { id: 12, name: "tailwindcss",  logo: tailwind,   color: "#38B2AC" },
  { id: 13, name: "Terraform",    logo: terraform,  color: "#623CE4" },
  { id: 14, name: "Postman",      logo: postman,    color: "#FF6C37" },
  { id: 15, name: "VSCode",       logo: vscode,     color: "#007ACC" },
  { id: 16, name: "Wireshark",    logo: wireshark,  color: "#1876C9" },
  { id: 17, name: "Autopsy",      logo: autopsy,    color: "#E54B4B" },
  { id: 18, name: "BurpSuite",    logo: burpsuite,  color: "#E54B4B" },
];

export const organizations = [
  {
    id: 1,
    name: "President University Developer Club – PUDC",
    role: "Division Leader of MTDD",
    period: "2024 – 2025",
    description: "Led division members in organizing events and developing technical content for the club.",
  },
  {
    id: 2,
    name: "President University Faculty Association - PUFA",
    role: "Member",
    period: "2023 – 2024",
    description: "Participated in organizing events and contributing to faculty initiatives.",
  },
  {
    id: 3,
    name: "President University Religion Club - KMHD",
    role: "Member",
    period: "2023 – 2024",
    description: "Participated in club activities and events.",
  },
];

export const projects = [
  {
    id: 1,
    title: "CCTV-AI",
    subtitle: "CCTV Dashboard AI-Powered",
    description: "AI-powered Network Video Recorder that streams RTSP/HLS cameras, runs YOLO object detection and OpenCLIP semantic search on captured frames, and serves a live dashboard — all containerized and ready to run with a single command.",
    tags: ["Python", "Security", "React", "AI", "YOLO", "OpenCLIP", "Docker"],
    image: cctvAI,
    repoUrl: null,
    liveUrl: "https://youtu.be/o7WPZumCoto",
    featured: true,
  },
  {
    id: 2,
    title: "SecureSignature",
    subtitle: "Digital Document Signing Platform",
    description: "Python-powered digital signature platform with end-to-end encryption, OAuth2 authentication, and document originality verification.",
    tags: ["Python", "Security", "Flask", "HTML+CSS"],
    image: secureSignWeb,
    repoUrl: "https://github.com/RahJade21/Securesign-App",
    liveUrl: null,
    featured: true,
  },
  {
    id: 3,
    title: "CCTVDashboard",
    subtitle: "CCTV Summary Dashboard",
    description: "Dashboard for summarizing and analyzing CCTV footage data with real-time monitoring capabilities.",
    tags: ["AWS", "Node.js", "PostgreSQL", "TailwindCSS"],
    image: cctvWeb,
    repoUrl: "https://github.com/RahJade21/cctv-dashboard",
    liveUrl: "https://d1p59d8ls16eh.cloudfront.net",
    featured: true,
  },
  {
    id: 4,
    title: "MovieTicketingApp",
    subtitle: "Movie Ticket Booking Platform",
    description: "Full-stack web application for booking movie tickets with user authentication, payment processing, and seat selection.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: movieWeb,
    repoUrl: "https://github.com/RahJade21/Movie-ticketing",
    liveUrl: null,
    featured: true,
  },
  {
    id: 5,
    title: "VoiceGuard",
    subtitle: "Vhishing Audio Detector",
    description: "Machine learning model trained on 1M+ URLs to detect phishing in real-time. Browser extension + REST API with 97.3% accuracy.",
    tags: ["Python", "Scikit-learn", "Flask"],
    image: vhisingWeb,
    repoUrl: "https://github.com/RahJade21/Vishing-detector",
    liveUrl: null,
    featured: true,
  },
  {
    id: 6,
    title: "NikePage",
    subtitle: "Nike Product Landing Page",
    description: "Responsive landing page for Nike products built with React and Tailwind CSS.",
    tags: ["React", "TailwindCSS"],
    image: nikeWeb,
    repoUrl: "https://github.com/RahJade21/Nike-Website",
    liveUrl: "https://d30dc4etpy44sm.cloudfront.net/",
    featured: false,
  },
  {
    id: 7,
    title: "BankModern",
    subtitle: "Simple Bank Landing Page",
    description: "Modern landing page for a fictional bank built with React and Tailwind CSS.",
    tags: ["React", "TailwindCSS"],
    image: bankWeb,
    repoUrl: "https://github.com/RahJade21/bankModern_app",
    liveUrl: "https://d1lxosqh35hd1z.cloudfront.net/",
    featured: false,
  },
  {
    id: 8,
    title: "CTF Writeups",
    subtitle: "Capture The Flag Solutions",
    description: "Public repository of CTF writeups university level covering web vuln, crypto, forensics, and osint.",
    tags: ["CTF", "Security", "Forensic", "Web Exploitation"],
    image: ctfWriteup,
    repoUrl: null,
    liveUrl: "https://drive.google.com/file/d/1zSA1xgfwpsAwrQCU18LZkZspgAbhzMll/view?usp=drive_link",
    featured: false,
  },
];

export const certifications = [
  { 
    id: 1, 
    name: "Certified Cloud Practitioner",                  
    issuer: "Amazon Web Services",  
    year: "2026", 
    link: "https://www.credly.com/badges/bba46b91-3a1d-43c8-9bbc-26890c4a9436/public_url"
  },
  { 
    id: 2, 
    name: "Certified Cybersecurity Educator Professional", 
    issuer: "Redteamleaders",              
    year: "2025",
    link: "https://courses.redteamleaders.com/exam-completion/518c5daccf8b2ca5"
  },
  { 
    id: 3, 
    name: "PDP dan Kebijarakan Privasi",                   
    issuer: "Udemy",                
    year: "2025",
    link: "https://www.udemy.com/certificate/UC-cd3c32de-7b53-4e41-a162-c0583523f055/" 
  },
  // { 
  //   id: 4, 
  //   name: "Certified Network Security Professional",       
  //   issuer: "Redteamleaders",       
  //   year: "2025",
  //   link: null 
  // },
];
