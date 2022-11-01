import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { observer } from 'mobx-react';
import store from 'index';
import PageWrapper from 'views/UI/PageWrapper';
import TableHeadNames from 'consts/TableHeadNames';
import HorizontalBox from 'views/UI/HorizontalBox';
import { styled } from '@mui/material/styles';
import adminToolsDateFormater from 'utils/adminToolsDateFormater';

const TableRowHead = styled(TableRow)(({ theme }) => ({
  backgroundColor: theme.palette.grey[300],
}));

const AdminToolsPage = () => {
  const { visitorsList } = store.user;

  return (
    <PageWrapper sx={{ overflowY: 'scroll' }}>
      <Table>
        <TableHead>
          <TableRowHead>
            {TableHeadNames.map((item) => <TableCell align="center" key={item}>{item}</TableCell>)}
          </TableRowHead>
        </TableHead>
        <TableBody>
          {visitorsList.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row" align="center">
                <HorizontalBox gap={7}>
                  <Avatar alt={row.name} src={row.avatar} />
                  <Typography>
                    {row.name}
                  </Typography>
                </HorizontalBox>
              </TableCell>
              <TableCell align="center">
                <Typography>
                  {row.role}
                </Typography>
              </TableCell>
              <TableCell align="center">
                <Typography>
                  {adminToolsDateFormater(row.lastVisit)}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </PageWrapper>
  );
};

export default observer(AdminToolsPage);
