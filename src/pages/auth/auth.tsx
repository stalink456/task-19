import React from 'react';
import { Button, Form, Input, Radio, Space } from 'antd';
import { useAuth } from 'hooks/use-auth';

import styles from './auth.module.css';

export const Auth: React.FC = () => {
  const [form] = Form.useForm();
  const {
    authFIO,
    authDate,
    authIsLoading,
    onFinish,
    handleChangeUser1,
    handleChangeUser2,
    handleChangeUser3,
  } = useAuth(form);

  return (
    <div className={styles.auth}>
      <Space direction='vertical' className={styles.auth_default_buttons}>
        <Button
          type='primary'
          onClick={handleChangeUser1}
          style={{ height: '2.5em' }}
        >
          Тестовый пользователь №1
        </Button>
        <Button
          type='primary'
          onClick={handleChangeUser2}
          style={{ height: '2.5em' }}
        >
          Тестовый пользователь №2
        </Button>
        <Button
          type='primary'
          onClick={handleChangeUser3}
          style={{ height: '2.5em' }}
        >
          Тестовый пользователь №3
        </Button>
      </Space>
      <Form
        className={styles.auth__form}
        name='auth'
        form={form}
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
