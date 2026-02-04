# Daymakers Assessment January 2026

Het doel van dit assessment is inzicht te krijgen in je backend- en frontend vaardigheden. Perfect design is niet het
uitgangspunt; we kijken vooral naar de structuur van de applicatie, de consistentie van de code en de keuzes die je
maakt.

Het gaat er niet om hoeveel je binnen een tijd kunt bouwen, maar hoe je prioriteiten stelt en afwegingen maakt.De stack bestaat uit Laravel voor de backend, Inertia.js en React voor de frontend, en Tailwind en/of (S)CSS voor
styling.

## De opdracht

Bouw een kleine event website waarop een gebruiker een event kan bekijken en zich kan registreren.

Een event bevat:
- titel 
- subtitel 
- beschrijving 
- start- en einddatum 
- locatie 
- hero-afbeelding 

De publieke eventpagina is bereikbaar via /events/{slug} en bevat:
- een hero-sectie met afbeelding, titel en subtitel 
- event informatie (datum en locatie) 
- een content sectie met de beschrijving 
- een call-to-action button 

De layout moet responsive zijn voor desktop en mobiel, met een duidelijke visuele hiërarchie, consistente spacing en
typografie. Pixel-perfect design is niet nodig, maar de layout moet logisch en verzorgd zijn.

Voor registratie is het voldoende dat een gebruiker zich kan aanmelden met naam en e-mailadres.

## Technische verwachtingen
- Frontend: een duidelijke componentstructuur in React, waarbij data via Inertia wordt doorgegeven 
- Backend: een netjes opgezet datamodel met migrations, validatie, slug-generatie en image handling 

Vanwege de tijd is het niet nodig een CMS te bouwen. Data mag bijvoorbeeld via SQL seed/inserts worden toegevoegd.

## Oplevering

De oplevering bestaat uit:
- een werkende applicatie 
- een korte README waarin je:  
  - de applicatie en werking beschrijft 
  - je gemaakte keuzes toelicht (met name frontend en CSS) 
  - aangeeft wat je met meer tijd zou verbeteren of uitbreiden 

## Beoordeling

We beoordelen op:
- codekwaliteit en het volgen van gangbare conventies 
- frontend opzet en componentstructuur 
- CSS en stylingkeuzes 
- leesbaarheid van de code 
- reflectie op gemaakte keuzes 

Het is niet erg als niet alles perfect werkt of volledig is uitgewerkt. Het doel is een goed beeld te krijgen van hoe je
codeert en hoe je tot beslissingen komt. Houd je strikt aan de maximale tijd van 8 uur.

## Startpunt

Om je op weg te helpen is deze voorbeeld repository beschikbaar met de basisstructuur van Laravel 12, Inertia en React.
Hier kan je een fork van maken:

https://github.com/FX-Agency/assesment-daymakers 
