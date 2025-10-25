
"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, MapPin, Ticket, Award, Brain, Sparkles, Tv, Users, ChevronRight, HelpCircle, BookOpen, Quote, Check, CheckCircle2 } from 'lucide-react';
import { SocialIcons } from '@/components/layout/social-icons';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';


const HeroSection = () => (
  <section className="relative h-screen w-full flex items-center justify-center text-white">
    <Image
      src="https://echilibrultau.ro/wp-content/uploads/2025/08/about_img-2.jpg"
      alt="Spectacol de hipnoză"
      data-ai-hint="hypnosis show stage"
      fill
      className="object-cover"
      priority
    />
    <div className="absolute inset-0 bg-primary/70" />
    <div className="container mx-auto px-4 text-center z-10">
      <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight drop-shadow-lg">
        Hipnoză<sup className="text-3xl md:text-5xl -top-6">2</sup>
      </h1>
      <h2 className="mt-2 text-xl md:text-2xl font-semibold text-white/90 drop-shadow-md">
        Puterea Minții Dublată de Hipnoză
      </h2>
      <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-white/80 drop-shadow-md">
        Un workshop gratuit urmat de un spectacol unic, unde mintea și curiozitatea se întâlnesc.
      </p>
      
      <Card className="max-w-4xl mx-auto mt-8 bg-black/30 backdrop-blur-sm border-white/20 text-white">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            <div className="flex items-center justify-center gap-2">
              <Calendar className="h-5 w-5 text-gold-accent"/>
              <span className="font-bold">22 Noiembrie</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Clock className="h-5 w-5 text-gold-accent"/>
              <span>Workshop: 18:00 | Spectacol: 21:00</span>
            </div>
             <div className="flex items-center justify-center gap-2">
              <MapPin className="h-5 w-5 text-gold-accent"/>
              <span>Brașov</span>
            </div>
          </div>
           <p className="text-xs text-white/60 mt-4">Locația exactă a workshopului va fi anunțată participanților. Locația spectacolului VIP va fi stabilită în curând.</p>
        </CardContent>
      </Card>
      
      <p className="mt-6 text-base text-white/80">Descoperă hipnoza altfel: știința minții și arta sugestiei într-o singură seară.</p>
      
      <div className="mt-4 text-sm font-semibold text-white/90">
        <p>Andrei Voicu — maestrul hipnozei de scenă din România, finalist iUmor</p>
        <p>Tony Rafailă — psiholog clinician, hipnoterapeut și master trainer NLP</p>
      </div>

       <p className="mt-4 font-headline text-lg italic text-gold-accent drop-shadow-md">
         Doi specialiști, două perspective, o singură experiență: Hipnoză² – când rațiunea și emoția se întâlnesc pentru a crea transformare.
      </p>

      <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
        <Button size="lg" asChild className="bg-white text-primary hover:bg-gray-200 font-bold">
          <Link href="#inscriere-workshop">
            <Ticket className="mr-2"/>
            Participă gratuit la workshop
          </Link>
        </Button>
        <Button size="lg" variant="outline" asChild className="bg-transparent border-gold-accent text-gold-accent hover:bg-gold-accent hover:text-primary font-bold">
          <Link href="#rezerva-vip">
            <Award className="mr-2"/>
            Rezervă loc VIP la spectacol
          </Link>
        </Button>
      </div>
      <p className="mt-8 text-sm text-white/80">„Hipnoză² te poartă dincolo de spectacol – către o experiență autentică a minții și subconștientului.”</p>
    </div>
  </section>
);

