# MSA-Devops-2020-Webapp

This is a simple movie search web app using Microsoft build/release pipelines
<br><br> 
The pipelines are used to deploy the ReactJS app to [THIS website](https://msa-2020-devops-james.azurewebsites.net/), powered by Microsoft azure
<br>This web app allows the user to search any movie they want and show the titles, ratings and plots of the movies.
<br> Once the user clicks into the movie cards, it will open a new tab which shows the results on [The Movie DataBase](https://www.themoviedb.org/).
<br> The original idea is to make a pop-up dialog for movie details but it is aborted due to the time constraint.

## TimeStamp
### 19/09/2020

The first update. Built the basic search box and content cards. Next step would be add category, improve the content card to show rating or maybe make it redict to a new page. Also add page number button at the bottom would be good.

### 21/09/2020

FINALLY made the API key invisable in the deployed website. <br>
It turned out the .env variable will not be passed through with the deployed website. Wrote a script to pass the key into the .env

### 25/09/2020

Added some features working on final design.
