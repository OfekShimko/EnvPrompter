import { prompt } from 'enquirer';
import { Config, Variable } from '../../read-config-file';

const composeQuestion = ({prompt, required}: Pick<Variable, 'prompt' | 'required'>) => {
    return prompt + ` (${required ? 'required' : 'not required'})`;
};

const getQuestions = (configFile: Config) => {
    const { variables } = configFile;

    return variables.map(({name, prompt, required}) => ({
        type: 'input',
        name,
        message: composeQuestion({prompt, required})
    }));
};

export const getValuesForKeys = async (configFile: Config) => {
    const questions = getQuestions(configFile);
    const answers = await prompt(questions);
    return answers;
}
