import TaskStore from "./TaskStore";
import PersonalStore from "./PersonalStore";

class Store {
	constructor() {
		this.task = new TaskStore(this);
		this.personal = new PersonalStore(this);
	}
}
export default new Store();
