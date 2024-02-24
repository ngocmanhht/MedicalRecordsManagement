import { action, makeObservable, observable } from 'mobx';

class UIStore {
  constructor() {
    makeObservable(this);
  }

  @observable isLoading: boolean = false;

  @action showLoading() {
    this.isLoading = true;
  }

  @action hideLoading() {
    this.isLoading = false;
  }

  @observable alertBox: {
    isVisible: boolean;
    msg?: string;
  } = {
    isVisible: false,
  };
  @action showAlertBox = ({ msg }: { msg: string }) => {
    this.alertBox = {
      isVisible: true,
      msg: msg,
    };
  };
  @action hideAlertBox = () => {
    this.alertBox = {
      isVisible: false,
    };
  };
}

export default UIStore;
