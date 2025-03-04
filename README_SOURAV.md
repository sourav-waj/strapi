# Headless CMS Integration with Strapi

This project integrates Strapi as a headless CMS with a front-end built using HTML, CSS, and JavaScript. It dynamically fetches and displays Pokemon data.

---

## Setup & Installation  

### 1. Prerequisites  
Ensure you have Node.js and npm installed:  

### 2. Install Strapi
Create a new Strapi project:

npx create-strapi-app@latest my-strapi-app --quickstart
cd my-strapi-app

after that run these two commands to open Strapi in your browser
npm run develop
Once running, visit:
http://localhost:1337/admin


## Setting Up the API

### 1. Create Pokemon Collection

Go to Content-Type Builder → Click Create new collection type.
Name it Pokemons and add:
Name (Text)
Type (Text)
Image (Media)
Click Save


### 2. Enable API Access

In Strapi, go to Settings → API tokens and create/enable the the pokemonDescription API and copy the API because you cannot get the API tokken again

## run STRAPI locally


cd my-strapi-app
npm run develop

Start the Front-End
Open index.html in a browser

## For Testing

Visit: http://localhost:1337/api/Pokemons?populate=* and ensure Pokemon data is returned.

or

Open the HTML page and pokemon cards should appear.



## Errors that I faced during this project

### API Data Not Showing 

When the API data(images)  was not appearing on the website/http://localhost:1337/api/Pokemons
I used populate=* in API requests to fetch images. Although that does not solved the problem fully but I was able to get the image database that meant, it was fetching the image urls successfully from strapi.

### Netlify

I tried netlify to run the webpage live when I was working with notion  but after following the instructions, it showed that the link is broken so I have to shift from Notion to Strapi

### Tailwind CSS not working

While trying to run tailwind CSS framework, it showed the error below everytime. I tried re-installing it and cleared cache too but still that did not helped so I just inserted the tailwind css link in header section of HTML and it solved the problem

Apart that there were some minor errors which I was able to solve by taking insprations from MDN docs, stack overflow and youtube tutorials.

## Problem not solved

While working, I was not able to make the images show on the frontend by fethching data from Strapi even after trying debugging.

## Dependencies

Node.js
Strapi
Tailwind CSS
Live Server