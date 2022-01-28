import API from '../api/axios';
import { Dto } from '../App';

export default class Task {
  static async create(taskDto: Dto) {
    const [{ name }, { description }, { isRequired }, { dueDate }] = taskDto;
    const task = {
      name,
      description,
      isRequired,
      dueDate,
    };
    const response = await API.post('/tasks', task)
      .then((response) => console.log({ response }))
      .catch((error) => console.log({ error }));
  }
}
