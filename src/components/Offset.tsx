import * as React from "react";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {IStore} from "../redux/IStore";
import {changeOffset as changeOffsetActionCreator} from "../redux/modules/counterActionCreators";

interface IStateToProps {
  offset: number;
}

interface IDispatchToProps {
  changeOffset: (offset: number) => void;
}

interface IProps extends IStateToProps, IDispatchToProps {}

class Offset extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  private handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    this.props.changeOffset(+e.target.value);
  }

  public render(): JSX.Element {
    return (
      <input type={"text"} value={this.props.offset} onChange={this.handleChange}/>
    );
  }
}

function mapStateToProps(state: Pick<IStore, "counter">): IStateToProps {
  return {
    offset: state.counter.offset
  }
}

function mapDispatchToProps(dispatch: Dispatch): IDispatchToProps {
  return {
    changeOffset: (offset: number) => dispatch(changeOffsetActionCreator(offset))
  }
}

const connected = connect(mapStateToProps, mapDispatchToProps)(Offset);

export {connected as Offset, Offset as UnconnectedOffset, mapStateToProps, mapDispatchToProps};
