# Developer-Profile-Generator

Create a command-line application that dynamically generates a PDF profile from a GitHub username. The application will be invoked with the following command:

```sh
npm install
npm install axios
npm install html-pdf
node index.js
```

The user will be prompted for a favorite color, which will be used as the background color for cards.

The PDF will be populated with the following:

* Profile image
* User name
* Links to the following:
  * User location via Google Maps
  * User GitHub profile
  * User blog
* User bio
* Number of public repositories
* Number of followers
* Number of GitHub stars
* Number of users following


```
AS A product manager

I WANT a developer profile generator

SO THAT I can easily prepare reports for stakeholders
```

My initial go at this project was a bit of horrible attempt. I had to reach out for help at a much later date in order to complete this assignment. 
BIG BIG BIG thanks to fellow classmate Colin for Walking me through this to give me a better understanding of the core concepts and being able to see it done!