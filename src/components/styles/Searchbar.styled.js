import styled from "styled-components";

export const StyledSearchbar = styled.form`
  width: 100%;
  margin-top: 100px;
  input {
    width: 100%;
    padding: 14px 45px;
    background: #825cf1;
    border: none;
    color: #fff;
    border-radius: 20px;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #fff;
    }

  }

  button {
    position: absolute;
    right: 0;
    padding: 14px 45px;
    background: #8862fc;
    border: none;
    border-radius: 20px;
    color: #fff;

    &:hover{
        cursor: pointer;
    }
    &:focus{
        background: #825cf1;
    }

    @media (max-width: 480px) {
      right: 10px;
      padding: 14px 30px;
    }
  }

  .search-icon {
    position: absolute;
    margin: 13px 20px;
    font-size: 18px;
  }
`;
