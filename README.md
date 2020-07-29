# Vdoubleu's Rubik's Cube Timer

This is the client for my cube timer.

The client is built using React. The Recharts library was used for the graph and it calls a Flask server with MongoDB to store and fetch data.

## How to use
Press and hold the space bar to ready the timer. Once the timer turns green, you can let go to start it. You can hit the spacebar again to stop it. It will automatically store your data under whatever profile you are using. By default, the profile is set to "defaultUser", be sure to change this to keep your times seperate. If you are on mobile, press and hold the the timer to start and tap to stop it.

Anyone is free to use and contribute to this however they want. Just submit a PR with whatever feature you would like. 

There's still a few features that I would like to add:
 - exporting times to csv
 - allow users to see individual times in a giant chart or graph
 - allow users to pick which specific times in their history they would like to remove
 - solve statistics
 - curve of best fit
