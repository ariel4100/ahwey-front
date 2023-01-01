<template>
  <div>
    <div x-data="{ open: false }" class="w-full text-gray-700 bg-[#091a28]">
      <div class="flex flex-col max-w-screen-xl px-8 mx-auto md:items-center md:justify-between md:flex-row">
          <div class="flex flex-row items-center justify-between py-6">
              <div class="relative md:mt-8">
                  <NuxtLink href="/" class="">
                    <img src="https://firebasestorage.googleapis.com/v0/b/clfargentina.appspot.com/o/ahwey%2Fahwey%20w%20(1).png?alt=media&token=d19c3db7-b251-460e-86f5-f735f2505dfd" alt="" class="w-full h-14">
                  </NuxtLink>
              </div>
              <button class="rounded-lg md:hidden focus:outline-none focus:shadow-outline" @click="open = ! open">
                  <svg fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
                      <path x-show="!open" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
                      <path x-show="open" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
              </button>
          </div>
          <nav :class="{ 'transform md:transform-none': !open, 'h-full': open, 'h-0': !open, }" class="md:h-auto flex flex-col flex-grow md:items-center pb-4 md:pb-0 md:flex md:justify-end md:flex-row origin-top duration-300 scale-y-0">
              <NuxtLink class="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-8 md:ml-4 text-white focus:outline-none focus:shadow-outline" href="/">Inicio</NuxtLink>
              <NuxtLink class="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-8 md:ml-4 text-white focus:outline-none focus:shadow-outline" href="/curso">Curso</NuxtLink>
              <!-- <NuxtLink class="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-8 md:ml-4 text-white focus:outline-none focus:shadow-outline" href="blog">Blog</NuxtLink> -->
             
              <NuxtLink class="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-8 md:ml-4 text-white focus:outline-none focus:shadow-outline" href="about">Nosotros</NuxtLink>
              <NuxtLink class="px-10 py-3 mt-2 text-sm text-center bg-white text-gray-800 rounded-full md:mt-8 md:ml-4" href="#">Login</NuxtLink>
              <NuxtLink class="px-10 py-3 mt-2 text-sm text-center bg-yellow-500 text-white rounded-full md:mt-8 md:ml-4" href="#">Sign Up</NuxtLink>
              <select class="px-4 py-2 mt-2 text-sm bg-transparent rounded-lg md:mt-8 md:ml-4 text-white focus:outline-none focus:shadow-outline" v-model="$colorMode.preference">
                <option value="system" class="text-dark">System</option>
                <option value="light" class="text-dark">Light</option>
                <option value="dark" class="text-dark">Dark</option>
                <option value="sepia" class="text-dark">Sepia</option>
              </select>
          </nav>
      </div>
  </div>
    <slot /> 

    <footer class="mt-32 bg-[#091a28]">
		<div class="max-w-lg mx-auto">
			<div class="flex py-12 justify-center text-white items-center px-20 sm:px-36">
				<div class="relative">
					<img src="https://firebasestorage.googleapis.com/v0/b/clfargentina.appspot.com/o/ahwey%2Fahwey%20w%20(1).png?alt=media&token=d19c3db7-b251-460e-86f5-f735f2505dfd" alt="" class="h-14">
				</div>
				<!-- <span class="border-l border-gray-500 text-sm pl-5 py-2 font-semibold">Virtual Class for Zoom</span> -->
			</div>
			<!-- <div class="text-center pb-16 pt-5">
				<label class="text-gray-300 font-semibold">Subscribe to get our Newsletter</label>
				<div class="px-5 sm:px-0 flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0 justify-center mt-3">
					<input type="email" placeholder="Your Email" class="rounded-full py-2 pl-5 bg-transparent border border-gray-400">
					<button type="submit" class="text-white w-40 sm:w-auto mx-auto sm:mx-0 font-semibold px-5 py-2 rounded-full" style="background: linear-gradient(105.5deg, #545AE7 19.57%, #393FCF 78.85%);">Subscribe</button>
				</div>
			</div> -->
			<div class="flex items-center text-gray-400 text-sm justify-center">
				<a href="" class="pr-3">Careers</a>
				<a href="" class="border-l border-gray-400 px-3">Privacy</a>
				<a href="" class="border-l border-gray-400 pl-3">Terms & Conditions</a>
			</div>
			<div class="text-center text-white">
				<p class="my-3 text-gray-400 text-sm">&copy; 2023 Class Technologies Inc. </p>
				<div class="py-3 tracking-wide">
					<!-- <p>Code By <span class="font-semibold">mhaecal</span></p>
					<p>UI/UX By <span class="font-semibold">Irvan Moses</span></p> -->
				</div>
			</div>
		</div>
	</footer>
  </div>
</template>
