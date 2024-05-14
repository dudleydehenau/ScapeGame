CREATE TABLE `scapegame`.`user` (
  `userId` int NOT NULL AUTO_INCREMENT,
  `userFName` varchar(50) NOT NULL,
  `userLName` varchar(50) NOT NULL,
  `userBirth` date NOT NULL,
  `userPassword` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  PRIMARY KEY (`userId`)
);

CREATE TABLE `scapegame`.`level` (
  `levelId` int NOT NULL AUTO_INCREMENT,
  `levelName` varchar(100) NOT NULL,
  `userId` int NOT NULL,
  `difficulty` TINYINT NOT NULL,
  `theme` VARCHAR(50) NOT NULL,
  `likes` INT NOT NULL DEFAULT 0,
  `publication_date` DATE NOT NULL,
  `views` INT NOT NULL DEFAULT 0,
  PRIMARY KEY (`levelId`),
  CONSTRAINT `userLevelFK` FOREIGN KEY (`userId`) REFERENCES `scapegame`.`user` (`userId`)
);

CREATE TABLE `scapegame`.`scoreboard` (
  `levelId` int NOT NULL,
  `userId` int NOT NULL,
  `scoreBTime` int DEFAULT NULL,
  PRIMARY KEY (`userId`,`levelId`),
  CONSTRAINT `levelScoreFK` FOREIGN KEY (`levelId`) REFERENCES `scapegame`.`level` (`levelId`),
  CONSTRAINT `userScoreFK` FOREIGN KEY (`userId`) REFERENCES `scapegame`.`user` (`userId`)
);

CREATE TABLE `scapegame`.`commentary` (
  `userId` int NOT NULL,
  `levelId` int NOT NULL,
  `commentaryId` int NOT NULL AUTO_INCREMENT,
  `commentaryText` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`commentaryId`),
  CONSTRAINT `comLevelFK` FOREIGN KEY (`levelId`) REFERENCES `scapegame`.`level` (`levelId`),
  CONSTRAINT `comUserFK` FOREIGN KEY (`userId`) REFERENCES `scapegame`.`user` (`userId`)
);

INSERT INTO `scapegame`.`level` (`levelName`, `userId`, `difficulty`, `theme`, `likes`, `publication_date`, `views`)
VALUES ('chambre', 1, 5, 'casse-tete', 10, CURDATE(), 100);