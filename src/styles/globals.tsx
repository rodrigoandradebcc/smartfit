import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  :root{
    --white: #fff;
    --background: #FFFCF9;
    --gray-line: #dcdde0;
    --text: #4C4C4C;
    
    --border: #ededed;
    --black: #000;
    --dark-grey: #333333;
    --light-grey: #808080;
    --yellow: #FFB612;
    --red: #dc0a17;
    --green: #2FC022;
  }

  @font-face {
    font-family: Gotham;
    src: url("/fonts/gotham-light.woff2") format('woff2');
    font-weight: 400;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url("/fonts/gotham-book.woff2") format('woff2');
  }

  @font-face {
    font-family: Gotham;
    font-weight: 600;
    src: url("/fonts/gotham-bold.woff2") format('woff2');
  }

  @font-face {
    font-family: Gotham;
    src: url("/fonts/gotham-black.woff2") format('woff2');
    font-weight: 700;

  }
  
  @media(max-width: 1080px){
    html{
      font-size: 93.75%;
    }
  }
  
  @media(max-width: 720px){
    html{
      font-size: 87.5%;
    }
  }
  
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body{
    background: var(--background);
    color: var(--text);
  }
  
  * {
  ::-webkit-scrollbar {
        width: 0.5rem;
        height: 0.5rem;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #c5c5c5;
        border-radius: 4px;
    }
    ::-webkit-scrollbar-track {
        background-color: #f2f3f5;
    }
  }
  
  body, input, textarea, button{
    font: 400 1rem "Gotham", sans-serif;
  }
  
  button {
    cursor: pointer;
  }
  
`;