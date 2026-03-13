// ===== QUIZ APPLICATION =====
class QuizApp {
    constructor() {
        this.category = this.getCategoryFromURL();
        this.questions = this.randomizeAllAnswers([...quizData[this.category]]); // Use all questions with randomized answers
        this.currentQuestion = 0;
        this.score = 0;
        this.selectedAnswer = null;
        this.answersUsed = new Set();

        this.init();
    }

    getCategoryFromURL() {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');
        return category && quizData[category] ? category : 'biology';
    }

    shuffleArray(array) {
        // No longer used - keeping for backwards compatibility
        return array;
    }

    // Randomize answer positions while preserving the correct answer
    randomizeAnswers(question) {
        const options = [...question.options];
        const correctIndex = question.correct;

        // Create array of indices [0, 1, 2, 3]
        const indices = [0, 1, 2, 3];

        // Shuffle the indices using Fisher-Yates algorithm
        for (let i = indices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [indices[i], indices[j]] = [indices[j], indices[i]];
        }

        // Find new position of correct answer
        const newCorrectIndex = indices.indexOf(correctIndex);

        // Reorder options according to shuffled indices
        const newOptions = indices.map(index => options[index]);

        return {
            options: newOptions,
            correct: newCorrectIndex
        };
    }

    // Randomize all questions' answers
    randomizeAllAnswers(questions) {
        return questions.map(question => {
            const randomized = this.randomizeAnswers(question);
            return {
                ...question,
                options: randomized.options,
                correct: randomized.correct
            };
        });
    }

    init() {
        this.categoryBadge = document.getElementById('category-badge');
        this.questionText = document.getElementById('question-text');
        this.optionsContainer = document.getElementById('options-container');
        this.scoreDisplay = document.getElementById('score');
        this.progressBar = document.querySelector('.progress-bar');
        this.progressText = document.getElementById('progress-text');
        this.nextBtn = document.getElementById('next-btn');

        // Explanation elements
        this.explanationContainer = document.getElementById('explanation-container');
        this.explanationBox = document.getElementById('explanation-box');
        this.explanationIcon = document.getElementById('explanation-icon');
        this.explanationTitle = document.getElementById('explanation-title');
        this.explanationText = document.getElementById('explanation-text');

        this.quizCard = document.getElementById('quiz-card');
        this.resultScreen = document.getElementById('result-screen');
        this.finalScore = document.getElementById('final-score');
        this.percentage = document.getElementById('percentage');
        this.resultMessage = document.getElementById('result-message');

        this.setupEventListeners();
        this.checkForSavedProgress();
        this.setCategoryTheme();
    }

    setCategoryTheme() {
        const categoryColors = {
            biology: '#00ff88',
            physics: '#00d4ff',
            chemistry: '#ff6b6b'
        };

        const categoryNames = {
            biology: 'ජීව විද්‍යාව',
            physics: 'භෞතික විද්‍යාව',
            chemistry: 'රසායන විද්‍යාව'
        };

        const color = categoryColors[this.category];
        document.documentElement.style.setProperty('--category-color', color);

        this.categoryBadge.style.background = color;
        this.categoryBadge.textContent = categoryNames[this.category];
    }

    checkForSavedProgress() {
        const savedData = localStorage.getItem(`quiz_${this.category}`);
        if (savedData) {
            try {
                const data = JSON.parse(savedData);
                // Show resume dialog
                this.showResumeDialog(data);
            } catch (e) {
                this.loadQuestion();
            }
        } else {
            this.loadQuestion();
        }
    }

