import { prompt } from 'enquirer';
import { type Config, type Variable } from '../../read-config-file';

export const optionalQuestionValeSuffix = '(optional)';

interface Question {
  type: string
  name: string
  message: string
}

export const composeMessage = ({ prompt, optional }: Pick<Variable, 'prompt' | 'optional'>) => {
  if (optional) {
    return prompt + ` ${optionalQuestionValeSuffix}`;
  }
  return prompt;
};


export const composeQuestion = ({ name, prompt, optional }: Variable) => {
 return {
    type: 'input',
    name,
    message: composeMessage({ prompt, optional })
  };
};

const getQuestions = (configFile: Config): Question[] => {
  const { variables } = configFile;
  return variables.map(composeQuestion);
};

export const getValuesForKeys = async (configFile: Config) => {
  const questions = getQuestions(configFile);
  const answers = await prompt(questions);
  return answers;
};
