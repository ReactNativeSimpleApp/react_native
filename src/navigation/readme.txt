This is another component of our architecture slightly influenced by a react-package(react-navigation)
Due to the scale of this application, we wouldn’t be relying on the out-of-the-box navigation with 
this.props.navigation, 
rather we would be be connecting the app’s navigation to the overall application state. 
This means that our redux-backed store would be aware of the navigation state.