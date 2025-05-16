document.getElementById('start-btn').addEventListener('click', () => {
    const n = parseInt(document.getElementById('n-input').value);
    if (isNaN(n) || n < 4) {
      alert("Please enter a valid N (≥ 4)");
      return;
    }
    initBoard(n);
    const board = Array.from({ length: n }, () => Array(n).fill(0));
    if (solveQueen(board)) {
      renderBoard(board);
    } else {
      alert("NOT POSSIBLE");
    }
  });
  
  function initBoard(n) {
    const container = document.getElementById('board-container');
    container.innerHTML = '';
    container.style.setProperty('--n', n);
    container.style.display = 'grid';
    container.style.gridTemplateColumns = `repeat(${n}, 40px)`;
    container.style.gap = '2px';
  }
  
  function renderBoard(board) {
    const container = document.getElementById('board-container');
    container.innerHTML = '';
    const n = board.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        const cell = document.createElement('div');
        cell.className = 'cell ' + ((i + j) % 2 === 0 ? 'light' : 'dark');
        if (board[i][j] === 1) {
          cell.textContent = '♕';
          cell.classList.add('queen');
        }
        container.appendChild(cell);
      }
    }
  }
  
  function isValid(board, row, col) {
    const n = board.length;
    for (let i = 0; i < n; i++) {
      if (board[row][i] === 1 || board[i][col] === 1) return false;
    }
    for (let i = 0; i < n; i++) {
      if (row + i < n && col + i < n && board[row + i][col + i]) return false;
      if (row - i >= 0 && col - i >= 0 && board[row - i][col - i]) return false;
      if (row - i >= 0 && col + i < n && board[row - i][col + i]) return false;
      if (row + i < n && col - i >= 0 && board[row + i][col - i]) return false;
    }
    return true;
  }
  
  function check(board) {
    let count = 0;
    for (let row of board) {
      for (let cell of row) {
        count += cell;
      }
    }
    return count === board.length;
  }
  
  function solveQueen(board) {
    const n = board.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        if (board[i][j] === 0) {
          if (isValid(board, i, j)) {
            board[i][j] = 1;
            if (solveQueen(board)) return true;
            board[i][j] = 0;
          }
        }
      }
    }
    return check(board);
  }