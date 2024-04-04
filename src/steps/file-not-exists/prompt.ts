import { prompt } from 'enquirer';
import { type Config, type Variable } from '../../read-config-file';

interface Question {
  type: string
  name: string
  message: string
}
type EnvValues = Record<string, string | undefined>;

const composeQuestion = ({ prompt, optional }: Pick<Variable, 'prompt' | 'optional'>) => {
  if (optional) {
    return prompt + ' (optional)';
  }
  return prompt;
};

const getQuestions = (configFile: Config): Question[] => {
  const { variables } = configFile;

  return variables.map(({ name, prompt, optional }) => ({
    type: 'input',
    name,
    message: composeQuestion({ prompt, optional })
  }));
};

export const getValuesForKeys = async (configFile: Config): Promise<EnvValues> => {
  const questions = getQuestions(configFile);
  const answers = await prompt(questions);
  return answers;
};
