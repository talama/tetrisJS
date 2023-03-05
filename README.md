# **Simple Tetris implementation in javascript**

## **Implementation details**

| Feature                                       | Description                                                                                                                                                                                                                                 |
| :-------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Playfield**                                 | 10×22 Grid, where rows above 20 are hidden.                                                                                                                                                                                                 |
| **SRS**                                       | Super Rotation System / Standard Rotation System that specifies tetrimino rotation.                                                                                                                                                         |
| **7-bag**                                     | Random piece generator for tetrimino.                                                                                                                                                                                                       |
| **Hold piece**                                | The player can press a button to send the falling tetromino to the hold box, and any tetromino that had been in the hold box moves to the top of the screen and begins falling. Hold cannot be used again until after the piece locks down. |
| **Sound Effects**                             | On rotation, movement, landing on surface, touching a wall, locking, line clear and game over.                                                                                                                                              |
| **Soft / Hard drop**                          | Bonus score points for soft / hard drops with instant lock with no delay on hard drop.                                                                                                                                                      |
| **Level Up**                                  | Player may only level up by clearing 10 lines per level.                                                                                                                                                                                    |
| **Half second lock delay**                    | Reset the delay timer on any successful shifting or rotation but lock the piece after 15 moves / rotations.                                                                                                                                 |
| **3 Next pieces**                             | Display the next three pieces in queue.                                                                                                                                                                                                     |
| **Top out**                                   | When a piece is spawned overlapping at least one block (block out), or a piece locks completely above the visible portion of the playfield (lock out).                                                                                      |
| **Recognition and rewarding of T-spin moves** | Bonus score points (according to score table) for successful t-spins.                                                                                                                                                                       |
| **Rewarding of Back to Back chains**          | Bonus score points (according to score table) for back to back line clears.                                                                                                                                                                 |

## **Gravity Table**

<details>

| Level | Speed (seconds) |
| :---: | :-------------: |
|   1   |     1.00000     |
|   2   |     0.79300     |
|   3   |     0.61780     |
|   4   |     0.47273     |
|   5   |     0.35520     |
|   6   |     0.26200     |
|   7   |     0.18968     |
|   8   |     0.13473     |
|   9   |     0.09388     |
|  10   |     0.06415     |
|  11   |     0.04298     |
|  12   |     0.02822     |
|  13   |     0.01815     |
|  14   |     0.01144     |
|  15   |     0.00706     |

</details>
<br>

## **Scoring System**

<details>

| Action            |        Score |
| :---------------- | -----------: |
| Soft Drop         | 1 x Distance |
| Hard Drop         | 2 x Distance |
| Single Line Clear |          100 |
| Double Line Clear |          300 |
| Triple Line Clear |          500 |
| T-Spin            |          400 |
| Tetrs Line Clear  |          800 |
| T-Spin Single     |          800 |
| T-Spin Double     |         1200 |
| T-Spiin Triple    |         1600 |
| Back to Back      | 0.5 x Tetris |

\*Scores are multiplied by the level

</details>
