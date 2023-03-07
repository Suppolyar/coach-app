<template>
  <form @submit.prevent='submitForm'>
    <div class='form-control' >
      <label for='firstName'>First Name</label>
      <input v-model.trim='firstName' id='firstName' type='text'>
    </div>
    <div class='form-control' >
      <label for='lastName'>Last Name</label>
      <input v-model.trim='lastName' id='lastName' type='text'>
    </div>
    <div class='form-control' >
      <label for='description'>Description</label>
      <textarea v-model.trim='description' id='description' rows='5' />
    </div>
    <div class='form-control' >
      <label for='rate'>Hourly Rate</label>
      <input v-model.number='rate' id='rate' type='number'>
    </div>

    <div class='form-control'>
      <h3>Areas Of Expertise</h3>
      <div>
        <input v-model='areas' type='checkbox' value='frontend' id='frontend'>
        <label for='frontend'>Frontend Development</label>
      </div>
      <div>
        <input v-model='areas' type='checkbox' value='backend' id='backend'>
        <label for='backend'>Backend Development</label>
      </div>
      <div>
        <input v-model='areas' type='checkbox' value='career' id='career'>
        <label for='career'>Career Advisory</label>
      </div>
    </div>

    <base-btn>Register</base-btn>
  </form>
</template>
<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      description: '',
      rate: null,
      areas: []
    }
  },
  methods: {
    submitForm() {
      const formData = {
        first: this.firstName,
        last: this.lastName,
        desc: this.description,
        rate: this.rate,
        areas: this.areas
      }

      console.log(formData);
    }
  }
}
</script>

<style>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}

</style>
