# Oplevering Assessment 4 January 2026

## De applicatie

In de uitgewerkte applicatie zijn er 3 actieve pages waar de gebruiker doorheen kan klikken;
- /events
- /events/{event_id}
- /events/{event_id}/signup

Je start op de "/events" page waar je een overzicht van alle event entries te zien krijgt. Al deze events linken naar bijbehorende "/events/{id}" pagina's waarop je details van het event en een CTA te zien krijgt. Via the CTA knop kom je op een signup form pagina terecht. Hier dien je naam + email op te geven. Er is eenvoudige validatie toegevoegd voor deze velden en een custom validatie zodat elke mail zich maar één keer per event kan registreren. Als het registeren slaagt, gaat de gebruiker terug naar de events page.

De seeder is uitgebreid met het toevoegen van test event data. De toegevoegde database tabellen zijn events en event_signups.

## Toelichting
Om de pagina's een uniforme layout te geven heb ik een front-layout aangemaakt. Ik heb verder niet zoveel tijd gestoken in het daadwerkelijk stylen van deze layout.

Voor de form heb ik Interia's Form gebruikt. Hier had ik nog weinig ervaring mee dus, dit koste wat meer tijd voor met name de custom error afhandeling en het meesturen van de data naar de endpoint.
Hiervoor had ik een EventController willen maken, maar gezien de tijd heb ik dit niet gedaan. Daardoor is de web.php nu volledig verantwoordelijk voor de afhandeling van het form request.

## Verbeteringen
Code cleanup. Er zullen een aantal depencies zijn die overbodig zijn, code conventies heb ik niet zorgvuldig toegepast, opsplitsen van functionaliteit (zoals web.php -> EventController), TypeScript functies uit de html tags halen

Meer gebruikers feedback geven. Bijvoorbeeld het form als modal aanbieden en een notificatie toevoegen op basis van de response.

Het koppelen van users aan events zodat de validatie niet alleen op email gebeurd, voor deze opdracht niet nodig maar lijkt mij een betere manier om gasten te valideren.

Meer tijd steken in styling en responsiveness. Het was lastig gezien de tijd om een uniforme manier van styling toe te passen. Veel styling heb ik on the go toegevoegd waardoor het structuur mist.