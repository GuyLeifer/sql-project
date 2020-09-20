USE spotify;

INSERT INTO Playlists(Name, Cover_img) 
VALUES
('Rock', 'https://cdn4.vectorstock.com/i/1000x1000/17/23/lets-rock-music-print-graphic-design-with-guitar-vector-23381723.jpg'),
('Rock_2', 'https://cdn1.vectorstock.com/i/1000x1000/18/00/lets-rock-music-print-graphic-design-with-guitar-vector-23381800.jpg');

INSERT INTO Artists(Name, Cover_img, Created_at, Upload_at) 
VALUES
('Green Day', 'https://i.pinimg.com/originals/88/03/d7/8803d7ec675006ca7c23d244b7ff0104.jpg', '2011-03-13 02:53:50' , '2011-03-13 02:53:50' ),
('Coldplay', 'https://www.eventim.co.il/obj/media/IL-eventim/galery/222x222/c/coldplay-tickets.jpg', '2000-03-13 02:53:50' , '2002-03-13 02:53:50' ),
('Linkin Park', 'https://scontent.fhfa1-2.fna.fbcdn.net/v/t1.0-9/s960x960/29425596_10156399711017904_564418931020791808_o.jpg?_nc_cat=101&_nc_sid=85a577&_nc_ohc=g-aeFrlnI4oAX9c6nyl&_nc_oc=AQmDY5Mqyhk73ImysrVcduLLlATkhKUb-KUpZN6SdF7FkrJHmq5_h4_rv4c9MoiCYUc&_nc_ht=scontent.fhfa1-2.fna&tp=7&oh=9da612934ee1fafcb94e0f6857e9ff32&oe=5F8B0581', '2002-09-18', '2004-01-19'),
('Eyal Golan','https://upload.wikimedia.org/wikipedia/commons/c/ca/Eyal_golan_2011.jpg','2020-01-01','2020-04-12');

-- INSERT INTO Users(Name, Email, Created_at, Upload_at, Password, Is_Admin, Preferences, Remember_token) 
-- VALUES(, , , , , , , );

INSERT INTO Albums(Artist_id ,Name, Created_at, Cover_img) 
VALUES
(1, 'American Idiot', '2004-09-01', 'https://upload.wikimedia.org/wikipedia/en/e/ed/Green_Day_-_American_Idiot_album_cover.png'),
(3, 'Minutes to Midnight', '2007-05-09', 'https://upload.wikimedia.org/wikipedia/en/7/7a/Minutes_to_Midnight_cover.jpg'),
(1, 'Father of All Motherfuckers', '2020-02-07', 'https://s3-us-west-1.amazonaws.com/static-spin-com/files/2020/02/69989279_10157590914134521_3911858824536915968_o-1580941206.jpg'),
(4, 'מכאן ועד הנצח', '2020-04-12', 'https://i.ytimg.com/vi/NwDvbCkwGXo/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBPHrFL8o7GsLRROIxoFNPx-OtEhQ');

