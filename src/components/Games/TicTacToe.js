import { useState, useEffect } from 'react';
import { useQuest } from '../../context/questContext';

const TicTacToe = ({onComplete}) => {
  const [board, setBoard] = useState(Array(9).fill(null));
  console.log(board);
  
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState(null);
  const [gameActive, setGameActive] = useState(true);
  const {updateQuestStatus} = useQuest()
  
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  useEffect(() => {
    checkWinner();
  }, [board]);

  useEffect(() => {
    if (!isXNext && !winner && gameActive) {
      makeAIMove();
    }
  }, [isXNext, winner, gameActive]);

const checkWinner = () => {
    for (let combo of winningCombinations) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            setGameActive(false); 
            setWinner(board[a]);
            if (board[a] === "X") { 
                updateQuestStatus("tictactoe", true); 
            }
            return;
        }
    }

    if (board.every(cell => cell !== null)) {
        setWinner('draw');
        setGameActive(false);
    }
};

  const handleClick = (index) => {
    if (board[index] || !gameActive || !isXNext) return;

    const newBoard = [...board];
    newBoard[index] = 'X';
    setBoard(newBoard);
    setIsXNext(false);
  };

  const makeAIMove = () => {
    setTimeout(() => {
      // Убедитесь, что игра активна и нет победителя
      if (!gameActive || winner) return;
  
      const availableMoves = board.reduce((acc, cell, index) => 
        cell === null ? [...acc, index] : acc, []);
      
      if (availableMoves.length === 0) return;
  
      let moveIndex;
  
      // Проверка на выигрышный ход для ИИ
      for (let move of availableMoves) {
        const testBoard = [...board];
        testBoard[move] = 'O'; // ИИ делает ход
        if (checkWin(testBoard, 'O')) {
          moveIndex = move;
          break;
        }
      }
  
      // Проверка на выигрышный ход для игрока
      if (moveIndex === undefined) {
        for (let move of availableMoves) {
          const testBoard = [...board];
          testBoard[move] = 'X'; // Игрок делает ход
          if (checkWin(testBoard, 'X')) {
            moveIndex = move;
            break;
          }
        }
      }
  
      // Если нет выигрышного хода, ИИ делает ход по умолчанию
      if (moveIndex === undefined) {
        if (availableMoves.includes(4)) {
          moveIndex = 4; // Центр
        } else {
          const randomIndex = Math.floor(Math.random() * availableMoves.length);
          moveIndex = availableMoves[randomIndex];
        }
      }
  
      // Финальная проверка перед обновлением
      if (!gameActive || winner) return;
  
      const newBoard = [...board];
      newBoard[moveIndex] = 'O';
      setBoard(newBoard);
      setIsXNext(true); // Следующий ход игрока (X)
    }, 300);
  };
  
  const checkWin = (board, player) => {
    return winningCombinations.some(combo => 
      combo.every(index => board[index] === player)
    );
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
    setGameActive(true);
  };

  const getStatusMessage = () => {
    if (winner === 'X') return 'Вы победили! ';
    if (winner === 'O') return 'Хакер победил! ';
    if (winner === 'draw') return 'Ничья';
    return 'Ваш ход (X)';
  };

  const getCellClassName = (index) => {
    let className = 'cell';
    if (board[index] === 'X') className += ' x';
    if (board[index] === 'O') className += ' o';
    return className;
  };

  return (
    <div >
      <div>
       {/* <div className="status">
          {getStatusMessage()}
        </div> */}

        <div className="board">
          {board.map((cell, index) => (
            <button
              key={index}
              className={getCellClassName(index)}
              onClick={() => handleClick(index)}
              disabled={!gameActive || !isXNext || cell !== null}
            >
              {cell}
            </button>
          ))}
        </div>

        <div className="game-controls" game-id="tictactoe">
          <button className="reset-btn" onClick={resetGame}>
            Новая игра
          </button>
        </div>

        <div className="game-info">
          <p>Вы играете за X</p>
          <p>Хакер играет за O</p>
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;