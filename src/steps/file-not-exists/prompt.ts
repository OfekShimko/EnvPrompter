import { prompt } from 'enquirer';
import { Config } from '../../read-config-file';

const getQuestions = (configFile: Config) => {
    const { variables } = configFile;

    return variables.map(({name, prompt}) => ({
        type: 'input',
        name,
        message: prompt
    }));
};

export const getValuesForKeys = async (configFile: Config) => {
    const questions = getQuestions(configFile);
    const answers = await prompt(questions);
    return answers;
}
