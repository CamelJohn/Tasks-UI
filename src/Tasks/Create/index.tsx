import css from './styles.module.scss';
import { Dto } from '../../App';
import Task from '../../services/task.service';

function determineInputs(target: any) {
  const potentialInputs = Object.entries(target);
  const inputsOnly = potentialInputs.filter(([index]) =>
    Number.isInteger(Number(index))
  );
  return inputsOnly as [string, any][];
}

function extractInputValues(inputs: [string, any][]) {
  return inputs.reduce((acc, [index, input]) => {
    if (!['checkbox', 'text', 'textarea', 'number', 'passowrd', 'datetime-local'].includes(input.type)) {
      return acc;
    }

    if (input.type === 'checkbox') {
      acc.push({ [input.id] : input.checked });
      return acc;
    }

    if (input.type === 'datetime-local') {
        acc.push({ [input.id]: new Date(input.value).toISOString()})
        return acc;
    }

    acc.push({ [input.id]: input.value });

    return acc;
  }, [] as Dto);
}

const Create: React.FC<{ setDto: React.Dispatch<Dto> }> = ({ setDto }) => {
  
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const inputs = determineInputs(e.target);
    const DTO = extractInputValues(inputs);
    setDto(DTO);
    Task.create(DTO);
  }

  return (
    <form className={css.form} onSubmit={submit}>
      <div className={css.header}>
        <div className={css.title}>Create Task</div>
      </div>
      <div className={css.body}>
        <div className={css.formControl}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" />
        </div>
        <div className={css.formControl}>
          <label htmlFor="description">Description</label>
          <textarea id="description" rows={5} />
        </div>
        <div className={css.formControl}>
          <label htmlFor="isRequired">Is Required</label>
          <input id="isRequired" type="checkbox" />
        </div>
        <div className={css.formControl}>
          <label htmlFor="dueDate">Due Date</label>
          <input id="dueDate" type="datetime-local" />
        </div>
        <div className={css.buttonBox}>
          <button type="submit">Create</button>
        </div>
      </div>
    </form>
  );
};

export default Create;
