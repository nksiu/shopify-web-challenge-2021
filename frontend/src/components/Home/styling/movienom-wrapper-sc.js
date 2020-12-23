import styled from "styled-components";

const MovieNomWrapperSC = styled.div`
  .container {
    display: flex;
    justify-content: space-between;
  }

  .movie-results {
    flex-grow: 1;
    padding-right: 100px;
  }

  .nomination-list {
    max-width: 200px;
  }
`

export default MovieNomWrapperSC;
