# americas-best-sports-cities-viz-D3.js
Comparison of wins and championships in professional sports cities 

https://nameless-meadow-33807.herokuapp.com/ --> React version, no interactive elements (aka transitions and mouseover tooltips)

http://hello-luke-987.appspot.com/sportcities  --> D3-only, no React


Project Summary -

Here we map the success of sports teams in several of the largest markets for professional sports in the United States from 1960 - 2015. We show results from the 4 major men's professional sports leagues: Major League Baseball, National Basketball Association, National Hockey League and the National Football League. For each year we show three criteria: Win percentage of the teams in a city, teams advancing to the conference or league finals in a season (top 4 finish), and championships won in a season. I created the data set using web scraping with Python.

Trends -

1. Boston is a sports power with multiple eras of success:
 From 1960 - 1976 Boston won 13 championships in 17 seasons. From 1976 - 1988 Boston enjoyed 9 seasons out of 13 with .600 winning percentage or above while adding 5 more championships. Following a lull in the 1990's, starting in 2001 Boston has finished every season above .500, 8 of 14 seasons above .600, and won 8 championships.

2. Best single seasons:
 Philadelphia in 1980 placed 4 teams in the Conference Finals, won a championship and finished with winning pct just below .700. Pittsburgh in 1979 and Boston in 2004 are the only cities to win 2 championships in a single season, and both cities finished with winning percentage above .600. Altanta in 1998 finished with winning percentage above .700 and placed two teams in the conference finals. Cities have finished with 3 teams in the conference finals just 7 times: Philadelphia achieved this feat in 1977, 1978, 1980 (4 teams) and 2008, Boston achieved this feat in 1988 and 2013, Chicago achieved the feat in 1989 (interestingly  with just 1 team finishing with a record above .500 and overall city winning percentage near .430, making this season a notable anomly in the visualization.)

3. Losing Streaks:
 Cleveland is famous for its long drought of sports championships and success. Cleveland has not won a championship since 1964. Cleveland had 6 consecutive seasons with winning percentage below .500 and no conference final appearances from 2010 - 2015 and 8 consecutive seasons with winning percentage below .500 and no conference final appearances from 1999 to 2006. Since 1999 7 of 16 seasons have also resulted in winning percentges below .400. Chicago on two occassions had 4 consecutive seasons with winning percentage below .500 and no conference finals appearances, 1978-1981 and 1999-2002.

4. Championship Droughts:
Washington has not had a conference final appearance in any sport since 1998. Atlanta has won only 1 championship since the city started playing professional sports in 1966 (Atlanta Braves in 1995). Philadelphia has won just one championship since 1983 (Philadelphia Phillies in 2008).

5. Worst to First:
On several occasions cities went from worst to best (or nearly so) over a short period of years with continuous improvement. Pittsburgh accomplished this two times in 1969 - 1975 and 1986 - 1990, and almost again in 2006 - 2008. Philadelphia accomplished this in 1972 - 1980 and 1998 - 2001. Cleveland accomplished this in 2003 - 2007. 2003 - 2007 coincided with the arrival of Lebron James to the Cleveland Cavaliers in 2003, when James left to join the Miami Heat following the 2009 season, Cleveland quickly regressed to the worst city again.