INSERT INTO Songs(Album_id, Artist_id, Youtube_Link, Title, Length, Track_Number, Created_at, Lyrics) 
VALUES
('1','1','h6Z5N0Z6zH0', 'American Idiot' , '02:54', '1', '2013-01-01', "Don't wanna be an American idiot
Don't want a nation under the new mania
And can you hear the sound of hysteria?
The subliminal mind-fuck America
Welcome to a new kind of tension
All across the alien nation
Where everything isn't meant to be okay
Television dreams of tomorrow
We're not the ones who're meant to follow
For that's enough to argue
Well maybe I'm the faggot America
I'm not a part of a redneck agenda
Now everybody do the propaganda
And sing along to the age of paranoia
Welcome to a new kind of tension
All across the alien nation
Where everything isn't meant to be okay
Television dreams of tomorrow
We're not the ones who're meant to follow
For that's enough to argue
Don't wanna be an…
"),
('1','1','JMcNzjzw63I', 'Jesus of Suburbia 1', '09:14', '2', '2013-01-01',"
I'm the son of rage and love
The Jesus of Suburbia
The bible of none of the above
On a steady diet of
Soda Pop and Ritalin
No one ever died for my
Sins in hell
As far as I can tell
At least the ones that I got away with
And there's nothing wrong with me
This is how I'm supposed to be
In a land of make believe
That don't believe in me
Get my television fix
Sitting on my crucifix
The living room in my private womb
While the Moms and Brads are away
To fall in love and fall in debt
To alcohol and cigarettes
And Mary Jane
To keep me insane
Doing someone else's cocaine
And there's nothing wrong with me
This is how I'm supposed to be
In a land of make believe
That don't believe in me
At the center of the earth
In the parking lot
Of the 7-11 where I was taught
The motto was…"),
('1','1','l2hA8g1cNvQ', 'Holiday', '03:53', '3', '2013-01-01',"
Hear the sound of the falling rain
Coming down like an Armageddon flame (hey!)
A shame
The ones who died without a name
Hear the dogs howlin' out of key
To a hymn called faith and misery (hey!)
And bleed, the company lost the war today
I beg to dream and differ from the hollow lies
This is the dawning of the rest of our lives
On holiday
Hear the drum pounding out of time
Another protester has crossed the line (hey!)
To find, the money's on the other side
Can I get another Amen (Amen!)
There's a flag wrapped around a score of men (hey!)
A gag, A plastic bag on a monument
I beg to dream and differ from the hollow lies
This is the dawning of the rest of our lives
On holiday
The representative from California has the floor
Sieg Heil to the president gasman
Bombs…"),
('1','1','Dx1SPxGn-iU', 'Boulevard of Broken Dreams', '04:21', '4', '2013-01-01', "
Starry nights city lights
Coming down over me
Skyscrapers, stargazers in my head
Are we we are, are we we are
The waiting unknown
This dirty town was burning down in my dreams
Lost and found, city bound in my dreams
And screaming
Are we we are, are we we are the waiting
And screaming
Are we we are, are we we are the waiting
Forget me nots, second thoughts live in isolation
Heads or tails and fairy tales in my mind
Are we we are, are we we are the waiting unknown
The rage and love, the story of my life
The Jesus of suburbia is a lie
And…"),
('1','1','6HXa2gVj4mg', 'Are We the Waiting' ,'02:43', '5', '2013-01-01', "
Starry nights city lights
Coming down over me
Skyscrapers, stargazers in my head
Are we we are, are we we are
The waiting unknown
This dirty town was burning down in my dreams
Lost and found, city bound in my dreams
And screaming
Are we we are, are we we are the waiting
And screaming
Are we we are, are we we are the waiting
Forget me nots, second thoughts live in isolation
Heads or tails and fairy tales in my mind
Are we we are, are we we are the waiting unknown
The rage and love, the story of my life
The Jesus of suburbia is a lie
And…"),
('1','1','jRu0O1J3Y4s', 'St. Jimmy', '02:55', '6', '2013-01-01', "
St. Jimmy's comin' down across the alleyway
Up on the boulevard like a zip gun on parade
Light of a silhouette
He's insubordinate
Coming at you on the count of one, two (one, two, three, four)
My name is Jimmy and you better not wear it out
Suicide commando that your momma talked about
King of the forty thieves
And I'm here to represent
That needle in the vein of the establishment
I'm the patron saint of the denial
With an angel face and a taste for suicidal
Cigarettes and Ramen and a little bag of dope
I am the son of a bitch and Edgar Allan Poe
Raised in the city under a halo of lights
The product of war and fear that we've been victimized
I'm the patron saint of the denial
With an angel face and a taste for suicidal
Are you talkin' to me?
I'll give you…"),
('1','1','ZKAwIwjHwZI', 'Give Me Novacaine', '03:26' , '7', '2013-01-01', "
Take away the sensation inside
Bitter sweet migraine in my head
It's like a throbbing tooth ache of the mind
I can't take this feeling anymore
Drain the pressure from the swelling
The sensation's overwhelming
Give me a long kiss goodnight and everything will be alright
Tell me that I won't feel a thing
So give me Novacaine
Out of body and out of mind
Kiss the demons out of my dreams
I get the funny feeling, that's alright
Jimmy says it's better than here
I'll tell you why
Drain the pressure from the swelling
The sensation's overwhelming
Give me a long kiss goodnight and everything will be…"),
('1','1','eOv5fF7maFY', "She's A Rebel" ,'02:01', '8', '2013-01-01', "[Chorus]
She's a rebel, she's a saint
She's the salt of the earth, and she's dangerous
She's a rebel, vigilante
Missing link on the brink of destruction

[Verse 1]
From Chicago to Toronto
She's the one that they call ol' Whatsername
She's a symbol of resistance
And she's holding on my heart like a hand grenade

[Verse 2]
Is she dreaming what I'm thinking?
Is she the mother of all bombs? Gonna detonate
Is she trouble like I'm trouble?
Make it a double twist of fate or a melody that

[Bridge]
She sings the revolution
The dawning of our lives
She brings this liberation
That I just can't define, well, nothing comes to mind
(Hey)

[Guitar Solo]"),
('1','1','hctq2W1z7Kc', 'Extraordinary Girl' , '03:34', '9', '2013-01-01', "
She's an extraordinary girl
In an ordinary world
And she can't seem to get away
He lacks the courage in his mind
Like a child left behind
Like a pet left in the rain
She's all alone again
Wiping the tears from her eyes
Some days he feels like dying
She gets so sick of crying
She sees the mirror of herself
And image she wants to sell
To anyone willing to buy
He steals the image in her kiss
From her hearts apocalypse
From the one called what's her name
She's all alone again
Wiping the tears from her eyes
Some days she feels like dying
She gets so sick of crying
She's all alone…"),
('1','1','1fi-MLyBfB0', 'Letterbomb' ,'04:06' , '10' , '2013-01-01', "
Nobody likes you
Everyone left you
They're all out without you
Having fun
Where have all the bastards gone?
The underbelly stacks up ten high
The dummy failed the crash test
Collecting unemployment checks
Like a flunkie along for the ride
Where have all the riots gone?
As your city's motto gets pulverized
What's in love is now in debt
On your birth certificate
So strike the fucking match to light this fuse
The town bishop is an extortionist
And he don't even know that you exist
Standing still when it's do or die
You better run for your fucking life
It's not over 'till you're underground
It's not over before it's too late
This city's burnin'
It's not my burden
It's not over before it's too late
There's nothing left to analyze
Where will all the martyrs go when the…"),
('1','1','imfEO_rjpU4', 'Wake Me Up When September Ends', '04:46' , '11' , '2013-01-01', "
Summer has come and passed
The innocent can never last
Wake me up when September ends
Like my fathers come to pass
Seven years has gone so fast
Wake me up when September ends
Here comes the rain again
Falling from the stars
Drenched in my pain again
Becoming who we are
As my memory rests
But never forgets what I lost
Wake me up when September ends
Summer has come and passed
The innocent can never last
Wake me up when September ends
Ring out the bells again
Like we did when spring began
Wake me up when September ends
Here comes the rain again
Falling from the stars
Drenched in my pain again
Becoming who we are
As my memory rests
But never forgets…"),
('1','1','58hUq7hnueQ', 'Homecoming' , '09:18', '12' , '2013-01-01', "
My heart is beating from me
I am standing all alone
Please call me only if you are coming home
Waste another year flies by
Waste a night or two
You taught me how to live
In the streets of shame
Where you've lost your dreams in the rain
There's no signs of hope
The stems and seeds of the last of the dope
There's a glow of light
The Saint Jimmy is the spark in the night
Bearing gifts and trust
The fixture in the city of lust
What the hell's your name?
What's your pleasure and what is your pain?
Do you dream too much?
Do you think what you need is a crutch?
In the crowd of pain Saint Jimmy comes without any shame
He says, 'We're fucked up' and we're not the same
And mom and dad are the ones you can blame
Jimmy died today
He blew his brains out into the bay
In this…"),
('1','1','Z2LC1xrdOaM', 'Whatsername' , '04:12' , '13' , '2013-01-01', "
Thought I ran into you down on the street
Then it turned out to only be a dream
I made a point to burn all of the photographs
She went away and then I took a different path
I remember the face
But I can't recall the name
Now I wonder how whatsername has been
Seems that she disappeared without a trace
Did she ever marry old what's his face
I made a point to burn all of the photographs
She went away and then I took a different path
I remember the face
But I can't recall the name
Now I wonder how whatsername has been
Remember, whatever
It seems like forever to go
Remember, whatever
It seems…"),
('2','2','Me7TJDHCELk', 'Wake', '01:41', '1', '2015-03-27', "
Should I have a taste of this
Start and crush your nails
And start all over again
Could this all just be a dream
If I should fall to stormy weather
Wake Me, Wake Me
yeah
Maybe this time I can do it all wrong
Without my foot in my mouth
Without that blind in my sight
Could this all just be a dream
If i should fall…
"),
(4, 4, 'gg-Aby8eE1M', 'אם רק היית יודעת', '03:38', 1, '2020-04-12', 'המחשבות הורגות אותי קבוע קשה לשתוק לא מתרגל
לאחרונה כל יום מרגיש שבוע הכל שטויות טוב תלוי מי שואל
אולי תגידי מה עובר עלי
רק תגידי שהכל בסדר
קצת הרגיש לי שגדול עלי אולי

אם רק היית יודעת איך המילים שלך עושות אותי רגוע
ואני יותר סגור את עם השטויות שלך הרבה יותר בטוח
ואני שוב משתגע איך זה בא בזמן 
זה הרבה יותר עדיף לא להיות מוכן

המנגינות באות צריך לנוע
קשה לרקוד לא מסתכל
הרכבות עוברות ואני תקוע
לאן כולם נוסעים כאן לעזאזל

אולי תגידי לי מילים טובות
אולי תצאי קצת מהחדר
אולי ירדו לך עוד כמה דמעות אולי כדאי

אם רק היית יודעת איך המילים שלך עושות אותי רגוע
ואני יותר סגור את עם השטויות שלך הרבה יותר בטוח
ואני שוב משתגע איך זה בא בזמן 
זה הרבה יותר עדיף לא להיות מוכן '),
(4, 4, 'lMVun_6B5TU', 'שומרים אהבה', '02:47', 2, '2020-04-12', 'שלוש בלילה לא נרדם יוצא לשתות קפה סיגריה כולם ישנים
הבטן מתהפכת מאתמול בערב חברים אומרים שזה פרפרים
ואת וודאי כבר ישנה מתחת לשמיכה מחבקת דובי גדול
שלושה וחצי קילומטרים מפרידים בנינו רק תבואי עכשיו בלי לשאול

אני רואה לך בעיניים הדבר הכי יפה נשבע שאת הכי יפה מכולן
בואי ניסע לנו שיקגו פריז או ברצלונה כל מקום שתבחרי בעולם
רק גיטרה ישנה והחיוך שלך נצחק בכל הרחובות שכולם ישמעו אותנו
עכשיו החברות שלך כבר מבינות על מה פה מדברים שומרים אהבה

אז את צוחקת קוראת את תסמס שלי מראה אותו לכולם
תמד פחדת להתקרב אבל בחרת אותי כי יש לך טעם מושלם
רק אני ואת רחוק מכל האנשים על אי בודד שמיים נקיים ים כחול
ניסע בינתיים שנה שנתיים יום יומיים רק תבואי עכשיו בלי לשאול' ),
(4, 4, 'fDOVhjbJ8fg', 'אוסף עוד געגוע', '03:43', 3, '2020-04-12', 'כל העיר כבר מדברים שאת לא כאן
מספרים שאת הלכת לעיר אחרת
ורק אני מדבר לשקט 
מספר לו כמה שאת חסרה לי
ואמא כל הזמן אומרת תהיה חזק
תבוא אחת שתרים אותך גבוה
היא תרפא לך את הכאב
תלטף לך את הלב
בסוף תצחק על הכאב
אז תגידי איך בלילות אני מדבר עם הלבד
אומרים שאהבה היא לא ליום אחד
אז תחזרי כי לא הולך לי כלום
גם כשניסיתי לקום 
נפלתי שוב אלייך
אז תגידי איך בסוף תמיד חוזרים להתחלה
אומרים שאהבה היא התרופה
אז תחזרי כי לא הולך לי כלום
גם כשניסיתי לקום, נפלתי שוב אלייך
כל הבגדים שאת השארת זרוקים בחדר
תמונות שלך על קיר ישן מספרות הכל
עוד דקה כמעט שבור 
אוסף עוד געגוע עד שתחזרי
אז תגידי איך בלילות אני מדבר עם הלבד
אומרים שאהבה היא לא ליום אחד
אז תחזרי כי לא הולך לי כלום
גם כשניסיתי לקום 
נפלתי שוב אלייך
אז תגידי איך בסוף תמיד חוזרים להתחלה
אומרים שאהבה היא התרופה
אז תחזרי כי לא הולך לי כלום
גם כשניסיתי לקום, נפלתי שוב אלייך
אז תגידי איך בלילות אני מדבר עם הלבד
אומרים שאהבה היא לא ליום אחד
אז תחזרי כי לא הולך לי כלום
גם כשניסיתי לקום 
נפלתי שוב אלייך
אז תגידי איך בסוף תמיד חוזרים להתחלה
אומרים שאהבה היא התרופה
אז תחזרי כי לא הולך לי כלום
גם כשניסיתי לקום, נפלתי שוב אלייך' ),
(4, 4, 'NwDvbCkwGXo', 'מכאן ועד הנצח', '04:00', 4, '2020-04-12', 'אחרי הכל תראי אותנו 
איך שניצחנו
ביחד את כל הקשיים  

את הסיבה שיש לי שקט 
כשאת צוחקת 
כל כך רגוע לי בפנים  

איתך מכאן ועד הנצח 
בים של אושר 
את צבעת את עולמי 

ורק איתך אני זורח
את כמו חלום 
מתגשם כאן למולי

מבטיח לך לשמור עלינו 
כמו על העיניים 
הירוקות שלך
איך באת לי משמיים 

תראי אנחנו שניים
כאן אוחזים ידיים
אני אלך איתך באש וגם במים
יחד מול כולם' ),
(4, 4, 'cNbosdY6skw', 'מכל האהבות הזמניות', '03:48', 5, '2020-04-12', 'מכל האהבות הזמניות 
ניצחת לי את הזמן ואת הנצח 
אחרי כל הנפילות והכוויות 
נפתח לי המזל את המפתח 

עכשיו שוב נסחפים 
כמו גלים קטנים אל חוף מבטחים 
לא חשוב לי מה אומרים 
עלינו 

את כמו השמש לב של זהב  
את כל התפילות שכיוונתי עכשיו 
האור שחסר לי כל השנים 
אתן לך את כל החיים
אתן את הכל ואפילו יותר 
אתן את עצמי וזה לא יגמר 
מתי מתי 
תביני שאת כל חיי

מכל האהבות הזמניות 
מצאתי אהבה שתנצח 
אחרי כל השנים והדמעות
הגעת לחיי כמו אור ירח

עכשיו שוב נסחפים 
כמו גלים קטנים אל חוף מבטחים 
לא חשוב לי מה אומרים 
עלינו 

אתה כמו השמש לב של זהב  
כל התפילות שכיוונתי עכשיו 
האור שחסר לי כל השנים 
אתן לך את החיים
אתן את הכל אפילו יותר 
אתן את עצמי וזה לא יגמר 
מתי מתי 
תבין שאתה כל חיי'),
(4, 4, '16-W0TnRE84', 'עושה עם העיניים', '02:55', 6, '2020-04-12', 'כמה מילים חסרות,
גם מבט משתיקות אי אפשר להרכיב  
עושה לי דמעות, 
נשבע שבכלל לא תכננתי לריב 
כמה צעקות על הרצפה שאת לא אוספת
שוב אני יושב על הספה שכבר ראתה הכל 

איך מחייכת בשניה עושה מה לא עושה עם העיניים 
והגוף שלך מושיט ידיים
מחבקת ובוכה עושה מה לא עושה אני עדיין 
אביא לך, כמה שאני אביא לך 
כל מה שתרצי אשיר לך 
אשאיר לך את עצמי בינתיים 

אם לא סופרים ת׳לילות 
את עדיין אוכלת את כל השטויות 
מי מכיר אחרות וזה שלא אהבנו לרגע פחות 
שנינו מביטים על התקרה,
ואת לא אומרת 
אף פעם לא הבנתי מה קרה זה לא שאני יכול 

איך מחייכת בשניה עושה מה לא עושה עם העיניים 
והגוף שלך מושיט ידיים
מחבקת ובוכה עושה מה לא עושה אני עדיין 
אביא לך, כמה שאני אביא לך 
כל מה שתרצי אשיר לך 
אשאיר לך את עצמי בינתיים

את מחייכת בשניה עושה מה לא עושה עם העיניים 
והגוף שלך מושיט ידיים
מחבקת ובוכה עושה מה לא עושה אני עדיין 
אביא לך, כמה שאני אביא לך 
כל מה שתרצי אשיר לך 
אשאיר לך את עצמי בינתיים
'),
(4, 4, 'eiRP_H_me1Q', 'רכבת הרים', '02:49', 7, '2020-04-12', 'מאמי מה קרה לי עכשיו את חסרה לי
חשבתי שגמרנו מזמן אני לא יודע
איך אחרי חודשיים מצאת אותי בינתיים
הלב שלי גם ככה ישן

אני לא יודע שום דבר
אנלא  יודע שום דבר

והימים עוברים לי לאט
ומי אני בכלל אם לא את
בלילה בשמיכה בבוקר בזריחה
הלב שלי רכבת הרים
בעיר הזאת בין כל השבורים
אני מקום ראשון אנלא הולך לישון הלילה

מאמי זה כואב שנים אני סוחב
אותך איתי לכל מקום אני לא יודע
אם את מאושרת עכשיו כשאת חוזרת
אליו הביתה בסוף יום' ),
(4, 4, 'hd0-ErzWynU', 'קרובה אליי', '03:24', 8, '2020-04-12', 'על כביש מהיר בדרך, חיוך על הפנים 
הרוח שנושבת, החלונות פתוחים
ברדיו משמיעים עוד איזה שיר 
על אהבה מדברים...

ואת כמו משוגעת, צועקת תמילים 
אני מצטרף ואז אנחנו צוחקים 
איך אני אוהב את השטויות 
שאנחנו עושים

ואם תרגישי עצובה,
אני אבוא ואחבק את כל פחדייך אסלק

עינייך מול עיניי 
שפתייך אל שפתיי 
כל כך קרובה אליי 
הלב דופק משתגע 
שלא יגמר הרגע לעולם 
כל כך הרבה שנים 
עברו חיים שלמים 
תקופות קשות שרק אלוהים שומע 

ננצח כל צבא שבעולם 
ורק אני מכיר את השריטות שלך, 
מה את הכי אוהבת, מה קצת מעצבן אותך,
כמה שנריב בסוף היום הכל נשכח ונסלח

וכשמגיע לילה נכנסים אל המיטה,
היום הולך להיגמר ממש בעוד דקה,
את מרימה תראש אני גונב....
ממך נשיקה.

ואם תרגישי עצובה,
אני אבוא ואחבק את כל פחדייך אסלק'),
(4, 4, 'b5tDzaud0aA', 'חוזר הביתה', '03:16', 9, '2020-04-12', 'אמא לך אני מבטיח לשבת אחזור
זה החייל שלך אני כל כך מתגעגע
אמא רק אל תדאגי אני פה לא לבד
כולם פה זה אחד ואת איתי אני יודע

ובלילות קרים תופר שמירות לבד
ואת נמצאת תמיד בתוך הנשמה שלי
תרגיעי גם את אבא רק שלא יפחד
אל תשכחי גם לנשק את אחותי

גם כשמסתער קדימה את איתי יאמא
את האור במקומות חשוכים
כשמפחיד בלילה מסתכל למעלה
בשבילי את כמו מיליון כוכבים
אוהב אותך אמא עוד כמה ימים
אני חוזר הביתה

איך אני מתגעגע לריחות שבת
לגנוב מהסירים, שיחות קטנות על המרפסת
איך אני כבר מת לפשוט את המדים
אמבטיה, מנוחה ואז עם סבא לבית כנסת

אולי אנלא אומר מספיק אוהב אותך
אבל מרגיש אותך בתוך הנשמה שלי
ומתפלל לאל רק שישמור עלי 
שאוכל לחזור אליך אל ביתי'),
(4, 4, 'ZxPIADYOYoI', 'רק לעוד דקה', '03:21', 10, '2020-04-12', 'לא מבין איך את כך מתרחקת
כל חיי הפכו פתאום לשקט
לעזוב הכל איך את כך יכולה
כשאני עוד לא מבין מה קרה

בלילות שיכור השארת לי רק כאב
רחובות קרים הראש כבר מסתובב
לא נתת לי להסביר גם לא מילה
חיים שלמים ארזת איתך במזוודה

אל תאמרי שאת עוזבת
אל תאמרי כבר לא אוהבת
שבנינו כל הרגש נעלם
תני סיכוי קטן לשנינו
לא אל תוותרי עלינו
בואי נשב אפילו רק לעוד דקה

איך הזיכרונות עולים צפים עכשיו
זוכרת שהבטחנו שתמיד נאהב
ואם את רוצה לחזור בחזרה
בואי נשכח ושוב נתחיל מהתחלה'),
(4, 4, '9PTH36lPuzg', 'לעשות איתך שלום', '03:28', 11, '2020-04-12', 'דיברנו שעות בשקט נשארתי ואת הולכת
איתך אי אפשר אחרת איך אני לבד
תגידי שאת בסדר שעוד לא מצאת לך גבר
סגור כמו אידיוט בחדר איך אני לבד

אז מה עושים עם כל הרעש שלא לקחת איתך
היום כבר לא מוכרים פה שקט רק זורקים לפח

תני לי לעשות איתך שלום תדברי איתי
אני חוזרת עוד היום רק תגידי לי
אני כבר מחכה ליד הדלת
תני לי לעשות איתך הכל תסתכלי עלי
אני כבר לא פוחד ליפול תנסי אולי
זה לא יפה לנו לבד

אז מה עם הגעגוע עבר כבר כמעט שבוע
באמא אנלא רגוע איך אני לבד
שמעתי שאת נשברת כמוני את עוד אוהבת
תגידי לי מה את אומרת איך אני לבד

אז מה עושים עם כל הכעס שלא לקחת איתך
היום כבר לא מוכרים פה רגש רק זורקים לפח'),
(4, 4, 'CoH5kL1CgRA', 'עומד כאן לבדי', '03:44', 12, '2020-04-12', 'מולך בורא עולם אני עומד כאן לבדי
נושא עיניי אל השמיים
בקול שבור מודה אני לך קוני
אין עוד מלבדך אתה יוצר בשר ודם
אתה מנהיג ברחמייך
אתה מלך העולם לך כולם

כבן סורר הייתי שלא הלך בדרכך אני טעיתי
אבל צמאה נפשי אליך לבקש סליחה
כי אין בי כלום בלי תורתך

אלוקים שלי רק רציתי שתדע
שלמרות שנפלתי אני קם עם חיוך
ובליבי עוד נושא תפילה
אבא'לה שלי אני קורא לך אבא'לה שלי
תגלה רחמיך על כל עמיך ישראל, אהוביך

אב הרחמן לך מודים כל הבריות
עושה שמיים וארץ אתה אדיר בנפלאות, אל נחמות
אין עוד מלבדך אתה יוצר בשם ודם
אתה מנהיג ברחמיך אתה מלך העולם לך כולם

כבן סורר הייתי שלא הלך בדרכך אני טעיתי
אבל צמאה נפשי אליך לבקש סליחה
כי אין בי כלום בלי תורתך');

INSERT INTO My_playlist_songs(Playlist_id, Song_id)
VALUES
(1,1), (1,2), (1,3),
(2,6), (2,8), (2,10)
;

-- INSERT INTO Interactions(Username_id, Song_id, Is_liked, Play_count, Created_at) 
-- VALUES(, , , , );