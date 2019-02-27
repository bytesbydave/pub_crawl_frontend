cd ..<img src="src/crawlr.png" width="200" height="150" title="Crawlr Logo">

---

# Crawlr

Crawlr is a Social Gathering Platform that allows users to create and join pub crawls in the area. This application uses the Yelp API to locate bars in the New York City area, with roll-outs to other geographical locations in the future. This project uses React on the frontend and Redux to handle forms and requests. Designs are done with Semantic UI and custom CSS. The purpose of this application was to gain familiarity with React and Redux and connecting it with a backend server. Authentication is done with Google OAuth. 

View the github for the backend [here](https://github.com/dvdlin214/pub-crawl-api)

View the main github [here](https://github.com/dvdlin214/pub_crawl)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development. 

### Installing

To get started with the frontend portion of the application, run the following to install on your local environment

In the terminal run:
```
git clone https://github.com/dvdlin214/pub_crawl_frontend.git
```

Install packages:
```
npm install
```

Change API location:
```
in the API directory, change the base URL to http://localhost:3001/
```

Change Yelp API
```
Get a Yelp API key from [here](https://www.yelp.com/developers)
Replace process.env.REACT_APP_YELP_API_KEY with the API Key
```

Start the application
```
npm start
```

## Built With

### NPM Packages
- Create-React-App
- React-Redux
- Axios
- Redux-form

### APIs
- Yelp API
- Rails API