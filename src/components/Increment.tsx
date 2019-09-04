import * as React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {IStore} from "../redux/IStore";
import {increment as incrementActionCreator} from "../redux/modules/counterActionCreators";

interface IStateToProps {
  incrementedNum: number;
}

interface IDispatchToProps {
  increment: () => void;
}

interface IProps extends IStateToProps, IDispatchToProps {}

class Increment extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  private handleClick(): void {
    this.props.increment();
  }

  public render(): JSX.Element {
    return (
      <button onClick={this.handleClick}>{this.props.incrementedNum}</button>
    );
  }
}

function mapStateToProps(state: Pick<IStore, "counter">): IStateToProps {
  return {
    incrementedNum: state.counter.incrementedNum
  }
}

function mapDispatchToProps(dispatch: Dispatch): IDispatchToProps {
  return {
    increment: () => dispatch(incrementActionCreator())
  }
}

const connected = connect(mapStateToProps, mapDispatchToProps)(Increment);

export {connected as Increment, Increment as UnconnectedIncrement, mapStateToProps, mapDispatchToProps};
