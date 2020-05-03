---
title: Punter Analytics
excerpt: Even if it's the least interesting part of football, punters are people too! Here's a look at breaking down EPA for punters and trying to figure out who the best punters in the game are today.
date: 2020-05-03T00:00:01-5:00
---

### Punting

Well this is almost certainly the least interesting thing that a person can look at when analyzing football. yet here I am. Analyzing punting statistics.  And lets be honest, I'm almost certainly going to get some pushback on this... 

Anyways, given that my blog is titled **Punt of no Return**, I thought that this is probably the most fitting thing to start with. Honestly, I didn't come into this analysis expecting to find all too much - maybe that punters were marginally under/overpaid or that all punters were basically interchangeable - yet now that I've spent way too much time looking at this, I have a few points I'd like to discuss.

Fist things first, lets discuss how I actually calculated all this.

### The Analysis

The basis for all this analysis is data from [nflscrapR](https://github.com/ryurko/nflscrapR-data) for seasons 2009 - 2019. Thankfully, those guys already have classifications for basically every regular-season (and post-season) play-by-play data.  And they calculate Expected Points (EP), Expected Points Added (EPA), Win Probability (WP), and a lot of other things.

The focus here was to:
- Take every punt play since 2009
- Remove situations where the punting team had >97.5% chance of winning or less than 2.5% chance of winning (helps to eliminate some times when a team wasn't trying to maximize points)
- Group punts by yardline (we could have added more values here, but this should be good enough for the analysis) and find the average amount EPA a punt added

So now that we have that, you can see some baseline expected values from punts.

Here's the expected value added from every punt since 2009 - note that the y-axis is cut off at +/-2 since there are a good deal of outliers.  The 'outliers' aren't actually outliers - they're punts returned for touchdowns or muffed punts that were recovered by the punting team - but they make it rather hard to actually read the graph...

![alt text](~assets/punting-epa_full_regression.png "epa_full_regression")

For a better picture of how the distribution looks, these are the descriptive statistics if you bucket each punt by the yardline where they occurred (with 99 being on your own 1 yard line).  You'll notice that punts start to become EPA-negative as you move past your own 45 yard line - if you've been paying attention to basically any football broadcast in the past few years, this isn't particularly shocking to you.  Its the reason why more and more teams are going for it on 4th and short around midfield and - given that analytics is becoming a bigger part of football - that's probably only going to keep increasing.

![alt text](~assets/punting-epa_summary_regression "epa_summary_regression")

Anyways, another interesting thing from the above graph is that expected values from punts actually goes back into the negative territory around your goalline.  There's probably a few aspects coming into play there (punters rushing punts, returns being more likely to end in touchdowns) but for now I'm just going to leave that alone and accept it.  Delving into that is going to be delving into issues with EP/EPA and that would take a lot of additional work.

If you're interested in more descriptive stats on punting, here are the pre-play expected values of each punt with the same yardline bucketing.  Not particularly much to see here honestly - expected value tends to be higher the closer you get to your opponents endzone...

![alt text](~assets/punting-avg_ep_by_position "avg_ep_by_position")

### Punter Analysis

Now this is what everyone probably came here for.  The answer to the "...so is my team's punter actually good?" question. And now that someone's done the analysis, you can answer with confidence - *maaaaybe*?

Anyways, for this portion of the analysis we're going to build on those earlier regressions where we estimated EPA by yard line.  So if the punter is punting from your 20yd line you'd expect about a +0.2 EPA vs about a -0.75 EPA at your opponent's 40yd line.  To take the team's decision-making out of the equation, I took each punter's EPA from each play and compared it to the expected value from those regressions.

Now that we have that, we can calculate the median EPA from each punt *and* we can calculate it relative to what we'd expect.  To sanity check this, here are all the punters with >200 punts since 2009.  Leading the list, as you'd expect, is Johnny Hekker.

|Name|Total Punts|Median EPA|Median Relative EPA|Inside 20 %|Avg. Distance|Last Team|
|:---|---:|---:|---:|---:|---:|:---|
|J.Hekker|602.00|0.29|0.23|39.7%|46.7|LA|
|R.Dixon|302.00|0.23|0.14|33.1%|45.3|NYG|
|T.Morstead|621.00|0.18|0.13|36.4%|46.6|NO|
|M.King|440.00|0.15|0.12|36.6%|46.4|OAK|
|M.Haack|238.00|0.07|0.12|37.0%|44.3|MIA|
|D.Colquitt|818.00|0.11|0.11|43.6%|44.9|KC|
|S.Lechler|755.00|0.14|0.11|33.5%|47.8|HOU|
|B.Anger|592.00|0.14|0.10|36.0%|45.8|TB|
|M.Palardy|240.00|0.08|0.09|36.3%|45.2|CAR|
|S.Martin|469.00|0.18|0.09|37.3%|45.5|DET|
|A.Lee|829.00|0.15|0.08|37.2%|47.4|SF|
|R.Allen|429.00|0.09|0.07|38.5%|44.7|NE|
|M.Scifres|409.00|0.08|0.07|35.7%|45.7|SD|
|B.Pinion|390.00|0.14|0.07|33.6%|43.5|SF|
|K.Huber|834.00|0.08|0.06|35.4%|44.3|CIN|
|S.Koch|792.00|0.05|0.06|40.2%|45.5|BAL|
|M.Bosher|486.00|0.05|0.05|39.1%|45.3|ATL|
|T.Way|437.00|0.07|0.05|37.1%|46.2|WAS|
|J.Ryan|683.00|0.00|0.04|36.7%|44.0|SEA|
|B.Fields|440.00|0.07|0.04|38.9%|47.4|MIA|
|D.Jones|786.00|0.05|0.03|34.9%|44.9|LAC|
|B.Kern|856.00|0.05|0.03|40.0%|45.7|TEN|
|S.Weatherford|471.00|-0.01|0.02|34.8%|44.3|NYG|
|P.McAfee|563.00|0.09|0.01|33.7%|45.9|IND|
|P.O'Donnell|436.00|0.04|0.01|35.1%|44.5|CHI|
|D.Zastudil|335.00|-0.02|0.00|38.8%|45.1|ARI|
|R.Quigley|325.00|0.06|0.00|34.5%|43.9|MIN|
|L.Edwards|338.00|0.08|-0.01|32.0%|45.3|NYJ|
|J.Locke|315.00|0.05|-0.01|34.9%|43.1|MIN|
|J.Berry|327.00|0.08|-0.03|40.1%|43.7|PIT|
|B.Nortman|446.00|-0.02|-0.04|33.0%|44.7|JAX|
|B.Colquitt|778.00|0.00|-0.05|32.3%|45.2|CLE|
|C.Jones|454.00|-0.01|-0.05|39.6%|44.1|DAL|
|C.Schmidt|334.00|-0.02|-0.08|31.1%|43.6|BUF|
|B.Wing|322.00|0.01|-0.08|30.7%|44.3|NYG|
|D.Butler|246.00|-0.20|-0.10|37.4%|42.3|PIT|
|T.Masthay|382.00|-0.07|-0.10|34.3%|43.7|GB|

One prominent caveat to this particular analysis is that its looking at *median* EPA per punt, which serves to eliminate a lot of variance (muffed punts, return touchdowns, etc), but it also gives punters 0 blame in those scenarios.  Maybe punter A is better at punting uncatchable balls and that means there are more muffed punts, or maybe punter B has no hangtime on some of his punts and that sets up for a lot more returns.  There's probably a few questions to answer on that end, but for now we're going to leave it alone...

Next, onto that same analysis for the 2019 season.

### 2019 Season

Alright, so here's how this shaped out for the 2019 season.  My take is that this year's All-Pro selections *may* not have been the best punters in terms of stats.  I have to caveat this with a "I'm just a math nerd, don't take this too seriously" and a "no, I haven't actually watched the Titans/Redskins punting units this year", but they seem far enough behind in these EPA stats that it feels off...

|Name|Total Punts|Median EPA|Median Relative EPA|Inside 20 %|Avg. Distance|Last Team|All Pro (3Y)|Ray Guy Award|
|:---|---:|---:|---:|---:|---:|:---|:---:|:---:|
|M.Wishnowsky|52.00|0.12|0.41|44.2%|44.4|SF||x|
|R.Dixon|69.00|0.43|0.31|42.0%|45.8|NYG|x||
|J.Hekker|65.00|0.27|0.25|33.8%|46.9|LA|x||
|K.Huber|75.00|0.35|0.24|40.0%|44.6|CIN|||
|M.Dickson|73.00|0.18|0.23|46.6%|44.5|SEA||x|
|S.Martin|76.00|0.26|0.23|40.8%|44.9|DET|||
|M.Haack|69.00|0.16|0.22|33.3%|44.9|MIA|||
|R.Allen|27.00|-0.03|0.20|51.9%|41.0|ATL||x|
|J.Gillan|61.00|0.22|0.19|45.9%|45.3|CLE|||
|R.Sanchez|59.00|0.10|0.17|37.3%|44.1|IND|||
|L.Cooke|75.00|0.27|0.13|33.3%|46.5|JAX|||
|T.Morstead|60.00|0.19|0.13|48.3%|46.0|NO|||
|J.Bailey|81.00|0.04|0.12|44.4%|44.1|NE|||
|T.Way|79.00|0.23|0.12|38.0%|48.6|WAS|x||
|B.Anger|45.00|0.31|0.11|53.3%|46.3|HOU|||
|C.Johnston|71.00|0.15|0.07|39.4%|45.9|PHI|||
|A.Lee|61.00|0.21|0.06|34.4%|47.2|ARI|||
|B.Kern|78.00|0.06|0.06|47.4%|46.9|TEN|x||
|L.Edwards|87.00|0.12|0.05|32.2%|46.0|NYJ|||
|J.Scott|76.00|-0.06|0.05|38.2%|43.6|GB|||
|B.Colquitt|62.00|0.15|0.05|38.7%|45.2|MIN|||
|C.Bojorquez|79.00|0.01|0.04|43.0%|40.9|BUF|||
|B.Pinion|57.00|0.09|0.04|33.3%|43.1|TB|||
|A.Cole|67.00|0.17|0.01|49.3%|46.1|OAK|||
|J.Berry|74.00|0.11|0.00|32.4%|45.1|PIT|||
|M.Palardy|73.00|0.05|-0.01|34.2%|45.8|CAR|||
|P.O'Donnell|80.00|-0.04|-0.02|32.5%|44.4|CHI|||
|S.Koch|40.00|-0.06|-0.03|52.5%|45.9|BAL|||
|C.Wadman|78.00|0.02|-0.08|37.2%|44.3|DEN|||
|D.Colquitt|48.00|0.02|-0.11|43.8%|44.0|KC|||
|C.Jones|50.00|-0.14|-0.11|36.0%|40.9|DAL|||

*Minimum 20 Punts*
*For reference to people who don't pay attention to All Pros, Kern & Way were All-Pros this year.*

I find comfort in the fact that a lot of the highly rated punters by this metric were either recent All-Pros or Ray Guy award winners.  That doesn't make it right, just makes me sleep a bit better...

### Punter Value

Now that we have that out of the way, I just wanted to discuss punter value at a high level.  In terms of relative EPA (coach-choice agnostic EPA), a 2019 punter added about 6.5 points over the year.  With that in mind, a top 10 punter added about 15.3 points - a delta of 8.7 points between the two.

Given that the average team scored 365 points during the year, that means punters (or realistically, punting units) accounted for an average of 1.8% of points earned in the league.  And *good* punters would account for 4.2% of points... Seems to be a bit of a disconnect given that average punters salaries (excluding rookie contracts) are ~1.3% of the annual salary cap.  Compare that to... ~1.3% annual salary cap (again excluding rookie contracts) for punters in the top 10... 

The other thing to keep in mind here is that you still need to pay special-teamers a good amount, so when you end up tallying it all up on the roster construction front, maybe punters are actually *overpaid*.  But given the EPA vs contract difference among average & high-quality punters, I'm assuming no one actually looks at this.

### Conclusion

The tl;dr here is that I spent way too much time analyzing punters. My calcs say that the 2019 All-Pro class might've missed the target, but I'm just a random guy so take that with a grain of salt.  My stats also say that the average punter contributes a reasonable amount of EPA per year (~1.8% of an average team) compared to their compensation (~1.3% salary cap), but that quality punters are wildly underpaid (4.2% EPA vs 1.3% salary cap).

Thoughts and comments always welcome.
