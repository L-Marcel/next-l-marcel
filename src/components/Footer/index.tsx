import { IconButton } from "../Button/IconButton";
import { FooterContainer, FooterNavigation } from "./styles";

export function Footer() {
  const network = {
    discord: "https://discordapp.com/users/286662065802838016",
    whatsapp: "https://wa.me/5584996230190",
    instagram: "https://www.instagram.com/invites/contact/?i=1wo4rehc0fw8w&utm_content=49g8mfj",
    github: "https://github.com/l-marcel",
    linkedin: "https://linkedin.com/in/l-marcel",
    npm: "https://www.npmjs.com/~lmarcel",
    rocketseat: "https://app.rocketseat.com.br/me/l-marcel"
  };

  function redirectToSocial(social: keyof typeof network) {
    window.open(network[social], "__blank__");
  }

  return (
    <FooterContainer>
      <FooterNavigation>
        <ul className="flex flex-row flex-wrap gap-2 pb-6">
          <li>
            <IconButton
              onClick={() => redirectToSocial("discord")}
              className="rounded-lg"
              icon="discord"
              size="sm"
              title="discord"
            />
          </li>
          <li>
            <IconButton
              onClick={() => redirectToSocial("whatsapp")}
              className="rounded-lg"
              icon="whatsapp"
              size="sm"
              title="whatsapp"
            />
          </li>
          <li>
            <IconButton
              onClick={() => redirectToSocial("github")}
              className="rounded-lg"
              icon="github"
              size="sm"
              title="github"
            />
          </li>
          <li>
            <IconButton
              onClick={() => redirectToSocial("linkedin")}
              className="rounded-lg"
              icon="linkedin"
              size="sm"
              title="linkedin"
            />
          </li>
          <li>
            <IconButton
              onClick={() => redirectToSocial("npm")}
              className="rounded-lg"
              icon="npm"
              size="sm"
              title="npm"
            />
          </li>
          <li>
            <IconButton
              onClick={() => redirectToSocial("instagram")}
              className="rounded-lg"
              icon="instagram"
              size="sm"
              title="instagram"
            />
          </li>
          <li>
            <IconButton
              onClick={() => redirectToSocial("rocketseat")}
              className="rounded-lg"
              icon="rocketseat"
              size="sm"
              title="rocketseat"
            />
          </li>
        </ul>
      </FooterNavigation>
    </FooterContainer>
  );
}