<template>
  <TestHeader v-show="!testIsStarting" :title="title" @showTest="showTest" />
  <Test v-show="testIsStarting" :task="task" :words="words" />
</template>

<script>
import Test from '../components/Test';
import TestHeader from '../components/TestHeader';

export default {
  name: '3PersonSingularPrasens',
  components: {
    Test,
    TestHeader,
  },
  data() {
    return {
      testIsStarting: false,
      title: '3. Person Singular Präsens',
      task: 'Schreiben Sie 3. Person Singular Präsens von',
      words: {
        abfahren: 'er fährt ab', // отъезжать
        abgeben: 'er gibt ab', // отдавать
        abholen: 'er holt ab', // забирать
        ablegen: 'er legt ab', // положить кудв-то
        ablehnen: 'er lehnt ab', // отказать
        ablesen: 'er liest ab', // читать, но делать вид что говоришь; считывать
        abmelden: 'er meldet ab', // отписаться, сообщить об уходе
        abschließen: 'er schließt ab', // закончить школу, университет; закрыть дверь
        abstellen: 'er stellen ab', // поставить на землю, что-то большое(машина/велосипед), если что-то носишь; выключить
        anbieten: 'er bietet an', // предлагать; угощать
        anklicken: 'er klickt an', // нажимать
        ankommen: 'er kommt an', // прибывать в какое-то время
        ankreuzen: 'er kreuzt an', // отметиь (например в тесте)
        aufrufen: 'er ruft auf', // вызвать; открыть страницу в интернете
        aufschließen: 'er scliesßt auf', // открыть замок, отпирать
        ausblenden: 'er blendet aus', // спрятать (например баннер на сайте), сделать невидимым
        ausfallen: 'er fällt aus', // отменяться из-за поломки
        ausführen: 'er führt aus', // выполнить (программу, спортивное задание, движение, команду)
        ausgeben: 'er gibt aus', // отдавать деньги; заплатить за всех в баре
        aussehen: 'er sieht aus', // выглядеть
        aussteigen: 'er steigt aus', // сойти с поезда, вылезти из машины
        aussuchen: 'er sucht aus', // выбрать
        ausziehen: 'er zieht aus', // выехать (с квартиры)
        beachten: 'er beachtet', // обращать внимание
        beantragen: 'er beantragt', // подавать заявление
        bearbeiten: 'er bearbeitet', // поменять, править, редактировать
        'sich bedanken': 'er bedankt sich', // благодарить
        bedeutet: 'es bedeutet', // значить
        bedienen: 'er bedient', // обслуживать
        'sich beeilen': 'erbeeilt sich', // торопиться
        beenden: 'er beendet', // заканчивать
        begründen: 'er begründet', // объяснить, доказать
        beraten: 'er berät', // советовать
        besichtigen: 'er besichtigt', // посещать, осматривать
        bestellen: 'er bestellt', // заказать
        bitten: 'er bittet', // просить
        buchen: 'er bucht', // забронировать
      },
    };
  },
  methods: {
    showTest() {
      this.testIsStarting = true;
    },
  },
};
</script>
