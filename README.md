# Simon Game

A web-based recreation of the classic **Simon Memory Game** built using HTML, CSS, JavaScript, and jQuery.

This project is part of my DOM Manipulation learning journey and follows the game logic taught in the Web Development Bootcamp.

---

## 🎮 How to Play

The game starts when you press any key on the keyboard.
Simon will flash a button in a sequence. Your task is to repeat the same sequence by clicking the buttons.
Each level adds one more color to the sequence.

If you click the wrong color, the game ends.

---

## 🧠 Features

* Random sequence generation
* User input validation
* Level progression
* Sounds for each button
* Press animation effect
* Game over feedback

---

## 📂 Project Structure

```
Simon
├── index.html
├── styles.css
├── game.js
└── sounds
    ├── red.mp3
    ├── blue.mp3
    ├── green.mp3
    ├── yellow.mp3
    └── wrong.mp3
```

---

## 🛠 Technologies Used

* **HTML5** for structure
* **CSS3** for styling
* **JavaScript (ES6)** for logic
* **jQuery** for animations and event handling

---

## 🚀 How to Run

1. Clone the repository

```
git clone https://github.com/Harsh100101/Simon.git
```

2. Open the folder
3. Run `index.html` in your browser
4. Enjoy the game!

---

## 🧩 Game Logic Summary

* `nextSequence()` generates a new color each level.
* User clicks are stored in `userClickedPattern`.
* `checkAnswer()` compares the user's sequence with the game's.
* If correct → go to next level.
* If wrong → play error sound and restart.

---

## 📸 Screenshot

![20251202-1345-38 6387919](https://github.com/user-attachments/assets/129d9a0b-3ca5-4d64-8eb9-a972bdd4b147)

---

## 🤝 Contributing

Pull requests are welcome. For major changes, open an issue first to discuss what you’d like to change.

---

## 📜 License

This project is free to use for learning and personal projects.
