const AlchemyLanguageV1 = require('watson-developer-cloud/alchemy-language/v1');

const alchemy_language = new AlchemyLanguageV1({
  api_key: process.env.ALCHEMY_API_KEY
});

const tweets = `2017 will be my year i feel it
How this ugly ass  dirty boy going through this many girls tho
Cat ppl are the worst
I crack myself up with the amount of next level crazy things I've done
CHICOBEANNN!!
Just welcomed into the itty bitty titty committee
Friendship  
Complete banger 
To this day, the only unanswered question I have is who changed my name on Pinterest to "deep throat anal whore"
Ever wish u had the ability to stop eating
I once wasted a whole year on a guy that said hooking up w me was like eating mcdonalds, y'know enjoy it while its happening regret it after
"December 1st I'm gonna start my New Years body" 
Man CMON
At this point I'm just like fuck it, I'll find someone who falls in love with my personality I deserve this god damn cheeseburger
Wow I wish I lived in Toronto just bc of snakes and lattes
If a guy ever tells you what other girls find attractive about him he is most definitely a massive loser
Oh okay 
I was proven very wrong when I said "this blonde boxed hair dye won't turn my hair orange"
I hate when my cute little short friends try to hug me makin me feel like I'm large and in charge like I'm gonna break them or something
Counting down the days until next semester
My eating habits are so bad I should be obese but nah, still kickin it on the chunkier side of life but it's chill
Vibessssss 
How do I self diagnose myself with hypochondria without being a hypochondriac
Today I found instant pho broth and LET ME TELL YA IM ONE STEP CLOSER TO OPENING THAT PHO OH PHO IN THE 404 PLAZA
Nothin worse than a smelly person my god
I hate being out-savaged
Pizza pockets 
This grandpa edition of chopped is hittin me right feels
But when u ACTUALLY ft bae 
What's better than ft with bae 
who the fuck would ever buy unsalted soda crackers.... wyd mum
I read an article called "12 signs u are the absolute worst kind of person" and it seems to me that I am the absolute worst kind of person
I literally never realize how shitty someone is until months after they fuck me over
debate night is my fav night LETS GOOOOOO
Thank u anna 
When in doubt wine it out
Can't say I wanna go back to Barrie that's for sure
Absolutely amazing 
danny devito!!!!!!!
Relatable 
Lovin life atm haven't felt more gucci since 8th grade
There is nothing I love more than bathing wow
Sara is always right
Idk what makes me more sad the amount of homework I have or the amount of food I don't have
It's third year and I'm still missing _Ong study notes
Old JB makes long sketchy bus trips so much better
I like going out in Barrie bc it's completely socially acceptable to do things like where a hoodie as a dress to the bar
Tried to watch a health food documentary hoping that it would help me eat healthier.....just made me more hungry
Never felt better lemme tell ya
always wishin for a snack but never knowin what I want
Maddy's whippin around in a Porsche 911 while my dead ass cant even find bus change 
day by day
Everyday I wish that my bank account could keep up with my spending habits
I wanna mark third year as the year u start serving appetizers at the pre
This photo sums up why Anna's my bestfriend  
I relate to this on so many levels  
I knew from the second I saw this girl's wheely bag, we would be friends
Enzo also starts school today!! 
I'm in third year and I still can't find my classes
My horoscope did not prepare me for this shit
2 years later and my old roommates still have me blocked on Twitter DKMMMM
Can't wait to get outta this place that's for sure
U know I'm going to be grade 9 drunk face down on the ground this weekend
my oh my what am I gonna do here 
The guy was only supposed to send me $23.50.....good things do happen!!!! 
A couple days after every emotional breakdown I have, I take a step back and just laugh at how extra I am
Such a sad thing remembering all my friends in Barrie have either graduated or don't have school this semester 
Not having to set an alarm for work is such a nice feeling but then I remember schools starts next week 
Woke up this mornin and panicked bc I didn't recognize the man sleeping beside me...Turns out it was just lyndsay. I think I have a problem
Ooooo no what have I done
Completely down to have my wedding at the dirty q
When u don't miss the person, u just miss the clothing they stole from u
I like cookies way too much to try to be skinny
only one thing I want
I will never understand how someone can be THIS beautiful 
DKMMMM   
Today I picked up a used catheter at work. Today I also quit my job
if u haven't listened to friends with benefits by lanez then byeeeeeeeeee
Really saddens me :(  rip 
i could catch feelings for a piece of cheesecake rn
U expect me to work an 9 hour shift cleaning toilets with NO a/c ?!??!? U must be kiddin
The night is automatically 10x better when blas comes on
Anna and I have realized that 99% of our summer has been spent hanging with our parents and neither of us are complaining
Something not so gucci always happening to me makin me wonder when my day will come
"Lindsay's 20 years old we can trust her to be home alone for a week, nothing will go wrong" 
a very sad chunky lady
Getting a dog has made me realize I will never be cut out for parenthood
feelin it
I get genuinely offended when I see people watching anything other than the olympics rn
Thomas Rhett fixes every bad day
a very rouge summer
Today I spent $57 at dollarama and I don't regret it at all
Bestfriend/personal hairdresser 
Lazy nights are my fav nights
Life's hard when ur a control freak
This is the best text I've ever received 
Nothing's worse than your mom asking you the same question 73829 times
U must be kidding  
When ur highkey crazy and u already know how the situation will end
Only maddy will get me through the next two years of school`;

function user(req, res) {
	const params = {
		extract: 'authors,concepts,dates,doc-emotion,entities,feeds,keywords,pub-date,relations,typed-rels, doc-sentiment,taxonomy,title',
	  	text: tweets
	  	// text: req.tweets
	};

	alchemy_language.combined(params, function (err, response) {
	  	if (err) {
	    	res.status(500).send('error:', err);
	  	} else {
	    	res.json(response);
	    	// res.json({
	    	// 	tweet: req.generatedTweet,
	    	// 	graphs: someGraphs
	    	// });
		}
	});
}

module.exports = user;
