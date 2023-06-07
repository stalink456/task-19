import HttpClient from 'utils/httpClient';
import { Method } from '../types';
import { PostAnswersWithUserId } from 'store/survey-post/types';

export const postSurvey = async (body: PostAnswersWithUserId) => {
  const { surveyUserAnswers, userId } = body;

  const { data } = await HttpClient.call(
    Method.Post,
    `${process.env.REACT_APP_BASE_URL}/user/${userId}/survey/save`,
    surveyUserAnswers
  );

  return data;
};
