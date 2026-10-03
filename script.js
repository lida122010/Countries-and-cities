// script.js — Travel Vocabulary Quiz Game

// ---------- DATA ----------
const questions = [
  // 1. Simple: country -> nationality (repeat)
  {
    type: 'multiple',
    question: '🇬🇪 Georgia → nationality?',
    options: ['Georgian', 'Turkish', 'Egyptian', 'Emirati'],
    correct: 'Georgian',
    hint: '',
    explanation: 'Georgia → Georgian'
  },
  // 2. Simple: country -> nationality
  {
    type: 'multiple',
    question: '🇹🇷 Turkey → nationality?',
    options: ['Turkish', 'Thai', 'Chinese', 'Vietnamese'],
    correct: 'Turkish',
    hint: '',
    explanation: 'Turkey → Turkish'
  },
  // 3. Simple: country -> nationality
  {
    type: 'multiple',
    question: '🇪🇬 Egypt → nationality?',
    options: ['Egyptian', 'Emirati', 'Maldivian', 'Georgian'],
    correct: 'Egyptian',
    hint: '',
    explanation: 'Egypt → Egyptian'
  },
  // 4. Simple: country -> nationality
  {
    type: 'multiple',
    question: '🇦🇪 The UAE → nationality?',
    options: ['Emirati', 'Egyptian', 'Turkish', 'Thai'],
    correct: 'Emirati',
    hint: '',
    explanation: 'The UAE → Emirati'
  },
  // 5. Simple: country -> nationality
  {
    type: 'multiple',
    question: '🇹🇭 Thailand → nationality?',
    options: ['Thai', 'Chinese', 'Vietnamese', 'Maldivian'],
    correct: 'Thai',
    hint: '',
    explanation: 'Thailand → Thai'
  },
  // 6. Simple: country -> nationality
  {
    type: 'multiple',
    question: '🇨🇳 China → nationality?',
    options: ['Chinese', 'Vietnamese', 'Thai', 'Georgian'],
    correct: 'Chinese',
    hint: '',
    explanation: 'China → Chinese'
  },
  // 7. Simple: country -> nationality
  {
    type: 'multiple',
    question: '🇻🇳 Vietnam → nationality?',
    options: ['Vietnamese', 'Chinese', 'Thai', 'Emirati'],
    correct: 'Vietnamese',
    hint: '',
    explanation: 'Vietnam → Vietnamese'
  },
  // 8. Simple: country -> nationality
  {
    type: 'multiple',
    question: '🇲🇻 The Maldives → nationality?',
    options: ['Maldivian', 'Emirati', 'Egyptian', 'Turkish'],
    correct: 'Maldivian',
    hint: '',
    explanation: 'The Maldives → Maldivian'
  },
  // 9. Target vocabulary: place definition
  {
    type: 'multiple',
    question: '🏙️ What is a "city"?',
    options: ['A large town', 'A small village', 'A beach', 'A coast'],
    correct: 'A large town',
    hint: '',
    explanation: 'City = large town.'
  },
  // 10. Target vocabulary: place definition
  {
    type: 'multiple',
    question: '🏛️ What is a "capital"?',
    options: ['The main city of a country', 'A small island', 'A quiet village', 'A crowded beach'],
    correct: 'The main city of a country',
    hint: '',
    explanation: 'Capital = main city.'
  },
  // 11. Target vocabulary: place definition
  {
    type: 'multiple',
    question: '🏘️ What is a "town"?',
    options: ['Smaller than a city', 'Bigger than a city', 'Same as a village', 'A beach area'],
    correct: 'Smaller than a city',
    hint: '',
    explanation: 'Town = smaller than a city.'
  },
  // 12. Target vocabulary: place definition
  {
    type: 'multiple',
    question: '🌾 What is a "village"?',
    options: ['A very small place in the countryside', 'A big modern city', 'A noisy downtown', 'An expensive coast'],
    correct: 'A very small place in the countryside',
    hint: '',
    explanation: 'Village = very small, countryside.'
  },
  // 13. Target vocabulary: place definition
  {
    type: 'multiple',
    question: '🏖️ What is a "beach"?',
    options: ['Sandy area near the sea', 'A mountain', 'A big city', 'An island'],
    correct: 'Sandy area near the sea',
    hint: '',
    explanation: 'Beach = sand near the sea.'
  },
  // 14. Target vocabulary: place definition
  {
    type: 'multiple',
    question: '🌊 What is a "coast"?',
    options: ['Land near the sea', 'A river', 'A desert', 'A forest'],
    correct: 'Land near the sea',
    hint: '',
    explanation: 'Coast = land by the sea.'
  },
  // 15. Target vocabulary: place definition
  {
    type: 'multiple',
    question: '🏝️ What is an "island"?',
    options: ['Land surrounded by water', 'A big city', 'A beach', 'A village'],
    correct: 'Land surrounded by water',
    hint: '',
    explanation: 'Island = land with water all around.'
  },
  // 16. Target vocabulary: place definition
  {
    type: 'multiple',
    question: '🏢 What is "downtown"?',
    options: ['The central part of a city', 'A small village', 'A beach', 'A coast'],
    correct: 'The central part of a city',
    hint: '',
    explanation: 'Downtown = city center.'
  },
  // 17. Adjectives: simple definition
  {
    type: 'multiple',
    question: '✨ "beautiful" means...',
    options: ['Very pretty', 'Very ugly', 'Very old', 'Very cheap'],
    correct: 'Very pretty',
    hint: '',
    explanation: 'Beautiful = very pretty.'
  },
  // 18. Adjectives
  {
    type: 'multiple',
    question: '👥 "crowded" means...',
    options: ['Full of people', 'Empty', 'Quiet', 'Cheap'],
    correct: 'Full of people',
    hint: '',
    explanation: 'Crowded = many people.'
  },
  // 19. Adjectives
  {
    type: 'multiple',
    question: '🤫 "quiet" means...',
    options: ['Not noisy', 'Very loud', 'Expensive', 'Modern'],
    correct: 'Not noisy',
    hint: '',
    explanation: 'Quiet = not noisy.'
  },
  // 20. Adjectives
  {
    type: 'multiple',
    question: '🔊 "noisy" means...',
    options: ['Loud', 'Quiet', 'Old', 'Cheap'],
    correct: 'Loud',
    hint: '',
    explanation: 'Noisy = loud.'
  },
  // 21. Adjectives
  {
    type: 'multiple',
    question: '💰 "expensive" means...',
    options: ['Costs a lot', 'Costs little', 'Very old', 'Very beautiful'],
    correct: 'Costs a lot',
    hint: '',
    explanation: 'Expensive = high price.'
  },
  // 22. Adjectives
  {
    type: 'multiple',
    question: '🪙 "cheap" means...',
    options: ['Costs little', 'Costs a lot', 'Modern', 'Crowded'],
    correct: 'Costs little',
    hint: '',
    explanation: 'Cheap = low price.'
  },
  // 23. Adjectives
  {
    type: 'multiple',
    question: '🏢 "modern" means...',
    options: ['New style', 'Old style', 'Quiet', 'Noisy'],
    correct: 'New style',
    hint: '',
    explanation: 'Modern = new, up-to-date.'
  },
  // 24. Adjectives
  {
    type: 'multiple',
    question: '🏺 "old" means...',
    options: ['Not new', 'Modern', 'Cheap', 'Beautiful'],
    correct: 'Not new',
    hint: '',
    explanation: 'Old = not new.'
  },
  // 25. Mixed: sentence completion
  {
    type: 'multiple',
    question: '🇹🇭 Bangkok is the ______ of Thailand.',
    options: ['capital', 'village', 'beach', 'island'],
    correct: 'capital',
    hint: '',
    explanation: 'Bangkok is the capital of Thailand.'
  },
  // 26. Mixed
  {
    type: 'multiple',
    question: 'The Maldives are famous for beautiful ______.',
    options: ['beaches', 'downtowns', 'villages', 'coasts'],
    correct: 'beaches',
    hint: '',
    explanation: 'The Maldives = beaches.'
  },
  // 27. Mixed
  {
    type: 'multiple',
    question: 'A ______ is smaller than a city.',
    options: ['town', 'capital', 'downtown', 'coast'],
    correct: 'town',
    hint: '',
    explanation: 'Town < city.'
  },
  // 28. Mixed with flag hint
  {
    type: 'multiple',
    question: '🇻🇳 Hanoi is the capital of ______.',
    options: ['Vietnam', 'Thailand', 'China', 'Georgia'],
    correct: 'Vietnam',
    hint: 'Vietnamese people live there.',
    explanation: 'Hanoi → Vietnam.'
  },
  // 29. Nationality from context
  {
    type: 'multiple',
    question: 'A person from China is ______.',
    options: ['Chinese', 'Thai', 'Vietnamese', 'Emirati'],
    correct: 'Chinese',
    hint: '',
    explanation: 'China → Chinese.'
  },
  // 30. Adjective in context
  {
    type: 'multiple',
    question: 'Tokyo is very ______. There are many people.',
    options: ['crowded', 'quiet', 'cheap', 'old'],
    correct: 'crowded',
    hint: '',
    explanation: 'Many people = crowded.'
  }
];

