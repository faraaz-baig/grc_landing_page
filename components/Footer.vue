<template>
  <div>
    <section>
      <div class="wave wave1"></div>
      <div class="wave wave2"></div>
      <div class="wave wave3"></div>
      <div class="wave wave4"></div>
    </section>
    <footer class="relative bg-green-900 text-white-100">
      <div class="max-w-screen-xl mx-auto px-10 pb-10 md:pb-32">
        <div
          class="flex flex-wrap-reverse md:justify-between items-start pt-10"
        >
          <a href="#" class="mx-auto md:mx-0"
            ><img
              src="~/assets/images/footer-logo.svg"
              alt="Groceri logo"
              class="w-10/12 mx-auto mt-20 md:mx-0 md:w-44"
          /></a>
          <div class="flex flex-col w-full mt-10 md:mt-0 md:w-1/12">
            <a
              href="#"
              target="_blank"
              class="mb-6 font-inter text-sm md:text-base font-semibold"
              >About</a
            >
            <a
              href="mailto:support@groceri.app"
              class="font-inter text-sm md:font-base font-semibold"
              >Contact</a
            >
          </div>
          <div class="flex flex-col">
            <a
              href="#"
              target="_blank"
              class="mb-6 font-inter text-sm font-semibold"
              >LinkedIn</a
            >
            <a
              href="https://www.instagram.com/groceri.app"
              target="_blank"
              class="font-inter text-sm font-semibold"
              >Instagram</a
            >
          </div>
          <div class="flex flex-col ml-20 md:ml-0">
            <a
              href="https://docs.google.com/document/d/1HSVGTtPmM7Xds918EWCg7XClpHXd_Q3HvveeJnT_S1w/edit?usp=sharing"
              target="_blank"
              class="mb-6 font-inter text-sm font-semibold"
              >Privacy</a
            >
            <a
              href="https://docs.google.com/document/d/1wsSkLuSBCueaZlFtCqhmCGGwIwqOsmRzzT1fJdC9jMo/edit?usp=sharing"
              target="_blank"
              rel="noreferrer"
              class="font-inter text-sm font-semibold"
              >T&C</a
            >
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
section {
  position: relative;
  width: 100%;
  height: 150px;
  background: #fcfffa;
  overflow: hidden;
}

section .wave {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100px;
  background: url("~/assets/images/wave.png");
  background-size: 1000px 100px;
}
section .wave.wave1 {
  animation: animate 30s linear infinite;
  z-index: 10;
  opacity: 1;
  animation-delay: 0s;
  bottom: 0;
}
@keyframes animate {
  0% {
    background-position-x: 0;
  }
  100% {
    background-position-x: 1000px;
  }
}
section .wave.wave2 {
  animation: animate2 15s linear infinite;
  z-index: 9;
  opacity: 0.5;
  animation-delay: -5s;
  bottom: 10px;
}
@keyframes animate2 {
  0% {
    background-position-x: 0;
  }
  100% {
    background-position-x: -1000px;
  }
}
section .wave.wave3 {
  animation: animate 15s linear infinite;
  z-index: 8;
  opacity: 0.2;
  animation-delay: -2s;
  bottom: 15px;
}

section .wave.wave4 {
  animation: animate2 5s linear infinite;
  z-index: 7;
  opacity: 0.7;
  animation-delay: -5s;
  bottom: 20px;
}
</style>