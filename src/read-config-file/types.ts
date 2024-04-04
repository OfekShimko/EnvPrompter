export type Variable = {
    name: string;
    prompt: string;
    optional?: boolean;
};

export type Config = {
    variables: Variable[];
};
