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
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from 'react'

export default function Profile(){

    useEffect(() => {
        AOS.init({ duration: 2000, once: false })
    }, [])

    return(
        <>
            <div className="overflow-x-hidden">
                <header className="text-left text-xl font-bold text-gray-800 pt-0  p-6">Nancy</header>
                <section className="p-6 text-left flex flex-col lg:flex-row  justify-between gap-5 ">
                    <div className="max-w-2xl" data-aos="fade-down-right" data-aos-duration="2000">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">RAJOMALAHY Ratovonirina Nancy</h1> 
                        <h2 className="text-lg md:text-xl text-black-600 mt-1">Développeuse frontend</h2>
                        <div>
                            <p className="mt-4 text-gray-700 leading-relaxed ">
                                Passionnée par le développement web, 
                                je suis une développeuse frontend spécialisée dans la création d’interfaces modernes,
                                réactives et intuitives. J'utilise principalement React.js,
                                Tailwind CSS et d'autres technologies modernes pour concevoir des expériences
                                utilisateur fluides et accessibles. Mon objectif est de transformer les idées en interfaces élégantes,
                                fonctionnelles et centrées sur l’utilisateur.
                            </p>
                        </div>
                        <div class="mt-4 text-left flex gap-3">
                            <a href="https://www.linkedin.com/in/ratovonirina-nancy-rajomalahy-7b4aba247/" target="_blank" rel="noopener noreferrer">
                                <img src={link} alt="LinkedIn" className="h-5 w-5" />
                            </a>        
                            <a href="https://github.com/Rajomalahy" target="_blank" rel="noopener noreferrer">
                                <img src={github} alt="GitHub" className="h-6 w-6" />
                            </a>
                            <a href="https://www.instagram.com/rajomalahyratovonirina/" target="_blank" rel="noopener noreferrer">
                                <img src={insta} alt="Instagram" className="h-6 w-6" />
                            </a>
                            <a href="https://www.facebook.com/nanncy.ratovonera" target="_blank" rel="noopener noreferrer">
                                <img src={mail} alt="facebook" className="h-6 w-6" />
                            </a>
                        </div>
                    </div>
                    <div class="max-w-lg" data-aos="fade-down-left" data-aos-duration="2000">
                        <img className="h-70 w-80 object-cover rounded-full" src={nancy}/>
                    </div>
                </section>

                {/* Technologie */}
                <section>
                    <div>
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Technologies</h1>
                    </div>
                    <div class="mt-10 flex flex-wrap justify-center gap-8">
                        <img src={html} className="h-16 w-16 animate-bounce delay-100  duration-1000"/>
                        <img src={css} className="h-16 w-16 animate-bounce delay-300 duration-2000"/>
                        <img src={javascript} className="h-16 w-16 animate-bounce delay-500"/>
                        <img src={github} className="h-16 w-16 animate-bounce delay-700"/>
                        <img src={react} className="h-16 w-16 animate-bounce delay-900"/>
                        <img src={vite} className="h-16 w-16 animate-bounce delay-1000"/>
                    </div>
                </section>

                {/* Projets */}
                <section className=''>
                    <div>
                        <h1 className="mt-10 text-2xl md:text-3xl font-bold text-gray-800">Projets</h1>
                    </div>
                    <div className="mt-10">
                        <div className="flex flex-col lg:flex-row justify-around p-8">
                            <div data-aos="fade-right"data-aos-duration="2000">
                                <img src={site} className="w-90 h-60"  alt="" />
                            </div>
                            <div className="text-left max-w-xl" data-aos="fade-left" data-aos-duration="2000">
                                <h1 className="md:text-xl text-black-600 mt-1">Site web de menus restaurant ZOMATEL</h1>
                                <p className="text-gray-700 leading-relaxed">
                                    J’ai conçu et développé un site web dynamique pour le restaurant ZOMATEL, permettant aux clients de consulter l’ensemble des menus disponibles
                                    avec une interface moderne, intuitive et responsive. Grâce à l’utilisation de React.js et du framework Bootstrap, ce site offre une navigation fluide,
                                    une mise en page claire, ainsi qu’une compatibilité optimale sur tous les types d’appareils (ordinateurs, tablettes, smartphones).
                                    L’objectif était de valoriser les plats proposés tout en facilitant l’accès à l’information pour les visiteurs.
                                </p>
                                <small>Github : <a href="https://github.com/Rajomalahy/siteWeb_Hotel" target="_blank" rel="noopener noreferrer">https://github.com/Rajomalahy/siteWeb_Hotel</a> </small>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-around p-8">
                            <div data-aos="fade-right" data-aos-duration="4000">
                                <img src={dashboard} className="w-90 h-60"  alt="" />
                            </div>
                            <div className="text-left max-w-xl" data-aos="fade-left" data-aos-duration="4000">
                                <h1 className=" md:text-xl text-black-600 mt-1">Application de gestion de menus restaurant ZOMATEL</h1>
                                <p className="text-gray-700 leading-relaxed">
                                    Cette application web a été développée pour permettre aux responsables du restaurant ZOMATEL de gérer facilement les menus affichés sur le site.
                                    Réalisée avec Django, elle comprend une interface d’administration sécurisée pour ajouter, modifier ou supprimer des plats, des catégories,
                                    ainsi que gérer les images associées. Ce projet m’a permis de mettre en œuvre mes compétences en développement backend avec Django,
                                    en intégrant une base de données robuste et des vues permettant une gestion complète des contenus en toute autonomie.
                                </p>
                                <small>Github : <a href="https://github.com/Rajomalahy/back_gestionHotel" target="_blank" rel="noopener noreferrer">https://github.com/Rajomalahy/back_gestionHotel</a> </small>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row justify-around p-8">
                            <div data-aos="fade-right" data-aos-duration="5000">
                                <img src={login} class="w-90 h-60" alt="" />
                            </div>
                            <div className="text-left max-w-xl" data-aos="fade-left" data-aos-duration="5000">
                                <h1 className="md:text-xl text-black-600 mt-1">Un login pour un projet personnel</h1>
                                <p className="text-gray-700 leading-relaxed">
                                    Ce formulaire de connexion a été développé dans le cadre d’un projet personnel. Il permet à un utilisateur de s’authentifier de manière sécurisée
                                    avant d’accéder à l’application. L’objectif était de mettre en place un système de connexion simple, mais sécurisé,
                                    tout en respectant les bonnes pratiques d’authentification côté frontend et backend.
                                    Ce projet m’a permis d’expérimenter la gestion d’état avec React, ainsi que la communication avec une API d’authentification.
                                </p>
                                <small>Github : <a href="https://github.com/Rajomalahy/projet_rna" target="_blank" rel="noopener noreferrer">https://github.com/Rajomalahy/projet_rna</a> </small>
                            </div>
                        </div>
                    </div>
                </section>

                {/* education */}
                <section>
                    <div>
                        <h1 className="mt-10 p-6 text-2xl md:text-3xl font-bold text-gray-800">Educations</h1>
                    </div>
                    <div className=" mt-10 grid grid-cols-1 md:grid-cols-2 gap-4 px-4" >
                        <div className="shadow-xl/20 flex p-6 rounded-xl text-left gap-5" data-aos="zoom-in-up">
                            <div>
                                <img src={mortier} className="h-12 w-12"/>
                            </div>
                            <div>
                                <small className="font-bold text-gray-900">2020</small><br/>
                                <strong>Obtention du Baccalauréat série D </strong>
                                <p className="text-gray-700">Lycée Présentation de Marie Manakara</p>
                            </div>
                        </div>

                        <div className="shadow-xl/20 flex p-6 rounded-xl text-left gap-5" data-aos="zoom-in-up">
                            <div>
                                <img src={mortier} className="h-12 w-12"/>
                            </div>
                            <div>
                                <small className="font-bold text-gray-900">2021-2022</small><br/>
                                <strong>Première année de licence en développement d'application intranet internet</strong>
                                <p className="text-gray-700">Ecole de Management et d'Innovation Technologique</p>
                            </div>
                        </div>

                        <div className="shadow-xl/20 flex p-6 rounded-xl text-left gap-5" data-aos="zoom-in-up">
                            <div>
                                <img src={mortier} className="h-12 w-12"/>
                            </div>
                            <div>
                                <small className="font-bold text-gray-900">2022-2023</small><br/>
                                <strong>Deuscième année de licence en développement d'application intranet internet</strong>
                                <p className="text-gray-700">Ecole de Management et d'Innovation Technologique</p>
                            </div>
                        </div>

                        <div className="shadow-xl/20 flex p-6 rounded-xl text-left gap-5" data-aos="zoom-in-up">
                            <div>
                                <img src={mortier} className="h-12 w-12"/>
                            </div>
                            <div>
                                <small className="font-bold text-gray-900">2023-2024</small><br/>
                                <strong>Troisième année de licence en développement d'application intranet internet</strong>
                                <p className="text-gray-700">Ecole de Management et d'Innovation Technologique</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* expériences */}

                <section className=" mt-15">
                    <div className="p-9">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">Expériences</h1>
                    </div>
                    <div className="flex flex-col lg:flex-row justify-between">
                        <div data-aos="fade-right">
                            <img src={images} className="h-100 w-130" alt="" />
                        </div>
                        <div data-aos="fade-left">
                            <div className="mt-4 max-w-lg text-left">
                            <strong>Juin 2023 - Août 2023 : Conception et réalisation d'une application web pour la gestion du SALEM HOTEL - Marolook Fianarantsoa</strong>
                            <p className="mt-1 text-gray-700 leading-relaxed">Durant ce stage, j'ai eu l'opportunité de développer une application web complète
                                pour la gestion de Salem hôtel. Cette solution a été réalisée en utilisant PHP, Javascript 
                                et le framework bootstrap pour le design responsive.
                                L'application permet d'administrer efficacement les réservations, les chambres, les clients.
                            </p>
                            <small>Langages/Framework : PHP , JavaScript, Bootstrap</small>
                            </div>

                            <div className="mt-6 max-w-lg text-left">
                                <strong>Juin 2024 - Septembre 2024 : Conception et réalisation 
                                d'une application de gestion des menus restaurant ZOMATEL - Zomatel Fianarantsoa </strong>
                                <p className="mt-1 text-gray-700 leading-relaxed">J'ai créer un site web dynamique des menus restaurant en utilisant react et le framwork bootstrap
                                et une application web pour gérer le site avec le framework django
                                </p>
                                <small>Langages/Framework : React, Django, Bootstrap</small>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className='p-6' >
                    <hr className="mt-15"/>
                    <div>
                        <h1 className="mt-5 text-2xl md:text-3xl font-bold text-gray-800">Contact</h1>
                    </div>
                    <div className="mt-5 flex flex-col lg:flex-row justify-center gap-15" >
                        <div className="flex gap-2" >
                            <img src={address} className="h-7 w-7" alt="" />Andrainjato Fianarantsoa
                        </div>
                        <div className="flex gap-2">
                            <img src={phone} className="h-7 w-7" alt="" /> 034 89 684 32 / 034 24 737 13
                        </div>
                        <div className="flex gap-2">
                            <img src={email} className="h-7 w-7" alt="" /> nanncyrato@gmail.com
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}