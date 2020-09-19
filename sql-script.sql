DROP DATABASE IF EXISTS spotify;
CREATE DATABASE Spotify;
USE spotify;
CREATE TABLE Playlists (
  Playlist_id int not null auto_increment,
  Name varchar(50) not null,
  Cover_img varchar(255),
  Created_at date,
  Upload_at datetime not null default current_timestamp,
  Songs_List varchar(255) not null,
  PRIMARY KEY (Playlist_id)
);

CREATE TABLE Artists (
  Artist_id int not null auto_increment,
  Name varchar(50) not null,
  Cover_img varchar(2055) not null,
  Created_at date not null,
  Upload_at datetime not null default current_timestamp,
  PRIMARY KEY (Artist_id)
);

CREATE TABLE Users (
  Username_id int not null auto_increment,
  Name varchar(50) not null,
  Email varchar(50) not null,
  Created_at date not null,
  Upload_at datetime not null default current_timestamp,
  Password varchar(10) not null,
  Is_Admin boolean not null default false,
  Preferences json,
  Remember_token boolean,
  PRIMARY KEY (Username_id)
);

CREATE TABLE Albums (
  Album_id int not null auto_increment,
  Artist_id int,
  Name varchar(50) not null,
  Cover_img varchar(8000),
  Created_at date not null,
  Upload_at datetime not null default current_timestamp,
  PRIMARY KEY (Album_id),
  FOREIGN KEY (Artist_id) references Artists(Artist_id)
);

CREATE TABLE Songs (
  Song_id int not null auto_increment,
  Album_id int,
  Artist_id int,
  YouTube_Link varchar(255) not null,
  Title varchar(50) not null,
  Length varchar(50) not null,
  Track_Number int not null,
  Lyrics varchar(8000),
  Created_at date not null,
  Upload_at datetime not null default current_timestamp,
  PRIMARY KEY (Song_id),
  FOREIGN KEY (Artist_id) references Artists(Artist_id),
  FOREIGN KEY (Album_id) references Albums(Album_id)
);

CREATE TABLE My_playlist_songs (
  My_music_id int not null auto_increment,
  Playlist_id int,
  Song_id int,
  PRIMARY KEY (my_music_id),
  FOREIGN KEY (Playlist_id) references Playlists(Playlist_id),
  FOREIGN KEY (Song_id) references Songs(Song_id)
);

CREATE TABLE Interactions (
  Dummy_data_id int not null auto_increment,
  Username_id int,
  Song_id int,
  Is_liked boolean,
  Play_count int,
  Created_at date not null,
  PRIMARY KEY (dummy_data_id),
  FOREIGN KEY (Username_id) references Users(Username_id),
  FOREIGN KEY (Song_id) references Songs(Song_id)
);

INSERT INTO Playlists(Name, Songs_List, Cover_img) 
VALUES
('Rock', '[1,2,3,4,5]', 'https://cdn4.vectorstock.com/i/1000x1000/17/23/lets-rock-music-print-graphic-design-with-guitar-vector-23381723.jpg'),
('Rock_2', '[2,6,3,7,9]', 'https://cdn1.vectorstock.com/i/1000x1000/18/00/lets-rock-music-print-graphic-design-with-guitar-vector-23381800.jpg');

INSERT INTO Artists(Name, Cover_img, Created_at, Upload_at) 
VALUES
('Green Day', 'https://i.pinimg.com/originals/88/03/d7/8803d7ec675006ca7c23d244b7ff0104.jpg', '2011-03-13 02:53:50' , '2011-03-13 02:53:50' ),
('Coldplay', 'https://www.eventim.co.il/obj/media/IL-eventim/galery/222x222/c/coldplay-tickets.jpg', '2000-03-13 02:53:50' , '2002-03-13 02:53:50' ),
('Linkin Park', 'https://scontent.fhfa1-2.fna.fbcdn.net/v/t1.0-9/s960x960/29425596_10156399711017904_564418931020791808_o.jpg?_nc_cat=101&_nc_sid=85a577&_nc_ohc=g-aeFrlnI4oAX9c6nyl&_nc_oc=AQmDY5Mqyhk73ImysrVcduLLlATkhKUb-KUpZN6SdF7FkrJHmq5_h4_rv4c9MoiCYUc&_nc_ht=scontent.fhfa1-2.fna&tp=7&oh=9da612934ee1fafcb94e0f6857e9ff32&oe=5F8B0581', '2002-09-18', '2004-01-19');

