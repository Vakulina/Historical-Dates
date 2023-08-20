import React, {FC} from "react";
import styles from "./Title.module.scss";

interface TitleProps {
    text?: string;
}

export const Title: FC<TitleProps> = ({ text }) => {
    return (
        <h1 className={styles.title}>
            {text || "Исторические даты"}
        </h1>
    );
};
