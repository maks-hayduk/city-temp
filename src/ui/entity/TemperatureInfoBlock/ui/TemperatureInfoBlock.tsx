import { useForm, Controller } from "react-hook-form";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import { useFetchCitiesInfo } from "@/gateway/cities/useFetchCitiesInfo";
import { useGetCitiesTodayInfo } from "@/gateway/cities/useGetCitiiesTodayInfo";
import { useSetFilters } from "@/gateway/cities/useSetFilters";

import { Card } from "@/ui/shared/Card";
import { Select } from '@/ui/shared/Select';
import { NumberInput } from "@/ui/shared/NumberInput";
import { Table } from "@/ui/shared/Table";

import styles from "./TemperatureInfoBlock.module.scss";
import { cityTableConfig } from "../lib/const/cityTableConfig";
import { useSelectOptions } from "../model/hooks/useSelectOptions";
import { Typography } from "@/ui/shared/Typography";

export const TemperatureInfoBlock = observer(() => {
  const selectOptions = useSelectOptions();
  const setFilters = useSetFilters();

  const { control, watch } = useForm();

  const fetchInfo = useFetchCitiesInfo();
  const citiesInfo = useGetCitiesTodayInfo();

  watch((data, { name }) => {
    if (name === "country") {
      return setFilters({ ...data, name: data.country.map(({ value }: any) => value) })
    }

    setFilters(data);
  });

  useEffect(() => {
    fetchInfo();
  }, []);
  
  return (
    <Card className={styles.container}>
      <div className={styles.filters}>
        <Controller
          name="country"
          control={control}
          render={({ field }) => (
            <Select
              isMulti
              placeholder="city"
              options={selectOptions}
              onChange={(val: any) => field.onChange(val)}
              value={field.value}
              defaultValue={field.value}
            />
          )}
        />
        <NumberInput name="min" placeholder="Min" control={control} />
        <NumberInput name="max" placeholder="Max" control={control} />
      </div>

      {citiesInfo.length ? (
        <Table config={cityTableConfig} data={citiesInfo} />
      ) : (
        <Typography variant="h1" fontWeight="bolder" className={styles.error}>
          To see data, enter valid filters
        </Typography>
      )}
    </Card>
  )
});
