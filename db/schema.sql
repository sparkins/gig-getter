CREATE DATABASE IF NOT EXISTS giggetter_db;

USE giggetter_db;

CREATE TABLE IF NOT EXISTS users(
    userId INT AUTO_INCREMENT,
    username VARCHAR(100) NOT NULL,
	email VARCHAR(255) NOT NULL UNIQUE,
	password_hash VARCHAR(255) NOT NULL,
    isABusiness BOOLEAN NOT NULL DEFAULT false,
    PRIMARY KEY (userId)
); 

CREATE TABLE IF NOT EXISTS categories(
    categoryId INT AUTO_INCREMENT,
    category_name VARCHAR(255) NOT NULL,
    -- possibly add post text/content, so that ad category and ad body can be submitted in one form into a db table  
    -- something like [description TEXT NOT NULL,]
    PRIMARY KEY (categoryId)
); 

CREATE TABLE IF NOT EXISTS businesses(
    businessId INT AUTO_INCREMENT,
    categoryId INT NOT NULL,
    business_name VARCHAR(50) NOT NULL,
    FOREIGN KEY (categoryId) REFERENCES categories(categoryId),
    PRIMARY KEY (businessId)
); 

CREATE TABLE IF NOT EXISTS jobs(
    jobId INT AUTO_INCREMENT,
    userId INT NOT NULL,
    businessId INT NOT NULL,
    categoryId INT NOT NULL,
    rating INT,
    review VARCHAR(255),
    cost DECIMAL (10,2) NOT NULL,
    FOREIGN KEY (userId) REFERENCES users(userId),
    FOREIGN KEY (businessId) REFERENCES businesses(businessId),
    FOREIGN KEY (categoryId) REFERENCES categories(categoryId),
    PRIMARY KEY (jobId)
); 