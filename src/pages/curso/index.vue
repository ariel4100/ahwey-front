<template>
  <div>
    <section class="py-20 bg-[#091a28]">
      <div class="container px-4 lg:px-8 mx-auto max-w-screen-xl text-gray-700 overflow-x-hidden">
        <h1 class="my-4 text-5xl font-bold leading-tight text-white text-center pb-10 md:w-2/3 mx-auto">
          Elije el metodo que mas te interese de aprender
        </h1>
        <div class="grid grid-cols-3 gap-3"> 
            <div class="" v-for="(item,index) in products" :key="index">
                <a @click="selectedProduct(item)" class="relative block bg-black group rounded-full overflow-hidden"  href="#plans">
                    <img
                        class="absolute inset-0 object-cover w-full h-full transition-opacity   group-hover:opacity-50"
                        :class="item.slug == product.slug ? 'opacity-50' : 'opacity-25'"
                        :src="item.img"
                        alt=""
                    />
                    <div class="relative p-4 md:p-8 flex items-center justify-center">
                        <div class="text-center">
                            <!-- <p class="text-xs md:text-lg font-medium tracking-widest text-pink-500 uppercase">
                            Curso
                            </p> -->
                            <p class="font-bold  text-sm md:text-4xl text-white text-shadow">{{ item.title }}</p>
                        </div>
    
                        <div class="mt-24 md:mt-64">
                        <div
                            class="transition-all transform translate-y-8 opacity-0  group-hover:opacity-100 group-hover:translate-y-0"
                        >
                            <p class="text-sm text-white">
                            
                            </p>
                        </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
      </div>
    </section>
    <div class="text-white -mt-14 sm:-mt-24 lg:-mt-36 z-40 relative">
      <svg class="xl:h-40 xl:w-full" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" fill="currentColor"></path>
      </svg>
      <div class="bg-white w-full h-20 -mt-px"></div>
    </div>

    <section id="plans" class="relative h-[55rem] lg:h-[40rem] overflow-hidden ">
      <img src="https://www.dev.openenglish.com.br/open-mundo/wp-content/uploads/sites/23/2022/03/hero-om-1-1200_2x.jpg" alt="" class="w-full h-full object-cover md:object-none">
      <div class="absolute flex justify-center items-center top-0 right-0 bottom-0 left-0 " style="background-color: rgba(0, 0, 0, 0.7);">
        <div class="container px-4 lg:px-8 mx-auto max-w-screen-xl text-gray-700 overflow-x-hidden md:grid lg:grid-cols-3 gap-5 ">
          <div class="col-span-2 self-center">
            <h1 class="text-2x1 md:text-3xl font-semibold text-white text-center   ">
                {{ product.answer}}
            </h1>
          </div>
          <div class="flex flex-wrap justify-center md:space-x-3 mt-10">

          <div v-for="(item, index) in plans.slice(0,1)" :key="index" class="w-full   px-4  mb-8  ">
                  <div class="p-8  shadow rounded-xl relative" :class="item.type == 'popular' ?  'bg-purple-600 text-white' : 'bg-white'">
                      <span v-if="item.type == 'popular'" class="rounded-xl p-2 uppercase text-sm text-black font-semibold bg-white absolute top-[-10px] right-[25px]">Most popular</span>
                      <h4 class="mb-2 text-2xl font-bold font-heading">{{ product.plan.title }}</h4>
                      <span v-if="product.plan.price_month" class="text-xl font-semibold   block " >${{ product.plan.price_month }}/ mensual</span>
                      <span v-if="product.plan.price_total" class="text-6xl font-bold">${{ product.plan.price_total }} <span class="text-xl  ">/ mes</span> </span>
                      <span v-else class="text-6xl font-bold">${{ item.price_ars }}</span>
                      <!-- <p class="mt-3 mb-6 text-gray-500 leading-loose">Nullam diam arcu, sodales quis convallis sit amet, sagittis varius ligula.</p> -->
                      <ul class="mb-6  mt-5"  :class="item.type == 'popular' ?  'text-white ' : 'text-gray-500'">
                          <li class="mb-2 flex" v-for="(value, k) in item.option" v-if="['english-fluency-pro','english-fast'].includes(product.slug)">
                              <svg class="mr-2 w-5 h-5 " :class="value.status == 0 ? 'text-gray-400' : 'text-green-400'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                              </svg>
                              <span class="flex-1" :class="value.status == 0 ? 'line-through' : ' '"> {{ value.title }} </span>
                          </li> 
                          <li class="mb-2 flex" v-if="product.slug == 'english-fluency-pro'">
                              <svg class="mr-2 w-5 h-5 " :class="'text-green-400'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                              </svg>
                              <span class="flex-1"  > {{ 'Sesiones con nativos' }} </span>
                          </li> 
                          <template v-if="product.slug == 'speaking-club'"> 
                                  <li class="mb-2 flex" >
                                      <svg class="mr-2 w-5 h-5 " :class="'text-green-400'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                      </svg>
                                      <span class="flex-1"  > {{ 'El anfitrión se encargará de todo' }} </span>
                                  </li> 
                                  <li class="mb-2 flex" >
                                      <svg class="mr-2 w-5 h-5 " :class="'text-green-400'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                      </svg>
                                      <span class="flex-1"  > {{ 'Temas nuevos en cada reunión' }} </span>
                                  </li> 
                                  <li class="mb-2 flex" >
                                      <svg class="mr-2 w-5 h-5 " :class="'text-green-400'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                      </svg>
                                      <span class="flex-1"  > {{ 'Conversación grupales' }} </span>
                                  </li> 
                                  <li class="mb-2 flex" >
                                      <svg class="mr-2 w-5 h-5 " :class="'text-green-400'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                                      </svg>
                                      <span class="flex-1"  > {{ 'Muchos compañeros' }} </span>
                                  </li> 
                              
                          </template>
                      </ul>
                      <a class="inline-block text-center py-2 px-4 w-full rounded-l-xl rounded-t-xl   font-bold leading-loose transition duration-200" :class="item.type == 'popular' ?  'bg-white  text-black' : 'bg-pink-600 hover:bg-pink-700 text-white'" :href="'https://wa.me/541165771235?text=Hola, quiero comprar el curso de '+product.plan.title" target="_blank">
                          <i class="fab fa-whatsapp"></i> Empezar ahora
                      </a>
                  </div>
              </div>
          </div>
        </div>
      </div> 
    </section> 

    <section class="container px-4 lg:px-8 mx-auto max-w-screen-xl text-gray-700 overflow-x-hidden relative z-40 mt-10">
        <div class="flex justify-around flex-wrap bg-blue-100 rounded-[2rem] p-5   relative shadow-lg">
            <div class=" w-[9rem] lg:w-[11rem] text-center">
                <img src="https://learnwithiok.com/wp-content/uploads/2021/10/level-icon-300x300.png" alt="" class="h-20 mx-auto">
                <div class="mt-3">
                    <h4 class="font-semibold text-xl">Nivel</h4>
                    <p class="text-lg">Basico-Intermedio</p>
                </div>
            </div>
            <div class=" w-[9rem] lg:w-[11rem] text-center">
                <img src="https://learnwithiok.com/wp-content/uploads/2021/10/duracion-icon-300x300.png" alt="" class="h-20 mx-auto">
                <div class="mt-3">
                    <h4 class="font-semibold text-xl">Duración</h4>
                    <p class="text-lg">3 meses</p>
                </div>
            </div>
            <div class=" w-[9rem] lg:w-[11rem] text-center">
                <img src="https://learnwithiok.com/wp-content/uploads/2021/10/modalidad-icon-300x300.png" alt="" class="h-20 mx-auto">
                <div class="mt-3">
                    <h4 class="font-semibold text-xl">Modalidad</h4>
                    <p class="text-lg">100% Online</p>
                </div>
            </div>
            <div class=" w-[9rem] lg:w-[11rem] text-center">
                <img src="https://learnwithiok.com/wp-content/uploads/2021/10/certificado-icon-300x300.png" alt="" class="h-20 mx-auto">
                <div class="mt-3">
                    <h4 class="font-semibold text-xl">Certificado</h4>
                    <p class="text-lg">Incluido</p>
                </div>
            </div>
            <div class=" w-[9rem] lg:w-[11rem] text-center">
                <img src="https://learnwithiok.com/wp-content/uploads/2021/10/networking-icon-300x300.png" alt="" class="h-20 mx-auto">
                <div class="mt-3">
                    <h4 class="font-semibold text-xl">Networking</h4>
                    <p class="text-lg">Of course!</p>
                </div>
            </div>
        </div>

    </section>
        
    <section class="relative pb-20 bg-gradient-to-tr to-[#091a28] from-[#0d2552] ">
      <svg width="100%" height="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="md:-mt-20  mt-0 transition duration-300 ease-in-out delay-150"><path d="M 0,400 C 0,400 0,200 0,200 C 163.2,220.8 326.4,241.6 507,235 C 687.6,228.4 885.5999999999999,194.4 1044,184 C 1202.4,173.6 1321.2,186.8 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="#fff" class="absolute top-0 transition-all duration-300 ease-in-out delay-150 path-0" transform="rotate(-180 720 200)"></path></svg>
      <div class="container px-4 lg:px-8 mx-auto max-w-screen-xl overflow-x-hidden text-white md:-mt-20  mt-0">
        <h4 class="text-3xl md:text-4xl font-bold text-center mb-10">
            Que incluye el curso de Inglés en Ahwey
        </h4> 
        <div class="lg:grid grid-cols-2 gap-5 ">
            <div class=" flex items-center mt-10" v-for="(item,key) in incluye" :key="key">
                <div class="w-[5rem]  md:w-[10rem] md:h-[12rem] overflow-hidden rounded-2xl shadow-md">
                    <img :src="item.image" alt="" class="w-full object-cover  ">  
                </div>
                <div class=" flex-1 p-2 mt-4">
                    <div class="">
                        <h1 class="text-2xl font-semibold text-darken lg:pr-40">
                        {{ item.title }}
                        </h1>
                        <p class="text-gray-300 my-5   ">
                            {{ item.text }}
                        </p>
                    </div>
                </div>      
            </div>
        </div> 
      </div>
    </section> 
      
    <section class="relative">
      <div class="container px-4 lg:px-8 mx-auto max-w-screen-xl text-gray-700 overflow-x-hidden  md:grid md:grid-cols-3 gap-10  my-10">
          <video class="rounded-lg order-2 z-10"   autoplay muted loop>
              <source src="/uploads/video/video_feliz.mp4" type="video/mp4" />
              Your browser does not support HTML video.
          </video>
          <div class="col-span-2 flex items-center" >
              <div class="">
                  <h4 class="text-3xl md:text-4xl font-bold my-10">
                      Al finalizar el curso de Inglés podrás
                  </h4>
                  <div class="space-y-7">
                      <div class="flex items-start">
                          <i class="fas fa-check mr-2 text-white p-1 rounded-full bg-gradient-to-l to-blue-700 from-sky-500"></i>
                          <p class="text-base md:text-xl  text-gray-500">Hablar con nativos de forma fluida</p>
                      </div>
                      <div class="flex items-start">
                          <i class="fas fa-check mr-2 text-white p-1 rounded-full bg-gradient-to-l to-blue-700 from-sky-500"></i>
                          <p class="text-base md:text-xl  text-gray-500">Aprender técnicas para memorizar vocabulario de cualquier otro idioma sin que se te
                          olviden</p>
                      </div>
                      <div class="flex items-start">
                          <i class="fas fa-check mr-2 text-white p-1 rounded-full bg-gradient-to-l to-blue-700 from-sky-500"></i>
                          <p class="text-base md:text-xl  text-gray-500">Entender los aspectos principales de la gramatica del Inglés</p>
                      </div>
                      <div class="flex items-start">
                          <i class="fas fa-check mr-2 text-white p-1 rounded-full bg-gradient-to-l to-blue-700 from-sky-500"></i>
                          <p class="text-base md:text-xl  text-gray-500">Traducir en tiempo real conferencias</p>
                      </div>
                      <div class="flex items-start">
                          <i class="fas fa-check mr-2 text-white p-1 rounded-full bg-gradient-to-l to-blue-700 from-sky-500"></i>
                          <p class="text-base md:text-xl  text-gray-500">Conocer personas con otras culturas de todas partes del mundo</p>                        
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section> 
  </div>
