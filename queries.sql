CREATE TABLE IF NOT EXISTS labook_users(
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS labook_posts(
    id VARCHAR(255) PRIMARY KEY,
    photo VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL,
    type ENUM("normal", "event") DEFAULT "normal",
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    author_id VARCHAR(255),
    FOREIGN KEY (author_id) REFERENCES labook_users (id)
);

CREATE TABLE IF NOT EXISTS labook_friendship(
    id VARCHAR(255) PRIMARY KEY,
    user_id VARCHAR(255),
    user_friend_id VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES labook_users (id),
    FOREIGN KEY (user_friend_id) REFERENCES labook_users (id)
);

SELECT * FROM labook_users;

SELECT * FROM labook_posts;

SELECT * FROM labook_friendship;