-- INSERT INTO Users(Name, Email, Created_at, Upload_at, Password, Is_Admin, Preferences, Remember_token) 
-- VALUES(, , , , , , , );

INSERT INTO Albums(Artist_id ,Name, Created_at, Cover_img) 
VALUES
(1, 'American Idiot', '2004-09-01', 'https://upload.wikimedia.org/wikipedia/en/e/ed/Green_Day_-_American_Idiot_album_cover.png'),
(3, 'Minutes to Midnight', '2007-05-09', 'https://upload.wikimedia.org/wikipedia/en/7/7a/Minutes_to_Midnight_cover.jpg'),
(1, 'Father of All Motherfuckers', '2020-02-07', 'https://s3-us-west-1.amazonaws.com/static-spin-com/files/2020/02/69989279_10157590914134521_3911858824536915968_o-1580941206.jpg');

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
");
-- INSERT INTO Interactions(Username_id, Song_id, Is_liked, Play_count, Created_at) 
-- VALUES(, , , , );

DROP procedure IF EXISTS `ArtistAlbum`;
DELIMITER $$
USE `spotify`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ArtistAlbumsSongs`(IN id INT)
BEGIN
SELECT 
Artists.Artist_id, Artists.Name AS Artist_name, Artists.Cover_img AS Artist_Cover_img , Artists.Created_at AS Artist_Created_at, Artists.Upload_at AS Artist_Upload_at, 
Albums.Album_id, Albums.Artist_id, Albums.Name AS Album_name, Albums.Cover_img AS Album_Cover_img, Albums.Created_at AS Album_Created_at, Albums.Upload_at AS Album_Upload_at,
Song_id, Songs.Album_id, Songs.Artist_id, YouTube_Link, Title, Length, Track_Number, Lyrics, Songs.Created_at AS Song_Created_at, Songs.Upload_at AS Song_Upload_at
FROM artists 
LEFT JOIN Albums ON Artists.Artist_id = Albums.Artist_id 
WHERE Artists.artist_id = id;
END$$
DELIMITER ;

DROP procedure IF EXISTS `SongArtistAlbum`;
DELIMITER $$
USE `spotify`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `SongArtistAlbum`(IN id INT)
BEGIN
SELECT 
Song_id, Songs.Album_id, Songs.Artist_id, YouTube_Link, Title, Length, Track_Number, Lyrics, Songs.Created_at AS Song_Created_at, Songs.Upload_at AS Song_Upload_at,
Artists.Artist_id, Artists.Name AS Artist_name, Artists.Cover_img AS Artist_Cover_img , Artists.Created_at AS Artist_Created_at, Artists.Upload_at AS Artist_Upload_at, 
Albums.Album_id, Albums.Artist_id, Albums.Name AS Album_name, Albums.Cover_img AS Album_Cover_img, Albums.Created_at AS Album_Created_at, Albums.Upload_at AS Album_Upload_at
FROM Songs 
LEFT JOIN Artists ON Songs.Artist_id = Artists.Artist_id
LEFT JOIN Albums ON Songs.Album_id = Albums.Album_id
WHERE Songs.Song_id = id;
END$$


DROP procedure IF EXISTS `AlbumArtistSongs`;
DELIMITER $$
USE `spotify`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `AlbumArtistSongs`(IN id INT)
BEGIN
SELECT 
Albums.Album_id, Albums.Artist_id, Albums.Name AS Album_name, Albums.Cover_img AS Album_Cover_img, Albums.Created_at AS Album_Created_at, Albums.Upload_at AS Album_Upload_at,
Artists.Artist_id, Artists.Name AS Artist_name, Artists.Cover_img AS Artist_Cover_img , Artists.Created_at AS Artist_Created_at, Artists.Upload_at AS Artist_Upload_at, 
Song_id, Songs.Album_id, Songs.Artist_id, YouTube_Link, Title, Length, Track_Number, Lyrics, Songs.Created_at AS Song_Created_at, Songs.Upload_at AS Song_Upload_at
FROM Albums 
LEFT JOIN Artists ON Albums.Artist_id = Artists.Artist_id
LEFT JOIN Songs ON Albums.Album_id = Songs.Album_id
WHERE Albums.Album_id = id;
END$$



