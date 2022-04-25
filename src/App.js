import { CSSModules } from "./components/CSSModules";
import { Emotion } from "./components/Emotion";
import { InlineStyle } from "./components/inlineStyle";
import { StyledComponents } from "./components/StyledComponents";
import { StyledJsx } from "./components/StyledJsx";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <InlineStyle />
      <CSSModules />
      <StyledJsx />
      <StyledComponents />
      <Emotion />
    </div>
  );
}
