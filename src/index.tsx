import * as React from "react";
import * as ReactDOM from "react-dom";

import {Hello} from "./components/Hello";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" imageUrl="https://images-na.ssl-images-amazon.com/images/I/71blCX4kboL.jpg" />,
    document.getElementById("example")
);