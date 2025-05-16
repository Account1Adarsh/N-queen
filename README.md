# N-Queens Visualizer

A web-based interactive visualizer for the classic **N-Queen** problem, implemented with **HTML**, **CSS**, and **JavaScript**. Place $N$ queens on an $N \times N$ chessboard so that no two queens threaten each other, and watch the backtracking algorithm find a solution in real time.

---

## 🔍 Project Overview

* **Visualizer**: Dynamically render the chessboard and place queens visually.
* **Backtracking Algorithm**: JavaScript implementation explores possible placements and backtracks on conflicts.
* **Configurable**: Supports any board size $N ≥ 4$.

---

## 📁 Project Structure

```
N-queen/             # Root directory
├── index.html       # Markup for controls and board container
├── style.css        # Styling for board and controls
├── script.js        # Backtracking logic and DOM rendering
└── README.md        # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

* A modern web browser (Chrome, Firefox, Safari, Edge).

### Running Locally

1. **Clone the repo**

   ```bash
   git clone https://github.com/Account1Adarsh/N-queen.git
   cd N-queen
   ```

2. **Open in browser**
   Simply double-click `index.html` or serve via a local HTTP server:

   ```bash
   # Python 3.x
   python -m http.server 8000
   open http://localhost:8000
   ```

3. **Use the visualizer**

   * Enter the desired board size (≥ 4) in the input field.
   * Click **Start**.
   * Watch the algorithm place queens one by one until a solution is found.

---

## 🧠 Algorithm Details

The solver follows a standard backtracking approach:

1. Initialize an empty $N \times N$ board.
2. Iterate through each cell in row-major order.
3. If the cell is safe (no other queen in same row, column, or diagonals), place a queen.
4. Recursively attempt to place the remaining queens.
5. On conflict or dead-end, remove the queen (backtrack) and try next cell.
6. Continue until all queens are placed or no solution exists.

Helper functions:

* `isValid(board, row, col)`: Check if placing a queen is safe.
* `solveQueen(board)`: Recursively place queens.
* `renderBoard(board)`: Update the DOM to reflect current placements.

---

## ⚙️ Customization

* **Cell Size**: Modify `--n` and size in `style.css` to change cell dimensions.
* **Board Colors**: Tweak `.light` and `.dark` classes in `style.css`.
* **Algorithm Speed**: Insert delays (e.g., `setTimeout`) in `solveQueen`/`renderBoard` calls to animate step-by-step placements.

---

## 📝 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

## 👤 Author

**Adarsh** — [GitHub Profile](https://github.com/Account1Adarsh)
