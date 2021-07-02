import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './components/app';


ReactDOM.render(<App />,document.getElementById('root'));




// class WhoAmI extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       years: 26,
//     }
//     this.nextYear = this.nextYear.bind(this);
//   }
//   render() {
//     const {name, surname, link} = this.props;
//     const {years} = this.state;
//     return (
//       <>
//         <button onClick={this.nextYear} >++</button>
//         <h1>My name is {name} , surname - {surname}, years-{years}</h1>
//         <a href={link}>My profile</a>
//       </>
//     )
//   }
//   nextYear(){
//     console.log(1);
//     this.setState(state => ({
//       years: ++state.years
//     }))
//   }
// }

// const All = () => {
//   return (
//     <>

//         <WhoAmI name="John" surname="Smith" link="http://facebook.com"/>
//         <WhoAmI name="Alex" surname="Smith" link="http://facebook.com"/>
//         <WhoAmI name="Ivan" surname="Smith" link="http://facebook.com"/>
//     </>
//   )
// }