6. First to Worst:
On several less happy occasions cities went from best to worst over consecutive years of continuous decline. Cleveland accomlished this twice in 1965 - 1971 and 2007 - 2011 (following the departure of Lebron James and prior to James's later return in 2014 for the 2014-2015 season). Atlanta accomplished this in 1998 - 2000.


7. Conclusion:
 This visualization shows that success is often highly variable year to year. In general, strong sports cities like Boston, Philadelphia and Pittsburgh finish ahead of weak sports cities like Cleveland, Atlanta and Washington. Some cities enjoy sustained runs of success (Boston 2001 - 2015, Philadlephia 1974 - 1985 and 2001-2004, Pittsburgh 1972 - 1979) and others sustained runs of failure (Cleveland 1977-1985 and 1999 - 2015, Washington 1993 - 2004, Philadelphia 1968-1972). In conclusion, I hope this graphic helps readers visualize success of sports cities as the combination of sustained winning accross multiple teams through the years and frequently advancing to conference finals and winning championships.


Design -

I used a time series on the x axis to show the history of sports results each year. On the y axis I charted winning percentage for each season. The points in the scater plot represent the mean win percentage of teams in the same city, since sports fans often decide to support the teams representing the place where they live and the focus of this project is sports towns. To calculate the mean win percentage, I took the sum of win percentage for each team and divided by the number of teams. Had I calculated mean using total wins and total losses for teams in a city, more emphasis would be placed on success in baseball which plays 162 games per season (since 1962), over basketball (82 games since 1968) hockey (82 games since 1996, 70 games in 1960 with multiple incremental increases) and football (16 since 1972, 14 games since 1961). I used size of the circles to show how many teams from the city advanced to the conference/league finals. Each league has increased the number of teams that can qualify for the playoffs, so it would not be fair to say qualifying for the playoffs now and in the past are equal accomplishments. I decided a top 4 finish was a universal mark of success in each sport for all the years in the infographic. The only exception is Major League Baseball, where only the winner of the American League and National League advanced to the World Series until 1969. Finall, to show championships, I colored the circle orange to show 1 championship, and red to show 2 championships. Black shows no championships won and no city has had 3 teams win championships in a season. I created a key at the top of the visualization to explain the size and color elements of the circles.

To make the scatter plot easier to follow, I added line series for each city that connects the points accross the time series. When all line series are presented at once, the visualization is over plotted, I made a dynamic key that allows the user to add series one by one. The line series are intended to allow the user to examine one city or compare 2-3 cities. Showing more cities will result in overplotting, and allowing the user to select just one city series at a time (a common design I have seen) in this case would not allow them to compare their city with a second, for example a rival town.

I used tool tips to show specific information about each team's record (win percentage, top 4, championships) for each season. This allows the reader to see the specific team information that builds the overall narrative.


Reviewer Feedback on Previous Draft and Edits -


1. It would be helpful if you could hover your mouse above the city names in the key and the line corresponding to that city lit up on the line graph. As it exists right now, I had to move my mouse around on the graph to search for the Philadelphia line. The color key on the right side isn't helpful because there are so many lines and so many similar-looking colors.

2. I like how you hover the mouse and the red line and the team name shows up.
A few suggestions: Could the infographic be a bit bigger?  I have trouble following the lines and figuring out the colors. Maybe an explanation of the y-axis percentage calculation.  Is a higher percentage better? Are all those stats after the picture part of the graphic?  I'm not sure what they mean!!

3. I don't like how the cursor turns into an editing "I" icon when you hover over the city names. It creates confusion. It would be better if it turned into the little pointing icon most people associate with a click-able item. But even just keeping it as is would be better. That little "I" bar really makes it seem like the cities aren't meant to be clicked--even though the instructions say otherwise. At first I didn't realize you could click on the city names because I didn't read the prompt. Without that feature the chart would have been utterly confusing.

Edits Based on Feedback -

After feedback from these two reviewers and the udacity graded I made the following changes:
1. Added dynamic key.
2. Added static key for circles size and color.
3. Changed size scale of circles to correspond to sqrt of radius.
4. Made scatter plot the initial presentation to the reader, not the line series.
5. Addressed overplotting by reducing size of circles, reconfiguring line series to be added dynamically one-by-one by user.
6. Added more information to the tooltip for each circle based on feedback above.
7. Restructered my dataset, initially I used the nest function in D3 twice to group data first by city and then by year. It was really difficult to write syntax to manipulate double nested data, and there were a few features I could not figure out how to add to earlier drafts. I restured the csv file so that I only had to perform the d3 nest function once.
8. Made the plot larger, more attractive and easier to follow.


Resources - 

I built my own dataset by scraping data from the four sport fan website listed at the bottom of the infographic:
Baseball: http://www.baseball-reference.com/
Football: http://www.pro-football-reference.com/
Basketball: http://www.basketball-reference.com/
Hockey: http://www.hockey-reference.com/
I added the interactive key for adding and hiding line series by adapting code from this example:
http://www.d3noob.org/2014/07/d3js-multi-line-graph-with-automatic.html
