import React from "react";
import { Control, useController } from "react-hook-form";

import styles from "./NumberInput.module.scss";

type Props = {
  placeholder?: string;
  name: string;
  control: Control<any>;
};

export const NumberInput = ({ control, name, ...props }: Props) => {
  const { field } = useController({ control, name })
  const { onChange, ...rest } = field;

  const onInputChange: React.ChangeEventHandler = (e) => {
    const element = e.currentTarget as HTMLInputElement
    const value = Number(element.value);
    const isWithinRange = value <= 80 && value >= -80;

    if (isWithinRange && Number.isInteger(value)) {
      onChange(e);
    }
  }

  return (
    <input type="number" className={styles.input} {...rest} {...props} onChange={onInputChange} />
  )
};
