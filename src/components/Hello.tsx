import * as React from "react";

export interface HelloProps { compiler: string; framework: string; }
const sum: number = 1 + 2;
export const Hello: (props: HelloProps) => JSX.Element = 
(props: HelloProps): JSX.Element => <h1>Hello from {props.compiler} and {props.framework}! 1+2= {sum}</h1>;