
CREATE TABLE easy_math_questions (
   question         VARCHAR (100),
   correct_answer   INT NOT NULL,
   wrong_answer_1   INT NOT NULL,
   wrong_answer_2   INT,
   wrong_answer_3   INT,

   PRIMARY KEY (question)

);


CREATE TABLE medium_math_questions (
   question         VARCHAR (100),
   correct_answer   VARCHAR (100),
   wrong_answer_1   VARCHAR (100) NOT NULL,
   wrong_answer_2   VARCHAR (100),
   wrong_answer_3   VARCHAR (100),

   PRIMARY KEY (question)

);


CREATE TABLE hard_math_questions (
   question         VARCHAR (100),
   correct_answer   VARCHAR (100),
   wrong_answer_1   VARCHAR (100) NOT NULL,
   wrong_answer_2   VARCHAR (100),
   wrong_answer_3   VARCHAR (100),

   PRIMARY KEY (question)

);

INSERT INTO easy_math_questions
VALUES 
('What is 4 + 4?', 8, 44, 0, 7),
('What is 3 - 0?', 3, 0, NULL, NULL),
('What is 10 + 2?', 12, 8, 20, NULL),
('What is 1 + 1?', 2, 11, 0, 3);