import "../src/main.scss";

function App() {
  return (
    <div className="qr-container">
      <div className="qr-wrapper">
        <div className="qr-wrapper__image">
          <img src="./images/image-qr-code.png" alt="qr-code" />
        </div>
        <div className="qr-wrapper__text">
          <h3 className="qr-wrapper__text-headline">
            Improve your front-end skills by building projects
          </h3>
          <p className="qr-wrapper__text-introText">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
