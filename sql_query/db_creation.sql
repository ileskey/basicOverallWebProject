create DATABASE bookstore;
USE bookstore;
create TABLE books (
	id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255),
    price INT NOT NULL,
    category VARCHAR(50) NOT NULL,
    image VARCHAR(511) ,
    rating DECIMAL(2,1) DEFAULT 0.0,
    description TEXT,
    published_date DATE,
    publisher VARCHAR(255),
    isbn VARCHAR(20),
    stock INT DEFAULT 10
);
create TABLE reviews (
	id INT,
    productId INT,
    author varchar(255),
    rating int,
    comment varchar(1023)
);