import { prompt } from 'enquirer';
import { Config, Variable } from '../../read-config-file';

const composeQuestion = ({prompt, optional}: Pick<Variable, 'prompt' | 'optional'>) => {
    if(optional){
        return  prompt + ' (optional)'
    }
    return prompt;
};

const getQuestions = (configFile: Config) => {
    const { variables } = configFile;

    return variables.map(({name, prompt, optional}) => ({
        type: 'input',
        name,
        message: composeQuestion({prompt, optional})
    }));
};

export const getValuesForKeys = async (configFile: Config) => {
    const questions = getQuestions(configFile);
    const answers = await prompt(questions);
    return answers;
}
