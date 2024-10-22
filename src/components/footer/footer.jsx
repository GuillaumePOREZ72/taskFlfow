// ce composant est utilisé pour afficher le champ de saisie de tâche et la liste des tâches
import styles from "../footer/Footer.module.css"

const Footer = ({completedTasks}) => {

  if(completedTasks) {
  return (
    <footer>
        <code className={styles.footer}>
            Avec TaskFlow tu as éliminé {completedTasks} tache
            {completedTasks > 1 ? "s" : ""} !
        </code>
    </footer>
  );
}
  return null;
};

export default Footer