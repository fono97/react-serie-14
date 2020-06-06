import * as React from "react";
export interface MyClassProps {
  name?: string;
  isMarried: boolean;
    lastName?:string;
}
export interface MyClassState {age:number;}

class MyClass extends React.Component<MyClassProps, MyClassState> {
    public static defaultProps:Partial<MyClassProps> ={
        name:"gabriel",
        lastName :"fono"
    };
    state = {
        age:21
    }
  render() {
    return (
      <div>
        <h1>my name is {this.props.name} and I am {this.state.age} years old</h1>
            <p>{this.props.lastName} </p>
      </div>
    );
  }
}
export default MyClass;
