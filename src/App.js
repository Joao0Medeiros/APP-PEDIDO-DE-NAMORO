import React, { useState, useEffect } from 'react';
import { FaInstagram } from 'react-icons/fa';


function App() {
  const [congratulations, setCongratulations] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({
    top: '50%',
    left: '50%',
  });
  const [hearts, setHearts] = useState([]);
  const [showHearts, setShowHearts] = useState(false);

  const handleYesClick = () => {
    setCongratulations(true);
    setShowHearts(true);
  };

  const handleNoMouseEnter = () => {
    const randomTop = Math.floor(Math.random() * window.innerHeight);
    const randomLeft = Math.floor(Math.random() * window.innerWidth);
    setNoButtonPosition({
      top: `${randomTop}px`,
      left: `${randomLeft}px`,
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (showHearts) {
        createHeart();
      }
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [showHearts]);

  const createHeart = () => {
    const heart = {
      id: Date.now(),
      top: Math.random() * window.innerHeight,
      left: Math.random() * window.innerWidth,
      opacity: Math.random() + 0.1,
      scale: Math.random() * 0.5 + 0.5,
      rotate: Math.random() * 360,
      animationDuration: Math.random() * 2 + 1,
    };

    setHearts((prevHearts) => [...prevHearts, heart]);

    setTimeout(() => {
      removeHeart(heart.id);
    }, 3000);
  };

  const removeHeart = (id) => {
    setHearts((prevHearts) => prevHearts.filter((heart) => heart.id !== id));
  };

  const appStyle = {
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    backgroundImage: 'linear-gradient(to bottom, #FFDAB9, #FF1493)',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    padding: '20px',
  };

  const headerStyle = {
    color: '#FFFFFF',
    fontSize: '36px',
    marginBottom: '30px',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.3)',
  };

  const congratulationsStyle = {
    color: '#FFFFFF',
    fontSize: '24px',
    marginBottom: '20px',
  };

  const buttonContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px',
  };

  const buttonStyle = {
    backgroundColor: '#FFFFFF',
    background: 'linear-gradient(to bottom right, #FFDAB9, #FF1493)',
    color: 'white',
    fontSize: '18px',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '10px',
    transition: 'background-color 0.3s ease',
    width: '150px',
  };

  const noButtonStyle = {
    position: 'absolute',
    backgroundColor: '#FFFFFF',
    background: 'linear-gradient(to bottom right, #FFDAB9, #FF1493)',
    color: 'white',
    fontSize: '18px',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
    marginBottom: '10px',
    ...noButtonPosition,
    transition: 'top 0.3s ease, left 0.3s ease',
  };

  const heartStyle = {
    position: 'absolute',
    fontSize: '24px',
    transformOrigin: 'center',
    animation: 'float 3s linear infinite',
  };

  const footerStyle = {
  marginTop: '150px', // Ajuste a distância conforme necessário
  color: '#FFFFFF',
  fontSize: '17px',
  textAlign: 'center',
};


  const creatorStyle = {
    fontWeight: 'bold',
  };

  const instagramStyle = {
    marginLeft: '5px',
    color: '#FFFFFF',
    textDecoration: 'none',
    fontSize: '20px', // Ajuste o tamanho do ícone conforme necessário
  };
  

  return (
    <div className="App" style={appStyle}>
      <div>
        <h1 style={headerStyle}>Quer namorar comigo?</h1>
        {congratulations ? (
          <>
            <p style={congratulationsStyle}>Agora estamos namorando, nao tem mais volta!</p>
            {showHearts &&
              hearts.map((heart) => (
                <span
                  key={heart.id}
                  style={{
                    ...heartStyle,
                    top: `${heart.top}px`,
                    left: `${heart.left}px`,
                    opacity: heart.opacity,
                    transform: `scale(${heart.scale}) rotate(${heart.rotate}deg)`,
                    animationDuration: `${heart.animationDuration}s`,
                  }}
                >
                  ❤️
                </span>
              ))}
          </>
        ) : (
          <div style={buttonContainerStyle}>
            <button style={buttonStyle} onClick={handleYesClick}>
              SIM
            </button>
            <button style={noButtonStyle} onMouseEnter={handleNoMouseEnter}>
              NÃO
            </button>
          </div>
        )}
      </div>

     <footer style={footerStyle}>
  Criado por <span style={creatorStyle}>João Medeiros</span>
  <a
    href="https://www.instagram.com/joaoo_medeiroos/"
    target="_blank"
    rel="noopener noreferrer"
    style={instagramStyle}
  >
    <FaInstagram /> {/* Adicionando o ícone do Instagram */}
  </a>
</footer>

    </div>
  );
}

export default App;
