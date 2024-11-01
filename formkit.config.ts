import { DefaultConfigOptions } from '@formkit/vue';

const config: DefaultConfigOptions = {
  theme: 'genesis',
  /* custom message globally register to display on validation */
  messages: {
    /* lang */
    en: {
      validation: {
        /* utiliser en fonction permet de recupérer des params, notamment ce que vient de saisir l'utilisateur */
        /* le nom de la méthode doit MATCHER avec le nom de la rule !!! */
        username_is_unique({ args, name, node }) {
          console.log(node);
          return `${name} with value ${node.value} is already taken`;
        },
      },
    },
  },
  /* custom validation rule, define globaly, so accessible inside all formkit */
  rules: {
    async username_is_unique(node) {
      const users = ['pierre', 'paul', 'jack'];
      await wait(500);
      return !users.includes(node.value as string);
    },
  },
};

export default config;
