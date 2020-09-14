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
  Cover_img varchar(255),
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
('Coldplay', 'image/jpeg;', '2000-03-13 02:53:50' , '2002-03-13 02:53:50' );

-- INSERT INTO Users(Name, Email, Created_at, Upload_at, Password, Is_Admin, Preferences, Remember_token) 
-- VALUES(, , , , , , , );

INSERT INTO Albums(Artist_id ,Name, Created_at) 
VALUES
(1, 'American Idiot', '2011-03-09');

INSERT INTO Songs(Album_id, Artist_id, Youtube_Link, Title, Length, Track_Number, Created_at) 
VALUES
('1','1','h6Z5N0Z6zH0', 'American Idiot' , '02:54', '1', '2013-01-01'),
('1','1','<iframe width="560" height="315" src="https://www.youtube.com/embed/JMcNzjzw63I" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', 'Jesus of Suburbia 1', '09:14', '2', '2013-01-01'),
('1','1','<iframe width="560" height="315" src="https://www.youtube.com/embed/l2hA8g1cNvQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', 'Holiday', '03:53', '3', '2013-01-01'),
('1','1','<iframe width="560" height="315" src="https://www.youtube.com/embed/Dx1SPxGn-iU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', 'Boulevard of Broken Dreams', '04:21', '4', '2013-01-01'),
('1','1','<iframe width="560" height="315" src="https://www.youtube.com/embed/6HXa2gVj4mg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', 'Are We the Waiting' ,'02:43', '5', '2013-01-01'),
('1','1','<iframe width="560" height="315" src="https://www.youtube.com/embed/jRu0O1J3Y4s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', 'St. Jimmy', '02:55', '6', '2013-01-01'),
('1','1','<iframe width="560" height="315" src="https://www.youtube.com/embed/ZKAwIwjHwZI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', 'Give Me Novacaine', '03:26' , '7', '2013-01-01'),
('1','1','<iframe width="560" height="315" src="https://www.youtube.com/embed/eOv5fF7maFY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', 'Shes A Rebel' ,'02:01', '8', '2013-01-01'),
('1','1','<iframe width="560" height="315" src="https://www.youtube.com/embed/hctq2W1z7Kc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', 'Extraordinary Girl' , '03:34', '9', '2013-01-01'),
('1','1','<iframe width="560" height="315" src="https://www.youtube.com/embed/1fi-MLyBfB0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', 'Letterbomb' ,'04:06' , '10' , '2013-01-01'),
('1','1','<iframe width="560" height="315" src="https://www.youtube.com/embed/ulRXvH8VOl8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', 'Wake Me Up When September Ends', '04:46' , '11' , '2013-01-01'),
('1','1','<iframe width="560" height="315" src="https://www.youtube.com/embed/58hUq7hnueQ" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', 'Homecoming' , '09:18', '12' , '2013-01-01'),
('1','1','<iframe width="560" height="315" src="https://www.youtube.com/embed/Z2LC1xrdOaM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>', 'Whatsername' , '04:12' , '13' , '2013-01-01');

-- INSERT INTO Interactions(Username_id, Song_id, Is_liked, Play_count, Created_at) 
-- VALUES(, , , , );
