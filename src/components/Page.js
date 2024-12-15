import Header from "./Header";
import { useContext } from "react";

const Page = (props) => {
  const theme = useContext(props.ThemeContext);
  return (
    <div id="app" className={theme}>
      <Header theme={props.theme} setTheme={props.setTheme} />

      <article>
        <h2>Page</h2>
        <p>React Course</p>
      </article>
    </div>
  );
};
export default Page;
