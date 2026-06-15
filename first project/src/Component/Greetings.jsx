

const Greetings = (props) => {
   return props.time==="morning" ? (<h1>Good mornng</h1>):(<h1>Good afternoon</h1>);
}

export default Greetings