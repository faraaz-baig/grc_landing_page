<template>
  <div
    class="flex h flex-col lg:flex-row justify-between lg:justify-start xs:items-end md:items-end lg:items-center max-w-screen-xl mx-auto pl-8 xs:pl-12 pr-0 lg:px-10 lg:mb-7"
  >
    <div class="xs:mt-12 lg:mt-0 pr-8 xs:pr-10">
      <div class="sm:w-11/12 md:w-9/12 lg:w-10/12">
        <h1
          class="font-extrabold font-rale text-2xl sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Get the things you need from
          <span class="text-green-400">stores you trust</span>.
        </h1>
        <p
          class="text-tiny xs:text-sm sm:text-base font-inter font-medium text-black mt-5 text-opacity-50"
        >
          Shop for items from your local stores and get it delivered in minutes,
          not days. Coming to your neighbourhoods soon!
        </p>
      </div>
      <form
        @submit.prevent="submitEmail"
        class="my-10 md:mb-5 md:mt-10 lg:mt-16"
      >
        <input
          type="email"
          placeholder="Enter your email"
          v-model="email"
          required
          class="bg-white-100 focus:outline-none shadow-input rounded-l-xl w-7/12 xs:w-8/12 sm:w-72 md:w-86 lg:w-7/12 font-medium placeholder-black placeholder-opacity-50 text-xs sm:text-sm md:text-base lg:text-base font-inter py-3 px-3 px-1 lg:py-3 lg:px-10"
        />
        <button
          class="hover:opacity-90 focus:outline-none text-white-100 font-bold font-inter ml-i5 bg-green-800 text-xs sm:text-sm md:text-base lg:text-base rounded-r-xl rounded-l-none py-3 px-4 md:px-8 lg:py-3 lg:px-10"
        >
          Notify Me
        </button>
      </form>
    </div>
    <img
      src="~/assets/images/main.svg"
      alt="Boy with Groceries"
      class="w-11/12 sm:w-7/12 md:w-6/12 lg:w-5/12 pointer-events-none"
    />

    <!-- Green Modal ----->

    <div
      v-if="greenModal"
      class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
    >
      <div class="relative mx-auto w-auto max-w-2xl">
        <div
          class="bg-green-400 w-72 h-80 sm:w-96 sm:h-96 px-2 xs:px-5 rounded-md shadow-input flex flex-col"
        >
          <img
            src="~/assets/images/success.svg"
            alt="success"
            class="w-20 mx-auto mt-8 sm:mt-12"
          />
          <h1
            class="text-2xl md:text-4xl text-center mt-6 sm:mt-10 md:mt-6 text-white-100 font-bold"
          >
            Success
          </h1>
          <p
            class="text-tiny xs:text-sm sm:text-base text-center font-inter font-medium text-white-100 mt-2 sm:mt-5 text-opacity-70"
          >
            {{ user }} is registered successfully. We'll notify you once we
            launch!
          </p>
          <button
            class="rounded-3xl focus:outline-none hover:opacity-90 bg-white-100 font-bold text-green-400 py-2 w-4/12 m-auto mb-6"
            @click="greenModal = false"
          >
            Close
          </button>
        </div>
      </div>
    </div>
    <div v-if="greenModal" class="fixed z-40 inset-0 opacity-25 bg-black"></div>

    <!-- RED MODAL --->

    <div
      v-if="redModal"
      class="fixed overflow-x-hidden overflow-y-auto inset-0 flex justify-center items-center z-50"
    >
      <div class="relative mx-auto w-auto max-w-2xl">
        <div
          class="bg-red-500 w-72 h-80 sm:w-96 sm:h-96 px-2 xs:px-5 rounded-md shadow-input flex flex-col"
        >
          <img
            src="~/assets/images/fail.svg"
            alt="failed"
            class="w-20 mx-auto mt-8 sm:mt-12"
          />
          <h1
            class="text-2xl md:text-4xl text-center mt-6 sm:mt-10 md:mt-6 text-white-100 font-bold"
          >
            Whoops !!!
          </h1>
          <p
            class="text-tiny xs:text-sm sm:text-base text-center font-inter font-medium text-white-100 mt-2 sm:mt-5 text-opacity-70"
          >
            There was a problem registering your email. Please try again.
          </p>
          <button
            class="rounded-3xl focus:outline-none hover:opacity-90 bg-white-100 font-bold text-red-500 py-2 w-4/12 m-auto mb-6"
            @click="redModal = false"
          >
            Close
          </button>
        </div>
      </div>
    </div>
    <div v-if="redModal" class="fixed z-40 inset-0 opacity-25 bg-black"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      greenModal: false,
      redModal: false,
      user: "",
    };
  },
  methods: {
    submitEmail() {
      this.$axios
        .post("/signup", {
          email_id: this.email,
        })
        .then((response) => {
          this.greenModal = true;
          console.log(response);
          this.user = response.data.data.email_id;
        })
        .catch((error) => {
          this.redModal = true;
          console.log(error);
        });
      this.email = "";
    },
  },
};
</script>


<style scoped>
.h {
  min-height: calc(100vh - 135px);
}
</style>
