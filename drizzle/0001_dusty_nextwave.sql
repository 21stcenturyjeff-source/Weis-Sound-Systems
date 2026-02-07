CREATE TABLE `gallery_photos` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(255) NOT NULL,
	`description` text,
	`imageUrl` text NOT NULL,
	`imageKey` varchar(512) NOT NULL,
	`uploadedBy` int NOT NULL,
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `gallery_photos_id` PRIMARY KEY(`id`)
);
