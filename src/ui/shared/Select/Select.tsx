import SelectBase from "react-select";
import type { Props as SelectProps } from "react-select";

import styles from "./Select.module.scss";

export const Select = ({ ...props }: SelectProps) => {
  return (
    <SelectBase
      {...props}
      hideSelectedOptions={false}
      closeMenuOnSelect={false}
      className={styles.base}
      classNamePrefix="react-select"
      components={{
        IndicatorSeparator: () => null
      }}
    />
  )
};
