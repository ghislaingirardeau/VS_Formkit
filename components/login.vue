<script setup>
const formData = ref({
  username: 'danielkelly_io',
  password: '',
  email: '',
  address: '',
});
async function handleSubmit(data) {
  // wait est la function créer dans le dossier utils, parce qu'elle est dans ce dossier, pas besoin de faire un import !
  await wait(3000);
  console.log(data);
}

/* FORM VALIDATION RULES */
// Find all the rues here https://formkit.com/essentials/validation#available-rules
// Doc how to show validation message : https://formkit.com/essentials/validation
// validation => suit l'ordre des regles. Peut aussi etre sous la forme d'un array
// validation-visibility => comment sera montrer le message dés la saisie, dés le blur...

/* CUSTOM VALIDATION RULES */
// Debounce (ms) => le temps de l'appel API
// (500)username_is_unique pour par exemple faire un appel au back pour vérifie que le user est unique
// si on veut réutiliser cette regle dans plusieurs composant, on peut la créer en global dans le formkit.config.ts, elle devient alors accesible partout
</script>
<template>
  <div>
    <FormKit
      type="form"
      :value="formData"
      @submit="handleSubmit">
      <h1>Login</h1>
      <FormKit
        validation="(500)username_is_unique"
        type="text"
        label="Username"
        name="username" />
      <FormKit
        validation="+email"
        validation-visibility="submit"
        type="email"
        label="Email"
        name="email" />
      <FormKit
        type="password"
        label="Password"
        name="password" />
      <FormKit
        validation="required|?length: 2,10"
        validation-visibility="live"
        type="text"
        label="Address"
        name="address" />
    </FormKit>
  </div>
</template>
