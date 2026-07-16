-- Create Database Architecture Matrix
CREATE DATABASE IF NOT EXISTS DevChainDB;
USE DevChainDB;

-- 1. Master Users Registry Layout
CREATE TABLE IF NOT EXISTS users (
    user_id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Decentralized Innovations Cache Link Layout
CREATE TABLE IF NOT EXISTS innovations (
    innovation_id INT PRIMARY KEY AUTO_INCREMENT,
    user_id INT,
    title VARCHAR(200) NOT NULL,
    description TEXT,
    ipfs_hash VARCHAR(100), -- Secure dynamic hash mapping reference
    submission_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id) ON DELETE CASCADE
);

