import styles from "./ProfileField.module.css";
import Image from "next/image";

export function ProfileField() {
  return (
    <div className={styles.profileContainer}>
      <Image
        src="/perfil.jpg"
        alt="Foto de perfil"
        width={70}
        height={70}
        className={styles.image}
      />
      <div>
        <h3>Tobias Ramos</h3>
        <p className={styles.address}>Senador Pompeu - CE</p>
      </div>

      <p>Desenvolvedor Frontend</p>
    </div>
  );
}
