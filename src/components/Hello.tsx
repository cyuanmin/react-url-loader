import * as React from "react";

/*
export interface HelloProps { compiler: string; framework: string;}
const sum: number = 1 + 2;
export const Hello: (props: HelloProps) => JSX.Element = 
(props: HelloProps): JSX.Element => {

    return <h1>Hello from {props.compiler} and {props.framework}! 1+2= {sum}</h1>;
}
*/

interface IHelloProps {
    compiler: string
    framework: string,
    imageUrl: string
}

interface IHelloState {
    blob: Blob;
    info: string;
}

export class Hello extends React.Component<IHelloProps, IHelloState>{
    constructor(props: IHelloProps){
        super(props);
        this.state = {
            blob: null,
            info: "before initialize"
        };
    }

    render() {
        return (
            <h1>Hello from {this.props.compiler} and {this.props.framework}! 1+2= {this.state.info}</h1>
        )
      }
}