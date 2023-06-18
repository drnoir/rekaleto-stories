
function TwineGame(props, storyURL, title) {
  console.log(storyURL);
    return (
      <div className="row">
        <h2>{title}</h2>
            <iframe width="560" height="1080" src={storyURL} title={title} allowFullScreen></iframe>
      </div>
    );
  }
  
  export default TwineGame;
  