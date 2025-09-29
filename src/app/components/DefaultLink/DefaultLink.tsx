import styles from "./DefaultLink.module.css";

type DefaultLinkProps = {
  socialNetwork: string;
} & React.ComponentProps<"a">;

export function DefaultLink({ socialNetwork, ...rest }: DefaultLinkProps) {
  return (
    <a className={styles.linkContainer} {...rest}>
      {socialNetwork}
    </a>
  );
}
