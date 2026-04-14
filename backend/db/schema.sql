-- USERS
CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    name TEXT,
    email TEXT,
    password TEXT
);

INSERT INTO users VALUES
('1', 'Junniya L', 'junniya16@gmail.com', 'junniya');


-- GAME CATEGORIES
CREATE TABLE IF NOT EXISTS gameCategories (
    id TEXT PRIMARY KEY,
    title TEXT,
    description TEXT
);

INSERT INTO gameCategories VALUES
('tamilWordMatch', 'Tamil Word Match', 'Match Tamil words with meanings'),
('malayalamWordMatch', 'Malayalam Word Match', 'Match Malayalam words'),
('memoryMatch', 'Memory Match', 'Memory card matching game');


-- GAME TASKS
CREATE TABLE IF NOT EXISTS gameTasks (
    id TEXT PRIMARY KEY,
    categoryId TEXT,
    title TEXT,
    description TEXT,
    isUnlocked INTEGER,
    slug TEXT
);

INSERT INTO gameTasks VALUES
('tamilMatchWords', 'tamilWordMatch', 'Task 1: Match Words with Images', 'Match Tamil words with images', 1, 'matchWords'),
('tamilSentenceBuilding', 'tamilWordMatch', 'Task 2: Sentence Building', 'Build Tamil sentences', 1, 'sentenceBuilding'),
('memoryEasy', 'memoryMatch', 'Task 1: Easy Level', '4x4 grid', 1, 'easy');


-- WORD PAIRS
CREATE TABLE IF NOT EXISTS wordPairs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    taskId TEXT,
    word TEXT,
    translation TEXT,
    imageUrl TEXT
);

INSERT INTO wordPairs (taskId, word, translation, imageUrl) VALUES
('tamilMatchWords', 'தண்ணீர்', 'Water', '/images/water.png'),
('tamilMatchWords', 'உணவு', 'Food', '/images/food.png'),
('tamilMatchWords', 'நண்பன்', 'Friend', '/images/friend.png');


-- SENTENCES
CREATE TABLE IF NOT EXISTS sentences (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    taskId TEXT,
    sentence TEXT,
    translation TEXT
);

INSERT INTO sentences (taskId, sentence, translation) VALUES
('tamilSentenceBuilding', 'நான் பள்ளிக்கு செல்கிறேன்', 'I am going to school'),
('tamilSentenceBuilding', 'என் பெயர் ராம்', 'My name is Ram');


-- GRAMMAR
CREATE TABLE IF NOT EXISTS grammar (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    language TEXT,
    topic TEXT,
    description TEXT
);

INSERT INTO grammar VALUES
(1, 'Tamil', 'sentenceStructure', 'SOV order'),
(2, 'Malayalam', 'sentenceStructure', 'SOV order');


-- PHRASES
CREATE TABLE IF NOT EXISTS phrases (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    language TEXT,
    category TEXT,
    phrase TEXT,
    transliteration TEXT,
    meaning TEXT
);

INSERT INTO phrases (language, category, phrase, transliteration, meaning) VALUES
('Tamil', 'greetings', 'வணக்கம்', 'vanakkam', 'Hello'),
('Malayalam', 'greetings', 'ഹലോ', 'halo', 'Hello');


-- QUIZZES
CREATE TABLE IF NOT EXISTS quizzes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    category TEXT,
    title TEXT,
    description TEXT
);

CREATE TABLE IF NOT EXISTS quizQuestions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    quizId INTEGER,
    question TEXT,
    correctAnswer TEXT,
    explanation TEXT
);

CREATE TABLE IF NOT EXISTS quizOptions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    questionId INTEGER,
    optionText TEXT
);

INSERT INTO quizzes (category, title, description) VALUES
('tamilVocabulary', 'Tamil Vocabulary Quiz', 'Test Tamil vocabulary');

INSERT INTO quizQuestions (quizId, question, correctAnswer, explanation) VALUES
(1, 'What is the Tamil word for water?', 'தண்ணீர்', 'Means water in Tamil');

INSERT INTO quizOptions (questionId, optionText) VALUES
(1, 'தண்ணீர்'),
(1, 'காற்று'),
(1, 'நெருப்பு'),
(1, 'மண்');