</template>
<script setup>
 
       
            const products = [
                {
                    title: 'English Fast',
                    slug: 'english-fast',
                    img: 'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                    answer: 'Diseñado para personas sin conocimientos o con un bajo nivel del idioma. Aprenderás las cosas mas importantes que debes saber para poder hablar el inglés en poco tiempo.',
                    plan: {
                        title: 'English Fast',
                        slug: 'plan',
                        price_month: '',
                        price_total: '20',
                    }
                },
                {
                    title: 'English Fluency Pro',
                    slug: 'english-fluency-pro',
                    img: 'https://images.pexels.com/photos/8199759/pexels-photo-8199759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                    answer: 'Diseñado para personas sin conocimientos o con un nivel básico del idioma. Aprenderás las cosas mas importantes que debes aprender para poder hablar en poco tiempo y contaras con sesiones de conversación privadas con profesores nativos de todas partes del mundo. Aprenderás el idioma aprendiendo con el mejor método creado y conociendo personas de todas partes del mundo.',
                    plan: {
                        title: 'English Fluency Pro',
                        slug: 'plan',
                        price_month: '',
                        price_total: '60',
                    }
                },
                {
                    title: 'Speaking Club',
                    slug: 'speaking-club',
                    img: 'https://images.pexels.com/photos/3762940/pexels-photo-3762940.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
                    answer: '¡El mejor club de conversación del inglés! Preparado para que puedas practicar el speaking y la comprensión del idioma. En este curso de conversación podrás perder el miedo al hablar y adquirirás vocabularios para sorprender a todos con tu nivel de inglés.',
                    plan: {
                        title: 'Speaking Club',
                        slug: 'plan',
                        price_month: '',
                        price_total: '10',
                    }
                },
              
            ];
            const currency = ref('USD');

            const plans = [
              {
                name: 'FREE',
                price_usd: '0',
                price_ars: '0',
                price_before: '10',
                discount: '0',
                live_session: '0',
                option: [
                    {
                        title: 'Duración 3 meses',
                        status: true
                    },
                    {
                        title: 'Clases dinámicas',
                        status: true
                    },
                    {
                        title: 'Plataforma virtual las 24 hs',
                        status: true
                    },
           
                    {
                        title: 'Practicas de pronunciación y gramática',
                        status: true
                    },
                    {
                        title: 'Clases de comprensión',
                        status: true
                    },
                    {
                        title: 'Clases en vivo',
                        status: true
                    },
                    {
                        title: 'Técnicas de estudio y mas',
                        status: true
                    },

                ],
                type: 'free',
                btn: 'Empezar gratis'
              },
              {
                name: 'Basic',
                price_usd: '90',
                price_ars: '19980.00',
                price_before: '140',
                discount: '30',
                live_session: '6',
                option: [
                    {
                        title: 'Duración 3 meses',
                        status: true
                    },
                    {
                        title: '6 Sesiones con nativos',
                        status: true
                    },
                    {
                        title: '2 Masterclass por semana',
                        status: true
                    },
           
                    {
                        title: 'Acceso a los materiales de la plataforma',
                        status: true
                    },
                    {
                        title: 'Incluye certificado',
                        status: true
                    },

                ],
                type: '',
                btn: 'Empezar ahora'
              },
              {
                name: 'Pro',
                price_usd: '150',
                price_ars: '33300.00',
                price_before: '240',
                discount: '30',
                live_session: '12',
                option: [
                    {
                        title: 'Duración 3 meses',
                        status: true
                    },
                    {
                        title: '12 Sesiones con nativos',
                        status: true
                    },
                    {
                        title: '2 Masterclass por semana',
                        status: true
                    },
           
                    {
                        title: 'Acceso a los materiales de la plataforma',
                        status: true
                    },
                    {
                        title: 'Incluye certificado',
                        status: true
                    },

                ],
                type: 'popular',
                btn: 'Empezar ahora'
              },
              {
                name: 'Premium',
                price_usd: '225',
                price_ars: '49950.00',
                price_before: '340',
                discount: '30',
                live_session: '24',
                option: [
                    {
                        title: 'Duración 3 meses',
                        status: true
                    },
                    {
                        title: '24 Sesiones con nativos',
                        status: true
                    },
                    {
                        title: '2 Masterclass por semana',
                        status: true
                    },
           
                    {
                        title: 'Acceso a los materiales de la plataforma',
                        status: true
                    },
                    {
                        title: 'Incluye certificado',
                        status: true
                    },

                ],
                type: '',
                btn: 'Empezar ahora'
              },

            ];
            
            const incluye = [
                {
                    title: 'Plataforma  24/7',
                    text: 'Tendrás acceso a nuestra plataforma 24/7 en donde contarás con videoclases, ejercicios para practicar la gramática, lectura, comprensión y todas las actividades necesarias para dominar el idioma.',
                    image: 'https://images.pexels.com/photos/4260477/pexels-photo-4260477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                },
                {
                    title: 'Sesiones con nativos',
                    text: 'Pondrás en práctica lo aprendido en las clases hablando con maestros nativos que no hablan español y que te ayudarán a mejorar tu pronunciación y comprensión. Aprenderás sobre sus culturas y ellos sobre las tuyas. Las sesiones se realizan por zoom durante 30 minutos y serán face to face.',
                    image: 'https://images.pexels.com/photos/8055860/pexels-photo-8055860.jpeg?auto=compress&cs=tinysrgb&w=1600'
                },
                {
                    title: 'Master class semanal',
                    text: 'Tendrás acceso a master classes por semana vía zoom, en donde podrás profundizar los temas vistos en las clases y aprender nuevas técnicas y resolver las dudas que te puedan surgir con el idioma.',
                    image: 'https://images.pexels.com/photos/4226122/pexels-photo-4226122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                },
                {
                    title: 'Técnicas de aprendizaje acelerado',
                    text: 'Aprenderás los mejores métodos, técnicas y secretos que usan los políglotas para aprender vocabulario de forma rápida y efectiva. Mejorarás la velocidad de tu aprendizaje y ya no deberás preocuparte por olvidar el vocabulario que aprendiste.',
                    image: 'https://images.pexels.com/photos/6347901/pexels-photo-6347901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                },
                {
                    title: 'Ahwey Challenge',
                    text: 'Desafiate y supera tus límites con las actividades que Ahwey prepara para que mejores tu inglés. Participa de los desafíos de Ahwey como el English Speech Contest, Culture Exchange y muchas más',
                    image: 'https://images.pexels.com/photos/7887041/pexels-photo-7887041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                },
                {
                    title: 'Certificado digital',
                    text: 'El Certificado de Ahwey te servirá para demostrar tu dominio del idioma e impulsar tu carrera profesional. Lo conseguirás realizando un examen final antes de finalizar el curso, que determinará tu nivel de idioma.',
                    image: 'https://images.pexels.com/photos/3799806/pexels-photo-3799806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                },
            ];
            const product = ref(products[0] || {})

            function selectedProduct(item) {
                console.log(item);
                product.value = item
              
            }
            function addPlan(item) {
              item.currency = currency.value
              localStorage.setItem('plan', JSON.stringify(item));
            }
 
         
   
</script>