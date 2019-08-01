import * as React from "react";
import * as ReactDOM from "react-dom";

export interface ILikeButtonProps {
    caption: string;
    finalText: string;
}

export interface ILikeButtonState {
    liked: boolean;
}

export class LikeButton extends React.Component<ILikeButtonProps, ILikeButtonState> {
  constructor(props: ILikeButtonProps) {
    super(props);
    this.state = { liked: false };
  }

  public render(): React.ReactNode {
    if (this.state.liked) {
      return this.props.finalText;
    }

    return <button
            className="btn btn-primary"
            onClick={() => this.setState({ liked: true }) }
        >
            {this.props.caption}
        </button>;
  }
}
