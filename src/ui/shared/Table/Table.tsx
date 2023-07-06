import cn from "classnames";

import styles from "./Table.module.scss";
import { Typography } from "../Typography";

const getCommonCellStyles = (align?: "left" | "right") => ({
  [styles.alignLeft]: align === "left",
  [styles.alignRight]: !align || align === "right"
})

export type TableConfig = Array<{ 
  title: string;
  value: string;
  align?: "left" | "right";
}>

type Props = {
  config: TableConfig;
  data: Array<{ [key: string]: any; name: string; }>;
}

export const Table = ({ config, data }: Props) => {
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.tableHead}>
          {config.map(({ title, align }) => (
            <th
              key={`th-${title}`}
              className={cn(styles.tableHeadCell, getCommonCellStyles(align))}
            >
              <Typography fontWeight="bolder">{title}</Typography>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((obj) => (
          <tr key={obj.name} className={styles.tableRow}>
            {config.map(({ title, value, align }) => (
              <td
                key={`${obj.name}-${title}-${obj[value]}`}
                className={cn(styles.tableRowCell, getCommonCellStyles(align))}
              >
                <Typography>{obj[value] || '-'}</Typography>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
};
