use master
Create DATABASE LoginDB;

CREATE TABLE UserCredentials (
	UserId INT IDENTITY(1, 1) Primary Key,
	Username NVARCHAR(50) NOT NULL,
	PasswordHash NVARCHAR(50) NOT NULL);

Insert Into UserCredentials (Username, PasswordHash)
Values ('Arutab', '1411'),
		('User1', '1111');

