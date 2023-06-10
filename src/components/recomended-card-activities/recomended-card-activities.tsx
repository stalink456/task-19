import React from 'react';
import { Typography } from 'antd';
import { Link } from 'react-router-dom';
import { RecomendedActivity } from 'store/recomended-activities/types';
import { Brains } from 'components/ui-components/brains';
import { Body } from 'components/ui-components/body/body';

import styles from './recomended-card-activities.module.css';
import { Soul } from 'components/ui-components/soul/soul';

export const RecomendedCardActivities: React.FC<RecomendedActivity> =
  React.memo(({ activities, typeGroup }) => {
    const renderMind = () => {
      return (
        <div
          className={styles.recomended_card_activities__header}
          style={{ backgroundColor: '#3db2f3' }}
        >
          <Typography.Title level={3}>{typeGroup}</Typography.Title>
          <Brains />
        </div>
      );
    };

    const renderBody = () => {
      return (
        <div
          className={styles.recomended_card_activities__header}
          style={{ backgroundColor: '#F33D3D' }}
        >
          <Typography.Title level={3}>{typeGroup}</Typography.Title>
          <Body />
        </div>
      );
    };

    const renderSoul = () => {
      return (
        <div
          className={styles.recomended_card_activities__header}
          style={{ backgroundColor: '#B93DF3' }}
        >
          <Typography.Title level={3}>{typeGroup}</Typography.Title>
          <Soul />
        </div>
      );
    };

    const renderCardActivitiesHeader = () => {
      return typeGroup === 'Для ума'
        ? renderMind()
        : typeGroup === 'Для тела'
        ? renderBody()
        : renderSoul();
    };

    return (
      <div className={styles.recomended_card_activities}>
        {renderCardActivitiesHeader()}
        <div className={styles.recomended_card_activities__container}>
          {activities.map(({ title, d3LevelId }, index) => (
            <div
              key={index}
              className={styles.recomended_card_activities__description}
            >
              <Typography.Text
                className={styles.recomended_card_activities__description_text}
              >
                <Link
                  to={
                    process.env.REACT_APP_LTC
                      ? process.env.REACT_APP_LTC +
                        `recomended-activities?d3LevelId=${d3LevelId}`
                      : `/recomended-activities?d3LevelId=${d3LevelId}`
                  }
                  style={{ marginBottom: '20px' }}
                >
                  {title}
                </Link>
              </Typography.Text>
            </div>
          ))}
        </div>
      </div>
    );
  });
