import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="footer">
      <Link to='/home'>
        <div className="footer-pokemonLogo-container">
          <img src="/images/pokemon.png" alt="Pokemon logo" />
        </div>
      </Link>

      <ul>
        <li>
          <a href='https://www.instagram.com/pokemon/' target='_blank' rel='noreferrer noopener'><img src="/images/instagram.svg" alt="Instagram" /></a>
        </li>
        <li>
          <a href='https://www.tiktok.com/@pokemonofficial?lang=es' target='_blank' rel='noreferrer noopener'><img src="/images/tiktok.svg" alt="Tik Tok" /></a>
        </li>
        <li>
          <a href='https://twitter.com/Pokemon' target='_blank' rel='noreferrer noopener'><img src="/images/twitter.svg" alt="Twitter" /></a>
        </li>
        <li>
          <a href='https://discord.com/invite/pokemon' target='_blank' rel='noreferrer noopener'><img src="/images/discord.svg" alt="Discord" /></a>
        </li>
        <li>
          <a href='https://www.youtube.com/channel/UCFctpiB_Hnlk3ejWfHqSm6Q' target='_blank' rel='noreferrer noopener'><img src="/images/youtube.svg" alt="YouTube" /></a>
        </li>
        <li>
          <a href='https://www.twitch.tv/pokemon' target='_blank' rel='noreferrer noopener'><img src="/images/twitch.svg" alt="Twitch" /></a>
        </li>
      </ul>
    </footer >
  );
}
