<template>
  <div>
    <!-- Ajout de class pour chaque partie du formKit -->
    <!-- en ouvrant inspect, formkit est décomposé en element commencant par formkit-xxx -->
    <!-- pour personnaliser css sur un element, il suffit d'ajouter xxx-class -->
    <!-- Par exemple, on ajoute la classe mycustomForWrapper à l'élément formkit-wrapper -->
    <FormKit
      type="text"
      label="Your username"
      value="calypso"
      help="Pick a username people will remember!"
      wrapper-class="mycustomForWrapper"
      label-class="label--italic">
      <!-- On peut personnaliser un element grace au slot -->
      <!-- Par exemple, on pourrait ici ajouter un tool tip dans le formkit-help -->
      <!-- le slot ecrase l'attribut help du composant formkit -->
      <template #help="context"> {{ context.help }} ?? </template>
    </FormKit>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