const MythsSection = () => {
    const myths = [
        {
            title: "„În hipnoză nu ești conștient de ce se întâmplă.”",
            description: "Fals. Ești perfect conștient, doar mai concentrat și mai receptiv."
        },
        {
            title: "„Hipnotizatorul controlează mintea ta.”",
            description: "Nu. Tu deții întotdeauna controlul – nimeni nu te poate forța să faci ceva împotriva voinței tale."
        },
        {
            title: "„Doar anumite persoane pot fi hipnotizate.”",
            description: "De fapt, oricine are capacitatea naturală de a intra în transă — este o abilitate, nu un talent rar."
        },
        {
            title: "„Hipnoza e periculoasă.”",
            description: "Hipnoza terapeutică este sigură, recunoscută științific și folosită în spitale, psihoterapie și educație."
        },
        {
            title: "„E doar un spectacol.”",
            description: "Spectacolul este doar forma vizibilă. În spate, hipnoza este un proces profund și benefic pentru corp și minte."
        }
    ];

    return (
        <section className="py-16 sm:py-24 bg-background">
            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                    <Image
                        src="https://echilibrultau.ro/wp-content/uploads/2025/08/about_img-2.jpg"
                        alt="Persoană în transă hipnotică"
                        data-ai-hint="hypnosis trance calm"
                        fill
                        className="object-cover"
                    />
                </div>
                <div>
                    <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Ce ai auzit despre hipnoză… și ce se întâmplă de fapt?</h2>
                    <p className="mt-4 text-muted-foreground">Mulți oameni cred că hipnoza înseamnă pierderea controlului, somn profund sau trucuri de scenă. Adevărul este că hipnoza este o stare naturală a minții, pe care o experimentezi zilnic — când te pierzi într-un film, conduci „pe pilot automat” sau visezi cu ochii deschiși. La evenimentul Hipnoză², vei descoperi cum funcționează această stare și cum o poți folosi pentru relaxare, concentrare și transformare personală.</p>
                    <Accordion type="single" collapsible className="w-full mt-6">
                        {myths.map((myth, index) => (
                            <AccordionItem value={`item-${index}`} key={index}>
                                <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">{myth.title}</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">
                                    {myth.description}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                     <div className='mt-6'>
                        <p className='text-muted-foreground'>În workshopul gratuit Hipnoză², vei învăța cum să recunoști starea de transă, să folosești sugestia conștientă pentru a te relaxa și să înțelegi ce se întâmplă „în culisele minții tale”. Iar în spectacolul VIP din aceeași seară, vei vedea aceste mecanisme în acțiune reală, pe scenă.</p>
                     </div>
                     <Button asChild className="mt-8">
                        <Link href="#inscriere-workshop">Participă gratuit și descoperă cum funcționează mintea ta</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
};

const TrainersSection = () => (
    <section className="py-16 sm:py-24 bg-secondary">
        <div className="container mx-auto px-4">
             <div className="text-center mb-12 max-w-3xl mx-auto">
                <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Cine te ghidează în această experiență</h2>
                <p className="mt-4 text-muted-foreground">Într-o lume plină de mituri, Andrei Voicu și Tony Rafailă te conduc într-o seară unde știința și spectacolul devin una. Doi oameni diferiți, uniți de aceeași pasiune: descoperirea potențialului uman prin hipnoză.</p>
            </div>
            <div className="space-y-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="relative w-full h-80 rounded-lg overflow-hidden">
                        <Image src="https://echilibrultau.ro/wp-content/uploads/2025/08/about_img-2.jpg" alt="Andrei Voicu" data-ai-hint="stage hypnotist performer" fill className="object-cover"/>
                    </div>
                    <div>
                        <h3 className="font-headline text-2xl text-primary">Andrei Voicu – Maestrul hipnozei de scenă din România</h3>
                        <p className="text-muted-foreground mt-4">Hipnotist, entertainer și trainer, finalist iUmor, cu mii de spectatori fascinați în România și Europa. De peste un deceniu, Andrei combină arta spectacolului cu principiile psihologiei pentru a arăta publicului cât de ușor mintea poate fi ghidată — și cât de mult control avem, chiar atunci când credem că nu mai avem.</p>
                        <p className="text-muted-foreground mt-2">A adus hipnoza pe scenă cu respect, umor și profesionalism, demonstrând că dincolo de distracție există o știință exactă: sugestia conștientă. La evenimentul Hipnoză², Andrei va susține spectacolul VIP și va arăta live mecanismele fascinante ale minții umane, prin demonstrații reale și experimentale.</p>
                         <Button variant="link" asChild className="p-0 mt-2"><Link href="https://www.youtube.com/@AndreiVoicuHypnosis" target='_blank'>🎬 Vezi demonstrații live de hipnoză pe YouTube</Link></Button>
                    </div>
                </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div className="relative w-full h-80 rounded-lg overflow-hidden md:order-2">
                       <Image src="https://echilibrultau.ro/wp-content/uploads/2025/08/about_img-2.jpg" alt="Tony Rafailă" data-ai-hint="professional psychologist portrait" fill className="object-cover"/>
                    </div>
                    <div className='md:order-1'>
                        <h3 className="font-headline text-2xl text-primary">Tony Rafailă – Psiholog clinician & hipnoterapeut</h3>
                        <p className="text-muted-foreground mt-4">Psiholog clinician, hipnoterapeut și Master Trainer NLP, fondatorul platformei EchilibrulTău.ro. Cu peste 15 ani de experiență în psihoterapie și hipnoză clinică, Tony a ajutat mii de oameni să depășească anxietatea, insomnia, depresia și atacurile de panică.</p>
                        <p className="text-muted-foreground mt-2">El folosește hipnoza ca instrument terapeutic, dar și ca cale spre autocunoaștere și echilibru mental. În cadrul Hipnoză², Tony va explica, demonstra și ghida publicul către înțelegerea științifică a hipnozei. Vei învăța cum sugestiile, atenția și imaginația pot transforma mintea într-un instrument de vindecare.</p>
                        <Button variant="link" asChild className="p-0 mt-2"><Link href="https://www.youtube.com/c/EchilibrulTau" target='_blank'>🎧 Vezi o demonstrație aici: Puterea hipnozei</Link></Button>
                    </div>
                </div>
            </div>
             <div className="text-center mt-16">
                <p className="font-headline text-xl text-primary">Două domenii diferite. O singură misiune comună: Să îți arătăm că hipnoza nu este magie – ci știința minții tale.</p>
                <Button asChild className="mt-4">
                    <Link href="#inscriere-workshop">Participă gratuit la workshopul Hipnoză² - 22 noiembrie, Brașov.</Link>
                </Button>
            </div>
        </div>
    </section>
);

const WorkshopSection = () => {
    const structure = [
        { icon: <Sparkles className="h-6 w-6 text-accent" />, title: "Introducere interactivă – „Hipnoza pe înțelesul tuturor”", description: "Cum se explică științific hipnoza, ce se întâmplă în creier în timpul transei și de ce nu pierzi controlul. Demonstrație scurtă cu publicul – exercițiu de sugestibilitate condus de Andrei Voicu." },
        { icon: <Brain className="h-6 w-6 text-accent" />, title: "Experiența directă – „Intră în starea de transă”", description: "Vei fi ghidat într-un exercițiu simplu de hipnoză și relaxare, condus de Tony Rafailă. Simți cum atenția se schimbă, cum respirația se calmează și cum mintea devine receptivă." },
        { icon: <Tv className="h-6 w-6 text-accent" />, title: "Conexiunea dintre minte și corp", description: "Cum gândurile influențează stările corporale. Exemple din practică: gestionarea durerii, somn, stres, fobii. Tony explică, Andrei demonstrează." },
        { icon: <Users className="h-6 w-6 text-accent" />, title: "Dialog deschis cu participanții", description: "Q&A cu Andrei și Tony – răspunsuri la întrebările tale despre hipnoză, autohipnoză, performanță mentală și aplicații în viața reală." },
        { icon: <Award className="h-6 w-6 text-accent" />, title: "Preview exclusiv – „Ce urmează după workshop”", description: "Anunțul spectacolului VIP din aceeași seară (ora 21:00). Participanții la workshop primesc acces prioritar la biletele VIP și reducere de preț (100 lei în loc de 150)." }
    ]
    const benefits = [
        "înțelege cum funcționează hipnoza, dincolo de mituri;",
        "trăi o experiență de relaxare ghidată;",
        "vedea demonstrații reale, explicate științific;",
        "afla cum îți poți antrena mintea pentru calm, încredere și concentrare;",
        "cunoaște direct doi dintre cei mai experimentați practicieni de hipnoză din România."
    ];

    return (
        <section className="py-16 sm:py-24 bg-background">
            <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
                 <div>
                    <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Ce vei trăi la workshopul gratuit Hipnoză² – între mit și realitate</h2>
                    <p className="mt-4 text-muted-foreground">În doar două ore, vei învăța ce este hipnoza cu adevărat, cum funcționează mintea ta în transă și vei vedea demonstrații live care îți vor schimba perspectiva pentru totdeauna. Totul într-un cadru relaxat, educativ și interactiv, alături de Andrei Voicu și Tony Rafailă.</p>
                     <div className="space-y-4 mt-8">
                        {structure.map((item, index) => (
                             <div key={index} className="flex items-start gap-4">
                                {item.icon}
                                <div>
                                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                 <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-xl">
                    <Image
                        src="https://echilibrultau.ro/wp-content/uploads/2025/08/about_img-2.jpg"
                        alt="Public la un workshop"
                        data-ai-hint="workshop audience smiling"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
             <div className="container mx-auto px-4 mt-16">
                <Card className="bg-secondary p-8">
                    <h3 className="font-headline text-2xl text-primary text-center mb-6">Participând la workshop, vei:</h3>
                    <ul className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                       {benefits.map(benefit => (
                         <li key={benefit} className="flex items-start gap-2 text-muted-foreground">
                            <CheckCircle2 className="h-5 w-5 text-green-accent mt-1 shrink-0"/>
                            <span>{benefit}</span>
                         </li>
                       ))}
                    </ul>
                </Card>
            </div>
             <div className="text-center mt-16">
                 <Button size="lg" asChild>
                    <Link href="#inscriere-workshop">Rezervă-ți locul gratuit acum</Link>
                </Button>
                <p className="text-sm text-muted-foreground mt-2">Participarea este gratuită, dar locurile sunt limitate.</p>
            </div>
        </section>
    );
};

const TestimonialsSection = () => {
    const testimonials = [
        { name: "Radu, 37 ani, Brașov", quote: "Am venit sceptic, am plecat fascinat. Am trăit o stare de relaxare și concentrare imposibil de descris." },
        { name: "Claudia, participantă la spectacolul VIP", quote: "După exercițiul de ancorare, am zâmbit fără motiv. A fost ca un restart emoțional." },
        { name: "Adrian, voluntar Hipnoză²", quote: "Am fost voluntar pe scenă și am simțit sinestezia – un amestec de culori și sunete. Incredibil, dar real." },
        { name: "Mara, participantă workshop + show", quote: "Tony explică exact ce simți în transă, iar Andrei transformă totul într-un spectacol elegant. Două lumi care se completează perfect." }
    ];

    const videos = [
        { title: "Andrei Voicu – Demonstrație live de hipnoză", subtitle: "“Când sugestia devine artă, publicul devine parte din poveste.”"},
        { title: "Tony Rafailă – Hipnoza în terapie", subtitle: "“În spatele oricărui exercițiu de hipnoză există o știință exactă și o intenție pozitivă.”"},
        { title: "Momente live – Sinestezia pe scenă", subtitle: "“Un experiment real, trăit în fața publicului, care arată cât de complexă e percepția umană.”"},
        { title: "Ancorarea stării de bine – exercițiu colectiv", subtitle: "“Un moment colectiv de energie pozitivă – aplauze, emoție, zâmbete.”"}
    ];

    return (
        <section className="py-16 sm:py-24 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Cei care au trăit experiența Hipnoză² povestesc:</h2>
                    <p className="mt-2 text-muted-foreground max-w-2xl mx-auto">Fie că au participat la workshopul gratuit sau la spectacolul VIP, toți au plecat cu ceva real: o stare de bine, o revelație personală sau pur și simplu… cu zâmbetul pe buze.</p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                     <Carousel opts={{ align: "start", loop: true }} className="order-2 lg:order-1">
                        <CarouselContent>
                            {testimonials.map((testimonial, index) => (
                                <CarouselItem key={index}>
                                    <Card className="bg-background m-2">
                                        <CardContent className="p-6">
                                            <Quote className="w-8 h-8 text-accent mb-4" />
                                            <p className="text-muted-foreground italic mb-4">"{testimonial.quote}"</p>
                                            <p className="font-bold text-primary text-right">— {testimonial.name}</p>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-[-1rem]"/>
                        <CarouselNext className="right-[-1rem]"/>
                    </Carousel>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 order-1 lg:order-2">
                        {videos.slice(0, 4).map((video, i) => (
                            <Card key={i} className="bg-background overflow-hidden">
                                <div className="relative aspect-video">
                                    <iframe src="https://www.youtube.com/embed/XouX87ZwsYc" title={video.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full"></iframe>
                                </div>
                                <CardContent className="p-4">
                                    <p className="font-semibold text-sm text-center text-foreground">{video.title}</p>
                                     <p className="text-xs text-center text-muted-foreground mt-1">{video.subtitle}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
                <div className="text-center mt-16">
                    <Button size="lg" asChild>
                        <Link href="#inscriere-workshop">Fii parte din următoarea experiență Hipnoză²</Link>
                    </Button>
                     <p className="mt-2 text-sm text-muted-foreground">Rezervă-ți locul la workshopul gratuit și trăiește hipnoza în direct!</p>
                </div>
            </div>
        </section>
    );
};


export default function LandingHipnozaPage() {
  return (
    <div className="bg-background">
      <HeroSection />
      <MythsSection />
      <TrainersSection />
      <WorkshopSection />
      <TestimonialsSection />
      
      <section id="inscriere-workshop" className="py-24 text-center bg-background scroll-mt-20">
        <div className="container mx-auto px-4 max-w-2xl">
            <HelpCircle className="h-12 w-12 text-primary mx-auto mb-4"/>
            <h2 className="font-headline text-3xl text-primary">💫 Rezervă-ți locul la Hipnoză² – evenimentul care unește știința și spectacolul.</h2>
            <p className="mt-4 text-muted-foreground">În doar câteva ore, vei înțelege cum funcționează hipnoza, o vei experimenta direct și vei trăi o seară unică de descoperire, relaxare și uimire. Participarea la workshopul introductiv este gratuită, iar locurile sunt limitate.</p>
            <Card className='mt-8 text-left p-6'>
                <p className='font-bold text-center text-lg text-primary mb-4'>Formular de înscriere (în curând)</p>
                <p className='text-sm text-muted-foreground text-center'>Revenim în curând cu formularul pentru a-ți rezerva locul gratuit la workshop. Asigură-te că revii pe pagină!</p>
            </Card>
            <div className="mt-6 text-sm text-muted-foreground">
                <p>🔒 Datele tale sunt protejate.</p>
                <p>După înscriere vei primi prin e-mail detaliile de acces la workshop și informații despre spectacolul VIP.</p>
            </div>
            <Card className="mt-8 text-left p-6 bg-secondary">
                 <h3 className="font-bold text-lg text-primary text-center mb-4">Recapitulare eveniment</h3>
                 <p className="text-center text-muted-foreground">🗓️ Data: 22 noiembrie 2025</p>
                 <p className="text-center text-muted-foreground">📍 Locație: Brașov (detaliile exacte vor fi comunicate participanților înscriși)</p>
                 <p className="text-center text-muted-foreground">🕓 Ora: 18:00 – Workshop Gratuit | 21:00 – Spectacol VIP</p>
                 <p className="text-center text-muted-foreground mt-2">🎭 Traineri: Andrei Voicu & Tony Rafailă</p>
                 <div className="flex justify-center gap-4 mt-6">
                    <Button>Înscrie-mă la workshop</Button>
                    <Button variant="outline">Cumpără bilet VIP</Button>
                 </div>
            </Card>
            <div className="mt-8 space-y-2 text-sm text-muted-foreground">
                <p>✅ Eveniment organizat de EchilibrulTău.ro</p>
                <p>✅ Locuri limitate – acces pe bază de înscriere</p>
                <p>✅ Confirmare automată prin e-mail după completarea formularului</p>
            </div>
             <p className="mt-8 font-headline text-xl text-primary">„Totul începe cu o singură decizie: să-ți explorezi propria minte.”</p>
             <p className="mt-1 text-muted-foreground">Te așteptăm la Hipnoză² – Puterea Minții Dublată de Hipnoză.</p>
        </div>
      </section>
      
      <section id="rezerva-vip" className="py-24 text-center bg-secondary scroll-mt-20">
        <div className="container mx-auto px-4">
             <BookOpen className="h-12 w-12 text-primary mx-auto mb-4"/>
            <h2 className="font-headline text-3xl text-primary">Planuri bilete spectacol VIP (în curând)</h2>
            <p className="mt-2 text-muted-foreground max-w-xl mx-auto">Opțiunile pentru biletele la spectacolul exclusiv vor fi disponibile aici pentru achiziționare.</p>
        </div>
      </section>
      
      <footer className="py-16 bg-primary text-primary-foreground/80">
          <div className="container mx-auto px-4 text-center text-sm">
            <h3 className="font-bold text-white mb-2">Evenimentul Hipnoză² – Puterea Minții Dublată de Hipnoză este o inițiativă comună a psihologului Tony Rafailă și hipnotistului Andrei Voicu, realizată sub egida EchilibrulTău.ro.</h3>
            <p>O seară care unește știința, arta și curajul de a privi dincolo de aparențe.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 text-left">
                <div>
                    <h4 className='font-bold text-white'>Organizatori:</h4>
                    <p>Echilibrul Tău – Psiholog clinician Tony Rafailă</p>
                    <p>🌐 www.echilibrultau.ro | 📧 contact@echilibrultau.ro | 📞 0736 030 309</p>
                    <p className='mt-2'>Andrei Voicu – Hipnotist, Trainer & Entertainer</p>
                     <p>🎭 YouTube – Andrei Voicu | 📷 Instagram / Facebook: @AndreiVoicuHypnosis</p>
                </div>
                 <div>
                    <h4 className='font-bold text-white'>Parteneri & colaboratori:</h4>
                    <p>EchilibrulTău.ro, Academia de Hipnoză, Asociația Română de Hipnoză, Evenimente Brașov</p>
                </div>
            </div>
            
            <h4 className="font-bold text-white mb-4">Urmărește-ne:</h4>
            <SocialIcons className="bg-transparent pt-0 pb-4" />
             <p className="mt-2">💫 Fii parte din comunitatea celor care descoperă puterea minții. Urmărește-ne pentru clipuri, exerciții și viitoarele ediții Hipnoză².</p>
            
            <div className='border-t border-primary-foreground/20 mt-8 pt-8'>
                <p className="text-xs">⚖️ Disclaimer legal: Evenimentul Hipnoză² are scop educațional și demonstrativ. Exercițiile prezentate sunt sigure, non-invazive și nu substituie tratamentul medical sau psihoterapeutic. Participarea este voluntară și presupune acceptarea condițiilor de desfășurare anunțate la începutul evenimentului.</p>
                <p className="text-xs mt-4">&copy; 2025 EchilibrulTău.ro – Toate drepturile rezervate. Design & concept creat împreună cu EchilibrulTău Creative Lab.</p>
                 <p className="font-headline text-base mt-4 text-gold-accent">🌀 Hipnoză² – Două perspective, o singură experiență.</p>
            </div>
          </div>
      </footer>
    </div>
  );
}

    
