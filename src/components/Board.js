import Cell from "./Cell";
import styled from "styled-components";
import { useSelector } from "react-redux";

const StyledBoardRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const Board = () => {
  const { possibleCells } = useSelector((state) => state.othello);
  const { prevChangeCells } = useSelector((state) => state.othello);

  // クリックできるものを配列として取り出す
  const possibleClickCells = possibleCells?.map((_) => {
    return _[0];
  });

  const renderSquare = (yIndex, xIndex) => {
    const isClickArray = possibleClickCells.filter(
      (possibleCell) => possibleCell[0] === yIndex && possibleCell[1] === xIndex
    );

    const prevChangeCell = prevChangeCells.filter(
      (possibleCell) => possibleCell[0] === yIndex && possibleCell[1] === xIndex
    );

    const isChange = prevChangeCell.length === 1;

    const isClick = isClickArray.length === 1;

    return (
      <Cell cell={[yIndex, xIndex]} isClick={isClick} isChange={isChange} />
    );
  };

  return (
    <>
      <StyledBoardRow>
        {renderSquare(0, 0)}
        {renderSquare(0, 1)}
        {renderSquare(0, 2)}
        {renderSquare(0, 3)}
        {renderSquare(0, 4)}
        {renderSquare(0, 5)}
        {renderSquare(0, 6)}
        {renderSquare(0, 7)}
      </StyledBoardRow>
      <StyledBoardRow>
        {renderSquare(1, 0)}
        {renderSquare(1, 1)}
        {renderSquare(1, 2)}
        {renderSquare(1, 3)}
        {renderSquare(1, 4)}
        {renderSquare(1, 5)}
        {renderSquare(1, 6)}
        {renderSquare(1, 7)}
      </StyledBoardRow>
      <StyledBoardRow>
        {renderSquare(2, 0)}
        {renderSquare(2, 1)}
        {renderSquare(2, 2)}
        {renderSquare(2, 3)}
        {renderSquare(2, 4)}
        {renderSquare(2, 5)}
        {renderSquare(2, 6)}
        {renderSquare(2, 7)}
      </StyledBoardRow>
      <StyledBoardRow>
        {renderSquare(3, 0)}
        {renderSquare(3, 1)}
        {renderSquare(3, 2)}
        {renderSquare(3, 3)}
        {renderSquare(3, 4)}
        {renderSquare(3, 5)}
        {renderSquare(3, 6)}
        {renderSquare(3, 7)}
      </StyledBoardRow>
      <StyledBoardRow>
        {renderSquare(4, 0)}
        {renderSquare(4, 1)}
        {renderSquare(4, 2)}
        {renderSquare(4, 3)}
        {renderSquare(4, 4)}
        {renderSquare(4, 5)}
        {renderSquare(4, 6)}
        {renderSquare(4, 7)}
      </StyledBoardRow>
      <StyledBoardRow>
        {renderSquare(5, 0)}
        {renderSquare(5, 1)}
        {renderSquare(5, 2)}
        {renderSquare(5, 3)}
        {renderSquare(5, 4)}
        {renderSquare(5, 5)}
        {renderSquare(5, 6)}
        {renderSquare(5, 7)}
      </StyledBoardRow>
      <StyledBoardRow>
        {renderSquare(6, 0)}
        {renderSquare(6, 1)}
        {renderSquare(6, 2)}
        {renderSquare(6, 3)}
        {renderSquare(6, 4)}
        {renderSquare(6, 5)}
        {renderSquare(6, 6)}
        {renderSquare(6, 7)}
      </StyledBoardRow>
      <StyledBoardRow>
        {renderSquare(7, 0)}
        {renderSquare(7, 1)}
        {renderSquare(7, 2)}
        {renderSquare(7, 3)}
        {renderSquare(7, 4)}
        {renderSquare(7, 5)}
        {renderSquare(7, 6)}
        {renderSquare(7, 7)}
      </StyledBoardRow>
    </>
  );
};

export default Board;
