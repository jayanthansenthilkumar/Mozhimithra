const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Mock Data based on the UI requirements
const courses = [
  {
    id: '1',
    title: 'Tamil for Beginners',
    slug: 'tamil-beginners',
    description: 'Master the basics of Tamil. Learn to introduce yourself, order food, and navigate daily conversations in South India with confidence.',
    level: 'A1 Beginner',
    students: '42.1k',
    totalXP: 500,
    chapters: [
      {
        id: 'c1',
        title: 'Vanakkam & Greetings',
        lessons: [
            { id: 'l1', title: 'Saying Hello', type: 'reading', xp: 10 },
            { id: 'l2', title: 'Formal vs Informal', type: 'listening', xp: 15 },
            { id: 'l3', title: 'Common Responses', type: 'speaking', xp: 20 },
            { id: 'l4', title: 'Quiz: Greetings', type: 'quiz', xp: 30 }
        ],
        completed: 4
      },
      {
        id: 'c2',
        title: 'Numbers & Time',
        lessons: [
            { id: 'l5', title: '1 to 10', type: 'reading', xp: 10 },
            { id: 'l6', title: 'Telling Time', type: 'listening', xp: 15 }
        ],
        completed: 2
      }
    ]
  },
  {
    id: '2',
    title: 'Hindi Essentials',
    slug: 'hindi-essentials',
    description: 'Learn conversational Hindi for business and travel.',
    level: 'A1 Beginner',
    students: '15k',
    totalXP: 400,
    chapters: []
  }
];

const userData = {
    name: 'Junniya',
    rank: 'Top 4.2%',
    lexicon: '14.2K',
    streak: 21,
    xp: 2450,
    fluency: 74,
    phoneticSignature: 'TN-TML/99'
};

const leaderboard = [
    { id: '1', name: 'Arjun', xp: 15200, avatar: 'https://i.pravatar.cc/150?u=1' },
    { id: '2', name: 'Priya', xp: 14800, avatar: 'https://i.pravatar.cc/150?u=2' },
    { id: '3', name: 'Junniya', xp: 14200, avatar: 'https://i.pravatar.cc/150?u=3', isMe: true },
    { id: '4', name: 'Rahul', xp: 13500, avatar: 'https://i.pravatar.cc/150?u=4' }
];

const vocabulary = {
    stats: {
        learned: 260,
        mastered: 108
    },
    categories: [
        { id: '1', name: 'Greetings', count: 15, mastered: 15, color: '#4ECDC4' },
        { id: '2', name: 'Food & Drinks', count: 120, mastered: 45, color: '#FF7F50' },
        { id: '3', name: 'Travel', count: 85, mastered: 10, color: '#9b7ede' },
        { id: '4', name: 'Animals', count: 40, mastered: 38, color: '#FFD700' },
    ]
};

const lessonsContent = {
    'l1': {
        id: 'l1',
        title: 'Saying Hello',
        question: 'Translate "Hello"',
        target: 'Hello',
        options: [
            { id: '1', text: 'Vanakkam', correct: true },
            { id: '2', text: 'Poyi Varam', correct: false },
            { id: '3', text: 'Nandri', correct: false },
            { id: '4', text: 'Saaptacha?', correct: false },
        ],
        xp: 10
    },
    'l2': {
        id: 'l2',
        title: 'Formal vs Informal',
        question: 'Translate "How are you?" (Formal)',
        target: 'How are you?',
        options: [
            { id: '1', text: 'Yeppadi irukkeenga?', correct: true },
            { id: '2', text: 'Yeppadi irukke?', correct: false },
            { id: '3', text: 'Nalla iruken', correct: false },
            { id: '4', text: 'Vanga', correct: false },
        ],
        xp: 15
    }
};

// Routes
app.get('/api/user', (req, res) => res.json(userData));
app.get('/api/courses', (req, res) => res.json(courses));
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === req.params.id);
    course ? res.json(course) : res.status(404).json({ message: 'Course not found' });
});
app.get('/api/leaderboard', (req, res) => res.json(leaderboard));
app.get('/api/vocabulary', (req, res) => res.json(vocabulary));
app.get('/api/lessons/:id', (req, res) => {
    const lesson = lessonsContent[req.params.id];
    lesson ? res.json(lesson) : res.status(404).json({ message: 'Lesson not found' });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
