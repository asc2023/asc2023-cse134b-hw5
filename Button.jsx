class ReactButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
    }
  
    render() {
      return (
        <button onClick={() => this.setState(prevState => ({count: prevState.count + 1,}))}>
          Times Clicked: {this.state.count}
        </button>
      );
    }
  }
  const rootElement = document.querySelector("#react-button");
  const root = ReactDOM.createRoot(rootElement);
  root.render(React.createElement(ReactButton));
  