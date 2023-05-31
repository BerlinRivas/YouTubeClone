import { Link } from "react-router-dom";

export default function Header() {
  function showNotification() {
    const notification = new Notification("New message from YouTube!", {
      body: "New video from YouTube",
    });

    notification.onClick = (e) => {
      window.location.href = "https://google.com";
    };
  }

  if (Notification.permission === "granted") {
    showNotification();
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        showNotification();
      }
    });
  }

  return (
    <>
      <nav class="navbar">
        <div class="toggle-btn">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Link to="/" class="logo-link">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
            class="logo"
            alt=""
          />
        </Link>
        <div class="user-options">
          <img src="img/video.PNG" class="icon" alt="" />
          <img src="img/grid.PNG" class="icon" alt="" />
          <img src="img/bell.PNG" class="icon" alt="" />
          <div class="user-dp">
            <img
              src="https://www.cnet.com/a/img/resize/b484c8af7a3569ef54a59c758268106b9b880725/hub/2015/06/14/8351c430-f382-4bae-b7d7-ef2938d29730/batman-arkham-knight-screen.jpg?auto=webp&fit=crop&height=900&width=1200"
              alt=""
            />
          </div>
        </div>
      </nav>

      <div class="side-bar">
        <Link to="/" className="links active">
          <img src="img/home.PNG" alt="" />
          Home
        </Link>
        <Link to="/about" className="links">
          <img src="img/show more.PNG" alt="" />
          About
        </Link>
        <a href="#" class="links">
          <img src="img/subscription.PNG" alt="" />
          subscription
        </a>
        <hr class="seperator" />
        <a href="#" class="links">
          <img src="img/library.PNG" alt="" />
          library
        </a>
        <a href="#" class="links">
          <img src="img/history.PNG" alt="" />
          history
        </a>
        <a href="#" class="links">
          <img src="img/your-video.PNG" alt="" />
          your video
        </a>
        <a href="#" class="links">
          <img src="img/watch-later.PNG" alt="" />
          watch later
        </a>
        <a href="#" class="links">
          <img src="img/liked video.PNG" alt="" />
          like video
        </a>
        <a href="#" class="links">
          <img src="img/show more.PNG" alt="" />
          show more
        </a>
      </div>

      <div class="filters">
        <button class="filter-options active">all</button>
        <button class="filter-options">anime</button>
        <button class="filter-options">movies</button>
        <button class="filter-options">music</button>
        <button class="filter-options">entertainment</button>
        <button class="filter-options">marvel</button>
        <button class="filter-options">comedy</button>
        <button class="filter-options">pranks</button>
        <button class="filter-options">podcast</button>
        <button class="filter-options">trending</button>
        <button class="filter-options">gaming</button>
        <button class="filter-options">horror</button>
        <button class="filter-options">shows</button>
        <button class="filter-options">tutorials</button>
      </div>
    </>
  );
}