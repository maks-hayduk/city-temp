import { BarChart, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer, Bar, Tooltip } from "recharts";

import { Card } from "@/ui/shared/Card"

import styles from "./InfoChart.module.scss";
import { Typography } from "@/ui/shared/Typography";
import { useGetCitiesAnalyticInfo } from "@/gateway/cities/useGetCitiesAnalyticsInfo";
import { observer } from "mobx-react-lite";

const data = [
  {
    name: 'Mon',
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Tue',
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Wed',
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Thu',
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Fri',
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Sat',
    pv: 4300,
    amt: 2100,
  },
  {
    name: 'Sun',
    pv: 4300,
    amt: 2100,
  },
];

export const InfoChart = observer(() => {
  const data = useGetCitiesAnalyticInfo();

  return (
    <Card className={styles.container}>
      <Typography variant="h1" fontWeight="bolder" className={styles.title}>Analytics</Typography>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ left: -10, bottom: 30 }}>
          <Legend verticalAlign="top" align="right" />
          <CartesianGrid strokeDasharray="8 8" vertical={false}/>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar name="Avg temperature (last 7 days)" dataKey="temp" radius={[8,8,0,0]} barSize={27} fill="url(#colorUv)"/>
          <defs>
            <linearGradient
              id="colorUv"
              x1="0"
              y1="0"
              x2="0"
              y2="100%"
            >
              <stop offset="0" stopColor="#B3FC4F" />
              <stop offset="1" stopColor="#173102" />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </Card>
  )
});