    showResumeDialog(savedData) {
        // Create overlay
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            inset: 0;
            background: rgba(10, 10, 26, 0.95);
            backdrop-filter: blur(20px);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            animation: fade-in 0.3s ease;
        `;

        const dialog = document.createElement('div');
        dialog.style.cssText = `
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(20px);
            border: 2px solid rgba(255, 255, 255, 0.2);
            border-radius: 30px;
            padding: 3rem;
            text-align: center;
            max-width: 500px;
            margin: 1rem;
            animation: popup 0.5s ease;
        `;

        dialog.innerHTML = `
            <h2 style="color: #00d4ff; margin-bottom: 1rem; font-size: 2rem;">ඔබට නැවතූ තැනසිට ඇරඹීමට 'නැවත ආරම්භ කරගන්න' Touch කරන්න </h2>
            <p style="color: rgba(255,255,255,0.9); margin-bottom: 2rem; font-size: 1.2rem; line-height: 1.6;">
                ඔබට ${savedData.currentQuestion + 1}/${savedData.totalQuestions} ප්‍රශ්නය කටයුතු කරමින් පැමිණිල්ලක් ඇත.<br><br>
                ලකුණු: ${savedData.score}<br>
                හමුවූ ප්‍රශ්න: ${savedData.currentQuestion + 1}
            </p>
            <div style="display: flex; gap: 1rem; justify-content: center;">
                <button id="resume-btn" style="
                    padding: 1rem 2.5rem;
                    background: linear-gradient(90deg, #00ff88, #00d4ff);
                    border: none;
                    border-radius: 50px;
                    color: #0a0a1a;
                    font-size: 1.1rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.3s;
                ">නැවත ආරම්භ කරගන්න</button>
                <button id="restart-btn" style="
                    padding: 1rem 2.5rem;
                    background: rgba(255, 255, 255, 0.1);
                    border: 2px solid rgba(255, 255, 255, 0.3);
                    border-radius: 50px;
                    color: white;
                    font-size: 1.1rem;
                    font-weight: 700;
                    cursor: pointer;
                    transition: all 0.3s;
                ">❤️ Restart</button>
            </div>
        `;

        overlay.appendChild(dialog);
        document.body.appendChild(overlay);

        // Add styles for animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes popup {
                0% { transform: scale(0.8); opacity: 0; }
                100% { transform: scale(1); opacity: 1; }
            }
        `;
        document.head.appendChild(style);

        // Event listeners
        document.getElementById('resume-btn').addEventListener('click', () => {
            this.resumeQuiz(savedData);
            overlay.remove();
            style.remove();
        });

        document.getElementById('restart-btn').addEventListener('click', () => {
            this.clearProgress();
            overlay.remove();
            style.remove();
            this.loadQuestion();
        });
    }

    resumeQuiz(savedData) {
        this.currentQuestion = savedData.currentQuestion;
        this.score = savedData.score;
        this.questions = savedData.questions;

        this.scoreDisplay.textContent = this.score;
        this.loadQuestion();
    }

    saveProgress() {
        const data = {
            category: this.category,
            currentQuestion: this.currentQuestion,
            score: this.score,
            totalQuestions: this.questions.length,
            questions: this.questions,
            timestamp: Date.now()
        };
        localStorage.setItem(`quiz_${this.category}`, JSON.stringify(data));
    }

    clearProgress() {
        localStorage.removeItem(`quiz_${this.category}`);
    }

    setupEventListeners() {
        this.nextBtn.addEventListener('click', () => this.nextQuestion());

        document.getElementById('home-btn').addEventListener('click', () => {
            this.goHome();
        });

        document.getElementById('home-btn-large').addEventListener('click', () => {
            this.goHome();
        });

        document.getElementById('retry-btn').addEventListener('click', () => {
            this.restartQuiz();
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (this.selectedAnswer !== null && e.key === 'Enter') {
                this.checkAnswer();
            }
        });
    }

    loadQuestion() {
        const question = this.questions[this.currentQuestion];
        this.selectedAnswer = null;
        this.nextBtn.disabled = true;
        this.nextBtn.textContent = 'ඊළඟ ප්‍රශ්නය';
        this.explanationContainer.style.display = 'none';

        // Update progress
        this.progressText.textContent = `${this.currentQuestion + 1}/${this.questions.length}`;

        // Animate question change
        this.questionText.style.opacity = '0';
        this.optionsContainer.style.opacity = '0';

        setTimeout(() => {
            this.questionText.textContent = question.question;
            this.createOptions(question.options);
            this.questionText.style.opacity = '1';
            this.optionsContainer.style.opacity = '1';
        }, 300);
    }

    createOptions(options) {
        this.optionsContainer.innerHTML = '';
        const letters = ['A', 'B', 'C', 'D'];

        options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.innerHTML = `
                <span class="option-letter">${letters[index]}</span>
                <span>${option}</span>
            `;
            btn.dataset.index = index;

            btn.addEventListener('click', () => this.selectOption(index, btn));

            this.optionsContainer.appendChild(btn);
        });
    }

    selectOption(index, btn) {
        if (this.selectedAnswer !== null) return;

        // Clear previous selection
        document.querySelectorAll('.option-btn').forEach(b => {
            b.classList.remove('selected');
        });

        // Select this option
        btn.classList.add('selected');
        this.selectedAnswer = index;

        // Enable next button
        this.nextBtn.disabled = false;
        this.nextBtn.style.opacity = '1';
        this.nextBtn.textContent = this.currentQuestion < this.questions.length - 1 ? 'ඊළඟ ප්‍රශ්නය' : 'විභාගය බලන්න';

        // Auto-check after short delay for effect
        setTimeout(() => this.checkAnswer(), 300);
    }

    checkAnswer() {
        if (this.selectedAnswer === null) return;

        const question = this.questions[this.currentQuestion];
        const buttons = document.querySelectorAll('.option-btn');
        const selectedBtn = buttons[this.selectedAnswer];
        const correctBtn = buttons[question.correct];

        const isCorrect = this.selectedAnswer === question.correct;

        // Show explanation
        this.showExplanation(isCorrect, question);

        // Mark correct answer
        if (isCorrect) {
            selectedBtn.classList.add('correct');
            this.score++;
            this.updateScore();
            this.createScoreParticles(selectedBtn);
        } else {
            selectedBtn.classList.add('incorrect');
            correctBtn.classList.add('correct');
        }

        // Disable all buttons
        buttons.forEach(btn => {
            btn.style.pointerEvents = 'none';
        });

        // Change next button text
        this.nextBtn.textContent = this.currentQuestion < this.questions.length - 1 ? 'ඊළඟ ප්‍රශ්නය' : 'විභාගය බලන්න';

        this.selectedAnswer = 'answered';
    }

    showExplanation(isCorrect, question) {
        const letters = ['A', 'B', 'C', 'D'];

        if (isCorrect) {
            this.explanationIcon.innerHTML = '✓';
            this.explanationIcon.className = 'explanation-icon correct-icon';
            this.explanationTitle.textContent = `සත්කාරකයි! (${letters[this.selectedAnswer]})`;
            this.explanationTitle.style.color = '#00ff88';
        } else {
            this.explanationIcon.innerHTML = '✗';
            this.explanationIcon.className = 'explanation-icon incorrect-icon';
            this.explanationTitle.textContent = `අසත්කාරකයි. ඔබ තෝරාගැනීම: ${letters[this.selectedAnswer]}, නිවැරදි පිළිතුර: ${letters[question.correct]}`;
            this.explanationTitle.style.color = '#ff6b6b';
        }

        this.explanationText.textContent = question.explanation;
        this.explanationContainer.style.display = 'block';

        // Animate explanation appearance
        this.explanationContainer.style.opacity = '0';
        this.explanationContainer.style.transform = 'translateY(20px)';

        setTimeout(() => {
            this.explanationContainer.style.transition = 'all 0.5s ease';
            this.explanationContainer.style.opacity = '1';
            this.explanationContainer.style.transform = 'translateY(0)';
        }, 100);
    }

    createScoreParticles(button) {
        const rect = button.getBoundingClientRect();
        const particleCount = 20;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.style.position = 'fixed';
            particle.style.left = `${rect.left + rect.width / 2}px`;
            particle.style.top = `${rect.top + rect.height / 2}px`;
            particle.style.width = '8px';
            particle.style.height = '8px';
            particle.style.background = '#00ff88';
            particle.style.borderRadius = '50%';
            particle.style.pointerEvents = 'none';
            particle.style.zIndex = '1000';

            const angle = (Math.PI * 2 * i) / particleCount;
            const velocity = 100 + Math.random() * 100;
            const vx = Math.cos(angle) * velocity;
            const vy = Math.sin(angle) * velocity;

            document.body.appendChild(particle);

            particle.animate([
                { transform: 'translate(0, 0) scale(1)', opacity: 1 },
                { transform: `translate(${vx}px, ${vy}px) scale(0)`, opacity: 0 }
            ], {
                duration: 1000,
                easing: 'ease-out'
            }).onfinish = () => particle.remove();
        }
    }

    updateScore() {
        this.scoreDisplay.textContent = this.score;
        this.scoreDisplay.style.transform = 'scale(1.3)';
        setTimeout(() => {
            this.scoreDisplay.style.transform = 'scale(1)';
        }, 300);
    }

    nextQuestion() {
        this.currentQuestion++;
        this.saveProgress();

        if (this.currentQuestion < this.questions.length) {
            this.loadQuestion();
        } else {
            this.showResults();
        }
    }

    showResults() {
        // Save completion status but don't clear - let home page show completion
        this.saveProgress();

        const total = this.questions.length;
        const percentage = Math.round((this.score / total) * 100);
        this.finalScore.textContent = `${this.score}/${total}`;
        this.percentage.textContent = `${percentage}%`;

        this.setResultMessage(percentage);

        this.quizCard.style.display = 'none';
        this.resultScreen.style.display = 'flex';

        this.createConfetti();
    }

    setResultMessage(percentage) {
        if (percentage >= 90) {
            this.resultMessage.textContent = '🌟 අලුත් විශ්වාසයට ගෙන යන හැකියාව! ඔබ මාස්ටර් වී!';
        } else if (percentage >= 70) {
            this.resultMessage.textContent = '🎉 වැදගත් සිද්ධියක්! එවිට ඉදිරියට ගිය යුතුයි!';
        } else if (percentage >= 50) {
            this.resultMessage.textContent = '👍 හොඳ කාර්යයක්! ප්‍රගතියක් තිබෙයි.';
        } else {
            this.resultMessage.textContent = '💪 හැඳින්වීමට! ඔබ හැකිය!';
        }
    }

    createConfetti() {
        const colors = ['#00ff88', '#00d4ff', '#ff6b6b', '#7b2ff7', '#ffd700'];
        const confettiCount = 100;

        for (let i = 0; i < confettiCount; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.position = 'fixed';
                confetti.style.width = '10px';
                confetti.style.height = '10px';
                confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
                confetti.style.left = `${Math.random() * 100}%`;
                confetti.style.top = '-20px';
                confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
                confetti.style.pointerEvents = 'none';
                confetti.style.zIndex = '9999';

                document.body.appendChild(confetti);

                const duration = 2000 + Math.random() * 2000;
                const rotation = Math.random() * 720;

                confetti.animate([
                    { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
                    { transform: `translateY(100vh) rotate(${rotation}deg)`, opacity: 0 }
                ], {
                    duration: duration,
                    easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }).onfinish = () => confetti.remove();
            }, i * 30);
        }
    }

    restartQuiz() {
        this.currentQuestion = 0;
        this.score = 0;
        this.scoreDisplay.textContent = '0';
        this.questions = this.randomizeAllAnswers([...quizData[this.category]]); // Reset with randomized answers
        this.clearProgress(); // Clear saved progress when restarting

        this.resultScreen.style.display = 'none';
        this.quizCard.style.display = 'block';

        this.loadQuestion();
    }

    goHome() {
        this.saveProgress();
        window.location.href = 'code.html';
    }
}

// ===== INITIALIZE QUIZ =====
document.addEventListener('DOMContentLoaded', () => {
    new QuizApp();
});
