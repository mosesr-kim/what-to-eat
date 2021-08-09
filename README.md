# what to eat?

A web application for people that can't decide on what to eat and want to have a restaurant chosen for them

![readme](https://user-images.githubusercontent.com/82472092/128783434-9bcdf429-1288-4554-bdfb-9b0e60170636.gif)

## Live Demo

Try [what to eat?](https://the-what-to-eat-app.herokuapp.com/) for yourself!

## Motive

Have you ever had the problem of figuring out what to eat? I know I have whenever I went out with my friends. On a daily basis, I use the Yelp app to find restaurants near me but it was missing one thing, picking a restaurant for you. I combined my favorite app with an extra feature, a randomizer. I wanted to create a collection of restaurants that I searched for and then have one chosen for you in an instant. Less time debating is more time for coding 😉

## Technologies

* HTML5
* CSS3
* JavaScript
* React
* Fetch
* Node
* Express
* PostgreSQL
* DbDesigner
* Webpack
* Babel
* Bootstrap
* Yelp API
* Google Maps API
* Heroku

## Current Features

- User can search for restaurants by name

- User can search for restaurants by geolocation

- User can view the details of a search result

- User can create a Collection (favs, romantic, family, etc)

- User can add a restaurant to a Collection

- User can view their Collections

- User can get a random restaurant from a Collection

- User can see the distance to a restaurant on a map 

## Upcoming Features

- User can sign up

- User can sign in

## Getting Started

1. Clone the repository.

    ```shell
    git clone https://github.com/mosesr-kim/what-to-eat.git
    cd what-to-eat
    ```

1. Install all dependencies with NPM.

    ```shell
    npm install
    ```

1. Create a new database.

    ```shell
    createdb whatToEat
    ```

1. Import the provided schema.sql and data.sql from the command line.

    ```shell
    npm run db:import
    ```

1. Start the project. Once started you can view the application by opening http://localhost:3000 in your browser.

    ```shell
    npm run dev
    ```
