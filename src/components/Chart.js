import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
} from 'chart.js';
import moment from 'moment';
import { UserData } from '../seed/data';
import { Paper } from '@mui/material';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
);
export const options = {
  responsive: true,
};

const labels = UserData.map(item => item.lastName)

export const data = {
  labels,
  datasets: [
    {
      label: 'Age',
      data: UserData.map(item => moment().diff(item.birthDate, "years")),
      backgroundColor: '#42586d',
    },
  ],
};

export function Chart() {
    return <Paper><Bar options={options} data={data} /></Paper>
}