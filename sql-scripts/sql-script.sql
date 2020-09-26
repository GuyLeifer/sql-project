DROP DATABASE IF EXISTS spotify;
CREATE DATABASE Spotify;
USE spotify;
CREATE TABLE Playlists (
  Playlist_id int not null auto_increment,
  Name varchar(50) not null,
  Cover_img varchar(255),
  Created_at date,
  Upload_at datetime not null default current_timestamp,
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
LEFT JOIN Songs ON Artists.Artist_id = Songs.Artist_id 
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

DROP procedure IF EXISTS `ArtistAlbums`;
DELIMITER $$
USE `spotify`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `ArtistAlbums`(IN id INT)
BEGIN
SELECT 
Artists.Artist_id, Artists.Name AS Artist_name, Artists.Cover_img AS Artist_Cover_img , Artists.Created_at AS Artist_Created_at, Artists.Upload_at AS Artist_Upload_at,
Albums.Album_id, Albums.Artist_id, Albums.Name AS Album_name, Albums.Cover_img AS Album_Cover_img, Albums.Created_at AS Album_Created_at, Albums.Upload_at AS Album_Upload_at
FROM Artists 
LEFT JOIN Albums ON Artists.Artist_id = Albums.Artist_id
WHERE Artists.Artist_id = id;
END$$

DROP procedure IF EXISTS `Playlist`;
DELIMITER $$
USE `spotify`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `playlist`(IN id INT)
BEGIN
SELECT 
Playlists.Playlist_id, Playlists.Name As Playlist_name, Playlists.Created_at As Playlist_Created_at, Playlists.Upload_at As Playlist_Upload_at, Playlists.Cover_img, 
My_playlist_songs.Song_id,
Songs.Album_id, Songs.Artist_id, YouTube_Link, Title, Length, Track_Number, Lyrics, Songs.Created_at AS Song_Created_at, Songs.Upload_at AS Song_Upload_at
FROM Playlists 
LEFT JOIN My_playlist_songs ON Playlists.Playlist_id = My_playlist_songs.Playlist_id
LEFT JOIN Songs ON My_playlist_songs.Song_id = Songs.Song_id
WHERE Playlists.Playlist_id = id;
END$$

DROP procedure IF EXISTS `all`;
DELIMITER $$
USE `spotify`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `all`()
BEGIN
SELECT 
Songs.Song_id, Songs.Album_id, Songs.Artist_id, YouTube_Link, Title, Length, Track_Number, Lyrics, Songs.Created_at AS Song_Created_at, Songs.Upload_at AS Song_Upload_at,
Artists.Artist_id, Artists.Name AS Artist_name, Artists.Cover_img AS Artist_Cover_img , Artists.Created_at AS Artist_Created_at, Artists.Upload_at AS Artist_Upload_at, 
Albums.Album_id, Albums.Artist_id, Albums.Name AS Album_name, Albums.Cover_img AS Album_Cover_img, Albums.Created_at AS Album_Created_at, Albums.Upload_at AS Album_Upload_at,
My_playlist_songs.Song_id AS My_playlist_songs_Song_id, My_playlist_songs.Playlist_id AS My_playlist_songs_Playlist_id,
Playlists.Playlist_id, Playlists.Name AS Playlist_name, Playlists.Cover_img AS Playlist_Cover_img , Playlists.Created_at AS Playlist_Created_at, Playlists.Upload_at AS Playlist_Upload_at
FROM Songs 
LEFT JOIN Artists ON Songs.Artist_id = Artists.Artist_id
LEFT JOIN Albums ON Songs.Album_id = Albums.Album_id
LEFT JOIN My_playlist_songs ON Songs.Song_id = My_playlist_songs.Song_id
LEFT JOIN Playlists ON My_playlist_songs.Playlist_id = Playlists.Playlist_id;
END$$



