import styles from './ResourceEvaluationComment.module.scss';
import { Avatar } from 'primereact/avatar';
import { Rating } from 'primereact/rating';
import { InputTextarea } from 'primereact/inputtextarea';

const ResourceEvaluationComment = ({ evaluation }) => {
  return (
    <div className={styles.commentCard}>
      <div className={styles.commentUserInfo}>
        <Avatar label={evaluation.user_name.charAt(0)} size="large" />
        <Rating
          value={evaluation.evaluation}
          stars={5}
          cancel={false}
          readOnly="true"
        />
      </div>
      <div className={styles.rating}>
        <h5 className="mb-2">
          {evaluation.user_name + ' escribió el ' + evaluation.created_at}
        </h5>
        <InputTextarea
          value={evaluation.comment}
          disabled={true}
          rows={4}
          cols={20}
        />
      </div>
    </div>
  );
};

export default ResourceEvaluationComment;
