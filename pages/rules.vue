<template>
  <div class="rules">
    <h1 class="rules__title">
      Правила
    </h1>

    <h3 class="rules__subtitle">
      1. Что это?
    </h3>

    <p class="rules__txt">
      <strong>#GuessPiano</strong> - музыкальная игра, где нужно угадать песню, сыгранную на пианино.
    </p>

    <p class="rules__txt">
      Игра состоит из сезонов. <strong>Топ-5</strong> игроков, набравших наибольшее количество очков в сезоне, получают интересные призы в конце.
    </p>

    <p class="rules__txt">
      Каждый сезон состоит из нескольких серий. В каждой серии нужно угадать <strong>10</strong> песен, сыгранных на пианино.
    </p>

    <h3 class="rules__subtitle">
      2. Как играть?
    </h3>

    <p class="rules__txt">
      Принять участие в игре может любой желающий. Каждая игра проходит в <strong>сториз Instagram</strong> <a href="https://instagram.com/ardier16" rel="noreferrer noopener nofollow" target="_blank">@ardier16</a>.
    </p>

    <p class="rules__txt">
      Обычно игры проходят <strong>на выходных с 21:00</strong>. Оповещения о новой серии можно увидеть в сториз.
    </p>

    <p class="rules__txt">
      Если ты угадал песню, пиши свой вариант в <strong>форму вопросов</strong> сториз. В зависимости от задания (описано в названии формы), нужно написать название песни, ее исполнителя, фильм или сериал, где встречалась эта песня и т.д.
    </p>

    <p class="rules__txt">
      Песни появляются каждые <strong>15 минут</strong>. Ответы принимаются в течение <strong>10 минут</strong> после выхода задания.
    </p>

    <h3 class="rules__subtitle">
      3. Как получить очки?
    </h3>

    <p class="rules__txt">
      У каждой песни есть очки сложности. Они начисляются в зависимости от песни. <strong>Очки</strong> можно узнать в сториз, <strong>над формой задания</strong>.
    </p>

    <p class="rules__txt">
      Чтобы получить очки, нужно отгадать песню, сыгранную в задании и <strong>попасть в первую пятерку угадавших</strong>.
    </p>

    <p class="rules__txt">
      Принимается <strong>любое</strong> правильное выполнение задание (даже если написано с ошибками).
    </p>

    <p class="rules__txt">
      Победитель (первый игрок, который угадал песню) получает <strong>удвоенное количество очков</strong>.
    </p>

    <h3 class="rules__subtitle">
      4. Как узнать свои очки?
    </h3>

    <p class="rules__txt">
      Результаты каждой серии доступны <strong>на этом сайте</strong> внутри каждого сезона (ссылки в меню).
    </p>

    <h3 class="rules__subtitle">
      5. Как посмотреть старые серии?
    </h3>

    <p class="rules__txt">
      Все завершенные серии игры можно посмотреть <strong>в актуальных сториз</strong> <a href="https://instagram.com/ardier16" rel="noreferrer noopener nofollow" target="_blank">@ardier16</a>.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Rules'
}
</script>

<style lang="scss" scoped>
.rules {
  &__title {
    @include typo(h700, medium);

    text-align: center;
    color: color(text-primary);
    font-family: var(--logo-font-family);
    margin-bottom: spacing(700);

    @include respond-to(sm) {
      @include typo(h600, medium);
    }
  }

  &__subtitle {
    @include typo(h500, medium);

    margin: spacing(700) 0 spacing(400);
    color: color(text);
    font-family: var(--logo-font-family);
  }

  &__txt {
    @include typo(h300);

    margin: spacing(500) 0;
    color: color(text);

    a {
      color: color(text-primary);
      font-family: var(--logo-font-family);
    }
  }
}
</style>
