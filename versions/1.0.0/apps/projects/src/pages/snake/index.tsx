import { useEffect, useState } from "react";
import { useStopwatch } from "react-timer-hook";
import style from "./snake.module.scss";
import { 
  AiOutlineArrowDown, 
  AiOutlineArrowLeft,
  AiOutlineArrowUp,
  AiOutlineArrowRight,
  AiOutlineHome
} from "react-icons/ai";
import Link from "next/link";

function SnakeScreen() {
  const { hours, minutes, seconds, reset } = useStopwatch({ autoStart: true });
  const [records, setRecords] = useState<[number, string][]>([]);
  const [points, setPoints] = useState(0);
  const [target, setTarget] = useState<[number, number]>([4, 1]);
  const [direction, setDirection] = useState<Direction>("r");
  const [snake, setSnake] = useState<[number, number, Direction][]>([[0, 1, "r"]]);
  const [itens, setItens] = useState<any[][]>([ ...new Array(25).fill([ ...new Array(25) ]) ]);

  //Verify if direction is changed
  useEffect(() => {
    document.addEventListener("keydown", (ev: any) => {
      const e: KeyboardEvent = ev;
      
      if(e) {
        if(e.key === "ArrowDown" || e.key.toLocaleLowerCase() === "s") {
          setDirection("d");
        };

        if(e.key === "ArrowUp" || e.key.toLocaleLowerCase() === "w") {
          setDirection("u");
        };

        if(e.key === "ArrowLeft" || e.key.toLocaleLowerCase() === "a") {
          setDirection("l");
        };

        if(e.key === "ArrowRight" || e.key.toLocaleLowerCase() === "d") {
          setDirection("r");
        };

        if(e.key.toLowerCase() === "r") {
          gameOver();
        };
      };

      return {} as any;
    });
  }, []);

  //Change snake point every second
  useEffect(() => {
    changeSnakePoint();
  }, [seconds]);

  //Function for change snake point
  function changeSnakePoint() {
    let lastDir: Direction = snake[0][2];
    let snakeBlocks = snake.map((s, i) => {
      let dir = i === 0? direction:lastDir;
      lastDir = s[2];
      return newBlockOnDirection(s[0], s[1], dir);
    });

    const isPoint = target[0] === snakeBlocks[0][0] && target[1] === snakeBlocks[0][1];
    const isSnake = isSnakeBlock(snakeBlocks[0][0], snakeBlocks[0][1]);
    const isLimit = snakeBlocks[0][0] < 0 || snakeBlocks[0][0] > 24 || snakeBlocks[0][1] < 0  || snakeBlocks[0][1] > 24;

    if(isSnake || isLimit) {
      return gameOver();
    } else if(isPoint) {
      snakeBlocks.push(snake[snake.length - 1]);
      setPoints(p => p += 10);
      setTarget(getRandomValidTargetPoint());
    };

    setSnake(snakeBlocks);
  };

  //Function for get new point of the block in current direction
  function newBlockOnDirection(x: number, y: number, d: Direction): [number, number, Direction] {
    switch(d) {
      case "d":
        y++;
        break;
      case "u":
        y--;
        break;
      case "r":
        x++;
        break;
      case "l":
        x--;
        break;
      default:
        x++;
        break;
    };

    return [x, y, d];
  };

  //Function to check if the block is an snake block
  function isSnakeBlock(x: number, y: number): boolean {
    for(let i in snake) {
      if(snake[i][0] === x && snake[i][1] === y) {
        return true;
      };
    };

    return false;
  };

  //Function to get two digits of an number
  function getTwoDigitsNumber(n: number) {
    return n.toLocaleString('pt-BR', {
      minimumIntegerDigits: 2,
      useGrouping: false
    })
  };

  //Function to get a random and valid new point to target
  function getRandomValidTargetPoint() {
    let minX = Math.ceil(0);
    let maxX = Math.floor(24);
    let minY = Math.ceil(0);
    let maxY = Math.floor(24);

    let x = Math.floor(Math.random() * (maxX - minX)) + minX;
    let y = Math.floor(Math.random() * (maxY - minY)) + minY;

    if(isSnakeBlock(x, y)){
      return getRandomValidTargetPoint();
    };

    return [x, y];
  };

  //Function to reset the game
  function gameOver() {
    const time = `${getTwoDigitsNumber(hours)}:${getTwoDigitsNumber(minutes)}:${getTwoDigitsNumber(seconds)}`;
    let newRecords = [ ...records ];

    newRecords.push([points, time]);
    newRecords.sort((a, b) => a[0] - b[0]);

    setRecords(records);

    setDirection("r");
    setTarget([4, 1]);
    setPoints(0);
    setSnake([[0, 1, "r"]]);
    reset();
  };

  return (
    <div className={style.screen}>
      <div className={style.header}>
        <Link href="/">
          <AiOutlineHome/>
        </Link>
        <h1>{points} - [{getTwoDigitsNumber(hours)}:{getTwoDigitsNumber(minutes)}:{getTwoDigitsNumber(seconds)}]</h1>
      </div>
      <div className={style.body}>
        {
          itens.map((r, y) => {
            return r.map((v, x) => {
              const isSnake = isSnakeBlock(x, y);
              const isPoint = target[0] === x && target[1] === y;

              if(snake[0][0] === x && snake[0][1] === y) {
                const icon = {
                  "l": <AiOutlineArrowLeft/>,
                  "r": <AiOutlineArrowRight/>,
                  "d": <AiOutlineArrowDown/>,
                  "u": <AiOutlineArrowUp/>
                };

                return (
                  <div key={`${x},${y}`} 
                    className={`${style.item} ${style.snakeHead}`}
                  >
                    {icon[direction]}
                  </div>
                );
              };

              return (
                <div key={`${x},${y}`} 
                  className={`${style.item} ${
                    isSnake? style.snake:isPoint? style.active:""
                  }`}
                />
              );
            });
          })
        }
      </div>
    </div>
  );
};

export default SnakeScreen;