type Variable = {
    name: string;
    prompt: string;
    required: boolean;
};

export type Config = {
variables: Variable[];
};