// ---------- GAME STATE ----------
let currentQuestionIndex = 0;
let score = 0;
let answered = false;
let currentQuestions = []; // will hold shuffled subset (10 questions)

// DOM elements
const scoreDisplay = document.getElementById('scoreDisplay');
const questionCounter = document.getElementById('questionCounter');
const progressFill = document.getElementById('progressFill');
const questionText = document.getElementById('questionText');
const hintText = document.getElementById('hintText');
const optionsContainer = document.getElementById('optionsContainer');
const feedbackMessage = document.getElementById('feedbackMessage');
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');

// ---------- AUDIO (simple beep with Web Audio API) ----------
function playSound(type) {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    if (type === 'correct') {
      oscillator.frequency.value = 800;
      gainNode.gain.value = 0.15;
      oscillator.type = 'sine';
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.15);
    } else if (type === 'wrong') {
      oscillator.frequency.value = 300;
      gainNode.gain.value = 0.1;
      oscillator.type = 'sawtooth';
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.2);
    } else if (type === 'next') {
      oscillator.frequency.value = 600;
      gainNode.gain.value = 0.08;
      oscillator.type = 'triangle';
      oscillator.start();
      oscillator.stop(audioCtx.currentTime + 0.1);
    } else if (type === 'finish') {
      // little arpeggio
      oscillator.frequency.value = 523.25; // C5
      gainNode.gain.value = 0.1;
      oscillator.start();
      oscillator.frequency.value = 659.25; // E5
      oscillator.frequency.value = 783.99; // G5
      oscillator.stop(audioCtx.currentTime + 0.5);
    }
  } catch (e) {
    // Audio might not be allowed
  }
}

