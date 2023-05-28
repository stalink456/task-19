import React from 'react';
import { Button, Form, Input, Radio } from 'antd';
import { useAuth } from 'hooks/use-auth';

import styles from './auth.module.css';

export const Auth: React.FC = () => {
  const { authFIO, authDate, authIsLoading, onFinish } = useAuth();

  return (
    <div className={styles.auth}>
      <Form
        className={styles.auth__form}
        name='auth'
        initialValues={{ remember: true }}
        onFinish={onFinish}
        autoComplete='off'
      >
        <Form.Item
          label='ФИО'
          name='fio'
          rules={[{ required: true, message: 'Введите Ваше ФИО' }]}
        >
          <Input
            placeholder='Иванов Иван Иванович'
            value={authFIO === null ? '' : authFIO}
          />
        </Form.Item>

        <Form.Item
          label='Дата рождения'
          name='date'
          rules={[{ required: true, message: 'Укажите дату рождения!' }]}
        >
          <Input
            placeholder='20.05.1996'
            value={authDate === null ? '' : authDate}
          />
        </Form.Item>

        <Form.Item
          name='sex'
          label='Ваш пол'
          rules={[{ required: true, message: 'Укажите Ваш пол!' }]}
        >
          <Radio.Group>
            <Radio value='male'>Мужской</Radio>
            <Radio value='female'>Женский</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item className={styles.auth__form__button}>
          <Button type='primary' htmlType='submit' loading={authIsLoading}>
            Авторизоваться
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
