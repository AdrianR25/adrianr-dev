---
slug: "r6checker"
title: "R6Checker.net"
description: "Was a web app to check if a Rainbow Six: Siege player is cheating.
  It used Angular on the frontend, Django on the backend and was deployed on a traditional hosting and Heroku respectively."
thumbnailUrl: "test"
featured: true
demoUrl: "https://r6checker.adrianr.dev/"
codeUrl: "https://github.com/AdrianR25/r6checker-web/tree/feature/demo"
launchDate: 2019-07-07
eolDate: 2020-07-07
learnt:
  - "REST (methods, best practices, headers, etc)"
  - "API documentation"
  - "Use of devtools"
  - "Responsiveness (by using media queries)"
  - "Deploying a static site in production (including using .htaccess and robots.txt)"
technologies:
  - "angular"
---

## Introduction
r6checker.net was a website aimed at Rainbow Six: Siege players that let the user see if another player could be potentially cheating based on their stats. It was different from other stat tracking websites in two ways:
 * It provided a simple interface that had only the most important stats
 * It used an algorithm to analize that data and return a probability percentage of a profile being a cheater
## Technologies
For the frontend, I used Angular as a Javascript framework and bootstrap for styles. More specifically, I used a bootswatch theme that was very close to my design so I had less work to do to customize it.

As for the backend goes, I used Django, a web framework for Python because I already had a basic understanding of Python.

When it came to deploy the site, I used the free tier of Heroku to deploy the backend service and a traditional hosting service to deploy the Angular app. There was no CI/CD involved.