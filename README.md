# Schantz' New Year's Coding Challenge 2016
This repo contains solutions submitted to Schantz' New Year's Coding Challenge 2016 [on LinkedIn](https://www.linkedin.com/pulse/new-years-coding-challenge-espen-h%C3%B8jsgaard).
Only solutions where the author has granted express permission are included in this repo, and the solutions are organized by author.


# The Challenge
The challenge as originally posted [on LinkedIn](https://www.linkedin.com/pulse/new-years-coding-challenge-espen-h%C3%B8jsgaard) was phrased as follows:

> **Write the shortest possible program that generates the lyrics of "Twelve Days of Christmas". Any language goes and, to encourage readability, white space does not count.**
> 
> 1. The program should produce the lyrics as listed [here](http://espen.dk/12_days_of_christmas.txt) (txt file).
> 2. The lyrics must be output to stdout (output to stderr is ignored).
> 3. Letter casing is significant.
> 4. Line breaks may be encoded as line feed (LF), carriage return (CR), or any two-character combination of these.
> 5. Programs may not take any inputs or access external resources. This includes, but is not limited to, arguments, files, and URIs.
> 6. Use of any libraries is permitted, provided they are not made for or directed at this challenge.
> 7. Programs should be runnable on a standard, reasonably modern Windows, Linux, or OS X machine using readily available tools.
> 8. Time of submission will be used as tie breaker.
> 9. Schantz will act as the benevolent dictator of the challenge and we will resolve any issues as we see fit, aiming at promoting a fun and fair challenge. 


# Extra Categories
A solution with a perfect score (0 characters) was submitted soon after the challenge was announced. This feat was achieved by using the Whitespace language ([wiki page](https://en.wikipedia.org/wiki/Whitespace_(programming_language))) which only considers spaces, tabs, and linefeeds significant.
To keep the challenge interesting, two categories were added where the original rules were tweaked slightly to restrict the "abuse" of whitespace:

1. **Whitespace does not count**
2. **Whitespace does not count, non-whitespace must be semantically significant**
3. **All characters count.**


# Scoring
To make scoring manageable, a script was used to score submissions. However, as participants found different ways to exploit the intentionally loose phrasing of the challenge, writing this script was non-trivial.

We ended up using a Python3 script ([definitive_size.py](./definitive_size.py)) which used auto detection of the encoding to count the number of characters in the program. This was to ensure that solutions, which exploited Unicode characters to pack information in few characters, were measured correctly. The downside was that programs with binary (non-Unicode) content got a slightly lower character count than if we counted bytes, but this was the most manageable solution we could come up with; Character encodings is a can of worms!

The script is a slight modification of a script kindly provided by Christian Iversen – thanks for letting us use it!


# Results
Below are listed the author, character count, and language of the top 3 solutions in each of the three categories. Only the best correct solution from each participant in each category was taken into account. The solutions are all included in this repo.

##Category 1
1. Christian Iversen: 0 characters in Whitespace
2. Arvid Piehl Lauritsen Böttiger: 0 characters in Whitespace
3. Christian Sonne: 10 characters in CJam
 
##Category 2
1. Christian Iversen: 5 characters in GS2
2. Christian Sonne: 10 characters in CJam
3. Anders Nielsen Helmar: 30 characters in Perl

##Category 3
1. Arvid Piehl Lauritsen Böttiger: 283 characters in Ruby
2. Christian Sonne: 299 characters in Bourne shell + Pyth
3. Christian Iversen: 306 characters in zsh

## Picture of the winners
The winners of Schantz' New Year's Coding Challenge together with COO Stiig Berg Andersen:
![The winners of Schantz' New Year's Coding Challenge together with COO Stiig Berg Andersen](winners.jpg)


# Credits
A big thanks to all the participants for taking up the challenge and submitting fun and interesting solutions in 18(!) different languages!
Among the participants were (the rest chose to be anonymous):

* Anders Nielsen Helmar
* Andreas Kromann
* Arvid Piehl Lauritsen Böttiger
* Christian Iversen - see also his [GitHub page for the challenge](https://github.com/chrivers/xmas-challenge) where he discusses his solutions
* Christian Sonne
* Erik Hansen
* Jacob Kristensen
