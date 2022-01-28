import css from './styles.module.scss';
import { Dto } from '../../App';

const Helper: React.FC<{ Dto: Dto | undefined }> = ({ Dto }) => {
  return (
    <div className={css.wrapper}>
      {Dto?.map((row, key) => (
        <div className={css.row} key={key}>{JSON.stringify(row)}</div>
      ))}
    </div>
  );
};

export default Helper;
