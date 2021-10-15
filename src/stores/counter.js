import { makeObservable, observable, action, computed} from 'mobx';

class CounterStore {
  
  @observable number = 0;
  
  constructor(){
    makeObservable(this);
  }

  @action increase = () => {
    this.number++;
  }

  @action decrease = () => {
    this.number--;
  }

  @action resetFunc = () => {
    this.number = 0;
  }  

  @computed 
  get total() {
    return this.number * this.number;
  }
}
export default CounterStore;
