import styled from "styled-components";
import "typeface-roboto-mono";

export const Container = styled.div`
  @keyframes bgPulse {
    0%,
    100% {
      background-color: #001100;
    }
    50% {
      background-color: #002200;
    }
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #000000;
  background-image: linear-gradient(90deg, #003300 50%, #001100 50%),
    linear-gradient(#003300 50%, #001100 50%);
  background-size: 10px 10px;
  box-shadow: inset 0 0 10px #00ff00;
  font-family: "Roboto Mono", monospace;
  animation: "bgPulse 5s infinite ease-in-out";
`;

export const Output = styled.div`
  position: relative;
  color: #00ff00;
  font-size: 18px;
  border: 1px solid #00ff00;
  padding: 10px;
  width: 80%;
  text-align: center;
  background-color: #001100;
`;

export const StyledButton = styled.button`
  background-color: #003300;
  color: #00ff00;
  padding: 10px 20px;
  margin: 10px;
  border: 2px solid #00ff00;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #006600;
  }
`;

export const GlitchText = styled.span<{ glitchOn: boolean }>`
  position: relative;
  display: inline-block;

  &::before,
  &::after {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: inherit;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }

  &::before {
    display: ${({ glitchOn }) => (glitchOn ? "inline-block" : "none")};
    left: 2px;
    text-shadow: -2px 0 #ff00ff;
    animation: ${({ glitchOn }) =>
      glitchOn ? "glitch 1.5s infinite" : "none"};
  }

  &::after {
    display: ${({ glitchOn }) => (glitchOn ? "inline-block" : "none")};
    left: -2px;
    text-shadow: 2px 0 #00ffff;
    animation: ${({ glitchOn }) =>
      glitchOn ? "glitch 1.5s infinite" : "none"};
  }

  @keyframes glitch {
    0% {
      top: -2px;
      left: -2px;
    }
    25% {
      top: 2px;
      left: 0;
    }
    50% {
      top: -1px;
      left: 2px;
    }
    75% {
      top: 1px;
      left: -1px;
    }
    100% {
      top: 1px;
      left: -2px;
    }
  }
`;

export const ToggleButton = styled.button<{ isActive: boolean }>`
  position: relative;
  background-color: ${({ isActive }) => (isActive ? "#00FF00" : "#003300")};
  width: 60px;
  height: 30px;
  border-radius: 15px;
  border: none;
  outline: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: ${({ isActive }) => (isActive ? "35px" : "5px")};
    width: 20px;
    height: 20px;
    background-color: #001100;
    border-radius: 50%;
    transition: left 0.3s;
  }
`;
export const StyledLabel = styled.label`
  display: block;
  margin-top: 30px;
  cursor: pointer;
  color: #00ff00;
  font-size: 14px;
  font-family: "Roboto Mono", monospace;
`;

export const InputField = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 2px solid #00ff00;
  border-radius: 5px;
  margin-right: 10px;
  background-color: #001100;
  color: #00ff00;
`;

export const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #003300;
  color: #00ff00;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #006600;
  }
`;
