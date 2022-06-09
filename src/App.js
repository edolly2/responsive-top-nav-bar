import ResponsiveTopNav from "./_components/ResponsiveTopNav";
function App(props) {
  return (
    <div className="App">
      <ResponsiveTopNav
        linkOneText="Home"
        linkTwoText="About"
        linkThreeText="Portfolio"
        linkFourText="Projects"
        linkFiveText="Contact"
      />
    </div>
  );
}

export default App;
