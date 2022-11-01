import Router from '@simosol/router';
import AppToolsStore from './store/AppToolsStore';
import EstatesStore from './store/EstatesStore';
import PageStore from './store/PageStore';
import UserStore from './store/UserStore';

class AppStore {
  application = new AppToolsStore();

  estates = new EstatesStore();

  user = new UserStore();

  router = new Router(new PageStore());

  init = () => {
    this.user.init();
  };
}

export default AppStore;
