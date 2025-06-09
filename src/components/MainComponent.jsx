import React from "react";

export default function MainComponent() {
  //   const [topText, setTopText] = React.useState("Something Interesting");
  //   const [bottomText, setBottomText] = React.useState("Something Funny");
  const [meme, setMeme] = React.useState({
    topText: "Something Interesting",
    bottomText: "Something Funny",
    ImageUrl: "https://i.imgflip.com/1bij.jpg",
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(function () {
    return fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme(function (prevMeme) {
      return {
        ...prevMeme,
        [name]: value,
      };
    });
  }

  function getMeme() {
    const randomIndex = Math.floor(Math.random() * allMemes.length);
    const randomMeme = allMemes[randomIndex];
    setMeme(function (prevMeme) {
      return { ...prevMeme, ImageUrl: randomMeme.url };
    });
  }

  return (
    <main>
      <div className="TextInputs">
        <label className="InputLabel">Top Text</label>
        <input
          type="text"
          placeholder="Something Interesting"
          className="InputText"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <label className="InputLabel">Bottom Text</label>
        <input
          type="text"
          placeholder="Something Funny"
          className="InputText"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
      </div>
      <button className="GenerateButton" onClick={getMeme}>
        Generate Meme
      </button>
      <div className="MemeContainer">
        <img src={meme.ImageUrl} alt="Meme Image" className="MemeImage" />
        <span className="TopText">{meme.topText}</span>
        <span className="BottomText">{meme.bottomText}</span>
      </div>
    </main>
  );
}
