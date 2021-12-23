import * as React from 'react';
import Link from '@mui/material/Link';
import SvgIcon from '@mui/material/SvgIcon';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';
import {UserData} from "../seed/data";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { numberWithCommas } from '../utils';
import moment from 'moment';
export default function Customers() {
  return (
    <React.Fragment>
      <Title>Customers Information</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Name</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Job</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>Balance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {UserData.map((user) => (
            <TableRow key={user.id}>
              <TableCell>
                <SvgIcon color="primary" fontSize="large" component={AccountCircleIcon} />
              </TableCell>
              <TableCell>{`${user.firstName} ${user.lastName}`}</TableCell>
              <TableCell>{user.city}</TableCell>
              <TableCell>{user.job}</TableCell>
              <TableCell>{moment().diff(user.birthDate, "years")}</TableCell>
              <TableCell>{numberWithCommas(user.deposit)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}