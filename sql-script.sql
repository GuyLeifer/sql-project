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
  Lyrics varchar(255),
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

INSERT INTO Playlists(Name, Songs_List) 
VALUES
('Rock', '[1,2,3,4,5]'),
('Rock_2', '[2,6,3,7,9]');

INSERT INTO Artists(Name, Cover_img, Created_at, Upload_at) 
VALUES
('Green Day', 'https://i.pinimg.com/originals/88/03/d7/8803d7ec675006ca7c23d244b7ff0104.jpg', '2011-03-13 02:53:50' , '2011-03-13 02:53:50' ),
('Coldplay', 'https://www.eventim.co.il/obj/media/IL-eventim/galery/222x222/c/coldplay-tickets.jpg', '2000-03-13 02:53:50' , '2002-03-13 02:53:50' );

-- INSERT INTO Users(Name, Email, Created_at, Upload_at, Password, Is_Admin, Preferences, Remember_token) 
-- VALUES(, , , , , , , );

INSERT INTO Albums(Artist_id ,Name, Created_at, Cover_img) 
VALUES
(1, 'American Idiot', '2004-09-01', 'https://upload.wikimedia.org/wikipedia/en/e/ed/Green_Day_-_American_Idiot_album_cover.png'),
(2, 'Minutes to Midnight', '2007-05-09', 'https://upload.wikimedia.org/wikipedia/en/7/7a/Minutes_to_Midnight_cover.jpg'),
(1, 'Father of All Motherfuckers', '2020-02-07', 'https://s3-us-west-1.amazonaws.com/static-spin-com/files/2020/02/69989279_10157590914134521_3911858824536915968_o-1580941206.jpg');

INSERT INTO Songs(Album_id, Artist_id, Youtube_Link, Title, Length, Track_Number, Created_at) 
VALUES
('1','1','https://www.youtube.com/watch?v=h6Z5N0Z6zH0&list=PLXuIvjrZxFRHrpoynSdvJAd2sV0zKfsaj', 'American Idiot' , '02:54', '1', '2013-01-01'),
('1','1','https://www.youtube.com/watch?v=JMcNzjzw63I&list=PLXuIvjrZxFRHrpoynSdvJAd2sV0zKfsaj&index=2', 'Jesus of Suburbia 1', '09:14', '2', '2013-01-01'),
('1','1','https://www.youtube.com/watch?v=l2hA8g1cNvQ&list=PLXuIvjrZxFRHrpoynSdvJAd2sV0zKfsaj&index=3', 'Holiday', '03:53', '3', '2013-01-01'),
('1','1','https://www.youtube.com/watch?v=Dx1SPxGn-iU&list=PLXuIvjrZxFRHrpoynSdvJAd2sV0zKfsaj&index=4', 'Boulevard of Broken Dreams', '04:21', '4', '2013-01-01'),
('1','1','https://www.youtube.com/watch?v=6HXa2gVj4mg&list=PLXuIvjrZxFRHrpoynSdvJAd2sV0zKfsaj&index=5', 'Are We the Waiting' ,'02:43', '5', '2013-01-01'),
('1','1','https://www.youtube.com/watch?v=jRu0O1J3Y4s&list=PLXuIvjrZxFRHrpoynSdvJAd2sV0zKfsaj&index=6', 'St. Jimmy', '02:55', '6', '2013-01-01'),
('1','1','https://www.youtube.com/watch?v=ZKAwIwjHwZI&list=PLXuIvjrZxFRHrpoynSdvJAd2sV0zKfsaj&index=7', 'Give Me Novacaine', '03:26' , '7', '2013-01-01'),
('1','1','https://www.youtube.com/watch?v=eOv5fF7maFY&list=PLXuIvjrZxFRHrpoynSdvJAd2sV0zKfsaj&index=8', 'Shes A Rebel' ,'02:01', '8', '2013-01-01'),
('1','1','https://www.youtube.com/watch?v=hctq2W1z7Kc&list=PLXuIvjrZxFRHrpoynSdvJAd2sV0zKfsaj&index=9', 'Extraordinary Girl' , '03:34', '9', '2013-01-01'),
('1','1','https://www.youtube.com/watch?v=1fi-MLyBfB0&list=PLXuIvjrZxFRHrpoynSdvJAd2sV0zKfsaj&index=10', 'Letterbomb' ,'04:06' , '10' , '2013-01-01'),
('1','1','https://www.youtube.com/watch?v=imfEO_rjpU4&list=PLXuIvjrZxFRHrpoynSdvJAd2sV0zKfsaj&index=11', 'Wake Me Up When September Ends', '04:46' , '11' , '2013-01-01'),
('1','1','https://www.youtube.com/watch?v=58hUq7hnueQ&list=PLXuIvjrZxFRHrpoynSdvJAd2sV0zKfsaj&index=12', 'Homecoming' , '09:18', '12' , '2013-01-01'),
('1','1','https://www.youtube.com/watch?v=Z2LC1xrdOaM&list=PLXuIvjrZxFRHrpoynSdvJAd2sV0zKfsaj&index=13', 'Whatsername' , '04:12' , '13' , '2013-01-01'),
('2','2','https://www.youtube.com/watch?v=Me7TJDHCELk', 'Wake', '01:41', '1', '2015-03-27');
-- INSERT INTO Interactions(Username_id, Song_id, Is_liked, Play_count, Created_at) 
-- VALUES(, , , , );

DROP procedure IF EXISTS `ArtistAlbum`;

DELIMITER $$
USE `spotify`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ArtistAlbum`(IN id INT)
BEGIN
SELECT Artists.Artist_id, Artists.Name AS Artist_name, Artists.Cover_img AS Artist_Cover_img , Artists.Created_at AS Artist_Created_at, Artists.Upload_at AS Artist_Upload_at, 
Albums.Album_id, Albums.Artist_id, Albums.Name AS Album_name, Albums.Cover_img AS Album_Cover_img, Albums.Created_at AS Album_Created_at, Albums.Upload_at AS Album_Upload_at
FROM artists LEFT JOIN Albums ON Artists.Artist_id = Albums.Artist_id WHERE Artists.artist_id = id;
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


