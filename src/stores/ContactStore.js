import { EventEmitter } from 'events';
import dispatcher from '../dispatcher';

class ContactStore extends EventEmitter {
  constructor() {
    super();
    this.contacts = [];
  }

  getAll() {
    return this.contacts;
  }

  handleActions(action) {
    switch (action.type) {
      case 'FETCH_CONTACTS':
        this.contacts = action.payload;
        this.emit('change');
        break;
      default:
        break;
    }
  }
}

const contactStore = new ContactStore();
dispatcher.register(contactStore.handleActions.bind(contactStore));
export default contactStore;
