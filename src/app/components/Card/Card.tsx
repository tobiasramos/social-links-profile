import { DefaultLink } from "../DefaultLink/DefaultLink";
import { ProfileField } from "../ProfileField/ProfileField";
import styles from "./Card.module.css";

export function Card() {
  return (
    <div className={styles.cardContainer}>
      <ProfileField />

      <DefaultLink
        socialNetwork="GitHub"
        href="https://github.com/tobiasramos"
        target="_blank"
      />

      <DefaultLink
        socialNetwork="Linkedin"
        href="https://www.linkedin.com/in/tobias-ramos/"
        target="_blank"
      />

      <DefaultLink
        socialNetwork="Portfólio"
        href="https://my-portfolio-git-main-tobias-ramos-projects.vercel.app/"
        target="_blank"
      />
    </div>
  );
}
