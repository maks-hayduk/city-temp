import { MainLayout } from "@/ui/layouts/MainLayout";
import { TemperatureInfoBlock } from "@/ui/entity/TemperatureInfoBlock";
import { InfoChart } from "@/ui/entity/InfoChart";

import styles from "./index.module.scss";

const MainPage = () => {
  return (
    <MainLayout>
      <section className={styles.main}>
        <InfoChart />
        <TemperatureInfoBlock />
      </section>
    </MainLayout>
  )
}

export default MainPage;
