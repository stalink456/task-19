import React from 'react';
import { Space, Typography, Input, Select, Form, Button } from 'antd';
import { Page } from 'components/ui-components/page';
import { useSearchActivities } from 'hooks/use-search-activities';
import { BackButton } from 'components/back-button';
import { Card } from 'components/card';
import { Loading } from 'components/ui-components/loading';

import styles from './search-activities.module.css';

export const SearchActivities: React.FC = () => {
  const {
    formRef,
    district,
    days,
    online,
    d0LevelId,
    d1LevelId,
    d2LevelId,
    certificate,
    area,
    isLoading,
    isLoadingSearch,
    searchActivitiesItems,

    onFinish,
    onReset,
  } = useSearchActivities();

  if (isLoading) {
    return <Loading />;
  }

  const renderCard = () => {
    return searchActivitiesItems.length ? (
      searchActivitiesItems.map((value, index) => (
        <Card key={index} {...value} />
      ))
    ) : (
      <Typography.Title level={5} type='secondary'>
        Ничего не найдено по запросу
      </Typography.Title>
    );
  };

  const renderIsLoading = () => {
    return isLoadingSearch ? <Loading /> : renderCard();
  };

  return (
    <Page>
      <Space
        direction='vertical'
        size={20}
        className={styles.search_activities}
      >
        <Space
          direction='vertical'
          className={styles.search_activities__back_button}
        >
          <BackButton />
        </Space>
        <Typography.Title
          level={5}
          type='secondary'
          className={styles.search_activities__text}
        >
          Поиск активностей
        </Typography.Title>

        <Form onFinish={onFinish} autoComplete='off' ref={formRef}>
          <div className={styles.search_activities__search_panel}>
            <Form.Item name='query'>
              <Input
                placeholder='Поиск активностей'
                type='primary'
                size='large'
                className={styles.search_activities__search_panel__button}
              />
            </Form.Item>
            <Button
              type='primary'
              htmlType='submit'
              size='large'
              loading={false}
            >
              Поиск
            </Button>
          </div>

          <div className={styles.search_activities__first_group}>
            <Form.Item
              name='district'
              className={styles.search_activities__first_group__district}
            >
              <Select placeholder='Район' mode='multiple' options={district} />
            </Form.Item>

            <Form.Item
              name='area'
              className={styles.search_activities__first__group__area}
            >
              <Select placeholder='Округ' mode='multiple' options={area} />
            </Form.Item>
          </div>

          <div className={styles.search_activities__second__group}>
            <Form.Item
              name='d0LevelId'
              className={styles.search_activities__second__group__d0LevelName}
            >
              <Select
                placeholder='Категория первого уровня'
                mode='multiple'
                options={d0LevelId}
              />
            </Form.Item>
            <Form.Item
              name='d1LevelId'
              className={styles.search_activities__second__group__d1LevelName}
            >
              <Select
                mode='multiple'
                placeholder='Категория второго уровня'
                options={d1LevelId}
              />
            </Form.Item>
          </div>

          <div className={styles.search_activities__third__group}>
            <Form.Item
              name='d2LevelId'
              className={styles.search_activities__third__group__d2LevelName}
            >
              <Select
                placeholder='Категория третьего уровня'
                mode='multiple'
                options={d2LevelId}
              />
            </Form.Item>

            <Form.Item
              name='certificate'
              className={styles.search_activities__third__group__certificate}
            >
              <Select placeholder='Выдается сертификат' options={certificate} />
            </Form.Item>

            <Form.Item
              name='days'
              className={styles.search_activities__first_group__days}
            >
              <Select placeholder='Дни недели' mode='multiple' options={days} />
            </Form.Item>
          </div>

          <Space
            direction='horizontal'
            className={styles.search_activities__third__fourth}
          >
            <Form.Item
              name='online'
              className={styles.search_activities__first__group__online}
            >
              <Select placeholder='Онлайн' options={online} />
            </Form.Item>

            <Form.Item>
              <Button htmlType='button' onClick={onReset}>
                Сбросить фильтр
              </Button>
            </Form.Item>
          </Space>
        </Form>

        <Space direction='vertical'>{renderIsLoading()}</Space>
      </Space>
    </Page>
  );
};
