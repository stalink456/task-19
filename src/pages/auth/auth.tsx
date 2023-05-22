import React from 'react';
import { Button, Form, Input, Radio } from 'antd';
import { useAuth } from 'hooks/use-auth';

import styles from './auth.module.css';

export const Auth: React.FC = () => {
  const { onFinish } = useAuth();

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
          name='name'
          rules={[{ required: true, message: 'Введите Ваше ФИО' }]}
        >
          <Input placeholder='Иван Иванович Иванов' />
        </Form.Item>

        <Form.Item
          label='Дата рождения'
          name='date'
          rules={[{ required: true, message: 'Укажите дату рождения!' }]}
        >
          <Input placeholder='20.05.1996' />
        </Form.Item>

        <Form.Item label='Адрес' name='adress'>
          <Input placeholder='Москва, ул. Петровых, д.8, 8к1' />
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
          <Button type='primary' htmlType='submit'>
            Авторизоваться
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
