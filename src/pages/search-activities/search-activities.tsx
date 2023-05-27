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
    d0LevelName,
    d1LevelName,
    d2LevelName,
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
      <Typography.Title type='secondary'>
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
        size={10}
        className={styles.search_activities}
      >
        <BackButton />
        <Typography.Text
          type='secondary'
          className={styles.search_activities__text}
        >
          Поиск активностей
        </Typography.Text>

        <Form
          //  инициализация полей
          // initialValues={{ district: [{ value: 'jack' }] }}
          onFinish={onFinish}
          autoComplete='off'
          ref={formRef}
        >
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
              name='days'
              className={styles.search_activities__first_group__days}
            >
              <Select placeholder='Дни недели' mode='multiple' options={days} />
            </Form.Item>

            <Form.Item
              name='online'
              className={styles.search_activities__first__group__online}
            >
              <Select placeholder='Онлайн/Оффлайн' options={online} />
            </Form.Item>

            <Form.Item
              name='d0LevelName'
              className={styles.search_activities__first__group__d0LevelName}
            >
              <Select
                placeholder='Активность1'
                mode='multiple'
                options={d0LevelName}
              />
            </Form.Item>
          </div>

          <div className={styles.search_activities__second__group}>
            <Form.Item
              name='d1LevelName'
              className={styles.search_activities__second__group__d1LevelName}
            >
              <Select
                mode='multiple'
                placeholder='Активность2'
                options={d1LevelName}
              />
            </Form.Item>

            <Form.Item
              name='d2LevelName'
              className={styles.search_activities__second__group__d2LevelName}
            >
              <Select
                placeholder='Активность3'
                mode='multiple'
                options={d2LevelName}
              />
            </Form.Item>
          </div>

          <div className={styles.search_activities__third__group}>
            <Form.Item
              name='certificate'
              className={styles.search_activities__third__group__certificate}
            >
              <Select placeholder='Сертификат' options={certificate} />
            </Form.Item>

            <Form.Item
              name='area'
              className={styles.search_activities__third__group__area}
            >
              <Select placeholder='Округ' mode='multiple' options={area} />
            </Form.Item>

            <Form.Item>
              <Button htmlType='button' onClick={onReset}>
                Сбросить фильтр
              </Button>
            </Form.Item>
          </div>
        </Form>

        <Space direction='vertical'>{renderIsLoading()}</Space>
      </Space>
    </Page>
  );
};