// ---------- SHUFFLE ARRAY ----------
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// ---------- INIT GAME (pick 10 random questions) ----------
function initGame() {
  // reset state
  score = 0;
  currentQuestionIndex = 0;
  answered = false;
  scoreDisplay.textContent = '0';
  feedbackMessage.textContent = '';
  feedbackMessage.className = 'feedback-message';
  nextBtn.disabled = true;

  // pick 10 random questions
  const shuffled = shuffleArray([...questions]);
  currentQuestions = shuffled.slice(0, 10); // 10 questions per game

  // update progress
  updateProgress();

  // render first question
  renderQuestion();
}

// ---------- RENDER QUESTION ----------
function renderQuestion() {
  if (!currentQuestions.length) return;

  const q = currentQuestions[currentQuestionIndex];
  if (!q) return;

  // update question counter and progress
  questionCounter.textContent = `${currentQuestionIndex + 1} / ${currentQuestions.length}`;
  updateProgress();

  // question text
  questionText.textContent = q.question;

  // hint (if any)
  if (q.hint) {
    hintText.textContent = `💡 ${q.hint}`;
  } else {
    hintText.textContent = '';
  }

  // clear options
  optionsContainer.innerHTML = '';

  // shuffle options for display
  const shuffledOptions = shuffleArray([...q.options]);

  // create option buttons
  shuffledOptions.forEach(opt => {
    const btn = document.createElement('button');
    btn.classList.add('option-btn');
    btn.textContent = opt;
    btn.dataset.value = opt;

    btn.addEventListener('click', () => handleOptionClick(btn, q.correct, q.explanation));
    optionsContainer.appendChild(btn);
  });

  // reset answered flag and feedback
  answered = false;
  feedbackMessage.textContent = '';
  feedbackMessage.className = 'feedback-message';
  nextBtn.disabled = true;

  // if it's the last question, change next button text to "FINISH"
  if (currentQuestionIndex === currentQuestions.length - 1) {
    nextBtn.textContent = 'FINISH 🏁';
  } else {
    nextBtn.textContent = 'NEXT ➡';
  }
}

