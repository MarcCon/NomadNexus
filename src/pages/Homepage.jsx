import styles from "./Homepage.module.css";
import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          Reise um die Welt. <br />
          NomadNexus behält den Überblick über Deine Abenteuer.
        </h1>
        <h2>
          Eine Weltkarte, die deine Ziele weltweit festhält. Vergiss niemals
          deine Erlebnisse und zeige allen wie du die Welt entdeckt hast.
        </h2>
        <Link to="/app" className="cta">
          Beginne Tracking
        </Link>
      </section>
    </main>
  );
}
