import React from 'react';
import Confirm from './Confirm';
import { Button } from '../Button';
import styles from './Confirm.module.scss';

export default {
  component: [Confirm],
  title: 'Components/Confirm Component',
};

export const ConfrimWithCompleteProps = () => (
  <Confirm
    containerClassName={styles.testConfirm}
    title={<span className="text4Bold">Tracker ID field is blank, are you sure?</span>}
    content="Leaving it empty means you cannot track the performance of this video."
    footer={
      <div className={styles.testFooter}>
        <Button className={styles.testButtons} alt small>
          Don’t show again
        </Button>
        <div>
          <Button kind="default" small flat>
            Cancel
          </Button>
          <Button kind="primary" small>
            Yes
          </Button>
        </div>
      </div>
    }
  />
);