// ---------- HANDLE OPTION CLICK ----------
function handleOptionClick(selectedBtn, correctAnswer, explanation) {
  if (answered) return;

  const selectedValue = selectedBtn.dataset.value;
  const isCorrect = selectedValue === correctAnswer;

  // disable all option buttons
  const allOptions = document.querySelectorAll('.option-btn');
  allOptions.forEach(btn => {
    btn.disabled = true;
    if (btn.dataset.value === correctAnswer) {
      btn.classList.add('selected-correct');
    }
    if (btn === selectedBtn && !isCorrect) {
      btn.classList.add('selected-wrong');
    }
  });

  // mark answered
  answered = true;

  // update score
  if (isCorrect) {
    score += 1;
    scoreDisplay.textContent = score;
    feedbackMessage.textContent = `✅ Correct! ${explanation || ''}`;
    feedbackMessage.className = 'feedback-message correct';
    playSound('correct');
  } else {
    feedbackMessage.textContent = `❌ Oops! Correct answer: ${correctAnswer}. ${explanation || ''}`;
    feedbackMessage.className = 'feedback-message incorrect';
    playSound('wrong');
  }

  // enable next button
  nextBtn.disabled = false;

  // if last question, next button text stays FINISH
}

// ---------- NEXT BUTTON ----------
function goToNext() {
  if (!answered) return;

  // if it's the last question, finish game
  if (currentQuestionIndex === currentQuestions.length - 1) {
    finishGame();
    return;
  }

  // move to next question
  currentQuestionIndex++;
  answered = false;
  renderQuestion();
  playSound('next');
}

// ---------- FINISH GAME ----------
function finishGame() {
  // show final screen
  const total = currentQuestions.length;
  const percentage = Math.round((score / total) * 100);

  let message = '';
  let emoji = '';

  if (percentage >= 90) {
    message = 'Excellent! You are a travel expert!';
    emoji = '🌟✈️🌍';
  } else if (percentage >= 70) {
    message = 'Great job! Keep traveling!';
    emoji = '😊🏝️';
  } else if (percentage >= 50) {
    message = 'Good effort! Practice more.';
    emoji = '📚🗺️';
  } else {
    message = 'Keep learning! You can do it!';
    emoji = '💪🌍';
  }

  // clear question area and show final screen
  questionText.textContent = `🏁 You scored ${score} / ${total} (${percentage}%)`;
  hintText.textContent = message + ' ' + emoji;

  // hide options and next button
  optionsContainer.innerHTML = '';
  nextBtn.disabled = true;
  nextBtn.textContent = 'NEXT ➡';
  feedbackMessage.textContent = 'Press ⟲ to play again!';
  feedbackMessage.className = 'feedback-message';

  // play finish sound
  playSound('finish');

  // disable all interactions except restart
  answered = true;
}

// ---------- UPDATE PROGRESS ----------
function updateProgress() {
  const total = currentQuestions.length || 10;
  const current = currentQuestionIndex + 1;
  const percent = (current / total) * 100;
  progressFill.style.width = `${percent}%`;
  questionCounter.textContent = `${current} / ${total}`;
}

// ---------- RESTART ----------
function restartGame() {
  // reset everything and start new game
  initGame();
}

// ---------- EVENT LISTENERS ----------
nextBtn.addEventListener('click', goToNext);
restartBtn.addEventListener('click', restartGame);

// ---------- START GAME ----------
initGame();
