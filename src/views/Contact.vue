<template>
  <div>
    <div class="mx-auto" style="width: 400px;">
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Contact us</h5>
          <p class="card-text">
            Please fill out this form and we will contact you as soon as we can.
          </p>
          <form>
            <div class="row justify-content-center">
              <div class="col-12 form-group">
                <label>First Name</label>
                <input type="text" class="form-control form-control-md" />
              </div>
              <div class="col-12 form-group">
                <label>Last Name</label>
                <input type="lastname" class="form-control form-control-md" />
              </div>
              <div class="col-12 form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-md" />
                <small class="form-text text-muted"
                  >We'll never share your email with anyone else :)</small
                >
              </div>
              <div class="col-12 form-group">
                <label>Message</label>
                <input type="message" class="form-control form-control-md" />
              </div>
              <button type="submit" class="btn btn-dark" style="margin: 3rem;">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
};
</script>


<style scoped>
.card {
  background-color: rgb(145, 119, 119, 0.25);
}

</style>
