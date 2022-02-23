# Peanut Technical Challenge

![CleanShot 2022-02-23 at 15 56 28](https://user-images.githubusercontent.com/22414962/155344640-f4456e60-d2ee-4f8e-8113-449c67233828.jpg)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Some of the libraries I used are:

-   `axios` for API calls
-   `he` to parse some of the API service responses that were passed as encoded HTML entities (i.e. `Schindler&aposList`)

For the sake of writing this app fast I decided to use [Open Props](https://open-props.style/) which is a collection of ready-to-use CSS variables and utilities (like a built-in light/dark theme), but I didn't use anything that I couldn't be able to write myself :)

## App Structure

The app consist of four main parts:

1. routes
2. components
3. hooks
4. api

I put most of the logic in three custom hooks, `useMovies`, `useMovie` and `useAuth`.

## Nice to have

There are a couple of things that I didn't add, but I would have liked to have:

1. Redux, in order to handle more complex state changes. I used the Context API, but I would have liked to expand the state management to include which movie the user liked during the session and maybe display those with a different graphic
2. An image caching mechanism of some sort in order to preserve images between renders and maybe give each movie its own image
3. A search component to filter out movies
