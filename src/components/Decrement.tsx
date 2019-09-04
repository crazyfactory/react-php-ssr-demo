import * as React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {IStore} from "../redux/IStore";
import {decrement as decrementActionCreator} from "../redux/modules/counterActionCreators";

interface IStateToProps {
  decrementedNum: number;
}

interface IDispatchToProps {
  decrement: () => void;
}

interface IProps extends IStateToProps, IDispatchToProps {}

class Decrement extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  private handleClick(): void {
    this.props.decrement()
  }

  public render(): JSX.Element {
    return (
      <button onClick={this.handleClick}>{this.props.decrementedNum}</button>
    );
  }
}

function mapStateToProps(state: Pick<IStore, "counter">): IStateToProps {
  return {
    decrementedNum: state.counter.decrementedNum
  }
}

function mapDispatchToProps(dispatch: Dispatch): IDispatchToProps {
  return {
    decrement: () => dispatch(decrementActionCreator())
  }
}

const connected = connect(mapStateToProps, mapDispatchToProps)(Decrement);

export {connected as Decrement, Decrement as UnconnectedDecrement, mapStateToProps, mapDispatchToProps};
