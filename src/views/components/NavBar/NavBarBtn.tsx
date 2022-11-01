import React, { FC } from 'react';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { SvgIconComponent } from '@mui/icons-material';
import store from 'index';
import { PageType } from 'models/state/store/PageStore';
import { observer } from 'mobx-react';

const StyledNavBtn = styled(Button)({
  height: '60px',
  borderRadius: 0,
});

export interface NavBarBtnTPD {
  name: string,
  icon: SvgIconComponent,
  path: PageType,
  callback?: () => void,
}

const NavBarBtn: FC<NavBarBtnTPD> = ({
  icon, name, path, callback,
}) => {
  const { router } = store;
  const handleSubmit = () => {
    router.page = path;
    if (callback) {
      callback();
    }
  };
  const Component = icon;

  return (
    <StyledNavBtn
      onClick={handleSubmit}
      variant={router.page.p === path.p ? 'contained' : 'text'}
      startIcon={<Component />}
    >
      {name}
    </StyledNavBtn>
  );
};

export default observer(NavBarBtn);
