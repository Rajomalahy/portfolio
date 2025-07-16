import nancy from '../assets/nancy.jpg'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javascript from '../assets/javascript.png'
import github from '../assets/github.png'
import react from '../assets/react.png'
import vite from '../assets/vite.png'
import mail from '../assets/mail.png'
import insta from '../assets/insta.png'
import link from '../assets/link.png'
import mortier from '../assets/mortier.png'
import phone from '../assets/phone.png'
import email from '../assets/email.png'
import address from '../assets/address.png'
import images from '../assets/images.jpg'
import site from '../assets/site.png'
import dashboard from '../assets/dashboard.png'
import login from '../assets/login.png'

export default function Profile(){
    return(
        <>
            <div>
                <header class="text-left p-6 mt-0 font-bold text-gray-800">Nancy</header>
                <section class="p-6 text-left flex justify-between gap-5">
                    <div class="max-w-2xl">
                        <h1 class="text-2xl md:text-3xl font-bold text-gray-800">RAJOMALAHY Ratovonirina Nancy</h1> 
                        <h2 class="text-lg md:text-xl text-black-600 mt-1">Développeuse frontend</h2>
                        <div class="">
                            <p class="mt-4 text-gray-700 leading-relaxed">
                                Passionnée par le développement web, 
                                je suis une développeuse frontend spécialisée dans la création d’interfaces modernes,
                                réactives et intuitives. J'utilise principalement React.js,
                                Tailwind CSS et d'autres technologies modernes pour concevoir des expériences
                                utilisateur fluides et accessibles. Mon objectif est de transformer les idées en interfaces élégantes,
                                fonctionnelles et centrées sur l’utilisateur.
                            </p>
                        </div>
                        <div class="mt-4 text-left flex gap-3">
                            <img src={link} class="h-5 w-5"/>
                            <img src={github} class="h-6 w-6"/>
                            <img src={insta} class="h-6 w-6"/>
                            <img src={mail} class="h-6 w-6"/>
                        </div>
                    </div>
                    <div class="max-w-lg">
                        <img class="h-70 w-80 object-cover rounded-full" src={nancy}/>
                    </div>
                </section>

                {/* Technologie */}
                <section>
                    <div>
                        <h1 class="text-2xl md:text-3xl font-bold text-gray-800">Technologies</h1>
                    </div>
                    <div class="mt-10 flex justify-center gap-8">
                        <img src={html} class="h-15 w-15 animate-bounce "/>
                        <img src={css} class="h-15 w-15 animate-bounce "/>
                        <img src={javascript} class="h-15 w-15 animate-bounce "/>
                        <img src={github} class="h-15 w-15 animate-bounce "/>
                        <img src={react} class="h-15 w-15 animate-bounce "/>
                        <img src={vite} class="h-15 w-15 animate-bounce " style={{ animationDelay: '6s' }}/>
                    </div>
                </section>

                {/* Projets */}
                <section>
                    <div>
                        <h1 class="mt-10 text-2xl md:text-3xl font-bold text-gray-800">Projets</h1>
                    </div>
                    <div>
                        <div>
                            <div>
                                <img src={site} class="w-90 h-60"  alt="" />
                            </div>
                            <div>
                                <p></p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={dashboard} class="w-90 h-60"  alt="" />
                            </div>
                            <div>
                                <p></p>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src={login} class="w-90 h-60" alt="" />
                            </div>
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* education */}
                <section>
                    <div>
                        <h1 class="mt-10 text-2xl md:text-3xl font-bold text-gray-800">Educations</h1>
                    </div>
                    <div class=" mt-10 grid grid-cols-2 gap-4">
                        <div class="shadow-xl/20 flex p-6 rounded-xl text-left gap-5">
                            <div>
                                <img src={mortier} class="h-15 w-15"/>
                            </div>
                            <div>
                                <small class="font-bold text-gray-900">2020</small><br/>
                                <strong>Obtention du Baccalauréat série D </strong>
                                <p class="text-gray-700">Lycée Présentation de Marie Manakara</p>
                            </div>
                        </div>

                        <div class="shadow-xl/20 flex p-6 rounded-xl text-left gap-5">
                            <div>
                                <img src={mortier} class="h-15 w-15"/>
                            </div>
                            <div>
                                <small class="font-bold text-gray-900">2021-2022</small><br/>
                                <strong>Première année de licence en développement d'application intranet internet</strong>
                                <p class="text-gray-700">Ecole de Management et d'Innovation Technologique</p>
                            </div>
                        </div>

                        <div class="shadow-xl/20 flex p-6 rounded-xl text-left gap-5">
                            <div>
                                <img src={mortier} class="h-15 w-15"/>
                            </div>
                            <div>
                                <small class="font-bold text-gray-900">2022-2023</small><br/>
                                <strong>Deuscième année de licence en développement d'application intranet internet</strong>
                                <p class="text-gray-700">Ecole de Management et d'Innovation Technologique</p>
                            </div>
                        </div>

                        <div class="shadow-xl/20 flex p-6 rounded-xl text-left gap-5">
                            <div>
                                <img src={mortier} class="h-15 w-15"/>
                            </div>
                            <div>
                                <small class="font-bold text-gray-900">2023-2024</small><br/>
                                <strong>Troisième année de licence en développement d'application intranet internet</strong>
                                <p class="text-gray-700">Ecole de Management et d'Innovation Technologique</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* expériences */}

                <section class="mt-15">
                    <div>
                        <h1 class="text-2xl md:text-3xl font-bold text-gray-800">Expériences</h1>
                    </div>
                    <div class="flex justify-between">
                        <div>
                            <img src={images} class="h-100 w-150" alt="" />
                        </div>
                        <div>
                            <div class="mt-4 max-w-lg text-left">
                            <strong>Juin 2023 - Août 2023 : Conception et réalisation d'une application web pour la gestion du SALEM HOTEL - Marolook Fianarantsoa</strong>
                            <p class="mt-1 text-gray-700 leading-relaxed">Durant ce stage, j'ai eu l'opportunité de développer une application web complète
                                pour la gestion de Salem hôtel. Cette solution a été réalisée en utilisant PHP, Javascript 
                                et le framework bootstrap pour le design responsive.
                                L'application permet d'administrer efficacement les réservations, les chambres, les clients.
                            </p>
                            <small>Langages/Framework : PHP , JavaScript, Bootstrap</small>
                            </div>

                            <div class="mt-6 max-w-lg text-left">
                                <strong>Juin 2024 - Septembre 2024 : Conception et réalisation 
                                d'une application de gestion des menus restaurant ZOMATEL - Zomatel Fianarantsoa </strong>
                                <p class="mt-1 text-gray-700 leading-relaxed">J'ai créer un site web dynamique des menus restaurant en utilisant react et le framwork bootstrap
                                et une application web pour gérer le site avec le framework django
                                </p>
                                <small>Langages/Framework : React, Django, Bootstrap</small>
                            </div>
                        </div>
                    </div>
                </section>

                <footer>
                    <hr class="mt-15"/>
                    <div>
                        <h1 class="mt-5 text-2xl md:text-3xl font-bold text-gray-800">Contact</h1>
                    </div>
                    <div class="mt-5 flex justify-center gap-15">
                        <div class="flex gap-2">
                            <img src={address} class="h-7 w-7" alt="" />Andrainjato Fianarantsoa
                        </div>
                        <div class="flex gap-2">
                            <img src={phone} class="h-7 w-7" alt="" /> 034 89 684 32 / 034 24 737 13
                        </div>
                        <div class="flex gap-2">
                            <img src={email} class="h-7 w-7" alt="" /> nanncyrato@gmail.com
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}