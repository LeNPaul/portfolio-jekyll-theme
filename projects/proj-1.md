---
layout: post
title: 'random_song_exe'
---
A Twitter bot built with Python3 that posts a random song from Spotify every
hour. By using separate threads I was also able to build a functional menu, to
change constants and check the status for the bot.

Because the Spotify doesn't have an API endpoint for a random song, my bot will
search Spotify for tracks using a 'word of the day' and pick a random song from
the list of returned objects. This allows me to have better control over what
songs are posted, though a potential feature may be picking a random word from
a dictionary to perform the search.

Feel free to visit [@random_song_exe](https://www.twitter.com/random_song_exe)
on twitter. You can find the source code [here](https://github.com/zobiejrz/random_song_exe).

{% include image.html url="https://www.twitter.com/random_song_exe" image="projects/proj-1/TwitterCapture.jpg" text="Visit" %}
