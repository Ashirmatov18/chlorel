import React from "react";
import styles from "../../styles/Paralllax.module.css";
import first from "../../public/images/first.jpg";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original:
      "https://images.pexels.com/photos/1153370/pexels-photo-1153370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    thumbnail:
      "https://images.pexels.com/photos/1153370/pexels-photo-1153370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Полезный напиток для вашего хорошего самочувствия. Диетическая добавка из суспензии хлореллы может быть рекомендована как источник биологически активных веществ, в частности аминокислот, витаминов, микроэлементов. Способствует улучшению пищеварения, выведению токсичных веществ из организма, замедлению процесса старения и укреплению иммунитета. Также добавку диетическую из суспензии хлореллы рекомендуют употреблять во время санаторно-курортного и реабилитационного лечения.Диетическая добавка из суспензии хлореллы может быть рекомендована как источник биологически активных веществ, в частности аминокислот, витаминов, микроэлементов. Способствует улучшению пищеварения, выведению токсичных веществ из организма, замедлению процесса старения и укреплению иммунитета. Также добавку диетическую из суспензии хлореллы рекомендуют употреблять во время санаторно-курортного и реабилитационного лечения.Применяют для очищения организма от токсинов, тяжелых металлов и радионуклидов; насыщение важными витаминами, а также микро- и микроэлементами; улучшение процессов обмена веществ в организме; укрепление иммунитета; восстановление организма при реабилитации после травм и тяжелых заболеваний; хлорелла полезна во время эпидемиологической нестабильности, когда высок риск вирусных заболеваний.",
    orginalTitle: "Полезный напиток для вашего хорошего самочувствия",
    originalClass: "featured-slide",
  },

  {
    original:
      "https://images.pexels.com/photos/6874481/pexels-photo-6874481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    thumbnail:
      "https://images.pexels.com/photos/6874481/pexels-photo-6874481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Отличное удобрение и стимулятор роста для растений.Хлорелла – отличное зеленое удобрение. Применяя его для полива растений можно уменьшить расход минеральных и органических удобрений. Водоросли в составе почвы выделяют в окружающую среду кислород. Из их отмерших останков образуется органическое вещество почвы, что повышает его плодородие. Поэтому массовое размножение почвенных водорослей – цветение почвы, которое наблюдают чаще всего весной или осенью, считают приметой хорошего урожая.Фермерское хозяйство «У Самвела» предлагает биотехнологию для растениеводства штаммом Chlorella vulgaris ИФР № С-111 «Комплексная реабилитация, восстановление плодородного слоя почв путем вселения живой микроводоросли Chlorella vulgaris в виде суспензии в традиционных и биологических системах выращивания сельскохозяйственных",
  },
  {
    original:
      "https://images.pexels.com/photos/2255459/pexels-photo-2255459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    thumbnail:
      "https://images.pexels.com/photos/2255459/pexels-photo-2255459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      'Питатель для животных, птиц, рыб и улиток.Фермерское хозяйство "У Самвела" и научно-производственная компания "Живая Хлорелла" предлагает программу "Хлорелла - интенсивное животноводство". Главным аргументом в пользу применения хлореллы в качестве кормовой добавки в животноводстве является высокая экономическая эффективность по сравнению со всеми существующими аналогами. Областью применения хлореллы являются все направления животноводства: от пчел и тутового шелкопряда, рыб и птиц до звероводства, свиноводства и КРС.',
  },
  {
    original:
      "https://images.pexels.com/photos/4588946/pexels-photo-4588946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    thumbnail:
      "https://images.pexels.com/photos/4588946/pexels-photo-4588946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Хлорелла в пчеловодстве.Хлорелла ценный корм и биостимулятор в пчеловодстве. Благодаря уникальному аминокислотному составу самой хлореллы и продуктов ее синтеза, продуцируемым в питательную среду для водоросли, хлорелла является естественным иммуностимулятором и пробиотиком с широким спектром лечебно-профилактических свойств, что делает ее перспективной для использования в области пчеловодства.В лаборатории технологических и специальных мероприятий по профилактике болезней пчел ННЦ «Институт пчеловодства имени П.И. Прокоповича», двукратное скармливание пчелам, изолированным в садики, при лабораторных условиях суспензии «Живой хлореллы» с сахарным сиропом в концентрациях 1-10% позволяет увеличить продолжительность жизни пчел на 14-20%. Результаты опыта при естественных условиях на пчелиных семьях по определению привлекательности для пчел скармливания водной суспензии хлореллы в 4-х концентрациях (10, 20, 50 и 100%) из-за поилки весной по сравнению с контролем (чистой водой из городской водопроводной сети) показали, что все из исследованных концентраций хлореллы привлекательны для пчел ранней весной в период активного размножения пчел и потребности в белковом корме, особенно при слабом его поступлении из природных пыльценосов, обусловленных погодными условиями или другими факторами. Ранней весной до начала активного цветения пыльценосов пчелами были выпиты воды с хлорелой в зависимости от варианта опыта 124-340%, что больше в 1,24 – 3,4 раза по сравнению с чистой водой из городской водопроводной сети (контроль – 100%). При этом лучшие результаты показали скармливание суспензии хлореллы в 50% концентрации (255-340%) по сравнению с контролем.",
  },
  {
    original:
      "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    thumbnail:
      "https://images.pexels.com/photos/414837/pexels-photo-414837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Хлорелла в окружающей среде.Биотехнология Фермерского хозяйства «У Самвела» – это комплексный подход к проблеме оздоровления окружающей среды, позволяющий сделать экологическими процессы очистки загрязненных водоемов, сточных вод и почв. В настоящее время данная биотехнология применяется на водоемах рыбохозяйственного назначения и полях хозяйств во всех географических зонах Украины. Современные биотехнологии ФГ «У Самвела» применяют для улучшения качества воды экосистем водоемов и почв с помощью биологического метода путем вселения в водоем альголизанта в виде планктонных штаммов микроводорослей хлореллы (Chlorella vulgaris ИФР № С-111). Также мы понимаем важность решения экологических проблем нашей промышленности и существующих социальных социальных конфликтов в экологической сфере с общинами. Поэтому наше сотрудничество может обеспечить кроме всего формирования социального капитала таких предприятий через полное решение экологической проблематики, а также обеспечить стабильную работу их через внедрение биологических экологически безопасных технологий и ресурсоэффективного чистого производства.",
  },
];

export default function Parallaxx() {
  return (
    <>
      <ImageGallery items={images} showPlayButton={false} />
    </>
  );
}
