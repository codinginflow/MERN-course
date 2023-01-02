import styles from "../styles/Note.module.css";
import { Card } from "react-bootstrap";
import { Note as NoteModel } from "../models/note";

interface NoteProps {
    note: NoteModel,
}

const Note = ({ note }: NoteProps) => {
    const {
        title,
        text,
        createdAt,
        updatedAt
    } = note;

    return (
        <Card className={styles.noteCard}>
            <Card.Body>
                <Card.Title>
                    {title}
                </Card.Title>
                <Card.Text className={styles.cardText}>
                    {text}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Note;